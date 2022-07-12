import { Request, Response } from "express"
import ProjectService from "../services/project-service"

export default class ProjectController {
  projectService: ProjectService

  constructor() {
    this.projectService = new ProjectService()
  }

  async add(req: Request, res: Response): Promise<void> {
    try {
      // validate required fields
      if (!req.body.name) {
        res.status(400).send({
          message: "Project name is required",
        })
      }
      if (!req.body.description) {
        res.status(400).send({
          message: "Project description is required",
        })
      }
      if (!this.projectService) {
        this.projectService = new ProjectService()
      }
      const project = await this.projectService.add(req.body)

      res.status(201).json(project)
    } catch (err) {
      console.log(err)
      res.status(400).json({
        message: err.message,
      })
    }
  }

  async list(req: Request, res: Response): Promise<void> {
    try {
      if (!this.projectService) {
        this.projectService = new ProjectService()
      }
      const projects = await this.projectService.list()

      res.status(200).json(projects)
    } catch (err) {
      console.log(err)
      res.status(400).json({
        message: err.message,
      })
    }
  }

  async addActivity(req: Request, res: Response): Promise<void> {
    try {
      // validate required fields
      if (!req.body.name) {
        res.status(400).send({
          message: "Project name is required",
        })
      }
      if (!req.body.description) {
        res.status(400).send({
          message: "Project description is required",
        })
      }
      if (!this.projectService) {
        this.projectService = new ProjectService()
      }
      const activity = await this.projectService.addActivity({
        projectId: req.params.id,
        ...req.body,
      })

      res.status(201).json(activity)
    } catch (err) {
      console.log(err)
      res.status(400).json({
        message: err.message,
      })
    }
  }

  async listActivities(req: Request, res: Response): Promise<void> {
    try {
      if (!this.projectService) {
        this.projectService = new ProjectService()
      }
      const activities = await this.projectService.listActivities(req.params.id)

      res.status(200).json(activities)
    } catch (err) {
      console.log(err)
      res.status(400).json({
        message: err.message,
      })
    }
  }

  async listDelayedProjectsAndActivities(req: Request, res: Response): Promise<void> {
    try {
      if (!this.projectService) {
        this.projectService = new ProjectService()
      }
      const response = await this.projectService.listDelayedProjectsAndActivities()
      console.log("response", response)
      res.status(200).json(response)
    } catch (err) {
      console.log(err)
      res.status(400).json({
        message: err.message,
      })
    }
  }
}
