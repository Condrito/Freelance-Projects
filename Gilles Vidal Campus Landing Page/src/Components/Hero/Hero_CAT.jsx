import { Link } from "react-router-dom";
import "./Hero.css";

const Hero_CAT = () => {
  return (
    <div className="hero-photo">
      <div className="hero-content">
        <div className="title-content">
          <h1 className="hero-title">
            viu el futbol
            <br />
            amb gilles vidal
          </h1>
          <h3>del 27 al 29 de desembre</h3>
        </div>
        <Link to="/formulario-inscripcion">
          <button className="hero-button">
            <p>inscriu-te</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero_CAT;
