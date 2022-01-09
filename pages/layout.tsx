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
        <title>Common Sense Finance</title>
        {/* <link rel="shortcut icon" href="/icons/favicon.ico" /> */}
        <link
          rel="shortcut icon"
          href="https://static.commonsense.finance/commonsense.png"
        />
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
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
