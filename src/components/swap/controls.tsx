import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Form, Modal } from 'react-bootstrap'
import { cleanResponse, selectSwap, swapApprove, swapRedeemExactSetForToken } from '@redux/slices/swap'
import {
  setTokenFrom,
  setTokenTo,
  setActiveFocus,
  setAmoutFrom,
  setAmoutTo,
  swapUpdateToken,
  swapUpdateTokenProduct,
  swapGetEstimatedIssueSetAmount,
  swapGetAmountInToIssueExactSet,
  swapIssueExactSetFromToken,
} from '../../redux/actions'
import { formatUnits, parseUnits } from '@ethersproject/units'
import { selectTokensProduct } from '@redux/slices/tokens'
import { polygonUrlTx } from 'src/constants/web3'
import Link from 'next/link'
import { openTransak } from '@components/transak'
import { selectTheme } from '@redux/slices/theme'

export const SelectTokensFrom = () => {
  const { token, tokenProduct, tokenList, status } = useSelector(selectSwap)
  const dispatch = useDispatch()

  return (
    <Form.Select
      key={token.id}
      value={token.id}
      onChange={(e) => {
        dispatch(swapUpdateToken(parseInt(e.currentTarget.value)))
        dispatch(setTokenFrom(tokenList[parseInt(e.currentTarget.value)]))
        if (status.action == 'Invest')
          dispatch(
            swapGetEstimatedIssueSetAmount({
              contractAddressTo: tokenProduct.contractPolygon,
              contractAddressFrom:
                tokenList[parseInt(e.currentTarget.value)].contractPolygon,
              amountFrom: status.amountFrom
                ? parseUnits(
                    status.amountFrom,
                    tokenList[parseInt(e.currentTarget.value)].decimals,
                  )
                : 0,
            }),
          )
        else
          dispatch(
            swapGetAmountInToIssueExactSet({
              contractAddressTo: tokenProduct.contractPolygon,
              contractAddressFrom:
                tokenList[parseInt(e.currentTarget.value)].contractPolygon,
              amountTo: status.amountTo
                ? parseUnits(status.amountTo, tokenProduct.decimals)
                : 0,
            }),
          )
      }}
    >
      {tokenList.map((token) => {
        return (
          <option key={token.id} value={token.id}>
            {token.symbol}
          </option>
        )
      })}
    </Form.Select>
  )
}

export const SelectTokensTo = () => {
  const { tokenProduct, token, status } = useSelector(selectSwap)
  const tokensProduct = useSelector(selectTokensProduct)
  const dispatch = useDispatch()

  return (
    <Form.Select
      key={tokenProduct.id}
      value={tokenProduct.id}
      onChange={(e) => {
        dispatch(swapUpdateTokenProduct(parseInt(e.currentTarget.value)))
        dispatch(setTokenTo(tokensProduct[parseInt(e.currentTarget.value)]))
        if (status.action == 'Invest')
          dispatch(
            swapGetEstimatedIssueSetAmount({
              contractAddressTo:
                tokensProduct[parseInt(e.currentTarget.value)].contractPolygon,
              contractAddressFrom: token.contractPolygon,
              amountFrom: status.amountFrom
                ? parseUnits(status.amountFrom, token.decimals)
                : 0,
            }),
          )
        else
          dispatch(
            swapGetAmountInToIssueExactSet({
              contractAddressTo:
                tokensProduct[parseInt(e.currentTarget.value)].contractPolygon,
              contractAddressFrom: token.contractPolygon,
              amountTo: status.amountTo
                ? parseUnits(
                    status.amountTo,
                    tokensProduct[parseInt(e.currentTarget.value)].decimals,
                  )
                : 0,
            }),
          )
      }}
    >
      {tokensProduct.map((token) => {
        return (
          <option key={token.id} value={token.id}>
            {token.symbol}
          </option>
        )
      })}
    </Form.Select>
  )
}

export const GroupSelectFrom = () => {
  const { token, status } = useSelector(selectSwap)
  const dispatch = useDispatch()
  return (
    <Form.Group
      onFocus={() => dispatch(setActiveFocus('From'))}
      className="mb-3"
    >
      <Form.Label className="text-end pt-1">{status.labelFrom}</Form.Label>
      <SelectTokensFrom />
      <Form.Label className="pt-2">{token.name}</Form.Label>
    </Form.Group>
  )
}

export const GroupSelectTo = () => {
  const { tokenProduct, status } = useSelector(selectSwap)
  const dispatch = useDispatch()
  return (
    <Form.Group onFocus={() => dispatch(setActiveFocus('To'))} className="mb-3">
      <Form.Label className="text-end pt-1">{status.labelTo}</Form.Label>
      <SelectTokensTo />
      <Form.Label className="pt-2">{tokenProduct.name}</Form.Label>
    </Form.Group>
  )
}

export const MaxButton = () => {
  const { token, tokenProduct, status } = useSelector(selectSwap)
  const dispatch = useDispatch()

  const updateAmount = () => {
    if (status.action === 'Invest') {
      dispatch(
        setAmoutFrom(
          (Number(formatUnits(token.balance, token.decimals)) / 1.006).toFixed(4),
        ),
      )
      dispatch(
        swapGetEstimatedIssueSetAmount({
          contractAddressTo: tokenProduct.contractPolygon,
          contractAddressFrom: token.contractPolygon,
          amountFrom: parseUnits((Number(formatUnits(token.balance, token.decimals)) / 1.006).toFixed(4),token.decimals)
          //amountFrom: token.balance,
        }),
      )
    } else {
      dispatch(
        setAmoutTo(
          (Number(formatUnits(tokenProduct.balance, tokenProduct.decimals)) / 1.00001).toFixed(4),
        ),
      )
      dispatch(
        swapGetAmountInToIssueExactSet({
          contractAddressTo: tokenProduct.contractPolygon,
          contractAddressFrom: token.contractPolygon,
          amountTo: parseUnits((Number(formatUnits(tokenProduct.balance, tokenProduct.decimals)) / 1.00001).toFixed(4),tokenProduct.decimals)
          //amountTo: tokenProduct.balance,
        }),
      )
    }
  }

  return (
    <Button
      className="align-top"
      size="sm"
      variant="link"
      onClick={() => {
        updateAmount()
      }}
    >
      Max
    </Button>
  )
}



export const TransakButton = () => {
  return (
    // <Link href='/buy'>
    // <a>Buy Crypto</a>
    // </Link>
        <Button
      className="align-top"
      size="sm"
      variant="link"
      onClick={() => {
        openTransak()
      }}
    >
      Buy Crypto
    </Button>
  )
}


export const InputAmountFrom = () => {
  const { token, tokenProduct, status } = useSelector(selectSwap)
  const dispatch = useDispatch()
  return (
    <Form.Control
      className="text-end"
      type="number"
      placeholder=""
      value={status.amountFrom}
      onChange={(e) => {
        if (status.activeFocus === 'From') {
          dispatch(setAmoutFrom(e.currentTarget.value))
          dispatch(
            swapGetEstimatedIssueSetAmount({
              contractAddressTo: tokenProduct.contractPolygon,
              contractAddressFrom: token.contractPolygon,
              amountFrom: e.currentTarget.value
                ? parseUnits(e.currentTarget.value, token.decimals)
                : 0,
            }),
          )
        }
      }}
    />
  )
}

export const InputAmountTo = () => {
  const { token, tokenProduct, status } = useSelector(selectSwap)
  const dispatch = useDispatch()
  return (
    <Form.Control
      className="text-end"
      type="number"
      placeholder=""
      value={status.amountTo}
      onChange={(e) => {
        if (status.activeFocus === 'To') {
          dispatch(setAmoutTo(e.currentTarget.value))
          dispatch(
            swapGetAmountInToIssueExactSet({
              contractAddressTo: tokenProduct.contractPolygon,
              contractAddressFrom: token.contractPolygon,
              amountTo: e.currentTarget.value
                ? parseUnits(e.currentTarget.value, tokenProduct.decimals)
                : 0,
            }),
          )
        }
      }}
    />
  )
}

export const GroupInputFrom = () => {
  const { token, status } = useSelector(selectSwap)
  const dispatch = useDispatch()
  return (
    <Form.Group
      onFocus={() => dispatch(setActiveFocus('From'))}
      className="mb-3 text-end"
    >
      <Form.Label className="pt-1">
        Balance:{' '}
        {Number(formatUnits(token.balance || 0, token.decimals)).toFixed(4)}
      </Form.Label>
      {status.action === 'Invest' ? <MaxButton /> : <></>}

      <InputAmountFrom />
      <Form.Label className="pt-2">
        ~$
        {Number(token.price)
          //* Number(activeTokenFrom.balance)
          .toFixed(2)}
      </Form.Label>
    </Form.Group>
  )
}

export const GroupInputTo = () => {
  const { tokenProduct, status } = useSelector(selectSwap)
  const dispatch = useDispatch()
  return (
    <Form.Group
      onFocus={() => dispatch(setActiveFocus('To'))}
      className="mb-3 text-end"
    >
      <Form.Label className="pt-1">
        Balance: {Number(formatUnits(tokenProduct.balance)).toFixed(4)}
      </Form.Label>
      {status.action === 'Withdraw' ? <MaxButton /> : <></>}
      <InputAmountTo />
      <Form.Label className="pt-2">
        ${Number(formatUnits(tokenProduct.total)).toFixed(2)}
      </Form.Label>
    </Form.Group>
  )
}

export const GroupButtons = () => {
  const { token, tokenProduct, status } = useSelector(selectSwap)
  const dispatch = useDispatch()

  const isDisable = () => {
    return false
  }

  const handleApprove = (address: string) => {
    dispatch(
      swapApprove({
        contractAddress: address,
        amount: parseUnits('10')
      }),
    )
  }

  const handleInvest = () => {
    dispatch(
      swapIssueExactSetFromToken({
        contractAddressTo: tokenProduct.contractPolygon,
        contractAddressFrom: token.contractPolygon,
        amountTo: parseUnits(status.amountTo, tokenProduct.decimals),
        amountFrom: parseUnits(
          (Number(status.amountFrom) * 1.005).toFixed(4),
          token.decimals,
        ),
      }),
    )
  }

  const handleWithdraw = () => {
    dispatch(
      swapRedeemExactSetForToken({
        contractAddressTo: tokenProduct.contractPolygon,
        contractAddressFrom: token.contractPolygon,
        amountTo: parseUnits(status.amountTo, tokenProduct.decimals),
        amountFrom: parseUnits(
          (Number(status.amountFrom) * 0.005).toFixed(4),
          token.decimals,
        ),
      }),
    )
  }

  const handleClick = () => {
    if (status.action === 'Invest') {
      if (Number(token.allowance).toFixed(0) === '0')
        handleApprove(token.contractPolygon)
      else
        handleInvest()
    }
    else {
        if (Number(tokenProduct.allowance).toFixed(0) === '0')
          handleApprove(tokenProduct.contractPolygon)
        else
          handleWithdraw()
    }
  }

  return (
    <Form.Group className="mb-3">
      <Form.Control
        className="btn-lg btn-primary bg-gradient"
        type="button"
        value={status.buttonValue}
        disabled={status.enoughAllowance && !status.enoughBalance}
        onClick={() => handleClick()}
      />
      {!status.enoughBalance && <Form.Label className="pt-1">Enough Balance</Form.Label>}      
    </Form.Group>
  )
}

export const ShowResponse = () => {
  const { status } = useSelector(selectSwap)
  const [show, setShow] = useState(false);
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(cleanResponse())
    setShow(false);
  }

  const handleShow = () => setShow(true);
  const theme = useSelector(selectTheme)

  useEffect(() => {
    status.response && handleShow()
  }, [status.response])

  return (
    <>
      <Modal size={status.response?.hash && "lg"} show={show} onHide={handleClose}>
        <Modal.Header 
          closeButton
          className={`bg-${theme.bgMode} text-${theme.textMode}`}>
          <Modal.Title>{status.response?.code ? 'Error Status' : 'Transaction Status'}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={`text-center bg-${theme.bgMode} text-${theme.textMode}`}>
          {status.response?.code ? 
            <>
            {status.response?.message}
            <br /> 
            {status.response?.data?.message}
            </>
          : <>
            {status.response?.hash}  
            <br /> 
            <a target="_blank" href={polygonUrlTx+status.response?.hash}>View</a> 
            </>} 
        </Modal.Body>
        <Modal.Footer  className={`bg-${theme.bgMode} text-${theme.textMode}`}>
          <Button variant="info" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

