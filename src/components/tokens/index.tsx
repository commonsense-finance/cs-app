import { Button, Card } from '@components/csComponents'

import Link from 'next/link'

import { useSelector } from 'react-redux'
import { selectTheme } from '@redux/slices/theme'

import { tokensProduct } from 'src/constants/tokens'
import {
  currencyFormat,
  mulFormat,
  useTokensSetPrice,
  useTokensTotalSupply,
} from 'src/services/tokenSetv2'
import { useEthers, Polygon } from '@usedapp/core'
import { BoxArrowUpRight } from 'react-bootstrap-icons'
import { AddTokenToMetamask } from '@components/metamask'
import { useTranslation } from 'next-i18next'

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
} from '@chakra-ui/react'

export const Tokens = () => {
  const theme = useSelector(selectTheme)
  const { t } = useTranslation()
  const { account } = useEthers()
  const tokensProductTotalSupply = useTokensTotalSupply(tokensProduct)
  const tokensProductPrice = useTokensSetPrice(tokensProduct)

  return (
    <div className="pb-5">
      <Heading as="h4" pb={2}>
        {t('tokensList_title')}
      </Heading>

      <Table>
        <Thead>
          <Tr>
            <Th>{t('token_symbol')}</Th>
            <Th>{t('token_name')}</Th>
            <Th isNumeric>{t('token_price')}</Th>
            <Th isNumeric>{t('token_marketCap')}</Th>
            <Th isNumeric>{t('token_fees')}</Th>
            <Th>{t('token_actions')}</Th>
          </Tr>
        </Thead>
        <Tbody className="border-top">
          {tokensProduct?.map((token, idx) => (
            <Tr key={idx}>
              <Td>
                <HStack>
                  <img
                    src={token.image}
                    alt=""
                    width="25"
                    className="me-2 rounded"
                  ></img>
                  <Text>{token.symbol}</Text>
                </HStack>
              </Td>
              <Td>{token.name}</Td>
              <Td isNumeric>
                {tokensProductPrice?.[idx] &&
                  currencyFormat(tokensProductPrice[idx]![0])}
              </Td>
              <Td className="text-end d-none d-sm-table-cell">
                {tokensProductTotalSupply?.[idx] &&
                  currencyFormat(
                    mulFormat(
                      tokensProductTotalSupply[idx]![0],
                      tokensProductPrice[idx]![0],
                    ),
                  )}
              </Td>
              <Td isNumeric>{token.fee}</Td>
              <Td>
                <HStack>
                  <Link
                    href={{
                      pathname: '/tokens/' + `${token.symbol.toLowerCase()}`,
                    }}
                  >
                    {/* <Button className="btn-sm me-2">Invest</Button> */}
                    <a>{account ? t('btn_invest') : t('btn_view')}</a>
                  </Link>
                  <AddTokenToMetamask />
                  <a
                    href={Polygon.getExplorerAddressLink(token.contractPolygon)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BoxArrowUpRight />
                  </a>
                </HStack>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  )
}
