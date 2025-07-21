import { 
  addDoc, 
  collection, 
  deleteDoc, 
  doc, 
  getDocs, 
  query, 
  updateDoc, 
  where 
} from "firebase/firestore";
import type { TodoItem, TodoItemToCreate } from "../types/todo.type";
import { auth, db } from "../firebase";

const todosCollection = collection(db, "todos");

export const fetchTodos = async (): Promise<TodoItem[]> => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error("User not authenticated");

    const q = query(todosCollection, where("userId", "==", user.uid));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      userId: doc.data().userId,
      task: doc.data().task,
      isDone: doc.data().isDone,
    }));
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
}

export const createTodo = async (
  todoItem: TodoItemToCreate
): Promise<TodoItem> => {
  try {
    const { task } = todoItem;
    const user = auth.currentUser;
    if (!user) throw new Error("User not authenticated");
  
    const todoRef = await addDoc(todosCollection, {
      userId: user.uid,
      task,
      isDone: false,
    });

    return { id: todoRef.id, userId: user.uid, task, isDone: false };
  } catch (error) {
    console.error("Error creating todo:", error);
    throw error;
  }
}

export const deleteTodo = async (id: string): Promise<string> => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error("User not authenticated");

    const todoRef = doc(todosCollection, id);
    await deleteDoc(todoRef);
    return id;
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw error;
  }
}

export const toggleStatusToDo = async (todoItem: TodoItem): Promise<string> => {
  try {
    const { id, isDone } = todoItem;
    const user = auth.currentUser;
    if (!user) throw new Error("User not authenticated");

    const updatedItem = {
      ...todoItem,
      isDone: !isDone
    };

    const todoRef = doc(todosCollection, todoItem.id);
    await updateDoc(todoRef, updatedItem);
    return id;
  } catch (error) {
    console.error("Error updating todo:", error);
    throw error;
  }
}