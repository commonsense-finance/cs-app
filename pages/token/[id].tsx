import { useSelector } from 'react-redux'
import { Col, Row, Container } from 'react-bootstrap'
import {
  TokenAbout,
  TokenComponents,
  TokenHeader,
  TokenStats,
  Swap,
} from '@components'

import { selectTheme } from '@redux/slices/theme'
import { Default, Desktop } from '@components/mediaQuery'
import LineChart from '@components/charts'

export async function getStaticProps() {
  return { props: { id: null } }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '0' } }, { params: { id: '1' } }],
    fallback: false,
  }
}

const Token = () => {
  const theme = useSelector(selectTheme)

  return (
    <>
      <Desktop>
        <Container className={`text-${theme.textMode} py-4`}>
          <Row className="pb-5">
            <Col className="col-md-3 col-xl-3"> 
              <TokenHeader />
            </Col>
            <Col>
              <LineChart />
            </Col>
          </Row>
        </Container>
        <Container className={`text-${theme.textMode} pb-5`}>
          <Row className="pb-5">
            <Col className="col-md-7 col-xl-8">
              <div className='pb-5'>
                <LineChart />
              </div>
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

export default Token
