import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

export default function TodoListPage() {
  return (
    <div className="flex flex-col">
      <Header />

      <TodoForm />

      <TodoList />
    </div>
  );
}
