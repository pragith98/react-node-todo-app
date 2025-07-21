export interface TodoItem {
  id:     number;
  userId: number;
  task:   string;
  isDone: boolean;
}

export type TodoItemToCreate = Omit<TodoItem, 'id' | 'isDone'>;