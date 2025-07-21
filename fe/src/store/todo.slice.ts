import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { TodoItem } from "../types/todo.type";
import { fetchTodos, createTodo, deleteTodo, toggleStatusToDo } from "../services/todo.service";

interface TodoState {
  items: TodoItem[];
  loading: boolean;
  error: string | null;
}

const initialState: TodoState = {
  items: [],
  loading: false,
  error: null
};

export const getTodos = createAsyncThunk('todos/fetch', fetchTodos);
export const addTodo = createAsyncThunk('todos/create', createTodo);
export const removeTodo = createAsyncThunk('todos/delete', deleteTodo);
export const toggleTodo = createAsyncThunk('todos/toggleStatusTodo', toggleStatusToDo);

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // Fetch
      .addCase(getTodos.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to fetch todos'
      })

      // Create
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })

      // Delete
      .addCase(removeTodo.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      })

      // Toggle Status
      .addCase(toggleTodo.fulfilled, (state, action) => {
        state.items = state.items.map(item => {
          if (item.id !== action.payload) {
            return item;
          }

          return { ...item, isDone: !(item.isDone) }
        });
      });
  }
});

export default todoSlice.reducer;