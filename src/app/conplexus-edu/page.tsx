// src/app/conplexus-edu/page.tsx
import type { Metadata } from "next";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "ConplexusEdu™ - Educational Solutions",
  description:
    "CurricuLogic™ and other educational solutions for curriculum mapping, accreditation alignment, and program management. Streamline your educational administration.",
  openGraph: {
    title: "ConplexusEdu™ Products & Services",
    description:
      "Curriculum mapping and accreditation management solutions for educational institutions.",
    url: "https://conplexus.com/conplexus-edu",
  },
};

export default function EduPage() {
  return (
    <div className="container py-10 sm:py-14 lg:py-20 space-y-16 lg:space-y-20">
      {/* Hero */}
      <section className="max-w-4xl">
        <h1 className="text-4xl font-bold text-primary">
          ConplexusEdu™ Products & Services
        </h1>
        <p className="mt-3 text-lg text-secondary">
          Explore our educational solutions designed to enhance learning and
          streamline administration.
        </p>
      </section>

      {/* CurricuLogic */}
      <section className="max-w-3xl space-y-4">
        <h2 className="text-2xl font-semibold text-primary inline-block pb-1 border-b-4 border-conx-blue">
          CurricuLogic™
        </h2>
        <p className="text-secondary">
          Our flagship platform for curriculum mapping and accreditation
          management. Currently in development, it helps institutions align
          programs to standards, generate evidence, and monitor outcomes from
          program → course → assessment → item.
        </p>
        <ul className="list-disc pl-6 text-secondary">
          <li>Outcome & standards mapping without spreadsheets</li>
          <li>Program → item analytics with exportable evidence</li>
          <li>Role-based views (admin, faculty, student)</li>
        </ul>
      </section>

      {/* Callout / CTA */}
      <section className="max-w-3xl">
        <h2 className="text-2xl font-semibold text-primary inline-block pb-1 border-b-4 border-conx-blue">
          Interested?
        </h2>
        <p className="mt-3 text-secondary">
          We&apos;re connecting with institutions for early access. Reach
          out via our{" "}
          <a
            href="/contact"
            className="underline underline-offset-4 hover:opacity-80"
          >
            contact page
          </a>{" "}
          or email{" "}
          <a
            href={`mailto:${CONTACT.EMAIL}`}
            className="underline underline-offset-4 hover:opacity-80"
          >
            {CONTACT.EMAIL}
          </a>
          .
        </p>
      </section>
    </div>
  );
}
