import styles from "./home.module.css";

/**
 * 11. Testimonial / credential proof (HOMEPAGE_WIREFRAME.md §11).
 *
 * GUARDRAIL: legacy testimonials require source + wording + permission
 * verification (PROJECT_BRIEF.md §10). No auto-rotating carousel; one strong
 * quote at a time. Placeholder shown until a review source is confirmed.
 */
export function Testimonial() {
  return (
    <section className="section section--compact surface-white" aria-labelledby="testimonial-title">
      <div className="container container--editorial">
        <span className="eyebrow t-label" id="testimonial-title">
          In their words
        </span>
        <figure className={`${styles.testimonial} unverified`}>
          <blockquote className={styles.testimonialQuote}>
            &ldquo;[One concise, specific statement about communication,
            execution, or outcome — verified source and permission required.]&rdquo;
          </blockquote>
          <figcaption className={`t-label ${styles.testimonialAttr}`}>
            <strong>[Name]</strong>
            <span aria-hidden="true">·</span>
            <span>[Role or property context]</span>
            <span aria-hidden="true">·</span>
            <span>[Source]</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
