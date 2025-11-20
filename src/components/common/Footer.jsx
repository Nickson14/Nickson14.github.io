import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Ruddy Contreras · Ciberseguridad & Infraestructura</p>
        <p className="footer-secondary">
          Construido con React · Portafolio técnico personal
        </p>
      </div>
    </footer>
  );
}
