export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 px-6 py-12 space-y-24">
      {/* Sticky */}
      <header className="fixed top-0 left-0 w-full bg-slate-900/75 backdrop-blur z-50">
        <nav className="max-w-5xl mx-auto flex items-center justify-between p-4">
          <span className="text-xl font-bold text-white">Conplexus</span>
          <a href="#about" className="text-slate-200 hover:text-white">
            About
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to Conplexus</h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          Innovating healthcare, one system at a time. From workflow design to
          pharmacy informatics - we build better tools for better care.
        </p>
        <a
          href="#about"
          className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-3 px-6 rounded-xl transition"
        >
          Learn More
        </a>
      </section>

      {/* About */}
      <section id="about" className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-3xl font-semibold">About Conplexus</h2>
        <p className="text-slate-300">
          Conplexus LLC is a technology-forward healthcare company focused not
          on finding the next best thing, rather taking what we have and solving
          operational, clinical, and educational challenges through automation,
          intelligent design, and scalable solutions.
        </p>
      </section>

      {/* Projects Preview */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">What We Are Working On</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-800 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold">Informatics Tools</h3>
            <p className="text-slate-400 text-sm mt-2">
              Workflow automations built with Excel, Python, and APIs.
            </p>
          </div>
          <div className="bg-slate-800 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold">Curricular Mapping Tool</h3>
            <p className="text-slate-400 text-sm mt-2">
              For institutions in need of assistance in defining, measuring, and
              reporting outcomes set by accreditation standards.
            </p>
          </div>
          <div className="bg-slate-800 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold">Coming Soon!</h3>
            <p className="text-slate-400 text-sm mt-2">
              Stay tuned for more project concepts as we
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-12 text-center border-t border-slate-700 text-slate-500 text-sm">
        <p>© 2025 Conplexus LLC. All rights reserved.</p>
        <p>Built with care on Next.js + Vercel</p>
      </footer>
    </main>
  );
}
