import { Button, Card, Table } from '@components/csComponents'

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
import { useEthers } from '@usedapp/core'

export const Tokens = () => {
  const theme = useSelector(selectTheme)
  const { account } = useEthers()
  const tokensProductTotalSupply = useTokensTotalSupply(tokensProduct)
  const tokensProductPrice = useTokensSetPrice(tokensProduct)

  return (
    <div className="pb-5">
      <h4 className={`pb-2 text-${theme.textMode}`}>Investments Tokens</h4>
      <Card>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Symbol</th>
              <th className="d-none d-md-table-cell">Name</th>
              <th className="text-end d-none d-sm-table-cell">Price</th>
              <th className="text-end d-none d-sm-table-cell">Market Cap</th>
              <th className="text-end">Fees</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="border-top">
            {tokensProduct?.map((token, idx) => (
              <tr key={idx}>
                <td>
                  <img
                    src={token.image}
                    alt=""
                    width="25"
                    className="me-2 rounded"
                  ></img>
                </td>
                <td>{token.symbol}</td>
                <td className="d-none d-md-table-cell">{token.name}</td>
                <td className="text-end d-none d-sm-table-cell">
                  {tokensProductPrice?.[idx] &&
                    currencyFormat(tokensProductPrice[idx]![0])}
                </td>
                <td className="text-end d-none d-sm-table-cell">
                  {tokensProductTotalSupply?.[idx] &&
                    currencyFormat(
                      mulFormat(
                        tokensProductTotalSupply[idx]![0],
                        tokensProductPrice[idx]![0],
                      ),
                    )}
                </td>
                <td className="text-end">{token.fee}</td>
                <td className="text-center">
                  {
                    account && 
                  <Link
                    href={{
                      pathname: '/token/[id]',
                      query: { id: token.id },
                    }}
                  >
                    {/* <Button className="btn-sm me-2">Invest</Button> */}
                    <a className="btn-sm me-2">Invest</a>
                  </Link>
                  }
                  <Link
                    href={{
                      pathname: '/token/[id]',
                      query: { id: token.id },
                    }}
                  >
                    <a className="btn-sm">View</a>
                    {/* <Button className="btn-sm me-2">View</Button> */}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </div>
  )
}
