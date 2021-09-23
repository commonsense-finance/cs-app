
import { AppProps } from 'next/app'
import '@styles/app.scss'
import '@styles/global.scss'

import { Web3ReactProvider } from '@web3-react/core'
import { getLibrary } from 'src/services/web3Utils'
import { Provider } from 'react-redux'
import store from '@redux/store'

import Layout from './layout'
//import { appWithTranslation } from '@i18n'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </Web3ReactProvider>
  )
}

export default MyApp
