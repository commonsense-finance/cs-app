import { AppProps } from 'next/app'
import '@styles/app.scss'
import '@styles/global.scss'
import { appWithTranslation } from 'next-i18next'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@styles/theme'

import { Polygon, DAppProvider, Config } from '@usedapp/core'

import { Provider } from 'react-redux'
import store from '@redux/store'

import Layout from './layout'
import { SSRProvider } from '@restart/ui/ssr'

//import { appWithTranslation } from '@i18n'


function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const config: Config = {
    readOnlyChainId: Polygon.chainId,
    readOnlyUrls: {
      [Polygon.chainId]:
        'https://polygon-mainnet.infura.io/v3/1fd55ba87e074d1db0a7a50f872a4495',
    },
    networks: [Polygon],
  }

  return (
    <SSRProvider>
      <ChakraProvider theme={theme}>
        <DAppProvider config={config}>
          <Provider store={store}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Provider>
        </DAppProvider>
      </ChakraProvider>
    </SSRProvider>
  )
}

//export default MyApp
export default appWithTranslation(MyApp)
