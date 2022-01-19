import { useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import { Table, Card } from '@components/csComponents'

import { useRouter } from 'next/router'
import {
  amountFormat,
  balanceFormat,
  currencyFormat,
  mulFormat,
  useTokenSetComponentPosition,
  useTokenSetComponents,
  useTokenSetPrice,
  useTokensSetPrice,
  useTokensTotalSupply,
} from 'src/services/tokenSetv2'
import { tokensImage, tokensProduct } from 'src/constants/tokens'
import ComponentsChart from '@components/charts'
import { useToken, useTokenBalance, useEthers } from '@usedapp/core'
import { useCoingeckoTokenPrice } from '@usedapp/coingecko'
import { formatUnits } from '@ethersproject/units'
import { TokenLogo } from '@components/helpers'
import { useTranslation } from 'next-i18next'
import { selectActiveToken } from '@redux/slices/tokens'

export const TokenHeader = () => {
  const router = useRouter()
  const { t } = useTranslation()
  const activeToken = useSelector(selectActiveToken) //tokensProduct[Number(router?.query?.id)]
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
      <h4 className="d-inline">{activeToken.symbol}</h4>
      <h2 className="pb-3">{activeToken.name}</h2>
      <p>{t('token_price')}</p>
      <h1>
        {tokensProductPrice?.[activeToken.id] &&
          currencyFormat(tokensProductPrice[activeToken.id]![0])}
      </h1>
    </>
  )
}

export const TokenStats = () => {
  const router = useRouter()
  const { t } = useTranslation()
  //const activeToken = tokensProduct[Number(router?.query?.id)]
  const activeToken = useSelector(selectActiveToken)

  const tokensProductPrice = useTokensSetPrice(tokensProduct)
  const tokensProductTotalSupply = useTokensTotalSupply(tokensProduct)

  return (
    <>
      <Row className="pb-4">
        <Col className="col-sm-4 col-12 pb-2">
          <Card>
            <p>{t('token_marketCap')}</p>
            <h3>
              {tokensProductTotalSupply?.[activeToken.id] &&
                currencyFormat(
                  mulFormat(
                    tokensProductTotalSupply[activeToken.id]![0],
                    tokensProductPrice[activeToken.id]![0],
                  ),
                )}
            </h3>
          </Card>
        </Col>
        <Col className="col-sm-4 col-12 pb-2">
          <Card>
            <p>{t('token_totalSupply')}</p>
            <h3>
              {tokensProductTotalSupply?.[activeToken.id] &&
                amountFormat(tokensProductTotalSupply[activeToken.id]![0])}
            </h3>
          </Card>
        </Col>
        <Col className="col-sm-4 col-12 pb-2">
          <Card>
            <p>{t('token_fees')}</p>
            <h3>{activeToken.fee}</h3>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export const TokenAbout = () => {
  const router = useRouter()
  const { t } = useTranslation()
  //const activeToken = tokensProduct[Number(router?.query?.id)]
  const activeToken = useSelector(selectActiveToken)
  return (
    <>
      <h4 className="pb-2">{t('token_about')}</h4>
      <p className="pb-4">{t(activeToken.about)}</p>
    </>
  )
}

const TokenComponent = (props: {
  setAddress: string
  componentAddress: string
}) => {
  const setAddress = props.setAddress
  const componentAddress = props.componentAddress
  const { account } = useEthers()
  const setBalance = formatUnits(useTokenBalance(setAddress, account) || 0)
  const setPrice = balanceFormat(useTokenSetPrice(setAddress) || 0)
  const token = useToken(componentAddress)
  const tokenPrice = Number(
    useCoingeckoTokenPrice(componentAddress, 'usd', 'polygon-pos'),
  ).toFixed(2)
  const tokenPosition = formatUnits(
    useTokenSetComponentPosition(setAddress, componentAddress) || 0,
    token?.decimals,
  )
  const tokenBalance = Number(tokenPrice) * Number(tokenPosition)
  const tokenPorcentPosition =
    ((tokenBalance * 100) / Number(setPrice)).toFixed(2) + '%'

  return (
    <tr>
      <td>
        {<TokenLogo symbol={token?.symbol || ''} />}
        {token?.symbol}
      </td>
      <td className="text-end">{tokenPorcentPosition}</td>
      <td className="text-end">
        {'$' + (tokenBalance * Number(setBalance)).toFixed(2)}
      </td>
    </tr>
  )
}

export const TokenComponents = () => {
  const router = useRouter()
  const { t } = useTranslation()
  //const activeToken = tokensProduct[Number(router?.query?.id)]
  const activeToken = useSelector(selectActiveToken)
  const components = useTokenSetComponents(activeToken.contractPolygon)
  const { account } = useEthers()
  const setBalance = formatUnits(
    useTokenBalance(activeToken.contractPolygon, account) || 0,
  )
  const setPrice = balanceFormat(
    useTokenSetPrice(activeToken.contractPolygon) || 0,
  )

  return (
    <>
      <h4 className="pb-2">{t('token_components')}</h4>
      <Card>
        <Row>
          <Col>
            <Table>
              <thead>
                <tr>
                  <th>{t('components_name')}</th>
                  <th className="d-none d-md-table-cell text-end">{t('components_porcent')}</th>
                  <th className="d-none d-md-table-cell text-end">{t('components_balance')}</th>
                </tr>
              </thead>
              <tbody className="border-top">
                {components?.map((address: string) => (
                  <TokenComponent
                    key={address}
                    setAddress={activeToken.contractPolygon}
                    componentAddress={address}
                  />
                ))}
              </tbody>
              <thead className="border-top">
                <tr>
                  <th></th>
                  <th className="d-none d-md-table-cell text-end">{t('components_total')}</th>
                  <th className="d-none d-md-table-cell text-end">
                    {'$'+(Number(setBalance) * Number(setPrice)).toFixed(2)}
                  </th>
                </tr>
              </thead>
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

// export const TokenComponents = () => {
//   const router = useRouter()
//   const activeToken = tokensProduct[Number(router?.query?.id)]
//   //const components = useTokenSetComponents(activeToken.contractPolygon)
//   const components = ComponentsTokenProduct[Number(router?.query?.id)]
//   return (
//     <>
//       <h4 className="pb-2">Components</h4>
//       <Card>
//         <Row>
//           <Col>
//             <Table>
//               <thead>
//                 <tr>
//                   <th>#</th>
//                   <th>Token</th>
//                   {/* <th className="d-none d-md-table-cell">Value per Token</th> */}
//                   <th className="d-none d-md-table-cell text-end">Porcent</th>
//                   {/* <th className="text-end">24hs Change</th> */}
//                 </tr>
//               </thead>

//               <tbody className="border-top">
//                 {components?.map((component: any) => (
//                   <tr key={component.id}>
//                     <td>{component.id + 1}</td>
//                     <td>
//                       <img
//                         src={component.image}
//                         alt=""
//                         width="23"
//                         className="me-2 rounded"
//                       ></img>
//                       {/* {balanceFormat(component.position, component.decimals) +
//                         ' ' + */}
//                       {component.symbol}
//                     </td>
//                     <td className="text-end d-none d-md-table-cell">
//                       {component.position}
//                     </td>
//                     {/* <td className="text-end d-none d-md-table-cell">
//                       {component.price}
//                     </td>
//                     <td className="text-end">{component.price}</td> */}
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           </Col>
//           {/* <Col className="p-4">
//             <div>
//               <ComponentsChart />
//             </div>
//           </Col> */}
//         </Row>
//       </Card>
//     </>
//   )
// }

// export const TokenTransactions = () => {
//   return <h4>Transactions</h4>
// }
