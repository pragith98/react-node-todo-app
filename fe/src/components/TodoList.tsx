import type { TodoItem } from "../types/todo.type";
import TodoCard from "./TodoCard";

function TodoList() {
  const listItems = items.map((item) => (
    <li key={item.id}>
      <TodoCard item={item} />
    </li>
  ));

  return (
    <div className="flex justify-center">
      <ul role="list" className="divide-y divide-gray-100">
        {listItems}
      </ul>
    </div>
  );
}

const items: TodoItem[] = [
  { id: 1, userId: 1, task: "task 1" },
  { id: 2, userId: 2, task: "task 2" },
  { id: 3, userId: 3, task: "task 3" },
  { id: 4, userId: 4, task: "task 4" },
];

export default TodoList;
