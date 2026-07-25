import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ImageSlot } from "@/components/ui/ImageSlot";
import styles from "./home.module.css";

/**
 * 09. Featured project (HOMEPAGE_WIREFRAME.md §09).
 *
 * GUARDRAIL: legacy project inventory is a lead, not publish-ready proof
 * (PROJECT_BRIEF.md §11). Every field below is a labeled placeholder until the
 * case study is validated and publication permission is confirmed. Do not
 * publish a client/property name merely because it appeared on the old site.
 */
export function FeaturedProject() {
  return (
    <section className="section section--major surface-paper" aria-labelledby="featured-title">
      <div className="container container--editorial">
        <span className="eyebrow t-label">Featured Project</span>
        <div className={styles.featured}>
          <div>
            <ImageSlot ratio="3-2" src="/images/home-featured-project.webp" label="Featured project — approved photography only" />
            <div className={`${styles.featuredMeta} unverified`}>
              <div className={styles.featuredMetaCell}>
                <span className={`t-label ${styles.featuredMetaLabel}`}>System</span>
                <span className={styles.featuredMetaValue}>[System]</span>
              </div>
              <div className={styles.featuredMetaCell}>
                <span className={`t-label ${styles.featuredMetaLabel}`}>Approx. sq. ft.</span>
                <span className={styles.featuredMetaValue}>[00,000]</span>
              </div>
              <div className={styles.featuredMetaCell}>
                <span className={`t-label ${styles.featuredMetaLabel}`}>Duration</span>
                <span className={styles.featuredMetaValue}>[Duration]</span>
              </div>
              <div className={styles.featuredMetaCell}>
                <span className={`t-label ${styles.featuredMetaLabel}`}>Constraint</span>
                <span className={styles.featuredMetaValue}>[Occupancy]</span>
              </div>
            </div>
          </div>

          <div className="unverified">
            <h2 id="featured-title" className="t-display-md" style={{ marginBottom: "var(--space-2)" }}>
              [Verified project title]
            </h2>
            <p className="t-label" style={{ color: "var(--muted)", marginBottom: "var(--space-6)" }}>
              [City, State] · [Property type]
            </p>

            <div className={styles.featuredBlock}>
              <h4>The challenge</h4>
              <p className="t-body">[Short verified problem statement.]</p>
            </div>
            <div className={styles.featuredBlock}>
              <h4>Frontenac&apos;s scope</h4>
              <p className="t-body">[Short verified system and work scope.]</p>
            </div>
            <div className={styles.featuredBlock}>
              <h4>The outcome</h4>
              <p className="t-body">[Short verified result.]</p>
            </div>

            <div style={{ marginTop: "var(--space-6)" }}>
              <Button href="/projects" variant="secondary">
                Explore Projects <ArrowRight size={16} aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
