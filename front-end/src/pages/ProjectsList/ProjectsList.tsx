import React from "react";
import { Container, ListTable } from "./styles";
import edit from "../../assets/editRed.svg";
import del from "../../assets/deleteRed.svg";
import { NavLink } from "react-router-dom";
import { CreateProjectModal } from "../../components/Modals/CreateProjectModal";
import { EditModal } from "../../components/Modals/EditModal";
import { DeleteModal } from "../../components/Modals/DeleteModal";

export function ProjectsList() {
  const [isCreateProjectModalOpen, setIsCreateProjectModalOpen] =
    React.useState(false);

  function handleOpenCreateProjectModal() {
    setIsCreateProjectModalOpen(true);
  }

  function handleCloseCreateProjectModal() {
    setIsCreateProjectModalOpen(false);
  }

  const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);

  function handleOpenEditModal() {
    setIsEditModalOpen(true);
  }

  function handleCloseEditModal() {
    setIsEditModalOpen(false);
  }

  const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false);

  function handleOpenDeleteModal() {
    setIsDeleteModalOpen(true);
  }

  function handleCloseDeleteModal() {
    setIsDeleteModalOpen(false);
  }
  return (
    <Container>
      <div className="title">
        <h1>PROJECTS LIST</h1>
        <button className="green" onClick={handleOpenCreateProjectModal}>
          New Project
        </button>
      </div>
      <ListTable
        color="#664D4D"
        backgroundColor="#FFC1B8"
        detailColor="#BD8E8F"
      >
        <table>
          <thead>
            <tr>
              <th>TITLE</th>
              <th>DESCRIPTION</th>
              <th>START DATE</th>
              <th>END DATE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Project Name</td>
              <td>Project Description</td>
              <td>00-00-0000</td>
              <td>00-00-0000</td>
              <td>
                <NavLink
                  to="/projects/:id/activities"
                  aria-label="Gestire - Activities List"
                >
                  Go to project activities
                </NavLink>
              </td>
              <td>
                <button onClick={handleOpenEditModal}>
                  <img src={edit} alt="edit icon" />
                </button>
              </td>
              <td>
                <button onClick={handleOpenDeleteModal}>
                  <img src={del} alt="delete icon" />
                </button>
              </td>
            </tr>

            <tr>
              <td>Project Name</td>
              <td>Project Description</td>
              <td>00-00-0000</td>
              <td>00-00-0000</td>
              <td>
                <NavLink
                  to="/projects/:id/activities"
                  aria-label="Gestire - Activities List"
                >
                  Go to project activities
                </NavLink>
              </td>
              <td>
                <button onClick={handleOpenEditModal}>
                  <img src={edit} alt="edit icon" />
                </button>
              </td>
              <td>
                <button onClick={handleOpenDeleteModal}>
                  <img src={del} alt="delete icon" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </ListTable>

      <CreateProjectModal
        isOpen={isCreateProjectModalOpen}
        onRequestClose={handleCloseCreateProjectModal}
      />

      <EditModal
        isOpen={isEditModalOpen}
        onRequestClose={handleCloseEditModal}
      />

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onRequestClose={handleCloseDeleteModal}
      />
    </Container>
  );
}
