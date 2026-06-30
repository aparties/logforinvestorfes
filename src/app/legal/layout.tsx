import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal — logforinvestor.com",
};

const legalLinks = [
  { href: "/legal/privacy", label: "Privacy Policy" },
  { href: "/legal/terms", label: "Terms of Service" },
  { href: "/legal/refunds", label: "Refund Policy" },
];

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="w-full border-b border-pch-border">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-foreground dark:text-white"
          >
            log<span className="text-pch-primary">forinvestor</span>.com
          </Link>
          <nav className="flex items-center gap-4 text-xs text-foreground/60">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-pch-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">{children}</main>

      {/* Footer */}
      <footer className="border-t border-pch-border mt-auto">
        <div className="max-w-4xl mx-auto px-6 py-6 text-center text-xs text-foreground/40">
          <p>
            © {new Date().getFullYear()} logforinvestor.com — Armando Fiestas. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 mt-2">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-pch-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
