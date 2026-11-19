import type { MetadataRoute } from "next";
import { SITE_URL } from "@/src/lib/constants/site";

const ROUTES = ["", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => ({ url: `${SITE_URL}${path}` }));
}
