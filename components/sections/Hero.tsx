import { Button } from "@/components/ui/Button";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { site } from "@/lib/site";
import styles from "./home.module.css";

/**
 * 02. Cinematic hero (HOMEPAGE_WIREFRAME.md §02).
 * Copy is the approved draft. The 20-year statement is framed as TEAM
 * experience (owner-confirmed). No credentials/warranty/BBB language here.
 */
export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.heroMedia}>
        <ImageSlot
          ratio="21-9"
          priority
          src="/images/home-hero.webp"
          alt="Completed modern commercial property at dusk"
          position="center 46%"
          label="Cinematic hero — one exceptional real project"
          note="Strong roof geometry, negative space at left for copy. Dedicated desktop + mobile crops."
        />
      </div>
      <div className={styles.heroOverlay} aria-hidden="true" />
      <div className={`container container--editorial ${styles.heroInner}`}>
        <div className={styles.heroCopy}>
          <span className="eyebrow t-label" style={{ color: "var(--brass-light)" }}>
            Commercial + Residential Roofing
          </span>
          <h1 id="hero-title" className={`t-display-hero ${styles.heroTitle}`}>
            <span>Your property.</span>
            <span>Our accountability.</span>
          </h1>
          <p className={`t-lead ${styles.heroLead}`}>
            Frontenac has completed more than 900 roofing projects across Greater
            St. Louis — commercial buildings, occupied hotels, and distinctive
            homes. We show up, we document the work, and we communicate throughout.
          </p>
          <div className={styles.heroActions}>
            <Button href="/schedule-inspection" variant="primary-dark">
              Schedule an Inspection
            </Button>
            <Button href="/commercial-roofing" variant="secondary-dark">
              Discuss a Commercial Project
            </Button>
          </div>
          <p className={`t-label ${styles.heroLocation}`}>St. Louis, Missouri</p>
        </div>
      </div>
    </section>
  );
}
