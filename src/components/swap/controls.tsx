import { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { selectSwap } from '@redux/slices/swap'
import {
  setTokenFrom,
  setTokenTo,
  setAmoutFrom,
  setAmoutTo,
  setTransactionStatus,
} from '../../redux/actions'

import { Form, Modal, Spinner } from 'react-bootstrap'
import { CheckCircle, XCircle, BoxArrowUpRight } from 'react-bootstrap-icons'



import { formatUnits, parseUnits } from '@ethersproject/units'
import { openTransak } from '@components/transak'
import { selectTheme } from '@redux/slices/theme'

import {
  Notification,
  useEthers,
  useGasPrice,
  useNotifications,
  useTokenAllowance,
  useTokenBalance,
} from '@usedapp/core'

import { useCoingeckoTokenPrice } from '@usedapp/coingecko'

import {
  amountFormat,
  balanceFormat,
  currencyFormat,
  intFormat,
  useApproveSet,
  useIssueSet,
  useRedeemSet,
  useTokenSetPrice,
} from 'src/services/tokenSetv2'

import { exchangeIssuanceV2 } from 'src/constants/contracts'

import { WalletModal } from '@components/wallet/controls'
import { useTranslation } from 'next-i18next'

import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Flex,
  Spacer,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  HStack,
  Link,
  Text
} from '@chakra-ui/react'


export const SelectTokensFrom = () => {
  const { token, tokenList } = useSelector(selectSwap)
  const dispatch = useDispatch()
  return (
    <Select
      variant="filled"
      key={token.id}
      value={token.id}
      onChange={(e) => {
        dispatch(setTokenFrom(tokenList[parseInt(e.currentTarget.value)]))
      }}
    >
      {tokenList.map((token) => {
        return (
          <option key={token.id} value={token.id}>
            {token.symbol}
          </option>
        )
      })}
    </Select>
  )
}

export const SelectTokensTo = () => {
  const { tokenProduct, tokenProductList } = useSelector(selectSwap)
  const dispatch = useDispatch()

  return (
    <Select
      variant="filled"
      key={tokenProduct.id}
      value={tokenProduct.id}
      onChange={(e) => {
        dispatch(setTokenTo(tokenProductList[parseInt(e.currentTarget.value)]))
      }}
    >
      {tokenProductList.map((token) => {
        return (
          <option key={token.id} value={token.id}>
            {token.symbol}
          </option>
        )
      })}
    </Select>
  )
}

export const GroupSelectFrom = () => {
  const { token, status } = useSelector(selectSwap)
  const { t } = useTranslation()
  return (
    <FormControl>
      <FormLabel>{t(status.labelFrom)}</FormLabel>
      <SelectTokensFrom />
      <FormHelperText>{token.name}</FormHelperText>
    </FormControl>
  )
}

export const GroupSelectTo = () => {
  const { tokenProduct, status } = useSelector(selectSwap)
  const { t } = useTranslation()
  return (
    <FormControl>
      <FormLabel>{t(status.labelTo)}</FormLabel>
      <SelectTokensTo />
      <FormHelperText>{tokenProduct.name}</FormHelperText>
    </FormControl>
  )
}

export const InputAmountFrom = () => {
  const { status } = useSelector(selectSwap)
  const dispatch = useDispatch()
  return (
    <NumberInput precision={5} variant="filled" value={status.amountFrom}>
      <NumberInputField
        onChange={(e) => {
          status.action === 'Invest' &&
            dispatch(setAmoutFrom(e.currentTarget.value))
        }}
      />
    </NumberInput>
  )
}

export const InputAmountTo = () => {
  const { status } = useSelector(selectSwap)
  const dispatch = useDispatch()
  return (
    <NumberInput precision={5} variant="filled" value={status.amountTo}>
      <NumberInputField
        onChange={(e) => {
          status.action === 'Withdraw' &&
            dispatch(setAmoutTo(e.currentTarget.value))
        }}
      />
    </NumberInput>
  )
}

export const GroupInputFrom = () => {
  const { token, status } = useSelector(selectSwap)
  const { t } = useTranslation()
  const { account } = useEthers()
  const tokenBalance = useTokenBalance(token.contractPolygon, account)
  const tokenPrice = useCoingeckoTokenPrice(
    token.contractPolygon,
    'usd',
    'polygon-pos',
  )

  return (
    <FormControl>
      <Flex>

        <FormHelperText pb={2}>
          {t('token_balance')}: {balanceFormat(tokenBalance || 0, token.decimals)}
        </FormHelperText>
        <Spacer />
        {status.action === 'Invest' && <MaxButton />}
      </Flex>
      <InputAmountFrom />
      <FormHelperText>${Number(tokenPrice || 0).toFixed(2)}</FormHelperText>
    </FormControl>
  )
}

export const GroupInputTo = () => {
  const { tokenProduct, status } = useSelector(selectSwap)
  const { t } = useTranslation()
  const { account } = useEthers()
  const tokenBalance = useTokenBalance(tokenProduct.contractPolygon, account)
  const tokenPrice = useTokenSetPrice(tokenProduct.contractPolygon)

  return (
    <FormControl>
      <Flex>
        <FormHelperText pb={2}>
          {t('token_balance')}:{' '}
          {balanceFormat(tokenBalance || 0, tokenProduct.decimals)}
        </FormHelperText>
        <Spacer />
        {status.action === 'Withdraw' && <MaxButton />}
      </Flex>
      <InputAmountTo />
      <FormHelperText>
        {currencyFormat(tokenPrice || 0, tokenProduct.decimals)}
      </FormHelperText>
    </FormControl>
  )
}

export const MaxButton = () => {
  const { token, tokenProduct, status } = useSelector(selectSwap)
  const { account } = useEthers()
  const tokenBalance = useTokenBalance(token.contractPolygon, account)
  const tokenProductBalance = useTokenBalance(
    tokenProduct.contractPolygon,
    account,
  )

  const dispatch = useDispatch()

  const handleSetAmountFrom = () => {
    dispatch(
      setAmoutFrom(
        (
          Number(formatUnits(tokenBalance || 0, token.decimals)) / 1.006
        ).toFixed(5),
      ),
    )
  }

  const handleSetAmountTo = () => {
    dispatch(
      setAmoutTo(
        (
          Number(formatUnits(tokenProductBalance || 0, tokenProduct.decimals)) /
          1.00001
        ).toFixed(4),
      ),
    )
  }

  return (
    <Button
      size="sm"
      variant="link"
      disabled={!account}
      onClick={() => {
        status.action === 'Invest' ? handleSetAmountFrom() : handleSetAmountTo()
      }}
    >
      Max
    </Button>
  )
}

export const GroupButtons = () => {
  const { token, tokenProduct, status } = useSelector(selectSwap)
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const { account } = useEthers()
  const gasPrice = useGasPrice()

  const selectedToken = status.action === 'Invest' ? token : tokenProduct

  const enoughInput =
    status.action === 'Invest'
      ? parseUnits(
        status.amountFrom ? status.amountFrom : '0',
        token.decimals,
      ).gt(0)
      : parseUnits(
        status.amountTo ? status.amountTo : '0',
        tokenProduct.decimals,
      ).gt(0)

  const allowanceAmount = useTokenAllowance(
    selectedToken.contractPolygon,
    account,
    exchangeIssuanceV2.contractPolygon,
  )
  const enoughAllowance = allowanceAmount?.toString() !== '0'

  const balance = useTokenBalance(selectedToken.contractPolygon, account)
  const enoughBalance = balance?.gt(
    parseUnits(
      status.action === 'Invest'
        ? status.amountFrom || '0'
        : status.amountTo || '0',
      selectedToken.decimals,
    ),
  )

  const approve = useApproveSet(selectedToken.contractPolygon)
  const issue = useIssueSet()
  const redeem = useRedeemSet()

  useEffect(() => {
    dispatch(setTransactionStatus(approve.state))
  }, [approve.state])

  useEffect(() => {
    dispatch(setTransactionStatus(issue.state))
  }, [issue.state])

  useEffect(() => {
    dispatch(setTransactionStatus(redeem.state))
  }, [redeem.state])

  const handleApprove = () => {
    approve.send(
      exchangeIssuanceV2.contractPolygon,
      '115792089237316195423570985008687907853269984665640564039457584007913129639935',
    )
  }

  const handleInvest = () => {
    issue.send(
      tokenProduct.contractPolygon,
      token.contractPolygon,
      parseUnits(status.amountTo, tokenProduct.decimals),
      parseUnits(
        (Number(status.amountFrom) * 1.005).toFixed(4),
        token.decimals,
      ),
      { gasPrice: gasPrice, gasLimit: 1500000 },
    )
  }

  const handleWithdraw = () => {
    redeem.send(
      tokenProduct.contractPolygon,
      token.contractPolygon,
      parseUnits(status.amountTo, tokenProduct.decimals),
      parseUnits(
        (Number(status.amountFrom) * 0.005).toFixed(4),
        token.decimals,
      ),
      { gasPrice: 30000000000, gasLimit: 1500000 },
    )
  }

  const [showModal, setShowModal] = useState(false)

  const handleClose = () => setShowModal(false)
  const handleShow = () => setShowModal(true)

  return (
    <>
      {/* CONNECTED BUTTON */}
      {!account && (
        <Button colorScheme='csGreen' onClick={() => handleShow()}>{t('btn_connectWallet')}</Button>
      )}

      {/* APPROVE BUTTON */}
      {!enoughAllowance && (
        <Button colorScheme='csGreen' onClick={() => handleApprove()}>{`${t('btn_approve')} ${selectedToken.symbol}`}</Button>
      )}

      {/* INVEST AND WITHDRAW BUTTON */}
      {account && (
        <Button 
          colorScheme='csGreen' 
          onClick={() => status.action === 'Invest' ? handleInvest() : handleWithdraw()} 
          disabled={!enoughAllowance || !enoughBalance || !enoughInput}>
          {enoughBalance ? status.action === 'Invest' ? `${t('btn_invest')}` : `${t('btn_withdraw')}` : `${t('btn_enoughBalance')}`}
        </Button>
      )}
      {/* <div>{approve.state.status}</div> */}

      <WalletModal showModal={showModal} handleClose={handleClose} />
    </>
  )
}

export const TransakButton = () => {
  const { account } = useEthers()
  const { t } = useTranslation()
  return (
    <div className="pb-3">
      <Button
        variant="link"
        onClick={() => {
          openTransak(account)
        }}
      >
        {t('btn_butCrypto')}
      </Button>
    </div>
  )
}

export const GroupSumary = () => {
  const gasPrice = useGasPrice()
  const { t } = useTranslation()
  return (
    <Text fontSize='6xl'>
      {t('gas_price')}: {intFormat(gasPrice || 0, 9)} Gwei
    </Text>
  )
}

export const GroupFooter = () => {
  const { t } = useTranslation()
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <AccordionButton>
          <Box flex='1' textAlign='left'>
            <Text>{t('disclaimer_title')}</Text>
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={5}>
          <HStack >
            <Box >
              <Text>{t('disclaimer')}</Text>
              <Link href='https://www.commonsense.finance/comisiones-riesgos' isExternal>
                <BoxArrowUpRight />
              </Link>
            </Box>

          </HStack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export const ShowNotification = () => {
  interface INotification {
    title: string
    icon: JSX.Element
    urlTx: string
  }

  const [activeNotification, setActiveNotification]:
    | INotification
    | any = useState(null)
  const theme = useSelector(selectTheme)
  const { notifications } = useNotifications()

  const showModal = activeNotification !== null

  const handleClose = () => {
    setActiveNotification(null)
  }

  useEffect(() => {
    //console.log(notifications[0])
    notifications[0] &&
      'transaction' in notifications[0] &&
      setActiveNotification({
        title: notificationContent[notifications[0].type].title,
        icon: notificationContent[notifications[0].type].icon,
        type: notificationContent[notifications[0].type].type,
        transaction: notifications[0]?.transaction,
      })
  }, [notifications])

  const notificationContent: {
    [key in Notification['type']]: {
      title: string
      icon: JSX.Element
      type: string
    }
  } = {
    transactionFailed: {
      title: 'Transaction Failed',
      icon: <XCircle size="40px" color="#f34837" />,
      type: 'Failed',
    },
    transactionStarted: {
      title: 'Transaction Sent',
      icon: (
        <Spinner
          variant="primary"
          as="span"
          animation="border"
          role="status"
          aria-hidden="true"
          className="p-4"
        />
      ),
      type: 'Sent',
    },
    transactionSucceed: {
      title: 'Transaction Succeed',
      icon: <CheckCircle size="40px" color="#75bfc0" />,
      type: 'Succeed',
    },
    walletConnected: {
      title: 'Wallet connected',
      icon: <CheckCircle size="40px" color="#f34837" />,
      type: 'Connected',
    },
  }

  return (
    <>
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header
          closeButton
          closeVariant={theme.darkMode ? 'white' : undefined}
          className={`bg-${theme.bgMode} text-${theme.textMode}`}
        >
          <Modal.Title>{activeNotification?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body
          className={`text-center bg-${theme.bgMode} text-${theme.textMode}`}
        >
          <div className="py-3">{activeNotification?.icon}</div>
          <a
            // href={getExplorerTransactionLink(
            //   activeNotification?.transaction?.hash,
            //   137,
            // )}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Polygonscan <BoxArrowUpRight />
          </a>
        </Modal.Body>
        <Modal.Footer className={`bg-${theme.bgMode} text-${theme.textMode}`}>
          <Button variant="info" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
