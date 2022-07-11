import Modal from "react-modal";
import { Container } from "./style";
import closeModal from "../../assets/close.svg";

interface EditModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function EditModal({ isOpen, onRequestClose }: EditModalProps) {
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
        <h2 className="span">EDIT</h2>

        <div className="span">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" placeholder="Project Name" />
        </div>

        <div className="span">
          <label htmlFor="description">Descriotion</label>
          <textarea id="description" placeholder="Project Description" />
        </div>

        <div>
          <label htmlFor="startDate"> Start Date</label>
          <input type="date" id="startDate" />
        </div>

        <div>
          <label htmlFor="endDate">End Date</label>
          <input type="date" id="endDate" />
        </div>

        <button type="submit" className="green">
          Save
        </button>
        <button>Cancel</button>
      </Container>
    </Modal>
  );
}
