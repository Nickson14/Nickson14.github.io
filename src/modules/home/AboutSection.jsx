import "./about.css";

export default function AboutSection() {
  return (
    <section className="about-section">
      <h2 className="about-title">Acerca de mí</h2>

      <p className="about-text">
        Soy un profesional apasionado por la ciberseguridad ofensiva y defensiva.
        Tengo experiencia en infraestructura, monitoreo, análisis de vulnerabilidades,
        virtualización, ingeniería inversa inicial, redes y automatización.
      </p>

      <p className="about-text">
        Trabajo en proyectos de pentesting, análisis técnico, diseño de redes,
        documentación, implementación de soluciones tecnológicas y seguridad empresarial.
        Me enfoco en mejorar continuamente mis habilidades y aportar valor a empresas.
      </p>

      <div className="about-links">
        <a href="https://github.com/" target="_blank" className="link-card">GitHub</a>
        <a href="/certificaciones" className="link-card">Certificaciones</a>
        <a href="/cv.pdf" className="link-card">Descargar CV</a>
      </div>
    </section>
  );
}
