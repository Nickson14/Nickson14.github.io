// src/components/common/Navbar.jsx
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="/" className="navbar-logo">
          <span className="logo-code">&lt;/&gt;</span>
          <span className="logo-text">Nickson</span>
        </a>

        <nav className="navbar-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              "nav-link" + (isActive ? " nav-link-active" : "")
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/certificaciones"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " nav-link-active" : "")
            }
          >
            Certificaciones
          </NavLink>
          <NavLink
            to="/ctf"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " nav-link-active" : "")
            }
          >
            CTF
          </NavLink>
          <NavLink
            to="/code-review"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " nav-link-active" : "")
            }
          >
            Code Review
          </NavLink>
          <NavLink
            to="/infra"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " nav-link-active" : "")
            }
          >
            Infraestructura
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
