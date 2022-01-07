
import { Button } from '@components/csComponents'
import detectEthereumProvider from '@metamask/detect-provider'
import { useEthers } from '@usedapp/core'

export const Metamask = () => {
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
    
      <Button
        variant="info"
        className="btn-sm"
        onClick={handleSignPolygon}
      >
        Set Polygon Network
      </Button>
    
  )
}

export default Metamask
