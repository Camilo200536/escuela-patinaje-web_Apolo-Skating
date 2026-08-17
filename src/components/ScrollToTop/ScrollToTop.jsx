import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import "./ScrollToTop.css";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();

  // 🔹 SUBIR AUTOMÁTICAMENTE AL CAMBIAR DE PÁGINA
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  // 🔹 MOSTRAR/OCULTAR BOTÓN FLOTANTE
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔹 FUNCIÓN PARA SUBIR AL INICIO
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`scroll-top ${visible ? "show" : ""}`}
      onClick={scrollToTop}
    >
      <FaArrowUp />
      <span>Inicio</span>
    </button>
  );
}

export default ScrollToTop;
