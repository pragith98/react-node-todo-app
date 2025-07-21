import { FaPlus } from "react-icons/fa";
import Button from "./Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";
import { addTodo } from "../store/todo.slice";
import type { TodoItemToCreate } from "../types/todo.type";

function TodoForm() {
  const dispatch = useDispatch<AppDispatch>();
  const [task, setTask] = useState("");

  const onClickSave = () => {
    if (task.length < 1) return;

    const todoItem: TodoItemToCreate = {
      task,
      userId: 2,
    };

    dispatch(addTodo(todoItem)).finally(() => setTask(""));
  };

  return (
    <div className="my-8 px-5 flex self-center">
      <form className="flex gap-5 flex-row ">
        <input
          name="task"
          type="text"
          value={task}
          className={inputFieldClasses}
          onChange={(event) => setTask(event.target.value)}
          placeholder="Enter your task here.."
        />

        <div className="w-40">
          <Button onClick={onClickSave}>
            <FaPlus className="mr-4 mt-1" />
            Add
          </Button>
        </div>
      </form>
    </div>
  );
}

const inputFieldClasses = `
  block 
  w-full 
  rounded-md 
  bg-white 
  px-3 
  py-1.5 
  text-base 
  text-gray-900 
  outline-1 -outline-offset-1 
  outline-gray-300 
  placeholder:text-gray-400 
  focus:outline-2 
  focus:-outline-offset-2 
  focus:outline-indigo-600 
  sm:text-sm/6
`;

export default TodoForm;
