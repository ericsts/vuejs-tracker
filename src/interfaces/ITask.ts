import IProject from "./IProject";

export default interface ITask {
  elapsedTime: number,
  description: string,
  project: IProject,
}