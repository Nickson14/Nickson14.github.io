// src/routes/AppRoutes.jsx

import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "../modules/home/HomePage";
import CertificationsPage from "../modules/certifications/CertificationsPage";
import CtfHome from "../modules/ctf/CtfHome";
import CtfPost from "../modules/ctf/CtfPost";
import InfraHome from "../modules/infra/InfraHome";

import WargamesHome from "../modules/Wargames/WargamesHome";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/certificaciones" element={<CertificationsPage />} />

      <Route path="/ctf" element={<CtfHome />} />
      <Route path="/ctf/:slug" element={<CtfPost />} />

      <Route path="/infra" element={<InfraHome />} />

      <Route path="/wargames" element={<WargamesHome />} />

      <Route path="/code-review" element={<Navigate to="/wargames" replace />} />
    </Routes>
  );
}
