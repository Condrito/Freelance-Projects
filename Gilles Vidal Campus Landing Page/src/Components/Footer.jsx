import { Link } from "react-router-dom";
import { useLanguage } from "../Context/LanguageContext";
import "./Footer.css";

const Footer = () => {
  const { language } = useLanguage();
  return (
    <footer className="footer">
      <div className="footer-logo-content">
        <img
          className="footer-logo"
          src="/Logo@3x.svg"
          alt="Logo Gilles Vidal"
        />
        <p className="footer-copy-right">© Copyright 2023 - Gilles Vidal</p>
      </div>
      <div className="footer-content">
        {language === "catalan" ? (
          <>
            <div className="footer-links-content">
              <a href="/#campus" className="footer-link">
                CAMPUS
              </a>
              <a href="/#gilles" className="footer-link">
                GILLES VIDAL
              </a>
              <a href="/#enfoque" className="footer-link">
                EL NOSTRE ENFOCAMENT
              </a>
            </div>
            <div className="footer-contact">
              <Link to={""} className="logo-instgagram"></Link>
              <Link to="/contact" className="footer-link">
                contacte
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="footer-links-content">
              <a href="/#campus" className="footer-link">
                CAMPUS
              </a>
              <a href="/#gilles" className="footer-link">
                GILLES VIDAL
              </a>
              <a href="/#enfoque" className="footer-link">
                nuestro enfoque
              </a>
            </div>
            <div className="footer-contact">
              <Link to={""} className="logo-instgagram"></Link>
              <Link to="/contact" className="footer-link">
                contacto
              </Link>
            </div>
          </>
        )}
      </div>
    </footer>
  );
};

export default Footer;

/*"https://www.instagram.com/campus.gilles9/*/
