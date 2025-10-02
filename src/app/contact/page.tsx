// src/app/contact/page.tsx
"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ email?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    if (!validateEmail(formData.email)) {
      setErrors({ email: "Please enter a valid email address" });
      return;
    }
    
    setErrors({});
    setSubmitted(true);
    
    // In a real implementation, this would send the form data to a backend
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <div className="container py-10 sm:py-14 lg:py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-8">
            <h1 className="text-3xl font-bold text-primary mb-4">
              Thank you for reaching out!
            </h1>
            <p className="text-secondary mb-6">
              We&apos;ve received your message and will get back to you soon.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: "", email: "", message: "" });
              }}
              className="px-6 py-3 bg-conx-blue text-white font-semibold rounded-md hover:opacity-90 transition"
            >
              Send another message
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-10 sm:py-14 lg:py-20 space-y-12">
      {/* Hero */}
      <section className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-primary">Get in Touch</h1>
        <p className="mt-3 text-lg text-secondary">
          Have a project in mind? We&apos;d love to hear from you.
        </p>
      </section>

      {/* Contact Info */}
      <section className="max-w-2xl mx-auto">
        <div className="bg-card border border-default rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-primary mb-3">
            Contact Information
          </h2>
          <p className="text-secondary mb-2">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:contact@conplexus.example"
              className="text-conx-blue hover:underline"
            >
              contact@conplexus.example
            </a>
          </p>
          <p className="text-xs text-secondary mt-4">
            <strong>Privacy note:</strong> We respect your privacy and will only 
            use your contact information to respond to your inquiry. We do not 
            share your information with third parties.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-primary mb-2"
            >
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-default rounded-md bg-bg text-primary focus:outline-none focus:ring-2 focus:ring-conx-blue"
              aria-required="true"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-primary mb-2"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-default rounded-md bg-bg text-primary focus:outline-none focus:ring-2 focus:ring-conx-blue"
              aria-required="true"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="text-red-600 text-sm mt-1">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-primary mb-2"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-default rounded-md bg-bg text-primary focus:outline-none focus:ring-2 focus:ring-conx-blue"
              aria-required="true"
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-conx-blue text-white font-semibold rounded-md hover:opacity-90 transition focus:outline-none focus:ring-2 focus:ring-conx-blue focus:ring-offset-2"
            aria-label="Submit contact form"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
