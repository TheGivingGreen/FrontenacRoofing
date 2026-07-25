import Link from "next/link";
import { ImageSlot } from "@/components/ui/ImageSlot";
import styles from "./pages.module.css";

type Crumb = { label: string; href?: string };

/**
 * Editorial light hero (DESIGN.md §11) — used on information-led inner pages.
 * warm-paper canvas, breadcrumb + eyebrow + H1 + lead on the left, project or
 * material image on the right.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  crumbs,
  image,
  actions,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  crumbs?: Crumb[];
  image?: { ratio: "16-9" | "3-2" | "4-3" | "4-5"; label: string; src?: string };
  actions?: React.ReactNode;
}) {
  return (
    <section className={`surface-paper ${styles.pageHero}`} aria-labelledby="page-title">
      <div className="container container--editorial">
        <div className={image ? styles.pageHeroGrid : ""}>
          <div>
            {crumbs && crumbs.length > 0 ? (
              <nav aria-label="Breadcrumb" className={`t-label ${styles.breadcrumb}`}>
                {crumbs.map((c, i) => (
                  <span key={i}>
                    {c.href ? <Link href={c.href}>{c.label}</Link> : <span>{c.label}</span>}
                    {i < crumbs.length - 1 ? <span aria-hidden="true"> / </span> : null}
                  </span>
                ))}
              </nav>
            ) : null}
            <span className="eyebrow t-label eyebrow--brass">{eyebrow}</span>
            <h1 id="page-title" className="t-display-lg">
              {title}
            </h1>
            {lead ? <p className="t-lead lead">{lead}</p> : null}
            {actions ? <div className={styles.pageHeroActions}>{actions}</div> : null}
          </div>
          {image ? (
            <ImageSlot ratio={image.ratio} label={image.label} src={image.src} priority />
          ) : null}
        </div>
      </div>
    </section>
  );
}
