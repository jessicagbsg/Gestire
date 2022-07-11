import React from "react";
import { Container, ListTable } from "../ProjectsList/styles";
import edit from "../../assets/editBlue.svg";
import del from "../../assets/deleteBlue.svg";
import { EditModal } from "../../components/Modals/EditModal";
import { DeleteModal } from "../../components/Modals/DeleteModal";
import { CreateActivityModal } from "../../components/Modals/CreateActivityModal";

export function ActivitiesList() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    React.useState(false);

  function handleOpenCreateActivityModal() {
    setIsCreateActivityModalOpen(true);
  }

  function handleCloseCreateActivityModal() {
    setIsCreateActivityModalOpen(false);
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
        <h1>ACTIVITIES LIST</h1>
        <button className="green" onClick={handleOpenCreateActivityModal}>
          New Activity
        </button>
      </div>
      <ListTable
        color="#1F3745"
        backgroundColor="#8EABBD"
        detailColor="#3E6E8A"
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
              <td>Activity Name</td>
              <td>Activity Description</td>
              <td>00-00-0000</td>
              <td>00-00-0000</td>
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
              <td>Activity Name</td>
              <td>Activity Description</td>
              <td>00-00-0000</td>
              <td>00-00-0000</td>
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

      <CreateActivityModal
        isOpen={isCreateActivityModalOpen}
        onRequestClose={handleCloseCreateActivityModal}
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
