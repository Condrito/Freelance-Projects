import "./Modal.css";

const Modal = ({ children, setIsModalOpen }) => {
  return (
    <div className="modal-overlay">
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
