import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} Nickson Diaz · Ciberseguridad &  Infraestructura
        </p>
        <p className="footer-secondary">
          Portafolio técnico personal construido con React &amp; Vite
        </p>
      </div>
    </footer>
  );
}
