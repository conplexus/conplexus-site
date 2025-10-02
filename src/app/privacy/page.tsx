// src/app/privacy/page.tsx
export const metadata = {
  title: "Privacy Policy | Conplexus",
  description: "Privacy policy for Conplexus LLC",
};

export default function PrivacyPage() {
  return (
    <div className="container py-10 sm:py-14 lg:py-20 space-y-8 max-w-3xl">
      {/* Hero */}
      <section>
        <h1 className="text-4xl font-bold text-primary">Privacy Policy</h1>
        <p className="mt-3 text-lg text-secondary">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>
      </section>

      {/* Contact Submissions */}
      <section>
        <h2 className="text-2xl font-semibold text-primary mb-3">
          Contact Form Submissions
        </h2>
        <p className="text-secondary">
          When you submit the contact form on our website, we collect your name, 
          email address, and message content. This information is used solely to 
          respond to your inquiry. We do not share your contact information with 
          third parties or use it for marketing purposes without your explicit consent.
        </p>
      </section>

      {/* Analytics */}
      <section>
        <h2 className="text-2xl font-semibold text-primary mb-3">
          Analytics and Tracking
        </h2>
        <p className="text-secondary">
          We may use analytics tools to understand how visitors interact with our 
          website. This helps us improve the user experience. Analytics data is 
          collected in an aggregated, anonymized form and does not personally 
          identify individual visitors.
        </p>
      </section>

      {/* Data Security */}
      <section>
        <h2 className="text-2xl font-semibold text-primary mb-3">
          Data Security
        </h2>
        <p className="text-secondary">
          We take reasonable precautions to protect your personal information. 
          However, no method of transmission over the internet or electronic 
          storage is 100% secure. While we strive to protect your information, 
          we cannot guarantee absolute security.
        </p>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-2xl font-semibold text-primary mb-3">
          Questions or Concerns
        </h2>
        <p className="text-secondary">
          If you have questions about this privacy policy or how we handle your 
          information, please contact us at{" "}
          <a
            href="mailto:contact@conplexus.example"
            className="text-conx-blue hover:underline"
          >
            contact@conplexus.example
          </a>
          .
        </p>
      </section>
    </div>
  );
}
