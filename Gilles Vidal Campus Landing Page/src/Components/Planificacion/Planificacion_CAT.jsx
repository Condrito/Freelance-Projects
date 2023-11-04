import "./Planificacion.css";

const Planificacion_CAT = () => {
  return (
    <>
      <div className="planificacion-logo-background"></div>
      <div className="planificacion-content">
        <div className="planificacion-box-content">
          <h1>PLANIFICACIÓ</h1>
          <div className="separador-horarios-content">
            <div className="separador"></div>
            <div className="horarios-content">
              <div className="horario-content">
                <p className="hora">09:00 h</p>
                <p className="actividad">Control d’assistència</p>
              </div>
              <div className="horario-content">
                <p className="hora">09:15 h</p>
                <p className="actividad">Escalfament</p>
              </div>
              <div className="horario-content">
                <p className="hora">09:45 h</p>
                <p className="actividad">Descans i esmorzar</p>
              </div>
              <div className="horario-content">
                <p className="hora">11:15 h</p>
                <p className="actividad">Control d’assistència</p>
              </div>
              <div className="horario-content">
                <p className="hora">11:45 h</p>
                <p className="actividad">Competició Kings League</p>
              </div>
              <div className="horario-content">
                <p className="hora">12:45 h</p>
                <p className="actividad">Estiraments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Planificacion_CAT;
