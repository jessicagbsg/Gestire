import React from "react";
import { NavLink } from "react-router-dom";
import { getDashboard } from "../../api";
import { Cards } from "../../components/Cards/Cards";
import { Container } from "./styles";
import { VictoryPie } from "victory";

export function Dashboard() {
  const [projects, setProjects] = React.useState(false);
  const [delayedProjects, setDelayedProjects] = React.useState(0);
  const [finishedProjects, setFinishedProjects] = React.useState(0);
  const [ongoingProjects, setOngoingProjects] = React.useState(0);
  const [delayedActivities, setDelayedActivities] = React.useState(0);
  const [finishedActivities, setFinishedActivities] = React.useState(0);
  const [ongoingActivities, setOngoingActivities] = React.useState(0);
  const [delayedActivitiesNames, setdelayedActivitiesNames] =
    React.useState("");
  const [delayedProjectsNames, setdelayedProjectsNames] = React.useState("");

  React.useEffect(() => {
    async function LoadDashboard() {
      const response = await getDashboard();
      setDelayedProjects(response.delayedProjects);
      setFinishedProjects(response.finishedProjects);
      setOngoingProjects(response.ongoingProjects);
      setDelayedActivities(response.delayedActivities);
      setFinishedActivities(response.finishedActivities);
      setOngoingActivities(response.ongoingActivities);
      setdelayedActivitiesNames(response.delayedActivitiesNames);
      setdelayedProjectsNames(response.delayedProjectsNames);
    }
    LoadDashboard();
    setProjects(true);
  }, []);

  return (
    <Container>
      <Cards title="PROJECTS PROGRESS">
        {projects ? (
          <VictoryPie
            style={{
              data: {
                fillOpacity: 0.9,
                stroke: "#fff",
                strokeWidth: 1,
              },
              labels: {
                fontSize: 14,
                fill: "#333",
              },
            }}
            height={300}
            colorScale={["#DB797D", "#7AA39C", "#798FDB"]}
            data={[
              { x: "Delayed", y: delayedProjects },
              { x: "Finished", y: finishedProjects },
              { x: "OnGoing", y: ongoingProjects },
            ]}
          />
        ) : (
          <div>
            <p>You don't have projects</p>
            <NavLink to="/projects" aria-label="Gestire - Projects List">
              <button className="green">New Project</button>
            </NavLink>
          </div>
        )}
      </Cards>
      <Cards title="ACTIVITIES PROGRESS">
        {projects ? (
          <VictoryPie
            style={{
              data: {
                fillOpacity: 0.9,
                stroke: "#fff",
                strokeWidth: 1,
              },
              labels: {
                fontSize: 14,
                fill: "#333",
              },
            }}
            height={300}
            colorScale={["#DB797D", "#7AA39C", "#798FDB"]}
            data={[
              { x: "Delayed", y: delayedActivities },
              { x: "Finished", y: finishedActivities },
              { x: "OnGoing", y: ongoingActivities },
            ]}
          />
        ) : (
          <div>
            <p>
              You don't have projects. To create a new task, you need to have a
              project.
            </p>
          </div>
        )}
      </Cards>
      <Cards title="DELAYED PROJECTS">
        {delayedProjects ? (
          <ul>
            <li>{delayedProjectsNames}</li>
          </ul>
        ) : (
          <div>
            <p>Create a project to see the list of delayed projects.</p>
          </div>
        )}
      </Cards>
      <Cards title="DELAYED ACTIVITIES">
        {delayedActivities ? (
          <ul>
            <li>{delayedActivitiesNames}</li>
          </ul>
        ) : (
          <div>
            <p>Create an activity to see the list of delayed activities</p>
          </div>
        )}
      </Cards>
    </Container>
  );
}
