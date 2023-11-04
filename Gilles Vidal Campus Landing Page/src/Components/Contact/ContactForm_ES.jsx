import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Modal from "../Modal/Modal";

const ContactForm_ES = () => {
  const [state, handleSubmit] = useForm("mgejdjlw");
  const [validationErrors, setValidationErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  useEffect(() => {
    setValidationErrors({});
  }, [isModalOpen]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const nameInput = e.target.querySelector('[name="name"]');
    const emailInput = e.target.querySelector('[name="email"]');
    const phoneInput = e.target.querySelector('[name="phone"]');
    const messageInput = e.target.querySelector('[name="message"]');

    const errors = {};

    if (!nameInput.value) {
      errors.name = "*Este campo es obligatorio";
    }

    if (!emailInput.value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)) {
      errors.email = "*El formato no es correcto";
    }

    if (!phoneInput.value.match(/^[0-9]{9}$/)) {
      errors.phone = "*El formato no es correcto";
    }

    if (!messageInput.value) {
      errors.message = "*Este campo es obligatorio";
    }

    if (Object.keys(errors).length === 0) {
      await handleSubmit(e);

      // Abre el modal
      setIsModalOpen(true);

      // Reinicia los valores de los campos del formulario
      setFormValues({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      setValidationErrors(errors);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <div className="form-box-box">
      <form
        className="contact-form-content"
        onSubmit={handleFormSubmit}
        noValidate
      >
        <div className="form-inputs-content">
          <div className="form-inputs-box">
            <input
              className="contact-form-input"
              id="name"
              type="text"
              name="name"
              placeholder="Nombre"
              required
              value={formValues.name}
              onChange={handleInputChange}
            />
            {validationErrors.name && (
              <div className="validator-message-box">
                <p className="validator-message">{validationErrors.name}</p>
              </div>
            )}
          </div>
          <div className="form-inputs-box">
            <input
              className="contact-form-input"
              id="email"
              type="email"
              name="email"
              placeholder="Correo electrónico"
              required
              value={formValues.email}
              onChange={handleInputChange}
            />
            {validationErrors.email && (
              <div className="validator-message-box">
                <p className="validator-message">{validationErrors.email}</p>
              </div>
            )}
          </div>

          <div className="form-inputs-box">
            <input
              className="contact-form-input"
              id="phone"
              type="tel"
              name="phone"
              placeholder="Teléfono"
              required
              pattern="^[0-9]{9}$"
              value={formValues.phone}
              onChange={handleInputChange}
            />
            {validationErrors.phone && (
              <div className="validator-message-box">
                <p className="validator-message">{validationErrors.phone}</p>
              </div>
            )}
          </div>
        </div>
        <div className="form-inputs-box-area">
          <textarea
            className="contact-form-textarea"
            id="message"
            name="message"
            placeholder="Escribe tu mensaje"
            required
            value={formValues.message}
            onChange={handleInputChange}
          />
          {validationErrors.message && (
            <div className="validator-message-box-area">
              <p className="validator-message">{validationErrors.message}</p>
            </div>
          )}
        </div>
        <button
          className="contact-btn"
          type="submit"
          disabled={state.submitting}
        >
          <p>ENVIAR</p>
        </button>
      </form>

      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen}>
          <p className="send-text">¡Tu mensaje se ha enviado correctamente!</p>
          <p className="send-text-secondary">
            Pronto nos pondremos en contacto contigo
          </p>
        </Modal>
      )}
    </div>
  );
};

export default ContactForm_ES;
