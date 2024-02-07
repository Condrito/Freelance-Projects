import "./NuestrosProyectos.css";

const NuestrosProyectosCat = () => {
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
          <h1>ELS NOSTRES PROJECTES</h1>
          <p>
            Descobreix alguns dels nostres projectes realitzats per a clients
            que van confiar en nosaltres
          </p>
        </div>
      </div>
      <ul className="proyectos-container">
        <li className="proyectos-card-container">
          <img
            className="proyectos-card-imagen"
            src="CargaRefrigerante@3x.png"
            alt="Càrrega de refrigerant"
          />
          <p>Càrrega de refrigerant per a equips de climatització</p>
        </li>
        <li className="proyectos-card-container">
          <img
            className="proyectos-card-imagen"
            src="ReparacionAireAcondicionado@3x.png"
            alt="Aire condicionat"
          />
          <p>Instal·lació, manteniment i reparació de l'aire condicionat</p>
        </li>
        <li className="proyectos-card-container">
          <img
            className="proyectos-card-imagen"
            src="AerotermiaDaikin@3x.png"
            alt="Aerotèrmia Daikin"
          />
          <p>Instal·lació d'aerotèrmia Daikin, fred-calor</p>
        </li>
        <li className="proyectos-card-container">
          <img
            className="proyectos-card-imagen"
            src="AerotermiaTradesa@3x.png"
            alt="Aerotèrmia Tradesa"
          />
          <p>Instal·lació d'aerotèrmia Tradesa amb aigua</p>
        </li>
        <li className="proyectos-card-container">
          <img
            className="proyectos-card-imagen"
            src="AireAcondicionadoMultisplit@3x.png"
            alt="Aire condicionat Multisplit"
          />
          <p>Posada en marxa d'aire condicionat Multisplit</p>
        </li>

        <li className="proyectos-card-container">
          <img
            className="proyectos-card-imagen"
            src="Climas@3x.png"
            alt="Climes"
          />
          <p>
            Reparació de tot tipus de climatització, tant domèstica com
            industrial
          </p>
        </li>
        <li className="proyectos-card-container">
          <img
            className="proyectos-card-imagen"
            src="RevisiónHiref@3x.png"
            alt="Revisió de Hiref"
          />
          <p>
            Revisió de Hiref, ajustament de paràmetres i manteniment preventiu
          </p>
        </li>
        <li className="proyectos-card-container">
          <img
            className="proyectos-card-imagen"
            src="AerotermiaEnVivienda@3x.png"
            alt="Aerotèrmia en habitatge"
          />
          <p>Instal·lació d'aerotèrmia en habitatge</p>
        </li>
        <li className="proyectos-card-container">
          <img
            className="proyectos-card-imagen"
            src="AireAcondicionadoSplit@3x.png"
            alt="Aire condicionat domèstic split"
          />
          <p>
            Instal·lació interior i exterior d'aire condicionat domèstic de
            tipus split
          </p>
        </li>
      </ul>
    </>
  );
};

export default NuestrosProyectosCat;
