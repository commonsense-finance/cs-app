import { useState, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { injected } from '../services/connectors'
import { useDispatch, useSelector } from 'react-redux'
import { updateTokensList, updateWeb3 } from '@redux/actions'
import { selectWeb3 } from '@redux/slices/web3'

export function useEagerConnect() {
  const { activate, active, library, chainId, account } = useWeb3React()
  const web3 = useSelector(selectWeb3)

  const [tried, setTried] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {

    if (account !== undefined)
      dispatch(updateWeb3({library, chainId, account}))
  }, [library]) 

  useEffect(() => {
    console.log('Library Changed')
    dispatch(updateTokensList())
  }, [web3.library]) 

  useEffect(() => {
    injected.isAuthorized().then((isAuthorized: boolean) => {
      if (isAuthorized) {
        activate(injected, undefined, true).catch(() => {
          setTried(true)
        })
      } 
    })
  }, []) // intentionally only running on mount (make sure it's only mounted once :))

  // if the connection worked, wait until we get confirmation of that to flip the flag
  useEffect(() => {
    if (!tried && active) {
      setTried(true)
    }
  }, [tried, active])

  return tried
}

export function useInactiveListener(suppress: boolean = false) {
  const { active, error, activate } = useWeb3React()

  useEffect((): any => {
    const { ethereum } = window as any
    if (ethereum && ethereum.on && !active && !error && !suppress) {
      const handleConnect = () => {
        console.log("Handling 'connect' event")
        activate(injected)
      }
      const handleChainChanged = (chainId: string | number) => {
        console.log("Handling 'chainChanged' event with payload", chainId)
        activate(injected)
      }
      const handleAccountsChanged = (accounts: string[]) => {
        console.log("Handling 'accountsChanged' event with payload", accounts)
        if (accounts.length > 0) {
          activate(injected)
        }
      }

      const handleDisconnectChanged = (networkId: string | number) => {
        console.log("Handling 'disconnect' event with payload", networkId)
        //activate(network)
      }
      
      const handleNetworkChanged = (networkId: string | number) => {
        console.log("Handling 'networkChanged' event with payload", networkId)
        activate(injected)
      }

      const handleMessage = () => {
        console.log("Message ->")
      }

      ethereum.on('connect', handleConnect)
      ethereum.on('chainChanged', handleChainChanged)
      ethereum.on('accountsChanged', handleAccountsChanged)
      ethereum.on('disconnect', handleDisconnectChanged)
      ethereum.on('networkChanged', handleNetworkChanged)
      ethereum.on('message', handleMessage);

      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener('connect', handleConnect)
          ethereum.removeListener('chainChanged', handleChainChanged)
          ethereum.removeListener('accountsChanged', handleAccountsChanged)
          ethereum.removeListener('disconnect', handleDisconnectChanged)
          ethereum.removeListener('networkChanged', handleNetworkChanged)
          ethereum.removeListener('message', handleMessage)
        }
      }
    }
  }, [active, error, suppress, activate])
}
