import "./Explore.css";
import { Link } from "react-router-dom";

function Explore() {
    return (
        <section className="explore">

            <h2>Descubre más sobre Apolo Skating</h2>

            <p>
                Conoce nuestro equipo de entrenadores y revive los mejores momentos
                de nuestra escuela.
            </p>

            <div className="explore-grid">

                <div className="explore-card">

                    <span className="explore-icon">📷</span>

                    <h3>Galería</h3>

                    <p>
                        Explora fotografías y videos de entrenamientos,
                        competencias y eventos.
                    </p>

                    <Link
                        to="/galeria"
                        className="explore-button"
                    >
                        Ver Galería
                    </Link>

                </div>

                <div className="explore-card">

                    <span className="explore-icon">👨‍🏫</span>

                    <h3>Profesores</h3>

                    <p>
                        Conoce a nuestro equipo de entrenadores y su experiencia.
                    </p>

                    <Link
                        to="/profesores"
                        className="explore-button"
                    >
                        Ver Profesores
                    </Link>

                </div>

            </div>

        </section>
    );
}

export default Explore;