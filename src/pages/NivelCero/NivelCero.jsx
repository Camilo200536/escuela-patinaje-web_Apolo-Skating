import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { programsData } from "../../data/programsData";
import "./NivelCero.css";

function NivelCero() {
  // Obtener el slug de la URL
  const { slug } = useParams();

  // Buscar el programa correspondiente
  const program = programsData.find((p) => p.slug === slug);

  // Subir al inicio de la página al entrar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Si no existe el programa
  if (!program) {
    return (
      <div className="nivel-no-encontrado">
        <h2>Programa no encontrado</h2>
        <p>El nivel que buscas no existe o ha sido eliminado.</p>

        <Link to="/" className="btn-volver">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <section className="nivel-cero-page">
      <div className="nivel-cero-container">

        {/* TÍTULO */}
        <h1>{program.title}</h1>

        <p className="nivel-descripcion">
          {program.description}
        </p>

        {/* INFORMACIÓN GENERAL */}
        <div className="nivel-info-grid">

          <div className="nivel-info-item">
            <span className="nivel-info-label">👶 Edad</span>
            <span className="nivel-info-value">{program.age}</span>
          </div>

          <div className="nivel-info-item">
            <span className="nivel-info-label">⏳ Duración</span>
            <span className="nivel-info-value">{program.duration}</span>
          </div>

          <div className="nivel-info-item">
            <span className="nivel-info-label">👨‍🏫 Instructor</span>
            <span className="nivel-info-value">{program.instructor}</span>
          </div>

        </div>

        {/* OBJETIVOS + IMAGEN */}
        <div className="nivel-objetivos-section">

          <div className="nivel-card">
            <h3>🎯 Objetivos del nivel</h3>

            <ul className="nivel-list">
              {program.objectives.map((obj, index) => (
                <li key={index}>{obj}</li>
              ))}
            </ul>
          </div>

          <div className="nivel-imagen">
            <img
              src={program.images.main}
              alt={`Entrenamiento ${program.title}`}
            />
          </div>

        </div>

        {/* GALERÍA */}
<div className="nivel-galeria">
  <h3>📸 Conoce nuestro entrenamiento</h3>

  <div className="galeria-grid">
    {program.images.gallery.map((image, index) => (
      <div className="galeria-item" key={index}>
        <img
          src={image}
          alt={`${program.title} - imagen ${index + 1}`}
        />
      </div>
    ))}
  </div>
</div>

        {/* HABILIDADES */}
        <div className="nivel-card">
          <h3>⚡ Habilidades que desarrollarás</h3>

          <ul className="nivel-list">
            {program.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        {/* REQUISITOS */}
        <div className="nivel-card">
          <h3>📝 Requisitos</h3>
          <p>{program.requirements}</p>
        </div>

        {/* EQUIPO */}
        <div className="nivel-card">
          <h3>🛠️ Equipo necesario</h3>

          <ul className="nivel-list">
            {program.equipment.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
                
{/* BOTÓN DE INSCRIPCIÓN */}
        <div className="nivel-cta">
          <a
            href={program.cta.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-inscribirse"
            style={{ background: program.colors.primary }}
          >
            {program.cta.text}
          </a>
        </div>

        {/* VOLVER AL INICIO */}
        <div className="nivel-volver-inicio">
          <Link to="/" className="btn-volver">
            ← Volver al inicio
          </Link>
        </div>

      </div>
    </section>
  );
}

export default NivelCero;