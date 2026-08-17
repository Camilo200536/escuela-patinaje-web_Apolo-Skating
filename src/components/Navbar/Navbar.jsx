
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
onClick={()=>setMenuOpen(true)}
>

☰

</button>

<br />
<br />

<a
    href="https://wa.me/3122359023?text=Hola%2C%20estoy%20interesado%20en%20inscribirme%20en%20Apolo%20Skating."
    target="_blank"
    rel="noopener noreferrer"
    className="btn-primary"
>
    Inscríbete
</a>


<MobileMenu

menuOpen={menuOpen}

closeMenu={()=>setMenuOpen(false)}

/>

</div>

</header>

    );

}

export default Navbar;