import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ActivitiesList } from "./components/ActivitiesList/ActivitiesList";
import { Dashboard } from "./components/Dashboard/Dashborad";
import { Header } from "./components/Header/Header";
import { ProjectsList } from "./components/ProjectsList/ProjectsList";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/projectsList" element={<ProjectsList />}></Route>
            <Route path="/activitiesList" element={<ActivitiesList />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
