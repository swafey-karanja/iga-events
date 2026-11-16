export type Capability = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

const PLACEHOLDER_ALT = "[Capability image description]";

export const CAPABILITIES: readonly Capability[] = [
  {
    id: "conferences",
    title: "Conferences & summits",
    description:
      "Bringing industry leaders together to exchange ideas and shape opportunities",
    image:
      "https://res.cloudinary.com/odxuv15g/image/upload/v1784632318/A7407329_ik5vxt_pqwajz.webp",
    imageAlt: PLACEHOLDER_ALT,
  },
  {
    id: "exhibitions",
    title: "Exhibitions",
    description:
      "Creating platforms where businesses showcase innovations and connect with markets.",
    image:
      "https://res.cloudinary.com/odxuv15g/image/upload/v1784632281/DJI_0885_dvoecp_o5ah98.webp",
    imageAlt: PLACEHOLDER_ALT,
  },
  {
    id: "strategy",
    title: "Event strategy",
    description:
      "Defining the vision, audience and roadmap for successful events.",
    image:
      "https://res.cloudinary.com/odxuv15g/image/upload/v1784632281/DSC_6413_m0itpi_mlrv86.webp",
    imageAlt: PLACEHOLDER_ALT,
  },
  {
    id: "sponsorship",
    title: "Sponsorship",
    description:
      "Building valuable partnerships that deliver measurable commercial opportunities.",
    image:
      "https://res.cloudinary.com/odxuv15g/image/upload/v1784632247/DSC06919_t2k9o9_czov8k.webp",
    imageAlt: PLACEHOLDER_ALT,
  },
  {
    id: "registration",
    title: "Delegate registration",
    description:
      "Delivering seamless registration and engaging attendee experiences.",
    image:
      "https://res.cloudinary.com/odxuv15g/image/upload/v1784632319/iGA_Main_Stage-164_qefzpm_d2nuje.webp",
    imageAlt: PLACEHOLDER_ALT,
  },
  {
    id: "marketing",
    title: "Event marketing",
    description:
      "Connecting events with the right audiences through targeted campaigns.",
    image:
      "https://res.cloudinary.com/odxuv15g/image/upload/v1784632282/DSC_1615_btjezg_kog1kk.webp",
    imageAlt: PLACEHOLDER_ALT,
  },
  {
    id: "creative",
    title: "Creative production",
    description:
      "Transforming concepts into compelling event identities and experiences.",
    image:
      "https://res.cloudinary.com/odxuv15g/image/upload/v1784632215/DSC_1872_phriym_vp8elv.webp",
    imageAlt: PLACEHOLDER_ALT,
  },
  {
    id: "logistics",
    title: "Logistics & operations",
    description:
      "Coordinating every operational detail for seamless event delivery",
    image:
      "https://res.cloudinary.com/odxuv15g/image/upload/v1784632397/IGA_Safari-29_ge5cmk_qxvujc.webp",
    imageAlt: PLACEHOLDER_ALT,
  },
  {
    id: "audiovisual",
    title: "Audiovisual services",
    description:
      "Delivering professional staging, sound, lighting and visual experiences.",
    image:
      "https://res.cloudinary.com/odxuv15g/image/upload/v1784632442/S2_ssn2-28_oid7ip_vzl1zw.webp",
    imageAlt: PLACEHOLDER_ALT,
  },
  {
    id: "sideevents",
    title: "Side events",
    description:
      "Creating exclusive networking, entertainment and industry experiences.",
    image:
      "https://res.cloudinary.com/odxuv15g/image/upload/v1784632491/iGA_Welcome_Dinner-76_c7xch6_kbj6rz.webp",
    imageAlt: PLACEHOLDER_ALT,
  },
];
