import { RootState } from '@redux/store';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { BigNumber, BigNumberish } from '@ethersproject/bignumber'
import { productTokens } from 'src/constants/tokens'
import { IToken } from '@redux/types';
import { getTokenBalance, getTokenComponents, getTokenMarketCap, getTokenPrice, getTokenTotal, getTokenTotalSupply } from 'src/services/tokenSet';


interface ITokens {
  list: IToken[]
  listStatus: string
  active: IToken
  count: number
  totalBalance: BigNumberish
  users: []
  status: string
}

const initialState: ITokens = {
  list: productTokens,
  listStatus: '',
  active: productTokens[0],
  totalBalance: 0,
  count: 0,
  users: [],
  status: ''
}


export const getUsers = createAsyncThunk(
  'tokens/getUsers',
  async (props, {dispatch, getState}) => { 
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    return response
    
  }
)

export const updateTokensList = createAsyncThunk(
  'tokens/updateTokensList',
  async (props, { getState }) => {
    
    console.log('Update List')

    const list = (getState() as RootState).tokens.list
    const web3 = (getState() as RootState).web3

    let auxList: IToken[] = []
    let auxTotalBalance: BigNumberish = 0
    
   
    for (let i = 0; i < list.length; i++) {
      const auxPrice = await getTokenPrice(list[i].contractPolygon, web3)
      const auxBalance = await getTokenBalance(list[i].contractPolygon, web3)
      const auxTotal =  getTokenTotal(auxPrice, auxBalance)

      const auxTotalSupply = await getTokenTotalSupply(list[i].contractPolygon, web3)
      const auxMarketap = getTokenMarketCap(auxPrice, auxTotalSupply)

      const auxComponents = await getTokenComponents(list[i].contractPolygon, web3)

      auxList.push(
        {...list[i], 
          price: auxPrice || 0,
          balance: auxBalance || 0,
          total: auxTotal || 0,  
          totalSupply: auxTotalSupply || 0,  
          marketCap: auxMarketap || 0,
          components: auxComponents
        })

        auxTotalBalance = BigNumber.from(auxTotalBalance).add(auxTotal)
    }
    
    return { auxList, auxTotalBalance }
  }
)

const tokensSlice = createSlice({
  name: 'tokens',
  initialState,
  reducers: {
    setActiveToken: (state, action: PayloadAction<number>) => {
      state.active = state.list[action.payload];
    },
    add: (state) => {
      state.count++
    },
    del: (state) => {
      state.count--
    },
  },
  extraReducers: (builder) => {
    // USERS
    builder.addCase(getUsers.pending, (state, action) => {
      state.status = 'Pending'
    }),
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload
      state.status = 'Succsess'
    })
    builder.addCase(getUsers.rejected, (state, action) => {
      state.status = 'Failed'
    })
    // LISTS
    builder.addCase(updateTokensList.pending, (state, action) => {
      state.listStatus = 'Pending'
    }),
    builder.addCase(updateTokensList.fulfilled, (state, action) => {
      state.list = action.payload.auxList
      state.totalBalance = action.payload.auxTotalBalance
      state.listStatus = 'Succsess'
    })
    builder.addCase(updateTokensList.rejected, (state, action) => {
      state.listStatus = 'Failed'
    })
  },
})

export const { setActiveToken } = tokensSlice.actions

export const selectTokensList = (state: RootState) => state.tokens.list
export const selectTokensActive = (state: RootState) => state.tokens.active
export const selectTokensUsers = (state: RootState) => state.tokens.users

export default tokensSlice.reducer
