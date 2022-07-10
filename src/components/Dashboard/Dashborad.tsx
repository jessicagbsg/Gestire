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
          <button className="green" onClick={onOpenCreateProjectModal}>
            New Project
          </button>
        </div>
      </Cards>
      <Cards title="ACTIVITIES PROGRESS">
        <div>
          <p>
            You don't have projects. To create a new task, you need to have a
            project.
          </p>
          <button className="green">New Activity</button>
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
