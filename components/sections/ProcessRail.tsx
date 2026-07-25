import styles from "./home.module.css";

/**
 * 08. Process and accountability (HOMEPAGE_WIREFRAME.md §08).
 * Dark asphalt band. Five stages. Ownership must confirm the operating process
 * supports this sequence before launch.
 */
const STAGES = [
  {
    n: "01",
    title: "Assess",
    copy: "Understand the property, symptoms, constraints, and immediate risks.",
  },
  {
    n: "02",
    title: "Document",
    copy: "Record findings with clear photographs, scope details, and recommended options.",
  },
  {
    n: "03",
    title: "Plan",
    copy: "Align system, budget, schedule, access, and communication.",
  },
  {
    n: "04",
    title: "Execute",
    copy: "Protect the property and perform the confirmed scope.",
  },
  {
    n: "05",
    title: "Close out",
    copy: "Review completion, documentation, warranties, and next maintenance steps.",
  },
];

export function ProcessRail() {
  return (
    <section className="section section--major surface-asphalt" aria-labelledby="process-title">
      <div className="container container--editorial">
        <header className={styles.head}>
          <span className="eyebrow t-label">How we work</span>
          <h2 id="process-title" className="t-display-md">
            Clear from assessment through closeout.
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
