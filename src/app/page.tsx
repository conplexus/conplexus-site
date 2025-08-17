export default function HomePage() {
  return (
    <div className="container py-10 sm:py-14 lg:py-20 space-y-16 lg:space-y-24">
      {/* Hero */}
      <section className="text-center space-y-4 sm:space-y-6">
        <h1 className="font-bold text-primary text-4xl sm:text-5xl lg:text-6xl">
          Welcome to Conplexus™
        </h1>
        <p className="text-secondary text-lg sm:text-xl max-w-2xl mx-auto">
          Connecting the Complexities between Us
        </p>
      </section>

      {/* Projects */}
      <section className="text-center">
        <h2 className="text-primary text-2xl sm:text-3xl font-semibold mb-6">
          What We Are Working On
        </h2>
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-card border border-default p-6 rounded-2xl text-card">
            <h3 className="text-xl font-bold text-primary">
              Informatics Tools
            </h3>
            <p className="mt-2 text-sm text-secondary">
              Workflow automations built with Excel, Python, and APIs.
            </p>
          </div>
          <div className="bg-card border border-default p-6 rounded-2xl text-card">
            <h3 className="text-xl font-bold text-primary">CurricuLogic™</h3>
            <p className="mt-2 text-sm text-secondary">
              Curriculum mapping & accreditation alignment for institutions.
            </p>
          </div>
          <div className="bg-card border border-default p-6 rounded-2xl text-card">
            <h3 className="text-xl font-bold text-primary">Coming Soon!</h3>
            <p className="mt-2 text-sm text-secondary">
              Stay tuned for more project concepts!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
