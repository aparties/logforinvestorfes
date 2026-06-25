"use client";

import Link from "next/link";
import { AlertCircle } from "lucide-react";

/**
 * Página de error de autenticación.
 * Se muestra cuando el flujo OAuth falla por alguna razón.
 */
export default function AuthErrorPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <div className="w-full max-w-md text-center space-y-6">
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center">
            <AlertCircle className="w-8 h-8 text-red-500" />
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            Error de autenticación
          </h1>
          <p className="mt-2 text-sm text-foreground/60">
            Hubo un problema al iniciar sesión con Google. Por favor intenta de
            nuevo.
          </p>
        </div>
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-xl bg-pch-primary text-white text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
