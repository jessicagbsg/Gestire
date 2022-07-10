import { Container, ListTable } from "../ProjectsList/styles";
import edit from "../../assets/editBlue.svg";
import del from "../../assets/deleteBlue.svg";

interface Props {
  onOpenCreateActivityModal: () => void;
  onOpenEditModal: () => void;
  onOpenDeleteModal: () => void;
}

export function ActivitiesList({
  onOpenCreateActivityModal,
  onOpenEditModal,
  onOpenDeleteModal,
}: Props) {
  return (
    <Container>
      <div className="title">
        <h1>ACTIVITIES LIST</h1>
        <button className="green" onClick={onOpenCreateActivityModal}>
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
                <button onClick={onOpenEditModal}>
                  <img src={edit} alt="edit icon" />
                </button>
              </td>
              <td>
                <button onClick={onOpenDeleteModal}>
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
                <button onClick={onOpenEditModal}>
                  <img src={edit} alt="edit icon" />
                </button>
              </td>
              <td>
                <button onClick={onOpenDeleteModal}>
                  <img src={del} alt="delete icon" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </ListTable>
    </Container>
  );
}
