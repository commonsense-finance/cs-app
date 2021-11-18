import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'
import { NetworkConnector } from '@web3-react/network-connector'

// const NETWORK_URL = 'https://mainnet.eth.aragon.network/'

const RPC_URLS: { [chainId: number]: string } = {
  1: '',
  137: ''
}

// export const network = new NetworkConnector({
//     urls: { 137: RPC_URLS[137] },
//     defaultChainId: 137
// })

export const injected = new InjectedConnector({
  supportedChainIds: [137]
})

export const walletconnect = new WalletConnectConnector({
  rpc: { 1: RPC_URLS[137] },
  qrcode: true
})

export const walletlink = new WalletLinkConnector({
  url: RPC_URLS[1],
  appName: 'Common Sense Finance',
  supportedChainIds: [137]
})
