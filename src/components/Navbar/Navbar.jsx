
import { useState } from "react";
import "./Navbar.css";

import logoApolo from "../../assets/images/Logo/logo-apolo.jpeg";

import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

function Navbar() {

    const [menuOpen,setMenuOpen]=useState(false);

    return(

<header className="navbar">

<div className="container">

<div className="logo">

<img src={logoApolo} alt="Logo"/>

</div>

<nav className="desktop-nav">

<NavLinks/>

</nav>

<button
  className="menu-toggle"
  onClick={() => setMenuOpen(true)}
>

  <span className="menu-text">
    Menú de navegación
  </span>

  <span className="menu-icon">
    ☰
  </span>

</button>


<button className="btn-primary">

Inscríbete

</button>

<MobileMenu

menuOpen={menuOpen}

closeMenu={()=>setMenuOpen(false)}

/>

</div>

</header>

    );

}

export default Navbar;