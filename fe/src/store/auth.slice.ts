import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserAccount, loginToUserAccount } from "../services/auth.service";
import type { User } from "../types/user.type";
import { getAuth, signOut } from "firebase/auth";

interface AuthState {
  isAuth: boolean;
  user: User | null;
  error: string | null;
}

const firebaseUser = getAuth().currentUser;

const initialState: AuthState = {
  isAuth: !!firebaseUser,
  user: firebaseUser ? { uid: firebaseUser.uid, email: firebaseUser.email ?? "" } : null,
  error: null
};

export const registerUser = createAsyncThunk('auth/create', createUserAccount);
export const userLogin = createAsyncThunk('auth/login', loginToUserAccount);
export const logoutUser = createAsyncThunk('auth/logout', async (_, { dispatch }) => {
  const auth = getAuth();
  await signOut(auth);
  dispatch(clearUser());
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetAuthError(state) {
      state.error = null;
    },
    setUser(state, action) {
      state.isAuth = true;
      state.user = action.payload;
      state.error = null;
    },
    clearUser(state) {
      state.isAuth = false;
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      // Register
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isAuth = true;
        state.user = action.payload;
        state.error = null
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.error.message ?? 'User cannot register';
      })

      // Login
      .addCase(userLogin.fulfilled, (state, action) => {
        state.isAuth = true;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.error = action.error.message ?? 'User cannot login';
      })
  }
});

export const { resetAuthError, setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;