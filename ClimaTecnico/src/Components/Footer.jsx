import { Link } from "react-router-dom";
import { useLanguage } from "../Context/LanguageContext";
import "./Footer.css";

const Footer = () => {
  const { language } = useLanguage();

  // Función para manejar el clic en los enlaces del footer
  const handleFooterLinkClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <footer className="footer-desktop">
        <div className="footer-container">
          <Link to="/">
            <img
              className="logo-footer-desktop"
              src="Logo@3x.svg"
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
              <a className="link" href="/#descripcion">
                {language === "castellano" ? "¿Quiénes somos?" : "Qui som?"}
              </a>
              <a className="link" href="/#servicios">
                {language === "castellano" ? "Servicios" : "Serveis"}
              </a>
              <Link className="link" to="/projects">
                {language === "castellano" ? "Proyectos" : "Projectes"}
              </Link>
              <Link className="link" to="/contact">
                {language === "castellano" ? "Contacto" : "Contacte"}
              </Link>
              <a
                className="link-insta"
                href="https://www.instagram.com/climatecnico/"
              >
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
            <a className="link" href="/#descripcion">
              {language === "castellano" ? "¿Quiénes somos?" : "Qui som?"}
            </a>
            <a className="link" href="/#servicios">
              {language === "castellano" ? "Servicios" : "Serveis"}
            </a>
            <Link className="link" to="/projects">
              {language === "castellano" ? "Proyectos" : "Projectes"}
            </Link>
            <Link className="link" to="/contact">
              {language === "castellano" ? "Contacto" : "Contacte"}
            </Link>
          </div>

          <a
            className="link-insta"
            href="https://www.instagram.com/climatecnico/"
          >
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
