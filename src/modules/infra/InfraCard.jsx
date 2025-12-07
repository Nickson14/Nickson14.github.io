import "./infra.css";

export default function InfraCard({ project }) {
  return (
    <article className="infra-card">
      <div className="infra-card-thumb">
        <img src={project.image} alt={project.title} />
      </div>

      <div className="infra-card-body">
        <header className="infra-card-header">
          <h3>{project.title}</h3>
          <span className="infra-badge">{project.difficulty}</span>
        </header>

        <p className="infra-meta">{project.category}</p>
        <p className="infra-summary">{project.summary}</p>

        <a
          href={project.link}
          className="infra-card-link"
          target="_blank"
        >
          Ver writeup en Medium
        </a>
      </div>
    </article>
  );
}
