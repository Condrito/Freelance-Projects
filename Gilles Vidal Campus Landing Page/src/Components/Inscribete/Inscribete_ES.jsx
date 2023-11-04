import { Link } from "react-router-dom";
import "./Inscribete.css";

const Inscribete_ES = () => {
  return (
    <div className="inscribete-content">
      <div className="inscribete-overlay">
        <div className="inscribete-info-content">
          <h2>NO TE LO PIERDAS, TE ESPERAMOS EN EL CAMPO</h2>
          <Link to="/formulario-inscripcion">
            <button className="inscribete-btn">
              <p>INSCRÍBETE</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Inscribete_ES;
