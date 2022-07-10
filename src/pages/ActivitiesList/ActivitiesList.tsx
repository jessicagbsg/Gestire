import { Container, ListTable } from "../ProjectsList/styles";
import edit from "../../assets/editBlue.svg";
import del from "../../assets/deleteBlue.svg";

interface Props {
  onOpenCreateActivityModal: () => void;
}

export function ActivitiesList({ onOpenCreateActivityModal }: Props) {
  return (
    <Container>
      <div className="title">
        <h1>ACTIVITIES LIST</h1>
        <button className="green" onClick={onOpenCreateActivityModal}>
          New Activity
        </button>
      </div>
      <ListTable color="#1F3745" backgroundColor="#8EABBD">
        <table>
          <thead>
            <tr>
              <th>TITLE</th>
              <th>PROJECT ASSOCIATED</th>
              <th>START DATE</th>
              <th>END DATE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Activity Name</td>
              <td>Project Name</td>
              <td>00-00-0000</td>
              <td>00-00-0000</td>
              <td>
                <img src={edit} alt="edit icon" />
              </td>
              <td>
                <img src={del} alt="delete icon" />
              </td>
            </tr>
            <tr>
              <td>Activity Name</td>
              <td>Project Name</td>
              <td>00-00-0000</td>
              <td>00-00-0000</td>
              <td>
                <img src={edit} alt="edit icon" />
              </td>
              <td>
                <img src={del} alt="delete icon" />
              </td>
            </tr>
          </tbody>
        </table>
      </ListTable>
    </Container>
  );
}
