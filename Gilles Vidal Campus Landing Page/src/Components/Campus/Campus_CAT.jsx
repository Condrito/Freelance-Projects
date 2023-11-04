import "./Campus.css";

const Campus_CAT = () => {
  return (
    <div id="campus" className="campus-background">
      <div className="campus-descripcion">
        <h2>1a edició campus mixte gilles vidal</h2>
        <p>
          El nostre campus és el lloc ideal per a
          <span> nens i nenes de 5 a 16 anys</span> que desitgen desenvolupar
          les seves habilitats tècniques i tàctiques. La nostra sòlida
          metodologia combina una formació futbolística de primer nivell i un
          conjunt de dinàmiques inspirades en la Kings League, com els daus, les
          cartes màgiques i els penals shootout.
        </p>
        <p>
          Els teus fills i filles podran assolir el seu màxim potencial
          futbolístic mentre s'ho passen bé i es preparen per emocionants reptes
          en el món del futbol.
        </p>
        <p>Uneix-te i viu el futbol d'una manera única. T'esperem al camp!</p>
      </div>
      <div className="campus-info">
        <div className="campus-info-calendario">
          <img
            className="campus-icon"
            src="/Calendar@3x.svg"
            alt="calendar icon"
          />
          <div className="campus-info-box">
            <p className="text-info-title">3 Dies</p>
            <p className="text-info">27 al 29 de desembre</p>
          </div>
        </div>
        <div className="info-line first-line"></div>
        <div className="campus-info-horario">
          <img
            className="campus-icon"
            src="/Watch later@3x.svg"
            alt="watch icon"
          />
          <div className="campus-info-box">
            <p className="text-info-title">matí</p>
            <p className="text-info">De 9:00h a 13:00h</p>
          </div>
        </div>
        <div className="info-line middle"></div>
        <div className="campus-info-localidad">
          <img
            className="campus-icon"
            src="/Location on@3x.svg"
            alt="location icon"
          />
          <div className="campus-info-box">
            <p className="text-info-title">barcelona</p>
            <p className="text-info">
              Col·legi Sagrat Cor
              <br /> C/ del Sagrat Cor, 25 (Sarrià)
            </p>
          </div>
        </div>
        <div className="info-line last-line"></div>
        <div className="campus-info-precio">
          <img
            className="campus-icon"
            src="/Payments@3x.svg"
            alt="money icon"
          />

          <div className="campus-info-box">
            <p className="text-info-title">95€</p>
            <p className="text-info">50% descompte per a germans</p>
          </div>
        </div>
      </div>

      <div className="campus-incluido">
        <h2>què inclou</h2>
        <div className="campus-incluido-content">
          <div className="box-content">
            <img className="check-icon" src="/Check@3x.svg" alt="check icon" />
            <p>WELCOME PACK</p>
          </div>
          <div className="box-content">
            <img className="check-icon" src="/Check@3x.svg" alt="check icon" />
            <p>AIGUA I FRUITA</p>
          </div>

          <div className="box-content">
            <img className="check-icon" src="/Check@3x.svg" alt="check icon" />
            <p>EQUIPACIÓ</p>
          </div>
          <div className="box-content">
            <img className="check-icon" src="/Check@3x.svg" alt="check icon" />
            <p>ASSEGURANÇA d’accidents</p>
          </div>

          <div className="box-content">
            <img className="check-icon" src="/Check@3x.svg" alt="check icon" />
            <p>Servei de fisioteràpia</p>
          </div>
          <div className="box-content">
            <img className="check-icon" src="/Check@3x.svg" alt="check icon" />
            <p>SORTEJOS I REGALS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campus_CAT;
