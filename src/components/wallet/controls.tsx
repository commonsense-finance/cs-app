import { selectTheme } from '@redux/slices/theme'
import { shortenAddress, useEtherBalance, useEthers, useLookupAddress } from '@usedapp/core'
import { Card, Dropdown, Image, Button, Modal } from 'react-bootstrap'
import { Button as CSButton  } from '@components/csComponents'
import { useSelector } from 'react-redux'
import { balanceFormat } from 'src/services/tokenSetv2'

import {
  injected,
  // network,
  walletconnect,
  walletlink,
} from '../../services/connectors'

// export const AccountButton = () => {
//   const { account, deactivate, activateBrowserWallet } = useEthers()
//   const ens = useLookupAddress()
//   const [showModal, setShowModal] = useState(false)

//   const [activateError, setActivateError] = useState('')
//   const { error } = useEthers()
  
//   useEffect(() => {
//     if (error) {
//       setActivateError(error.message)
//     }
//   }, [error])

//   const activate = async () => {
//     setActivateError('')
//     activateBrowserWallet()
//   }

//   return (
//     <Account>
//       <ErrorWrapper>{activateError}</ErrorWrapper>
//       {showModal && <AccountModal setShowModal={setShowModal} />}
//       {account ? (
//         <>
//           <AccountLabel onClick={() => setShowModal(!showModal)}>{ens ?? shortenAddress(account)}</AccountLabel>
//           <LoginButton onClick={() => deactivate()}>Disconnect</LoginButton>
//         </>
//       ) : (
//         <LoginButton onClick={activate}>Connect</LoginButton>
//       )}
//     </Account>
//   )
// }

export const ConnectedWalletButton = () => {
  const { account, deactivate, chainId } = useEthers()
  const balance = useEtherBalance(account)
  const ens = useLookupAddress()
  const theme = useSelector(selectTheme)
  return (
    <>
      <Dropdown align="end">
        <Dropdown.Toggle
          className="border rounded-pill"
          variant={theme.bgMode}
          id="dropdown-basic"
        >
          <Image
            className="me-2"
            style={{ width: '20px' }}
            src="/icons/placeholder.png"
            max-width="50px"
            roundedCircle
          />
          {ens ?? shortenAddress(account || '')}
        </Dropdown.Toggle>

        <Dropdown.Menu className={`border-0 bg-transparent`}>
          <Card className={`border-1 text-${theme.textMode} bg-${theme.bgMode}`} style={{ width: '19rem' }}>
            <Card.Header>
              <span className="float-start">
                <strong>Account</strong>
              </span>
              
            </Card.Header>
            <Card.Body  style={{ backgroundColor: theme.bgSoftColor }}>
              <Image
                className="me-2"
                style={{ width: '40px' }}
                src="/icons/placeholder.png"
                max-width="50px"
                roundedCircle
              />
              {ens ?? shortenAddress(account || '')}
              <div className="pt-3">Balance</div>
              <strong>
                {balanceFormat(balance || 0)}
              </strong>
            </Card.Body>
            <Card.Footer>
              <div className="d-inline align-middle">
              <span className="me-2 badge rounded-circle bg-success p-1">
                <span className="visually-hidden">unread messages</span>
              </span>
              <span>
                Polygon
              </span>
              </div>
              
              <Button
                className="btn-sm float-end"
                variant="info"
                onClick={() => {
                  deactivate()
                }}
              >
                Disconnect
              </Button>
            </Card.Footer>
          </Card>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

export const DisconnectedWalletBotton = (props: { handleShow: any }) => {
  const theme = useSelector(selectTheme)
  return (
    <CSButton onClick={() => props.handleShow()} className={`bg-${theme.bgMode} text-${theme.textMode}`}>
        Connect Wallet
    </CSButton>
  )
}

export const WalletModal = (props: {
  showModal: boolean
  handleClose: any
}) => {
  const { activateBrowserWallet } = useEthers()
  const theme = useSelector(selectTheme)
  return (
    <Modal show={props.showModal} onHide={props.handleClose}>
      <Modal.Header
        className={`bg-${theme.bgMode} text-${theme.textMode}`}
        //style={{ background: theme.bgColor,  }} 
        closeButton>
        <Modal.Title>Select a wallet provider</Modal.Title>
      </Modal.Header>
      <Modal.Body 
        className={`text-center bg-${theme.bgMode} text-${theme.textMode}`}
        >
        <Button
          className={`me-2`}
          variant={theme.bgMode}
          onClick={() => {
            activateBrowserWallet()
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
          variant={theme.bgMode}
          onClick={() => {
            //activate(walletconnect)
            props.handleClose()
          }}
          disabled={true}
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
          variant={theme.bgMode}
          onClick={() => {
            //activate(walletlink)
            props.handleClose()
          }}
          disabled={true}
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
      <Modal.Footer
        className={`bg-${theme.bgMode} text-${theme.textMode}`}
      >
        <Button variant="info" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
