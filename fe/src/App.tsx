import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import AuthPage from "./pages/AuthPage";
import TodoListPage from "./pages/TodoListPage";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./store/store";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { clearUser, setUser } from "./store/auth.slice";

function App() {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({ uid: user.uid, email: user.email ?? "" }));
      } else {
        dispatch(clearUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <BrowserRouter basename="/react-node-todo-app">
      <Routes>
        <Route path="/" element={isAuth ? <TodoListPage /> : <AuthPage />} />
        <Route
          path="/login"
          element={isAuth ? <TodoListPage /> : <AuthPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
