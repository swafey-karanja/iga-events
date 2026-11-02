import Image from "next/image";
import { GALLERY } from "@/src/lib/data/about";
import { CONTENT } from "@/src/lib/constants/layout";

export default function AboutGallery() {
  return (
    <section
      aria-labelledby="gallery-heading"
      className="bg-white py-16 lg:py-24"
    >
      <div className={CONTENT}>
        <h2
          id="gallery-heading"
          className="text-3xl font-medium tracking-tight text-primary sm:text-4xl lg:text-5xl"
        >
          Moments from our events
        </h2>

        <ul className="mt-10 grid grid-cols-2 gap-2 sm:mt-12 sm:grid-cols-3 lg:grid-cols-5">
          {GALLERY.map(({ id, image, imageAlt }) => (
            <li
              key={id}
              className="relative aspect-[4/5] overflow-hidden bg-primary/10"
            >
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(min-width: 1280px) 18vw, (min-width: 1024px) 19vw, (min-width: 640px) 32vw, 48vw"
                className="object-cover"
              />
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-black/60">Illustrative photography</p>
      </div>
    </section>
  );
}
