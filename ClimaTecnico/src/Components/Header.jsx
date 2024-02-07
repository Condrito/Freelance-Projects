import { useState } from "react";
import { useLanguage } from "../Context/LanguageContext";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Función para cerrar el menú cuando se hace clic en un enlace del desplegable
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header>
      <div className="header-container ">
        <div
          className={`logo-climatecnico-container ${
            isMobileMenuOpen ? "blue" : "transparent"
          }`}
        >
          <NavLink to="/">
            <img
              className="logo-climatecnico"
              src="Climatecnico@3x.svg"
              alt="logo-Climatecnico"
            />
          </NavLink>
        </div>

        <div className="liks-header nav-desktop">
          <a href="/#descripcion" className="link">
            {language === "castellano" ? "¿Quiénes somos?" : "Qui som?"}
          </a>
          <a href="/#servicios" className="link">
            {language === "castellano" ? "Servicios" : "Serveis"}
          </a>
          <NavLink to="/projects" className="link">
            {language === "castellano" ? "Proyectos" : "Projectes"}
          </NavLink>
          <NavLink to="/contact" className="link">
            {language === "castellano" ? "Contacto" : "Contacte"}
          </NavLink>
        </div>
        <div className="idiomas-container nav-desktop">
          <span
            onClick={() => {
              toggleLanguage("castellano");
              closeMobileMenu(); // Cierra el menú al hacer clic en el idioma
            }}
            className={`idioma ${
              language === "castellano" ? "active-idioma" : ""
            }`}
          >
            ES
          </span>
          <span
            onClick={() => {
              toggleLanguage("catalan");
              closeMobileMenu(); // Cierra el menú al hacer clic en el idioma
            }}
            className={`idioma ${
              language === "catalan" ? "active-idioma" : ""
            }`}
          >
            CAT
          </span>
        </div>
        <div className="nav-mobile">
          <img
            id="hamburguer-open"
            className={`hamburger-menu ${isMobileMenuOpen ? "open" : "close"}`}
            onClick={toggleMobileMenu}
            src={
              !isMobileMenuOpen ? "/HamburgerMenu@3x.svg" : "/CloseMenu@3x.svg"
            }
            alt="icono menu"
          />

          <div className={`dropdown ${isMobileMenuOpen ? "show" : ""}`}>
            <div className="hamburger-menu-option-box">
              <a
                href="/#descripcion"
                className="link-button"
                onClick={() => closeMobileMenu()}
              >
                {language === "castellano" ? "¿Quiénes somos?" : "Qui som?"}
              </a>
            </div>
            <div className="hamburger-menu-option-box">
              <a
                href="/#servicios"
                className="link-button"
                onClick={() => closeMobileMenu()}
              >
                {language === "castellano" ? "Servicios" : "Serveis"}
              </a>
            </div>
            <NavLink to="/projects">
              <div className="hamburger-menu-option-box">
                <NavLink
                  to="/projects"
                  className="link-button"
                  onClick={closeMobileMenu} // Cierra el menú al hacer clic en el enlace
                >
                  {language === "castellano" ? "Proyectos" : "Projectes"}
                </NavLink>
              </div>
            </NavLink>
            <NavLink to="/contact">
              <div className="hamburger-menu-option-box">
                <NavLink
                  to="/contact"
                  className="link-button"
                  onClick={closeMobileMenu} // Cierra el menú al hacer clic en el enlace
                >
                  {language === "castellano" ? "Contacto" : "Contacte"}
                </NavLink>
              </div>
            </NavLink>
            <div className="hamburger-menu-option-box">
              <div className="option-box-idiomas">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
