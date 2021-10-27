import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setActiveToken,
  setTokenTo,
  setAction,
  updateToken,
} from '@redux/actions'
import { Col, Row, Container } from 'react-bootstrap'
import {
  TokenAbout,
  TokenComponents,
  TokenHeader,
  TokenStats,
  Swap,
} from '@components'
import { selectTokensList } from '@redux/slices/tokens'
import { selectSwap, updateTokenProduct } from '@redux/slices/swap'
import { selectTheme } from '@redux/slices/theme'

const token = () => {
  const tokensProduct = useSelector(selectTokensList)
  const { token } = useSelector(selectSwap)
  const theme = useSelector(selectTheme)
  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
    if (router?.query?.id) {
      //for Tokens Page
      dispatch(setActiveToken(Number(router?.query?.id)))
      //for Token Product
      dispatch(setTokenTo(tokensProduct[Number(router?.query?.id)]))

      dispatch(updateToken(token.id))
      dispatch(updateTokenProduct(Number(router?.query?.id)))

      dispatch(setAction(router.query.action))
    }
  }, [router?.query?.id])

  return (
    <>
      <Container className={`text-${theme.textMode} py-4`}>
        <TokenHeader />
      </Container>
      <Container className={`text-${theme.textMode} pb-5`}>
        <Row className="pb-5">
          <Col className="col-8">
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
    </>
  )
}

export default token
