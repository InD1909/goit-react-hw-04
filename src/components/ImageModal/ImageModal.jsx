import Modal from "react-modal";
import s from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ image, onClose }) => {
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      overlayClassName={s.overlay}
    >
      <button onClick={onClose}>Close</button>
      {image && (
        <>
          <img src={image.urls.regular} alt={image.alt_description} />
          <p>{image.description || image.alt_description}</p>
          <p>by {image.user.name}</p>
        </>
      )}
    </Modal>
  );
};

export default ImageModal;
