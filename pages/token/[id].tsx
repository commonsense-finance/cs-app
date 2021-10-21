import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveToken, setTokenTo, setAction, updateToken } from '@redux/actions'
import { Col, Row, Container } from 'react-bootstrap'
import {
  TokenAbout,
  TokenComponents,
  TokenHeader,
  TokenStats,
  Swap,
} from '@components'
import { selectTokensList } from '@redux/slices/tokens'
import { primaryColor } from 'src/constants/styles'
import { selectSwap, updateTokenProduct } from '@redux/slices/swap'

const token = () => {
  const tokensProduct = useSelector(selectTokensList)
  const { token } = useSelector(selectSwap)
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
      <div className="text-white" style={{ backgroundColor: primaryColor }}>
        <Container className="py-4">
          <TokenHeader />
        </Container>
      </div>
      <Container className="py-5">
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
