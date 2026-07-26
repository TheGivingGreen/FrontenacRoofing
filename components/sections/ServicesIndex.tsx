import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ImageSlot } from "@/components/ui/ImageSlot";
import styles from "./home.module.css";

/**
 * 07. Asymmetric services index (HOMEPAGE_WIREFRAME.md §07).
 * One featured service + varied supporting rows. No icon grid.
 * Renovation appears only as a confirm-first conditional row (PROJECT_BRIEF.md §6).
 */
const SUPPORTING = [
  {
    label: "Residential Roofing",
    title: "Repair, replacement, and specialty roofing.",
    copy: "Roof repair, replacement, storm response, and specialty systems for distinctive homes.",
    href: "/residential-roofing",
    ratio: "4-3" as const,
    img: "/images/home-services-residential.webp",
  },
  {
    label: "Roof Restoration + Coating",
    title: "Coating systems designed to extend roof life.",
    copy: "Silicone and reflective restoration systems for roofs that qualify.",
    href: "/commercial-roofing/roof-coating-restoration",
    ratio: "4-3" as const,
    img: "/images/home-services-coating.webp",
  },
  {
    label: "Specialty Roofing",
    title: "Tile, slate, metal, wood shake, and DECRA.",
    copy: "Specialized materials and experienced installation for distinctive roof systems.",
    href: "/residential-roofing/specialty-roofing",
    ratio: "4-3" as const,
    img: "/images/home-services-specialty.webp",
  },
  {
    label: "Siding + Exteriors",
    title: "Siding installation, replacement, and repair.",
    copy: "Exterior improvements and storm-damage repair for residential properties.",
    href: "/siding-exteriors",
    ratio: "4-3" as const,
    img: "/images/home-services-siding.webp",
  },
];

export function ServicesIndex() {
  return (
    <section className="section section--major surface-white" aria-labelledby="services-title">
      <div className="container container--editorial">
        <header className={styles.head}>
          <span className="eyebrow t-label">What we do</span>
          <h2 id="services-title" className="t-display-lg">
            Roofing and exterior services.
          </h2>
        </header>

        <div className={styles.services}>
          {/* Featured */}
          <Link href="/commercial-roofing" className={styles.serviceFeatured}>
            <ImageSlot ratio="16-9" src="/images/home-services-featured.webp" label="Featured — commercial roofing / system detail" />
            <div className={styles.serviceCardBody}>
              <span className="eyebrow t-label">Featured · Commercial Roofing</span>
              <h3 className="t-title-lg" style={{ marginBottom: "var(--space-3)" }}>
                Commercial roofing and restoration.
              </h3>
              <p className="t-body-lg" style={{ marginBottom: "var(--space-4)" }}>
                Repair, replacement, restoration, and coating systems for
                commercial, multi-unit, and occupied properties.
              </p>
              <span className="textlink">
                View Commercial Services <ArrowRight size={16} aria-hidden="true" />
              </span>
            </div>
          </Link>

          {/* Supporting grid */}
          <div className={styles.serviceGrid}>
            {SUPPORTING.map((s) => (
              <Link key={s.href} href={s.href} className={styles.serviceCard}>
                <ImageSlot ratio={s.ratio} src={s.img} label={s.label} />
                <div className={styles.serviceCardBody}>
                  <span className="eyebrow t-label">{s.label}</span>
                  <h3 className="t-title-md">{s.title}</h3>
                  <p className="t-body">{s.copy}</p>
                  <span className="textlink">
                    Explore <ArrowRight size={16} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Conditional — confirm current scope before promoting (PROJECT_BRIEF.md §6, §17 Q12) */}
          <div className={`${styles.serviceConditional} unverified`}>
            <div>
              <span className="eyebrow t-label" style={{ marginBottom: "var(--space-2)" }}>
                Renovation + Construction
              </span>
              <p className="t-body-sm" style={{ maxWidth: "60ch", color: "var(--muted)" }}>
                Placeholder — include only after ownership confirms current
                renovation scope. Commercial renovation is corroborated by BBB;
                broad residential remodeling is unverified.
              </p>
            </div>
            <span className="textlink" aria-hidden="true">
              Pending confirmation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
