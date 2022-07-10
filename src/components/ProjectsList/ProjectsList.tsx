import { Container, ProjectTable } from "./styles";
import edit from "../../Assets/editRed.svg";
import del from "../../Assets/deleteRed.svg";
import { Cards } from "../Cards/Cards";

export function ProjectsList() {
  return (
    <Container>
      <Cards title="PROJECTS LIST">
        <ProjectTable>
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
                  <img src={edit} alt="edit icon" />
                </td>
                <td>
                  <img src={del} alt="delete icon" />
                </td>
              </tr>
            </tbody>
          </table>
        </ProjectTable>
      </Cards>
    </Container>
  );
}
