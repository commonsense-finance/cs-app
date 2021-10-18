import { createSlice } from "@reduxjs/toolkit";

interface IErrors {
  error: any
}

const initialState: IErrors = {
  error: null
};

const counterSlice = createSlice({
  name: "errors",
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload
    },
  },
});

export const { setError } = counterSlice.actions;

export default counterSlice.reducer;
