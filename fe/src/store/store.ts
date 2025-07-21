import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todo.slice';
import authReducer from './auth.slice';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE']
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;