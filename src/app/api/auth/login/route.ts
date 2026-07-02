import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { origin } = new URL(request.url);
  
  const clientId = process.env.GOOGLE_CLIENT_ID;
  if (!clientId) {
    console.error("Missing GOOGLE_CLIENT_ID env variable");
    return NextResponse.redirect(`${origin}/auth/error`);
  }

  // URI de redireccionamiento bajo nuestro propio dominio
  const redirectUri = `${origin}/api/auth/callback/google`;
  
  // URL de autorización directa de Google
  const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?` + 
    `client_id=${encodeURIComponent(clientId)}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&response_type=code` +
    `&scope=openid%20profile%20email` +
    `&prompt=select_account`;

  return NextResponse.redirect(googleAuthUrl);
}
