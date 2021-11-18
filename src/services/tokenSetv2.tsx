
import { utils } from 'ethers'
import { Contract } from '@ethersproject/contracts'
import {
  ERC20Interface,
  useContractCall,
  useContractCalls,
  useContractFunction,
  useEthers,
  
} from '@usedapp/core'

import { BigNumber, BigNumberish } from '@ethersproject/bignumber'
import { formatUnits, parseUnits } from '@ethersproject/units'

import exchangeIssuanceV2ABI from '../services/ABI/exchangeIssuanceV2.json'
import tokenSetABI from '../services/ABI/tokenSet.json'

import { DAI } from '../constants/tokens'
import { exchangeIssuanceV2 } from 'src/constants/contracts'


const exchangeIssuanceV2Interface = new utils.Interface(exchangeIssuanceV2ABI)
const exchangeIssuanceV2Contract = new Contract(exchangeIssuanceV2.contractPolygon, exchangeIssuanceV2Interface)

const tokenSetInterface = new utils.Interface(tokenSetABI)


export function useApproveSet (contractAddress: string) {
  const { library } = useEthers()
  const tokenSetContract = new Contract(contractAddress, tokenSetABI, library?.getSigner()) 
  return useContractFunction(tokenSetContract, 'approve', { transactionName: 'CS Approve' })
}

export function useIssueSet () {
  const { library } = useEthers()
  const exchangeIssuanceContract = new Contract(exchangeIssuanceV2.contractPolygon, exchangeIssuanceV2Interface, library?.getSigner()) 
  return useContractFunction(exchangeIssuanceContract, 'issueExactSetFromToken', { transactionName: 'CS Issue Set' })
}

export function useRedeemSet () {
  const { library } = useEthers()
  const exchangeIssuanceContract = new Contract(exchangeIssuanceV2.contractPolygon, exchangeIssuanceV2Interface, library?.getSigner()) 
  return useContractFunction(exchangeIssuanceContract, 'redeemExactSetForToken', { transactionName: 'CS Redeem Set' })
}


export function currencyFormat(
  amount: BigNumberish,
  decimals?: number | string,
): string {
  return '$' + Number(formatUnits(amount ? amount : 0, decimals ? decimals : 18)).toFixed(2)
}

export function balanceFormat(
  amount: BigNumberish,
  decimals?: number | string,
): string {
  return Number(
    formatUnits(amount ? amount : 0, decimals ? decimals : 18),
  ).toFixed(5)
}

export function balanceUnFormat(
  amount: string,
  decimals?: number | string,
): BigNumberish {
  return  parseUnits(amount ? amount : '0', decimals ? decimals : 18)
}

export function amountFormat(amount: BigNumberish, decimals?: number): string {
  return Number(formatUnits(amount ? amount : 0)).toFixed(2)
}

export function mulFormat(
  amount1: BigNumberish,
  amount2: BigNumberish,
): BigNumberish {
  return BigNumber.from(amount1)
    .mul(amount2)
    .div(10 ** 9)
    .div(10 ** 9)
}

export function addFormat(
  amount1: BigNumberish,
  amount2: BigNumberish,
): BigNumberish {
  return BigNumber.from(amount1).add(amount2)
}

export function useTokensBalance(tokenList: any[], account?: string | null) {
  return useContractCalls(
    tokenList && account
      ? tokenList.map((token: any) => ({
          abi: ERC20Interface,
          address: token.contractPolygon,
          method: 'balanceOf',
          args: [account],
        }))
      : [],
  )
}

export function useTotalBalance(tokenList: any[], account?: string | null) {
  const tokensProductPrice = useTokensSetPrice(tokenList)
  const tokensProductBalance = useTokensBalance(tokenList, account)
  let auxTotalBalance: BigNumberish = 0
  tokenList &&
    tokenList.map(
      (token, idx) =>
        (auxTotalBalance =
          tokensProductPrice?.[idx] && tokensProductBalance?.[idx]
            ? addFormat(
                auxTotalBalance,
                mulFormat(
                  tokensProductPrice[idx]![0],
                  tokensProductBalance[idx]![0],
                ),
              )
            : 0),
    )
  return auxTotalBalance
}

export function useTokensTotalSupply(tokenList: any[]) {
  return useContractCalls(
    tokenList
      ? tokenList.map((token: any) => ({
          abi: ERC20Interface,
          address: token.contractPolygon,
          method: 'totalSupply',
          args: [],
        }))
      : [],
  )
}

export function useTokensSetPrice(tokenList: any[]) {
  
  return useContractCalls(
    tokenList
      ? tokenList.map((token: any) => ({
          abi: exchangeIssuanceV2Interface,
          address: exchangeIssuanceV2.contractPolygon,
          method: 'getAmountOutOnRedeemSet',
          args: [
            token.contractPolygon,
            DAI.contractPolygon,
            '1000000000000000000',
          ],
        }))
      : [],
  )
}

export function useTokenSetPrice(tokenAddress: string) {
  
  return useContractCall({
    abi: exchangeIssuanceV2Interface,
    address: exchangeIssuanceV2.contractPolygon,
    method: 'getAmountOutOnRedeemSet',
    args: [tokenAddress, DAI.contractPolygon, '1000000000000000000'],
  })?.[0]
}

export function useGetSetEstimated(tokenSetAddress: string, tokenAddress: string, amount: BigNumberish, action: string) {
  console.log('Estimated -> ', amount.toString())
  return  amount.toString() !== '0' ? useContractCall({
    abi: exchangeIssuanceV2Interface,
    address: exchangeIssuanceV2.contractPolygon,
    method: action === 'Invest' ? 'getEstimatedIssueSetAmount' : 'getAmountInToIssueExactSet',
    args: [tokenSetAddress, tokenAddress, amount],
  })?.[0] : 0
}

export function useGetEstimatedIssueSetAmount(tokenSetAddress: string, tokenAddress: string, amount: BigNumberish) {
  
  return useContractCall({
    abi: exchangeIssuanceV2Interface,
    address: exchangeIssuanceV2.contractPolygon,
    method: 'getEstimatedIssueSetAmount',
    args: [tokenSetAddress, tokenAddress, amount],
  })?.[0]
}

export function useGetAmountInToIssueExactSet(tokenSetAddress: string, tokenAddress: string, amount: BigNumberish) {
  
  return useContractCall({
    abi: exchangeIssuanceV2Interface,
    address: exchangeIssuanceV2.contractPolygon,
    method: 'getAmountInToIssueExactSet',
    args: [tokenSetAddress, tokenAddress, amount],
  })?.[0]
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

export function useComponentsSymbol(tokenList: any[]) {
  return useContractCalls(
    tokenList
      ? tokenList.map((token: any) => ({
          abi: ERC20Interface,
          address: token,
          method: 'symbol',
          args: [],
        }))
      : [],
  )
}

export function useComponentsDecimals(tokenList: any[]) {
  return useContractCalls(
    tokenList
      ? tokenList.map((token: any) => ({
          abi: ERC20Interface,
          address: token,
          method: 'decimals',
          args: [],
        }))
      : [],
  )
}

export function useComponentsRealPositions(
  setAddress: string,
  tokenList: any[],
) {
  const tokenAbi = new utils.Interface(tokenSetABI)
  return useContractCalls(
    tokenList
      ? tokenList.map((token: any) => ({
          abi: tokenAbi,
          address: setAddress,
          method: 'getTotalComponentRealUnits',
          args: [token],
        }))
      : [],
  )
}

export function useTokenSetComponents(setAddress: string) {
  const tokenAbi = new utils.Interface(tokenSetABI)
  const componentsAddress = useContractCall({
    abi: tokenAbi,
    address: setAddress,
    method: 'getComponents',
    args: [],
  })?.[0]

  //console.log('Address -> ',componentsAddress)

  const componentsSymbol = useComponentsSymbol(componentsAddress)
  const componentsDecimals = useComponentsDecimals(componentsAddress)
  const componentsRealPosition = useComponentsRealPositions(
    setAddress,
    componentsAddress,
  )

  // console.log('symbols -> ',componentsSymbol)
  // console.log('decimals -> ',componentsDecimals)
  // console.log('Real Positions -> ',componentsRealPosition)

  return componentsAddress?.map((address: any, idx: number) => ({
    id: idx,
    symbol: componentsSymbol[idx],
    image: '',
    decimals: componentsDecimals[idx]?.[0],
    position: componentsRealPosition[idx]?.[0],
    price: 0,
    contractPolygon: address,
  }))
}






