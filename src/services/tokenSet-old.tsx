import { useMemo } from 'react'

import { Contract, ContractInterface } from '@ethersproject/contracts'

import { exchangeIssuanceV2 } from '../constants/contracts'
import { BigNumber, BigNumberish } from '@ethersproject/bignumber'

import erc20ABI from '../services/ABI/erc20.json'
import tokenSetABI from '../services/ABI/tokenSet.json'
import exchangeIssuanceV2ABI from '../services/ABI/exchangeIssuanceV2.json'

import { formatUnits } from '@ethersproject/units'
import { IComponents } from '@redux/types'
import { useEthers } from '@usedapp/core'

import { DAI } from '../constants/tokens' 

export function useContract(
  address?: string,
  ABI?: ContractInterface,
  withSigner = false,
): Contract | undefined {
  const { account, library } = useEthers()
  return useMemo(
    () =>
      !!address && !!ABI && !!library
        ? new Contract(
            address,
            ABI,
            withSigner
              ? library.getSigner(account?.toString()).connectUnchecked()
              : library,
          )
        : undefined,
    [address, ABI, withSigner, library, account],
  )
}

export function getContract(
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

export function getSignerContract(
  library: any,
  ABI: any,
  address: string,
  account: string,
): Contract | undefined {
  const contract =
    !!address && !!ABI && !!library
      ? new Contract(
          address,
          ABI,
          library.getSigner(account).connectUnchecked(),
        )
      : undefined
  return contract
}

export const getTokenName = async (
  library: any,
  chainId: number,
  contractAddress: string,
): Promise<string> => {
  const contract = getContract(library, erc20ABI, contractAddress)
  const name = await contract?.name()
  return name
}

export const getTokenSymbol = async (
  contractAddress: string,
  web3: any,
): Promise<string> => {
  const { library, chainId } = web3
  const contract = getContract(library, erc20ABI, contractAddress)
  return await contract?.symbol()
}

export const getTokenDecimals = async (
  contractAddress: string,
  web3: any,
): Promise<string> => {
  const { library, chainId } = web3
  const contract = getContract(library, erc20ABI, contractAddress)
  const decimals = await contract?.decimals()
  return decimals
}

export const getTokenPrice = async (
  contractAddress: string,
  web3: any,
): Promise<BigNumber> => {
  const { library, chainId } = web3
  const contract = getContract(
    library,
    exchangeIssuanceV2ABI,
    exchangeIssuanceV2.contractPolygon,
  )
  return await contract?.getAmountOutOnRedeemSet(
    contractAddress,
    DAI.contractPolygon,
    '1000000000000000000',
  )
}

export const getTokenBalance = async (
  contractAddress: string,
  web3: any,
): Promise<BigNumber> => {
  const { library, chainId, account } = web3
  if (!account)
    return BigNumber.from(0)
  const contract = getContract(library, erc20ABI, contractAddress)
  return await contract?.balanceOf(account)
}

export const getTokenTotal = (
  price: BigNumber,
  balance: BigNumber,
): BigNumber => {
  return BigNumber.from(price)
    .mul(balance)
    .div(10 ** 9)
    .div(10 ** 9)
}

export const getTokenTotalSupply = async (
  contractAddress: string,
  web3: any,
): Promise<BigNumber> => {
  const { library, chainId } = web3
  const contract = getContract(library, erc20ABI, contractAddress)
  return await contract?.totalSupply()
}

export const getTokenMarketCap = (
  price: BigNumber,
  totalSupply: BigNumber,
): BigNumber => {
  return BigNumber.from(price)
    .mul(totalSupply)
    .div(10 ** 9)
    .div(10 ** 9)
}

export const getAllowance = async (
  contractAddress: string,
  web3: any,
): Promise<BigNumber> => {
  const { account, library, chainId } = web3
  const contract = getContract(library, erc20ABI, contractAddress)
  return await contract?.allowance(account, exchangeIssuanceV2.contractPolygon)
}

export const setApprove = async (
  contractAddress: string,
  amount: BigNumberish,
  web3: any,
): Promise<any> => {
  const { account, library, chainId } = web3
  let result: any = 0
  try {
    const contract = getSignerContract(
      library,
      erc20ABI,
      contractAddress,
      account,
    )
    result = await contract?.approve(exchangeIssuanceV2.contractPolygon, '115792089237316195423570985008687907853269984665640564039457584007913129639935')
  } catch (e) {
    result = e
  }
  return result
}

export const getDefaultPositionRealUnit = async (
  contractAddress: string,
  component: string,
  web3: any,
): Promise<BigNumber> => {
  const { library, chainId } = web3
  const contract = getContract(library, tokenSetABI, contractAddress)
  return await contract?.getDefaultPositionRealUnit(component)
}

export const getTotalComponentRealUnits = async (
  contractAddress: string,
  component: string,
  web3: any,
): Promise<BigNumber> => {
  const { library, chainId } = web3
  const contract = getContract(library, tokenSetABI, contractAddress)
  return await contract?.getTotalComponentRealUnits(component)
}

export const getTokenComponents = async (
  contractAddress: string,
  web3: any,
): Promise<IComponents[]> => {
  const { library, chainId } = web3
  let auxComponents = []

  const contract = getContract(library, tokenSetABI, contractAddress)
  const components = await contract?.getComponents()

  for (let i = 0; i < components.length; i++) {
    const symbol = await getTokenSymbol(components[i], web3)
    const decimals = await getTokenDecimals(components[i], web3)
    const position = await getTotalComponentRealUnits(
      contractAddress,
      components[i],
      web3,
    )
    auxComponents.push({
      id: i,
      symbol,
      image: '',
      decimals,
      position,
      price: 0,
      contractPolygon: components[i],
    })
  }

  return auxComponents
}

export const getEstimatedIssueSetAmount = async (
  contractAddressTo: string,
  contractAddressFrom: string,
  amountFrom: BigNumberish,
  web3: any,
): Promise<BigNumber> => {
  const { library, chainId } = web3
  let contract = null
  let amountTo = null
  if (amountFrom.toString() !== '0') {
    contract = getContract(
      library,
      exchangeIssuanceV2ABI,
      exchangeIssuanceV2.contractPolygon,
    )
    amountTo = await contract?.getEstimatedIssueSetAmount(
      contractAddressTo,
      contractAddressFrom,
      amountFrom,
    )
  }
  return amountTo ? amountTo : 0
}

export const getAmountInToIssueExactSet = async (
  contractAddressTo: string,
  contractAddressFrom: string,
  amountTo: BigNumberish,
  web3: any,
): Promise<BigNumber> => {
  const { library, chainId } = web3
  let contract = null
  let amountFrom = null
  if (amountTo.toString() !== '0') {
    contract = getContract(
      library,
      exchangeIssuanceV2ABI,
      exchangeIssuanceV2.contractPolygon,
    )
    amountFrom = await contract?.getAmountInToIssueExactSet(
      contractAddressTo,
      contractAddressFrom,
      amountTo,
    )
  }
  return amountFrom ? amountFrom : 0
}

export const getAmountOutOnRedeemSet = async (
  library: any,
  chainId: number,
  contractAddressTo: string,
  contractAddressFrom: string,
  amountFrom: string,
): Promise<string> => {
  const contract = getContract(
    library,
    exchangeIssuanceV2ABI,
    exchangeIssuanceV2.contractPolygon,
  )
  const amountTo = await contract?.getAmountOutOnRedeemSet(
    contractAddressTo,
    contractAddressFrom,
    amountFrom,
  )
  return amountTo
}

export const issueExactSetFromToken = async (
  contractAddressTo: string,
  contractAddressFrom: string,
  amountTo: BigNumberish,
  amountFrom: BigNumberish,
  web3: any,
): Promise<BigNumber> => {
  const { library, chainId, account } = web3
  let result: any = 0
  try {
    const contract = getSignerContract(
      library,
      exchangeIssuanceV2ABI,
      exchangeIssuanceV2.contractPolygon,
      account,
    )
    console.log(formatUnits(amountFrom.toString(), 18))
    result = await contract?.issueExactSetFromToken(
      contractAddressTo,
      contractAddressFrom,
      amountTo,
      amountFrom,
    )
  } catch (e) {
    result = e
  }
  return result
}

export const redeemExactSetForToken = async (
  contractAddressTo: string,
  contractAddressFrom: string,
  amountTo: BigNumberish,
  amountFrom: BigNumberish,
  web3: any,
): Promise<BigNumber> => {
  const { library, chainId, account } = web3
  let result: any = 0
  try {
    const contract = getSignerContract(
      library,
      exchangeIssuanceV2ABI,
      exchangeIssuanceV2.contractPolygon,
      account,
    )
    console.log(amountFrom.toString())
    result = await contract?.redeemExactSetForToken(
      contractAddressTo,
      contractAddressFrom,
      amountTo,
      amountFrom,
    )
  } catch (e) {
    result = e
  }
  return result
}
