// src/app/contact/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Conplexus LLC. Contact us for inquiries about our products, services, or partnership opportunities.",
  openGraph: {
    title: "Contact Conplexus™",
    description:
      "Get in touch with us for inquiries about our products and services.",
    url: "https://conplexus.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="container py-10 sm:py-14 lg:py-20 space-y-16 lg:space-y-20">
      {/* Hero */}
      <section className="max-w-3xl">
        <h1 className="text-4xl font-bold text-primary">Contact Us</h1>
        <p className="mt-3 text-lg text-secondary">
          We&apos;d love to hear from you. Whether you&apos;re interested in our
          products, have questions, or want to explore partnership opportunities,
          reach out to us.
        </p>
      </section>

      {/* Contact Information */}
      <section className="max-w-3xl space-y-8">
        <div className="bg-card border border-default rounded-2xl p-8 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Get In Touch
            </h2>
            <div className="space-y-4 text-secondary">
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <svg
                    className="w-5 h-5 text-conx-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-primary mb-1">Email</h3>
                  <a
                    href="mailto:conplexus.llc@gmail.com"
                    className="text-conx-blue hover:underline underline-offset-4"
                  >
                    conplexus.llc@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <svg
                    className="w-5 h-5 text-conx-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-primary mb-1">
                    Business Inquiries
                  </h3>
                  <p>
                    Interested in our curriculum mapping platform, workflow
                    automation tools, or custom solutions? Send us an email to
                    discuss how we can help.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <svg
                    className="w-5 h-5 text-conx-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-primary mb-1">
                    Partnerships
                  </h3>
                  <p>
                    We&apos;re open to collaborations with educational
                    institutions, healthcare organizations, and technology
                    partners.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-default">
            <h3 className="font-medium text-primary mb-2">Office Hours</h3>
            <p className="text-secondary text-sm">
              Monday - Friday: 9:00 AM - 5:00 PM EST
              <br />
              We typically respond within 1-2 business days.
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-conx-blue/5 dark:bg-conx-blue/10 border border-conx-blue/20 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-primary mb-2">
            Early Access Program
          </h3>
          <p className="text-secondary">
            We&apos;re currently onboarding institutions for early access to
            CurricuLogic™. If you&apos;re interested in being part of our pilot
            program, please mention this in your email.
          </p>
        </div>
      </section>
    </div>
  );
}
