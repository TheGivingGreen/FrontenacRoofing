import styles from "./Wordmark.module.css";
import { site } from "@/lib/site";

/**
 * Typographic wordmark (DESIGN.md §3). No invented logo/roofline/monogram.
 * "FRONTENAC" dominant, "ROOFING + CONSTRUCTION" as a tracked descriptor.
 */
export function Wordmark({
  stacked = false,
  onDark = false,
}: {
  stacked?: boolean;
  onDark?: boolean;
}) {
  return (
    <span
      className={`${styles.wordmark} ${stacked ? styles.stacked : ""} ${
        onDark ? styles.onDark : ""
      }`}
      aria-label={site.name}
    >
      <span className={styles.primary}>{site.shortName.toUpperCase()}</span>
      <span className={styles.descriptor}>Roofing + Construction</span>
    </span>
  );
}
