import { RootState } from "@redux/store";
import { createSlice } from "@reduxjs/toolkit";

interface IWeb3 {
  library: any
  chainId: number
  account: string
  balance: string
}

const initialState: IWeb3 = {
  library: null,
  chainId: 0,
  account: '',
  balance: '',
};

const web3Slice = createSlice({
  name: "web3",
  initialState,
  reducers: {
    updateWeb3: (state, action ) => {
      state.library = action.payload.library
      state.chainId = action.payload.chainId
      state.account = action.payload.account
      console.log('Update Web3 -> ', action.payload.account )
    },
  },
});

export const { updateWeb3 } = web3Slice.actions;

export const selectWeb3 = (state: RootState) => state.web3

export default web3Slice.reducer;
