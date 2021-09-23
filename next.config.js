const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([], {});

module.exports = {
  env: {
    RPC_URL_1: 'https://mainnet.infura.io/v3/1fd55ba87e074d1db0a7a50f872a4495',
    RPC_URL_137: 'https://polygon-mainnet.infura.io/v3/1fd55ba87e074d1db0a7a50f872a4495',
    FORTMATIC_API_KEY: 'pk_test_A6260FCBAA2EBDFB',
    MAGIC_API_KEY: 'pk_test_398B82F5F0E88874',
    PORTIS_DAPP_ID: 'e9be171c-2b7f-4ff0-8db9-327707511ee2'
  }
}
