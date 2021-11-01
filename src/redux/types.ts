
import { BigNumberish } from '@ethersproject/bignumber'

export interface IToken {
    id: number
    symbol: string
    name: string
    image: string
    fee: string
    contractPolygon: string
    contract: string
    decimals: string
    price: BigNumberish
    balance: BigNumberish
    total: BigNumberish
    allowance: BigNumberish,
    about: string
    marketCap: BigNumberish
    totalSupply: BigNumberish
    components: IComponents[]
  }

  export interface IComponents {
    id: number
    symbol: string
    image: string
    decimals: string
    position: BigNumberish
    price: BigNumberish
    contractPolygon: string
  }