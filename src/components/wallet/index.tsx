import { useState, useEffect } from 'react'
import { useEthers} from '@usedapp/core'

import { ConnectedWalletButton, DisconnectedWalletBotton, WalletModal } from './controls'


export const Wallet = () => {
  const [showModal, setShowModal] = useState(false)

  const handleClose = () => setShowModal(false)
  const handleShow = () => setShowModal(true)

  const {library, account} = useEthers()

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
