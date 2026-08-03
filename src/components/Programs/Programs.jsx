import "./Programs.css";
import ProgramCard from "../ProgramCard/ProgramCard";
import programs from "../../data/programs.js";

function Programs() {
  console.log(programs);
  return (
    <section className="programs" id="programas">
      <div className="container">

        <h2>Nuestros Programas</h2>

        <p className="subtitle">
          Formación deportiva para todas las edades y niveles.
        </p>

        <div className="programs-grid">

    {programs.map((program) => (

        <ProgramCard
            key={program.id}
            image={program.image}
            title={program.title}
            description={program.description}
            level={program.level}
            age={program.age}
            buttonText={program.buttonText}
        />

    ))}

</div>

      </div>
    </section>
  

  );
}

export default Programs;