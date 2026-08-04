import "./ExploreCard.css";
import { Link } from "react-router-dom";

function ExploreCard({
    image,
    title,
    description,
    buttonText,
    link
}) {

    return (

        <div className="explore-card">

            <img
                src={image}
                alt={title}
            />

            <div className="explore-content">

                <h2>{title}</h2>

                <p>{description}</p>

                <Link
                    to={link}
                    className="explore-button"
                >
                    {buttonText}
                </Link>

            </div>

        </div>

    );

}

export default ExploreCard;