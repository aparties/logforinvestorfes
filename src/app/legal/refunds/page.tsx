import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund Policy — logforinvestor.com",
  description: "Refund Policy for logforinvestor.com digital courses.",
};

const LAST_UPDATED = "June 29, 2025";
const OWNER = "Armando Fiestas";
const EMAIL = "footballexchangesystems@gmail.com";
const SITE = "logforinvestor.com";
const REFUND_WINDOW_DAYS = 14;

export default function RefundPolicyPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0b241c] dark:text-white mb-2">
          Refund Policy
        </h1>
        <p className="text-foreground/50 text-sm">Last updated: {LAST_UPDATED}</p>
      </div>

      {/* Resumen visual */}
      <div className="bg-pch-primary/10 border border-pch-primary/30 rounded-2xl p-6 mb-10">
        <h2 className="text-pch-primary font-bold text-lg mb-2">
          ✅ {REFUND_WINDOW_DAYS}-Day Money-Back Guarantee
        </h2>
        <p className="text-foreground/80 text-sm leading-relaxed">
          We offer a <strong>{REFUND_WINDOW_DAYS}-day full refund</strong> on all
          course purchases. If you are not satisfied with your purchase for any
          reason, contact us within {REFUND_WINDOW_DAYS} days of your purchase
          date and we will issue a complete refund — no questions asked.
        </p>
      </div>

      <Section title="1. Overview">
        <p>
          {SITE}, operated by <strong>{OWNER}</strong>, sells digital educational
          products (online course access). Because our products are digital and
          delivered instantly upon payment, we have designed our refund policy
          to be fair and straightforward.
        </p>
        <p>
          All payments are processed by <strong>Lemon Squeezy</strong>, who acts
          as the Merchant of Record. Refunds are processed through Lemon Squeezy&apos;s
          payment infrastructure.
        </p>
      </Section>

      <Section title="2. Eligibility for Refund">
        <p>You are eligible for a full refund if:</p>
        <ul className="list-disc pl-6 space-y-2 text-foreground/80 mt-2">
          <li>
            Your refund request is submitted within{" "}
            <strong>{REFUND_WINDOW_DAYS} days</strong> of your original purchase
            date.
          </li>
          <li>
            You contact us directly at{" "}
            <a
              href={`mailto:${EMAIL}`}
              className="text-pch-primary hover:underline"
            >
              {EMAIL}
            </a>{" "}
            with your order details.
          </li>
        </ul>
        <p className="mt-3">
          We do <strong>not</strong> require you to provide a reason for the
          refund, but your feedback is always appreciated to help us improve.
        </p>
      </Section>

      <Section title="3. What Is Not Eligible for Refund">
        <ul className="list-disc pl-6 space-y-2 text-foreground/80">
          <li>
            Requests submitted more than {REFUND_WINDOW_DAYS} days after the
            purchase date.
          </li>
          <li>
            Accounts that have violated our{" "}
            <Link href="/legal/terms" className="text-pch-primary hover:underline">
              Terms of Service
            </Link>{" "}
            (e.g., sharing content, account sharing).
          </li>
          <li>
            Refund requests based on dissatisfaction with investment outcomes.
            Our courses are strictly educational and do not guarantee financial
            results. Please review our{" "}
            <Link href="/legal/terms" className="text-pch-primary hover:underline">
              Terms of Service
            </Link>{" "}
            and financial disclaimer.
          </li>
        </ul>
      </Section>

      <Section title="4. How to Request a Refund">
        <ol className="list-decimal pl-6 space-y-3 text-foreground/80 mt-2">
          <li>
            Send an email to{" "}
            <a
              href={`mailto:${EMAIL}`}
              className="text-pch-primary hover:underline"
            >
              {EMAIL}
            </a>{" "}
            with the subject line: <strong>{"\"Refund Request — [Your Order ID]\""}</strong>
          </li>
          <li>
            Include in your email:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Your full name</li>
              <li>Email address used for purchase</li>
              <li>Order ID (found in your Lemon Squeezy receipt)</li>
              <li>Date of purchase</li>
            </ul>
          </li>
          <li>
            We will process your refund request within{" "}
            <strong>3–5 business days</strong>.
          </li>
          <li>
            Once approved, the refund will be issued to your original payment
            method. Processing times vary by bank or payment provider (typically
            5–10 business days).
          </li>
        </ol>
      </Section>

      <Section title="5. Access Revocation">
        <p>
          Upon processing a refund, your access to the purchased course content
          will be revoked immediately. You will no longer be able to access the
          course videos or materials associated with the refunded purchase.
        </p>
      </Section>

      <Section title="6. Currency and Fees">
        <p>
          Refunds are issued in the original currency of the transaction (USD).
          We do not charge any processing fees for refunds. Any currency
          conversion fees charged by your bank or card issuer are outside our
          control and are not reimbursed by us.
        </p>
      </Section>

      <Section title="7. Contact">
        <p>
          For any questions about our refund policy or to initiate a refund:
        </p>
        <ul className="list-none pl-0 mt-2 space-y-1 text-foreground/80">
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
            <strong>Response time:</strong> within 24–48 business hours
          </li>
          <li>
            <strong>Operated by:</strong> {OWNER} — {SITE}
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
      <h2 className="text-xl font-bold text-[#0b241c] dark:text-white mb-3 pb-2 border-b border-pch-border">
        {title}
      </h2>
      <div className="text-foreground/80 leading-relaxed space-y-3">{children}</div>
    </section>
  );
}
