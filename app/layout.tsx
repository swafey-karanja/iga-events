import { Open_Sans, Poppins } from "next/font/google";
import Navbar from "@/src/components/layout/Navbar";
import "./globals.css";
import { Metadata } from "next";
import Footer from "@/src/components/layout/Footer";
import SocialSidebar from "@/src/components/layout/SocialSidebar";
import SmoothScroll from "@/src/components/layout/SmoothScroll";
import { getEventNavLinks } from "@/src/lib/data/event-listings";
import { OG_IMAGE, SITE_URL } from "@/src/lib/constants/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "iGA Events", template: "%s | iGA Events" },
  description:
    "Nairobi-based events company delivering conferences, summits and exhibitions across Africa, including the iGaming AFRIKA Summit.",
  keywords: [
    "events company Africa",
    "event organisers Nairobi",
    "conferences Africa",
    "summits Africa",
    "exhibitions Nairobi",
    "iGaming AFRIKA Summit",
    "iGA Events",
  ],
  icons: { icon: "/iga-favicon.png", apple: "/iga-favicon.png" },
  openGraph: {
    siteName: "iGA Events",
    locale: "en_US",
    type: "website",
  },
};

const organisationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "iGA Events",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Events company organising conferences, summits and exhibitions across Africa.",
  sameAs: [
    "https://www.linkedin.com/company/igasummit/",
    "https://www.instagram.com/igasummit",
    "https://x.com/iGASummit",
    "https://www.youtube.com/@iGASummit",
    "https://www.facebook.com/share/1Ay79xHcfi/",
  ],
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const eventLinks = await getEventNavLinks();
  return (
    <html lang="en" className={`${poppins.variable} ${openSans.variable}`}>
      <body className=" text-black antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organisationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <SmoothScroll />
        <Navbar eventLinks={eventLinks} />
        <SocialSidebar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
