import "./NuestrosProyectos.css";

const NuestrosProyectosEs = () => {
  return (
    <>
      <div className="proyectos-content-container">
        <div className="proyectos-background">
          <div className="proyectos-overlay">
            <img
              className="onda-vector-proyectos"
              src="Onda@3x.svg"
              alt="onda naranja"
            />
          </div>
        </div>
        <div className="proyectos-hero-container">
          <h1>nuestros proyectos</h1>
          <p>
            Descubre algunos de nuestros proyectos realizados a clientes que
            confiaron en nosotros
          </p>
        </div>
      </div>
      <ul className="proyectos-container">
        <li className="proyectos-card-container">
          <img
            className="proyectos-card-imagen"
            src="CargaRefrigerante@3x.png"
            alt="carga refrigerante"
          />
          <p>Carga de refrigerante de equipos de clima</p>
        </li>
        <li className="proyectos-card-container">
          <img
            className="proyectos-card-imagen"
            src="ReparacionAireAcondicionado@3x.png"
            alt="Aire acondicionado"
          />
          <p>Instalación, mantenimiento y reparación de aire acondicionado</p>
        </li>
        <li className="proyectos-card-container">
          <img
            className="proyectos-card-imagen"
            src="AerotermiaDaikin@3x.png"
            alt="Aerotermia Daikin"
          />
          <p>Instalación de aerotermia Daikin, fríocalor</p>
        </li>
        <li className="proyectos-card-container">
          <img
            className="proyectos-card-imagen"
            src="AerotermiaTradesa@3x.png"
            alt="Aerotermia Tradesa"
          />
          <p>Instalación de aerotermia Tradesa agua</p>
        </li>
        <li className="proyectos-card-container">
          <img
            className="proyectos-card-imagen"
            src="AireAcondicionadoMultisplit@3x.png"
            alt="Aire acondicionado Multisplit"
          />
          <p>Puesta en marcha de aire acondicionado Multisplit</p>
        </li>

        <li className="proyectos-card-container">
          <img
            className="proyectos-card-imagen"
            src="Climas@3x.png"
            alt="Climas"
          />
          <p>
            Reparación de todos tipos de climas tanto doméstico como industrial
          </p>
        </li>
        <li className="proyectos-card-container">
          <img
            className="proyectos-card-imagen"
            src="RevisiónHiref@3x.png"
            alt="Revisión de Hiref"
          />
          <p>
            Revisión de Hiref, ajuste de parámetros y mantenimiento preventivo
          </p>
        </li>
        <li className="proyectos-card-container">
          <img
            className="proyectos-card-imagen"
            src="AerotermiaEnVivienda@3x.png"
            alt="Aerotermia en vivienda"
          />
          <p>Instalación de Aerotermia en vivienda</p>
        </li>
        <li className="proyectos-card-container">
          <img
            className="proyectos-card-imagen"
            src="AireAcondicionadoSplit@3x.png"
            alt="Aire acondicionado doméstico split"
          />
          <p>
            Instalación interior y exterior de aire acondicionado doméstico tipo
            split
          </p>
        </li>
      </ul>
    </>
  );
};

export default NuestrosProyectosEs;
