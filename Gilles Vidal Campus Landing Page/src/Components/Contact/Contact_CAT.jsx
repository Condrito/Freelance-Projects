import "./Contact.css";
import ContactForm_CAT from "./ContactForm_CAT";
const Contact_CAT = () => {
  return (
    <div className="contact-content">
      <div className="contact-hero-content">
        <h1>CONTACTE</h1>
        <p>
          Per contactar per qüestions generals, només has d’omplir aquest
          formulari i tan aviat com ens sigui possible, un membre del nostre
          equip es posarà en contacte amb tu.
        </p>
      </div>
      <div className="contact-data-content">
        <div className="contact-data-box">
          <img src="/Email@3x.svg" alt="email icon" />
          <p>campusguillesvidal@gmail.com</p>
        </div>
        <div className="contact-data-box">
          <img src="/Phone@3x.svg" alt="phone icon" />
          <p>+34 639 70 94 92</p>
        </div>
        <div className="contact-data-box">
          <img src="/Instagram@3x.svg" alt="instagram icon" />
          <p>@campus.guilles9</p>
        </div>
      </div>
      <ContactForm_CAT />
    </div>
  );
};

export default Contact_CAT;
