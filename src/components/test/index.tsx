import { Button } from "@components/csComponents"
import { selectTheme } from "@redux/slices/theme"
import { ERC20Interface, useContractCalls, useEtherBalance, useEthers, useTokenBalance } from "@usedapp/core"
import { formatEther, formatUnits } from "ethers/lib/utils"
import { Container } from "react-bootstrap"
import { useSelector } from "react-redux"
import { tokensProduct } from "src/constants/tokens"
import exchangeIssuanceV2ABI from '../../services/ABI/exchangeIssuanceV2.json'
import { utils } from 'ethers'



export function Test() {
    const theme = useSelector(selectTheme)
    const { activateBrowserWallet, deactivate, account, library } = useEthers()
    const etherBalance = useEtherBalance(account)
   
    
    const cstop = useTokenBalance('0xff3ee79CB4A7Fe0F78a3634cCfDbFc3CdCD65a64', account)
    const tandt = useTokenBalance('0x04A250E193571A5621998F61bb258701c8a6034d', account)
    // const tokensBalances = useTokensBalance(tokensProduct, account)
    // const tokensTotalSupply = useTokensTotalSupply(tokensProduct)
    // const tokensPrice = useTokensPrice(tokensProduct)



    return (
      <Container >
        <div className='py-2'>
          {account ? 
            <Button onClick={() => deactivate()}>Disconnect</Button> 
            : <Button onClick={() => activateBrowserWallet()}>Connect</Button> }
          
        </div>
      </Container>
    )
  }