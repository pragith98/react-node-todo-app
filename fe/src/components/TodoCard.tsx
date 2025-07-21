import { useDispatch } from "react-redux";
import type { TodoItem } from "../types/todo.type";
import Button from "./Button";
import { FaTrashAlt, FaCheckCircle, FaTimes } from "react-icons/fa";
import type { AppDispatch } from "../store/store";
import { removeTodo, toggleTodo } from "../store/todo.slice";

interface TodoCardProps {
  item: TodoItem;
}

function TodoCard({ item }: TodoCardProps) {
  const dispatch = useDispatch<AppDispatch>();

  const onClickDelete = (id: string) => {
    dispatch(removeTodo(id));
  };

  const onClickToggle = (todoItem: TodoItem) => {
    dispatch(toggleTodo(todoItem));
  };

  const toggleStatusButton = (item: TodoItem) => {
    if (item.isDone) {
      return (
        <Button variant="secondary" onClick={() => onClickToggle(item)}>
          <FaTimes />
        </Button>
      );
    }

    return (
      <Button variant="secondary" onClick={() => onClickToggle(item)}>
        <FaCheckCircle />
      </Button>
    );
  };

  return (
    <div className="flex my-3">
      <div className="w-20 sm:w-40 md:w-60 flex flex-col justify-center">
        <p
          className={
            item.isDone ? taskNameCompletedStyle : taskNameNotCompletedStyle
          }
        >
          {item.task}
        </p>
      </div>
      <div className="flex flex-row gap-5">
        <Button variant="danger" onClick={() => onClickDelete(item.id)}>
          <FaTrashAlt />
        </Button>

        {toggleStatusButton(item)}
      </div>
    </div>
  );
}

const taskNameNotCompletedStyle = `
  text-sm/6 
  font-semibold 
  text-gray-900
`;

const taskNameCompletedStyle = `
  text-sm/6 
  font-semibold 
  text-gray-500
  line-through
`;

export default TodoCard;
