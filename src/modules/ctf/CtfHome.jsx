// src/modules/ctf/CtfHome.jsx
import { ctfPosts } from "./data/ctfDummyData";

function CtfCard({ post }) {
  return (
    <article className="ctf-card">
      <div className="ctf-card-thumb">
        <img src={post.thumbnail} alt={post.title} loading="lazy" />
      </div>

      <div className="ctf-card-body">
        <header className="ctf-card-header">
          <h3>{post.title}</h3>
          <span className="ctf-badge">{post.difficulty}</span>
        </header>

        <p className="ctf-card-platform">{post.platform}</p>
        <p className="ctf-card-summary">{post.summary}</p>

        {post.mediumUrl && (
          <a
            href={post.mediumUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ctf-card-link"
          >
            Ver resolución en Medium
          </a>
        )}
      </div>
    </article>
  );
}

export default function CtfHome() {
  return (
    <main className="page page-ctf">
      <header className="page-header">
        <h1>CTF Writeups · Sherlocks</h1>
        <p>
          Laboratorios Sherlock de HackTheBox que he resuelto, con enfoque en
          análisis forense, blue team e inteligencia de amenazas.
        </p>
      </header>

      <section className="ctf-grid">
        {ctfPosts.map((post) => (
          <CtfCard key={post.slug} post={post} />
        ))}
      </section>
    </main>
  );
}
