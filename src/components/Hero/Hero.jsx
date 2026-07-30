import "./Hero.css";
import heroImage from "../../assets/images/Hero/imagen_principal.jpeg";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-content">

        <div className="hero-text">

          <span className="hero-tag">
            Escuela de Patinaje
          </span>

          <h1>
            Formando campeones sobre ruedas
          </h1>

          <p>
            En Apolo Skating creemos que el deporte transforma vidas.
            Formamos niños, jóvenes y adultos mediante el patinaje,
            fortaleciendo la disciplina, el trabajo en equipo y la confianza.
          </p>

          <div className="hero-buttons">

            <button className="btn-primary">
              Inscríbete
            </button>

            <button className="btn-primary">
              Conócenos
            </button>

          </div>

        </div>

        <div className="hero-image">

          <img
            src={heroImage}
            alt="Entrenamiento Apolo Skating"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;