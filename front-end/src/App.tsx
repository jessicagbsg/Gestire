import Modal from "react-modal";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ActivitiesList } from "./pages/ActivitiesList/ActivitiesList";
import { Dashboard } from "./pages/Dashboard/Dashborad";
import { Header } from "./components/Header/Header";
import { ProjectsList } from "./pages/ProjectsList/ProjectsList";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");

export function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/projects" element={<ProjectsList />}></Route>
            <Route
              path="/projects/:id/activities"
              element={<ActivitiesList />}
            ></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
