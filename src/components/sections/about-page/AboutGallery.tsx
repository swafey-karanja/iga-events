import { utils } from "@/src/lib/utils/utils";
import Image from "next/image";
import { Marquee } from "@/src/components/ui/marquee";
import { CONTENT } from "@/src/lib/constants/layout";

const reviews = [
  {
    id: 1,
    galleryImage:
      "https://res.cloudinary.com/odxuv15g/image/upload/f_auto,q_auto/IGA_Safari-29_ge5cmk_qxvujc.webp",
    caption: "Safari tour at Nairobi national park with summit attendees",
    alt: "Summit attendees on a safari tour in Nairobi national park, Kenya, during the iGaming AFRIKA Summit",
  },
  {
    id: 2,
    galleryImage:
      "https://res.cloudinary.com/odxuv15g/image/upload/f_auto,q_auto/Gala_Dinner-Awards-5_zupvgo_panzxc.webp",
    caption: "Gala Dinner & Awards ceremony",
    alt: "Gala Dinner & Awards ceremony at HYatt Regency, Westlands, Nairobi during the iGaming AFRIKA Summit",
  },
  {
    id: 3,
    galleryImage:
      "https://res.cloudinary.com/odxuv15g/image/upload/f_auto,q_auto/DSC_6413_m0itpi_mlrv86.webp",
    caption: "Delegates networking on the summit floor",
    alt: "Delegates networking on the summit floor during the iGaming AFRIKA Summit in Nairobi, Kenya",
  },
  {
    id: 4,
    galleryImage:
      "https://res.cloudinary.com/odxuv15g/image/upload/f_auto,q_auto/Gala_Dinner-Awards-410_zhg0il_bliejj.webp",
    caption:
      "Gala Dinner and Awards Ceremony at HYatt Regency, Westlands, Nairobi",
    alt: "Gala Dinner and Awards Ceremony at HYatt Regency, Westlands, Nairobi during the iGaming AFRIKA Summit",
  },
  {
    id: 5,
    galleryImage:
      "https://res.cloudinary.com/odxuv15g/image/upload/f_auto,q_auto/A7407329_ik5vxt_pqwajz.webp",
    caption: "Attendees enjoying a keynote session on the main stage",
    alt: "Attendees enjoying a keynote session on the main stage during the iGaming AFRIKA Summit in Nairobi, Kenya",
  },
  {
    id: 6,
    galleryImage:
      "https://res.cloudinary.com/odxuv15g/image/upload/f_auto,q_auto/iGA_Welcome_Dinner-76_c7xch6_kbj6rz.webp",
    caption: "Attendees at the Welcome dinner reception",
    alt: "Attendees at the Welcome dinner reception during the iGaming AFRIKA Summit in Nairobi",
  },
  {
    id: 7,
    galleryImage:
      "https://res.cloudinary.com/odxuv15g/image/upload/f_auto,q_auto/S2_ssn2-28_oid7ip_vzl1zw.webp",
    caption: "Attendees enjoying a keynote session on the stage 2",
    alt: "Attendees enjoying a keynote session on the stage 2 during the iGaming AFRIKA Summit in Nairobi, Kenya",
  },
  {
    id: 8,
    galleryImage:
      "https://res.cloudinary.com/odxuv15g/image/upload/f_auto,q_auto/IGA_Safari-122_hiwzca_mxrbdh.webp",
    caption: "Safari tour at Nairobi national park with summit attendees",
    alt: "Summit attendees on a safari tour in Nairobi national park, Kenya, during the iGaming AFRIKA Summit",
  },
  {
    id: 9,
    galleryImage:
      "https://res.cloudinary.com/odxuv15g/image/upload/f_auto,q_auto/iGA_Main_Stage-44_nlt60x_ahtsk0.webp",
    caption: "The Summit opening ceremony on the main stage",
    alt: "The Summit opening ceremony on the main stage during the iGaming AFRIKA Summit in Nairobi, Kenya",
  },
  {
    id: 10,
    galleryImage:
      "https://res.cloudinary.com/odxuv15g/image/upload/f_auto,q_auto/DSC_1615_btjezg_kog1kk.webp",
    caption: "Delegates networking on the summit floor",
    alt: "Delegates networking on the summit floor during the iGaming AFRIKA Summit in Nairobi, Kenya",
  },
  {
    id: 11,
    galleryImage:
      "https://res.cloudinary.com/odxuv15g/image/upload/f_auto,q_auto/DSC_6902_gliysy_wdne5d.webp",
    caption: "Exhibitors showcasing their booths on the summit floor",
    alt: "Exhibitors showcasing their booths on the summit floor during the iGaming AFRIKA Summit in Nairobi, Kenya",
  },
  {
    id: 12,
    galleryImage:
      "https://res.cloudinary.com/odxuv15g/image/upload/f_auto,q_auto/Gala_Dinner-Awards-5_zupvgo_panzxc.webp",
    caption:
      "Gala Dinner and Awards Ceremony at HYatt Regency, Westlands, Nairobi",
    alt: "Gala Dinner and Awards Ceremony at HYatt Regency, Westlands, Nairobi during the iGaming AFRIKA Summit",
  },
  {
    id: 13,
    galleryImage:
      "https://res.cloudinary.com/odxuv15g/image/upload/f_auto,q_auto/DSC06919_t2k9o9_czov8k.webp",
    caption: "Attendees having a good time at the entertainment zone",
    alt: "Attendees having a good time at the entertainment zone during the iGaming AFRIKA Summit in Nairobi, Kenya",
  },
  {
    id: 14,
    galleryImage:
      "https://res.cloudinary.com/odxuv15g/image/upload/f_auto,q_auto/IGA_Safari-119_sexdxt_kdjwqm.webp",
    caption: "Safari tour with summit attendees",
    alt: "Summit attendees on a safari tour in Nairobi national park, Kenya, during the iGaming AFRIKA Summit",
  },
  {
    id: 15,
    galleryImage:
      "https://res.cloudinary.com/odxuv15g/image/upload/f_auto,q_auto/A7407329_ik5vxt_pqwajz.webp",
    caption: "Speakers delivering a keynote address on the main stage",
    alt: "Keynote speakers speaking at the iGaming AFRIKA Summit main stage in Nairobi",
  },
  {
    id: 16,
    galleryImage:
      "https://res.cloudinary.com/odxuv15g/image/upload/f_auto,q_auto/DSC_1944_rugs6k_fcadqd.webp",
    caption: "Attendees at the event closing night party",
    alt: "Attendees at the event closing night party during the iGaming AFRIKA Summit in Nairobi",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
// const secondRow = reviews.slice(reviews.length / 2);

function GallerySection() {
  return (
    <section
      aria-labelledby="gallery-heading"
      className="bg-white py-8 md:py-16"
    >
      <div className="mx-auto w-full px-4 sm:px-6 xl:px-0 xl:max-w-9/12">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
          <span aria-hidden className="size-1.5 bg-primary" />
          THe experience
        </p>
        <h2
          id="gallery-heading"
          className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl lg:text-5xl"
        >
          Moments from our events
        </h2>
      </div>
      <div className="relative flex w-full gap-0 flex-col items-center justify-center overflow-hidden mt-12">
        <Marquee pauseOnHover className="[--duration:60s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </Marquee>
        {/*<Marquee reverse pauseOnHover className="[--duration:60s]">*/}
        {/*  {secondRow.map((review) => (*/}
        {/*    <ReviewCard key={review.id} {...review} />*/}
        {/*  ))}*/}
        {/*</Marquee>*/}
      </div>
    </section>
  );
}

export default GallerySection;

const ReviewCard = ({
  galleryImage,
  caption,
  alt,
}: {
  galleryImage: string;
  caption?: string;
  alt?: string;
}) => {
  return (
    <figure
      className={utils(
        "group/gallery-item relative h-auto w-100 xl:w-120 overflow-none rounded-xl border",
        // light styles
        "border-gray-950/10 bg-white hover:bg-gray-50/50",
        // dark styles
        "dark:border-gray-50/10 dark:bg-gray-900 dark:hover:bg-gray-800/50",
      )}
    >
      {/* Large Image Container - 16:9 aspect ratio for landscape */}
      <div className="relative w-full aspect-6/4 bg-gray-100 dark:bg-gray-800 overflow-hidden rounded-sm">
        <Image
          className="object-cover"
          src={galleryImage}
          alt={alt ?? "iGaming AFRIKA Summit"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
          loading="lazy"
        />

        {/* Dark overlay with caption, shown on hover */}
        <div
          className={utils(
            "absolute inset-0 flex items-end p-4",
            "bg-black/0 group-hover/gallery-item:bg-black/70",
            "opacity-0 group-hover/gallery-item:opacity-100",
            "transition-all duration-300 ease-in-out",
          )}
        >
          <p className="text-[#109F5D] text-lg font-bold translate-y-2 group-hover/gallery-item:translate-y-0 transition-transform duration-300 ease-in-out">
            {caption}
          </p>
        </div>
      </div>
    </figure>
  );
};
