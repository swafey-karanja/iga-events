import { createClient } from "@sanity/client";

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET;

if (!projectId || !dataset) {
  throw new Error("Missing SANITY_PROJECT_ID or SANITY_DATASET.");
}

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: "2026-11-13",
  useCdn: false, // Next's cache does the caching, and this avoids stale CDN reads after a publish
});
