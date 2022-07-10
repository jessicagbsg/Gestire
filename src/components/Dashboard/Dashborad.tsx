import { Cards } from "../Cards/Cards";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Cards title="PROJECTS PROGRESS" />
      <Cards title="ACTIVITIES PROGRESS" />
      <Cards title="DELAYED PROJECTS" />
      <Cards title="DELAYED ACTIVITIES" />
    </Container>
  );
}
