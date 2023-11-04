import { Link } from "react-router-dom";
import "./Inscribete.css";

const Inscribete_CAT = () => {
  return (
    <div className="inscribete-content">
      <div className="inscribete-overlay">
        <div className="inscribete-info-content">
          <h2>NO T’HO PERDIS</h2>
          <Link to="/formulario-inscripcion">
            <button className="inscribete-btn">
              <p>INSCRIU-TE</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Inscribete_CAT;
