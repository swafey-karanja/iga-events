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
      "Bringing industry leaders together to exchange ideas and shape opportunities",
    image:
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    imageAlt: PLACEHOLDER_ALT,
  },
  {
    id: "exhibitions",
    title: "Exhibitions",
    description:
      "Creating platforms where businesses showcase innovations and connect with markets.",
    image:
      "https://images.unsplash.com/photo-1638132704795-6bb223151bf7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    imageAlt: PLACEHOLDER_ALT,
  },
  {
    id: "strategy",
    title: "Event strategy",
    description:
      "Defining the vision, audience and roadmap for successful events.",
    image:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    imageAlt: PLACEHOLDER_ALT,
  },
  {
    id: "sponsorship",
    title: "Sponsorship",
    description:
      "Building valuable partnerships that deliver measurable commercial opportunities.",
    image:
      "https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    imageAlt: PLACEHOLDER_ALT,
  },
  {
    id: "registration",
    title: "Delegate registration",
    description:
      "Delivering seamless registration and engaging attendee experiences.",
    image:
      "https://plus.unsplash.com/premium_photo-1726880601788-187bde243b0a?q=80&w=1438&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    imageAlt: PLACEHOLDER_ALT,
  },
  {
    id: "marketing",
    title: "Event marketing",
    description:
      "Connecting events with the right audiences through targeted campaigns.",
    image:
      "https://images.unsplash.com/photo-1560523160-c4ef2f0c61a9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    imageAlt: PLACEHOLDER_ALT,
  },
  {
    id: "creative",
    title: "Creative production",
    description:
      "Transforming concepts into compelling event identities and experiences.",
    image:
      "https://images.unsplash.com/photo-1523379882969-04477e5c1e90?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    imageAlt: PLACEHOLDER_ALT,
  },
  {
    id: "logistics",
    title: "Logistics & operations",
    description:
      "Coordinating every operational detail for seamless event delivery",
    image:
      "https://images.unsplash.com/photo-1654609160632-7324716196fb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    imageAlt: PLACEHOLDER_ALT,
  },
  {
    id: "audiovisual",
    title: "Audiovisual services",
    description:
      "Delivering professional staging, sound, lighting and visual experiences.",
    image:
      "https://images.unsplash.com/photo-1560523160-754a9e25c68f?q=80&w=1436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    imageAlt: PLACEHOLDER_ALT,
  },
  {
    id: "sideevents",
    title: "Side events",
    description:
      "Creating exclusive networking, entertainment and industry experiences.",
    image:
      "https://images.unsplash.com/photo-1725745095955-20f97f6a7423?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    imageAlt: PLACEHOLDER_ALT,
  },
];
