import type { Metadata } from "next";

export const baseMetadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Saqib — Creative Developer & Growth Partner",
  description: "Premium web development, SEO, and digital marketing services.",
  openGraph: {
    title: "Saqib — Creative Developer",
    description: "Awwwards-level personal brand and services website.",
    type: "website"
  }
};

export const buildJsonLd = (name: string) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name,
  jobTitle: "Creative Frontend Engineer",
  sameAs: ["https://github.com/"],
  url: process.env.NEXT_PUBLIC_SITE_URL
});
