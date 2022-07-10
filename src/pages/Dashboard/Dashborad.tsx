import { NavLink } from "react-router-dom";
import { Cards } from "../../components/Cards/Cards";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Cards title="PROJECTS PROGRESS">
        <div>
          <p>You don't have projects</p>
          <NavLink to="/projects" aria-label="Gestire - Projects List">
            <button className="green">New Project</button>
          </NavLink>
        </div>
      </Cards>
      <Cards title="ACTIVITIES PROGRESS">
        <div>
          <p>
            You don't have projects. To create a new task, you need to have a
            project.
          </p>
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
