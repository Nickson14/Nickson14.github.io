// src/components/common/Navbar.jsx
import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/certificaciones", label: "Certificaciones" },
  { to: "/ctf", label: "CTF" },
  { to: "/code-review", label: "Code Review" },
  { to: "/infra", label: "Infraestructura" },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <div className="navbar-logo">
          <span className="logo-tag">&lt;/&gt;</span>
          <span className="logo-text">Nickson</span>
        </div>

        <nav className="navbar-links">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `navbar-link ${isActive ? "navbar-link--active" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
