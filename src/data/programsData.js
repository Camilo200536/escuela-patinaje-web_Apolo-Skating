import NivelCero1 from "../assets/images/Programs/NivelCero1.jpeg";
import NivelCero2 from "../assets/images/Programs/NivelCero2.jpeg";
import NivelCero3 from "../assets/images/Programs/NivelCero3.jpeg";

export const programsData = [
  {
    // ⚡ DATOS BÁSICOS (igual que programs.js)
    id: 1,
    title: "Iniciacion",
    slug: "nivel-cero",
    level: "Inicial",
    age: "De 4 años en adelante",
    description: "Programa diseñado para niños y niñas que se acercan por primera vez al patinaje. A través de actividades lúdicas y progresivas, los estudiantes desarrollan equilibrio, coordinación y confianza sobre los patines, mientras aprenden las técnicas básicas de desplazamiento y frenado en un ambiente seguro y divertido.",
    image: NivelCero1,

    // 🆕 INFORMACIÓN COMPLETA
    duration: "6 meses",
    instructor: "Alejandra, Aina, Camilo",

    objectives: [
      "Objetivo 1: Desarrollar equilibrio y confianza sobre los patines",
      "Objetivo 2: Aprender la postura correcta y desplazamiento básico hacia adelante",
      "Objetivo 3: Aprender la postura correcta y desplazamiento básico hacia adelante",
    ],

    skills: [
      "Habilidad 1: Equilibrio estático y dinámico sobre los patines",
      "Habilidad 2: Desplazamiento en línea recta con técnica adecuada",
      "Habilidad 3: Frenado en T y caída controlada",
    ],

    requirements: "No requiere experiencia previa en patinaje",

    equipment: [
      "Patines de iniciación (ajustables o talla correcta)",
      "Casco de seguridad",
      "Rodilleras",
      "Coderas",
      "Muñequeras"
    ],

    images: {
  main: NivelCero1,
  gallery: [
    NivelCero2,
    NivelCero3,
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