import styles from "./home.module.css";

/**
 * 08. Project process (HOMEPAGE_WIREFRAME.md §08).
 * Dark asphalt band. Five stages. Ownership must confirm the operating process
 * supports this sequence before launch.
 */
const STAGES = [
  {
    n: "01",
    title: "Inspect",
    copy: "Evaluate the roof, the property, and the immediate concerns.",
  },
  {
    n: "02",
    title: "Explain",
    copy: "Review the findings and discuss the available options.",
  },
  {
    n: "03",
    title: "Plan",
    copy: "Confirm the scope, materials, schedule, access, and communication.",
  },
  {
    n: "04",
    title: "Complete",
    copy: "Protect the property and perform the agreed work.",
  },
  {
    n: "05",
    title: "Review",
    copy: "Review the finished project, documentation, warranties, and recommended maintenance.",
  },
];

export function ProcessRail() {
  return (
    <section className="section section--major surface-asphalt" aria-labelledby="process-title">
      <div className="container container--editorial">
        <header className={styles.head}>
          <span className="eyebrow t-label">How we work</span>
          <h2 id="process-title" className="t-display-md">
            From the first inspection to the finished project.
          </h2>
        </header>
        <ol className={styles.process}>
          {STAGES.map((s) => (
            <li key={s.n} className={styles.processStep}>
              <div className={styles.processNum}>{s.n}</div>
              <h3 className="t-title-md">{s.title}</h3>
              <p className="t-body-sm">{s.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
