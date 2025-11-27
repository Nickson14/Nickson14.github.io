import { certifications } from "./data/certificationsData";
import CertificationCard from "./CertificationCard";
import "./certifications.css";

export default function CertificationsPage() {
  return (
    <section className="cert-page">
      <div className="container">
        <h1 className="cert-page-title">Certificaciones & Formación</h1>
        <p className="cert-page-intro">
          Aquí se muestran las certificaciones, cursos y entrenamientos
          relacionados con ciberseguridad, redes e infraestructura que he
          completado o que actualmente estoy cursando.
        </p>

        <div className="cert-grid">
          {certifications.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
