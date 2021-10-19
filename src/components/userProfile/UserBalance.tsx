//import useTokens from '../../hooks/useTokens'

import { formatUnits } from '@ethersproject/units'
import { RootState } from '@redux/store'
import { useSelector } from 'react-redux'
import { primaryColor } from 'src/constants/styles'

export const UserBalance = () => {
  const balance = useSelector((state: RootState) => state.tokens.totalBalance)
  return (
    <div
      className="text-center py-5 text-white"
      style={{ backgroundColor: primaryColor }}
    >
      <p>My Total Balance</p>
      
      <h2>${Number(formatUnits(balance)).toFixed(2)}</h2>
    </div>
  )
}
