import { Button, Card, Table } from '@components/csComponents'

import Link from 'next/link'

import { useSelector } from 'react-redux'
import { selectTokensList } from '@redux/slices/tokens'
import { formatUnits } from '@ethersproject/units'
import { selectTheme } from '@redux/slices/theme'

export const Tokens = () => {
  const theme = useSelector(selectTheme)
  const tokens = useSelector(selectTokensList)

  return (
    <div className="pb-5">
      <h4 className={`pb-2 text-${theme.textMode}`}>Investments Tokens</h4>
      <Card>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Symbol</th>
              <th>Name</th>
              <th className="text-end">Market Cap</th>
              <th className="text-end">Fees</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="border-top">
            {tokens?.map((token, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={token.image}
                    alt=""
                    width="23"
                    className="me-2 rounded"
                  ></img>
                </td>
                <td>{token.symbol}</td>
                <td>{token.name}</td>
                <td className="text-end">
                  ${Number(formatUnits(token.marketCap)).toFixed(2)}
                </td>
                <td className="text-end">{token.fee}</td>
                <td className="text-center">
                  {/* <SwapOffcanvas 
                        action="Invest" 
                        tokenId={token.id} /> */}
                  <Link href={'/token/' + token.id + '?action=Invest'}>
                    <Button className="btn-sm me-2">Invest</Button>
                  </Link>
                  <Link href={'/token/' + token.id + '?action=Invest'}>
                    <Button className="btn-sm">View</Button>
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
