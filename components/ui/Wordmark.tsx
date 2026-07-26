import Image from "next/image";
import styles from "./Wordmark.module.css";
import { asset } from "@/lib/asset";
import { site } from "@/lib/site";

/**
 * Official Frontenac logo assets recovered from the legacy company website.
 * The horizontal lockup keeps the navigation compact; the full mark gives the
 * footer a stronger brand moment.
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
      role="img"
    >
      <Image
        src={
          stacked
            ? asset("/brand/frontenac-logo-full.png")
            : asset("/brand/frontenac-logo-horizontal.png")
        }
        alt=""
        width={stacked ? 1652 : 1540}
        height={stacked ? 1019 : 279}
        className={styles.logo}
        priority={!stacked}
      />
    </span>
  );
}
