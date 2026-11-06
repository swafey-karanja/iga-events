import NewsCard from "@/src/components/sections/news/NewsCard";
import { getNewsArticles } from "@/src/lib/data/news";
import ArrowLink from "@/src/components/ui/ArrowLink";

export default async function News() {
  const articles = await getNewsArticles();

  return (
    <section
      id="news"
      aria-labelledby="news-heading"
      className="bg-cream py-8 md:py-16"
    >
      <div className="mx-auto w-full px-4 sm:px-6 xl:max-w-9/12 xl:px-0">
        <h2 id="news-heading" className="sr-only">
          News and insights
        </h2>

        <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-primary">
          <span aria-hidden className="size-1.5 bg-secondary" />
          News & Insights
        </p>

        <div className="mt-2 grid gap-6 sm:gap-8 xl:grid-cols-[1fr_22rem] xl:items-end xl:gap-16">
          <h2
            id="news-heading"
            className="text-3xl font-semibold tracking-tight text-primary sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            <span className="block">Latest News And Trends</span>
          </h2>

          <div className="flex flex-col items-start gap-6">
            <p className="text-xs md:text-sm leading-relaxed text-black/70">
              From the first strategic conversation to the final moment on
              stage, an integrated approach keeps the whole experience
              connected.
            </p>

            <ArrowLink href="/#news">View all news</ArrowLink>
          </div>
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
