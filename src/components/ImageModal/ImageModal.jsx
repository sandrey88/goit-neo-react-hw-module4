import Modal from 'react-modal';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1200,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    border: 'none',
    maxWidth: '90vw',
    maxHeight: '90vh',
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
};

const ImageModal = ({ isOpen, onClose, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Image Modal"
    >
      {image && (
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className={css.modalImage}
        />
      )}
    </Modal>
  );
};

export default ImageModal;
