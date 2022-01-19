import { selectContact } from '@redux/slices/contact'
import { selectTheme } from '@redux/slices/theme'
import { useTranslation } from 'next-i18next'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Login, Logout, Wallet, Funds} from './controls'

export const Onbording = () => {
  const contact = useSelector(selectContact)
  const theme = useSelector(selectTheme)
  const { t } = useTranslation()
  return (
    <Container className={`text-${theme.textMode} py-4 w-50`}>
      <h1 className='pb-3'>{t('hero_title')}</h1>
      {contact.isLogin ? <Logout /> : <Login /> }
      <Wallet />
      <Funds />
    </Container>
  )
}

export default Onbording
