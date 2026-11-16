import NewsList from "@/src/components/sections/news/NewsList";
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

          {/*<div className="flex flex-col items-end">*/}
          {/*  <ArrowLink href="/#news">View all news</ArrowLink>*/}
          {/*</div>*/}
        </div>

        <NewsList articles={articles} />
      </div>
    </section>
  );
}
