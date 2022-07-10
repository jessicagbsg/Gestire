import { Container, ListTable } from "./styles";
import edit from "../../assets/editRed.svg";
import del from "../../assets/deleteRed.svg";
import { NavLink } from "react-router-dom";

interface Props {
  onOpenCreateProjectModal: () => void;
}

export function ProjectsList({ onOpenCreateProjectModal }: Props) {
  return (
    <Container>
      <div className="title">
        <h1>PROJECTS LIST</h1>
        <button className="green" onClick={onOpenCreateProjectModal}>
          New Project
        </button>
      </div>
      <ListTable color="#664D4D" backgroundColor="#FFC1B8">
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
                <img src={edit} alt="edit icon" />
              </td>
              <td>
                <img src={del} alt="delete icon" />
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
