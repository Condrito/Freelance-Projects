import { Link } from "react-router-dom";
import { useLanguage } from "../Context/LanguageContext";
import "./Footer.css";

const Footer = () => {
  const { language } = useLanguage();
  return (
    <>
      <footer className="footer-desktop">
        <div className="footer-container">
          <Link to="/">
            <img
              className="logo-footer-desktop"
              src="LogoFooterDesktop@3x.svg"
              alt="Logo Climatecnico"
            />
            <img
              className="logo-footer-tablet"
              src="LogoFooterTablet@3x.svg"
              alt="Logo Climatecnico"
            />
          </Link>
          <div className="footer-info-container">
            <div className="links-footer-container">
              <a href="/#descripcion">
                {language === "castellano" ? "¿Quiénes somos?" : "Qui som?"}
              </a>
              <a href="/#servicios">
                {language === "castellano" ? "Servicios" : "Serveis"}
              </a>
              <Link to="/contact">
                {language === "castellano" ? "Contacto" : "Contacte"}
              </Link>
              <a href="https://www.instagram.com/climatecnico/">
                <img
                  className="logo-instagram"
                  src="Instagram@3x.svg"
                  alt="Logo Instagram"
                />
              </a>
            </div>
            <p className="copyrigth">
              © 2023 Climatecnico. Todos los derechos reservados
            </p>
          </div>
        </div>
      </footer>
      <footer className="footer-movile">
        <div className="footer-info-container">
          <div className="links-footer-container">
            <a href="/#descripcion">
              {language === "castellano" ? "¿Quiénes somos?" : "Qui som?"}
            </a>
            <a href="/#servicios">
              {language === "castellano" ? "Servicios" : "Serveis"}
            </a>
            <Link to="/contact">
              {language === "castellano" ? "Contacto" : "Contacte"}
            </Link>
          </div>

          <a href="https://www.instagram.com/climatecnico/">
            <img
              className="logo-instagram"
              src="Instagram@3x.svg"
              alt="Logo Instagram"
            />
          </a>
        </div>
        <div className="logo-copyright-container">
          <Link to="/">
            <img
              className="logo-footer-mobile"
              src="LogoFooterMobile@3x.svg"
              alt="Logo Climatecnico"
            />
          </Link>
          <p className="copyrigth">
            © 2023 Climatecnico. Todos los derechos reservados
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
