import "./ProgramCard.css";
import { Link } from "react-router-dom";

function ProgramCard({
  image,
  title,
  description,
  level,
  age,
  buttonText,
  slug,
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

        <Link to={`/programa/${slug}`} className="btn-program">
            {buttonText}
        </Link>
      </div>
    </div>
  );
}

export default ProgramCard;