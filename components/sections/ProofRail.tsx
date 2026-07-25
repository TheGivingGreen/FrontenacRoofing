import styles from "./home.module.css";
import { site } from "@/lib/site";

/**
 * 04. Verified proof rail (HOMEPAGE_WIREFRAME.md §04).
 *
 * GUARDRAIL: no blank counters, no invented figures (DESIGN.md §11, PROJECT_BRIEF.md §10).
 * Only the first two cells are defensible today (team experience, regional
 * service). The remaining two are marked as PENDING placeholders — they must be
 * replaced with a VERIFIED credential, project count, review score, or warranty,
 * or the section should collapse to two larger cells before launch.
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
            <div className={styles.proofValue} style={{ fontSize: 28 }}>
              St. Louis region
            </div>
            <div className={`t-label ${styles.proofLabel}`}>Service territory · confirm radius</div>
          </div>

          <div className={`${styles.proofCell} ${styles["proofCell--pending"]}`}>
            <div className={styles.proofValue}>—</div>
            <div className={`t-label ${styles.proofLabel}`}>
              Verified credential — pending (BBB A+, GAF, Owens Corning)
            </div>
          </div>

          <div className={styles.proofCell}>
            <div className={styles.proofValue}>—</div>
            <div className={`t-label ${styles.proofLabel}`}>
              Verified project count or review score — pending
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
