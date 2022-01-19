import { Hero, Tokens, UserProfile } from '@components'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { useEthers } from '@usedapp/core'
import { Container } from 'react-bootstrap'

const Home = () => {
  const { account } = useEthers()
  return (
    <div>
      <Container>{account ? <UserProfile /> : <Hero />}</Container>
      <Container>
        <Tokens />
      </Container>
    </div>
  )
}

export const getStaticProps = async (props: { locale: any }) => ({
  props: {
    ...await serverSideTranslations(props.locale, ['common']),
  },
}) 

export default Home
