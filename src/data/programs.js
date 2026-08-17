import iniciacion from "../assets/images/Programs/Iniciacion.jpeg";
import nivel1 from "../assets/images/Programs/Nivel_1.jpeg";
import nivel2 from "../assets/images/Programs/Nivel_2.jpeg";
import nivel3 from "../assets/images/Programs/Nivel_3.jpeg";
import nivel4 from "../assets/images/Programs/Nivel_4.jpeg";
import competitivo from "../assets/images/Programs/Profesional.jpeg";
import adultos from "../assets/images/Programs/Adultos.jpeg";


const programs = [
  {
    id: 1,
    image: iniciacion,
    title: "Iniciación",
    description: "Programa diseñado para niños que comienzan en el mundo del patinaje.",
    level: "Básico",
    age: "4 años en adelante",
    buttonText: "Más información",
  },
  {
    id: 2,
    image: nivel1,
    title: "Nivel 1",
    description: "Desarrollo de habilidades básicas y equilibrio.",
    level: "Recreativo",
    age: "5 años en adelante",
    buttonText: "Más información",
  },
  {
    id: 3,
    image: nivel2,
    title: "Nivel 2",
    description: "Perfeccionamiento de la técnica y coordinación.",
    level: "Recreativo",
    age: "Según evaluación",
    buttonText: "Más información",
  },
  {
    id: 4,
    image: nivel3,
    title: "Nivel 3",
    description: "Iniciacion en nivel semiprofesional",
    level: "Semiprofesional",
    age: "Según evaluación",
    buttonText: "Más información",
  },
 {
    id: 5,
    image: nivel4,
    title: "Nivel 4",
    description: "Preparación para avanzar al nivel competitivo.",
    level: "Semiprofesional",
    age: "Según evaluación",
    buttonText: "Más información",
  },

  {
    id: 6,
    image: competitivo,
    title: "Competitivo",
    description: "Entrenamiento de alto rendimiento para competencias oficiales.",
    level: "Patin profesional",
    age: "Según evaluación",
    buttonText: "Más información",
  },
  {
    id: 7,
    image: adultos,
    title: "Adultos",
    description: "Programa para aprender y disfrutar del patinaje sin importar la experiencia previa.",
    level: "Todos los niveles",
    age: "18 años en adelante",
    buttonText: "Más información",
  },
];

export default programs;
