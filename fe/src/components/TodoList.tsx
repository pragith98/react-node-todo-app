import { useEffect } from "react";
import TodoCard from "./TodoCard";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { getTodos } from "../store/todo.slice";

function TodoList() {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useSelector(
    (state: RootState) => state.todos
  );

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const listItems = items.map((item) => (
    <li key={item.id}>
      <TodoCard item={item} />
    </li>
  ));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex justify-center">
      <ul role="list" className="divide-y divide-gray-100">
        {listItems}
      </ul>
    </div>
  );
}

export default TodoList;
