import Link from "next/link";
import { ImageSlot } from "@/components/ui/ImageSlot";
import styles from "./home.module.css";

/**
 * 10. Supporting project grid (HOMEPAGE_WIREFRAME.md §10).
 * Asymmetric 8/4, 5/7 spans. If fewer than four projects clear review, reduce
 * the section rather than duplicating photography (no fabricated results).
 */
const PROJECTS = [
  { span: "pg1", type: "Commercial", location: "[City, ST]", title: "[Project title]", ratio: "3-2" as const, img: "/images/home-project-01.webp" },
  { span: "pg2", type: "Residential", location: "[City, ST]", title: "[Project title]", ratio: "4-5" as const, img: "/images/home-project-02.webp" },
  { span: "pg3", type: "Specialty", location: "[City, ST]", title: "[Project title]", ratio: "4-3" as const, img: "/images/home-project-03.webp" },
  { span: "pg4", type: "Commercial", location: "[City, ST]", title: "[Project title]", ratio: "3-2" as const, img: "/images/home-project-04.webp" },
];

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
          {PROJECTS.map((p, i) => (
            <Link
              key={i}
              href="/projects"
              className={`${styles.projectCard} ${styles[p.span]} unverified`}
            >
              <ImageSlot ratio={p.ratio} src={p.img} label={`${p.type} project — approved photo`} />
              <div className={styles.projectCardBody}>
                <div className={`t-label ${styles.projectCardMeta}`}>
                  <span>{p.type}</span>
                  <span aria-hidden="true">·</span>
                  <span>{p.location}</span>
                </div>
                <h3 className="t-title-lg">{p.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
