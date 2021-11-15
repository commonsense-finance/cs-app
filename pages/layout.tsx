// components/layout.js

import { Header, Footer, Top } from '@components'
import { selectTheme } from '@redux/slices/theme'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'

export default function Layout(props: { children: JSX.Element }) {
  const theme = useSelector(selectTheme)
  return (
    <>
      <Top />
      <Container fluid className="px-4 py-2">
        <Header />
      </Container>
      <main>{props.children}</main>
      <Container fluid>
        <Footer />
      </Container>
      <style jsx global>{`
        body {
          background: ${theme.bgColor};
        }
      `}</style>
    </>
  )
}
