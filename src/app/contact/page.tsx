// src/app/contact/page.tsx
import type { Metadata } from "next";
import { EmailIcon, BriefcaseIcon, UsersIcon } from "@/components/icons";
import Card from "@/components/Card";
import { CONTACT } from "@/lib/constants";

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
        <Card className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Get In Touch
            </h2>
            <div className="space-y-4 text-secondary">
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <EmailIcon className="text-conx-blue" />
                </div>
                <div>
                  <h3 className="font-medium text-primary mb-1">Email</h3>
                  <a
                    href={`mailto:${CONTACT.EMAIL}`}
                    className="text-conx-blue hover:underline underline-offset-4"
                  >
                    {CONTACT.EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <BriefcaseIcon className="text-conx-blue" />
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
                  <UsersIcon className="text-conx-blue" />
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
              {CONTACT.BUSINESS_HOURS}
              <br />
              We typically respond within {CONTACT.RESPONSE_TIME}.
            </p>
          </div>
        </Card>

        {/* Additional Info */}
        <Card variant="highlight">
          <h3 className="text-lg font-semibold text-primary mb-2">
            Early Access Program
          </h3>
          <p className="text-secondary">
            We&apos;re currently onboarding institutions for early access to
            CurricuLogic™. If you&apos;re interested in being part of our pilot
            program, please mention this in your email.
          </p>
        </Card>
      </section>
    </div>
  );
}
