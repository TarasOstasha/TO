import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { ParticleBackground } from "@/components/ParticleBackground";
import { NavBar } from "@/components/layout/NavBar";
import { FooterBar } from "@/components/layout/FooterBar";

// export const metadata: Metadata = {
//   title: "Taras Ostasha · Full Stack Developer",
//   description: "Full stack developer crafting cinematic web experiences with Next.js, TypeScript, Node, and modern tooling."
// };
export const metadata: Metadata = {
  metadataBase: new URL("https://tarasostasha.com"),
  title: "Taras Ostasha · Full Stack Developer",
  description:
    "Full stack developer crafting cinematic web experiences with Next.js, TypeScript, Node, and modern tooling.",

  openGraph: {
    title: "Taras Ostasha · Full Stack Developer",
    description:
      "Full stack developer portfolio — real projects, systems, and automation.",
    url: "https://tarasostasha.com",
    siteName: "Taras Ostasha Portfolio",
    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Taras Ostasha Portfolio",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Taras Ostasha · Full Stack Developer",
    description:
      "Full stack developer portfolio — real projects and systems.",
    images: ["/preview.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-slate-100">
        <ParticleBackground />
        <div className="noise-overlay" />
        <div className="relative z-10 flex min-h-screen flex-col">
          <NavBar />
          <main className="flex-1">{children}</main>
          <FooterBar />
        </div>
      </body>
    </html>
  );
}
