import { Hero, Tokens, UserProfile } from '@components'
import { selectTheme } from '@redux/slices/theme'
import { useWeb3React } from '@web3-react/core'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const Home = () => {
  const { account } = useWeb3React()
  const theme = useSelector(selectTheme)
  return (
    <div>
      {account ? <UserProfile /> : <Hero />}
      <Container >
        <Tokens />
      </Container>
    </div>
  )
}

export default Home
