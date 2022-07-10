import { Cards } from "../Cards/Cards";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Cards title="PROJECTS PROGRESS">
        <p>you</p>
        <button>New Project</button>
      </Cards>
      <Cards title="ACTIVITIES PROGRESS">
        <p>you</p>
        <button>New Project</button>
      </Cards>
      <Cards title="DELAYED PROJECTS">
        <p>you</p>
        <button>New Project</button>
      </Cards>
      <Cards title="DELAYED ACTIVITIES">
        <p>you</p>
        <button>New Project</button>
      </Cards>
    </Container>
  );
}
