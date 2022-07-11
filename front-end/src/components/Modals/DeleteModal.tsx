import Modal from "react-modal";
import { Container } from "./style";
import closeModal from "../../assets/close.svg";

interface DeleteModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function DeleteModal({ isOpen, onRequestClose }: DeleteModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="reactModalOverlay"
      className="reactModalContent"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="reactModalClose"
      >
        <img src={closeModal} alt="close modal" />
      </button>

      <Container>
        <h2 className="span">DELETE</h2>
        <p className="span">Are you sure you want to delete</p>

        <button className="green">Yes</button>
        <button>No</button>
      </Container>
    </Modal>
  );
}
