import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { TodoItem } from "../types/todo.type";
import { fetchTodos } from "../services/todo.service";

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

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
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
      });
  }
});

export default todoSlice.reducer;