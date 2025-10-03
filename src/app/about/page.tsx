// src/app/about/page.tsx
export const metadata = {
  title: 'About | Conplexus',
  description: 'Why we exist and how we work.',
};

export default function AboutPage() {
  return (
    <div className="container py-10 sm:py-14 lg:py-20 space-y-16 lg:space-y-20">
      {/* Hero */}
      <section className="max-w-3xl">
        <h1 className="text-4xl font-bold text-primary">About Conplexus™</h1>
        <p className="mt-3 text-lg text-secondary">
          Founded by Reilly Stewart, a PharmD candidate with a strong interest in technological
          solutions, Lean Six Sigma methodologies, and continuous quality improvement.
        </p>
        <p className="mt-3 text-lg text-secondary">
          Conplexus LLC is a software and innovation firm focused on simplifying complex systems
          with tailored digital tools. Our first SaaS product supports curriculum mapping and
          accreditation workflows for academic programs.
        </p>
      </section>

      {/* Mission */}
      <section className="max-w-3xl space-y-4">
        <h2 className="text-2xl font-semibold text-primary inline-block pb-1 border-b-4 border-conx-blue">
          Mission
        </h2>
        <p className="text-secondary">
          Though my background as the founder is in healthcare, Conplexus is designed to be a
          provider to the health of many industires. Whether healthcare, education, or other
          sectors, our mission is to empower organizations and individuals by simplifying complex
          systems through innovative, user-centered software solutions. In recent practice and still
          being a part of the education system, I am noticing the innovative mindsets that creating
          landmark changes in the world, but I and others are feeling the gap between what our
          systems can do versus what they are currently capable of doing. We aim to bridge that gap
          by delivering tools that are not only effective but also intuitive and aligned with the
          unique needs of our users.
        </p>
        <p className="text-secondary">
          I believe that one of the ways we can make the gap between what we have access to and what
          we want to be able to do, is to take a step back and look systems outside of our own, to
          brainstorm tools, resources, structures, and processes that may not be traditional to our
          industries. One of these key areas is healthcare, where there is absolutely a mindset of
          &quot;this is patient-care and is purely clinical with emotional necessity.&quot;, and
          while this may be true, I believe that our current pharmacy and healthcare systems lack
          key basics in manufacturing, logistics, and technological advancements, that may be more
          common to production lines, supply chains, and software development, but could work
          synergistically to improve the outcomes for patients, providers, and administrations
          altogether.
        </p>
      </section>

      {/* Impact */}
      <section>
        <h2 className="text-2xl font-semibold text-primary inline-block pb-1 border-b-4 border-conx-blue">
          Impact (to date)
        </h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-3">
          <div className="bg-card border border-default rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-primary">75–90</div>
            <div className="text-secondary text-sm">hours saved / user / yr*</div>
          </div>
          <div className="bg-card border border-default rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-primary">$4.5k–$5.5k</div>
            <div className="text-secondary text-sm">annual value / user*</div>
          </div>
          <div className="bg-card border border-default rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-primary">MVP</div>
            <div className="text-secondary text-sm">live; pilots in progress</div>
          </div>
        </div>
        <p className="text-xs text-secondary mt-2">
          *Estimates based on prior VBA/Python tools; treated as projections until validated.
        </p>
      </section>
    </div>
  );
}
