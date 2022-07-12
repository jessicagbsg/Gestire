import { Activity } from "@prisma/client"
import { Project } from "../models/project-types"
import Repository from "../database/prisma/repository"

export default class UserService {
  repository: Repository

  constructor() {
    this.repository = new Repository()
  }

  async add(project: Project): Promise<Project> {
    if (project.name.length <= 0) {
      throw new Error("Project must have a name.")
    }

    if (project.start_at === null) {
      throw new Error("Project must have a start date.")
    }

    if (project.end_at === null) {
      throw new Error("Project must have an end date.")
    }

    const result = await this.repository.addProject(project)
    return result
  }

  async list(): Promise<Project[]> {
    return this.repository.listProjects()
  }

  async addActivity(activity: Activity): Promise<Activity> {
    if (activity.name.length <= 0) {
      throw new Error("Activity must have a name.")
    }

    if (activity.start_at === null) {
      throw new Error("Activity must have a start date.")
    }

    if (activity.end_at === null) {
      throw new Error("Activity must have an end date.")
    }

    const result = await this.repository.addActivity(activity)
    return result
  }

  async listActivities(id: string): Promise<Activity[]> {
    return this.repository.listActivities(id)
  }

  async listDelayedProjectsAndActivities(): Promise<{
    delayedProjects: number
    finishedProjects: number
    ongoingProjects: number
    delayedActivities: number
    finishedActivities: number
    ongoingActivities: number
    delayedProjectsNames: string
    delayedActivitiesNames: string
  }> {
    const projects = await this.repository.listProjects()
    let delayedProjects = 0
    let finishedProjects = 0
    let ongoingProjects = 0
    let delayedActivities = 0
    let finishedActivities = 0
    let ongoingActivities = 0
    let delayedProjectsNames = ""
    let delayedActivitiesNames = ""

    await Promise.all(
      projects.map(async project => {
        let isDelayed = false
        let isFullCompleted = true
        const activities = await this.repository.listActivities(project.id)
        activities.forEach(activity => {
          if (activity.is_completed) {
            finishedActivities += 1
          } else if (activity.end_at > project.end_at) {
            isDelayed = true
            delayedActivities += 1
            isFullCompleted = false
            delayedActivitiesNames += `${activity.name}, `
          } else {
            isFullCompleted = false
            ongoingActivities += 1
          }
        })
        if (isDelayed) {
          delayedProjects += 1
          delayedProjectsNames += `${project.name}, `
        } else if (isFullCompleted) {
          finishedProjects += 1
        } else {
          ongoingProjects += 1
        }
      })
    )

    return {
      delayedProjects,
      finishedProjects,
      ongoingProjects,
      delayedActivities,
      finishedActivities,
      ongoingActivities,
      delayedProjectsNames,
      delayedActivitiesNames,
    }
  }
}
