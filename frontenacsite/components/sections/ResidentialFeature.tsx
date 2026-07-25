import { Button } from "@/components/ui/Button";
import { ImageSlot } from "@/components/ui/ImageSlot";
import styles from "./home.module.css";

/**
 * 06. Residential capability feature (HOMEPAGE_WIREFRAME.md §06).
 * Warm paper, 7/5 with image first. Complex residential roof, not stock suburbia.
 */
export function ResidentialFeature() {
  return (
    <section className="section section--major surface-paper" aria-labelledby="residential-title">
      <div className="container container--editorial">
        <div className={`${styles.feature} ${styles["feature--residential"]}`}>
          <div className={styles.featureImageFirst}>
            <ImageSlot
              ratio="3-2"
              label="Complex residential roof with architectural context"
              note="No generic suburban stock home."
            />
          </div>
          <div className={styles.featureCopy}>
            <span className="eyebrow t-label">Residential Roofing</span>
            <h2 id="residential-title" className="t-display-md">
              Built around the home, not just the roof.
            </h2>
            <p className="t-body-lg">
              Frontenac combines careful assessment, appropriate system
              selection, property protection, and clear communication for
              replacement, repair, storm damage, and specialty roofing.
            </p>
            <Button href="/residential-roofing" variant="secondary">
              View Residential Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
