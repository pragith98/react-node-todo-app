export interface TodoItem {
  id:     string;
  userId: string;
  task:   string;
  isDone: boolean;
}

export type TodoItemToCreate = Omit<TodoItem, 'id' | 'isDone'>;