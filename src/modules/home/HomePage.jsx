import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
    </>
  );
}
<div className="hero-actions">
  <Link to="/certificaciones" className="btn btn-primary">
    Ver certificaciones
  </Link>

  <Link to="/ctf" className="btn btn-secondary">
    CTF & Writeups
  </Link>

  <Link to="/infra" className="btn btn-ghost">
    Infraestructura
  </Link>
</div>
