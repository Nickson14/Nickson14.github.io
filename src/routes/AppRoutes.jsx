// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import HomePage from "../modules/home/HomePage";
import CertificationsPage from "../modules/certifications/CertificationsPage";
import CtfHome from "../modules/ctf/CtfHome";
import CtfPost from "../modules/ctf/CtfPost";

function Placeholder({ title }) {
  return (
    <div className="container" style={{ padding: "60px 0" }}>
      <h1 style={{ color: "var(--cyan)", marginBottom: "16px" }}>{title}</h1>
      <p style={{ color: "var(--gray)" }}>Contenido en construcción.</p>
    </div>
  );
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/certificaciones" element={<CertificationsPage />} />

      {/* CTF reales */}
      <Route path="/ctf" element={<CtfHome />} />
      <Route path="/ctf/:slug" element={<CtfPost />} />

      {/* Placeholders que ya tenías */}
      <Route
        path="/code-review"
        element={<Placeholder title="Code Review & Análisis" />}
      />
      <Route
        path="/infra"
        element={<Placeholder title="Infraestructura & Redes" />}
      />
    </Routes>
  );
}
