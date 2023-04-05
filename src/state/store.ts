import { CallState, AuthState, CallResponse, ProfileRaw, ProfileState } from "./types";
import { configureStore } from "@reduxjs/toolkit";
import callReducer from "./ducks/calls/callSlice";
import "./global.d.ts";
import authSlice from "./ducks/auth/authSlice";
import profileSlice from "./ducks/profile/profileSlice";

export interface IApplicationState {
  calls: CallState;
  auth: AuthState;
  profile: ProfileState;
}

const store = configureStore({
  reducer: {
    calls: callReducer,
    auth: authSlice,
    profile: profileSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
