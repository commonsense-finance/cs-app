import { RootState } from "@redux/store";
import { IToken } from "@redux/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productTokens, tokensList } from "src/constants/tokens";
import { BigNumber, BigNumberish } from '@ethersproject/bignumber'

import { getAmountInToIssueExactSet, getEstimatedIssueSetAmount, getTokenBalance, issueExactSetFromToken, redeemExactSetForToken } from "src/services/tokenSet";

import { formatUnits, parseUnits } from "@ethersproject/units";
import { coingeckoGetTokenPrice } from "src/services/coingeckoApi";
import token from "pages/token/[id]";

interface ISwapStatus {
  amountFrom: string
  amountTo: string
  activeFocus: string
  action: string
  labelFrom: string
  labelTo: string
  enoughBalance: boolean
  response: any
}

const initialStateStatus: ISwapStatus = {
  amountFrom: '0',
  amountTo: '0',
  activeFocus: 'From',
  action: 'Invest',
  labelFrom: 'From',
  labelTo: 'To',
  enoughBalance: false,
  response: null
};

interface ISwap {
  token: IToken
  tokenList: IToken[]
  tokenListStatus: string
  tokenProduct: IToken
  status: ISwapStatus
}


const initialState: ISwap = {
  token: tokensList[0],
  tokenList: tokensList,
  tokenListStatus: '',
  tokenProduct: productTokens[0],
  status: initialStateStatus,
};



export const updateToken = createAsyncThunk(
  'swap/updateToken',
  async (tokenId: number, { getState }) => {

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
      state.status.action = action.payload
      state.status.labelFrom = action.payload === 'Invest' ? 'From' : 'To'
      state.status.labelTo = action.payload === 'Invest' ? 'To' : 'From'
    },
    setTokenFrom: (state, action) => {
      state.token = action.payload
    },
    setTokenTo: (state, action) => {
      state.tokenProduct = action.payload
    },
    setActiveFocus: (state, action) => {
      state.status.activeFocus = action.payload
    },
    setAmoutFrom: (state, action) => {
      state.status.amountFrom = action.payload
      state.status.enoughBalance = BigNumber.from(state.token.balance).gte(parseUnits(action.payload ? action.payload : '0'))
    },
    setAmoutTo: (state, action) => {
      state.status.amountTo = action.payload
      state.status.enoughBalance = BigNumber.from(state.tokenProduct.balance).gte(parseUnits(action.payload ? action.payload : '0'))
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
      state.status.amountTo = Number(formatUnits(action.payload.auxAmount)).toFixed(4)
      state.tokenListStatus = 'Succsess'
    })
    builder.addCase(swapGetEstimatedIssueSetAmount.rejected, (state, action) => {
      state.tokenListStatus = 'Failed'
    })

    builder.addCase(swapGetAmountInToIssueExactSet.pending, (state, action) => {
      state.tokenListStatus = 'Pending'
    }),
    builder.addCase(swapGetAmountInToIssueExactSet.fulfilled, (state, action) => {
      state.status.amountFrom = Number(formatUnits(action.payload.auxAmount)).toFixed(4)
      state.tokenListStatus = 'Succsess'
    })
    builder.addCase(swapGetAmountInToIssueExactSet.rejected, (state, action) => {
      state.tokenListStatus = 'Failed'
    })

    builder.addCase(swapIssueExactSetFromToken.pending, (state, action) => {
      state.tokenListStatus = 'Pending'
    }),
    builder.addCase(swapIssueExactSetFromToken.fulfilled, (state, action) => {
      state.status.response = action.payload.res
      state.tokenListStatus = 'Succsess'
    })
    builder.addCase(swapIssueExactSetFromToken.rejected, (state, action) => {
      state.tokenListStatus = 'Failed'
    })

    builder.addCase(swapRedeemExactSetForToken.pending, (state, action) => {
      state.tokenListStatus = 'Pending'
    }),
    builder.addCase(swapRedeemExactSetForToken.fulfilled, (state, action) => {
      state.status.response = action.payload.res
      state.tokenListStatus = 'Succsess'
    })
    builder.addCase(swapRedeemExactSetForToken.rejected, (state, action) => {
      state.tokenListStatus = 'Failed'
    })
  }
});

export const { setAction, setTokenFrom, setTokenTo, setActiveFocus, setAmoutFrom, setAmoutTo } = swapSlice.actions;

export const selectSwap = (state: RootState) => state.swap

export default swapSlice.reducer;
