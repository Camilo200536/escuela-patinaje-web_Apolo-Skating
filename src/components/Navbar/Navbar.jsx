import "./Navbar.css";
import logoApolo from "../../assets/images//Logo/logo-apolo.jpeg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container">

        <div className="logo">
  <img src={logoApolo} alt="Logo Apolo Skating" />
        </div>

        <nav>
          <ul className="nav-links">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#programas">Programas</a></li>
            <li><a href="#horarios">Horarios</a></li>
            <li><a href="#contacto">Contacto</a></li>
            <li><a href="#galeria-docentes">Galería y Docentes</a></li>
            
          </ul>
        </nav>

        <button className="btn-primary">
          Inscríbete
        </button>

      </div>
    </header>
  );
}

export default Navbar;