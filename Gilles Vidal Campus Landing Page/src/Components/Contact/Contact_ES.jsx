import "./Contact.css";
import ContactForm_ES from "./ContactForm_ES";

const Contact_ES = () => {
  return (
    <div className="contact-content">
      <div className="contact-hero-content">
        <h1>CONTACTO</h1>
        <p>
          Para contactar en cuestiones generales, solo tienes que completar este
          formulario y tan pronto como nos sea posible, un miembro de nuestro
          equipo se pondrá en contacto contigo.
        </p>
      </div>
      <div className="contact-data-content">
        <div className="contact-data-box">
          <img src="/Email@3x.svg" alt="icono de correo" />
          <p>campusguillesvidal@gmail.com</p>
        </div>
        <div className="contact-data-box">
          <img src="/Phone@3x.svg" alt="icono de teléfono" />
          <p>+34 639 70 94 92</p>
        </div>
        <div className="contact-data-box">
          <img src="/Instagram@3x.svg" alt="icono de Instagram" />
          <p>@campus.guilles9</p>
        </div>
      </div>
      <ContactForm_ES />
    </div>
  );
};

export default Contact_ES;
