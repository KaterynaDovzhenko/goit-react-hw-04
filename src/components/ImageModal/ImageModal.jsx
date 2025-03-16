import Modal from "react-modal";
import { useEffect } from "react";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

export default function ImageModal({ isOpen, onClose, imgUrl, imgAlt }) {
  useEffect(() => {
    const handleClose = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleClose);
    return () => {
      window.removeEventListener("keydown", handleClose);
    };
  }, [onClose]);

  console.log("Image URL:", imgUrl);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modal}
      //   overlayClassName={css.overlay}
    >
      <div className={css.modalContent}>
        <img src={imgUrl} alt={imgAlt} className={css.modalImage} />
      </div>
    </Modal>
  );
}
