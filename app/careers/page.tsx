import type { Metadata } from "next";
import CareersHero from "@/src/components/sections/careers/CareersHero";
import CareersInterest from "@/src/components/sections/careers/CareersInterest";
import CareersIntro from "@/src/components/sections/careers/CareersIntro";
import CareersJobs from "@/src/components/sections/careers/CareersJobs";
import { getJobs } from "@/src/lib/data/careers";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Great gatherings start with great people. See our open roles or register your interest in future opportunities.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers",
    description:
      "Great gatherings start with great people. See our open roles or register your interest.",
    url: "/careers",
    type: "website",
  },
};

export default async function CareersPage() {
  const jobs = await getJobs();

  return (
    <>
      <CareersHero />
      <CareersIntro />
      <CareersJobs jobs={jobs} />
      <CareersInterest hasJobs={jobs.length > 0} />
    </>
  );
}
