import Link from "next/link";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { recoveredProjects } from "@/lib/projects";
import styles from "./home.module.css";

/**
 * 10. Supporting project grid (HOMEPAGE_WIREFRAME.md §10).
 * Four project photographs and their descriptions were recovered from
 * Frontenac's published legacy portfolio.
 */
export function ProjectGrid() {
  return (
    <section className="section section--compact surface-paper" aria-labelledby="grid-title">
      <div className="container container--editorial">
        <header className={styles.head}>
          <span className="eyebrow t-label">Recent work</span>
          <h2 id="grid-title" className="t-display-md">
            A look at our work.
          </h2>
        </header>

        <div className={styles.projectGrid}>
          {recoveredProjects.map((p) => (
            <Link
              key={p.id}
              href="/projects"
              className={`${styles.projectCard} ${styles[p.homeSpan]}`}
            >
              <ImageSlot
                ratio={p.ratio}
                src={p.image}
                alt={p.alt}
                position={p.position}
                label={p.title}
              />
              <div className={styles.projectCardBody}>
                <div className={`t-label ${styles.projectCardMeta}`}>
                  <span>{p.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{p.location}</span>
                </div>
                <h3 className="t-title-lg">{p.title}</h3>
                <p className={`t-body-sm ${styles.projectCardDescription}`}>{p.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
