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
              Roofing decisions backed by documentation.
            </h2>
            <p className="t-body-lg">
              From occupied hotels and multi-unit properties to flat-roof
              replacement and restoration, {""}
              Frontenac approaches commercial work through assessment, planning,
              communication, and closeout.
            </p>
            <div className={styles.systemRail}>
              <span>Assessment</span>
              <span>Repair + Replacement</span>
              <span>Restoration + Coating</span>
              <span>TPO + Single-Ply</span>
            </div>
            <Button href="/commercial-roofing" variant="primary-dark">
              Discuss a Commercial Project
            </Button>
          </div>
          <div>
            <ImageSlot
              ratio="4-3"
              label="Commercial flat-roof / restoration system"
              note="Wide establishing view revealing scope."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
