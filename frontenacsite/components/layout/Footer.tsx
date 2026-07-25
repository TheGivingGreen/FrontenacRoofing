import Link from "next/link";
import { Wordmark } from "@/components/ui/Wordmark";
import { site } from "@/lib/site";
import styles from "./Footer.module.css";

/**
 * Footer (DESIGN.md §11, HOMEPAGE_WIREFRAME.md §14).
 * Confirmed contact only. No newsletter form (no active content owner).
 * Address intentionally omitted until the public address is confirmed (§17 Q1).
 */
const GROUPS = [
  {
    heading: "Commercial",
    links: [
      { label: "Commercial Roofing", href: "/commercial-roofing" },
      { label: "Repair + Replacement", href: "/commercial-roofing/commercial-roof-repair-replacement" },
      { label: "Restoration + Coating", href: "/commercial-roofing/roof-coating-restoration" },
      { label: "TPO + Single-Ply", href: "/commercial-roofing/tpo-single-ply-flat-roofing" },
    ],
  },
  {
    heading: "Residential + Services",
    links: [
      { label: "Residential Roofing", href: "/residential-roofing" },
      { label: "Specialty Roofing", href: "/residential-roofing/specialty-roofing" },
      { label: "Storm + Insurance", href: "/residential-roofing/storm-hail-insurance" },
      { label: "Siding + Exteriors", href: "/siding-exteriors" },
      { label: "All Services", href: "/services" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "Reviews", href: "/reviews" },
      { label: "Service Areas", href: "/service-areas" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  const year = 2026; // build-time constant; keep in sync at release

  return (
    <footer className={`surface-black ${styles.footer}`}>
      <div className="container container--editorial">
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <Wordmark stacked onDark />
            <p className={`t-body ${styles.positioning}`}>
              Premium roofing and exterior construction for St. Louis homes and
              commercial properties, delivered with clear communication and
              accountable project execution.
            </p>
          </div>

          <nav className={styles.groups} aria-label="Footer">
            {GROUPS.map((g) => (
              <div key={g.heading} className={styles.group}>
                <h3 className={`t-label ${styles.groupHeading}`}>{g.heading}</h3>
                <ul>
                  {g.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className={styles.footerLink}>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className={styles.group}>
              <h3 className={`t-label ${styles.groupHeading}`}>Contact</h3>
              <ul>
                <li>
                  <a href={`tel:${site.phoneHref}`} className={styles.footerLink}>
                    {site.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.email}`} className={styles.footerLink}>
                    {site.email}
                  </a>
                </li>
                <li className={styles.pending}>Public address — pending confirmation</li>
                <li style={{ marginTop: "var(--space-3)" }}>
                  <Link href="/schedule-inspection" className={styles.footerLink}>
                    Schedule an Inspection
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <hr className="hairline" />

        <div className={styles.bottom}>
          <p className={`t-caption ${styles.legal}`}>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <ul className={styles.legalLinks}>
            <li>
              <Link href="/privacy" className={styles.footerLink}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/accessibility" className={styles.footerLink}>
                Accessibility
              </Link>
            </li>
            <li>
              <Link href="/terms" className={styles.footerLink}>
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
