import Link from "next/link";
import NewsCard from "@/src/components/sections/news/NewsCard";
import { getNewsArticles } from "@/src/lib/data/news";
import ArrowLink from "@/src/components/ui/ArrowLink";

export default async function News() {
  const articles = await getNewsArticles();

  return (
    <section
      id="news"
      aria-labelledby="news-heading"
      className="bg-cream py-16"
    >
      <div className="mx-auto max-w-10/12">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
          <span aria-hidden className="size-1.5 bg-primary" />
          News &amp; insights
        </p>

        <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
          <h2
            id="news-heading"
            className="mt-3 text-4xl font-medium tracking-tight text-primary lg:text-7xl"
          >
            <span className="block">Ideas worth</span>
            <span className="block">bringing together.</span>
          </h2>

          {/* TODO: point to the news page once it exists */}
          <ArrowLink href="/news">View all news</ArrowLink>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {articles.map((article) => (
            <li key={article.id}>
              <NewsCard article={article} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
