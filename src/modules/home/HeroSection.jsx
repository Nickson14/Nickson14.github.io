import "./hero.css";

export default function HeroSection() {
  return (
    <section className="hero-container">
      <div className="container hero-content">
        <p className="hero-tag">Portafolio técnico · Ciberseguridad</p>

        <h1 className="hero-title">
          Hola, soy <span className="highlight">Nickson Diaz</span>
        </h1>

        <p className="hero-subtitle">
          Ciberseguridad · Redes · Infraestructura · Análisis técnico
        </p>

        <p className="hero-description">
          Trabajo en proyectos de hacking ético, diseño de redes, virtualización,
          automatización y documentación técnica. Aquí reúno mis laboratorios,
          CTFs, certificaciones y proyectos reales.
        </p>

        <div className="hero-buttons">
          <a href="/certificaciones" className="btn-primary">
            Ver certificaciones
          </a>
          <a href="/ctf" className="btn-secondary">
            CTF &amp; Writeups
          </a>
          <a href="/infra" className="btn-secondary">
            Infraestructura
          </a>
        </div>
      </div>
    </section>
  );
}
