
import { selectSwap } from '@redux/slices/swap'
import { selectTheme } from '@redux/slices/theme'
import { useEffect } from 'react'
import { Col, Form, Nav, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { setAction, updateToken } from '../../redux/actions'

import {
  GroupButtons,
  GroupInputFrom,
  GroupInputTo,
  GroupSelectFrom,
  GroupSelectTo,
  ShowResponse,
} from './controls'

export const Swap = () => {
  const { token, status } = useSelector(selectSwap)
  const dispatch = useDispatch()
  const theme = useSelector(selectTheme)

  useEffect(() => {
    dispatch(updateToken(token.id))
  }, [])

  return (
    <div >
      <Nav
        className={`mb-2 border-0 `}
        variant="tabs"
        activeKey={status.action}
        onSelect={(selectedKey) =>
          dispatch(setAction(selectedKey))
        }
      >
        <Nav.Item >
          <Nav.Link  
            className={`bg-${status.action === "Invest" && theme.bgMode} 
              text-${status.action === "Invest" && theme.textMode} 
              border-${theme.darkMode ? "0" : "1"}`} eventKey="Invest">Invest</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className={`bg-${status.action === "Withdraw" && theme.bgMode} 
              text-${status.action === "Withdraw" && theme.textMode} border-${theme.darkMode ? "0" : "1"}`} eventKey="Withdraw">Withdraw</Nav.Link>
        </Nav.Item>
      </Nav>

      <Form >
        <Row className={`g-2 p-3 rounded shadow-sm bg-${theme.bgMode} ${!theme.darkMode && 'border'}`}>
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
          </Col>
        </Row>
      </Form>
      <ShowResponse />
    </div>
  )
}
