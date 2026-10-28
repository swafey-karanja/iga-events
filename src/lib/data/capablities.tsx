export type Capability = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

// PLACEHOLDERS: replace with a real image per capability
const PLACEHOLDER_IMAGE = "/placeholders/capability.jpg";
const PLACEHOLDER_ALT = "[Capability image description]";

export const CAPABILITIES: readonly Capability[] = [
  {
    id: "conferences",
    title: "Conferences & summits",
    description:
      "Programme design, speakers and seamless delivery, from plenary to breakout.",
    image:
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    imageAlt: PLACEHOLDER_ALT,
  },
  {
    id: "exhibitions",
    title: "Exhibitions",
    description:
      "Thoughtful floor plans and exhibitor experiences that encourage discovery.",
    image:
      "https://images.unsplash.com/photo-1638132704795-6bb223151bf7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    imageAlt: PLACEHOLDER_ALT,
  },
  {
    id: "strategy",
    title: "Event strategy",
    description: "A clear purpose, audience and roadmap for every gathering.",
    image:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    imageAlt: PLACEHOLDER_ALT,
  },
  {
    id: "sponsorship",
    title: "Sponsorship",
    description:
      "Relevant partnerships and activation opportunities built around shared value.",
    image:
      "https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    imageAlt: PLACEHOLDER_ALT,
  },
  {
    id: "registration",
    title: "Delegate registration",
    description:
      "A considered journey from the first invitation to the welcome desk.",
    image:
      "https://plus.unsplash.com/premium_photo-1726880601788-187bde243b0a?q=80&w=1438&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    imageAlt: PLACEHOLDER_ALT,
  },
  {
    id: "marketing",
    title: "Event marketing",
    description:
      "Audience insight, compelling campaigns and a connected communications plan.",
    image:
      "https://images.unsplash.com/photo-1560523160-c4ef2f0c61a9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    imageAlt: PLACEHOLDER_ALT,
  },
  {
    id: "creative",
    title: "Creative production",
    description:
      "A distinctive event identity, brought to life across every touchpoint.",
    image:
      "https://images.unsplash.com/photo-1523379882969-04477e5c1e90?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    imageAlt: PLACEHOLDER_ALT,
  },
  {
    id: "logistics",
    title: "Logistics & operations",
    description:
      "Venues, suppliers and on-site coordination, all working in concert.",
    image:
      "https://images.unsplash.com/photo-1654609160632-7324716196fb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    imageAlt: PLACEHOLDER_ALT,
  },
  {
    id: "audiovisual",
    title: "Audiovisual services",
    description:
      "Sound, lighting, staging and show direction that put the content first.",
    image:
      "https://images.unsplash.com/photo-1560523160-754a9e25c68f?q=80&w=1436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    imageAlt: PLACEHOLDER_ALT,
  },
  {
    id: "sideevents",
    title: "Side events",
    description:
      "Sound, lighting, staging and show direction that put the content first.",
    image:
      "https://images.unsplash.com/photo-1725745095955-20f97f6a7423?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    imageAlt: PLACEHOLDER_ALT,
  },
];
