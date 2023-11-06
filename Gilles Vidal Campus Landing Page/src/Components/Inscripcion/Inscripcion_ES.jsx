import { ValidationError, useForm } from "@formspree/react";
import "./Inscripcion.css";
import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";

const initialState = {
  nombre: "",
  apellidos: "",
  email: "",
  teléfono: "",
  nombreJugador: "",
  apellidosJugador: "",
  fechaNacimiento: "",
  teléfonoJugador: "",
  talla: "",
  clubJugador: "",
  autorizaciónFoto: "",
  alergias: "",
};

const Inscripcion_ES = () => {
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

    if (!formData.nombre) {
      errors.nombre = "*Este campo es obligatorio";
    }
    if (!formData.apellidos) {
      errors.apellidos = "*Este campo es obligatorio";
    }
    if (!formData.email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)) {
      errors.email = "*El formato no es correcto";
    }
    if (!formData.teléfono.match(/^[0-9]{9}$/)) {
      errors.teléfono = "*El formato no es correcto";
    }
    if (!formData.nombreJugador) {
      errors.nombreJugador = "*Este campo es obligatorio";
    }
    if (!formData.apellidosJugador) {
      errors.apellidosJugador = "*Este campo es obligatorio";
    }
    if (!formData.fechaNacimiento) {
      errors.fechaNacimiento = "*Este campo es obligatorio";
    } else if (!isValidDate(formData.fechaNacimiento)) {
      errors.fechaNacimiento = "*Formato de fecha no válido (dd/mm/aaaa)";
    }
    if (!formData.clubJugador) {
      errors.clubJugador = "*Este campo es obligatorio";
    }
    if (!formData.talla) {
      errors.talla = "*Este campo es obligatorio";
    }
    if (!formData.autorizaciónFoto) {
      errors.autorizaciónFoto = "*Este campo es obligatorio";
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
        <h1>FORMULARIO DE INSCRIPCIÓN</h1>
      </div>

      <form
        className="inscripcion-form-content"
        onSubmit={handleFormSubmit}
        noValidate
      >
        <div className="form-block-box">
          <div
            className="inscripcion-form-div"
            htmlFor="DATOS DEL PADRE/MADRE/TUTOR"
          >
            <p>DATOS DEL PADRE/MADRE/TUTOR</p>
          </div>
          <div className="inscipcion-inputs-box-group">
            <div className="inscipcion-inputs-box">
              <div className="input-box">
                <input
                  className="inscripcion-form-input"
                  type="text"
                  name="nombre"
                  placeholder="Nombre*"
                  required
                  value={formData.nombre}
                  onChange={(e) =>
                    setFormData({ ...formData, nombre: e.target.value })
                  }
                />
                {validationErrors.nombre && (
                  <div className="I-validator-message-box">
                    <p className="I-validator-message">
                      {validationErrors.nombre}
                    </p>
                  </div>
                )}
              </div>

              <div className="input-box">
                <input
                  className="inscripcion-form-input"
                  type="text"
                  name="apellidos"
                  placeholder="Apellidos*"
                  required
                  value={formData.apellidos}
                  onChange={(e) =>
                    setFormData({ ...formData, apellidos: e.target.value })
                  }
                />
                {validationErrors.apellidos && (
                  <div className="I-validator-message-box">
                    <p className="I-validator-message">
                      {validationErrors.apellidos}
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
                  placeholder="Correo electrónico*"
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
                  name="teléfono"
                  placeholder="Teléfono*"
                  required
                  pattern="^[0-9]{9}$"
                  value={formData.teléfono}
                  onChange={(e) =>
                    setFormData({ ...formData, teléfono: e.target.value })
                  }
                />
                {validationErrors.teléfono && (
                  <div className="I-validator-message-box">
                    <p className="I-validator-message">
                      {validationErrors.teléfono}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="form-block-box">
          <div className="inscripcion-form-div" htmlFor="DATOS DEL JUGADOR">
            <p>DATOS DEL JUGADOR</p>
          </div>
          <div className="inscipcion-inputs-box-group">
            <div className="inscipcion-inputs-box">
              <div className="input-box">
                <input
                  className="inscripcion-form-input"
                  type="text"
                  name="nombreJugador"
                  placeholder="Nombre*"
                  required
                  value={formData.nombreJugador}
                  onChange={(e) =>
                    setFormData({ ...formData, nombreJugador: e.target.value })
                  }
                />
                {validationErrors.nombreJugador && (
                  <div className="I-validator-message-box">
                    <p className="I-validator-message">
                      {validationErrors.nombreJugador}
                    </p>
                  </div>
                )}
              </div>

              <div className="input-box">
                <input
                  className="inscripcion-form-input"
                  type="text"
                  name="apellidosJugador"
                  placeholder="Apellidos*"
                  required
                  value={formData.apellidosJugador}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      apellidosJugador: e.target.value,
                    })
                  }
                />
                {validationErrors.apellidosJugador && (
                  <div className="I-validator-message-box">
                    <p className="I-validator-message">
                      {validationErrors.apellidosJugador}
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
                  name="fechaNacimiento"
                  placeholder="Fecha de nacimiento (dd/mm/aaaa)*"
                  required
                  value={formData.fechaNacimiento}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      fechaNacimiento: e.target.value,
                    })
                  }
                />
                {validationErrors.fechaNacimiento && (
                  <div className="I-validator-message-box">
                    <p className="I-validator-message">
                      {validationErrors.fechaNacimiento}
                    </p>
                  </div>
                )}
              </div>

              <div className="input-box">
                <input
                  className="inscripcion-form-input"
                  type="tel"
                  name="teléfonoJugador"
                  placeholder="Teléfono"
                  required
                  pattern="^[0-9]{9}$"
                  value={formData.teléfonoJugador}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      teléfonoJugador: e.target.value,
                    })
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
                  name="clubJugador"
                  placeholder="Club de fútbol donde juegas*"
                  required
                  value={formData.clubJugador}
                  onChange={(e) =>
                    setFormData({ ...formData, clubJugador: e.target.value })
                  }
                />
                {validationErrors.clubJugador && (
                  <div className="I-validator-message-box">
                    <p className="I-validator-message">
                      {validationErrors.clubJugador}
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
            htmlFor="ALERGIAS O INTOLERANCIAS"
          >
            <p>ALERGIAS O INTOLERANCIAS</p>
          </div>

          <div className="auth-foto-content">
            <p>Autorizo a realizar fotografías*</p>
            <div className="radio-buttons">
              <div className="radio-button-div">
                <input
                  type="radio"
                  name="autorizaciónFoto"
                  value="Sí"
                  required
                  checked={formData.autorizaciónFoto === "Sí"}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      autorizaciónFoto: e.target.value,
                    })
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
              ¿El jugador/a tiene alguna alergia o intolerancia?
            </p>

            <textarea
              className="inscripcion-form-textarea"
              name="alergias"
              placeholder="Información relevante a tener en cuenta"
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
          <p className="send-text">El formulario se ha enviado correctamente</p>
          <p className="send-text-secondary">
            Próximamente recibirás un mail a tu correo personal para finalizar
            la inscripción, ¡te esperamos en el campo!
          </p>
        </Modal>
      )}
    </div>
  );
};

export default Inscripcion_ES;
