"use client";

import { useState } from "react";
import RefreshIcon from "@mui/icons-material/Refresh";
import NewsCard from "@/src/components/sections/news/NewsCard";
import type { NewsArticle } from "@/src/lib/data/news";

const PAGE_SIZE = 4;

export default function NewsList({ articles }: { articles: NewsArticle[] }) {
  const [visible, setVisible] = useState(PAGE_SIZE);

  if (articles.length === 0) {
    return (
      <p className="mt-8 text-center text-lg font-semibold text-black/50 sm:mt-12">
        No news or blog posts found.
      </p>
    );
  }

  return (
    <>
      <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:mt-12 sm:grid-cols-2 sm:gap-y-12 lg:mt-16 lg:grid-cols-3 xl:grid-cols-4">
        {articles.slice(0, visible).map((article) => (
          <li
            key={article.id}
            className="transition duration-500 starting:translate-y-4 starting:opacity-0 motion-reduce:transition-none"
          >
            <NewsCard article={article} />
          </li>
        ))}
      </ul>

      <div aria-live="polite" className="mt-10 flex justify-center sm:mt-12">
        {visible < articles.length ? (
          <button
            type="button"
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none"
          >
            Load more stories
            <RefreshIcon fontSize="small" />
          </button>
        ) : (
          <p className="text-sm font-medium text-black/60">
            You’re all caught up
          </p>
        )}
      </div>
    </>
  );
}
