// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Conplexus",
  description: "Connecting the Complexities between Us",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <Sidebar />
        {/* Top pad by header; left pad by sidebar on lg+ */}
        <main className="flex-1 pt-[var(--header-h)] lg:pl-[var(--sidebar-w)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
