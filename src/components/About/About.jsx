import "./About.css";
import Aboutimages from "../../assets/images/About/Nosotros.png";

function About() {
  return (
    <section className="about" id="nosotros">
      <div className="container about-content">

        <div className="about-image">
            <img src={Aboutimages} alt="Nosotros" />
        </div>

        <div className="about-text">

          <span className="section-tag">
            Nosotros
          </span>

          <h2>
            Más que una escuela de patinaje,
            una familia deportiva.
          </h2>

          <p>
            En Apolo Skating trabajamos para formar deportistas
            íntegros, fomentando valores como la disciplina,
            el respeto, el compromiso y el trabajo en equipo.
          </p>

          <p>
            Nuestro objetivo es brindar un espacio donde niños,
            jóvenes y adultos desarrollen sus habilidades sobre
            ruedas mientras disfrutan del deporte en un ambiente
            seguro y motivador.
          </p>

        </div>

      </div>
    </section>
  );
}

export default About;