// src/components/common/Footer.jsx

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-main">
          <p>
            © {CURRENT_YEAR} Ruddy Contreras · Ciberseguridad &amp; Infraestructura
          </p>
          <p className="footer-subtext">
            Portafolio técnico personal construido con React &amp; Vite
          </p>
        </div>
      </div>
    </footer>
  );
}
