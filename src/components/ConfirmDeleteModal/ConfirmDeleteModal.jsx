import Modal from "react-modal";
import css from "./ConfirmDeleteModal.module.css";
Modal.setAppElement("#root");

const ConfirmDeleteModal = ({ isOpen, onRequestClose, onDelete }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Confirm Delete"
      className={css.modalContent}
      overlayClassName={css.modalOverlay}
    >
      <div>
        <h2 className={css.txt}>
          Are you sure you want to delete this contact?
        </h2>
      </div>
      <div className={css.btnCont}>
        <button className={css.btnOk} onClick={onDelete}>
          Yes, Delete
        </button>
        <button className={css.btnNo} onClick={onRequestClose}>
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default ConfirmDeleteModal;
