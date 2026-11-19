import { createClient } from "@sanity/client";

export function getWriteClient() {
  const projectId = process.env.SANITY_PROJECT_ID;
  const dataset = process.env.SANITY_DATASET;
  const token = process.env.SANITY_API_WRITE_TOKEN;

  if (!projectId || !dataset || !token) {
    throw new Error("Missing Sanity write configuration.");
  }
  return createClient({
    projectId,
    dataset,
    token,
    apiVersion: "2026-11-13",
    useCdn: false,
  });
}
