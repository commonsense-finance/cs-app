import { RootState } from "@redux/store";
import { IToken } from "@redux/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productTokens, tokensList } from "src/constants/tokens";
import { BigNumber, BigNumberish } from '@ethersproject/bignumber'
import { getAmountInToIssueExactSet, getEstimatedIssueSetAmount, getTokenBalance, issueExactSetFromToken, redeemExactSetForToken } from "src/services/tokenSet";

import { formatUnits } from "@ethersproject/units";
import { coingeckoGetTokenPrice } from "src/services/coingeckoApi";

interface ISwapResult {
  amountFrom: string
  amountTo: string
  activeFocus: string
  action: string
  labelFrom: string
  labelTo: string
}

const initialStateResult: ISwapResult = {
  amountFrom: '0',
  amountTo: '0',
  activeFocus: 'From',
  action: 'Invest',
  labelFrom: 'From',
  labelTo: 'To'
};

interface ISwap {
  token: IToken
  tokenList: IToken[]
  tokenListStatus: string
  tokenProduct: IToken
  result: ISwapResult
}


const initialState: ISwap = {
  token: tokensList[0],
  tokenList: tokensList,
  tokenListStatus: '',
  tokenProduct: productTokens[0],
  result: initialStateResult,
};


export const updateToken = createAsyncThunk(
  'swap/updateToken',
  async (tokenId: number, { getState }) => {
    
    console.log('Swap/updateToken...', tokenId)

    const {tokenList} = (getState() as RootState).swap
    const token = tokenList[tokenId]
    const web3 = (getState() as RootState).web3

    let auxList: IToken[] = []
    let auxTotalBalance: BigNumberish = 0

    const auxPrice = await coingeckoGetTokenPrice(token.contract)
    const auxBalance = await getTokenBalance(token.contractPolygon, web3)
    
    // const auxTotal =  getTokenTotal(auxPrice, auxBalance)
    
    return { auxPrice, auxBalance  }
  }
)

export const swapGetEstimatedIssueSetAmount = createAsyncThunk(
  'swap/swapGetEstimatedIssueSetAmount',
  async (props: {contractAddressTo: string, contractAddressFrom: string, amountFrom: BigNumberish}, { getState }) => {
     const web3 = (getState() as RootState).web3

     const auxAmount =  await getEstimatedIssueSetAmount(props.contractAddressTo, props.contractAddressFrom, props.amountFrom, web3)
    
    return { auxAmount }
  }
)

export const swapGetAmountInToIssueExactSet = createAsyncThunk(
  'swap/swapGetAmountInToIssueExactSet',
  async (props: {contractAddressTo: string, contractAddressFrom: string, amountTo: BigNumberish}, { getState }) => {
     const web3 = (getState() as RootState).web3

     const auxAmount =  await getAmountInToIssueExactSet(props.contractAddressTo, props.contractAddressFrom, props.amountTo, web3)
    
    return { auxAmount }
  }
)

export const swapIssueExactSetFromToken = createAsyncThunk(
  'swap/swapIssueExactSetFromToken',
  async (props: {contractAddressTo: string, contractAddressFrom: string, amountTo: BigNumberish, amountFrom: BigNumberish}, { getState }) => {
     const web3 = (getState() as RootState).web3

     const res =  await issueExactSetFromToken(props.contractAddressTo, props.contractAddressFrom, props.amountTo, props.amountFrom, web3)
    
    return { res }
  }
)

export const swapRedeemExactSetForToken = createAsyncThunk(
  'swap/swapRedeemExactSetForToken',
  async (props: {contractAddressTo: string, contractAddressFrom: string, amountTo: BigNumberish, amountFrom: BigNumberish}, { getState }) => {
     const web3 = (getState() as RootState).web3

     const res =  await redeemExactSetForToken(props.contractAddressTo, props.contractAddressFrom, props.amountTo, props.amountFrom, web3)
    
    return { res }
  }
)

const swapSlice = createSlice({
  name: "swap",
  initialState,
  reducers: {
    setAction: (state, action) => {
      state.result.action = action.payload
      state.result.labelFrom = action.payload === 'Invest' ? 'From' : 'To'
      state.result.labelTo = action.payload === 'Invest' ? 'To' : 'From'
    },
    setTokenFrom: (state, action) => {
      state.token = action.payload
    },
    setTokenTo: (state, action) => {
      state.tokenProduct = action.payload
    },
    setActiveFocus: (state, action) => {
      state.result.activeFocus = action.payload
    },
    setAmoutFrom: (state, action) => {
      state.result.amountFrom = action.payload
    },
    setAmoutTo: (state, action) => {
      state.result.amountTo = action.payload
    },
    invest: (state) => {
      console.log('Action Invest')
    },
  },

  extraReducers: (builder) => {
    builder.addCase(updateToken.pending, (state, action) => {
      state.tokenListStatus = 'Pending'
    }),
    builder.addCase(updateToken.fulfilled, (state, action) => {
      state.token.balance = action.payload.auxBalance
      state.token.price = action.payload.auxPrice
      state.tokenListStatus = 'Succsess'
    })
    builder.addCase(updateToken.rejected, (state, action) => {
      state.tokenListStatus = 'Failed'
    })

    builder.addCase(swapGetEstimatedIssueSetAmount.pending, (state, action) => {
      state.tokenListStatus = 'Pending'
    }),
    builder.addCase(swapGetEstimatedIssueSetAmount.fulfilled, (state, action) => {
      state.result.amountTo = Number(formatUnits(action.payload.auxAmount)).toFixed(4)
      state.tokenListStatus = 'Succsess'
    })
    builder.addCase(swapGetEstimatedIssueSetAmount.rejected, (state, action) => {
      state.tokenListStatus = 'Failed'
    })

    builder.addCase(swapGetAmountInToIssueExactSet.pending, (state, action) => {
      state.tokenListStatus = 'Pending'
    }),
    builder.addCase(swapGetAmountInToIssueExactSet.fulfilled, (state, action) => {
      state.result.amountFrom = Number(formatUnits(action.payload.auxAmount)).toFixed(4)
      state.tokenListStatus = 'Succsess'
    })
    builder.addCase(swapGetAmountInToIssueExactSet.rejected, (state, action) => {
      state.tokenListStatus = 'Failed'
    })

    builder.addCase(swapIssueExactSetFromToken.pending, (state, action) => {
      state.tokenListStatus = 'Pending'
    }),
    builder.addCase(swapIssueExactSetFromToken.fulfilled, (state, action) => {
      state.tokenListStatus = 'Succsess'
    })
    builder.addCase(swapIssueExactSetFromToken.rejected, (state, action) => {
      state.tokenListStatus = 'Failed'
    })

    builder.addCase(swapRedeemExactSetForToken.pending, (state, action) => {
      state.tokenListStatus = 'Pending'
    }),
    builder.addCase(swapRedeemExactSetForToken.fulfilled, (state, action) => {
      state.tokenListStatus = 'Succsess'
    })
    builder.addCase(swapRedeemExactSetForToken.rejected, (state, action) => {
      state.tokenListStatus = 'Failed'
    })
  }
});

export const { setAction, setTokenFrom, setTokenTo, setActiveFocus, setAmoutFrom, setAmoutTo, invest } = swapSlice.actions;

export const selectSwap = (state: RootState) => state.swap

export default swapSlice.reducer;
