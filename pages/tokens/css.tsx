import { useDispatch } from 'react-redux'
import { useEffect} from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { setActiveToken } from '@redux/actions'
import TokensLayout from '@components/tokens/layout'


const Tokens = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setActiveToken(1))
  }, [])

  return (
    <TokensLayout />
  )
}

export const getStaticProps = async (props: { locale: any }) => ({
  props: {
    ...await serverSideTranslations(props.locale, ['common']),
  }
})

export default Tokens
