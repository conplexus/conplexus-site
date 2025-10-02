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
  title: "Conplexus",
  description: "Conplexus — Strategy and engineering for product-driven teams (LLC).",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Conplexus",
    description: "Conplexus — Strategy and engineering for product-driven teams (LLC).",
    type: "website",
    url: "https://conplexus.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Conplexus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Conplexus",
    description: "Conplexus — Strategy and engineering for product-driven teams (LLC).",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans">
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-conx-blue focus:text-white focus:rounded-md"
        >
          Skip to content
        </a>
        <Header />
        <Sidebar />
        {/* Top pad by header; left pad by sidebar on lg+ */}
        <main id="main-content" className="flex-1 pt-[var(--header-h)] lg:pl-[var(--sidebar-w)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
