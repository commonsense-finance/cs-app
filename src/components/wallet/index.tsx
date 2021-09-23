import { useState, useEffect } from 'react'

import { useWeb3React } from '@web3-react/core'
import { useDispatch } from 'react-redux'

import { useEagerConnect, useInactiveListener } from '../../hooks/web3Hooks'
import { ConnectedWalletButton, DisconnectedWalletBotton, WalletModal } from './controls'
import { network } from 'src/services/connectors'
import { updateWeb3 } from '@redux/actions'


export const WalletButton = () => {
  const [showModal, setShowModal] = useState(false)

  const handleClose = () => setShowModal(false)
  const handleShow = () => setShowModal(true)

  const {
    connector,
    library,
    chainId,
    account,
    activate
  } = useWeb3React()

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = useState<any>()

  
  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined)
    }    
  }, [activatingConnector, connector])

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect()

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector)

  return (
    <>
      {!!(library && account) ? (
        <ConnectedWalletButton />
      ) : (
        <DisconnectedWalletBotton handleShow={handleShow}/>
      )}
      <WalletModal showModal={showModal} handleClose={handleClose}/>
    </>
  )
}
