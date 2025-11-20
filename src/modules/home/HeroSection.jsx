import "./hero.css";

export default function HeroSection() {
  return (
    <section className="hero-container">
      <div className="hero-content">
        
        <h1 className="hero-title">
          Hola, soy <span className="highlight">Ruddy Contreras</span>
        </h1>

        <p className="hero-subtitle">
          Especialista en Ciberseguridad, Infraestructura y Análisis Técnico
        </p>

        <p className="hero-description">
          Domino áreas como pruebas de penetración, redes, sistemas, 
          CTFs, análisis de vulnerabilidades y desarrollo seguro.
          Aquí encontrarás mis proyectos, certificaciones y reportes técnicos.
        </p>

        <div className="hero-buttons">
          <a href="/certificaciones" className="btn-primary">Certificaciones</a>
          <a href="/ctf" className="btn-secondary">CTF</a>
          <a href="/infra" className="btn-secondary">Infraestructura</a>
          <a href="/code-review" className="btn-secondary">Code Review</a>
        </div>

      </div>
    </section>
  );
}
