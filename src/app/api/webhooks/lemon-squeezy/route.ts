import { NextResponse } from "next/server";
import crypto from "crypto";
import { createAdminClient } from "@/lib/supabase/admin";

export async function POST(request: Request) {
  const rawBody = await request.text();
  const signature = request.headers.get("x-signature") || "";
  const secret = process.env.LEMON_SQUEEZY_WEBHOOK_SECRET;

  if (!secret) {
    console.error("Missing LEMON_SQUEEZY_WEBHOOK_SECRET env variable");
    return NextResponse.json(
      { error: "Webhook secret is not configured" },
      { status: 500 }
    );
  }

  // 1. Verificar firma de Lemon Squeezy
  const hmac = crypto.createHmac("sha256", secret);
  const digest = hmac.update(rawBody).digest("hex");

  const digestBuffer = Buffer.from(digest, "hex");
  const signatureBuffer = Buffer.from(signature, "hex");

  if (
    digestBuffer.length !== signatureBuffer.length ||
    !crypto.timingSafeEqual(digestBuffer, signatureBuffer)
  ) {
    console.warn("Invalid signature for Lemon Squeezy webhook");
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  // 2. Parsear el cuerpo de la petición
  let payload;
  try {
    payload = JSON.parse(rawBody);
  } catch (err) {
    console.error("Failed to parse JSON body:", err);
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const eventName = payload.meta?.event_name;
  const orderId = payload.data?.id;
  const customData = payload.meta?.custom_data || {};
  const userId = customData.user_id;
  const courseId = customData.course_id || "basic";

  console.log(`Received Lemon Squeezy webhook event "${eventName}" for order ${orderId}`);

  if (!orderId) {
    return NextResponse.json({ error: "Missing order ID" }, { status: 400 });
  }

  const supabase = createAdminClient();

  // 3. Procesar eventos de Lemon Squeezy
  if (eventName === "order_created") {
    const status = payload.data?.attributes?.status;
    
    // Solo matricular si el pago fue exitoso
    if (status !== "paid") {
      console.log(`Order ${orderId} has status ${status}, skipping enrollment.`);
      return NextResponse.json({ message: `Order status is ${status}` });
    }

    if (!userId) {
      console.error(`Missing user_id in custom_data for order ${orderId}`);
      return NextResponse.json({ error: "Missing user_id in custom_data" }, { status: 400 });
    }

    console.log(`Creating active enrollment for user ${userId} and course ${courseId}`);

    const { error } = await supabase.from("enrollments").upsert(
      {
        user_id: userId,
        course_id: courseId,
        lemon_order_id: String(orderId),
        status: "active",
        enrolled_at: new Date().toISOString(),
      },
      {
        onConflict: "lemon_order_id",
      }
    );

    if (error) {
      console.error(`Error inserting enrollment for order ${orderId}:`, error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, action: "enrollment_created" });
  } 
  
  if (eventName === "order_refunded") {
    console.log(`Refunding enrollment for order ${orderId}`);

    const { error } = await supabase
      .from("enrollments")
      .update({ status: "refunded" })
      .eq("lemon_order_id", String(orderId));

    if (error) {
      console.error(`Error refunding enrollment for order ${orderId}:`, error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, action: "enrollment_refunded" });
  }

  // Otros eventos que no procesamos pero respondemos exitosamente
  return NextResponse.json({ message: `Event ${eventName} ignored` });
}
