import { useEffect } from 'react'
import { selectTheme } from '@redux/slices/theme'
import { Col, Form, Nav, Row, Spinner } from 'react-bootstrap'

import { selectSwap } from '@redux/slices/swap'
import { setAction, setAmoutFrom, setAmoutTo } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

import {
  GroupButtons,
  GroupInputFrom,
  GroupInputTo,
  GroupSelectFrom,
  GroupSelectTo,
  ShowNotification,
  TransakButton,
} from './controls'

import { parseUnits } from '@ethersproject/units'
import { BigNumber } from '@ethersproject/bignumber'
import { balanceFormat, useGetSetEstimated } from 'src/services/tokenSetv2'


export const Swap = () => {
  const theme = useSelector(selectTheme)
  const { token, tokenProduct, status } = useSelector(selectSwap)
  const dispatch = useDispatch()

  const auxAmount =
    status.action === 'Invest'
      ? parseUnits(status.amountFrom ? status.amountFrom : '0', token.decimals)
      : parseUnits(
          status.amountTo ? status.amountTo : '0',
          tokenProduct.decimals,
        )

  const estimated = useGetSetEstimated(
    tokenProduct.contractPolygon,
    token.contractPolygon,
    auxAmount.toString() !== '0' ? auxAmount : BigNumber.from(0),
    status.action,
  )

  useEffect(() => {
    status.action === 'Invest'
      ? dispatch(setAmoutTo(balanceFormat(estimated, tokenProduct.decimals)))
      : dispatch(setAmoutFrom(balanceFormat(estimated, token.decimals)))
  }, [estimated])

  return (
    <div>
      <Nav
        justify
        className={`mb-2 border-0 `}
        variant="tabs"
        activeKey={status.action}
        onSelect={(selectedKey) => dispatch(setAction(selectedKey))}
      >
        <Nav.Item>
          <Nav.Link
            className={`bg-${status.action === 'Invest' && theme.bgMode} 
              text-${status.action === 'Invest' && theme.textMode} 
              border-${theme.darkMode ? '0' : '1'}`}
            eventKey="Invest"
          >
            Invest
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className={`bg-${status.action === 'Withdraw' && theme.bgMode} 
              text-${status.action === 'Withdraw' && theme.textMode} border-${
              theme.darkMode ? '0' : '1'
            }`}
            eventKey="Withdraw"
          >
            Withdraw
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="text-end p-2 ps-3">
          {status.transactionStatus?.status === 'Mining' && (
            <>
              <Spinner
                variant="primary"
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            </>
          )}
        </Nav.Item>
      </Nav>

      <Form>
        <Row
          className={`g-2 p-3 rounded shadow-sm bg-${theme.bgMode} ${
            !theme.darkMode && 'border'
          }`}
        >
          {status.action === 'Invest' ? (
            <>
              <Col className="col-5">
                <GroupSelectFrom />
              </Col>
              <Col className="col-7">
                <GroupInputFrom />
              </Col>
              <Col className="col-5">
                <GroupSelectTo />
              </Col>
              <Col className="col-7">
                <GroupInputTo />
              </Col>
            </>
          ) : (
            <>
              <Col className="col-5">
                <GroupSelectTo />
              </Col>
              <Col className="col-7">
                <GroupInputTo />
              </Col>
              <Col className="col-5">
                <GroupSelectFrom />
              </Col>
              <Col className="col-7">
                <GroupInputFrom />
              </Col>
            </>
          )}

          <Col>
            <GroupButtons />
            <TransakButton />
          </Col>
        </Row>
      </Form>
      <ShowNotification />
    </div>
  )
}
