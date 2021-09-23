import React from 'react'
import { Container, Card, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { selectTokensList } from '@redux/slices/tokens'
import { formatUnits } from '@ethersproject/units'
import Link from 'next/link'

//import { SwapOffcanvas } from '../Swap/SwapOffcanvas'

export const UserTokens = () => {
  
  const tokens = useSelector(selectTokensList)
  return (
    <Container className="pt-5">
      <h4 className="pb-2">My Investments</h4>
      <Card className="rounded">
        <Card.Body>
          <Table className="table-borderless">
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
                        <Link href={"/token/" + token.id + '?action=Withdraw'}><a className="btn btn-primary btn-sm">Withdraw</a></Link>
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  )
}
