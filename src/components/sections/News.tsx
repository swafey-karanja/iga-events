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
      <div className="mx-auto w-full px-4 sm:px-6 xl:max-w-9/12 xl:px-0">
        <h2 id="news-heading" className="sr-only">
          News and insights
        </h2>

        <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-6">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
            <span aria-hidden className="size-1.5 bg-primary" />
            News &amp; insights
          </p>

          {/* TODO: point to the news page once it exists */}
          <ArrowLink href="/news">View all news</ArrowLink>
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:mt-12 sm:grid-cols-2 sm:gap-y-12 lg:mt-16 lg:grid-cols-3 2xl:grid-cols-4">
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
