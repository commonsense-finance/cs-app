import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { ArrowUpRight } from 'react-bootstrap-icons'

import { Button } from '@components/csComponents'
import { WalletModal } from '@components/wallet/controls'
import { selectTheme } from '@redux/slices/theme'
import { useSelector } from 'react-redux'

export const Hero = () => {
  const [showModal, setShowModal] = useState(false)
  const theme = useSelector(selectTheme)

  const handleClose = () => setShowModal(false)
  const handleShow = () => setShowModal(true)

  return (
    <div className={`text-center py-5 text-${theme.textMode}`}>
      <h1>Investing in crypto, simplified</h1>
      <p className="pb-5">
        We're helping people like you to have the same returns as geeks through
        'All in One' tokens.
      </p>
      <Button className={`me-2`} onClick={handleShow}>
        Connect Wallet
      </Button>
      <Button variant={`outline-${theme.textMode}`}>
        Learn more <ArrowUpRight />
      </Button>
      <WalletModal showModal={showModal} handleClose={handleClose} />
      
    </div>
  )
}
