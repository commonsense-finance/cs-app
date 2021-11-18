// components/layout.js
import Head from 'next/head'
import { Header, Footer, Top } from '@components'
import { selectTheme } from '@redux/slices/theme'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'

export default function Layout(props: { children: JSX.Element }) {
  const theme = useSelector(selectTheme)
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/icons/favicon.ico" />
      </Head>
      <Top />
      <Container fluid className="px-4 py-2">
        <Header />
      </Container>
      <main>{props.children}</main>
      {/* {props.children} */}
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
