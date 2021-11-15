import { Container } from 'react-bootstrap'
import { UserBalance } from './UserBalance'
import { UserTokensProduct } from './UserTokensProduct'

export const UserProfile = () => {
  return (
    <>
      <UserBalance />
      <UserTokensProduct />
    </>
  )
}
