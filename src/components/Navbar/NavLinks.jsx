import {
  FaHome,
  FaUsers,
  FaSkating,
  FaClock,
  FaImages,
  FaPhoneAlt,
} from "react-icons/fa";

function NavLinks({ onClick }) {
  return (
    <ul className="nav-links">

      <li>
        <a href="#inicio" onClick={onClick}>
          🏠 Inicio
        </a>
      </li>

      <li>
        <a href="#nosotros" onClick={onClick}>
          👥 Nosotros
        </a>
      </li>

      <li>
        <a href="#programas" onClick={onClick}>
          🎯 Programas
        </a>
      </li>

      <li>
        <a href="#horarios" onClick={onClick}>
          🕒 Horarios
        </a>
      </li>

      <li>
        <a href="#galeria-docentes" onClick={onClick}>
          📷 Galería y Docentes
        </a>
      </li>

      <li>
        <a href="#contacto" onClick={onClick}>
          📞 Contacto
        </a>
      </li>
      

    </ul>
  );
}

export default NavLinks;