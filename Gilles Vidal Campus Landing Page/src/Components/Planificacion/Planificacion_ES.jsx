import "./Planificacion.css";

const Planificacion_ES = () => {
  return (
    <>
      <div className="planificacion-logo-background"></div>
      <div className="planificacion-content">
        <div className="planificacion-box-content">
          <h1>PLANIFICACIÓn</h1>
          <div className="separador-horarios-content">
            <div className="separador"></div>
            <div className="horarios-content">
              <div className="horario-content">
                <p className="hora">09:00 h</p>
                <p className="actividad">Control de asistencia</p>
              </div>
              <div className="horario-content">
                <p className="hora">09:15 h</p>
                <p className="actividad">Calentamiento</p>
              </div>
              <div className="horario-content">
                <p className="hora">09:45 h</p>
                <p className="actividad">Sesión de entrenamiento</p>
              </div>
              <div className="horario-content">
                <p className="hora">11:15 h</p>
                <p className="actividad">Descanso y almuerzo</p>
              </div>
              <div className="horario-content">
                <p className="hora">11:45 h</p>
                <p className="actividad">Competición Kings League</p>
              </div>
              <div className="horario-content">
                <p className="hora">12:45 h</p>
                <p className="actividad">Estiramientos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Planificacion_ES;
