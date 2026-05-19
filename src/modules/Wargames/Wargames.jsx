// src/modules/Wargames/Wargames.jsx

import { Link, useParams } from "react-router-dom";
import { getWargameBySlug } from "./services/WargamesService";

export default function Wargames() {
  const { slug } = useParams();
  const wargame = getWargameBySlug(slug);

  if (!wargame) {
    return (
      <main className="container" style={{ padding: "60px 0" }}>
        <h1 style={{ color: "var(--cyan)", marginBottom: "16px" }}>
          Wargame no encontrado
        </h1>

        <p style={{ color: "var(--gray)", marginBottom: "24px" }}>
          El laboratorio que intentas abrir no existe o el enlace es incorrecto.
        </p>

        <Link to="/wargames" style={backButtonStyle}>
          ← Volver a Wargames
        </Link>
      </main>
    );
  }

  return (
    <main className="container" style={{ padding: "60px 0" }}>
      <Link to="/wargames" style={backButtonStyle}>
        ← Volver a Wargames
      </Link>

      <article style={articleStyle}>
        <header style={{ marginBottom: "34px" }}>
          <p style={eyebrowStyle}>{wargame.platform}</p>

          <h1 style={pageTitleStyle}>{wargame.title}</h1>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            <span style={badgeStyle}>{wargame.category}</span>
            <span style={badgeStyle}>{wargame.level}</span>
            <span style={badgeStyle}>{wargame.status}</span>
          </div>
        </header>

        <section style={sectionStyle}>
          <h2 style={titleStyle}>Objetivo</h2>
          <p style={paragraphStyle}>{wargame.objective}</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={titleStyle}>Descripción</h2>
          <p style={paragraphStyle}>{wargame.description}</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={titleStyle}>Skills practicadas</h2>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {wargame.skills.map((skill) => (
              <span key={skill} style={skillStyle}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={titleStyle}>Comandos útiles</h2>

          <div style={commandBoxStyle}>
            {wargame.commands.map((command) => (
              <code key={command} style={codeStyle}>
                {command}
              </code>
            ))}
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={titleStyle}>Notas personales</h2>
          <p style={paragraphStyle}>{wargame.notes}</p>
        </section>
      </article>
    </main>
  );
}

const articleStyle = {
  marginTop: "28px",
  border: "1px solid rgba(0, 255, 255, 0.14)",
  borderRadius: "28px",
  padding: "clamp(24px, 4vw, 44px)",
  background: "rgba(255, 255, 255, 0.035)",
};

const eyebrowStyle = {
  color: "var(--cyan)",
  textTransform: "uppercase",
  letterSpacing: "2px",
  fontWeight: "700",
  marginBottom: "12px",
};

const pageTitleStyle = {
  color: "var(--white)",
  fontSize: "clamp(2.2rem, 6vw, 4rem)",
  marginBottom: "18px",
};

const sectionStyle = {
  marginTop: "30px",
};

const titleStyle = {
  color: "var(--white)",
  fontSize: "1.25rem",
  marginBottom: "12px",
};

const paragraphStyle = {
  color: "var(--gray)",
  lineHeight: "1.8",
};

const badgeStyle = {
  border: "1px solid rgba(0, 255, 255, 0.2)",
  borderRadius: "999px",
  padding: "6px 10px",
  color: "var(--cyan)",
  fontSize: "0.78rem",
};

const skillStyle = {
  background: "rgba(0, 255, 255, 0.08)",
  color: "var(--cyan)",
  border: "1px solid rgba(0, 255, 255, 0.14)",
  borderRadius: "999px",
  padding: "8px 12px",
  fontSize: "0.85rem",
};

const commandBoxStyle = {
  display: "grid",
  gap: "10px",
  border: "1px solid rgba(0, 255, 255, 0.12)",
  borderRadius: "18px",
  padding: "18px",
  background: "rgba(0, 0, 0, 0.22)",
};

const codeStyle = {
  color: "var(--cyan)",
  whiteSpace: "pre-wrap",
  wordBreak: "break-word",
};

const backButtonStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "var(--cyan)",
  background: "transparent",
  border: "1px solid rgba(0, 255, 255, 0.25)",
  borderRadius: "999px",
  padding: "11px 16px",
  textDecoration: "none",
  fontWeight: "700",
};