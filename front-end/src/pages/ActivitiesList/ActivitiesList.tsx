import React from "react";
import { Container, ListTable } from "../ProjectsList/styles";
import edit from "../../assets/editBlue.svg";
import del from "../../assets/deleteBlue.svg";
import { EditModal } from "../../components/Modals/EditModal";
import { DeleteModal } from "../../components/Modals/DeleteModal";
import { CreateActivityModal } from "../../components/Modals/CreateActivityModal";
import { useParams } from "react-router-dom";
import { Activity, listActivity } from "../../api";

export function ActivitiesList() {
  const { id } = useParams();
  console.log(id);

  const [activities, setActivities] = React.useState<Activity[]>([]);

  React.useEffect(() => {
    async function LoadActivities() {
      const response = await listActivity(id as string);
      setActivities(response);
    }
    LoadActivities();
  }, [id]);
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
              <th>PROJECT ID</th>
              <th>START DATE</th>
              <th>END DATE</th>
            </tr>
          </thead>
          <tbody>
            {activities.length > 0
              ? activities.map((activity) => (
                  <tr>
                    <td>{activity.name}</td>
                    <td>{activity.description}</td>
                    <td>Project {id}</td>
                    <td>{`${new Date(activity.start_at).getDate()}-${
                      new Date(activity.start_at).getMonth() + 1
                    }-${new Date(activity.start_at).getFullYear()}`}</td>
                    <td>{`${new Date(activity.end_at).getDate()}-${
                      new Date(activity.end_at).getMonth() + 1
                    }-${new Date(activity.end_at).getFullYear()}`}</td>

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
                ))
              : null}
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
