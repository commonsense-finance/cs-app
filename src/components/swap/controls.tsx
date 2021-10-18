import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Form, Modal } from 'react-bootstrap'
import { selectSwap, swapRedeemExactSetForToken } from '@redux/slices/swap'
import {
  setTokenFrom,
  setTokenTo,
  setActiveFocus,
  setAmoutFrom,
  setAmoutTo,
  updateToken,
  swapGetEstimatedIssueSetAmount,
  swapGetAmountInToIssueExactSet,
  swapIssueExactSetFromToken,
} from '../../redux/actions'
import { formatUnits, parseUnits } from '@ethersproject/units'
import { selectTokensList } from '@redux/slices/tokens'
import { polygonUrlTx } from 'src/constants/web3'

export const SelectTokensFrom = () => {
  const { token, tokenProduct, tokenList, status } = useSelector(selectSwap)
  const dispatch = useDispatch()

  return (
    <Form.Select
      key={token.id}
      value={token.id}
      onChange={(e) => {
        dispatch(updateToken(parseInt(e.currentTarget.value)))
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
  const tokensProduct = useSelector(selectTokensList)
  const dispatch = useDispatch()

  return (
    <Form.Select
      key={tokenProduct.id}
      value={tokenProduct.id}
      onChange={(e) => {
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
          Number(formatUnits(token.balance, token.decimals)).toFixed(4),
        ),
      )
      dispatch(
        swapGetEstimatedIssueSetAmount({
          contractAddressTo: tokenProduct.contractPolygon,
          contractAddressFrom: token.contractPolygon,
          amountFrom: token.balance,
        }),
      )
    } else {
      dispatch(
        setAmoutTo(
          Number(
            formatUnits(tokenProduct.balance, tokenProduct.decimals),
          ).toFixed(4),
        ),
      )
      dispatch(
        swapGetAmountInToIssueExactSet({
          contractAddressTo: tokenProduct.contractPolygon,
          contractAddressFrom: token.contractPolygon,
          amountTo: tokenProduct.balance,
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
  return (
    <Form.Group className="mb-3">
      <Form.Control
        className="btn btn-primary"
        type="button"
        value={status.action}
        disabled={!status.enoughBalance}
        onClick={() =>
          status.action === 'Invest'
            ? dispatch(
                swapIssueExactSetFromToken({
                  contractAddressTo: tokenProduct.contractPolygon,
                  contractAddressFrom: token.contractPolygon,
                  amountTo: parseUnits(status.amountTo, tokenProduct.decimals),
                  amountFrom: parseUnits(
                    (Number(status.amountFrom) * 1.005).toString(),
                    token.decimals,
                  ),
                }),
              )
            : dispatch(
                swapRedeemExactSetForToken({
                  contractAddressTo: tokenProduct.contractPolygon,
                  contractAddressFrom: token.contractPolygon,
                  amountTo: parseUnits(status.amountTo, tokenProduct.decimals),
                  amountFrom: parseUnits(
                    (Number(status.amountFrom) * 0.005).toString(),
                    token.decimals,
                  ),
                }),
              )
        }
      />
      {!status.enoughBalance && <Form.Label className="pt-1">Enough Balance</Form.Label>}
      
    </Form.Group>
  )
}

export const ShowResponse = () => {
  const { status } = useSelector(selectSwap)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    status.response && handleShow()
  }, [status.response])

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Open
      </Button>
      <Modal size={status.response?.hash && "lg"} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{status.response?.code ? 'Error Status' : 'Transaction Status'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

