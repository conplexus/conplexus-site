import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 w-full bg-conx-navy/90 z-50">{/* no blur */}
        <nav className="max-w-5xl mx-auto flex items-center justify-between p-2 md:p-4">
          <Image
            src="/assets/logo/conplexus-primary.png"
            alt="Conplexus"
            width={500} // bump width
            height={200} // keep proportion
            priority
            className="h-20 w-auto md:h-24" // tailwind-controlled height
          />

          <a href="/about" className="text-conx-green hover:text-white transition">
            About
          </a>
          <a href="/conplexusedu" className="text-conx-green hover:text-white transition">
            ConplexusEdu™
          </a>
        </nav>
      </header>

      {/* Page Content */}
      <main className="min-h-screen bg-conx-navy text-white px-6 py-12 pt-36 md:pt-44 space-y-44">
        {/* Hero */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Welcome to Conplexus™
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Connecting the Complexities between Us
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
    </>
  );
}

export default funtion AboutPage() {
  return (
    <main className="min-h-screen bg-conx-navy text-white px-6 py-12 pt-36 md:pt-44 space-y-44">
      <h2 className="text-3xl font-semibold text-center">About Conplexus™</h2>
      <p className="text-white/80">
        Conplexus LLC is a software and innovation firm focused on simplifying complex
        systems through tailored digital tools. Currently in development, Conplexus is
        building its first SaaS product to support curriculum mapping and accreditation
        processes in academic institutions. Rooted in healthcare, pharmacy, and education,
        our mission is to create scalable, meaningful technologies that improve quality,
        alignment, and outcomes — from large institutions to smaller organizations in need
        of personalized support.
      </p>
    </main>
  );
}

export default function EduPage() {
  return (
    <main className="min-h-screen bg-conx-navy text-white px-6 py-12 pt-36 md:pt-44 space-y-44">
      <h1 className="text-4xl font-bold">ConplexusEdu™ Products & Services</h1>
      <p className="text-white/80">
        Explore our innovative educational solutions designed to enhance learning experiences and streamline administrative processes.
      </p>

      <h2 className="text-3xl font-semibold">CurricuLogic™</h2>
      <p className="text-white/80">
        Our flagship product, CurricuLogic™, offers a comprehensive platform for curriculum mapping and accreditation management.  It is currently in development and will provide tools for institutions to align their educational programs with accreditation standards, ensuring quality and compliance.
      </p>

      <h2 className="text-3xl font-semibold">Interested?</h2>
      <p className="text-white/80">
        If you're interested in learning more about our products and services, let us know! We are eager to connect with educational institutions and organizations that can benefit from our solutions. Please reach out to us via our contact page or email us directly at <a href="mailto:conplexus.llc@gmail.com">conplexus.llc@gmail.com</a>.
      </p>
    </main>
  );
}