import { Main, Tokens, UserProfile } from '@components'
import { useWeb3React } from '@web3-react/core'

const Home = () => {
  const { account } = useWeb3React()
  return (
    <div>
      {account ? (
        <UserProfile />
      ) : ( 
      <Main /> )}
      <Tokens />
    </div>
  )
}

export default Home
