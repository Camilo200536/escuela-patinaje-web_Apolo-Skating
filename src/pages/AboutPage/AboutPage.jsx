import "./AboutPage.css";

import about1 from "../../assets/images/About/About1.jpg";
import about2 from "../../assets/images/About/About2.jpg";
import about3 from "../../assets/images/About/About3.jpeg";

function AboutPage() {

    return (

        <main className="about-page">

            {/* INTRODUCCIÓN */}

            <section className="about-intro" id="conocenos">

                <span className="about-tag">
                    CONÓCENOS
                </span>

                <h1>
                    Apolo Skating Pereira y Dosquebradas
                </h1>

                <p>
                    Una escuela, una comunidad y una pasión
                    por el patinaje.
                </p>

            </section>


            {/* GALERÍA INSTITUCIONAL */}

            <section className="about-gallery">

                <div className="about-gallery-main">

                    <img
                        src={about1}
                        alt="Niños patinando en Apolo Skating"
                    />

                </div>


                <div className="about-gallery-side">

                    <img
                        src={about2}
                        alt="Entrenamiento de patinaje Apolo Skating"
                    />

                    <img
                        src={about3}
                        alt="Patinadores de Apolo Skating"
                    />

                </div>

            </section>


            {/* MISIÓN Y VISIÓN */}

            <section className="mission-vision">

                <article className="about-card">

                    <div className="about-card-icon">
                        🎯
                    </div>

                    <h2>
                        Nuestra Misión
                    </h2>

                    <p>
                        Formar patinadores íntegros a través de la
                        práctica del patinaje, brindando una formación
                        deportiva de calidad que fortalezca sus
                        habilidades técnicas, la disciplina,
                        el compromiso, el respeto y el trabajo
                        en equipo.
                    </p>

                    <p>
                        En Apolo Skating buscamos acompañar a cada
                        deportista en su proceso de crecimiento,
                        promoviendo un ambiente sano, seguro y
                        motivador para alcanzar sus objetivos
                        deportivos y personales.
                    </p>

                </article>


                <article className="about-card">

                    <div className="about-card-icon">
                        🔭
                    </div>

                    <h2>
                        Nuestra Visión
                    </h2>

                    <p>
                        Ser un club de patinaje reconocido por la
                        calidad de su formación deportiva y humana,
                        contribuyendo al desarrollo de nuevos talentos
                        y formando deportistas preparados para afrontar
                        diferentes retos y escenarios competitivos.
                    </p>

                    <p>
                        Aspiramos a crecer como institución,
                        fortaleciendo nuestra comunidad deportiva
                        y llevando el nombre de Apolo Skating a
                        nuevos espacios y competencias a nivel
                        regional y nacional.
                    </p>

                </article>

            </section>


            {/* VALORES */}

            <section className="values-section">

                <div className="values-header">

                    <span className="about-tag">
                        NUESTROS VALORES
                    </span>

                    <h2>
                        Lo que nos representa
                    </h2>

                    <p>
                        Creemos que el deporte también es una
                        herramienta para formar grandes personas.
                    </p>

                </div>


                <div className="values-grid">

                    <article className="value-card">

                        <span className="value-icon">
                            🏆
                        </span>

                        <h3>
                            Disciplina
                        </h3>

                        <p>
                            Trabajamos con constancia y compromiso
                            para alcanzar nuestros objetivos.
                        </p>

                    </article>


                    <article className="value-card">

                        <span className="value-icon">
                            🤝
                        </span>

                        <h3>
                            Respeto
                        </h3>

                        <p>
                            Valoramos a nuestros compañeros,
                            entrenadores, familias y rivales.
                        </p>

                    </article>


                    <article className="value-card">

                        <span className="value-icon">
                            💪
                        </span>

                        <h3>
                            Perseverancia
                        </h3>

                        <p>
                            Cada dificultad representa una
                            oportunidad para aprender y mejorar.
                        </p>

                    </article>


                    <article className="value-card">

                        <span className="value-icon">
                            ❤️
                        </span>

                        <h3>
                            Pasión
                        </h3>

                        <p>
                            Promovemos el amor por el patinaje
                            como una forma de crecer y disfrutar.
                        </p>

                    </article>


                    <article className="value-card">

                        <span className="value-icon">
                            👥
                        </span>

                        <h3>
                            Trabajo en equipo
                        </h3>

                        <p>
                            Entendemos que el crecimiento deportivo
                            también se construye junto a los demás.
                        </p>

                    </article>


                    <article className="value-card">

                        <span className="value-icon">
                            🌟
                        </span>

                        <h3>
                            Formación integral
                        </h3>

                        <p>
                            Buscamos formar deportistas que también
                            crezcan como personas.
                        </p>

                    </article>

                </div>

            </section>

        </main>

    );

}

export default AboutPage;