import axios from 'axios'

export const getCoinGeckoTokensPrice = (tokensAddress: string[]) => {

  async function getData(address: string) {
    try {
      const res = await axios.get(
        'https://api.coingecko.com/api/v3/simple/token_price/polygon-pos?contract_addresses=0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270%2C0x7ceb23fd6bc0add59e62ac25578270cff1b9f619&vs_currencies=usd%2Cusd',
      )
      console.log(res.data)
      return res.data
    } catch (error) {
      console.error(error)
      return error
    }

  }

  let auxAddress = ''
  tokensAddress?.map((a, idx) => (auxAddress = auxAddress + ',' + a))

 

  return  getData(auxAddress)
}
