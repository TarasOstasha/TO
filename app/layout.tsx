import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { ParticleBackground } from "@/components/ParticleBackground";
import { NavBar } from "@/components/layout/NavBar";
import { FooterBar } from "@/components/layout/FooterBar";
import { SITE_URL, siteMetadata } from "@/lib/site-config";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: siteMetadata.siteName,
      description: siteMetadata.description,
      inLanguage: "en-US",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Taras Ostasha",
      url: SITE_URL,
      image: `${SITE_URL}/preview.jpg`,
      jobTitle: "Full Stack Developer",
      email: "dev@tarasostasha.com",
      sameAs: ["https://github.com/tarasostasha"],
      address: {
        "@type": "PostalAddress",
        addressRegion: "NJ",
        addressCountry: "US",
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: siteMetadata.title,
  description: siteMetadata.description,
  applicationName: siteMetadata.siteName,
  authors: [{ name: "Taras Ostasha", url: SITE_URL }],
  creator: "Taras Ostasha",
  publisher: "Taras Ostasha",
  category: "technology",
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.ogDescription,
    url: SITE_URL,
    siteName: siteMetadata.siteName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
        alt: siteMetadata.siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.twitterDescription,
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

export const viewport: Viewport = {
  themeColor: "#05060A",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-slate-100">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
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
