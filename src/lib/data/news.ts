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

// PLACEHOLDERS: replace with real articles and assets
const PLACEHOLDER_IMAGE = "/placeholders/news.jpg";

const PLACEHOLDER_ARTICLES: NewsArticle[] = [
  {
    id: "article-1",
    category: "Experience design",
    title: "Designing the moments between the sessions",
    excerpt:
      "A sample perspective on how thoughtful spaces and informal conversations can shape an event experience.",
    image: PLACEHOLDER_IMAGE,
    imageAlt: "[Article image description]",
    href: "#news", // TODO: article route
    isSample: true,
  },
  {
    id: "article-2",
    category: "Exhibitions",
    title: "The exhibition floor as a place for discovery",
    excerpt:
      "A sample exploration of spaces that help exhibitors, visitors and ideas find each other.",
    image: PLACEHOLDER_IMAGE,
    imageAlt: "[Article image description]",
    href: "#news",
    isSample: true,
  },
  {
    id: "article-3",
    category: "Strategy & perspective",
    title: "Every memorable event begins with a clear purpose",
    excerpt:
      "A sample look at the questions worth asking before the first agenda takes shape.",
    image: PLACEHOLDER_IMAGE,
    imageAlt: "[Article image description]",
    href: "#news",
    isSample: true,
  },
];

export async function getNewsArticles(): Promise<NewsArticle[]> {
  return PLACEHOLDER_ARTICLES; // later: fetch from CMS/API with revalidation
}
