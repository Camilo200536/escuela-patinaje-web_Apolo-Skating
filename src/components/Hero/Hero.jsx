import "./Hero.css";

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
            En Apolo Skating desarrollamos talento,
            disciplina y pasión por el patinaje
            en niños, jóvenes y adultos.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">
              Inscríbete
            </button>

            <button className="btn-secondary">
              Conócenos
            </button>
          </div>

        </div>

        <div className="hero-image">

          <div className="image-placeholder">
            Imagen Principal
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;