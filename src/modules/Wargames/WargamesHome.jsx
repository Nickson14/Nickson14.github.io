// src/modules/Wargames/WargamesHome.jsx

import { wargamesPosts } from "./data/WargamesDummy";
import "../../styles/ctf.css";

function WargamesCard({ post }) {
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
            Ver writeup en Hashnode
          </a>
        )}
      </div>
    </article>
  );
}

export default function WargamesHome() {
  return (
    <section className="ctf-page">
      <div className="container">
        <h1 className="ctf-page-title">Wargames · Writeups</h1>

        <p className="ctf-page-intro">
          Aquí se muestran mis laboratorios tipo wargame y prácticas técnicas,
          enfocados en Linux, web security, análisis de alertas, escalada de
          privilegios y razonamiento ofensivo. Cada tarjeta enlaza al writeup
          completo publicado en Hashnode.
        </p>

        <div className="ctf-grid">
          {wargamesPosts.map((post) => (
            <WargamesCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}