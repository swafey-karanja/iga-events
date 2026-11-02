// PLACEHOLDERS: replace with verified company content and real assets
export const ABOUT = {
  tagline:
    "We bring people, industries and ideas together through conferences, summits and exhibitions.",
  introduction:
    "We bring people, industries and ideas together through conferences, summits and exhibitions. Our approach connects strategic thinking with creative production and thoughtful delivery, wherever the conversation takes us.",
  mission:
    "To create the conditions for meaningful connection — across industries, places and perspectives.",
} as const;

export type Pillar = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const PILLARS: readonly Pillar[] = [
  {
    id: "conferences",
    title: "Conferences & summits",
    description:
      "Programme design, speakers and seamless delivery, from plenary to breakout.",
    image:
      "https://res.cloudinary.com/odxuv15g/image/upload/v1784632446/Tuesday-64_xldlxy_tivu37.webp",
    imageAlt: "[Conference photo description]",
  },
  {
    id: "exhibitions",
    title: "Exhibitions",
    description:
      "Thoughtful floor plans and exhibitor experiences that encourage discovery.",
    image:
      "https://res.cloudinary.com/odxuv15g/image/upload/v1784632281/DJI_0885_dvoecp_o5ah98.webp",
    imageAlt: "[Exhibition photo description]",
  },
  {
    id: "strategy",
    title: "Event strategy",
    description: "A clear purpose, audience and roadmap for every gathering.",
    image:
      "https://res.cloudinary.com/odxuv15g/image/upload/v1784632320/iGA_Main_Stage_2-97_vmq50w_i8wrzg.webp",
    imageAlt: "[Strategy photo description]",
  },
];

export type Fact = { id: string; label: string; value?: string };

// Set `value` once verified, e.g. "75+"
export const FACTS: readonly Fact[] = [
  { id: "founded", label: "Founded", value: "2016" },
  { id: "team", label: "Team members", value: "20" },
  { id: "offices", label: "Offices", value: "330 Diani Road" },
  { id: "nationalities", label: "Nationalities", value: "5" },
];

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
};

export const TESTIMONIALS: readonly Testimonial[] = [1, 2, 3].map((n) => ({
  id: `testimonial-${n}`,
  quote: "[Client testimonial to be added]",
  name: "[Name]",
  role: "[Job title, Company]",
}));

export const GALLERY = [1, 2, 3, 4, 5].map((n) => ({
  id: `photo-${n}`,
  image:
    "https://images.unsplash.com/photo-1711390811760-1e9f2ab28cb7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  imageAlt: "[Event photo description]",
}));
