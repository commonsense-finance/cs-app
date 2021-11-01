import { RootState } from "@redux/store";
import { createSlice } from "@reduxjs/toolkit";

import { Contract, ContractInterface } from '@ethersproject/contracts'
import erc20ABI from '../../../services/ABI/erc20.json'
import tokenSetABI from '../../../services/ABI/tokenSet.json'
import exchangeIssuanceV2ABI from '../../../services/ABI/exchangeIssuanceV2.json'

import { BigNumberish } from '@ethersproject/bignumber'

function newContract(
  library: any,
  ABI: any,
  address?: string,
): Contract | undefined {
  const contract =
    !!address && !!ABI && !!library
      ? new Contract(address, ABI, library)
      : undefined
  return contract
}



interface IContracts {
  erc20: any
  tokenSet: any
  exchangeIssuanceV2: any
}

const initialState: IContracts = {
  erc20: erc20ABI,
  tokenSet: tokenSetABI, 
  exchangeIssuanceV2: exchangeIssuanceV2ABI
};



const contractsSlice = createSlice({
  name: "contracts",
  initialState,
  reducers: {
    set: (state, action ) => {
      //√state.values.push(new Contract('0xff3ee79CB4A7Fe0F78a3634cCfDbFc3CdCD65a64', tokenSetABI ))
    }
  },

});

export const { set } = contractsSlice.actions;

export const selectAccount = (state: RootState) => state.contracts

export default contractsSlice.reducer;
