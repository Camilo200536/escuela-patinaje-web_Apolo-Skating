import "./MobileMenu.css";
import logoApolo from "../../assets/images/Logo/logo-apolo.jpeg";
import NavLinks from "./NavLinks";

function MobileMenu({ menuOpen, closeMenu }) {

  return (

    <>

      {menuOpen && (
        <div
          className="menu-overlay"
          onClick={closeMenu}
        />
      )}

      <aside className={menuOpen ? "mobile-menu active" : "mobile-menu"}>

        <div className="mobile-header">

          <img
            src={logoApolo}
            alt="Logo Apolo"
          />

          <button
            className="close-btn"
            onClick={closeMenu}
          >
            ✕
          </button>

        </div>

        <h3>Apolo Skating</h3>

        <p>Escuela de Patinaje</p>

        <NavLinks onClick={closeMenu} />

        <button className="btn-mobile">
          Inscríbete
        </button>

      </aside>

    </>

  );

}

export default MobileMenu;