import { useEffect } from 'react'
import { selectTheme } from '@redux/slices/theme'
import { Col, Form, Nav, Row } from 'react-bootstrap'
import { useWeb3React } from '@web3-react/core'

import { selectSwap } from '@redux/slices/swap'
import { setAction, setTokenToById, swapUpdateToken, swapUpdateTokenProduct } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

import {
  GroupButtons,
  GroupInputFrom,
  GroupInputTo,
  GroupSelectFrom,
  GroupSelectTo,
  ShowResponse,
  TransakButton,
} from './controls'
import { useRouter } from 'next/router'

export const Swap = () => {
  const theme = useSelector(selectTheme)
  const router = useRouter()
  const { token, tokenProduct, status } = useSelector(selectSwap)
  const dispatch = useDispatch()
  const { library, account } = useWeb3React()

  useEffect(() => {
    
    if (library) {
      if (router?.query?.id) {
      dispatch(swapUpdateToken(token.id))
      dispatch(setTokenToById(Number(router?.query?.id)))
      dispatch(swapUpdateTokenProduct(Number(router?.query?.id)))
    }}
  }, [router?.query?.id, library, account])

  return (
    <div>
      <Nav
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
      <ShowResponse />
    </div>
  )
}
