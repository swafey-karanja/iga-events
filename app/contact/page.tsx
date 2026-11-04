import type { Metadata } from "next";
import ContactBody from "@/src/components/sections/contact/ContactBody";
import ContactCta from "@/src/components/sections/contact/ContactCta";
import ContactHero from "@/src/components/sections/contact/ContactHero";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Get in touch about your next event. Send us a message and we’ll route it to the right team.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact us",
    description:
      "Get in touch about your next event. Send us a message and we’ll route it to the right team.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactBody />
      <ContactCta />
    </>
  );
}
