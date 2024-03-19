import React, { useState, useRef, useEffect } from "react";
import "./CarruselProyecto.css";

const CarruselProyecto = ({ proyectos, indice, onClose, onChangeIndice }) => {
  const [proyectoActual, setProyectoActual] = useState(proyectos[indice]);
  const botonAnteriorRef = useRef(null);
  const botonSiguienteRef = useRef(null);
  const proyectoRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    setProyectoActual(proyectos[indice]);
  }, [proyectos, indice]);

  useEffect(() => {
    // Habilitar o deshabilitar los botones al cambiar el índice del proyecto
    if (botonAnteriorRef.current && botonSiguienteRef.current) {
      botonAnteriorRef.current.classList.toggle(
        "carrusel-btn-deshabilitado",
        indice === 0
      );
      botonSiguienteRef.current.classList.toggle(
        "carrusel-btn-deshabilitado",
        indice === proyectos.length - 1
      );
    }
  }, [indice, proyectos]);

  const handleAnterior = () => {
    onChangeIndice(indice - 1);
  };

  const handleSiguiente = () => {
    onChangeIndice(indice + 1);
  };

  const handleOverlayClick = (event) => {
    if (
      event.target === overlayRef.current &&
      !botonAnteriorRef.current.contains(event.target) &&
      !botonSiguienteRef.current.contains(event.target) &&
      !proyectoRef.current.contains(event.target)
    ) {
      onClose();
    }
  };

  const handleContentClick = (event) => {
    if (
      event.target !== botonAnteriorRef.current &&
      event.target !== botonSiguienteRef.current &&
      event.target !== proyectoRef.current
    ) {
      onClose();
    }
  };

  return (
    <div
      className="carrusel-overlay"
      ref={overlayRef}
      onClick={handleOverlayClick}
    >
      <div className="carrusel-content" onClick={handleContentClick}>
        <img
          className={`carrusel-btn-navegacion carrusel-btn-anterior ${
            indice === 0 ? "carrusel-btn-deshabilitado" : ""
          }`}
          onClick={handleAnterior}
          ref={botonAnteriorRef}
          src="Anterior@3x.svg"
          alt="anterior"
        />

        <div
          className="carrusel-proyecto"
          ref={proyectoRef}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            className="carrusel-proyecto-imagen"
            src={proyectoActual.imagen}
            alt={proyectoActual.nombre}
          />
          <p>{proyectoActual.nombre}</p>
        </div>

        <img
          className={`carrusel-btn-navegacion carrusel-btn-siguiente ${
            indice === proyectos?.length - 1 ? "carrusel-btn-deshabilitado" : ""
          }`}
          onClick={handleSiguiente}
          ref={botonSiguienteRef}
          src="Siguiente@3x.svg"
          alt="siguiente"
        />
      </div>
    </div>
  );
};

export default CarruselProyecto;
