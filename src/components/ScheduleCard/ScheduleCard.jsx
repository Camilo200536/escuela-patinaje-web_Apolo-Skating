import "./ScheduleCard.css";

function ScheduleCard({ city, address, days }) {
  return (
    <div className="schedule-card">

      <div className="schedule-header">
        <h3>{city}</h3>
        <p>{address}</p>
      </div>

      <div className="schedule-body">

  {days.map((item, index) => (

    <div className="schedule-day" key={index}>

      <h4>{item.day}</h4>

      {item.classes.map((hour, i) => (

        <div className="schedule-row" key={i}>

          <span className="class-number">
            Clase {i + 1}
          </span>

            <div className="time-box">
    🕒 {hour}
            </div>

        </div>

      ))}

    </div>

  ))}

</div>

    </div>
  );
}

export default ScheduleCard;