import { selectTheme } from '@redux/slices/theme'
import {
  shortenAddress,
  useEtherBalance,
  useEthers,
  useLookupAddress,
} from '@usedapp/core'
import { Image, Modal } from 'react-bootstrap'

import {
  Button,
  Spacer,
  HStack,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Portal,
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { balanceFormat } from 'src/services/tokenSetv2'

import {
  injected,
  // network,
  walletconnect,
  walletlink,
} from '../../services/connectors'
import { useTranslation } from 'next-i18next'

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
  const { account, deactivate } = useEthers()
  const { t } = useTranslation()
  const balance = useEtherBalance(account)
  const ens = useLookupAddress()
  const theme = useSelector(selectTheme)
  return (
    <>
      <Popover placement="bottom-start">
        <PopoverTrigger>
          <Button colorScheme="orange">
            <Image
              className="me-2"
              style={{ width: '20px' }}
              src="/icons/placeholder.png"
              max-width="50px"
              roundedCircle
            />
            {ens ?? shortenAddress(account || '')}
          </Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader>
              <strong>{t('account')}</strong>
            </PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              <HStack py="3">
                <Image
                  className="me-2"
                  style={{ width: '40px' }}
                  src="/icons/placeholder.png"
                  max-width="50px"
                  roundedCircle
                />
                <Text>{ens ?? shortenAddress(account || '')}</Text>
              </HStack>

              <Text>{t('token_balance')}</Text>
              <Text>
                <strong>{balanceFormat(balance || 0)}</strong>
              </Text>
            </PopoverBody>
            <PopoverFooter>
              <HStack>
                <div className="d-inline align-middle">
                  <span className="me-2 badge rounded-circle bg-success p-1">
                    <span className="visually-hidden">unread messages</span>
                  </span>
                  <span>Polygon</span>
                </div>
                <Spacer />
                <Button
                  colorScheme="orange"
                  size="xs"
                  variant="solid"
                  onClick={() => {
                    deactivate()
                  }}
                >
                  {t('btn_disconnectWallet')}
                </Button>
              </HStack>
            </PopoverFooter>
          </PopoverContent>
        </Portal>
      </Popover>
    </>
  )
}

export const DisconnectedWalletBotton = (props: { handleShow: any }) => {
  const theme = useSelector(selectTheme)
  const { t } = useTranslation()
  return (
    // <CSButton onClick={() => props.handleShow()} className={`bg-${theme.bgMode} text-${theme.textMode}`}>
    //     {t('btn_connectWallet')}
    // </CSButton>
    <Button
      colorScheme="orange"
      variant="solid"
      onClick={() => props.handleShow()}
    >
      {t('btn_connectWallet')}
    </Button>
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
        closeButton
      >
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
      <Modal.Footer className={`bg-${theme.bgMode} text-${theme.textMode}`}>
        <Button variant="info" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
