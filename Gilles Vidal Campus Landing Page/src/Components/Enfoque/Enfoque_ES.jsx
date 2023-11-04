import "./Enfoque.css";

const Enfoque_ES = () => {
  return (
    <div id="enfoque" className="enfoque_content">
      <div className="metodologia-content">
        <h1 className="h1-xl">METODOLOGÍA</h1>
        <p>
          Aplicamos una metodología integral que potencia habilidades técnicas,
          tácticas y físicas.
        </p>
        <ul className="list">
          <li>Personalizamos las tareas según el nivel de los jugadores.</li>
          <li>Abordamos diversas situaciones de juego.</li>
          <li>Mejoramos la toma de decisiones y la inteligencia táctica.</li>
          <li>
            Enseñamos y aplicamos conceptos tácticos para facilitar la
            comprensión del juego.
          </li>
          <li>
            Trabajamos en grupos reducidos para potenciar la participación del
            jugador.
          </li>
        </ul>
      </div>
      <img
        className="enfoque-metodologia-photo"
        src="/metodologia@3x.png"
        alt="niños jugando con una pelota"
      />
      <div className="objetivos-content">
        <h1 className="h1-xl">objetivos</h1>
        <ul>
          <li>
            Perfeccionar habilidades técnicas y tácticas, tanto individuales
            como en equipo.
          </li>
          <li>Entender el juego de forma colectiva.</li>
          <li>Disfrutar de la competición al estilo Kings League.</li>
          <li>
            Promover la educación integral, fomentando valores como el
            compañerismo, el fair play y hábitos saludables.
          </li>
        </ul>
      </div>
      <img
        className="enfoque-objetivo-photo"
        src="/objetivo@3x.png"
        alt="niño con una pelota en la mano"
      />
    </div>
  );
};

export default Enfoque_ES;
