import { useParams, Link } from "react-router-dom";
import { getCtfBySlug } from "./services/ctfService";

export default function CtfPost() {
  const { slug } = useParams();
  const post = getCtfBySlug(slug);

  if (!post) {
    return (
      <main className="page page-ctf-not-found">
        <h1>CTF no encontrado</h1>
        <p>Este writeup aún no existe o el slug es incorrecto.</p>
        <Link to="/ctf" className="ctf-back-link">
          ← Volver a los CTF
        </Link>
      </main>
    );
  }

  const paragraphs = post.content
    .trim()
    .split(/\n\s*\n/)
    .filter(Boolean);

  return (
    <main className="page page-ctf-post">
      <article className="ctf-post-article">
        <nav className="breadcrumb">
          <Link to="/ctf">← Volver a los CTF</Link>
        </nav>

        <header className="ctf-post-header">
          <p className="ctf-post-eyebrow">{post.platform}</p>
          <h1>{post.title}</h1>
          <span className="ctf-badge">{post.difficulty}</span>
        </header>

        <section className="ctf-post-body">
          {paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </section>
      </article>
    </main>
  );
}
