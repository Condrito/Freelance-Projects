import { ValidationError, useForm } from "@formspree/react";
import "./Inscripcion.css";
import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";

const initialState = {
  name: "",
  surname: "",
  email: "",
  phone: "",
  playerName: "",
  playerSurname: "",
  birthdayDate: "",
  playerPhone: "",
  talla: "",
  playerClub: "",
  authFoto: "",
  alergias: "",
};

const Inscripcion_CAT = () => {
  const [state, handleSubmit] = useForm("mgejdjlw");
  const [validationErrors, setValidationErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    setFormData(initialState); // Restablecer el formulario a los valores iniciales
    setValidationErrors({}); // Borrar las alertas de validación
  }, [isModalOpen]);

  const isValidDate = (dateString) => {
    // Asegurarse de que la fecha tenga el formato correcto (dd/mm/aaaa)
    const dateRegex = /^(\d{2}\/\d{2}\/\d{4})$/;

    if (!dateRegex.test(dateString)) {
      return false;
    }

    // Separar el día, mes y año
    const [day, month, year] = dateString.split("/").map(Number);

    // Crear una nueva fecha
    const date = new Date(year, month - 1, day);

    // Verificar si es una fecha válida (mes y día válidos)
    return (
      date.getDate() === day &&
      date.getMonth() === month - 1 &&
      date.getFullYear() === year
    );
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Realiza las validaciones del formulario
    const errors = {};

    if (!formData.name) {
      errors.name = "*Aquest camp es obligatori";
    }
    if (!formData.surname) {
      errors.surname = "*Aquest camp es obligatori";
    }
    if (!formData.email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)) {
      errors.email = "*El format no és correcte";
    }
    if (!formData.phone.match(/^[0-9]{9}$/)) {
      errors.phone = "*El format no és correcte";
    }
    if (!formData.playerName) {
      errors.playerName = "*Aquest camp es obligatori";
    }
    if (!formData.playerSurname) {
      errors.playerSurname = "*Aquest camp es obligatori";
    }
    if (!formData.birthdayDate) {
      errors.birthdayDate = "*Aquest camp es obligatori";
    } else if (!isValidDate(formData.birthdayDate)) {
      errors.birthdayDate = "*Format de data no vàlid (dd/mm/aaaa)";
    }
    if (!formData.playerClub) {
      errors.playerClub = "*Aquest camp es obligatori";
    }
    if (!formData.talla) {
      errors.talla = "*Aquest camp es obligatori";
    }
    if (!formData.authFoto) {
      errors.authFoto = "*Aquest camp es obligatori";
    }

    if (Object.keys(errors).length === 0) {
      await handleSubmit(e);
      setIsModalOpen(true);
    } else {
      setValidationErrors(errors);
    }
  };
  return (
    <div className="inscripcion-content">
      <div className="inscripcion-hero-content">
        <h1>FORMULARI D’INSCRIPCIÓ</h1>
      </div>

      <form
        className="inscripcion-form-content"
        onSubmit={handleFormSubmit}
        noValidate
      >
        <div className="form-block-box">
          <div
            className="inscripcion-form-div"
            htmlFor="DADES DEL PARE/MARE/TUTOR"
          >
            <p>DADES DEL PARE/MARE/TUTOR</p>
          </div>
          <div className="inscipcion-inputs-box-group">
            <div className="inscipcion-inputs-box">
              <div className="input-box">
                <input
                  className="inscripcion-form-input"
                  type="text"
                  name="name"
                  placeholder="Nom*"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                {validationErrors.name && (
                  <div className="I-validator-message-box">
                    <p className="I-validator-message">
                      {validationErrors.name}
                    </p>
                  </div>
                )}
              </div>

              <div className="input-box">
                <input
                  className="inscripcion-form-input"
                  type="text"
                  name="surname"
                  placeholder="Cognoms*"
                  required
                  value={formData.surname}
                  onChange={(e) =>
                    setFormData({ ...formData, surname: e.target.value })
                  }
                />
                {validationErrors.surname && (
                  <div className="I-validator-message-box">
                    <p className="I-validator-message">
                      {validationErrors.surname}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="inscipcion-inputs-box">
              <div className="input-box">
                <input
                  className="inscripcion-form-input"
                  type="email"
                  name="email"
                  placeholder="Correu electrònic*"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                {validationErrors.email && (
                  <div className="I-validator-message-box">
                    <p className="I-validator-message">
                      {validationErrors.email}
                    </p>
                  </div>
                )}
              </div>

              <div className="input-box">
                <input
                  className="inscripcion-form-input"
                  type="tel"
                  name="phone"
                  placeholder="Telèfon*"
                  required
                  pattern="^[0-9]{9}$"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
                {validationErrors.phone && (
                  <div className="I-validator-message-box">
                    <p className="I-validator-message">
                      {validationErrors.phone}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="form-block-box">
          <div className="inscripcion-form-div" htmlFor="DADES DE LA JUGADORA">
            <p>DADES DE LA JUGADORA</p>
          </div>
          <div className="inscipcion-inputs-box-group">
            <div className="inscipcion-inputs-box">
              <div className="input-box">
                <input
                  className="inscripcion-form-input"
                  type="text"
                  name="playerName"
                  placeholder="Nom*"
                  required
                  value={formData.playerName}
                  onChange={(e) =>
                    setFormData({ ...formData, playerName: e.target.value })
                  }
                />
                {validationErrors.playerName && (
                  <div className="I-validator-message-box">
                    <p className="I-validator-message">
                      {validationErrors.playerName}
                    </p>
                  </div>
                )}
              </div>

              <div className="input-box">
                <input
                  className="inscripcion-form-input"
                  type="text"
                  name="playerSurname"
                  placeholder="Cognoms*"
                  required
                  value={formData.playerSurname}
                  onChange={(e) =>
                    setFormData({ ...formData, playerSurname: e.target.value })
                  }
                />
                {validationErrors.playerSurname && (
                  <div className="I-validator-message-box">
                    <p className="I-validator-message">
                      {validationErrors.playerSurname}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="inscipcion-inputs-box">
              <div className="input-box">
                <input
                  className="inscripcion-form-input"
                  type="text"
                  name="birthdayDate"
                  placeholder="Data de naixement (dd/mm/aaaa)*"
                  required
                  value={formData.birthdayDate}
                  onChange={(e) =>
                    setFormData({ ...formData, birthdayDate: e.target.value })
                  }
                />
                {validationErrors.birthdayDate && (
                  <div className="I-validator-message-box">
                    <p className="I-validator-message">
                      {validationErrors.birthdayDate}
                    </p>
                  </div>
                )}
              </div>

              <div className="input-box">
                <input
                  className="inscripcion-form-input"
                  type="tel"
                  name="playerPhone"
                  placeholder="Telèfon"
                  required
                  pattern="^[0-9]{9}$"
                  value={formData.playerPhone}
                  onChange={(e) =>
                    setFormData({ ...formData, playerPhone: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="inscipcion-inputs-box">
              <div className="input-box">
                <select
                  className="inscripcion-form-input-select"
                  name="talla"
                  required
                  value={formData.talla}
                  onChange={(e) =>
                    setFormData({ ...formData, talla: e.target.value })
                  }
                >
                  <option value="" disabled>
                    Selecciona una talla*
                  </option>
                  <option value="Talla 8 (39cm/55cm)">
                    Talla 8 (39cm/55cm)
                  </option>
                  <option value="Talla 12 (43cm/60cm)">
                    Talla 12 (43cm/60cm)
                  </option>
                  <option value="Talla 16 (47cm/65cm)">
                    Talla 16 (47cm/65cm)
                  </option>
                  <option value="Talla S (48cm/69cm)">
                    Talla S (48cm/69cm)
                  </option>
                  <option value="Talla M (51cm/71cm)">
                    Talla M (51cm/71cm)
                  </option>
                  <option value="Talla L (54cm/72cm)">
                    Talla L (54cm/72cm)
                  </option>
                </select>
                {validationErrors.talla && (
                  <div className="I-validator-message-box">
                    <p className="I-validator-message">
                      {validationErrors.talla}
                    </p>
                  </div>
                )}
              </div>

              <div className="input-box">
                <input
                  className="inscripcion-form-input"
                  type="text"
                  name="playerClub"
                  placeholder="Club de futbol on jugues*"
                  required
                  value={formData.playerClub}
                  onChange={(e) =>
                    setFormData({ ...formData, playerClub: e.target.value })
                  }
                />
                {validationErrors.playerClub && (
                  <div className="I-validator-message-box">
                    <p className="I-validator-message">
                      {validationErrors.playerClub}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="form-block-box">
          <div
            className="inscripcion-form-div"
            htmlFor="AL·LÈRGIES O INTOLERÀNCIES"
          >
            <p>AL·LÈRGIES O INTOLERÀNCIES</p>
          </div>

          <div className="auth-foto-content">
            <p>Autoritzo a realitzar fotografies*</p>
            <div className="radio-buttons">
              <div className="radio-button-div">
                <input
                  type="radio"
                  name="authFoto"
                  value="Si"
                  required
                  checked={formData.authFoto === "Si"}
                  onChange={(e) =>
                    setFormData({ ...formData, authFoto: e.target.value })
                  }
                />
                Sí
              </div>
              <div className="radio-button-div">
                <input
                  className="radio-btn"
                  type="radio"
                  name="authFoto"
                  value="No"
                  required
                  checked={formData.authFoto === "No"}
                  onChange={(e) =>
                    setFormData({ ...formData, authFoto: e.target.value })
                  }
                />
                No
              </div>
            </div>
          </div>
          {validationErrors.authFoto && (
            <div className="I-validator-message-box">
              <p className="I-validator-message">{validationErrors.authFoto}</p>
            </div>
          )}

          <div className="alergias-content">
            <p className="alergias-text">
              El jugador/a té alguna al·lèrgia o intolerància?
            </p>

            <textarea
              className="inscripcion-form-textarea"
              name="alergias"
              placeholder="Informació rellevant a tindre en compte"
              value={formData.alergias}
              onChange={(e) =>
                setFormData({ ...formData, alergias: e.target.value })
              }
            />
          </div>
        </div>

        <button
          className="form-inscripcion-btn"
          type="submit"
          disabled={state.submitting}
        >
          <p>enviar</p>
        </button>
      </form>
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen}>
          <p className="send-text">el formulari s’ha enviat correctament</p>
          <p className="send-text-secondary">
            Pròximament rebràs un mail al teu correu personal per finalitzar la
            inscripció, t’esperem al camp!
          </p>
        </Modal>
      )}
    </div>
  );
};

export default Inscripcion_CAT;
