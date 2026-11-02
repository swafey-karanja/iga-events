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
    image:
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
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
    image:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
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
    image:
      "https://plus.unsplash.com/premium_photo-1726880601788-187bde243b0a?q=80&w=1438&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    imageAlt: "[Article image description]",
    href: "#news",
    isSample: true,
  },
  {
    id: "article-4",
    category: "Strategy & perspective",
    title: "Every memorable event begins with a clear purpose",
    excerpt:
      "A sample look at the questions worth asking before the first agenda takes shape.",
    image:
      "https://images.unsplash.com/photo-1523379882969-04477e5c1e90?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    imageAlt: "[Article image description]",
    href: "#news",
    isSample: true,
  },
];

export async function getNewsArticles(): Promise<NewsArticle[]> {
  return PLACEHOLDER_ARTICLES; // later: fetch from CMS/API with revalidation
}
