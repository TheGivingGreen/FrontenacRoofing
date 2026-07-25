import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { site } from "@/lib/site";
import styles from "./home.module.css";

/**
 * 13. Final CTA band (HOMEPAGE_WIREFRAME.md §13).
 * Dark band, one decisive headline, primary action + phone. No timer/discount.
 */
export function FinalCTA() {
  return (
    <section className={`section section--major surface-black ${styles.finalCta}`} aria-labelledby="cta-title">
      <div className={styles.heroMedia} aria-hidden="true">
        <ImageSlot ratio="21-9" src="/images/home-cta.webp" label="Optional project image behind CTA" />
      </div>
      <div className={styles.heroOverlay} aria-hidden="true" />
      <div className="container container--editorial">
        <div className={styles.finalCtaInner}>
          <h2 id="cta-title" className="t-display-lg">
            Start with a clear assessment.
          </h2>
          <p className="t-lead">
            Tell us what is happening at your property. We will help determine
            the appropriate next conversation.
          </p>
          <div className={styles.finalCtaActions}>
            <Button href="/schedule-inspection" variant="primary-dark">
              Schedule an Inspection
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
