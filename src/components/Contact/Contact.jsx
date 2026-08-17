import "./Contact.css";

import {
    FaWhatsapp,
    FaInstagram,
    FaFacebookF,
    FaEnvelope,
    FaMapMarkerAlt
} from "react-icons/fa";

function Contact() {

    return (

        <section className="contact" id="contacto">

            <div className="container">

                <span className="section-tag">
                    Contáctanos
                </span>

                <h2>¡Comienza hoy tu aventura sobre ruedas!</h2>

                <p className="subtitle">

                    Estamos listos para ayudarte a encontrar el programa ideal para ti o para tus hijos.

                </p>

                <a
                    href="https://wa.me/3122359023?text=Hola%2C%20estoy%20interesado%20en%20inscribirme%20en%20Apolo%20Skating."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-button"
                >

                    <FaWhatsapp />

                    Inscribirme por WhatsApp

                </a>

                <div className="contact-grid">

                    <a
                        href="https://www.instagram.com/patinaje_apolo_skating_pereira?igsh=Nzkyc2pwZmliZTYz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-card"
                    >

                        <FaInstagram />

                        <h3>Instagram</h3>

                        <p>Síguenos y conoce nuestros eventos.</p>

                    </a>

                    <a
                        href="https://www.facebook.com/share/1HJuKyawCd/?mibextid=wwXIfr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-card"
                    >

                        <FaFacebookF />

                        <h3>Facebook</h3>

                        <p>Haz parte de nuestra comunidad.</p>

                    </a>

                    <a
                        href="mailto:contacto@apoloskating.com"
                        className="contact-card"
                    >

                        <FaEnvelope />

                        <h3>Correo</h3>

                        <p>Escríbenos cuando quieras.</p>

                    </a>

                    <div className="contact-card">

                        <FaMapMarkerAlt />

                        <h3>Sedes</h3>

                        <p>Pereira y Dosquebradas</p>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default Contact;