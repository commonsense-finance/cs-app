import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  updateTokenProduct,
  setActiveTokenProduct,
  swapUpdateToken,
  setTokenTo,
  swapUpdateTokenProduct,
  setAction,
} from '@redux/actions'
import { Col, Row, Container } from 'react-bootstrap'
import {
  TokenAbout,
  TokenComponents,
  TokenHeader,
  TokenStats,
  Swap,
} from '@components'

import { selectTheme } from '@redux/slices/theme'
import { selectSwap } from '@redux/slices/swap'
import { Default, Desktop } from '@components/mediaQuery'
import { useWeb3React } from '@web3-react/core'

const token = () => {
  
  const theme = useSelector(selectTheme)
  const router = useRouter()
  const { token } = useSelector(selectSwap)
  const { library } = useWeb3React()
  const dispatch = useDispatch()

  useEffect(() => {
    if (library) {
      if (router?.query?.id) {
        //for Token Page
        dispatch(setActiveTokenProduct(Number(router?.query?.id)))
        dispatch(updateTokenProduct(Number(router?.query?.id)))
  
        //for Swap
        dispatch(swapUpdateToken(token.id))
        dispatch(swapUpdateTokenProduct(Number(router?.query?.id)))
  
        router.query.action &&
          dispatch(setAction(router.query.action))
      }
    }
    
  }, [router?.query?.id, library])


  return (
    <>
      <Desktop>
        <Container className={`text-${theme.textMode} py-4`}>
          <TokenHeader />
        </Container>
        <Container className={`text-${theme.textMode} pb-5`}>
          <Row className="pb-5">
            <Col className="col-md-7 col-xl-8">
              <TokenStats />
              <TokenAbout />
              <TokenComponents />
              {/* <TokenTransactions /> */}
            </Col>
            <Col>
              <Swap />
            </Col>
          </Row>
        </Container>
      </Desktop>

      {/* MOBILE and TABLET */}
      <Default>
        <Container className={`text-${theme.textMode} py-4`}>
          <TokenHeader />
          <div className="py-4">
            <Swap />
          </div>
          <TokenStats />
          <TokenAbout />
          <TokenComponents />
          {/* <TokenTransactions /> */}
        </Container>
      </Default>
    </>
  )
}

export default token
