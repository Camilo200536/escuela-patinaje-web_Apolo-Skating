import NivelCero1 from "../assets/images/Programs/NivelCero1.jpeg";
import NivelCero2 from "../assets/images/Programs/NivelCero2.jpeg";
import NivelCero3 from "../assets/images/Programs/NivelCero3.jpeg";
import NivelUno1 from "../assets/images/Programs/NivelUno1.jpeg";
import NivelUno2 from "../assets/images/Programs/NivelUno2.jpeg";
import NivelUno3 from "../assets/images/Programs/NivelUno3.jpeg";
import NivelDos1 from "../assets/images/Programs/NivelDos1.jpeg";
import NivelDos2 from "../assets/images/Programs/NivelDos2.jpeg";
import NivelDos3 from "../assets/images/Programs/NivelDos3.jpeg";

export const programsData = [
  {
    // ⚡ NIVEL CERO
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
  {
    // ⚡ NIVEL 1
    id: 2,
    title: "Nivel 1",
    slug: "nivel-uno",
    level: "Nivel 1",
    age: "De 5 años en adelante (Segun evaluacion)",
    description: "Programa enfocado en fortalecer las bases técnicas del patinaje. Los patinadores mejoran su equilibrio, coordinación y control, aprendiendo nuevas habilidades como giros básicos, frenado en cuña y desplazamientos laterales. Se introduce el trabajo en pista con ejercicios de velocidad controlada y slalom básico, preparando al estudiante para niveles intermedios.",
    image: NivelCero1,

    // 🆕 INFORMACIÓN COMPLETA
    duration: "6 meses",
    instructor: "Aina",

    objectives: [
      "Objetivo 1: Perfeccionar el equilibrio y la postura sobre los patines para un desplazamiento más fluido",
      "Objetivo 2: Dominar giros básicos y frenado en cuña con control y seguridad",
      "Objetivo 3: Realizar slalom básico y ejercicios de velocidad controlada en pista",
    ],

    skills: [
      "Habilidad 1: Realizar giros en ambas direcciones sin perder velocidad ni control",
      "Habilidad 2: Pasar entre conos en slalom manteniendo el ritmo y la postura",
      "Habilidad 3: Pasar entre conos en slalom manteniendo el ritmo y la postura",
    ],

    requirements: "Haber completado el nivel Iniciación o tener experiencia básica en patinaje",

    equipment: [
      "Patines (ajustables o talla correcta)",
      "Casco de seguridad",
      "Rodilleras",
      "Coderas",
      "Muñequeras"
    ],

    images: {
  main: NivelUno1,
  gallery: [
    NivelUno2,
    NivelUno3,
             ],
            },

    colors: {
      primary: "#4CAF50",
      light: "#E8F5E9",
    },

    cta: {
      text: "Inscribirme en Nivel Uno",
      whatsapp: "https://wa.me/3122359023?text=Hola%2C%20estoy%20interesado%20en%20el%20Nivel%20Cero",
    },
  },

{
    // ⚡ NIVEL 2
    id: 3,
    title: "Nivel 2",
    slug: "nivel-dos",
    level: "Nivel 2",
    age: "Segun evaluacion",
    description: "Programa enfocado en el perfeccionamiento técnico y la preparación para competencias. Los patinadores mejoran su velocidad, desarrollan técnicas avanzadas de frenado y giro, e inician el trabajo en slalom y obstáculos con mayor exigencia. Se introduce el entrenamiento físico complementario y la preparación mental para afrontar retos deportivos.",
    image: NivelCero1,

    // 🆕 INFORMACIÓN COMPLETA
    duration: "6 meses",
    instructor: "Alejandra",

    objectives: [
      "Objetivo 1: Perfeccionar giros avanzados y frenado con control en superficies variadas",
      "Objetivo 2: Dominar slalom intermedio con obstáculos y cambios de ritmo",
      "Objetivo 3: Aumentar la velocidad y la resistencia en pista para preparación competitiva",
    ],

    skills: [
      "Habilidad 1: Técnica de empuje lateral y caída de peso para generar velocidad",
      "Habilidad 2: Posición aerodinámica y brazos atrás para reducir resistencia al viento",
      "Habilidad 3: Salida de carrera y paso de relevo (postas)",
    ],

    requirements: "Haber completado el nivel 1 - Principiantes o tener experiencia en técnicas básicas de patinaje de velocidad",

    equipment: [
      "Patines (ajustables o talla correcta)",
      "Casco de seguridad",
      "Rodilleras",
      "Coderas",
      "Muñequeras"
    ],

    images: {
  main: NivelDos1,
  gallery: [
    NivelDos2,
    NivelDos3,
             ],
            },

    colors: {
      primary: "#4CAF50",
      light: "#E8F5E9",
    },

    cta: {
      text: "Inscribirme en Nivel Dos",
      whatsapp: "https://wa.me/3122359023?text=Hola%2C%20estoy%20interesado%20en%20el%20Nivel%20Cero",
    },
  },

];