// src/modules/infra/InfraHome.jsx
import "./infra.css";
import { infraProjects } from "./data/infraDummy";
import InfraCard from "./InfraCard";

export default function InfraHome() {
  return (
    <section className="infra-page">
      <div className="container">
        <h1 className="infra-page-title">Infraestructura & Redes</h1>
        <p className="infra-page-intro">
          Aquí documento topologías, proyectos de redes e infraestructura:
          firewalls, VPN, WiFi para hoteles, monitoreo SNMP y más. Cada tarjeta
          enlaza a la documentación o writeup correspondiente.
        </p>

        <div className="infra-grid">
          {infraProjects.map((project) => (
            <InfraCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
