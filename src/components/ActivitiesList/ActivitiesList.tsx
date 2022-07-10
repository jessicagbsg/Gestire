import { Container, ActivitiesTable } from "./styles";
import edit from "../../Assets/editBlue.svg";
import del from "../../Assets/deleteBlue.svg";
import { Cards } from "../Cards/Cards";

export function ActivitiesList() {
  return (
    <Container>
      <Cards title="ACTIVITIES LIST">
        <ActivitiesTable>
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
        </ActivitiesTable>
      </Cards>
    </Container>
  );
}
