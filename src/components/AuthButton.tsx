"use client";

import { useAuth } from "@/context/AuthContext";
import { useLanguage } from "@/i18n/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import { LogOut, User, GraduationCap } from "lucide-react";
import { useState } from "react";

/**
 * Ícono SVG oficial de Google (colores reales).
 */
function GoogleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-4 h-4 flex-shrink-0"
      aria-hidden="true"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

/**
 * Botón de autenticación con Google.
 * - Si el usuario NO está autenticado: muestra botón "Iniciar sesión con Google".
 * - Si el usuario SÍ está autenticado: muestra su avatar/nombre con menú para cerrar sesión.
 */
export function AuthButton() {
  const { user, isLoading, signInWithGoogle, signOut } = useAuth();
  const { t, language } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [signingIn, setSigningIn] = useState(false);

  const handleSignIn = async () => {
    setSigningIn(true);
    await signInWithGoogle();
    setSigningIn(false);
  };

  // Mientras carga, mostrar un placeholder
  if (isLoading) {
    return (
      <div className="w-8 h-8 rounded-full bg-pch-card border border-pch-border animate-pulse" />
    );
  }

  // Usuario autenticado
  if (user) {
    const avatarUrl = user.user_metadata?.avatar_url as string | undefined;
    const displayName =
      (user.user_metadata?.full_name as string | undefined) ??
      user.email?.split("@")[0] ??
      "Usuario";

    return (
      <div className="relative">
        <button
          id="auth-user-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center gap-2 p-1 rounded-full border border-pch-border bg-pch-card hover:bg-pch-input transition-colors cursor-pointer"
          aria-label="Menú de usuario"
          aria-expanded={menuOpen}
        >
          {avatarUrl ? (
            <Image
              src={avatarUrl}
              alt={displayName}
              width={28}
              height={28}
              className="rounded-full"
            />
          ) : (
            <div className="w-7 h-7 rounded-full bg-pch-primary flex items-center justify-center">
              <User className="w-3.5 h-3.5 text-white" />
            </div>
          )}
          <span className="text-xs font-semibold text-foreground dark:text-white pr-2 hidden sm:block max-w-[100px] truncate">
            {displayName.split(" ")[0]}
          </span>
        </button>

        {/* Dropdown menu */}
        {menuOpen && (
          <>
            {/* Overlay para cerrar el menú */}
            <div
              className="fixed inset-0 z-20"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
            <div
              id="auth-user-dropdown"
              className="absolute right-0 mt-2 w-56 bg-pch-card border border-pch-border rounded-2xl shadow-2xl z-30 overflow-hidden"
            >
              {/* Info del usuario */}
              <div className="px-4 py-3 border-b border-pch-border">
                <p className="text-xs font-semibold text-foreground dark:text-white truncate">
                  {displayName}
                </p>
                <p className="text-xs text-foreground/50 truncate mt-0.5">
                  {user.email}
                </p>
              </div>
              {/* Mis Cursos */}
              <Link
                href="/dashboard"
                onClick={() => setMenuOpen(false)}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm text-foreground dark:text-white hover:bg-pch-input transition-colors"
              >
                <GraduationCap className="w-4 h-4 flex-shrink-0 text-pch-primary" />
                {language === "es" ? "Mis Cursos" : "My Courses"}
              </Link>
              {/* Cerrar sesión */}
              <button
                id="auth-signout-btn"
                onClick={() => {
                  setMenuOpen(false);
                  signOut();
                }}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-500 hover:bg-red-500/10 transition-colors"
              >
                <LogOut className="w-4 h-4 flex-shrink-0" />
                {t.auth.signOut}
              </button>
            </div>
          </>
        )}
      </div>
    );
  }

  // Usuario no autenticado
  return (
    <button
      id="auth-google-signin-btn"
      onClick={handleSignIn}
      disabled={signingIn}
      className={`
        flex items-center gap-2 px-3 py-2 rounded-xl
        border border-pch-border bg-pch-card
        text-xs font-semibold text-foreground dark:text-white
        hover:bg-pch-input hover:border-pch-primary/50
        transition-all duration-200 cursor-pointer
        disabled:opacity-60 disabled:cursor-not-allowed
        shadow-sm hover:shadow-md
      `}
      aria-label={t.auth.signIn}
    >
      {signingIn ? (
        <div className="w-4 h-4 border-2 border-pch-primary border-t-transparent rounded-full animate-spin" />
      ) : (
        <GoogleIcon />
      )}
      <span className="hidden sm:block">{t.auth.signIn}</span>
    </button>
  );
}
