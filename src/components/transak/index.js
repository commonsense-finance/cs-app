import transakSDK from '@transak/transak-sdk'

let settings = {
  apiKey: 'd27e0864-19dc-4539-8da4-38e00a3c148d', // Your API Key
  environment: 'STAGING', // STAGING/PRODUCTION
  defaultCryptoCurrency: 'MATIC',
  walletAddress: '0xc90Bd75d24364722862b23b2C7E10272CBaa1681', // Your customer's wallet address
  themeColor: '000', // App theme color
  fiatCurrency: 'EUR', // INR/GBP
  email: 'lucianoinsua@gmail.com', // Your customer's email address
  redirectURL: '',
  hostURL: 'http://localhost:3000/token/0',
  widgetHeight: '650px',
  widgetWidth: '500px',
}

export function openTransak() {
  const transak = new transakSDK(settings)

  // To get all the events
  transak.on(transak.ALL_EVENTS, (data) => {
    console.log(data)
  })
  //This will trigger when the user marks payment is made.
  transak.on(transak.EVENTS.TRANSAK_ORDER_SUCCESSFUL, (orderData) => {
    console.log(orderData)
    transak.close()
  })

  transak.init()
}

function Transak() {
  return <button onClick={() => openTransak()}>open trasak</button>
}

export default Transak
