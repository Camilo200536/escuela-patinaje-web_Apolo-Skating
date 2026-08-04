import { useState } from "react";
import "./Navbar.css";
import logoApolo from "../../assets/images/Logo/logo-apolo.jpeg";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (

    <header className="navbar">

      <div className="container">

        <div className="logo">
          <img src={logoApolo} alt="Logo Apolo Skating" />
        </div>

        {/* Botón hamburguesa */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <nav className={menuOpen ? "nav active" : "nav"}>

          <ul className="nav-links">

            <li><a href="#inicio" onClick={closeMenu}>Inicio</a></li>

            <li><a href="#nosotros" onClick={closeMenu}>Nosotros</a></li>

            <li><a href="#programas" onClick={closeMenu}>Programas</a></li>

            <li><a href="#horarios" onClick={closeMenu}>Horarios</a></li>

            <li><a href="#galeria-docentes" onClick={closeMenu}>Galería y Docentes</a></li>

            <li><a href="#contacto" onClick={closeMenu}>Contacto</a></li>

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