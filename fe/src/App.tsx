import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import TodoListPage from "./pages/TodoListPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoListPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
