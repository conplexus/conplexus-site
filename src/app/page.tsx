export default function Home() {
  return (
    <main className="min-h-screen bg-conx-navy text-white px-6 py-12 space-y-24">
      {/* Sticky */}
      <header className="fixed top-0 left-0 w-full bg-conx-navy/80 backdrop-blur z-50">
        <nav className="max-w-5xl mx-auto flex items-center justify-between p-4">
          <span className="text-xl font-bold tracking-wide">Conplexus™</span>
          <a href="#about" className="text-conx-green hover:text-white transition">
            About
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="text-center space-y-6 pt-16">
        <h1 className="text-4xl md:text-6xl font-bold">
          Welcome to Conplexus™
        </h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto">
          Connecting the Complexities between Us
        </p>

        {/* Primary (green) CTA */}
        <a
          href="#about"
          className="inline-block bg-conx-green text-conx-navy font-semibold py-3 px-7 rounded-xl2 shadow-brand
                     hover:brightness-95 active:translate-y-[1px] transition"
        >
          Learn More
        </a>

        {/* Secondary (gold) example */}
        {/* <a className="inline-block ml-4 bg-conx-gold text-conx-navy font-medium py-3 px-6 rounded-xl2 hover:brightness-95 transition">
          Contact
        </a> */}
      </section>

      {/* About */}
      <section id="about" className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-3xl font-semibold">About Conplexus™</h2>
        <p className="text-white/80">
          Conplexus LLC is a software and innovation firm focused on simplifying complex
          systems through tailored digital tools. Currently in development, Conplexus is
          building its first SaaS product to support curriculum mapping and accreditation
          processes in academic institutions. Rooted in healthcare, pharmacy, and education,
          our mission is to create scalable, meaningful technologies that improve quality,
          alignment, and outcomes — from large institutions to smaller organizations in need
          of personalized support.
        </p>
      </section>

      {/* Projects Preview */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">What We Are Working On</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-conx-navySoft/60 border border-white/10 p-6 rounded-xl2 shadow-brand">
            <h3 className="text-xl font-bold">Informatics Tools</h3>
            <p className="text-white/70 text-sm mt-2">
              Workflow automations built with Excel, Python, and APIs.
            </p>
          </div>
          <div className="bg-conx-navySoft/60 border border-white/10 p-6 rounded-xl2 shadow-brand">
            <h3 className="text-xl font-bold">CurricuLogic™</h3>
            <p className="text-white/70 text-sm mt-2">
              Curriculum mapping & accreditation alignment for institutions.
            </p>
          </div>
          <div className="bg-conx-navySoft/60 border border-white/10 p-6 rounded-xl2 shadow-brand">
            <h3 className="text-xl font-bold">Coming Soon!</h3>
            <p className="text-white/70 text-sm mt-2">
              Stay tuned for more project concepts!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-12 text-center border-t border-white/10 text-white/60 text-sm">
        <p>© 2025 Conplexus™ LLC. All rights reserved.</p>
        <p>Built with care on Next.js + Vercel</p>
      </footer>
    </main>
  );
}
