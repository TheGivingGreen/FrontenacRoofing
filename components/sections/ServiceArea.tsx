import { ImageSlot } from "@/components/ui/ImageSlot";
import { site } from "@/lib/site";
import styles from "./home.module.css";

/**
 * 12. Service-area statement (HOMEPAGE_WIREFRAME.md §12).
 * Region language stays broad until territory is confirmed (PROJECT_BRIEF.md §16).
 * The legacy city list is intentionally omitted until ownership confirms it.
 */
export function ServiceArea() {
  return (
    <section className="section section--major surface-stone" aria-labelledby="area-title">
      <div className="container container--editorial">
        <div className={styles.serviceArea}>
          <div>
            <span className="eyebrow t-label">Where we work</span>
            <h2 id="area-title" className="t-display-md">
              Serving commercial and residential properties across the St. Louis region.
            </h2>
            <p className="t-body-lg">
              {site.name} serves property owners throughout the greater St.
              Louis area. Contact our team to confirm availability for your
              project and location.
            </p>
          </div>
          <ImageSlot
            ratio="16-9"
            src="/images/home-service-area.webp"
            label="Regional project collage or simple text map"
            note="Add confirmed city list only after territory is verified."
          />
        </div>
      </div>
    </section>
  );
}
