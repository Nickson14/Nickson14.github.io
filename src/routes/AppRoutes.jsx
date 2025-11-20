import { Routes, Route } from "react-router-dom";
import HomePage from "../modules/home/HomePage";
// Más adelante agregamos estas páginas reales
import CertificationsPage from "../modules/certifications/CertificationsPage";
import CtfHome from "../modules/ctf/CtfHome";
import CodeReviewHome from "../modules/code-review/CodeReviewHome";
import InfraHome from "../modules/infra/InfraHome";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/certificaciones" element={<CertificationsPage />} />
      <Route path="/ctf" element={<CtfHome />} />
      <Route path="/code-review" element={<CodeReviewHome />} />
      <Route path="/infra" element={<InfraHome />} />
    </Routes>
  );
}
