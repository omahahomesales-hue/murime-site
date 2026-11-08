/** Numbered "How it works" steps. */
export function Steps({ steps, dark = false }: { steps: { title: string; body: string }[]; dark?: boolean }) {
  return (
    <ol className={`steps${dark ? " steps-dark" : ""}`}>
      {steps.map((s, i) => (
        <li key={s.title} className="step">
          <span className="step-num" aria-hidden="true">{i + 1}</span>
          <h3>{s.title}</h3>
          <p>{s.body}</p>
        </li>
      ))}
    </ol>
  );
}
