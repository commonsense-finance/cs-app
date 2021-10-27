import React from 'react'
import { useSelector } from 'react-redux'
import { selectTokensList } from '@redux/slices/tokens'
import { selectTheme } from '@redux/slices/theme'
import { formatUnits } from '@ethersproject/units'
import Link from 'next/link'
import { Button, Card, Table } from '@components/csComponents'

export const UserTokensProduct = () => {
  const tokens = useSelector(selectTokensList)
  const theme = useSelector(selectTheme)
  return (
    <div className={`pb-5`} >
      <h4 className={`pb-2 text-${theme.textMode}`}>My Investments</h4>
      <Card >
          <Table >
            <thead>
              <tr>
                <th>#</th>
                <th>Symbol</th>
                <th>Name</th>
                <th className='text-end'>Price</th>
                <th className='text-end'>Balance</th>
                <th className='text-end'>Total</th>
                <th className='text-center'>Actions</th>
              </tr>
            </thead>

            <tbody className="border-top">
              {tokens?.map(
                (token, index) =>
                  token.balance != 0 && (
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
                      <td className='text-end'>${Number(formatUnits(token.price)).toFixed(2)}</td>
                      <td className='text-end'>{Number(formatUnits(token.balance)).toFixed(4)}</td>
                      <td className='text-end'>${Number(formatUnits(token.total)).toFixed(2)}</td>
                      <td className='text-center'>
                        <Link href={"/token/" + token.id + '?action=Withdraw'}><Button className="btn-sm">Withdraw</Button></Link>
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </Table>
      </Card>
    </div>
  )
}
