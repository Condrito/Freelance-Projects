import { Link } from "react-router-dom";
import "./Hero.css";

const Hero_ES = () => {
  return (
    <div id="hero" className="hero-photo">
      <div className="hero-content">
        <div className="title-content">
          <h1 className="hero-title">
            vive el fútbol
            <br />
            con gilles vidal
          </h1>
          <h3>del 27 al 29 de diciembre</h3>
        </div>

        <Link to="/formulario-inscripcion">
          <button className="hero-button">
            <p>inscríbete</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero_ES;
