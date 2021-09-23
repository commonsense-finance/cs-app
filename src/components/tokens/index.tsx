
import { Container, Table, Card, Button } from 'react-bootstrap'
//import { SwapOffcanvas } from './Swap/SwapOffcanvas'
import Link from 'next/link'

import { useSelector } from 'react-redux'
import { selectTokensList } from '@redux/slices/tokens'
import { formatUnits } from '@ethersproject/units'

export const Tokens = () => {
  
  const tokens = useSelector(selectTokensList)

  return (
    <div>
      <Container className="py-5">
        <h4 className="pb-2">Investments Tokens</h4>
        <Card className="rounded">
          <Card.Body>
            <Table className="table-borderless">
              <thead className="border-button">
                <tr>
                  <th>#</th>
                  <th>Symbol</th>
                  <th>Name</th>
                  <th className='text-end'>Market Cap</th>
                  <th className='text-end'>Fees</th>
                  <th className='text-center'>Actions</th>
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
                    <td className='text-end'>
                      ${Number(formatUnits(token.marketCap)).toFixed(2)}
                    </td>
                    <td className='text-end'>{token.fee}</td>
                    <td className='text-center'>
                      {/* <SwapOffcanvas 
                        action="Invest" 
                        tokenId={token.id} /> */}
                      <Link href={"/token/" + token.id + '?action=Invest'}><a className="btn btn-primary btn-sm me-2">Invest</a></Link>
                      <Link href={"/token/" + token.id + '?action=Invest'}><a className="btn btn-primary btn-sm">View</a></Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
        
      </Container>
    </div>
  )
}
