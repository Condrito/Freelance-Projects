import { useState } from "react";
import { useLanguage } from "../Context/LanguageContext";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Determina si estás en la página de contacto
  const isTextWhite = window.location.pathname !== "/";

  // Función para cerrar el menú cuando se hace clic en un enlace del desplegable
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isTextWhite ? "texto-white" : "texto-black"}`}>
      <div className="header-content">
        <div className="logoLinks-content">
          <img className="logo" src="/iconoHeader.svg" alt="logo" />
          <div
            className={`links-content nav-desktop ${
              isTextWhite ? "texto-white" : "texto-black"
            }`}
          >
            <a
              href="/#campus"
              className={`link-button ${
                isTextWhite ? "texto-white" : "texto-black"
              }`}
            >
              {language === "catalan" ? "CAMPUS" : "CAMPUS"}
            </a>

            <a
              href="/#gilles"
              className={`link-button ${
                isTextWhite ? "texto-white" : "texto-black"
              }`}
            >
              {language === "catalan" ? "GILLES VIDAL" : "GILLES VIDAL"}
            </a>

            <a
              href="/#enfoque"
              className={`link-button ${
                isTextWhite ? "texto-white" : "texto-black"
              }`}
            >
              {language === "catalan"
                ? "EL NOSTRE ENFOCAMENT"
                : "NUESTRO ENFOQUE"}
            </a>
          </div>
        </div>
        <div className={`contact-idiomas-content nav-desktop`}>
          <Link
            to="/contact"
            className={`link-button ${
              isTextWhite ? "texto-white" : "texto-black"
            }`}
          >
            {language === "catalan" ? "CONTACTE" : "CONTACTO"}
          </Link>
          <div className="idiomas-content">
            <span
              onClick={() => {
                toggleLanguage("catalan");
                closeMobileMenu(); // Cierra el menú al hacer clic en el idioma
              }}
              className={`language-button link-button ${
                language === "catalan" ? "active-idioma" : ""
              }`}
            >
              CAT
            </span>
            <span
              onClick={() => {
                toggleLanguage("castellano");
                closeMobileMenu(); // Cierra el menú al hacer clic en el idioma
              }}
              className={`language-button link-button ${
                language === "castellano" ? "active-idioma" : ""
              }`}
            >
              ES
            </span>
          </div>
        </div>
      </div>

      <div className="nav-mobile">
        <img
          id="hamburguer-open"
          className={`hamburger-menu ${isMobileMenuOpen ? "open" : "close"}`}
          onClick={toggleMobileMenu}
          src={
            !isMobileMenuOpen
              ? isTextWhite
                ? "/MenuWhite@3x.svg"
                : "/Menu@3x.svg"
              : "/Closewhite@3x.svg"
          }
          alt="icono menu"
        />

        <div className={`dropdown ${isMobileMenuOpen ? "show" : ""}`}>
          <div className="hamburger-menu-option-box first-box">
            <a
              href="/#campus"
              className={`link-button ${
                isTextWhite ? "texto-white" : "texto-black"
              }`}
              onClick={closeMobileMenu} // Cierra el menú al hacer clic en el enlace
            >
              {language === "catalan" ? "CAMPUS" : "CAMPUS"}
            </a>
          </div>
          <div className="hamburger-menu-option-box">
            <a
              href="/#gilles"
              className={`link-button ${
                isTextWhite ? "texto-white" : "texto-black"
              }`}
              onClick={closeMobileMenu} // Cierra el menú al hacer clic en el enlace
            >
              {language === "catalan" ? "GILLES VIDAL" : "GILLES VIDAL"}
            </a>
          </div>
          <div className="hamburger-menu-option-box">
            <a
              href="/#enfoque"
              className={`link-button ${
                isTextWhite ? "texto-white" : "texto-black"
              }`}
              onClick={closeMobileMenu} // Cierra el menú al hacer clic en el enlace
            >
              {language === "catalan"
                ? "EL NOSTRE ENFOCAMENT"
                : "NUESTRO ENFOQUE"}
            </a>
          </div>
          <div className="hamburger-menu-option-box">
            <Link
              to="/contact"
              className={`link-button ${
                isTextWhite ? "texto-white" : "texto-black"
              }`}
              onClick={closeMobileMenu} // Cierra el menú al hacer clic en el enlace
            >
              {language === "catalan" ? "CONTACTE" : "CONTACTO"}
            </Link>
          </div>
          <div className="hamburger-menu-option-box">
            <div className="option-box-idiomas">
              <span
                onClick={() => {
                  toggleLanguage("catalan");
                  closeMobileMenu(); // Cierra el menú al hacer clic en el idioma
                }}
                className={`language-button link-button ${
                  language === "catalan" ? "active-idioma" : ""
                }`}
              >
                CAT
              </span>
              <span
                onClick={() => {
                  toggleLanguage("castellano");
                  closeMobileMenu(); // Cierra el menú al hacer clic en el idioma
                }}
                className={`language-button link-button ${
                  language === "castellano" ? "active-idioma" : ""
                }`}
              >
                ES
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
