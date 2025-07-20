import type { TodoItem } from "../types/todo.type";
import Button from "./Button";
import { FaTrashAlt, FaCheckCircle, FaTimes } from "react-icons/fa";

interface TodoCardProps {
  item: TodoItem;
}

function TodoCard({ item }: TodoCardProps) {
  return (
    <div className="flex my-3">
      <div className="w-20 sm:w-40 md:w-60 flex flex-col justify-center">
        <p className="text-sm/6 font-semibold text-gray-900">{item.task}</p>
      </div>
      <div className="flex flex-row gap-5">
        <Button variant="danger">
          <FaTrashAlt />
        </Button>

        <Button variant="secondary">
          <FaCheckCircle />
        </Button>

        <Button variant="secondary">
          <FaTimes />
        </Button>
      </div>
    </div>
  );
}

export default TodoCard;
