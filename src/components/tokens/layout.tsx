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
import { useMediaQuery } from 'react-responsive'
import { useEffect, useState } from 'react'

const DesktopLayout = () => {
  const theme = useSelector(selectTheme)
  return (
    <>
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
    </>
  )
}

const DefaultLayout = () => {
  const theme = useSelector(selectTheme)
  return (
    <>
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
    </>
  )
}

const TokensLayout = () => {
  const isDesktop = useMediaQuery({ minWidth: 992 })

  const [desktopLayout, setDesktopLayout] = useState(true)

  useEffect(() => {
    setDesktopLayout(isDesktop)
  }, [isDesktop])

  return <>{desktopLayout ? <DesktopLayout /> : <DefaultLayout />}</>
}

export default TokensLayout
