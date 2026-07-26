import { Button } from "@/components/ui/Button";
import { ImageSlot } from "@/components/ui/ImageSlot";
import styles from "./home.module.css";

/**
 * 03. Audience gateway (HOMEPAGE_WIREFRAME.md §03).
 * Unequal 7/5 split — not two identical SaaS cards. Commercial first.
 */
export function AudienceGateway() {
  return (
    <section className="section section--major surface-paper" aria-labelledby="gateway-title">
      <div className="container container--editorial">
        <header className={styles.head}>
          <span className="eyebrow t-label">Commercial + Residential Expertise</span>
          <h2 id="gateway-title" className="t-display-lg">
            Experienced roofing for commercial properties and distinctive homes.
          </h2>
        </header>

        <div className={styles.gateway}>
          <article className={styles.gatewayCard}>
            <ImageSlot
              ratio="4-3"
              src="/images/home-gateway-commercial.webp"
              label="Commercial project — occupied / flat-roof property"
              className={styles.gatewayCommercialImage}
            />
            <h3 className="t-title-lg">Commercial roofing in experienced hands.</h3>
            <p className="t-body-lg">
              Assessment, repair, replacement, restoration, and project communication
              for commercial, multi-unit, hotel, and occupied properties.
            </p>
            <Button href="/commercial-roofing" variant="primary">
              Discuss a Commercial Project
            </Button>
          </article>

          <article className={styles.gatewayCard}>
            <ImageSlot
              ratio="4-5"
              src="/images/home-gateway-residential.webp"
              label="Residential — architecturally distinctive home"
            />
            <h3 className="t-title-lg">Quality craftsmanship for distinctive homes.</h3>
            <p className="t-body-lg">
              Roofing, storm response, specialty systems, siding, and exterior
              work completed with close attention to the home and surrounding property.
            </p>
            <Button href="/schedule-inspection" variant="primary">
              Schedule an Inspection
            </Button>
          </article>
        </div>
      </div>
    </section>
  );
}
