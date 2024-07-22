import Modal from "react-modal";
import s from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  if (!image) return null;
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName={css.overlay}
      >
        <p>{image.description || image.alt_description}</p>
        <img src={image.urls.regular} alt={image.alt_description} />
        <button onClick={onRequestClose}>X</button>
      </Modal>
    </div>
  );
};

export default ImageModal;
