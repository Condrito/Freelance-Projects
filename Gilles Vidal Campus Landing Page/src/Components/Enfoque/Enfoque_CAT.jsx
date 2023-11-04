import "./Enfoque.css";

const Enfoque_CAT = () => {
  return (
    <div id="enfoque" className="enfoque_content">
      <div className="metodologia-content">
        <h1 className="h1-xl">metodologia</h1>
        <p>
          Apliquem una metodologia integral que potencia habilitats tècniques,
          tàctiques i físiques.
        </p>
        <ul className="list">
          <li>Personalitzem les tasques segons el nivell dels jugadors.</li>
          <li>Abordem diverses situacions de joc.</li>
          <li>Millorem la presa de decisions i la intel·ligència tàctica.</li>
          <li>
            Ensenyem i apliquem conceptes tàctics per a facilitar la comprensió
            del joc
          </li>
          <li>
            Treballem en grups reduïts per a potenciar la participació del
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
        <h1 className="h1-xl">objectius</h1>
        <ul>
          <li>
            Perfeccionar les habilitats tècniques i tàctiques, tan individuals
            com en equip.
          </li>
          <li>Entendre el joc de forma col·lectiva.</li>
          <li>Gaudir de la competició a l’estil Kings League.</li>
          <li>
            Promoure l'educació integral, fomentant valors com la companyonia,
            el fair play i hàbits saludables.
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

export default Enfoque_CAT;
