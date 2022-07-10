import Modal from "react-modal";
import { Button } from "../../styles/Button";
import { Container } from "../ActivitiesList/styles";

interface CreateProjectModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function CreateProjectModal({
  isOpen,
  onRequestClose,
}: CreateProjectModalProps) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <Container>
        <h2>NEW PROJECT</h2>

        <label htmlFor="title">Title</label>
        <input type="text" id="title" />

        <label htmlFor="description">Descriotion</label>
        <textarea id="description" />

        <label htmlFor="startDate"></label>
        <input type="date" id="startDate" />

        <label htmlFor="endDate"></label>
        <input type="date" id="endDate" />

        <Button>Create</Button>
        <Button>Cancel</Button>
      </Container>
    </Modal>
  );
}
