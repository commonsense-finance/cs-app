import { Button } from '@components/csComponents'
import detectEthereumProvider from '@metamask/detect-provider'
import { useEthers } from '@usedapp/core'
import { Image, Tooltip } from 'react-bootstrap'

export const AddChainToMetamask = () => {
  const { activateBrowserWallet } = useEthers()

  const handleSignPolygon = async () => {
    const provider = await detectEthereumProvider()
    try {
      await provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x89' }],
      })
      activateBrowserWallet()
    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        try {
          await ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: '0x89',
                chainName: 'Polygon',
                nativeCurrency: {
                  name: 'MATIC',
                  symbol: 'MATIC',
                  decimals: 18,
                },
                rpcUrls: ['https://polygon-rpc.com'],
                blockExplorerUrls: ['https://polygonscan.com/'],
              },
            ],
          })
        } catch (addError) {
          // handle "add" error
        }
      }
      // handle other "switch" errors
    }
  }

  return (
    <Button variant="info" className="btn-sm" onClick={handleSignPolygon}>
      Set Polygon Network
    </Button>
  )
}

export const AddTokenToMetamask = () => {
  const tokenAddress = '0x1fd078168fad608910687b1385d7cf0d31ac64b4'
  const tokenSymbol = 'CSI'
  const tokenDecimals = 18
  const tokenImage = 'https://static.commonsense.finance/csi-token.svg'

  const handleAddCSIToken = async () => {
    const provider = await detectEthereumProvider()
    try {
      // wasAdded is a boolean. Like any RPC method, an error may be thrown.
      const wasAdded = await provider.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20', // Initially only supports ERC20, but eventually more!
          options: {
            address: tokenAddress, // The address that the token is at.
            symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
            decimals: tokenDecimals, // The number of decimals in the token
            image: tokenImage, // A string url of the token logo
          },
        },
      })

      if (wasAdded) {
        console.log('Thanks for your interest!')
      } else {
        console.log('Your loss!')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Button variant="link" className="btn-sm" onClick={handleAddCSIToken}>
      <Image
        style={{ width: '20px' }}
        src="/icons/metamask-fox.svg"
        max-width="50px"
      />
    </Button>
  )
}
