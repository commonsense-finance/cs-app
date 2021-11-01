import { RootState } from "@redux/store";
import { createSlice } from "@reduxjs/toolkit";
import { BigNumberish } from '@ethersproject/bignumber'

interface IAccount {
  address: null | string
  balance: BigNumberish
}

const initialState: IAccount = {
  address: null,
  balance: 0
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    set: (state, action ) => {
      state.address = action.payload.address
      state.balance = action.payload.balance
    },
  },
});

export const { set } = accountSlice.actions;

export const selectAccount = (state: RootState) => state.account

export default accountSlice.reducer;
