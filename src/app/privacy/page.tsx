// src/app/privacy/page.tsx
export const metadata = {
  title: 'Privacy Policy | Conplexus',
  description: 'Privacy policy for Conplexus LLC',
};

export default function PrivacyPage() {
  return (
    <div className="container py-10 sm:py-14 lg:py-20 space-y-8 max-w-3xl">
      {/* Hero */}
      <section>
        <h1 className="text-4xl font-bold text-primary">Privacy Policy</h1>
        <p className="mt-3 text-lg text-secondary">
          Last updated:{' '}
          {new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </section>

      {/* Contact Submissions */}
      <section>
        <h2 className="text-2xl font-semibold text-primary mb-3">Contact Form Submissions</h2>
        <p className="text-secondary">
          When you submit the contact form on our website, we collect your name, email address, and
          message content. This information is used solely to respond to your inquiry. We do not
          share your contact information with third parties or use it for marketing purposes without
          your explicit consent.
        </p>
      </section>

      {/* Analytics */}
      <section>
        <h2 className="text-2xl font-semibold text-primary mb-3">Analytics and Tracking</h2>
        <p className="text-secondary">
          We use analytics to understand how visitors interact with our website so we can improve
          performance, content, and navigation. Analytics are collected in an aggregated, anonymized
          form and do not personally identify individual visitors. We do not combine analytics data
          with personal information from contact form submissions.
        </p>

        <p className="text-secondary mt-3">
          Analytics are disabled by default and are only activated when you explicitly opt in using
          the consent banner. You can revoke analytics consent at any time using the &quot;Analytics
          settings&quot; control in the site footer. When you revoke consent we will stop sending
          analytics events and attempt to remove analytics cookies from your browser.
        </p>

        <p className="text-secondary mt-3">
          If you have questions about analytics, contact us at{' '}
          <a href="mailto:conplexus.llc@gmail.com" className="text-conx-blue hover:underline">
            conplexus.llc@gmail.com
          </a>
          .
        </p>
      </section>

      {/* Data Security */}
      <section>
        <h2 className="text-2xl font-semibold text-primary mb-3">Data Security</h2>
        <p className="text-secondary">
          We take reasonable precautions to protect your personal information. However, no method of
          transmission over the internet or electronic storage is 100% secure. While we strive to
          protect your information, we cannot guarantee absolute security.
        </p>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-2xl font-semibold text-primary mb-3">Questions or Concerns</h2>
        <p className="text-secondary">
          If you have questions about this privacy policy or how we handle your information, please
          contact us at{' '}
          <a href="mailto:conplexus.llc@gmail.com" className="text-conx-blue hover:underline">
            conplexus.llc@gmail.com
          </a>
          .
        </p>
      </section>
    </div>
  );
}
