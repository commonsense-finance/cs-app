import { useWeb3React } from '@web3-react/core'
import { Card, Dropdown, Image, Button, Modal } from 'react-bootstrap'
import { Balance, formatAccount, getNetworkName } from 'src/services/web3Utils'
import {
  injected,
  // network,
  walletconnect,
  walletlink,
} from '../../services/connectors'

export const ConnectedWalletButton = () => {
  const { chainId, account, deactivate } = useWeb3React()
  const walletButtonText = formatAccount(account)
  return (
    <>
      <Dropdown align="end">
        <Dropdown.Toggle
          className="border rounded-pill"
          variant="light"
          id="dropdown-basic"
        >
          <Image
            className="me-2"
            style={{ width: '20px' }}
            src="/icons/placeholder.png"
            max-width="50px"
            roundedCircle
          />
          {walletButtonText}
        </Dropdown.Toggle>

        <Dropdown.Menu className="border-0">
          <Card className="border-1" style={{ width: '18rem' }}>
            <Card.Header>
              <span className="float-start">
                <strong>Account</strong>
              </span>
              <Button
                className="btn-sm float-end"
                variant="secondary"
                onClick={() => {
                  deactivate()
                }}
              >
                Disconnect
              </Button>
            </Card.Header>
            <Card.Body>
              <Image
                className="me-2"
                style={{ width: '40px' }}
                src="/icons/placeholder.png"
                max-width="50px"
                roundedCircle
              />
              {walletButtonText}
              <div className="pt-3">Balance</div>
              <strong>
                <Balance />
              </strong>
            </Card.Body>
            <Card.Footer>
              <span className="me-2 align-middle badge border border-light rounded-circle bg-success p-2">
                <span className="visually-hidden">unread messages</span>
              </span>
              <span className=" align-middle">
                {getNetworkName(chainId || 0)}
              </span>
            </Card.Footer>
          </Card>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

export const DisconnectedWalletBotton = (props: { handleShow: any }) => {
  return (
    <Button variant="primary" onClick={() => props.handleShow()}>
      Connect Wallet
    </Button>
  )
}

export const WalletModal = (props: {
  showModal: boolean
  handleClose: any
}) => {
  const { activate } = useWeb3React()
  return (
    <Modal show={props.showModal} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Select a wallet provider</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <Button
          className="me-2"
          variant="light"
          onClick={() => {
            activate(injected)
            props.handleClose()
          }}
        >
          <Image
            className="me-2"
            style={{ width: '25px' }}
            src="/icons/metamask-fox.svg"
            max-width="50px"
          />
          Metamask
        </Button>
        <Button
          className="me-2"
          variant="light"
          onClick={() => {
            activate(walletconnect)
            props.handleClose()
          }}
        >
          <Image
            className="me-2"
            style={{ width: '25px' }}
            src="/icons/wallet-connect.svg"
            max-width="50px"
          />
          WalletConnect
        </Button>
        <Button
          className="me-2"
          variant="light"
          onClick={() => {
            activate(walletlink)
            props.handleClose()
          }}
        >
          <Image
            className="me-2"
            style={{ width: '25px' }}
            src="/icons/coinbase-wallet.svg"
            max-width="50px"
          />
          WalletLink
        </Button>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
