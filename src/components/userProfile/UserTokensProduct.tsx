import React from 'react'
import { useSelector } from 'react-redux'
import { selectTheme } from '@redux/slices/theme'
import Link from 'next/link'
import { Button, Card, Table } from '@components/csComponents'
import {
  balanceFormat,
  currencyFormat,
  mulFormat,
  useTokensBalance,
  useTokensSetPrice,
} from 'src/services/tokenSetv2'
import { tokensProduct } from 'src/constants/tokens'
import { useEthers } from '@usedapp/core'
import { useTranslation } from 'next-i18next'

export const UserTokensProduct = () => {
  const theme = useSelector(selectTheme)
  const { t } = useTranslation()
  const tokensProductPrice = useTokensSetPrice(tokensProduct)

  const { account } = useEthers()
  const tokensProductBalance = useTokensBalance(tokensProduct, account)

  return (
    <div className={`pb-5`}>
      <h4 className={`pb-2 text-${theme.textMode}`}>{t("tokensUserList_title")}</h4>
      <Card>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>{t("token_symbol")}</th>
              <th className="d-none d-md-table-cell">{t("token_name")}</th>
              <th className="text-end">{t("token_price")}</th>
              <th className="text-end">{t("token_balance")}</th>
              <th className="text-end d-none d-sm-table-cell">{t("token_total")}</th>
              <th className="text-center d-md-block">{t("token_actions")}</th>
            </tr>
          </thead>

          <tbody className="border-top">
            {tokensProduct?.map(
              (token, idx) =>
                tokensProductBalance?.[idx] &&
                tokensProductBalance?.[idx]?.toString() != '0' && (
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
                    <td className="text-end">
                      {tokensProductPrice?.[idx] &&
                        currencyFormat(tokensProductPrice[idx]![0])}
                    </td>
                    <td className="text-end">
                      {tokensProductBalance?.[idx] &&
                        balanceFormat(tokensProductBalance[idx]![0])}
                    </td>
                    <td className="text-end d-none d-sm-table-cell">
                      {tokensProductBalance?.[idx] &&
                        currencyFormat(
                          mulFormat(
                            tokensProductPrice[idx]![0],
                            tokensProductBalance[idx]![0],
                          ),
                        )}
                    </td>
                    {/* <td className='text-end'>${Number(formatUnits(token.price)).toFixed(2)}</td> */}
                    {/* <td className='text-end'>{Number(formatUnits(token.balance)).toFixed(4)}</td> */}
                    {/* <td className='text-end d-none d-sm-table-cell'>${Number(formatUnits(token.total)).toFixed(2)}</td> */}
                    <td className="text-center">
                    
                      <Link 
                        // href={'/tokens/' + token.symbol.toLowerCase() + '?action=Withdraw'} passHref>
                        href={{
                          pathname: '/tokens/' + `${token.symbol.toLowerCase()}`,
                          query: { action: 'Withdraw' },
                        }}>
                         <a className="btn-sm">{t("btn_withdraw")}</a> 
                        
                      </Link>
                    </td>
                  </tr>
                ),
            )}
          </tbody>
        </Table>
      </Card>
    </div>
  )
}


