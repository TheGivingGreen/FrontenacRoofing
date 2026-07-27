import { ImageSlot } from "@/components/ui/ImageSlot";
import styles from "./pages.module.css";

// `crumbs` is accepted for backward compatibility with existing pages but is
// no longer rendered (breadcrumbs removed from inner-page heroes).
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
  image,
  actions,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  crumbs?: Crumb[];
  image?: {
    ratio: "16-9" | "3-2" | "4-3" | "4-5";
    label: string;
    src?: string;
    alt?: string;
    position?: string;
  };
  actions?: React.ReactNode;
}) {
  return (
    <section className={`surface-paper ${styles.pageHero}`} aria-labelledby="page-title">
      <div className="container container--editorial">
        <div className={image ? styles.pageHeroGrid : ""}>
          <div>
            <span className="eyebrow t-label eyebrow--brass">{eyebrow}</span>
            <h1 id="page-title" className="t-display-lg">
              {title}
            </h1>
            {lead ? <p className="t-lead lead">{lead}</p> : null}
            {actions ? <div className={styles.pageHeroActions}>{actions}</div> : null}
          </div>
          {image ? (
            <ImageSlot
              ratio={image.ratio}
              label={image.label}
              src={image.src}
              alt={image.alt ?? image.label}
              position={image.position}
              priority
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}
