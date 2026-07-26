import styles from "./home.module.css";
import { site } from "@/lib/site";

/**
 * 04. Verified proof rail (HOMEPAGE_WIREFRAME.md §04).
 *
 * Owner-confirmed proof points. Experience is team experience, not company age;
 * completed-project count is the updated legacy counter.
 */
export function ProofRail() {
  return (
    <section className="section section--compact surface-white" aria-label="Proof">
      <div className="container container--editorial">
        <div className={styles.proof}>
          <div className={styles.proofCell}>
            <div className={styles.proofValue}>
              {site.teamExperienceYears} <small>years</small>
            </div>
            <div className={`t-label ${styles.proofLabel}`}>Combined team experience</div>
          </div>

          <div className={styles.proofCell}>
            <div className={styles.proofValue}>
              {site.completedProjects}+
            </div>
            <div className={`t-label ${styles.proofLabel}`}>Completed projects</div>
          </div>

          <div className={styles.proofCell}>
            <div className={styles.proofValue} style={{ fontSize: 28 }}>
              St. Louis region
            </div>
            <div className={`t-label ${styles.proofLabel}`}>Commercial + residential service</div>
          </div>

          <div className={styles.proofCell}>
            <div className={styles.proofValue} style={{ fontSize: 28 }}>
              Specialty systems
            </div>
            <div className={`t-label ${styles.proofLabel}`}>
              Tile, slate, metal, coatings + more
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
