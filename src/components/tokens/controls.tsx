import { useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'

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
import { tokensProduct } from 'src/constants/tokens'
import ComponentsChart from '@components/charts'
import { useToken, useTokenBalance, useEthers } from '@usedapp/core'
import { useCoingeckoTokenPrice } from '@usedapp/coingecko'
import { formatUnits } from '@ethersproject/units'
import { TokenLogo } from '@components/helpers'
import { useTranslation } from 'next-i18next'
import { selectActiveToken } from '@redux/slices/tokens'

import {
  Heading,
  HStack,
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from '@chakra-ui/react'

export const TokenHeader = () => {
  const { t } = useTranslation()
  const activeToken = useSelector(selectActiveToken)
  const tokensProductPrice = useTokensSetPrice(tokensProduct)

  return (
    <>
      <HStack>
        <img
          src={activeToken.image}
          alt=""
          width="27"
          height="27"
          className="me-2 rounded pb-1"
        />
        <Heading as="h4" pb={2}>
          {activeToken.symbol}
        </Heading>
      </HStack>
      <Heading as="h2" pb={2}>
        {activeToken.name}
      </Heading>
      <Text>{t('token_price')}</Text>
      <Heading as="h1" pb={2}>
        {tokensProductPrice?.[activeToken.id] &&
          currencyFormat(tokensProductPrice[activeToken.id]![0])}
      </Heading>
    </>
  )
}

export const TokenStats = () => {
  const { t } = useTranslation()
  const activeToken = useSelector(selectActiveToken)

  const tokensProductPrice = useTokensSetPrice(tokensProduct)
  const tokensProductTotalSupply = useTokensTotalSupply(tokensProduct)

  return (
    <>
      <Row className="pb-4">
        <Col className="col-sm-4 col-12 pb-2">
          <Stat>
            <StatLabel>{t('token_marketCap')}</StatLabel>
            <StatNumber>
              {tokensProductTotalSupply?.[activeToken.id] &&
                currencyFormat(
                  mulFormat(
                    tokensProductTotalSupply[activeToken.id]![0],
                    tokensProductPrice[activeToken.id]![0],
                  ),
                )}
            </StatNumber>
          </Stat>
        </Col>
        <Col className="col-sm-4 col-12 pb-2">
          <Stat>
            <StatLabel>{t('token_totalSupply')}</StatLabel>
            <StatNumber>
              {tokensProductTotalSupply?.[activeToken.id] &&
                amountFormat(tokensProductTotalSupply[activeToken.id]![0])}
            </StatNumber>
          </Stat>
        </Col>
        <Col className="col-sm-4 col-12 pb-2">
          <Stat>
            <StatLabel>{t('token_fees')}</StatLabel>
            <StatNumber>{activeToken.fee}</StatNumber>
          </Stat>
        </Col>
      </Row>
    </>
  )
}

export const TokenAbout = () => {
  const { t } = useTranslation()
  const activeToken = useSelector(selectActiveToken)
  return (
    <Box pb={7}>
      <Heading as="h4" pb={4}>
        {t('token_about')}
      </Heading>
      <Text>{t(activeToken.about)}</Text>
    </Box>
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
    <Tr>
      <Td>
        <HStack>
          {<TokenLogo symbol={token?.symbol || ''} />}
          <Text>{token?.symbol}</Text>
        </HStack>
      </Td>
      <Td isNumeric>{tokenPorcentPosition}</Td>
      <Td isNumeric>{'$' + (tokenBalance * Number(setBalance)).toFixed(2)}</Td>
    </Tr>
  )
}

export const TokenComponents = () => {
  const { t } = useTranslation()
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
      <Heading as="h4" pb={4}>
        {t('token_components')}
      </Heading>
      <Table>
        <Thead>
          <Tr>
            <Th>{t('components_name')}</Th>
            <Th isNumeric>{t('components_porcent')}</Th>
            <Th isNumeric>{t('components_balance')}</Th>
          </Tr>
        </Thead>
        <Tbody>
          {components?.map((address: string) => (
            <TokenComponent
              key={address}
              setAddress={activeToken.contractPolygon}
              componentAddress={address}
            />
          ))}
        </Tbody>
        <Thead>
          <Tr>
            <Th></Th>
            <Th className="d-none d-md-table-cell text-end">
              {t('components_total')}
            </Th>
            <Th className="d-none d-md-table-cell text-end">
              {'$' + (Number(setBalance) * Number(setPrice)).toFixed(2)}
            </Th>
          </Tr>
        </Thead>
      </Table>
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
