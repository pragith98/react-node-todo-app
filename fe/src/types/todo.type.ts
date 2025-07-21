export interface TodoItem {
  id:     number;
  userId: number;
  task:   string;
}

export type TodoItemToCreate = Omit<TodoItem, 'id'>;