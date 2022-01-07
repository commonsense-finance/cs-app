import { selectContact } from '@redux/slices/contact'
import { selectTheme } from '@redux/slices/theme'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Login, Logout, Wallet, Funds} from './controls'

export const Onbording = () => {
  const contact = useSelector(selectContact)
  const theme = useSelector(selectTheme)
  return (
    <Container className={`text-${theme.textMode} py-4 w-50`}>
      <h1 className='pb-3'>Onbording</h1>
      {contact.isLogin ? <Logout /> : <Login /> }
      <Wallet />
      <Funds />
    </Container>
  )
}

export default Onbording
