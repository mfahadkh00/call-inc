import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProfileRaw, ProfileState } from "../../types";

const initialState: ProfileState = {
  name: "",
  email: "",
  phone: "",
  github: "",
  address: "",
  isLoading: false,
  error: null,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    getProfileStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    getProfileSuccess: (state, action: PayloadAction<ProfileState>) => {
      return {
        ...action.payload,
        isLoading: false,
        error: null,
      };
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    updateProfileStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    updateProfileSuccess: (state, action: PayloadAction<ProfileRaw>) => {
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        error: null,
      };
    },
    setError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getProfileStart,
  getProfileSuccess,
  setLoading,
  updateProfileStart,
  updateProfileSuccess,
  setError,
} = profileSlice.actions;

export default profileSlice.reducer;
