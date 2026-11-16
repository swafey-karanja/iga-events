// PLACEHOLDERS: replace with verified company content and real assets
export const ABOUT = {
  tagline:
    "We organise conferences, exhibitions and industry events that connect businesses, people and opportunities across the continent.",
  introduction:
    "IGA Events is an Africa-focused events company specialising in conferences, exhibitions, summits and industry gatherings.\n" +
    "\n" +
    "With roots in the gaming industry through our flagship iGaming AFRIKA Summit, our work spans sectors including technology, finance, tourism, entertainment, energy, healthcare and beyond. We bring businesses, professionals and industry leaders together through events that encourage meaningful connections and new opportunities.\n" +
    "\n" +
    "We work with partners across Africa and internationally to develop, organise and deliver events of all sizes and formats.",
  mission:
    "To bring people and industries together through well organised events that encourage connections, conversations and business opportunities.",
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
  role?: string;
};

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    id: `1`,
    quote:
      "iGA Summit provided an outstanding platform for meaningful networking and industry connections. The event delivered real value and exceeded expectations.",
    name: "Brian Kubasu",
    role: "AxumBet",
  },
  {
    id: `2`,
    quote:
      "From the conference sessions to the networking opportunities and overall event experience, iGA Summit brought together the right people, ideas, and opportunities under one roof.",
    name: "Bwalya Noah",
    role: "Pawatech",
  },
  {
    id: `3`,
    quote:
      "The exhibition area, networking opportunities, venue setup, and hospitality created an excellent environment for business engagement. I would definitely attend again.",
    name: "Morris",
  },
  {
    id: `4`,
    quote:
      "The conference sessions were insightful, relevant, and professionally delivered. iGA Summit exceeded my expectations and provided valuable industry knowledge.",
    name: "Paul Adika",
    role: "Jump Extreme",
  },
];

export const GALLERY = [
  {
    id: `photo-1`,
    image:
      "https://res.cloudinary.com/odxuv15g/image/upload/v1784632494/iGA_Welcome_Dinner-89_vt8njc_dk2ts9.webp",
    imageAlt: "[Event photo description]",
  },
  {
    id: `photo-1`,
    image:
      "https://res.cloudinary.com/odxuv15g/image/upload/v1784632474/DSC03923_boivuu_ziqoxi.webp",
    imageAlt: "[Event photo description]",
  },
  {
    id: `photo-1`,
    image:
      "https://res.cloudinary.com/odxuv15g/image/upload/v1784632401/IGA_Safari-122_hiwzca_mxrbdh.webp",
    imageAlt: "[Event photo description]",
  },
  {
    id: `photo-1`,
    image:
      "https://res.cloudinary.com/odxuv15g/image/upload/v1784632400/IGA_Safari-119_sexdxt_kdjwqm.webp",
    imageAlt: "[Event photo description]",
  },
  {
    id: `photo-1`,
    image:
      "https://res.cloudinary.com/odxuv15g/image/upload/v1784632320/iGA_Main_Stage_2-97_vmq50w_i8wrzg.webp",
    imageAlt: "[Event photo description]",
  },
  {
    id: `photo-1`,
    image:
      "https://res.cloudinary.com/odxuv15g/image/upload/v1784632301/COM_3263_yum26k_npgw33.webp",
    imageAlt: "[Event photo description]",
  },
  {
    id: `photo-1`,
    image:
      "https://res.cloudinary.com/odxuv15g/image/upload/v1784632280/DJI_0876_szyzmj_eriyui.webp",
    imageAlt: "[Event photo description]",
  },
];
