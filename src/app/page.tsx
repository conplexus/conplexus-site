import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 w-full bg-conx-navy/90 z-50">
        <nav className="max-w-5xl mx-auto flex items-center justify-between p-2 md:p-4">
          <Image
            src="/assets/logo/conplexus-primary.png"
            alt="Conplexus"
            width={500}
            height={200}
            priority
            className="h-20 w-auto md:h-24"
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