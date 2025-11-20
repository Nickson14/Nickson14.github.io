import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo">
          <span className="logo-highlight">&lt;/&gt;</span> Nickson
        </Link>

        <nav className="navbar-links">
          <NavLink to="/" className="nav-item">
            Home
          </NavLink>
          <NavLink to="/certificaciones" className="nav-item">
            Certificaciones
          </NavLink>
          <NavLink to="/ctf" className="nav-item">
            CTF
          </NavLink>
          <NavLink to="/code-review" className="nav-item">
            Code Review
          </NavLink>
          <NavLink to="/infra" className="nav-item">
            Infraestructura
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
