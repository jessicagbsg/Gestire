import Modal from "react-modal";
import { Container } from "./style";
import closeModal from "../../assets/close.svg";

interface CreateActivityModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function CreateActivityModal({
  isOpen,
  onRequestClose,
}: CreateActivityModalProps) {
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
        <h2 className="span">NEW ACTIVITY</h2>

        <div className="span">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" placeholder="Activity Name" required />
        </div>

        <div className="span">
          <label htmlFor="description">Descriotion</label>
          <textarea id="description" placeholder="Activity Description" />
        </div>

        <div>
          <label htmlFor="startDate"> Start Date</label>
          <input type="date" id="startDate" required />
        </div>

        <div>
          <label htmlFor="endDate">End Date</label>
          <input type="date" id="endDate" required />
        </div>

        <div className="span">
          <label htmlFor="completed">Completed</label>
          <select id="completed">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <button type="submit" className="green">
          Create
        </button>
        <button>Cancel</button>
      </Container>
    </Modal>
  );
}
