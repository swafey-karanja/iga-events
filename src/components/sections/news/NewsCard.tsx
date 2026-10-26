import Image from "next/image";
import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import type { NewsArticle } from "@/src/lib/data/news";

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export default function NewsCard({ article }: { article: NewsArticle }) {
  const {
    category,
    publishedAt,
    title,
    excerpt,
    image,
    imageAlt,
    href,
    isSample,
  } = article;

  return (
    <article className="group relative flex h-full flex-col has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-4 has-[a:focus-visible]:outline-primary">
      <div className="relative aspect-[16/10] overflow-hidden bg-primary/10">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
        {isSample && (
          <span className="absolute left-3 top-3 bg-cream/90 px-2.5 py-1 text-[0.6875rem] font-semibold uppercase text-primary">
            Sample article
          </span>
        )}
      </div>

      <p className="mt-6 text-xs uppercase tracking-wide text-black/60">
        {category} ·{" "}
        {publishedAt ? (
          <time dateTime={publishedAt}>
            {dateFormatter.format(new Date(publishedAt))}
          </time>
        ) : (
          "[Publication date]"
        )}
      </p>

      <h3 className="mt-4 font-heading text-xl font-semibold leading-snug text-primary lg:text-2xl">
        <Link
          href={href}
          className="after:absolute after:inset-0 focus-visible:outline-none"
        >
          {title}
        </Link>
      </h3>

      <p className="mt-4 text-sm leading-relaxed text-black/70">{excerpt}</p>

      <span
        aria-hidden
        className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-primary"
      >
        Read more
        <ArrowOutwardIcon
          fontSize="inherit"
          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
        />
      </span>
    </article>
  );
}
