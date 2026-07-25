import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { site } from "@/lib/site";
import home from "./home.module.css";

/**
 * Reusable dark CTA band (DESIGN.md §11 CTA band). Configurable headline/body
 * and primary action; phone appears as the secondary action. No urgency.
 */
export function CTABand({
  headline = "Start with a clear assessment.",
  body = "Tell us what is happening at your property. We will help determine the appropriate next conversation.",
  primaryLabel = "Schedule an Inspection",
  primaryHref = "/schedule-inspection",
  image,
}: {
  headline?: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  image?: string;
}) {
  return (
    <section className={`section section--major surface-black ${home.finalCta}`} aria-labelledby="cta-band-title">
      <div className={home.heroMedia} aria-hidden="true">
        <ImageSlot ratio="21-9" label="Optional project image behind CTA" src={image} />
      </div>
      <div className={home.heroOverlay} aria-hidden="true" />
      <div className="container container--editorial">
        <div className={home.finalCtaInner}>
          <h2 id="cta-band-title" className="t-display-lg">
            {headline}
          </h2>
          <p className="t-lead">{body}</p>
          <div className={home.finalCtaActions}>
            <Button href={primaryHref} variant="primary-dark">
              {primaryLabel}
            </Button>
            <a href={`tel:${site.phoneHref}`} className="btn btn--secondary-dark">
              <Phone size={16} strokeWidth={2} aria-hidden="true" /> {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
