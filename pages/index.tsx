import { Hero, Tokens, UserProfile } from '@components'
import { updateTokensProduct } from '@redux/actions'
import { useWeb3React } from '@web3-react/core'
import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

const Home = () => {
  const { library, account  } = useWeb3React()
  const dispatch = useDispatch()

  useEffect(() => {
    library &&
      dispatch(updateTokensProduct())
  }, [library, account]) 

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
