import axios from "axios";

export const httpClient = axios.create({
  baseURL: "http://localhost:3005/api/v1",
});

export type Project = {
  id?: string;
  name: string;
  description: string;
  start_at: string;
  end_at: string;
  deleted_at?: Date;
};

export type Activity = {
  id?: string;
  name: string;
  projectId: string;
  description: string;
  start_at: string;
  end_at: string;
  is_completed: boolean;
  deleted_at?: Date;
  project?: Project;
};

export type DashboardResponse = {
  delayedProjects: number;
  finishedProjects: number;
  ongoingProjects: number;
  delayedActivities: number;
  finishedActivities: number;
  ongoingActivities: number;
  delayedProjectsNames: string;
  delayedActivitiesNames: string;
};

export async function createProject(data: Project) {
  const response = await httpClient.request<Project>({
    url: "/project",
    method: "post",
    data,
  });
  return response.data;
}

export async function listProjects() {
  const response = await httpClient.request<Project[]>({
    url: "/project",
    method: "get",
  });
  return response.data;
}

export async function createActivity(data: Activity, id: string) {
  const response = await httpClient.request<Activity>({
    url: `/project/${id}/activity`,
    method: "post",
    data,
  });
  return response.data;
}

export async function listActivity(id: string) {
  const response = await httpClient.request<Activity[]>({
    url: `/project/${id}/activity`,
    method: "get",
  });
  return response.data;
}

export async function getDashboard() {
  const response = await httpClient.request<DashboardResponse>({
    url: "/dashboard",
    method: "get",
  });
  return response.data;
}
