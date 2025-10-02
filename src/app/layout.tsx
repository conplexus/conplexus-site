// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
// TODO: Re-enable Google Fonts with font-display: swap or use local fonts for better performance
// import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

// const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Conplexus™ | Connecting the Complexities between Us",
    template: "%s | Conplexus™",
  },
  description:
    "Conplexus LLC delivers innovative software solutions for healthcare, education, and informatics. Specializing in curriculum mapping, accreditation management, and workflow automation.",
  keywords: [
    "curriculum mapping",
    "accreditation management",
    "healthcare technology",
    "educational software",
    "informatics tools",
    "CurricuLogic",
    "workflow automation",
    "SaaS",
  ],
  authors: [{ name: "Conplexus LLC" }],
  creator: "Conplexus LLC",
  publisher: "Conplexus LLC",
  metadataBase: new URL("https://conplexus.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://conplexus.com",
    siteName: "Conplexus™",
    title: "Conplexus™ | Connecting the Complexities between Us",
    description:
      "Innovative software solutions for healthcare, education, and informatics. Simplifying complex systems with tailored digital tools.",
    images: [
      {
        url: "/assets/logo/conplexus-primary.png",
        width: 1200,
        height: 630,
        alt: "Conplexus Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Conplexus™ | Connecting the Complexities between Us",
    description:
      "Innovative software solutions for healthcare, education, and informatics.",
    images: ["/assets/logo/conplexus-primary.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/Icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Conplexus LLC",
    alternateName: "Conplexus™",
    url: "https://conplexus.com",
    logo: "https://conplexus.com/assets/logo/conplexus-primary.png",
    description:
      "Software and innovation firm focused on simplifying complex systems with tailored digital tools for healthcare, education, and informatics.",
    foundingDate: "2024",
    contactPoint: {
      "@type": "ContactPoint",
      email: "conplexus.llc@gmail.com",
      contactType: "Customer Service",
    },
    sameAs: [],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-conx-blue focus:text-white focus:rounded-md focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Header />
        <Sidebar />
        {/* Top pad by header; left pad by sidebar on lg+ */}
        <main
          id="main-content"
          className="flex-1 pt-[var(--header-h)] lg:pl-[var(--sidebar-w)]"
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
