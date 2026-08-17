import "./TeacherCard.css";

function TeacherCard({
    image,
    name,
    speciality,
    experience,
    description
}) {

    return (

        <div className="teacher-card">

            <img
                src={image}
                alt={name}
                className="teacher-image"
            />

            <div className="teacher-content">

                <h3>{name}</h3>

                <span className="teacher-speciality">

                    {speciality}

                </span>

                <p className="teacher-experience">

                    ⭐ {experience}

                </p>

                <p>

                    {description}

                </p>

            </div>

        </div>

    );

}

export default TeacherCard;