"use client";

import { useEffect, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Sun, Moon, LogOut } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import Link from "next/link";

type DashboardLayoutProps = {
  children: ReactNode;
};

/**
 * Layout del área privada del alumno.
 * Redirige a la landing si el usuario no está autenticado.
 */
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { user, isLoading, signOut } = useAuth();
  const { theme, setTheme } = useTheme();
  const { t, language, setLanguage } = useLanguage();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/");
    }
  }, [user, isLoading, router]);

  // Mientras verifica la sesión
  if (isLoading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-2 border-pch-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-foreground/50 text-sm">Verificando acceso...</p>
        </div>
      </div>
    );
  }

  const avatarUrl = user.user_metadata?.avatar_url as string | undefined;
  const displayName =
    (user.user_metadata?.full_name as string | undefined) ??
    user.email?.split("@")[0] ??
    "Usuario";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header del Dashboard */}
      <header className="w-full border-b border-pch-border sticky top-0 z-10 bg-background/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="logforinvestor logo"
              width={28}
              height={28}
              className="dark:brightness-200"
            />
            <span className="text-lg font-bold tracking-tight text-[#0b241c] dark:text-white hidden sm:block">
              log<span className="text-pch-primary">forinvestor</span>.com
            </span>
          </Link>

          {/* Controles */}
          <div className="flex items-center gap-3">
            {/* Language switcher */}
            <div className="flex items-center gap-1 border border-pch-border rounded-full p-1 bg-pch-card">
              <button
                onClick={() => setLanguage("en")}
                className={`text-xs font-bold px-2.5 py-1 rounded-full transition-colors ${language === "en" ? "bg-pch-primary text-white dark:text-[#0b241c]" : "text-[#0b241c] dark:text-white"}`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("es")}
                className={`text-xs font-bold px-2.5 py-1 rounded-full transition-colors ${language === "es" ? "bg-pch-primary text-white dark:text-[#0b241c]" : "text-[#0b241c] dark:text-white"}`}
              >
                ES
              </button>
            </div>

            {/* Theme toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full border border-pch-border bg-pch-card text-foreground hover:bg-pch-input transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-white" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            {/* Avatar + Sign out */}
            <div className="flex items-center gap-2 border border-pch-border rounded-full pl-1 pr-3 py-1 bg-pch-card">
              {avatarUrl ? (
                <Image
                  src={avatarUrl}
                  alt={displayName}
                  width={26}
                  height={26}
                  className="rounded-full"
                />
              ) : (
                <div className="w-6 h-6 rounded-full bg-pch-primary flex items-center justify-center">
                  <span className="text-xs font-bold text-white">
                    {displayName[0].toUpperCase()}
                  </span>
                </div>
              )}
              <span className="text-xs font-semibold text-[#0b241c] dark:text-white hidden sm:block">
                {displayName.split(" ")[0]}
              </span>
            </div>

            <button
              id="dashboard-signout-btn"
              onClick={signOut}
              className="flex items-center gap-2 px-3 py-2 rounded-xl border border-red-500/30 text-red-400 hover:bg-red-500/10 text-xs font-semibold transition-colors"
              aria-label={t.auth.signOut}
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:block">{t.auth.signOut}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Contenido de la página */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-10">
        {children}
      </main>
    </div>
  );
}
