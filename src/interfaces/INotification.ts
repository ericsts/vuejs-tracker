export enum TypeNotification {
  OK,
  ALERT,
  ERROR
}

export interface INotification {
  title: string
  text: string
  type: TypeNotification
  id: number
}