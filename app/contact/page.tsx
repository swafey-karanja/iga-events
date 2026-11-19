import type { Metadata } from "next";
import ContactBody from "@/src/components/sections/contact/ContactBody";
import ContactCta from "@/src/components/sections/contact/ContactCta";
import ContactHero from "@/src/components/sections/contact/ContactHero";
import ContactForm from "@/src/components/sections/contact/ContactForm";
import { OG_IMAGE } from "@/src/lib/constants/site";

export const metadata: Metadata = {
  title: "Contact Us – Start Planning Your Event",
  description:
    "Planning a conference, summit or exhibition? Contact the iGA Events team in Nairobi with your event details and we'll route your enquiry to the right people.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact iGA Events | Plan Your Conference, Summit or Exhibition",
    description:
      "Tell us about your event, whether a conference, exhibition, corporate event or awards gala. Our Nairobi team will get back to you.",
    url: "/contact",
    siteName: "iGA Events",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Contact iGA Events, Nairobi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact iGA Events | Plan Your Event With Us",
    description:
      "Send us your event brief and the iGA Events team in Nairobi will be in touch.",
    images: [OG_IMAGE],
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactBody />
      <ContactForm />
      <ContactCta />
    </>
  );
}
