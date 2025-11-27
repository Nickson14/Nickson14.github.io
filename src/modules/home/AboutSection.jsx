import "./about.css";

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="container">
        <h2 className="about-title">Acerca de mí</h2>

        <p className="about-text">
          Soy un profesional apasionado por la ciberseguridad ofensiva y defensiva,
          con experiencia en redes, sistemas, virtualización, monitoreo y análisis
          de vulnerabilidades. Me gusta construir laboratorios, documentar procesos
          y transformar todo en aprendizaje práctico.
        </p>

        <p className="about-text">
          Este sitio sirve como mi bitácora técnica: aquí iré agregando CTFs,
          proyectos de infraestructura, code reviews y evidencias de formación
          (cursos, certificaciones y entrenamientos).
        </p>
      </div>
    </section>
  );
}
