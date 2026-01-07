import "./certifications.css";

export default function CertificationCard({ cert }) {
  return (
    <article className="cert-card">
      <header className="cert-header">
        <h3 className="cert-title">{cert.title}</h3>
        {cert.status && (
          <span
            className={
              cert.status === "completed"
                ? "cert-badge done"
                : "cert-badge progress"
            }
          >
            {cert.status === "completed" ? "Completado" : "En progreso"}
          </span>
        )}
      </header>

      <p className="cert-provider">{cert.provider}</p>

      <p className="cert-meta">
        <span>{cert.level}</span>
        {cert.date && <span> · {cert.date}</span>}
      </p>

      {cert.imageUrl && (
        <div className="cert-image-wrapper">
          <img
            src={cert.imageUrl}
            alt={`Certificado ${cert.title}`}
            className="cert-image"
          />
        </div>
      )}

      {cert.certificateUrl && (
        <a
          href={cert.certificateUrl}
          target="_blank"
          rel="noreferrer"
          className="cert-link-button"
        >
          Ver certificado
        </a>
      )}
    </article>
  );
}
