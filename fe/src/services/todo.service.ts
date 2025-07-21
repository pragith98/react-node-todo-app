import type { TodoItem, TodoItemToCreate } from "../types/todo.type";


export const fetchTodos = async (): Promise<TodoItem[]> => {
  return [
    { id: 1, userId: 1, task: "task 1" },
    { id: 2, userId: 2, task: "task 2" },
    { id: 3, userId: 3, task: "task 3" },
    { id: 4, userId: 4, task: "task 4" },
  ];
}

export const createTodo = async (
  todoItem: TodoItemToCreate
): Promise<TodoItem> => {
  return {
    ...todoItem,
    id: Math.floor(Math.random() * 1000000)
  };
}