export type Project = {
  id?: string
  name: string
  description: string
  start_at: Date
  end_at: Date
  deleted_at: Date | null
}

export type Activity = {
  id?: string
  name: string
  projectId: string
  description: string
  start_at: Date
  end_at: Date
  is_completed: boolean
  deleted_at: Date | null
  project?: Project
}
