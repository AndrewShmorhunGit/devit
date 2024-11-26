export enum TaskStatusEnum {
  TO_DO = "to do",
  IN_PROGRESS = "in progress",
  DONE = "done",
}

export const EP = { tasks: { index: "/tasks", params: { id: "/tasks/:id" } } };
