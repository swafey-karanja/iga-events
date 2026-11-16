export type NewsArticle = {
  id: string;
  category: string;
  /** ISO date, e.g. "2026-10-26". Leave undefined until the real date is known. */
  publishedAt?: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  href: string;
  /** Remove once the article is real */
  isSample?: boolean;
};

type WpPost = {
  id: number;
  date: string;
  link: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  yoast_head_json?: { og_image?: { url: string }[] };
};

const WP_NEWS_URL = "https://igamingafrika.com/wp-json/wp/v2/posts";
const CATEGORY_ID = 20;
const TAG_ID = 3229;
const NEWS_LIMIT = 10;

// PLACEHOLDERS: replace with real assets
const PLACEHOLDER_IMAGE = "/placeholders/news.jpg"; // used when a post has no image
const CATEGORY_LABEL = "News"; // TODO: real category label

const ENTITIES: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
  hellip: "…",
  ndash: "–",
  mdash: "—",
  lsquo: "‘",
  rsquo: "’",
  ldquo: "“",
  rdquo: "”",
};

/** WordPress returns HTML strings: strip tags and decode entities (no HTML is ever injected) */
const plainText = (html: string) =>
  html
    .replace(/<[^>]*>/g, "")
    .replace(/&(?:#(\d+)|#x([\da-f]+)|([a-z]+));/gi, (match, dec, hex, name) =>
      dec
        ? String.fromCodePoint(Number(dec))
        : hex
          ? String.fromCodePoint(parseInt(hex, 16))
          : (ENTITIES[name.toLowerCase()] ?? match),
    )
    .replace(/\s+/g, " ")
    .trim();

const clip = (text: string, max = 120) =>
  text.length > max ? `${text.slice(0, max).trimEnd()}…` : text;

const toArticle = (post: WpPost): NewsArticle => {
  const title = plainText(post.title.rendered);
  return {
    id: String(post.id),
    category: CATEGORY_LABEL,
    publishedAt: post.date.slice(0, 10), // "YYYY-MM-DD" avoids timezone date shifts
    title,
    excerpt: clip(plainText(post.excerpt.rendered).replace(/\s*\[…\]$/, "")),
    image: post.yoast_head_json?.og_image?.[0]?.url ?? PLACEHOLDER_IMAGE,
    imageAlt: title,
    href: post.link,
  };
};

export async function getNewsArticles(
  limit = NEWS_LIMIT,
): Promise<NewsArticle[]> {
  const params = new URLSearchParams({
    categories: String(CATEGORY_ID),
    tags: String(TAG_ID),
    per_page: String(limit),
    _fields: "id,date,link,title,excerpt,yoast_head_json.og_image",
  });

  try {
    const response = await fetch(`${WP_NEWS_URL}?${params}`, {
      next: { revalidate: 3600 }, // revalidate every hour
    });

    if (!response.ok) {
      console.error(`News API error: ${response.status}`);
      return [];
    }

    const data: unknown = await response.json();
    return Array.isArray(data) ? (data as WpPost[]).map(toArticle) : [];
  } catch {
    console.error("Failed to fetch news");
    return [];
  }
}
