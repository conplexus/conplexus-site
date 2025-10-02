import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-conx-blue text-white relative z-40" role="contentinfo">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold">{SITE.NAME}</p>
            <p className="text-sm opacity-80">
              {SITE.TAGLINE}
            </p>
          </div>

          <nav className="flex gap-6 text-sm" aria-label="Footer navigation">
            <a href="/about" className="hover:underline underline-offset-4">
              About
            </a>
            <a
              href="/conplexus-edu"
              className="hover:underline underline-offset-4"
            >
              ConplexusEdu™
            </a>
            <a href="/contact" className="hover:underline underline-offset-4">
              Contact
            </a>
          </nav>
        </div>

        <hr className="my-6 border-white/15" />

        <div className="flex flex-col-reverse gap-4 md:flex-row md:items-center md:justify-between text-xs opacity-80">
          <p>
            © {new Date().getFullYear()} {SITE.COPYRIGHT}
          </p>
          <p>Built with Next.js + Vercel</p>
        </div>
      </div>
    </footer>
  );
}
