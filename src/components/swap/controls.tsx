
import { useDispatch, useSelector } from 'react-redux'
import { Button, Form } from 'react-bootstrap'
import { selectSwap, swapRedeemExactSetForToken } from '@redux/slices/swap'
import { setTokenFrom, setTokenTo, setActiveFocus, setAmoutFrom, setAmoutTo, invest, updateToken, 
  swapGetEstimatedIssueSetAmount, swapGetAmountInToIssueExactSet, swapIssueExactSetFromToken } from '../../redux/actions'
import { formatUnits, parseUnits } from '@ethersproject/units'
import { selectTokensList } from '@redux/slices/tokens'


export const SelectTokensFrom = () => {
  const { token, tokenList } = useSelector(selectSwap)
  const dispatch = useDispatch()

  return (
    <Form.Select
      key={token.id}
      value={token.id}
      onChange={(e) => {
        dispatch(updateToken(parseInt(e.currentTarget.value)))
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
    </Form.Select>
  )
}

export const SelectTokensTo = () => {
  const { tokenProduct } = useSelector(selectSwap)
  const tokensProduct = useSelector(selectTokensList)
  const dispatch = useDispatch()

  return (
    <Form.Select
      key={tokenProduct.id}
      value={tokenProduct.id}
      onChange={(e) =>
        dispatch(setTokenTo(tokensProduct[parseInt(e.currentTarget.value)]))
      }
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
  const { token, result } = useSelector(selectSwap)
  const dispatch = useDispatch()
  return (
    <Form.Group
      onFocus={() =>
        dispatch(setActiveFocus('From'))
      }
      className="mb-3"
    >
      <Form.Label className="text-end pt-1">{result.labelFrom}</Form.Label>
      <SelectTokensFrom />
      <Form.Label className="pt-2">{token.name}</Form.Label>
    </Form.Group>
  )
}

export const GroupSelectTo = () => {
  const { tokenProduct, result } = useSelector(selectSwap)
  const dispatch = useDispatch()
  return (
    <Form.Group
      onFocus={() =>
        dispatch(setActiveFocus('To'))
      }
      className="mb-3"
    >
      <Form.Label className="text-end pt-1">{result.labelTo}</Form.Label>
      <SelectTokensTo />
      <Form.Label className="pt-2">{tokenProduct.name}</Form.Label>
    </Form.Group>
  )
}

export const MaxButton = () => {
  const { token, tokenProduct, result } = useSelector(selectSwap)
  const dispatch = useDispatch()

  const updateAmount = () => {
    if (result.action === 'Invest')
      dispatch(setAmoutFrom(Number(formatUnits(token.balance,token.decimals)).toFixed(4)))
    else
      dispatch(setAmoutTo(Number(formatUnits(tokenProduct.balance,token.decimals)).toFixed(4)))
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
  const { token, tokenProduct, result } = useSelector(selectSwap)
  const dispatch = useDispatch()
  return (
    <Form.Control
      className="text-end"
      type="number"
      placeholder=""
      value={result.amountFrom}
      onChange={(e) => {
        if (result.activeFocus === 'From') {
          dispatch(setAmoutFrom(e.currentTarget.value))
          dispatch(swapGetEstimatedIssueSetAmount({
            contractAddressTo: tokenProduct.contractPolygon, 
            contractAddressFrom: token.contractPolygon, 
            amountFrom: parseUnits(e.currentTarget.value, token.decimals)
          }))
        }}}
    />
  )
}

export const InputAmountTo = () => {
  const { token, tokenProduct, result } = useSelector(selectSwap)
  const dispatch = useDispatch()
  return (
    <Form.Control
      className="text-end"
      type="number"
      placeholder=""
      value={result.amountTo}
      onChange={(e) => {
        if (result.activeFocus === 'To') {
          dispatch(setAmoutTo(e.currentTarget.value))
          dispatch(swapGetAmountInToIssueExactSet({
            contractAddressTo: tokenProduct.contractPolygon, 
            contractAddressFrom: token.contractPolygon, 
            amountTo: parseUnits(e.currentTarget.value, tokenProduct.decimals)
          }))
      }}}
    />
  )
}

export const GroupInputFrom = () => {
  const { token, result } = useSelector(selectSwap)
  const dispatch = useDispatch()
  return (
    <Form.Group
      onFocus={() =>
        dispatch(setActiveFocus('From'))
      }
      className="mb-3 text-end"
    >
      <Form.Label className="pt-1">
        Balance: {Number(formatUnits(token.balance || 0,token.decimals)).toFixed(4)}
      </Form.Label>
      {result.action === 'Invest' ? <MaxButton /> : <></>}

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
  const { tokenProduct, result } = useSelector(selectSwap)
  const dispatch = useDispatch()
  return (
    <Form.Group
      onFocus={() =>
        dispatch(setActiveFocus('To'))
      }
      className="mb-3 text-end"
    >
      <Form.Label className="pt-1">
        Balance: {Number(formatUnits(tokenProduct.balance)).toFixed(4)}
      </Form.Label>
      {result.action === 'Withdraw' ? <MaxButton /> : <></>}
      <InputAmountTo />
      <Form.Label className="pt-2">
        ${Number(formatUnits(tokenProduct.total)).toFixed(2)}
      </Form.Label>
    </Form.Group>
  )
}


export const GroupButtons = () => {
  const { token, tokenProduct, result } = useSelector(selectSwap)
  const dispatch = useDispatch()
  return (
    <Form.Group className="mb-3 text-end">
      <Form.Control
        className="btn btn-primary"
        type="button"
        value={result.action}
        onClick={()=>
          result.action === 'Invest' ?
          dispatch(swapIssueExactSetFromToken({
            contractAddressTo: tokenProduct.contractPolygon, 
            contractAddressFrom: token.contractPolygon, 
            amountTo: parseUnits(result.amountTo, tokenProduct.decimals),
            amountFrom: parseUnits((Number(result.amountFrom)*1.5).toString(), token.decimals)
          })):
          dispatch(swapRedeemExactSetForToken({
            contractAddressTo: tokenProduct.contractPolygon, 
            contractAddressFrom: token.contractPolygon, 
            amountTo: parseUnits(result.amountTo, tokenProduct.decimals),
            amountFrom: parseUnits((Number(result.amountFrom)*0.5).toString(), token.decimals)
          }))
        }
      />
    </Form.Group>
  )
}
