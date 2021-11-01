import { useSelector } from 'react-redux'
import { selectActiveTokenProduct } from '@redux/slices/tokens'
import { Col, Row } from 'react-bootstrap'
import { formatUnits } from '@ethersproject/units'
import { Table, Card } from '@components/csComponents'
import { RootState } from '@redux/store'


export const TokenHeader = () => {
  const activeToken = useSelector(selectActiveTokenProduct)
  const { statusTokensProduct } = useSelector((state: RootState) => state.tokens)
  return (
    <>
        <img
          src={activeToken?.image}
          alt=""
          width='30'
          className="me-2 rounded pb-1"
        />
        <h4 className='d-inline'>{activeToken?.symbol}</h4>
      <h2>{activeToken?.name}</h2>
      { statusTokensProduct === 'Succsess' ? 
        <h1>${Number(formatUnits(activeToken.price)).toFixed(2)}</h1>
        :  <h1>{statusTokensProduct}</h1>
      }
      
    </>
  )
}

export const TokenStats = () => {
  const activeToken = useSelector(selectActiveTokenProduct)
  return (
    <>
      <Row className="pb-4">
        <Col className="col-sm-4 col-12 pb-2">
          <Card>
            <p>Market Cap</p>
            <h3>${Number(formatUnits(activeToken.marketCap)).toFixed(2)}</h3>
          </Card>
        </Col>
        <Col className="col-sm-4 col-12 pb-2">
          <Card>
            <p>Total Supply</p>
            <h3>{Number(formatUnits(activeToken.totalSupply)).toFixed(2)}</h3>
          </Card>
        </Col>
        <Col className="col-sm-4 col-12 pb-2">
          <Card>
            <p>Fees</p>
            <h3>{activeToken?.fee}</h3>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export const TokenAbout = () => {
  const activeToken = useSelector(selectActiveTokenProduct)
  return (
    <>
      <h4 className="pb-2">About</h4>
      <p className="pb-4">{activeToken?.about}</p>
    </>
  )
}

export const TokenComponents = () => {
  const { components } = useSelector(selectActiveTokenProduct)
  return (
    <>
      <h4 className="pb-2">Components</h4>
      <Card>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Amount per Token</th>
              {/* <th className="d-none d-md-table-cell">Value per Token</th>
              <th className="d-none d-md-table-cell">Porcent</th> */}
              <th className="text-end">24hs Change</th>
            </tr>
          </thead>

          <tbody className="border-top">
            {components?.map((component, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={''}
                    alt=""
                    width="23"
                    className="me-2 rounded"
                  ></img>
                </td>
                <td>
                  {Number(
                    formatUnits(component.position, component.decimals),
                  ).toFixed(5) +
                    ' ' +
                    component.symbol}
                </td>
                {/* <td className="text-end d-none d-md-table-cell">{component.price}</td>
                <td className="text-end d-none d-md-table-cell">{component.price}</td> */}
                <td className="text-end">{component.price}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </>
  )
}

// export const TokenTransactions = () => {
//   return <h4>Transactions</h4>
// }
