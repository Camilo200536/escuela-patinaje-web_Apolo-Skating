import "./Schedule.css";
import ScheduleCard from "../ScheduleCard/ScheduleCard";
import schedule from "../../data/schedule";

function Schedule() {
  return (
    <section className="schedule" id="horarios">

      <div className="container">

        <span className="section-tag">
          Horarios
        </span>

        <h2>Nuestros Horarios</h2>

        <p className="subtitle">
          Consulta los horarios de entrenamiento de nuestras sedes y encuentra el grupo ideal para ti.
        </p>

        <div className="schedule-grid">

          {schedule.map((site) => (

            <ScheduleCard
              key={site.id}
              city={site.city}
              address={site.address}
              days={site.days}
            />

          ))}

        </div>

      </div>

    </section>
  );
}

export default Schedule;