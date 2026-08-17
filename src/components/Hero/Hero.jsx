import "./Hero.css";
import heroImage from "../../assets/images/Hero/imagen_principal.jpeg";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-content">

        <div className="hero-text">

          <span className="hero-tag">
            Club inscrito en la liga Risaraldense de patinaje
          </span>

          <h1>
            Club de patinaje Apolo skating Pereira y dosquebradas 
          </h1>

          <p>
            En Apolo Skating creemos que el deporte transforma vidas.
            Formamos niños, jóvenes y adultos mediante el patinaje,
            fortaleciendo la disciplina, el trabajo en equipo y la confianza.
          </p>

          <div className="hero-buttons">

            <a
    href="https://wa.me/3122359023?text=Hola%2C%20estoy%20interesado%20en%20inscribirme%20en%20Apolo%20Skating."
    target="_blank"
    rel="noopener noreferrer"
    className="btn-primary"
            >
    Inscríbete
            </a>

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