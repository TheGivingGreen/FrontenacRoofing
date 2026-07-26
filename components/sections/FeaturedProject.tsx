import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { featuredProject } from "@/lib/projects";
import styles from "./home.module.css";

/**
 * 09. Featured project (HOMEPAGE_WIREFRAME.md §09).
 * Photography and facts were recovered from Frontenac's published legacy
 * project portfolio.
 */
export function FeaturedProject() {
  return (
    <section className="section section--major surface-paper" aria-labelledby="featured-title">
      <div className="container container--editorial">
        <span className="eyebrow t-label">Featured Project</span>
        <div className={styles.featured}>
          <div>
            <ImageSlot
              ratio="3-2"
              src={featuredProject.image}
              alt={featuredProject.alt}
              position={featuredProject.position}
              label={featuredProject.title}
            />
            <div className={styles.featuredMeta}>
              <div className={styles.featuredMetaCell}>
                <span className={`t-label ${styles.featuredMetaLabel}`}>Project type</span>
                <span className={styles.featuredMetaValue}>Residential</span>
              </div>
              <div className={styles.featuredMetaCell}>
                <span className={`t-label ${styles.featuredMetaLabel}`}>System</span>
                <span className={styles.featuredMetaValue}>Camelot shingles</span>
              </div>
              <div className={styles.featuredMetaCell}>
                <span className={`t-label ${styles.featuredMetaLabel}`}>Approx. roof area</span>
                <span className={styles.featuredMetaValue}>8,972 sq. ft.</span>
              </div>
              <div className={styles.featuredMetaCell}>
                <span className={`t-label ${styles.featuredMetaLabel}`}>Location</span>
                <span className={styles.featuredMetaValue}>Lake St. Louis</span>
              </div>
            </div>
          </div>

          <div>
            <h2 id="featured-title" className="t-display-md" style={{ marginBottom: "var(--space-2)" }}>
              {featuredProject.title}
            </h2>
            <p className="t-label" style={{ color: "var(--muted)", marginBottom: "var(--space-6)" }}>
              {featuredProject.location} · Residential
            </p>

            <div className={styles.featuredBlock}>
              <h4>Project scope</h4>
              <p className="t-body">{featuredProject.description}</p>
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
