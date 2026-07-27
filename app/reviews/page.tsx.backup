import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { asset } from "@/lib/asset";
import s from "@/components/sections/pages.module.css";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "What clients say about working with Frontenac Roofing & Construction — communication, execution, and results.",
};

const REVIEWS = [
  {
    author: "Charles Kipp",
    quote:
      "I had a wonderful experience with Frontenac Roofing! Their entire team made this endeavor a seamless process. We had zero complaints from the tenants at the building (which was a miracle – like they weren’t even there). The communication level was excellent. We always felt that any requests or questions were handled timely and efficiently. I would definitely recommend them!!",
  },
  {
    author: "Steve Chapa",
    quote:
      "I’d like to give a shout out to Kirk Tomokatsu for doing an amazing job on my new roof. Being in real estate and the construction business myself, I knew this one was going to be a monster to tackle. With over 100 sq of shingles, multiple turret rooms, cuts, angles and valleys galore, they pushed through relentlessly with a 10-12 man professional crew, over 12 hour days for 7 days to beat the weather. The finished product looks amazing! Looks like a tile roof! Take a look!",
  },
  {
    author: "Kelly Moore",
    quote:
      "Juan and Kirk were professional, kept us informed and we could not have had a more efficient team here! Their expertise and performance was stellar. They kept us informed with details and pictures, which is something we really look for in a vendor once the job has started. Communication was EXCELLENT. The finished product displays that dedication! Again, thank you guys!!!",
  },
] as const;

export default function ReviewsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Reviews"
        crumbs={[{ label: "Home", href: "/" }, { label: "Reviews" }]}
        title={<>In our clients’ words.</>}
        lead="These testimonials are carried forward from Frontenac’s original website. Their words speak to communication, responsiveness, difficult work, and respect for occupied properties."
      />

      <section className="section section--compact surface-white" aria-label="Reviews">
        <div className="container container--editorial">
          <div className={s.reviewList}>
            {REVIEWS.map((review) => (
              <figure key={review.author} className={s.reviewCard}>
                <Image
                  src={asset("/images/testimonial-five-stars.png")}
                  width={204}
                  height={34}
                  alt="Five stars"
                  className={s.reviewStars}
                />
                <blockquote className={s.reviewQuote}>
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <figcaption className={s.reviewAuthor}>
                  <strong>{review.author}</strong>
                  <span>Original Frontenac website testimonial</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </PageShell>
  );
}
