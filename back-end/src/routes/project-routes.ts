import { Router } from "express"

import ProjectController from "../controllers/project-controller"

const projectController = new ProjectController()

export default (router: Router): void => {
  router.post(`/project`, projectController.add.bind(this))
  // router.patch(`/project/:id`, projectController.update.bind(this))
  // router.delete(`/project/:id`, projectController.update.bind(this))
  router.get(`/project`, projectController.list.bind(this))
  // router.get(`/project/:id`, projectController.add.bind(this))
  router.post(`/project/:id/activity`, projectController.addActivity.bind(this))
  router.get(`/project/:id/activity`, projectController.listActivities.bind(this))
  router.get(`/dashboard`, projectController.listDelayedProjectsAndActivities.bind(this))
}
