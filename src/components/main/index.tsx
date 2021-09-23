
import { useState } from 'react';
import { Container } from 'react-bootstrap'
import { ArrowUpRight } from 'react-bootstrap-icons';

import { Button } from '@components'
import { WalletModal } from '@components/wallet/controls';

export const Main = () => {
  const [showModal, setShowModal] = useState(false)

  const handleClose = () => setShowModal(false)
  const handleShow = () => setShowModal(true)

  return (
    <div className="text-center py-5" style={{ backgroundColor: '#282c34' }}>
      <Container>
        <h1 className="text-white">
          Investing in crypto, simplified
        </h1>
        <p className="text-white pb-4">
          We're helping people like you to have the same returns as geeks
          through 'All in One' tokens.
        </p>
        <Button className="me-2" onClick={handleShow}>Connect Wallet</Button>
        <Button variant="outline-light">Learn more <ArrowUpRight /></Button>
        <WalletModal showModal={showModal} handleClose={handleClose}/>
      </Container>
    </div>
  )
}
