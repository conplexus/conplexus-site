// src/app/services/page.tsx
export const metadata = {
  title: "Services | Conplexus",
  description: "Strategy and engineering services for product-driven teams.",
};

export default function ServicesPage() {
  return (
    <div className="container py-10 sm:py-14 lg:py-20 space-y-16 lg:space-y-20">
      {/* Hero */}
      <section className="max-w-3xl">
        <h1 className="text-4xl font-bold text-primary">Our Services</h1>
        <p className="mt-3 text-lg text-secondary">
          We partner with startups and teams to deliver strategy and engineering 
          that drives product success.
        </p>
      </section>

      {/* Services List */}
      <section className="max-w-3xl space-y-8">
        <div className="bg-card border border-default rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-primary mb-3">
            Product Strategy
          </h2>
          <p className="text-secondary">
            Align your vision with actionable roadmaps, user research, and 
            metrics that matter for sustainable growth.
          </p>
        </div>

        <div className="bg-card border border-default rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-primary mb-3">
            Web Engineering
          </h2>
          <p className="text-secondary">
            Build scalable, performant web applications with modern frameworks 
            and best practices in development.
          </p>
        </div>

        <div className="bg-card border border-default rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-primary mb-3">
            Technical Advisory
          </h2>
          <p className="text-secondary">
            Navigate technical decisions with confidence through expert guidance 
            on architecture, tooling, and team processes.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl">
        <div className="bg-conx-blue text-white rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-3">
            Ready to get started?
          </h2>
          <p className="mb-6">
            Let&apos;s discuss how we can help your team ship better products.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-white text-conx-blue font-semibold rounded-md hover:bg-gray-100 transition"
            aria-label="Contact us to discuss your project"
          >
            Get in touch
          </a>
        </div>
      </section>
    </div>
  );
}
