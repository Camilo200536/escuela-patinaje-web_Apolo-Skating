import NivelCero1 from "../assets/images/Programs/Iniciacion.jpeg";
import NivelCero2 from "../assets/images/Programs/Iniciacion.jpeg";
import NivelCero3 from "../assets/images/Programs/Iniciacion.jpeg";

export const programsData = [
  {
    // ⚡ DATOS BÁSICOS (igual que programs.js)
    id: 1,
    title: "Nivel Cero",
    slug: "nivel-cero",
    level: "Inicial",
    age: "4 - 6 años",
    description: "Iniciación al patinaje, aprendizaje de equilibrio y primeros desplazamientos.",
    image: NivelCero1,

    // 🆕 INFORMACIÓN COMPLETA
    duration: "6 meses",
    instructor: "Nombre del instructor",

    schedule: {
      pereira: [
        { day: "Lunes y Miércoles", time: "4:00 PM - 5:30 PM" },
      ],
      dosquebradas: [
        { day: "Martes y Jueves", time: "3:30 PM - 5:00 PM" },
      ],
    },

    objectives: [
      "Objetivo 1",
      "Objetivo 2",
      "Objetivo 3",
    ],

    skills: [
      "Habilidad 1",
      "Habilidad 2",
      "Habilidad 3",
    ],

    requirements: "Texto de requisitos",

    equipment: [
      "Equipo 1",
      "Equipo 2",
      "Equipo 3",
    ],

    images: {
  main: NivelCero1,
  gallery: [
    NivelCero1,
    NivelCero1,
             ],
            },

    colors: {
      primary: "#4CAF50",
      light: "#E8F5E9",
    },

    cta: {
      text: "Inscribirme en Nivel Cero",
      whatsapp: "https://wa.me/3122359023?text=Hola%2C%20estoy%20interesado%20en%20el%20Nivel%20Cero",
    },
  },
  // Aquí puedes agregar los demás niveles con la misma estructura
];