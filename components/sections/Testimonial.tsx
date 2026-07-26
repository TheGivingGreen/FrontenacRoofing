import styles from "./home.module.css";

/**
 * 11. Testimonial / credential proof (HOMEPAGE_WIREFRAME.md §11).
 *
 * Existing testimonial published on the legacy company website. One specific
 * quote is stronger than an auto-rotating carousel of generic praise.
 */
export function Testimonial() {
  return (
    <section className="section section--compact surface-white" aria-labelledby="testimonial-title">
      <div className="container container--editorial">
        <span className="eyebrow t-label" id="testimonial-title">
          In their words
        </span>
        <figure className={styles.testimonial}>
          <blockquote className={styles.testimonialQuote}>
            &ldquo;We had zero complaints from the tenants at the building,
            which was a miracle. The communication level was excellent. We
            always felt that any requests or questions were handled timely and
            efficiently.&rdquo;
          </blockquote>
          <figcaption className={`t-label ${styles.testimonialAttr}`}>
            <strong>Charles Kipp</strong>
            <span aria-hidden="true">·</span>
            <span>Client testimonial</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
