import { Button } from "../../styles/Button";
import { Cards } from "../Cards/Cards";
import { Container } from "./styles";

interface Props {
  onOpenCreateProjectModal: () => void;
}
export function Dashboard({ onOpenCreateProjectModal }: Props) {
  return (
    <Container>
      <Cards title="PROJECTS PROGRESS">
        <div>
          <p>You don't have projects</p>
          <Button onClick={onOpenCreateProjectModal}>New Project</Button>
        </div>
      </Cards>
      <Cards title="ACTIVITIES PROGRESS">
        <div>
          <p>
            You don't have projects. To create a new task, you need to have a
            project.
          </p>
          <Button>New Activity</Button>
        </div>
      </Cards>
      <Cards title="DELAYED PROJECTS">
        <div>
          <p>Create a project to see the list of delayed projects.</p>
        </div>
      </Cards>
      <Cards title="DELAYED ACTIVITIES">
        <div>
          <p>Create an activity to see the list of delayed activities</p>
        </div>
      </Cards>
    </Container>
  );
}
