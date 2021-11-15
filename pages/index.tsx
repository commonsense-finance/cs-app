import { Hero, Tokens, UserProfile } from '@components'

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
export default Home
