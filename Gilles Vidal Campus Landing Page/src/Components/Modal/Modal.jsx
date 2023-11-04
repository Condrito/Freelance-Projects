import React, { useRef } from "react";
import "./Modal.css";

const Modal = ({ children, setIsModalOpen }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setIsModalOpen(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={closeModal} ref={modalRef}>
      <div className="modal-global-content">
        <div className="modal-header-content">
          <button className="modal-btn" onClick={() => setIsModalOpen(false)}>
            <img
              className="modal-btn-close"
              src="Close@3x.svg"
              alt="cross icon"
            />
          </button>
          <img className="done-icon" src="/Done@3x.svg" alt="done icon" />
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
