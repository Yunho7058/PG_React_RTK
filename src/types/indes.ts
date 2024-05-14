export interface ITask {
  taskId: string;
  taskName: string;
  taskDescription: string;
  taskOwner: string;
}
export interface ILogItem {
  logId: string;
  logAuthor: string;
  logMessage: string;
  logTimestamp: string;
}
export interface IBoard {
  boarderId: string;
  boarderName: string;
  lists: IList[];
}
export interface IList {
  listsId: string;
  listName: string;
  task: ITask[];
}
