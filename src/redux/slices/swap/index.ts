import { RootState } from '@redux/store'
import { IToken } from '@redux/types'
import { createSlice } from '@reduxjs/toolkit'
import { tokens, tokensProduct } from 'src/constants/tokens'
import { TransactionStatus } from '@usedapp/core'

interface ISwapStatus {
  amountFrom: string
  amountTo: string
  activeFocus: string
  action: string
  labelFrom: string
  labelTo: string
  transactionStatus: TransactionStatus | null
}

const initialStateStatus: ISwapStatus = {
  amountFrom: '0',
  amountTo: '0',
  activeFocus: 'From',
  action: 'Invest',
  labelFrom: 'swap_labelFrom',
  labelTo: 'swap_labelTo',
  transactionStatus: null,
}

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
}


const swapSlice = createSlice({
  name: 'swap',
  initialState,
  reducers: {
    setAction: (state, action) => {
      state.status.action = action.payload
      state.status.labelFrom = action.payload === 'Invest' ? 'swap_labelFrom' : 'swap_labelTo'
      state.status.labelTo = action.payload === 'Invest' ? 'swap_labelTo' : 'swap_labelFrom'
    },
    setActiveFocus: (state, action) => {
      state.status.activeFocus = action.payload
    },
    setTokenFrom: (state, action) => {
      state.token = action.payload
    },
    setTokenTo: (state, action) => {
      state.tokenProduct = action.payload
    },
    setAmoutFrom: (state, action) => {
      state.status.amountFrom = action.payload
    },
    setAmoutTo: (state, action) => {
      state.status.amountTo = action.payload
    },
    setTransactionStatus: (state, action) => {
      state.status.transactionStatus = action.payload
    },
  },
})

export const {
  setAction,
  setTokenFrom,
  setTokenTo,
  setActiveFocus,
  setAmoutFrom,
  setAmoutTo,
  setTransactionStatus,
} = swapSlice.actions

export const selectSwap = (state: RootState) => state.swap

export default swapSlice.reducer
