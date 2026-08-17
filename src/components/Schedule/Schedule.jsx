import { useState } from "react";
import { scheduleData } from "./scheduleData";
import "./Schedule.css";

function Schedule() {
  const [openDay, setOpenDay] = useState(null);

  const toggleDay = (index) => {
    setOpenDay(openDay === index ? null : index);
  };

  return (
    <section className="schedule-section" id="horarios">
      <div className="schedule-container">
        <div className="schedule-header">
          <span className="schedule-tag">📅 HORARIOS</span>
          <h2>Nuestros horarios de entrenamiento</h2>
          <p>
            En Apolo Skating ofrecemos entrenamientos adaptados a cada nivel.
            ¡Encuentra el horario que mejor se ajuste a ti!
          </p>
        </div>

        <div className="schedule-grid">
          {scheduleData.map((item, index) => (
            <div
              key={index}
              className={`schedule-card ${openDay === index ? "active" : ""}`}
            >
              <div className="schedule-card-header">
                <div className="schedule-day-info">
                  <span className="schedule-icon">{item.icon}</span>
                  <h3>{item.day}</h3>
                </div>
                <button
                  className="schedule-toggle"
                  onClick={() => toggleDay(index)}
                  aria-expanded={openDay === index}
                >
                  {openDay === index ? "Cerrar ✕" : "Ver horario ▼"}
                </button>
              </div>

              {openDay === index && (
                <div className="schedule-dropdown">
                  {item.schedules.map((sede, idx) => (
                    <div key={idx} className="schedule-sede">
                      <h4 className="sede-title">📍 {sede.sede}</h4>
                      <div className="schedule-list">
                        {sede.horarios.map((horario, hIdx) => (
                          <div key={hIdx} className="schedule-item">
                            <span className="schedule-level">
                              {horario.nivel}
                            </span>
                            <span className="schedule-time">
                              🕐 {horario.hora}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Schedule;