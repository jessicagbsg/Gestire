import Modal from "react-modal";
import { Container } from "./style";
import closeModal from "../../assets/close.svg";
import { createActivity, listActivity } from "../../api";
import React from "react";
import { useParams } from "react-router-dom";

interface CreateActivityModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function CreateActivityModal({
  isOpen,
  onRequestClose,
}: CreateActivityModalProps) {
  const { id } = useParams();

  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");
  const [isCompleted, setIsCompleted] = React.useState("no");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await createActivity(
      {
        name,
        description,
        projectId: id as string,
        start_at: new Date(startDate).toISOString(),
        end_at: new Date(endDate).toISOString(),
        is_completed: isCompleted === "yes",
      },
      id as string
    );
    console.log(response);
    onRequestClose();
    setName("");
    setDescription("");
    setStartDate("");
    setEndDate("");
    setIsCompleted("no");
    listActivity(id as string);
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
        <h2 className="span">NEW ACTIVITY</h2>

        <div className="span">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder="Activity Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="span">
          <label htmlFor="description">Descriotion</label>
          <textarea
            id="description"
            placeholder="Activity Description"
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

        <div className="span">
          <label htmlFor="completed">Completed</label>
          <select
            id="completed"
            value={isCompleted}
            onChange={(e) => setIsCompleted(e.target.value)}
          >
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
