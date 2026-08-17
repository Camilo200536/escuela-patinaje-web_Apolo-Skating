import "./Explore.css";

import ExploreCard from "../ExploreCard/ExploreCard";

import galleryImage from "../../assets/images/Gallery/Gallery.png";
import teachersImage from "../../assets/images/Teachers/Profes.png";
import Aboutimage from "../../assets/images/About/About4.jpeg";

function Explore(){

    return(

        

        <section className="explore-section"
        id="galeria-docentes">

            <h1>

                Sigue explorando Apolo Skating

            </h1>

            <p>

                Descubre nuestra galería y conoce el equipo humano que hace posible el crecimiento de nuestros deportistas.

            </p>

            <ExploreCard

                image={galleryImage}

                title="Galería"

                description="Revive nuestros entrenamientos, festivales, competencias y los mejores momentos vividos por nuestros deportistas."

                buttonText="Ver Galería"

                link="/galeria"

            />

            <ExploreCard

                image={teachersImage}

                title="Nuestros Profesores"

                description="Conoce a nuestros entrenadores, su experiencia y la pasión con la que acompañan el proceso deportivo de cada estudiante."

                buttonText="Conocer Profesores"

                link="/profesores"

            />

            <ExploreCard

                image={Aboutimage}

                title="Conocenos"

                description="Nuestra mision, vision y valores"

                buttonText="Ver Galería"

                link="/conocenos"

            />

            

        </section>

        

    );

}

export default Explore;