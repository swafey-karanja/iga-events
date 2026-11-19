import Hero from "@/src/components/sections/Hero";
import Events from "@/src/components/sections/Events";
import Stats from "@/src/components/sections/Stats";
import Capabilities from "@/src/components/sections/Capablities";
// import About from "@/src/components/sections/About";
import News from "@/src/components/sections/News";
// import CompanyProfile from "@/src/components/sections/CompanyProfile";
import PastEvents from "@/src/components/sections/PastEvents";
import type { Metadata } from "next";
import { OG_IMAGE } from "@/src/lib/constants/site";

export const metadata: Metadata = {
  title: {
    absolute: "iGA Events | Conferences, Summits & Exhibitions in Africa",
  },
  description:
    "Nairobi-based events company delivering conferences, summits and exhibitions across Africa, including the iGaming AFRIKA Summit. Explore our events and get in touch.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "iGA Events | Conferences, Summits & Exhibitions in Africa",
    description:
      "From the iGaming AFRIKA Summit to bespoke conferences and exhibitions, iGA Events brings businesses, professionals and industry leaders together across Africa.",
    url: "/",
    siteName: "iGA Events",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "iGA Events: conferences, summits and exhibitions in Africa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "iGA Events | Conferences, Summits & Exhibitions in Africa",
    description:
      "Africa-focused events company behind the iGaming AFRIKA Summit in Nairobi. Explore our events and plan yours with us.",
    images: [OG_IMAGE],
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Events />
      <PastEvents />
      <Capabilities />
      <Stats />
      <News />
      {/*<About />*/}
      {/*<CompanyProfile />*/}
    </>
  );
}
