import { RootState } from '@redux/store'
import { useSelector } from 'react-redux'
import { selectTokensActive } from '@redux/slices/tokens'
import { Card, Col, Row, Table } from 'react-bootstrap'
import { formatUnits } from '@ethersproject/units'

export const TokenHeader = () => {
  const activeToken = useSelector(selectTokensActive)
  return (
    <>
      <img
        src={activeToken?.image}
        alt=""
        width="23"
        className="me-2 rounded pb-1"
      ></img>

      {activeToken?.symbol}

      <h4>{activeToken?.name}</h4>
      <h4>${Number(formatUnits(activeToken.price)).toFixed(2)}</h4>
    </>
  )
}

export const TokenStats = () => {
  const activeToken = useSelector(selectTokensActive)
  return (
    <>
      <Row className="pb-4">
        <Col className="col-4">
          <Card>
            <Card.Body>
              Market Cap
              <h4>${Number(formatUnits(activeToken.marketCap)).toFixed(2)}</h4>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-4">
          <Card>
            <Card.Body>
              Total Supply
              <h4>{Number(formatUnits(activeToken.totalSupply)).toFixed(2)}</h4>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-4">
          <Card>
            <Card.Body>
              Fees
              <h4>{activeToken?.fee}</h4>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export const TokenAbout = () => {
  const activeToken = useSelector(selectTokensActive)
  return (
    <>
      <h4>About</h4>
      <p className="pb-4">{activeToken?.about}</p>
    </>
  )
}

export const TokenComponents = () => {
    const { components } = useSelector(selectTokensActive)
  return (
    <>
      <h4>Components</h4>
      <Table className="table-borderless  pb-5">
        <thead className="border-button">
          <tr>
            <th>#</th>
            <th>Amount per Token</th>
            <th>Value per Token</th>
            <th>Porcent</th>
            <th>24hs Change</th>
          </tr>
        </thead>

        <tbody className="border-top">
          {components?.map((component, index) => (
            <tr key={index}>
              <td>
                <img src={''} alt="" width="23" className="me-2 rounded"></img>
              </td>
              <td>{Number(formatUnits(component.position, component.decimals)).toFixed(5) + ' ' + component.symbol}</td>
              <td className='text-end'>{component.price}</td>
              <td className='text-end'>{component.price}</td>
              <td className='text-end'>{component.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

// export const TokenTransactions = () => {
//   return <h4>Transactions</h4>
// }
