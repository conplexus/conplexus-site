// src/app/about/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Conplexus LLC - a software and innovation firm simplifying complex systems with tailored digital tools for healthcare, pharmacy, and education.",
  openGraph: {
    title: "About Conplexus™",
    description:
      "Software and innovation firm focused on simplifying complex systems with tailored digital tools.",
    url: "https://conplexus.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="container py-10 sm:py-14 lg:py-20 space-y-16 lg:space-y-20">
      {/* Hero */}
      <section className="max-w-3xl">
        <h1 className="text-4xl font-bold text-primary">About Conplexus™</h1>
        <p className="mt-3 text-lg text-secondary">
          Founded by Reilly Stewart — Conplexus LLC provides strategy and 
          engineering support for product-driven teams.
        </p>
        <p className="mt-3 text-lg text-secondary">
          Conplexus LLC is a software and innovation firm focused on simplifying
          complex systems with tailored digital tools. Our first SaaS product
          supports curriculum mapping and accreditation workflows for academic
          programs.
        </p>
      </section>

      {/* Mission */}
      <section className="max-w-3xl space-y-4">
        <h2 className="text-2xl font-semibold text-primary inline-block pb-1 border-b-4 border-conx-blue">
          Mission
        </h2>
        <p className="text-secondary">
          Rooted in healthcare, pharmacy, and education, our mission is to
          create scalable, meaningful technologies that improve quality,
          alignment, and outcomes — for both large institutions and smaller
          organizations needing personalized support.
        </p>
        <ul className="list-disc pl-6 text-secondary">
          <li>Patient- and learner-centric by design</li>
          <li>Lean, measurable impact</li>
          <li>Privacy & compliance first (FERPA-aligned)</li>
        </ul>
      </section>

      {/* Impact */}
      <section>
        <h2 className="text-2xl font-semibold text-primary inline-block pb-1 border-b-4 border-conx-blue">
          Impact (to date)
        </h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-3">
          <div className="bg-card border border-default rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-primary">75–90</div>
            <div className="text-secondary text-sm">
              hours saved / user / yr*
            </div>
          </div>
          <div className="bg-card border border-default rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-primary">$4.5k–$5.5k</div>
            <div className="text-secondary text-sm">annual value / user*</div>
          </div>
          <div className="bg-card border border-default rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-primary">MVP</div>
            <div className="text-secondary text-sm">
              live; pilots in progress
            </div>
          </div>
        </div>
        <p className="text-xs text-secondary mt-2">
          *Estimates based on prior VBA/Python tools; treated as projections
          until validated.
        </p>
      </section>
    </div>
  );
}
