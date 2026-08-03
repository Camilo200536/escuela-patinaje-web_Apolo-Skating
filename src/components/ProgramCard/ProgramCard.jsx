import "./ProgramCard.css";

function ProgramCard({
  image,
  title,
  description,
  level,
  age,
  buttonText,
}) {
  return (
    <div className="program-card">
      <img
        src={image}
        alt={title}
        className="program-image"
      />

      <div className="program-content">
        <h3>{title}</h3>

        <p>{description}</p>

        <div className="program-info">
          <span>
            <strong>Nivel:</strong> {level}
          </span>

          <span>
            <strong>Edad:</strong> {age}
          </span>
        </div>

        <button>{buttonText}</button>
      </div>
    </div>
  );
}

export default ProgramCard;