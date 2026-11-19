import type { Metadata } from "next";
import AboutCta from "@/src/components/sections/about-page/AboutCta";
import { OG_IMAGE } from "@/src/lib/constants/site";
import AboutGallery from "@/src/components/sections/about-page/AboutGallery";
import AboutHero from "@/src/components/sections/about-page/AboutHero";
import AboutIntro from "@/src/components/sections/about-page/AboutIntro";
import AboutPillars from "@/src/components/sections/about-page/AboutPillars";
import AboutTestimonials from "@/src/components/sections/about-page/AboutTestimonials";

export const metadata: Metadata = {
  title: "About Us – Africa-Focused Event Organisers",
  description:
    "Africa-focused events company organising conferences, summits and exhibitions that connect businesses, professionals and industry leaders across the continent.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About iGA Events | Africa-Focused Event Organisers",
    description:
      "Meet the team behind the iGaming AFRIKA Summit. We design and deliver conferences, summits and exhibitions across technology, finance, tourism, entertainment and more.",
    url: "/about",
    siteName: "iGA Events",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "The iGA Events team and our events across Africa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About iGA Events | Africa-Focused Event Organisers",
    description:
      "We bring people, industries and ideas together through conferences, summits and exhibitions across Africa.",
    images: [OG_IMAGE],
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutIntro />
      <AboutPillars />
      {/*<AboutFacts />*/}
      <AboutTestimonials />
      <AboutGallery />
      <AboutCta />
    </>
  );
}
