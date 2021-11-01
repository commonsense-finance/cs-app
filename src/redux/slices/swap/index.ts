import { RootState } from "@redux/store";
import { IToken } from "@redux/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { tokens, tokensProduct } from "src/constants/tokens";
import { BigNumber, BigNumberish } from '@ethersproject/bignumber'

import { getAllowance, getAmountInToIssueExactSet, getEstimatedIssueSetAmount, getTokenBalance, getTokenPrice, getTokenTotal, issueExactSetFromToken, redeemExactSetForToken, setApprove } from "src/services/tokenSet";

import { formatUnits, parseUnits } from "@ethersproject/units";
import { coingeckoGetTokenPrice } from "src/services/coingeckoApi";

interface ISwapStatus {
  amountFrom: string
  amountTo: string
  activeFocus: string
  action: string
  enoughAllowance: boolean
  labelFrom: string
  labelTo: string
  enoughBalance: boolean
  response: any
  buttonValue: string
}

const initialStateStatus: ISwapStatus = {
  amountFrom: '0',
  amountTo: '0',
  activeFocus: 'From',
  action: 'Invest',
  enoughAllowance: false,
  labelFrom: 'From',
  labelTo: 'To',
  enoughBalance: false,
  response: null,
  buttonValue: 'Invest'
};

interface ISwap {
  token: IToken
  statusToken: string
  tokenProduct: IToken
  statusTokenProduct: string
  tokenList: IToken[]
  tokenProductList: IToken[]
  status: ISwapStatus
  statusStatus: string
}

const initialState: ISwap = {
  token: tokens[0],
  statusToken: 'Succsess',
  tokenProduct: tokensProduct[0],
  statusTokenProduct: 'Succsess',
  tokenList: tokens,
  tokenProductList: tokensProduct,
  status: initialStateStatus,
  statusStatus: 'Succsess',
};


export const swapUpdateToken = createAsyncThunk(
  'swap/swapUpdateToken',
  async (tokenId: number, { getState }) => {

    const {tokenList} = (getState() as RootState).swap
    const token = tokenList[tokenId]
    const web3 = (getState() as RootState).web3

    let auxList: IToken[] = []
    let auxTotalBalance: BigNumberish = 0

    const auxPrice = await coingeckoGetTokenPrice(token.contract)
    const auxBalance = await getTokenBalance(token.contractPolygon, web3)
    const auxAllowance = await getAllowance(token.contractPolygon, web3)
    
    // const auxTotal =  getTokenTotal(auxPrice, auxBalance)
    
    return { auxPrice, auxBalance, auxAllowance }
  }
)

export const swapUpdateTokenProduct = createAsyncThunk(
  'swap/swapUpdateTokenProduct',
  async (tokenId: number, { getState, dispatch }) => {

    const { tokensProduct } = (getState() as RootState).tokens
    const web3 = (getState() as RootState).web3
    const token = tokensProduct[tokenId]
    

    const auxPrice = await getTokenPrice(token.contractPolygon, web3)
    const auxBalance = await getTokenBalance(token.contractPolygon, web3)
    const auxTotal =  getTokenTotal(auxPrice, auxBalance)
    const auxAllowance = await getAllowance(token.contractPolygon, web3)
      
    return { auxPrice, auxBalance, auxTotal, auxAllowance }
  }
)

export const swapGetAllowanceToken = createAsyncThunk(
  'swap/swapGetAllowanceToken',
  async (props: {contractAddress: string}, { getState }) => {
    const web3 = (getState() as RootState).web3

    const auxAllowance =  await getAllowance(props.contractAddress, web3)
    
    return { auxAllowance }
  }
)

export const swapApprove = createAsyncThunk(
  'swap/swapApprove',
  async (props: {contractAddress: string, amount: BigNumberish}, { getState }) => {
    const web3 = (getState() as RootState).web3

    const res =  await setApprove(props.contractAddress, props.amount, web3)
    
    return { res }
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
      state.status.enoughAllowance = 
        action.payload === 'Invest' ? 
          (Number(state.token.allowance) > 0) :
          (Number(state.tokenProduct.allowance) > 0)
      state.status.buttonValue = state.status.enoughAllowance ? action.payload : 'Approve'  
      state.status.enoughBalance = 
        state.status.action === 'Invest' ?
          (BigNumber.from(state.token.balance).gte(parseUnits(state.status.amountFrom ? state.status.amountFrom : '0'))) :
          (BigNumber.from(state.tokenProduct.balance).gte(parseUnits(state.status.amountTo ? state.status.amountTo : '0')))
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
    },
    setAmoutTo: (state, action) => {
      state.status.amountTo = action.payload
    },
    cleanResponse: (state) => {
      state.status.response = null
    },
  },

  extraReducers: (builder) => {
    builder.addCase(swapUpdateToken.pending, (state, action) => {
      state.statusToken = 'Loading ...'
    }),
    builder.addCase(swapUpdateToken.fulfilled, (state, action) => {
      state.token.balance = action.payload.auxBalance
      state.token.price = action.payload.auxPrice
      state.token.allowance = action.payload.auxAllowance
      state.status.enoughAllowance = 
        state.status.action === 'Invest' ? 
          (Number(state.token.allowance) > 0) :
          (Number(state.tokenProduct.allowance) > 0)
      state.status.buttonValue = state.status.enoughAllowance ? state.status.action : 'Approve'
      // state.status.enoughBalance = 
      //   state.status.action === 'Invest' ?
      //     (BigNumber.from(state.token.balance).gte(parseUnits(state.status.amountFrom ? state.status.amountFrom : '0',state.token.decimals))) :
      //     (BigNumber.from(state.tokenProduct.balance).gte(parseUnits(state.status.amountTo ? state.status.amountTo : '0',state.tokenProduct.decimals)))
      state.statusToken = 'Succsess'
    })
    builder.addCase(swapUpdateToken.rejected, (state, action) => {
      state.statusToken = 'Failed'
    })

    builder.addCase(swapUpdateTokenProduct.pending, (state, action) => {
      state.statusTokenProduct = 'Loading ...'
    }),
    builder.addCase(swapUpdateTokenProduct.fulfilled, (state, action) => {
      state.tokenProduct.balance = action.payload.auxBalance
      state.tokenProduct.price = action.payload.auxPrice
      state.tokenProduct.total = action.payload.auxTotal
      state.tokenProduct.allowance = action.payload.auxAllowance
      state.status.enoughAllowance = 
        state.status.action === 'Invest' ? 
          (Number(state.token.allowance) > 0) :
          (Number(state.tokenProduct.allowance) > 0)
      state.status.buttonValue = state.status.enoughAllowance ? state.status.action : 'Approve'
      state.statusTokenProduct = 'Succsess'
    })
    builder.addCase(swapUpdateTokenProduct.rejected, (state, action) => {
      state.statusTokenProduct = 'Failed'
    })

    builder.addCase(swapGetAllowanceToken.pending, (state, action) => {
      state.statusToken = 'Pending'
    }),
    builder.addCase(swapGetAllowanceToken.fulfilled, (state, action) => {
      state.token.allowance = action.payload.auxAllowance
      state.statusToken = 'Succsess'
    })
    builder.addCase(swapGetAllowanceToken.rejected, (state, action) => {
      state.statusToken = 'Failed'
    })

    builder.addCase(swapApprove.pending, (state, action) => {
      state.statusToken = 'Pending'
    }),
    builder.addCase(swapApprove.fulfilled, (state, action) => {
      state.status.response = action.payload.res
      state.statusToken = 'Succsess'
    })
    builder.addCase(swapApprove.rejected, (state, action) => {
      state.statusToken = 'Failed'
    })

    builder.addCase(swapGetEstimatedIssueSetAmount.pending, (state, action) => {
      state.statusStatus = 'Pending'
    }),
    builder.addCase(swapGetEstimatedIssueSetAmount.fulfilled, (state, action) => {
      state.status.amountTo = Number(formatUnits(action.payload.auxAmount, state.tokenProduct.decimals)).toFixed(4)
      state.status.enoughBalance = 
        state.status.action === 'Invest' ?
          (BigNumber.from(state.token.balance).gte(parseUnits(state.status.amountFrom ? state.status.amountFrom : '0',state.token.decimals))) :
          (BigNumber.from(state.tokenProduct.balance).gte(parseUnits(state.status.amountTo ? state.status.amountTo : '0',state.tokenProduct.decimals)))
      state.statusStatus = 'Succsess'
    })
    builder.addCase(swapGetEstimatedIssueSetAmount.rejected, (state, action) => {
      state.statusStatus = 'Failed'
    })

    builder.addCase(swapGetAmountInToIssueExactSet.pending, (state, action) => {
      state.statusStatus = 'Pending'
    }),
    builder.addCase(swapGetAmountInToIssueExactSet.fulfilled, (state, action) => {
      state.status.amountFrom = Number(formatUnits(action.payload.auxAmount, state.token.decimals)).toFixed(4)
      state.status.enoughBalance = 
        state.status.action === 'Invest' ?
          (BigNumber.from(state.token.balance).gte(parseUnits(state.status.amountFrom ? state.status.amountFrom : '0',state.token.decimals))) :
          (BigNumber.from(state.tokenProduct.balance).gte(parseUnits(state.status.amountTo ? state.status.amountTo : '0',state.tokenProduct.decimals)))
      state.statusStatus = 'Succsess'
    })
    builder.addCase(swapGetAmountInToIssueExactSet.rejected, (state, action) => {
      state.statusStatus = 'Failed'
    })

    builder.addCase(swapIssueExactSetFromToken.pending, (state, action) => {
      state.statusStatus = 'Pending'
    }),
    builder.addCase(swapIssueExactSetFromToken.fulfilled, (state, action) => {
      state.status.response = action.payload.res
      state.statusStatus = 'Succsess'
    })
    builder.addCase(swapIssueExactSetFromToken.rejected, (state, action) => {
      state.statusStatus = 'Failed'
    })

    builder.addCase(swapRedeemExactSetForToken.pending, (state, action) => {
      state.statusStatus = 'Pending'
    }),
    builder.addCase(swapRedeemExactSetForToken.fulfilled, (state, action) => {
      state.status.response = action.payload.res
      state.statusStatus = 'Succsess'
    })
    builder.addCase(swapRedeemExactSetForToken.rejected, (state, action) => {
      state.statusStatus = 'Failed'
    })
  }
});

export const { setAction, setTokenFrom, setTokenTo, setActiveFocus, setAmoutFrom, setAmoutTo, cleanResponse } = swapSlice.actions;

export const selectSwap = (state: RootState) => state.swap

export default swapSlice.reducer;
