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
          <span className="eyebrow t-label">One standard. Two distinct needs.</span>
          <h2 id="gateway-title" className="t-display-lg">
            The property changes. The expectation does not.
          </h2>
        </header>

        <div className={styles.gateway}>
          <article className={styles.gatewayCard}>
            <ImageSlot
              ratio="3-2"
              label="Commercial project — occupied / flat-roof property"
            />
            <h3 className="t-title-lg">Roofing decisions backed by documentation.</h3>
            <p className="t-body-lg">
              Assessment, repair, replacement, restoration, and project
              communication for commercial and occupied properties.
            </p>
            <Button href="/commercial-roofing" variant="primary">
              Discuss a Commercial Project
            </Button>
          </article>

          <article className={styles.gatewayCard}>
            <ImageSlot
              ratio="4-5"
              label="Residential — architecturally distinctive home"
            />
            <h3 className="t-title-lg">Craftsmanship for homes that demand more than standard.</h3>
            <p className="t-body-lg">
              Roofing, storm response, specialty systems, and exterior work for
              homes where detail and property protection matter.
            </p>
            <Button href="/schedule-inspection" variant="secondary">
              Schedule an Inspection
            </Button>
          </article>
        </div>
      </div>
    </section>
  );
}
