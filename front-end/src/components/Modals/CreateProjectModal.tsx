import Modal from "react-modal";
import { Container } from "./style";
import closeModal from "../../assets/close.svg";
import React from "react";
import { createProject, listProjects } from "../../api";

interface CreateProjectModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function CreateProjectModal({
  isOpen,
  onRequestClose,
}: CreateProjectModalProps) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await createProject({
      name,
      description,
      start_at: new Date(startDate).toISOString(),
      end_at: new Date(endDate).toISOString(),
    });
    console.log(response);
    onRequestClose();
    setName("");
    setDescription("");
    setStartDate("");
    setEndDate("");
    listProjects();
  };

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

      <Container onSubmit={onSubmit}>
        <h2 className="span">NEW PROJECT</h2>

        <div className="span">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Project Name"
            required
          />
        </div>

        <div className="span">
          <label htmlFor="description">Descriotion</label>
          <textarea
            id="description"
            placeholder="Project Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="startDate"> Start Date</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="green">
          Create
        </button>
        <button>Cancel</button>
      </Container>
    </Modal>
  );
}
