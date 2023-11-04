import "./Campus.css";

const Campus_ES = () => {
  return (
    <div id="campus" className="campus-background">
      <div className="campus-descripcion">
        <h2>1ra edición campus mixto gilles vidal</h2>
        <p>
          Nuestro campus es el lugar ideal para
          <span> niños y niñas de 5 a 16 años</span> que desean desarrollar sus
          habilidades técnicas y tácticas. Nuestra sólida metodología combina
          una formación futbolística de alto nivel y un conjunto de dinámicas
          inspiradas en la Kings League, como son los dados, las cartas mágicas
          y los penaltis shootout.
        </p>
        <p>
          Tus hijos podrán alcanzar su máximo potencial futbolístico mientras se
          divierten y se preparan para emocionantes desafíos en el mundo del
          fútbol.
        </p>
        <p>
          Únete y vive el fútbol de una manera única. ¡Te esperamos en el campo!
        </p>
      </div>
      <div className="campus-info">
        <div className="campus-info-calendario">
          <img
            className="campus-icon"
            src="/Calendar@3x.svg"
            alt="calendar icon"
          />
          <p className="text-info-title">3 DÍAS</p>
          <p className="text-info">27 al 29 de diciembre </p>
        </div>
        <div className="info-line first-line"></div>
        <div className="campus-info-horario">
          <img
            className="campus-icon"
            src="/Watch later@3x.svg"
            alt="watch icon"
          />
          <p className="text-info-title">mañana</p>
          <p className="text-info">De 9:00h a 13:00h</p>
        </div>
        <div className="info-line  middle"></div>
        <div className="campus-info-localidad">
          <img
            className="campus-icon"
            src="/Location on@3x.svg"
            alt="location icon"
          />
          <p className="text-info-title">barcelona</p>
          <p className="text-info">
            Colegio Sagrat Cor
            <br /> C/ del Sagrat Cor, 25 (Sarrià)
          </p>
        </div>
        <div className="info-line last-line"></div>
        <div className="campus-info-precio">
          <img
            className="campus-icon"
            src="/Payments@3x.svg"
            alt="money icon"
          />
          <p className="text-info-title">95€</p>
          <p className="text-info">50% descuento para hermanos</p>
        </div>
      </div>

      <div className="campus-incluido">
        <h2>qué incluye</h2>

        <div className="campus-incluido-content">
          <div className="box-content">
            <img className="check-icon" src="/Check@3x.svg" alt="check icon" />
            <p>WELCOME PACK</p>
          </div>
          <div className="box-content">
            <img className="check-icon" src="/Check@3x.svg" alt="check icon" />
            <p>AGUA Y FRUTA</p>
          </div>

          <div className="box-content">
            <img className="check-icon" src="/Check@3x.svg" alt="check icon" />
            <p>EQUIPACIÓN</p>
          </div>
          <div className="box-content">
            <img className="check-icon" src="/Check@3x.svg" alt="check icon" />
            <p>Seguro de accidentes</p>
          </div>

          <div className="box-content">
            <img className="check-icon" src="/Check@3x.svg" alt="check icon" />
            <p>Servicio de fisioterapia</p>
          </div>
          <div className="box-content">
            <img className="check-icon" src="/Check@3x.svg" alt="check icon" />
            <p>SORTEOS Y REGALOS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campus_ES;
