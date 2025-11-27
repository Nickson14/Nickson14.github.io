// src/modules/home/HeroSection.jsx
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div className="hero-text">
          <p className="hero-kicker">PORTAFOLIO TÉCNICO · CIBERSEGURIDAD</p>
          <h1 className="hero-title">
            Hola, soy <span className="accent">Nickson Diaz</span>
          </h1>
          <p className="hero-subtitle">
            Ciberseguridad · Redes · Infraestructura · Análisis técnico
          </p>
          <p className="hero-description">
            Trabajo en proyectos de hacking ético, diseño de redes, virtualización,
            automatización y documentación técnica. Aquí reúno mis laboratorios, CTFs,
            certificaciones y proyectos reales.
          </p>

          <div className="hero-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => navigate("/certificaciones")}
            >
              Ver certificaciones
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate("/ctf")}
            >
              CTF &amp; Writeups
            </button>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => navigate("/infra")}
            >
              Infraestructura
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
