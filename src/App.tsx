import React from "react";
import Modal from "react-modal";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ActivitiesList } from "./pages/ActivitiesList/ActivitiesList";
import { CreateProjectModal } from "./components/Modals/CreateProjectModal";
import { CreateActivityModal } from "./components/Modals/CreateActivityModal";
import { Dashboard } from "./pages/Dashboard/Dashborad";
import { Header } from "./components/Header/Header";
import { ProjectsList } from "./pages/ProjectsList/ProjectsList";
import { GlobalStyle } from "./styles/global";
import { EditModal } from "./components/Modals/EditModal";
import { DeleteModal } from "./components/Modals/DeleteModal";

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

  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    React.useState(false);

  function handleOpenCreateActivityModal() {
    setIsCreateActivityModalOpen(true);
  }

  function handleCloseCreateActivityModal() {
    setIsCreateActivityModalOpen(false);
  }

  const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);

  function handleOpenEditModal() {
    setIsEditModalOpen(true);
  }

  function handleCloseEditModal() {
    setIsEditModalOpen(false);
  }

  const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false);

  function handleOpenDeleteModal() {
    setIsDeleteModalOpen(true);
  }

  function handleCloseDeleteModal() {
    setIsDeleteModalOpen(false);
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
                  onOpenCreateActivityModal={handleOpenCreateActivityModal}
                />
              }
            ></Route>
            <Route
              path="/projects"
              element={
                <ProjectsList
                  onOpenCreateProjectModal={handleOpenCreateProjectModal}
                  onOpenEditModal={handleOpenEditModal}
                  onOpenDeleteModal={handleOpenDeleteModal}
                />
              }
            ></Route>
            <Route
              path="/projects/:id/activities"
              element={
                <ActivitiesList
                  onOpenCreateActivityModal={handleOpenCreateActivityModal}
                  onOpenEditModal={handleOpenEditModal}
                  onOpenDeleteModal={handleOpenDeleteModal}
                />
              }
            ></Route>
          </Routes>
        </main>
      </BrowserRouter>

      <CreateProjectModal
        isOpen={isCreateProjectModalOpen}
        onRequestClose={handleCloseCreateProjectModal}
      />

      <CreateActivityModal
        isOpen={isCreateActivityModalOpen}
        onRequestClose={handleCloseCreateActivityModal}
      />

      <EditModal
        isOpen={isEditModalOpen}
        onRequestClose={handleCloseEditModal}
      />

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onRequestClose={handleCloseDeleteModal}
      />
    </div>
  );
}
