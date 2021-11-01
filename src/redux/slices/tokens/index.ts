import { RootState } from '@redux/store';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { BigNumber, BigNumberish } from '@ethersproject/bignumber'
import { tokens, tokensProduct } from 'src/constants/tokens'
import { IToken } from '@redux/types';
import { getTokenBalance, getTokenComponents, getTokenMarketCap, getTokenPrice, getTokenTotal, getTokenTotalSupply } from 'src/services/tokenSet';


interface ITokens {
  tokens: IToken[]
  totalBalanceTokens: BigNumberish
  tokensProduct: IToken[]
  activeTokenProduct: number
  totalBalanceTokensProduct: BigNumberish
  statusTokensProduct: null | string
  account: null | string
  
}

const initialState: ITokens = {
  tokens: tokens,
  totalBalanceTokens: 0,
  tokensProduct: tokensProduct,
  activeTokenProduct: 0,
  totalBalanceTokensProduct: 0,
  statusTokensProduct: 'Succsess',
  account: null,
}


export const updateTokensProduct = createAsyncThunk(
  'tokens/updateTokensProducts',
  async (props, { getState }) => {
    
    console.log('Update Toknes Products....')

    const tokens = (getState() as RootState).tokens.tokensProduct
    const web3 = (getState() as RootState).web3

    let auxTokens: IToken[] = []
    let auxTotalBalance: BigNumberish = 0
    
   
    for (let i = 0; i < tokens.length; i++) {
      const auxPrice = await getTokenPrice(tokens[i].contractPolygon, web3)
      const auxBalance = await getTokenBalance(tokens[i].contractPolygon, web3)
      const auxTotal =  getTokenTotal(auxPrice, auxBalance)

      const auxTotalSupply = await getTokenTotalSupply(tokens[i].contractPolygon, web3)
      const auxMarketap = getTokenMarketCap(auxPrice, auxTotalSupply)

      //const auxComponents = await getTokenComponents(tokens[i].contractPolygon, web3)

      auxTokens.push(
        {...tokens[i], 
          price: auxPrice || 0,
          balance: auxBalance || 0,
          total: auxTotal || 0,  
          totalSupply: auxTotalSupply || 0,  
          marketCap: auxMarketap || 0,
          //components: auxComponents
        })

        auxTotalBalance = BigNumber.from(auxTotalBalance).add(auxTotal)
    }
    
    return { auxTokens, auxTotalBalance }
  }
)

export const updateTokenProduct = createAsyncThunk(
  'tokens/updateTokenProducts',
  async (tokenId: number, { getState }) => {
    
    console.log('Update Tokne Products.... ', tokenId)

    let auxTokenProduct = (getState() as RootState).tokens.tokensProduct[tokenId]
    const web3 = (getState() as RootState).web3

    const auxPrice = await getTokenPrice(auxTokenProduct.contractPolygon, web3) 
    const auxBalance = await getTokenBalance(auxTokenProduct.contractPolygon, web3)
    const auxTotal =  getTokenTotal(auxPrice, auxBalance)
    
    const auxTotalSupply = await getTokenTotalSupply(auxTokenProduct.contractPolygon, web3)
    const auxMarketCap = getTokenMarketCap(auxPrice, auxTotalSupply)

    const auxComponents = await getTokenComponents(auxTokenProduct.contractPolygon, web3)

    
    
    auxTokenProduct = {...auxTokenProduct, 
      price: auxPrice || 0,
      balance: auxBalance || 0,
      total: auxTotal || 0,  
      totalSupply: auxTotalSupply || 0,  
      marketCap: auxMarketCap || 0,
      components: auxComponents
    }

    

    return { auxTokenProduct }
  }
)


const tokensSlice = createSlice({
  name: 'tokens',
  initialState,
  reducers: {
    setActiveTokenProduct:(state, action ) => {
      state.activeTokenProduct = action.payload
    }
  },
  extraReducers: (builder) => {
    // LISTS
    builder.addCase(updateTokensProduct.pending, (state, action) => {
      state.statusTokensProduct = 'Loading ...'
    }),
    builder.addCase(updateTokensProduct.fulfilled, (state, action) => {
      state.tokensProduct = action.payload.auxTokens
      state.totalBalanceTokensProduct = action.payload.auxTotalBalance
      state.statusTokensProduct = 'Succsess'
    })
    builder.addCase(updateTokensProduct.rejected, (state, action) => {
      state.statusTokensProduct = 'Failed'
    })

    builder.addCase(updateTokenProduct.pending, (state, action) => {
      state.statusTokensProduct = 'Loading ...'
    }),
    builder.addCase(updateTokenProduct.fulfilled, (state, action) => {
      state.tokensProduct[action.payload.auxTokenProduct.id] = action.payload.auxTokenProduct
      state.statusTokensProduct = 'Succsess'
    })
    builder.addCase(updateTokenProduct.rejected, (state, action) => {
      state.statusTokensProduct = 'Failed'
    })
  },
})

export const { setActiveTokenProduct } = tokensSlice.actions;
export const selectTokensProduct = (state: RootState) => state.tokens.tokensProduct
export const selectActiveTokenProduct = (state: RootState) => state.tokens.tokensProduct[state.tokens.activeTokenProduct] 

export default tokensSlice.reducer
