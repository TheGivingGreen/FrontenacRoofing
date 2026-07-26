import { Button } from "@/components/ui/Button";
import { ImageSlot } from "@/components/ui/ImageSlot";
import styles from "./home.module.css";

/**
 * 05. Commercial capability feature (HOMEPAGE_WIREFRAME.md §05).
 * Dark technical band, 5/7 split. No unsupported performance percentages.
 */
export function CommercialFeature() {
  return (
    <section className="section section--major surface-black" aria-labelledby="commercial-title">
      <div className="container container--editorial">
        <div className={`${styles.feature} ${styles["feature--commercial"]}`}>
          <div className={styles.featureCopy}>
            <span className="eyebrow t-label">Commercial Roofing</span>
            <h2 id="commercial-title" className="t-display-md">
              Commercial roofing built around the property.
            </h2>
            <p className="t-body-lg">
              From occupied hotels and multi-unit properties to flat-roof
              replacement, restoration, and coating systems, Frontenac brings
              experienced planning and communication to every phase of the work.
            </p>
            <div className={styles.systemRail}>
              <span>Assessment</span>
              <span>Repair + Replacement</span>
              <span>Restoration + Coating</span>
              <span>TPO + Single-Ply</span>
            </div>
            <Button href="/commercial-roofing" variant="primary-dark">
              View Commercial Roofing
            </Button>
          </div>
          <div>
            <ImageSlot
              ratio="4-3"
              src="/images/project-04.webp"
              alt="Crew installing a TPO roofing membrane on the Cherry Valley Hotel project"
              label="Cherry Valley Hotel TPO replacement"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
