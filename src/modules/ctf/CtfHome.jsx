// src/modules/ctf/CtfHome.jsx
import { ctfPosts } from "./data/ctfDummyData";
import "../../styles/ctf.css";

function CtfCard({ post }) {
  return (
    <article className="ctf-card">
      <div className="ctf-card-thumb">
        <img src={post.thumbnail} alt={post.title} loading="lazy" />
      </div>

      <div className="ctf-card-body">
        <header className="ctf-card-header">
          {/* puedes dejar el h3 sin clase o usar una clase si ya la tienes en el CSS */}
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
            className="ctf-card-link"  // 👈 mantiene el background bonito
          >
            Ver writeup en Medium
          </a>
        )}
      </div>
    </article>
  );
}

export default function CtfHome() {
  return (
    <section className="ctf-page">
      <div className="container">
        <h1 className="ctf-page-title">CTF · Sherlock Writeups</h1>
        <p className="ctf-page-intro">
          Aquí se muestran laboratorios Sherlock y labs de blue team que he
          resuelto, enfocados en análisis forense, detección e inteligencia de
          amenazas. Cada tarjeta enlaza al writeup completo publicado en Medium.
        </p>

        <div className="ctf-grid">
          {ctfPosts.map((post) => (
            <CtfCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
