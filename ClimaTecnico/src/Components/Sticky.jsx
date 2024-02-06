// Sticky.jsx
import React from "react";
import "./Sticky.css";
import { useLanguage } from "../Context/LanguageContext";

const Sticky = () => {
  const { language } = useLanguage();

  return (
    <div className="sticky-container">
      <div className="sticky-content">
        <p className="solicita">
          {" "}
          {language === "castellano"
            ? "Solicita tu presupuesto"
            : "Sol·licita el teu pressupost"}
        </p>

        <div className="mail-telf-content">
          <div className="mail-content">
            <img
              className="mail-icon"
              src="ic_baseline-mail@3x.svg"
              alt="mail-icon"
            />
            <p className="mail">climatecnico2023@gmail.com</p>
          </div>
          <div className="telefono-content">
            <img className="telefono-icon" src="Phone@3x.svg" alt="telf-icon" />
            <p className="telefono">611 712 312</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sticky;
