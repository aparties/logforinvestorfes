import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — logforinvestor.com",
  description: "Privacy Policy for logforinvestor.com educational platform.",
};

const LAST_UPDATED = "June 29, 2025";
const OWNER = "Armando Fiestas Anton";
const EMAIL = "footballexchangesystems@gmail.com";
const SITE = "logforinvestor.com";

export default function PrivacyPolicyPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground dark:text-white mb-2">
          Privacy Policy
        </h1>
        <p className="text-foreground/50 text-sm">Last updated: {LAST_UPDATED}</p>
      </div>

      <Section title="1. Introduction">
        <p>
          Welcome to <strong>{SITE}</strong> ("we", "us", "our"), operated by{" "}
          <strong>{OWNER}</strong>, domiciled in Peru. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your information
          when you visit our website{" "}
          <a href={`https://${SITE}`} className="text-pch-primary hover:underline">
            https://{SITE}
          </a>{" "}
          and use our educational services.
        </p>
        <p>
          By accessing or using our service, you agree to the collection and use
          of information in accordance with this policy. If you disagree with any
          part of these terms, please do not use our services.
        </p>
      </Section>

      <Section title="2. Information We Collect">
        <h3 className="text-lg font-semibold text-foreground dark:text-white mt-4 mb-2">
          2.1 Information You Provide Directly
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-foreground/80">
          <li>
            <strong>Google Account Data:</strong> When you sign in with Google,
            we receive your name, email address, and profile picture provided by
            Google OAuth 2.0.
          </li>
          <li>
            <strong>Payment Information:</strong> When you purchase a course,
            payment data is processed exclusively by{" "}
            <strong>Lemon Squeezy</strong> (our Merchant of Record). We do not
            store credit card numbers or sensitive payment details.
          </li>
        </ul>

        <h3 className="text-lg font-semibold text-foreground dark:text-white mt-4 mb-2">
          2.2 Information Collected Automatically
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-foreground/80">
          <li>
            <strong>Usage Data:</strong> Pages visited, time spent, browser
            type, operating system, and referring URLs.
          </li>
          <li>
            <strong>Video Streaming Data:</strong> Video playback events are
            processed by <strong>Bunny.net</strong> for delivery and analytics
            purposes.
          </li>
        </ul>
      </Section>

      <Section title="3. How We Use Your Information">
        <ul className="list-disc pl-6 space-y-2 text-foreground/80">
          <li>To authenticate your identity and manage your account.</li>
          <li>To grant and verify access to purchased educational content.</li>
          <li>To process transactions through Lemon Squeezy.</li>
          <li>To deliver video course content through Bunny.net.</li>
          <li>
            To send transactional emails related to your purchase (receipt,
            access confirmation).
          </li>
          <li>
            To improve our website and services based on aggregated usage data.
          </li>
        </ul>
      </Section>

      <Section title="4. Third-Party Services">
        <p>
          We use the following third-party services, each with their own privacy
          policies:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-foreground/80 mt-2">
          <li>
            <strong>Google OAuth:</strong> Authentication provider.{" "}
            <a
              href="https://policies.google.com/privacy"
              className="text-pch-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Privacy Policy
            </a>
          </li>
          <li>
            <strong>Supabase:</strong> Database and authentication backend hosted
            in compliance with GDPR.{" "}
            <a
              href="https://supabase.com/privacy"
              className="text-pch-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Supabase Privacy Policy
            </a>
          </li>
          <li>
            <strong>Lemon Squeezy:</strong> Payment processor and Merchant of
            Record. Handles all payment data, VAT, and refunds.{" "}
            <a
              href="https://www.lemonsqueezy.com/privacy"
              className="text-pch-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lemon Squeezy Privacy Policy
            </a>
          </li>
          <li>
            <strong>Bunny.net:</strong> Video streaming and CDN delivery.{" "}
            <a
              href="https://bunny.net/privacy"
              className="text-pch-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bunny.net Privacy Policy
            </a>
          </li>
          <li>
            <strong>Vercel:</strong> Website hosting infrastructure.{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              className="text-pch-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel Privacy Policy
            </a>
          </li>
        </ul>
      </Section>

      <Section title="5. Data Retention">
        <p>
          We retain your personal data for as long as your account is active or
          as needed to provide services. If you delete your account, we will
          delete your data within 30 days, except where we are legally required
          to retain it (e.g., for tax compliance purposes, which Lemon Squeezy
          manages as Merchant of Record).
        </p>
      </Section>

      <Section title="6. Your Rights">
        <p>
          Depending on your jurisdiction, you may have the following rights
          regarding your personal data:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-foreground/80 mt-2">
          <li>
            <strong>Access:</strong> Request a copy of the data we hold about
            you.
          </li>
          <li>
            <strong>Rectification:</strong> Request correction of inaccurate
            data.
          </li>
          <li>
            <strong>Erasure:</strong> Request deletion of your personal data
            ("right to be forgotten").
          </li>
          <li>
            <strong>Objection:</strong> Object to the processing of your data.
          </li>
          <li>
            <strong>Portability:</strong> Request a machine-readable copy of
            your data.
          </li>
        </ul>
        <p className="mt-3">
          To exercise any of these rights, contact us at{" "}
          <a
            href={`mailto:${EMAIL}`}
            className="text-pch-primary hover:underline"
          >
            {EMAIL}
          </a>
          .
        </p>
      </Section>

      <Section title="7. Cookies">
        <p>
          We use essential cookies necessary for authentication and session
          management. We do not use advertising or tracking cookies. By using
          our website, you consent to these essential cookies.
        </p>
      </Section>

      <Section title="8. Security">
        <p>
          We implement industry-standard security measures including HTTPS
          encryption (SSL/TLS), Row Level Security (RLS) in our database, and
          secure OAuth 2.0 authentication. However, no method of transmission
          over the internet is 100% secure, and we cannot guarantee absolute
          security.
        </p>
      </Section>

      <Section title="9. Children's Privacy">
        <p>
          Our services are not directed to individuals under the age of 18. We
          do not knowingly collect personal information from minors. If you
          believe a minor has provided us with personal data, please contact us
          immediately.
        </p>
      </Section>

      <Section title="10. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by updating the "Last updated" date at the top of
          this page. Continued use of our services after changes constitutes
          acceptance of the updated policy.
        </p>
      </Section>

      <Section title="11. Contact Us">
        <p>
          If you have any questions about this Privacy Policy, please contact us:
        </p>
        <ul className="list-none pl-0 mt-2 space-y-1 text-foreground/80">
          <li>
            <strong>Name:</strong> {OWNER}
          </li>
          <li>
            <strong>Email:</strong>{" "}
            <a
              href={`mailto:${EMAIL}`}
              className="text-pch-primary hover:underline"
            >
              {EMAIL}
            </a>
          </li>
          <li>
            <strong>Website:</strong>{" "}
            <a
              href={`https://${SITE}`}
              className="text-pch-primary hover:underline"
            >
              https://{SITE}
            </a>
          </li>
          <li>
            <strong>Country:</strong> Peru
          </li>
        </ul>
      </Section>
    </article>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-foreground dark:text-white mb-3 pb-2 border-b border-pch-border">
        {title}
      </h2>
      <div className="text-foreground/80 leading-relaxed space-y-3">{children}</div>
    </section>
  );
}
