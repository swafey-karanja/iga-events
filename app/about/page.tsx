import type { Metadata } from "next";
import AboutCta from "@/src/components/sections/about-page/AboutCta";
import AboutFacts from "@/src/components/sections/about-page/AboutFacts";
import AboutGallery from "@/src/components/sections/about-page/AboutGallery";
import AboutHero from "@/src/components/sections/about-page/AboutHero";
import AboutIntro from "@/src/components/sections/about-page/AboutIntro";
import AboutPillars from "@/src/components/sections/about-page/AboutPillars";
import AboutTestimonials from "@/src/components/sections/about-page/AboutTestimonials";

export const metadata: Metadata = {
  title: "About us",
  description:
    "We bring people, industries and ideas together through conferences, summits and exhibitions. Meet the people behind the experience.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About us",
    description:
      "We bring people, industries and ideas together through conferences, summits and exhibitions.",
    url: "/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutIntro />
      <AboutPillars />
      <AboutFacts />
      <AboutTestimonials />
      <AboutGallery />
      <AboutCta />
    </>
  );
}
