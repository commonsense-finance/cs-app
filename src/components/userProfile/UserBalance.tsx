//import useTokens from '../../hooks/useTokens'

import { formatUnits } from '@ethersproject/units'
import { selectTheme } from '@redux/slices/theme'
import { RootState } from '@redux/store'
import { useSelector } from 'react-redux'

export const UserBalance = () => {
  const balance = useSelector((state: RootState) => state.tokens.totalBalance)
  const theme = useSelector(selectTheme)
  return (
    <div className={`text-center py-5 text-${theme.textMode}`}>
      <p>My Total Balance</p>
      <h1>${Number(formatUnits(balance)).toFixed(2)}</h1>
    </div>
  )
}
