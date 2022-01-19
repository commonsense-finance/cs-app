import { RootState } from "@redux/store";
import { IToken } from "@redux/types";
import { createSlice } from "@reduxjs/toolkit";
import { tokensProduct } from "src/constants/tokens";

interface ITokens {
  active: IToken
}

const initialState: ITokens = {
  active: tokensProduct[0]
};

const tokensSlice = createSlice({
  name: "tokens",
  initialState,
  reducers: {
    setActiveToken: (state, action) => {
      state.active = tokensProduct[action.payload]
    },
  },
});

export const { setActiveToken } = tokensSlice.actions;

export const selectActiveToken = (state: RootState) => state.tokens.active

export default tokensSlice.reducer;
