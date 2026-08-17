import "./TeachersPage.css";

import TeacherCard from "../../components/TeacherCard/TeacherCard";

import teachers from "../../data/teachers";
import admin from "../../data/administrators";

function TeachersPage(){

    return(

        <section className="teachers-page">

            <h1>

                Nuestro Equipo de Profesores

            </h1>

            <p className="subtitle">

                Conoce a los entrenadores que acompañan el crecimiento deportivo de nuestros patinadores.

            </p>

            <div className="teachers-grid">

                {

                    teachers.map((teacher)=>(

                        <TeacherCard

                            key={teacher.id}

                            image={teacher.image}

                            name={teacher.name}

                            speciality={teacher.speciality}

                            experience={teacher.experience}

                            description={teacher.description}

                        />

                    ))

                }

            </div>

            <h1>

             Equipo adminitrativo

            </h1>

             <p className="subtitle">

                Conoce a las personas encargadas del la gestion administrativa del club. 

            </p>

            <div className="teachers-grid">

                {

                    admin.map((administrators)=>(

                        <TeacherCard

                            key={administrators.id}

                            image={administrators.image}

                            name={administrators.name}

                            speciality={administrators.speciality}

                            experience={administrators.experience}

                            description={administrators.description}

                        />

                    ))

                }

            </div>

        </section>

    );

}

export default TeachersPage;