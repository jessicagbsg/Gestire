import React from "react";
import Modal from "react-modal";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ActivitiesList } from "./components/ActivitiesList/ActivitiesList";
import { CreateProjectModal } from "./components/CreateProjectModal/CreateProjectModal";
import { Dashboard } from "./components/Dashboard/Dashborad";
import { Header } from "./components/Header/Header";
import { ProjectsList } from "./components/ProjectsList/ProjectsList";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");

export function App() {
  const [isCreateProjectModalOpen, setIsCreateProjectModalOpen] =
    React.useState(false);

  function handleOpenCreateProjectModal() {
    setIsCreateProjectModalOpen(true);
  }

  function handleCloseCreateProjectModal() {
    setIsCreateProjectModalOpen(false);
  }
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Dashboard
                  onOpenCreateProjectModal={handleOpenCreateProjectModal}
                />
              }
            ></Route>
            <Route path="/projectsList" element={<ProjectsList />}></Route>
            <Route path="/activitiesList" element={<ActivitiesList />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
      <CreateProjectModal
        isOpen={isCreateProjectModalOpen}
        onRequestClose={handleCloseCreateProjectModal}
      />
    </div>
  );
}
