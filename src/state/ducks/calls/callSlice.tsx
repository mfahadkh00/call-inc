import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CallState, CallResponse, CallStateRaw } from "../../types";

const initialState: CallState = {
  data: {
    nodes: [],
    totalCount: 0,
    hasNextPage: false,
  },
  loading: false,
  errors: [],
};

const callSlice = createSlice({
  name: "calls",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setCalls: (state, action: PayloadAction<CallResponse>) => {
      state.data = action.payload;
    },
    setErrors: (state, action: PayloadAction<string[]>) => {
      state.errors = action.payload;
    },
    addNote: (state) => {
      state.loading = false;
    },
    updateCalls: (state, action: PayloadAction<CallStateRaw[]>) => {
      state.data.nodes = action.payload;
    },
    updateArchiveCall: (state, action: PayloadAction<string>) => {
      const updatedNodes = state.data.nodes.map((node) => {
        if (node.id === action.payload) {
          return {
            ...node,
            is_archived: !node.is_archived,
          };
        } else {
          return node;
        }
      });

      return {
        ...state,
        data: {
          ...state.data,
          nodes: updatedNodes,
        },
      };
    },
  },
});

export const {
  setLoading,
  setCalls,
  setErrors,
  addNote,
  updateCalls,
  updateArchiveCall,
} = callSlice.actions;

export default callSlice.reducer;
