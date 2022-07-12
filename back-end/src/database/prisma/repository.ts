/* eslint-disable class-methods-use-this */
import { Project as ProjectModel, Activity as ActivityModel } from "@prisma/client"
import { Project, Activity } from "../../models/project-types"
import { prismaClient } from "./prismaClient"

export default class Repository {
  async addProject(project: Project): Promise<ProjectModel> {
    try {
      return await prismaClient.project.create({
        data: {
          ...project,
        },
      })
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async listProjects(): Promise<ProjectModel[]> {
    try {
      return await prismaClient.project.findMany({
        orderBy: [
          {
            created_at: "desc",
          },
        ],
      })
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async addActivity(activity: Activity): Promise<ActivityModel> {
    try {
      return await prismaClient.activity.create({
        data: {
          name: activity.name,
          description: activity.description,
          start_at: activity.start_at,
          end_at: activity.end_at,
          is_completed: activity.is_completed,
          projectId: activity.projectId,
        },
      })
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async listActivities(projectId: string): Promise<ActivityModel[]> {
    try {
      return await prismaClient.activity.findMany({
        where: {
          projectId,
        },
        orderBy: [
          {
            created_at: "desc",
          },
        ],
      })
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async listDelayedActivities(projectId: string, projectEndDate: Date): Promise<ActivityModel[]> {
    try {
      console.log(projectEndDate)
      return await prismaClient.activity.findMany({
        where: {
          projectId,
          end_at: {
            gt: projectEndDate,
          },
          is_completed: false,
        },
        orderBy: [
          {
            created_at: "desc",
          },
        ],
      })
    } catch (error) {
      throw new Error(error.message)
    }
  }
}
