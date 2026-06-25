import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

/**
 * Route Handler para el callback OAuth de Supabase/Google.
 * Supabase redirige aquí con un `code` después de que el usuario
 * autoriza en Google. Este handler lo intercambia por una sesión.
 */
export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  // Ruta a la que redirigir tras el login exitoso
  const next = searchParams.get("next") ?? "/";

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  // Si hay error, redirigir a la página de error de auth
  return NextResponse.redirect(`${origin}/auth/error`);
}
