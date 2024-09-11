import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    loginUser: (state, { payload }) => {
      state.user = payload;
    },

    updateUser: (state, { payload }) => {
      state.user = payload;
    },

    logoutUser: state => {
      state.user = null;
    },
  },
});

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["user"],
};

export const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);

export const { loginUser, updateUser, logoutUser } = authSlice.actions;

export default authSlice;
