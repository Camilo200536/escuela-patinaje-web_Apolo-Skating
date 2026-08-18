import "./Gallery.css";
import gallery from "../../data/gallery";
import GalleryCard from "../GalleryCard/GalleryCard";
import { Link } from "react-router-dom";

function Gallery() {

    return (

        <section
            className="gallery"
            id="galeria"
        >

            <div className="container">

                <span className="section-tag">

                    Galería

                </span>

                <h2>

                    Vive la experiencia Apolo Skating

                </h2>

                <p className="subtitle">

                    Conoce algunos de nuestros entrenamientos, competencias y momentos que hacen parte de nuestra familia deportiva.

                </p>

                <div className="gallery-grid">

                    {gallery.map((item) => (

                        <GalleryCard
                            key={item.id}
                            item={item}
                        />

                    ))}

                </div>

            </div>

            <div className="Gallery-back">
    <Link to="/" className="btn-volver">
        ← Volver al inicio
    </Link>
</div>

        </section>

    );

}

export default Gallery;