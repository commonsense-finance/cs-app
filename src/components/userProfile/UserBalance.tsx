

import { selectTheme } from '@redux/slices/theme'
import { useEthers } from '@usedapp/core'
import { useSelector } from 'react-redux'
import { tokensProduct } from 'src/constants/tokens'
import { currencyFormat, useTotalBalance } from 'src/services/tokenSetv2'

export const UserBalance = () => {
  
  const theme = useSelector(selectTheme)
  const { account } = useEthers()
  const totalBalance = useTotalBalance(tokensProduct, account)
  
  return (
    <div className={`text-center py-5 text-${theme.textMode}`}>
      <p className='pb-2'>My Common Sense Total</p>
      <h1>{currencyFormat(totalBalance)}</h1> 
    </div>
  )
}
