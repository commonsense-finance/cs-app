import transakSDK from '@transak/transak-sdk'


let settings = {
  apiKey: '912a7912-d6b3-481d-8995-09d676cebd12', // Your API Key
  environment: 'PRODUCTION', // STAGING/PRODUCTION
  defaultCryptoCurrency: 'MATIC',
  walletAddress: '', // Your customer's wallet address
  themeColor: '000', // App theme color
  fiatCurrency: 'EUR', // INR/GBP
  email: '', // Your customer's email address
  redirectURL: '',
  hostURL: 'https://demo.commonsense.finance/',
  widgetHeight: '650px',
  widgetWidth: '500px',
}

export function openTransak(account) {
  
  const transak = new transakSDK({...settings, walletAddress: account})

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
