import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — logforinvestor.com",
  description:
    "Terms of Service for logforinvestor.com. Educational platform for financial literacy. Not financial advice.",
};

const LAST_UPDATED = "June 29, 2025";
const OWNER = "Armando Fiestas";
const EMAIL = "footballexchangesystems@gmail.com";
const SITE = "logforinvestor.com";

export default function TermsPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0b241c] dark:text-white mb-2">
          Terms of Service
        </h1>
        <p className="text-foreground/50 text-sm">Last updated: {LAST_UPDATED}</p>
      </div>

      {/* DISCLAIMER DESTACADO */}
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 mb-10">
        <h2 className="text-amber-400 font-bold text-lg mb-2 flex items-center gap-2">
          ⚠️ Important Financial Disclaimer — Please Read Carefully
        </h2>
        <p className="text-foreground/80 text-sm leading-relaxed mb-3">
          <strong>
            logforinvestor.com is a strictly educational platform.
          </strong>{" "}
          All content provided — including courses, videos, articles, tools,
          filters, and calculators — is for <strong>educational and
          informational purposes only</strong> and does not constitute financial
          advice, investment advice, trading advice, or any other type of advice.
        </p>
        <p className="text-foreground/80 text-sm leading-relaxed mb-3">
          <strong>
            Nothing on this website should be interpreted as a recommendation to
            buy, sell, or hold any financial instrument, security, or asset.
          </strong>{" "}
          The methodologies, systems, and strategies discussed (including but not
          limited to the Stan Weinstein method and passive investment approaches)
          are presented solely for educational illustration.
        </p>
        <p className="text-foreground/80 text-sm leading-relaxed mb-3">
          <strong>All investments carry risk.</strong> Past performance is not
          indicative of future results. You may lose part or all of your
          invested capital. Financial markets are inherently volatile and
          unpredictable. Never invest money you cannot afford to lose.
        </p>
        <p className="text-foreground/80 text-sm leading-relaxed">
          Before making any investment decision, you should consult with a
          qualified and licensed financial advisor in your jurisdiction.{" "}
          <strong>
            {OWNER} and {SITE} are not registered financial advisors,
            investment advisors, or brokers.
          </strong>
        </p>
      </div>

      <Section title="1. Acceptance of Terms">
        <p>
          By accessing or using {SITE} {"(\"the Service\")"}, operated by{" "}
          <strong>{OWNER}</strong> {"(\"we\", \"us\", \"our\")"}, you agree to be bound
          by these Terms of Service {"(\"Terms\")"}. If you do not agree with any part
          of these Terms, you must not use our Service.
        </p>
      </Section>

      <Section title="2. Description of Service">
        <p>
          {SITE} is an online educational platform that provides:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-foreground/80 mt-2">
          <li>
            <strong>Educational Video Courses:</strong> Pre-recorded instructional
            content covering investment concepts, stock market analysis
            methodologies (including the Weinstein Stage Analysis method), and
            passive investment principles. Content is hosted on Bunny.net.
          </li>
          <li>
            <strong>Smart Money Filter:</strong> A free data visualization tool
            displaying publicly available market volume data for educational
            reference only.
          </li>
          <li>
            <strong>Investment Calculator:</strong> An interactive calculator for
            illustrating long-term compound interest scenarios for educational
            purposes.
          </li>
        </ul>
      </Section>

      <Section title="3. Educational Purpose — No Financial Advice">
        <p>
          All information, data, tools, and content provided by {SITE} are
          intended solely for educational and informational purposes. Specifically:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-foreground/80 mt-2">
          <li>
            We do not provide personalized financial advice or investment
            recommendations tailored to your individual financial situation.
          </li>
          <li>
            The educational content is based on publicly available methodologies
            and historical data. It does not guarantee future results.
          </li>
          <li>
            Any reference to specific stocks, ETFs (such as VOO), or financial
            instruments is for educational illustration purposes only and is not
            a recommendation to purchase those instruments.
          </li>
          <li>
            We are not responsible for any financial losses incurred as a result
            of applying concepts learned through our educational materials.
          </li>
          <li>
            <strong>All investments carry risk, including the risk of total loss
            of capital.</strong> You are solely responsible for your investment
            decisions.
          </li>
        </ul>
      </Section>

      <Section title="4. Account Registration and Access">
        <p>
          To access premium content (paid courses), you must:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-foreground/80 mt-2">
          <li>
            Create an account using Google OAuth authentication.
          </li>
          <li>
            Be at least 18 years of age.
          </li>
          <li>
            Provide accurate and truthful information.
          </li>
          <li>
            Complete a valid purchase through our payment processor (Lemon
            Squeezy).
          </li>
        </ul>
        <p className="mt-3">
          You are responsible for maintaining the confidentiality of your
          account credentials and for all activities that occur under your
          account.
        </p>
      </Section>

      <Section title="5. Purchases and Payments">
        <ul className="list-disc pl-6 space-y-2 text-foreground/80">
          <li>
            All purchases are processed by <strong>Lemon Squeezy</strong>, our
            Merchant of Record, who is responsible for payment processing, tax
            collection, and compliance.
          </li>
          <li>
            Prices are displayed in US Dollars (USD). Applicable taxes may be
            added at checkout based on your location.
          </li>
          <li>
            Access to purchased content is granted immediately upon successful
            payment confirmation.
          </li>
          <li>
            All sales are for digital products (online course access). No
            physical goods are shipped.
          </li>
        </ul>
      </Section>

      <Section title="6. Course Access and Lifetime License">
        <ul className="list-disc pl-6 space-y-2 text-foreground/80">
          <li>
            Upon purchase, you receive a non-exclusive, non-transferable,
            personal license to access and view the course content.
          </li>
          <li>
            {"\"Lifetime access\""} means access for as long as the platform is
            operational. We reserve the right to modify or discontinue the
            Service with reasonable notice.
          </li>
          <li>
            You may not share, resell, redistribute, reproduce, or transmit
            course content to third parties.
          </li>
          <li>
            Access is for personal use only. One license per individual.
          </li>
        </ul>
      </Section>

      <Section title="7. Intellectual Property">
        <p>
          All content on {SITE} — including but not limited to video lessons,
          written materials, tools, source code, graphics, and branding — is the
          exclusive property of {OWNER} and is protected by applicable copyright
          and intellectual property laws.
        </p>
        <p className="mt-2">
          You may not copy, modify, distribute, sell, or lease any part of our
          content or services without our express written permission.
        </p>
      </Section>

      <Section title="8. Prohibited Uses">
        <p>You agree not to:</p>
        <ul className="list-disc pl-6 space-y-2 text-foreground/80 mt-2">
          <li>Use the Service for any unlawful purpose.</li>
          <li>
            Share your account credentials or purchased access with others.
          </li>
          <li>Record, download, or reproduce video content.</li>
          <li>
            Use automated tools, bots, or scrapers to access our platform.
          </li>
          <li>
            Misrepresent our educational content as financial advice to third
            parties.
          </li>
          <li>
            Attempt to circumvent any access controls or security measures.
          </li>
        </ul>
      </Section>

      <Section title="9. Disclaimer of Warranties">
        <p>
          THE SERVICE IS PROVIDED {"\"AS IS\""} AND {"\"AS AVAILABLE\""} WITHOUT WARRANTIES
          OF ANY KIND, EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-foreground/80 mt-2">
          <li>
            The educational content will lead to any specific financial outcome.
          </li>
          <li>The Service will be uninterrupted or error-free.</li>
          <li>
            Any investment strategy discussed will be profitable or suitable for
            your situation.
          </li>
        </ul>
      </Section>

      <Section title="10. Limitation of Liability">
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, {OWNER.toUpperCase()} AND{" "}
          {SITE.toUpperCase()} SHALL NOT BE LIABLE FOR:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-foreground/80 mt-2">
          <li>
            Any financial losses, investment losses, or trading losses arising
            from the application of educational content.
          </li>
          <li>
            Indirect, incidental, special, consequential, or punitive damages.
          </li>
          <li>
            Any damages exceeding the amount paid for the specific course in the
            six months preceding the claim.
          </li>
        </ul>
      </Section>

      <Section title="11. Governing Law">
        <p>
          These Terms shall be governed by and construed in accordance with the
          laws of <strong>Peru</strong>, without regard to its conflict of law
          provisions. Any disputes arising under these Terms shall be subject to
          the exclusive jurisdiction of the courts of Peru.
        </p>
      </Section>

      <Section title="12. Changes to Terms">
        <p>
          We reserve the right to modify these Terms at any time. We will notify
          users of significant changes by updating the {"\"Last updated\""} date.
          Continued use of the Service after changes constitutes acceptance of
          the revised Terms.
        </p>
      </Section>

      <Section title="13. Contact">
        <p>For questions about these Terms, contact us:</p>
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
