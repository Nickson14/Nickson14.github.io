// src/modules/home/HeroSection.jsx
import { useNavigate } from "react-router-dom";
import "./hero.css";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <p className="hero-kicker">PORTAFOLIO TÉCNICO · CIBERSEGURIDAD</p>

      <h1 className="hero-title">
        Hola, soy <span>Nickson Diaz</span>
      </h1>

      <p className="hero-subtitle">
        Ciberseguridad · Redes · Infraestructura · Análisis técnico
      </p>

      <p className="hero-body">
        Trabajo en proyectos de hacking ético, diseño de redes, virtualización,
        automatización y documentación técnica. Aquí reúno mis laboratorios,
        CTFs, certificaciones y proyectos reales.
      </p>

      <div className="hero-actions">
        <button
          className="btn btn-primary"
          onClick={() => navigate("/certificaciones")}
        >
          Ver certificaciones
        </button>

        <button
          className="btn btn-outline"
          onClick={() => navigate("/ctf")}
        >
          CTF &amp; Writeups
        </button>

        <button
          className="btn btn-outline"
          onClick={() => navigate("/infraestructura")}
        >
          Infraestructura
        </button>
      </div>
    </section>
  );
}
