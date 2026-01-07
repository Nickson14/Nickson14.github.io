// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import HomePage from "../modules/home/HomePage";
import CertificationsPage from "../modules/certifications/CertificationsPage";
import CtfHome from "../modules/ctf/CtfHome";
import CtfPost from "../modules/ctf/CtfPost";
import InfraHome from "../modules/infra/InfraHome";

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
      {/* Home */}
      <Route path="/" element={<HomePage />} />

      {/* Certificaciones */}
      <Route path="/certificaciones" element={<CertificationsPage />} />

      {/* CTF */}
      <Route path="/ctf" element={<CtfHome />} />
      <Route path="/ctf/:slug" element={<CtfPost />} />

      {/* Infraestructura: aquí sí usamos InfraHome */}
      <Route path="/infra" element={<InfraHome />} />

      {/* Code review por ahora placeholder */}
      <Route
        path="/code-review"
        element={<Placeholder title="Code Review & Análisis" />}
      />

      
    </Routes>
  );     

}

