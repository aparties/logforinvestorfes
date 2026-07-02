import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");

  if (!code) {
    console.error("No authorization code provided from Google");
    return NextResponse.redirect(`${origin}/auth/error`);
  }

  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    console.error("Missing Google credentials in env variables");
    return NextResponse.redirect(`${origin}/auth/error`);
  }

  try {
    // Intercambiar el código de autorización por los tokens de Google (incluyendo el id_token)
    const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: `${origin}/api/auth/callback/google`,
        grant_type: "authorization_code",
      }),
    });

    const googleTokens = await tokenResponse.json();

    if (!tokenResponse.ok || !googleTokens.id_token) {
      console.error("Failed to exchange code for Google tokens:", googleTokens);
      return NextResponse.redirect(`${origin}/auth/error`);
    }

    // Iniciar sesión en Supabase usando el id_token de Google
    const supabase = await createClient();
    const { error } = await supabase.auth.signInWithIdToken({
      provider: "google",
      token: googleTokens.id_token,
    });

    if (error) {
      console.error("Supabase authentication via ID Token failed:", error.message);
      return NextResponse.redirect(`${origin}/auth/error`);
    }

    // Redireccionar al dashboard después del login exitoso
    return NextResponse.redirect(`${origin}/dashboard`);
  } catch (err) {
    console.error("Internal Server Error in Google Auth Callback:", err);
    return NextResponse.redirect(`${origin}/auth/error`);
  }
}
