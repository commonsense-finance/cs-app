//import useTokens from '../../hooks/useTokens'

import { formatUnits } from '@ethersproject/units'
import { selectTheme } from '@redux/slices/theme'
import { RootState } from '@redux/store'
import { useSelector } from 'react-redux'

export const UserBalance = () => {
  const { totalBalanceTokensProduct, statusTokensProduct } = useSelector((state: RootState) => state.tokens)
  const theme = useSelector(selectTheme)
  return (
    <div className={`text-center py-5 text-${theme.textMode}`}>
      <p>My Total Balance</p>
      { statusTokensProduct === 'Succsess' ? 
        <h1>${Number(formatUnits(totalBalanceTokensProduct)).toFixed(2)}</h1> 
        :  <h1>{statusTokensProduct}</h1>
      }
      
    </div>
  )
}
