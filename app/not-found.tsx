import Link from "next/link";

export default function NotFound() {
  return (
    <section className="starter">
      <div className="wrap narrow">
        <h1>There&apos;s nothing here.</h1>
        <p className="lead">We can&apos;t find the page you&apos;re looking for.</p>
        <div className="actions">
          <Link className="btn btn-green" href="/">Go home</Link>
        </div>
      </div>
    </section>
  );
}
