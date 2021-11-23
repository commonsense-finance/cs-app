import { useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import { Table, Card } from '@components/csComponents'

import { useRouter } from 'next/router'
import {
  amountFormat,
  balanceFormat,
  currencyFormat,
  mulFormat,
  useTokenSetComponents,
  useTokensSetPrice,
  useTokensTotalSupply,
} from 'src/services/tokenSetv2'
import { ComponentsTokenProduct, tokensProduct } from 'src/constants/tokens'
import ComponentsChart from '@components/charts'

export const TokenHeader = () => {
  const router = useRouter()
  const activeToken = tokensProduct[Number(router?.query?.id)]
  const tokensProductPrice = useTokensSetPrice(tokensProduct)

  return (
    <>
      <img
        src={activeToken.image}
        alt=""
        width="27"
        height="27"
        className="me-2 rounded pb-1"
      />
      <h4 className="d-inline">{activeToken?.symbol}</h4>
      <h2 className="pb-3">{activeToken?.name}</h2>
      <p>Price</p>
      <h1>
        {tokensProductPrice?.[activeToken?.id] &&
          currencyFormat(tokensProductPrice[activeToken?.id]![0])}
      </h1>
    </>
  )
}

export const TokenStats = () => {
  const router = useRouter()
  const activeToken = tokensProduct[Number(router?.query?.id)]

  const tokensProductPrice = useTokensSetPrice(tokensProduct)
  const tokensProductTotalSupply = useTokensTotalSupply(tokensProduct)

  return (
    <>
      <Row className="pb-4">
        <Col className="col-sm-4 col-12 pb-2">
          <Card>
            <p>Market Cap</p>
            <h3>
              {tokensProductTotalSupply?.[activeToken?.id] &&
                currencyFormat(
                  mulFormat(
                    tokensProductTotalSupply[activeToken?.id]![0],
                    tokensProductPrice[activeToken?.id]![0],
                  ),
                )}
            </h3>
          </Card>
        </Col>
        <Col className="col-sm-4 col-12 pb-2">
          <Card>
            <p>Total Supply</p>
            <h3>
              {tokensProductTotalSupply?.[activeToken?.id] &&
                amountFormat(tokensProductTotalSupply[activeToken?.id]![0])}
            </h3>
          </Card>
        </Col>
        <Col className="col-sm-4 col-12 pb-2">
          <Card>
            <p>Annual Fees </p>
            <h3>{activeToken?.fee}</h3>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export const TokenAbout = () => {
  const router = useRouter()
  const activeToken = tokensProduct[Number(router?.query?.id)]
  return (
    <>
      <h4 className="pb-2">About</h4>
      <p className="pb-4">{activeToken?.about}</p>
    </>
  )
}

export const TokenComponents = () => {
  const router = useRouter()
  const activeToken = tokensProduct[Number(router?.query?.id)]
  //const components = useTokenSetComponents(activeToken.contractPolygon)
  const components = ComponentsTokenProduct[Number(router?.query?.id)]
  return (
    <>
      <h4 className="pb-2">Components</h4>
      <Card>
        <Row>
          <Col>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Token</th>
                  {/* <th className="d-none d-md-table-cell">Value per Token</th> */}
                  <th className="d-none d-md-table-cell text-end">Porcent</th>
                  {/* <th className="text-end">24hs Change</th> */}
                </tr>
              </thead>

              <tbody className="border-top">
                {components?.map((component: any) => (
                  <tr key={component.id}>
                    <td>{component.id + 1}</td>
                    <td>
                      <img
                        src={component.image}
                        alt=""
                        width="23"
                        className="me-2 rounded"
                      ></img>
                      {/* {balanceFormat(component.position, component.decimals) +
                        ' ' + */}
                      {component.symbol}
                    </td>
                    <td className="text-end d-none d-md-table-cell">
                      {component.position}
                    </td>
                    {/* <td className="text-end d-none d-md-table-cell">
                      {component.price}
                    </td>
                    <td className="text-end">{component.price}</td> */}
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
          {/* <Col className="p-4">
            <div>
              <ComponentsChart />
            </div>
          </Col> */}
        </Row>
      </Card>
    </>
  )
}

// export const TokenTransactions = () => {
//   return <h4>Transactions</h4>
// }
