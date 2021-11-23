/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/token/[id]",{

/***/ "./src/constants/tokens.tsx":
/*!**********************************!*\
  !*** ./src/constants/tokens.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tokensProduct\": function() { return /* binding */ tokensProduct; },\n/* harmony export */   \"ComponentsTokenProduct\": function() { return /* binding */ ComponentsTokenProduct; },\n/* harmony export */   \"tokens\": function() { return /* binding */ tokens; },\n/* harmony export */   \"DAI\": function() { return /* binding */ DAI; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar tokensProduct = [{\n  id: 0,\n  name: 'Common Sense Index',\n  symbol: 'CSI',\n  image: '/icons/csi.svg',\n  fee: '2%',\n  contractPolygon: '0x1fd078168fad608910687b1385d7cf0d31ac64b4',\n  contract: '',\n  decimals: '18',\n  price: 0,\n  balance: 0,\n  total: 0,\n  allowance: 0,\n  about: \"The CSI 'All in One' Token aims to replicate the profitability of an index composed of the Top 8 cryptocurrencies in the Polygon Network (ERC20) with a market capitalization of over 2 millon. The weight of each asset is limited to 25% and the weight of each category is limited to 50%. Rebalancing is done quarterly.\",\n  marketCap: 0,\n  totalSupply: 0,\n  components: []\n} // {\n//   id: 1,\n//   name: 'CS Top10 Index',\n//   symbol: 'CSTOP',\n//   image: '/icons/cstop.svg',\n//   fee: '2%',\n//   contractPolygon: '0xff3ee79CB4A7Fe0F78a3634cCfDbFc3CdCD65a64',\n//   contract: '',\n//   decimals: '18',\n//   price: 0,\n//   balance: 0,\n//   total: 0,\n//   allowance: 0,\n//   about:\n//     \"The CSTOP 'All in One' Token aims to replicate the profitability of an index composed of the Top 10 cryptocurrencies in the Ethereum Network (ERC20) with a market capitalization of over 1 billion. The weight of each asset is limited to 25% and the weight of each category is limited to 50%. Rebalancing is done quarterly.\",\n//   marketCap: 0,\n//   totalSupply: 0,\n//   components: [],\n// },\n// {\n//   id: 2,\n//   name: 'Tmatic & Teth',\n//   symbol: 'TST',\n//   image: '',\n//   fee: '0%',\n//   contractPolygon: '0x04A250E193571A5621998F61bb258701c8a6034d',\n//   contract: '',\n//   decimals: '18',\n//   price: 0,\n//   balance: 0,\n//   total: 0,\n//   allowance: 0,\n//   about:\n//     \"The TST 'All in One' Token aims to replicate the profitability of an index composed of the Top 10 cryptocurrencies in the Ethereum Network (ERC20) with a market capitalization of over 1 billion. The weight of each asset is limited to 25% and the weight of each category is limited to 50%. Rebalancing is done quarterly.\",\n//   marketCap: 0,\n//   totalSupply: 0,\n//   components: [],\n// },\n];\nvar ComponentsTokenProduct = [[{\n  id: 0,\n  symbol: 'WBTC',\n  image: 'https://assets.coingecko.com/coins/images/7598/small/wrapped_bitcoin_wbtc.png',\n  decimals: 8,\n  position: '25%',\n  price: 0,\n  contractPolygon: ''\n}, {\n  id: 1,\n  symbol: 'WETH',\n  image: 'https://assets.coingecko.com/coins/images/2518/small/weth.png',\n  decimals: 18,\n  position: '25%',\n  price: 0,\n  contractPolygon: ''\n}, {\n  id: 2,\n  symbol: 'LINK',\n  image: 'https://assets.coingecko.com/coins/images/877/small/chainlink-new-logo.png',\n  decimals: 18,\n  position: '14%',\n  price: 0,\n  contractPolygon: ''\n}, {\n  id: 3,\n  symbol: 'WMATIC',\n  image: '',\n  decimals: 18,\n  position: '13%',\n  price: 0,\n  contractPolygon: ''\n}, {\n  id: 4,\n  symbol: 'UNI',\n  image: 'https://assets.coingecko.com/coins/images/12504/small/uniswap-uni.png',\n  decimals: 18,\n  position: '13%',\n  price: 0,\n  contractPolygon: ''\n}, {\n  id: 5,\n  symbol: 'AAVE',\n  image: '',\n  decimals: 18,\n  position: '5%',\n  price: 0,\n  contractPolygon: ''\n}, {\n  id: 6,\n  symbol: 'SUSHI',\n  image: '',\n  decimals: 18,\n  position: '3%',\n  price: 0,\n  contractPolygon: ''\n}, {\n  id: 7,\n  symbol: 'TEL',\n  image: '',\n  decimals: 18,\n  position: '2%',\n  price: 0,\n  contractPolygon: ''\n}]];\nvar tokens = [{\n  id: 0,\n  symbol: 'WETH',\n  name: 'Wrapped Ether',\n  image: '',\n  fee: '0%',\n  contractPolygon: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',\n  contract: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',\n  decimals: '18',\n  price: 0,\n  balance: 0,\n  total: 0,\n  allowance: 0,\n  about: '',\n  marketCap: 0,\n  totalSupply: 0,\n  components: []\n}, {\n  id: 1,\n  symbol: 'WBTC',\n  name: 'Wrapped BTC',\n  image: '',\n  fee: '0%',\n  contractPolygon: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6',\n  contract: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',\n  decimals: '8',\n  price: 0,\n  balance: 0,\n  total: 0,\n  allowance: 0,\n  about: '',\n  marketCap: 0,\n  totalSupply: 0,\n  components: []\n}, {\n  id: 2,\n  symbol: 'DAI',\n  name: 'Dai Stablecoin',\n  image: '',\n  fee: '0%',\n  contractPolygon: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',\n  contract: '0x6b175474e89094c44da98b954eedeac495271d0f',\n  decimals: '18',\n  price: 0,\n  balance: 0,\n  total: 0,\n  allowance: 0,\n  about: '',\n  marketCap: 0,\n  totalSupply: 0,\n  components: []\n}, {\n  id: 3,\n  symbol: 'WMATIC',\n  name: 'Wrapped Matic',\n  image: '',\n  fee: '0%',\n  contractPolygon: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',\n  contract: '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0',\n  decimals: '18',\n  price: 0,\n  balance: 0,\n  total: 0,\n  allowance: 0,\n  about: '',\n  marketCap: 0,\n  totalSupply: 0,\n  components: []\n}, {\n  id: 4,\n  symbol: 'USDT',\n  name: 'Tether USD',\n  image: '',\n  fee: '0%',\n  contractPolygon: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',\n  contract: '0xdac17f958d2ee523a2206206994597c13d831ec7',\n  decimals: '6',\n  price: 0,\n  balance: 0,\n  total: 0,\n  allowance: 0,\n  about: '',\n  marketCap: 0,\n  totalSupply: 0,\n  components: []\n}, {\n  id: 5,\n  symbol: 'USDC',\n  name: 'USD Coin',\n  image: '',\n  fee: '0%',\n  contractPolygon: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',\n  contract: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',\n  decimals: '6',\n  price: 0,\n  balance: 0,\n  total: 0,\n  allowance: 0,\n  about: '',\n  marketCap: 0,\n  totalSupply: 0,\n  components: []\n}];\nvar DAI = tokens[2];\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy90b2tlbnMudHN4PzU3M2QiXSwibmFtZXMiOlsidG9rZW5zUHJvZHVjdCIsImlkIiwibmFtZSIsInN5bWJvbCIsImltYWdlIiwiZmVlIiwiY29udHJhY3RQb2x5Z29uIiwiY29udHJhY3QiLCJkZWNpbWFscyIsInByaWNlIiwiYmFsYW5jZSIsInRvdGFsIiwiYWxsb3dhbmNlIiwiYWJvdXQiLCJtYXJrZXRDYXAiLCJ0b3RhbFN1cHBseSIsImNvbXBvbmVudHMiLCJDb21wb25lbnRzVG9rZW5Qcm9kdWN0IiwicG9zaXRpb24iLCJ0b2tlbnMiLCJEQUkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQU8sSUFBTUEsYUFBYSxHQUFHLENBQzNCO0FBQ0VDLElBQUUsRUFBRSxDQUROO0FBRUVDLE1BQUksRUFBRSxvQkFGUjtBQUdFQyxRQUFNLEVBQUUsS0FIVjtBQUlFQyxPQUFLLEVBQUUsZ0JBSlQ7QUFLRUMsS0FBRyxFQUFFLElBTFA7QUFNRUMsaUJBQWUsRUFBRSw0Q0FObkI7QUFPRUMsVUFBUSxFQUFFLEVBUFo7QUFRRUMsVUFBUSxFQUFFLElBUlo7QUFTRUMsT0FBSyxFQUFFLENBVFQ7QUFVRUMsU0FBTyxFQUFFLENBVlg7QUFXRUMsT0FBSyxFQUFFLENBWFQ7QUFZRUMsV0FBUyxFQUFFLENBWmI7QUFhRUMsT0FBSyxFQUNILDhUQWRKO0FBZUVDLFdBQVMsRUFBRSxDQWZiO0FBZ0JFQyxhQUFXLEVBQUUsQ0FoQmY7QUFpQkVDLFlBQVUsRUFBRTtBQWpCZCxDQUQyQixDQW9CM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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c0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHRva2Vuc1Byb2R1Y3QgPSBbXG4gIHtcbiAgICBpZDogMCxcbiAgICBuYW1lOiAnQ29tbW9uIFNlbnNlIEluZGV4JyxcbiAgICBzeW1ib2w6ICdDU0knLFxuICAgIGltYWdlOiAnL2ljb25zL2NzaS5zdmcnLFxuICAgIGZlZTogJzIlJyxcbiAgICBjb250cmFjdFBvbHlnb246ICcweDFmZDA3ODE2OGZhZDYwODkxMDY4N2IxMzg1ZDdjZjBkMzFhYzY0YjQnLFxuICAgIGNvbnRyYWN0OiAnJyxcbiAgICBkZWNpbWFsczogJzE4JyxcbiAgICBwcmljZTogMCxcbiAgICBiYWxhbmNlOiAwLFxuICAgIHRvdGFsOiAwLFxuICAgIGFsbG93YW5jZTogMCxcbiAgICBhYm91dDpcbiAgICAgIFwiVGhlIENTSSAnQWxsIGluIE9uZScgVG9rZW4gYWltcyB0byByZXBsaWNhdGUgdGhlIHByb2ZpdGFiaWxpdHkgb2YgYW4gaW5kZXggY29tcG9zZWQgb2YgdGhlIFRvcCA4IGNyeXB0b2N1cnJlbmNpZXMgaW4gdGhlIFBvbHlnb24gTmV0d29yayAoRVJDMjApIHdpdGggYSBtYXJrZXQgY2FwaXRhbGl6YXRpb24gb2Ygb3ZlciAyIG1pbGxvbi4gVGhlIHdlaWdodCBvZiBlYWNoIGFzc2V0IGlzIGxpbWl0ZWQgdG8gMjUlIGFuZCB0aGUgd2VpZ2h0IG9mIGVhY2ggY2F0ZWdvcnkgaXMgbGltaXRlZCB0byA1MCUuIFJlYmFsYW5jaW5nIGlzIGRvbmUgcXVhcnRlcmx5LlwiLFxuICAgIG1hcmtldENhcDogMCxcbiAgICB0b3RhbFN1cHBseTogMCxcbiAgICBjb21wb25lbnRzOiBbXSxcbiAgfSxcbiAgLy8ge1xuICAvLyAgIGlkOiAxLFxuICAvLyAgIG5hbWU6ICdDUyBUb3AxMCBJbmRleCcsXG4gIC8vICAgc3ltYm9sOiAnQ1NUT1AnLFxuICAvLyAgIGltYWdlOiAnL2ljb25zL2NzdG9wLnN2ZycsXG4gIC8vICAgZmVlOiAnMiUnLFxuICAvLyAgIGNvbnRyYWN0UG9seWdvbjogJzB4ZmYzZWU3OUNCNEE3RmUwRjc4YTM2MzRjQ2ZEYkZjM0NkQ0Q2NWE2NCcsXG4gIC8vICAgY29udHJhY3Q6ICcnLFxuICAvLyAgIGRlY2ltYWxzOiAnMTgnLFxuICAvLyAgIHByaWNlOiAwLFxuICAvLyAgIGJhbGFuY2U6IDAsXG4gIC8vICAgdG90YWw6IDAsXG4gIC8vICAgYWxsb3dhbmNlOiAwLFxuICAvLyAgIGFib3V0OlxuICAvLyAgICAgXCJUaGUgQ1NUT1AgJ0FsbCBpbiBPbmUnIFRva2VuIGFpbXMgdG8gcmVwbGljYXRlIHRoZSBwcm9maXRhYmlsaXR5IG9mIGFuIGluZGV4IGNvbXBvc2VkIG9mIHRoZSBUb3AgMTAgY3J5cHRvY3VycmVuY2llcyBpbiB0aGUgRXRoZXJldW0gTmV0d29yayAoRVJDMjApIHdpdGggYSBtYXJrZXQgY2FwaXRhbGl6YXRpb24gb2Ygb3ZlciAxIGJpbGxpb24uIFRoZSB3ZWlnaHQgb2YgZWFjaCBhc3NldCBpcyBsaW1pdGVkIHRvIDI1JSBhbmQgdGhlIHdlaWdodCBvZiBlYWNoIGNhdGVnb3J5IGlzIGxpbWl0ZWQgdG8gNTAlLiBSZWJhbGFuY2luZyBpcyBkb25lIHF1YXJ0ZXJseS5cIixcbiAgLy8gICBtYXJrZXRDYXA6IDAsXG4gIC8vICAgdG90YWxTdXBwbHk6IDAsXG4gIC8vICAgY29tcG9uZW50czogW10sXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICBpZDogMixcbiAgLy8gICBuYW1lOiAnVG1hdGljICYgVGV0aCcsXG4gIC8vICAgc3ltYm9sOiAnVFNUJyxcbiAgLy8gICBpbWFnZTogJycsXG4gIC8vICAgZmVlOiAnMCUnLFxuICAvLyAgIGNvbnRyYWN0UG9seWdvbjogJzB4MDRBMjUwRTE5MzU3MUE1NjIxOTk4RjYxYmIyNTg3MDFjOGE2MDM0ZCcsXG4gIC8vICAgY29udHJhY3Q6ICcnLFxuICAvLyAgIGRlY2ltYWxzOiAnMTgnLFxuICAvLyAgIHByaWNlOiAwLFxuICAvLyAgIGJhbGFuY2U6IDAsXG4gIC8vICAgdG90YWw6IDAsXG4gIC8vICAgYWxsb3dhbmNlOiAwLFxuICAvLyAgIGFib3V0OlxuICAvLyAgICAgXCJUaGUgVFNUICdBbGwgaW4gT25lJyBUb2tlbiBhaW1zIHRvIHJlcGxpY2F0ZSB0aGUgcHJvZml0YWJpbGl0eSBvZiBhbiBpbmRleCBjb21wb3NlZCBvZiB0aGUgVG9wIDEwIGNyeXB0b2N1cnJlbmNpZXMgaW4gdGhlIEV0aGVyZXVtIE5ldHdvcmsgKEVSQzIwKSB3aXRoIGEgbWFya2V0IGNhcGl0YWxpemF0aW9uIG9mIG92ZXIgMSBiaWxsaW9uLiBUaGUgd2VpZ2h0IG9mIGVhY2ggYXNzZXQgaXMgbGltaXRlZCB0byAyNSUgYW5kIHRoZSB3ZWlnaHQgb2YgZWFjaCBjYXRlZ29yeSBpcyBsaW1pdGVkIHRvIDUwJS4gUmViYWxhbmNpbmcgaXMgZG9uZSBxdWFydGVybHkuXCIsXG4gIC8vICAgbWFya2V0Q2FwOiAwLFxuICAvLyAgIHRvdGFsU3VwcGx5OiAwLFxuICAvLyAgIGNvbXBvbmVudHM6IFtdLFxuICAvLyB9LFxuXVxuXG5leHBvcnQgY29uc3QgQ29tcG9uZW50c1Rva2VuUHJvZHVjdCA9IFtcbiAgW1xuICAgIHtcbiAgICAgIGlkOiAwLFxuICAgICAgc3ltYm9sOiAnV0JUQycsXG4gICAgICBpbWFnZTogJ2h0dHBzOi8vYXNzZXRzLmNvaW5nZWNrby5jb20vY29pbnMvaW1hZ2VzLzc1OTgvc21hbGwvd3JhcHBlZF9iaXRjb2luX3didGMucG5nJyxcbiAgICAgIGRlY2ltYWxzOiA4LFxuICAgICAgcG9zaXRpb246ICcyNSUnLFxuICAgICAgcHJpY2U6IDAsXG4gICAgICBjb250cmFjdFBvbHlnb246ICcnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICBzeW1ib2w6ICdXRVRIJyxcbiAgICAgIGltYWdlOiAnaHR0cHM6Ly9hc3NldHMuY29pbmdlY2tvLmNvbS9jb2lucy9pbWFnZXMvMjUxOC9zbWFsbC93ZXRoLnBuZycsXG4gICAgICBkZWNpbWFsczogMTgsXG4gICAgICBwb3NpdGlvbjogJzI1JScsXG4gICAgICBwcmljZTogMCxcbiAgICAgIGNvbnRyYWN0UG9seWdvbjogJycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMixcbiAgICAgIHN5bWJvbDogJ0xJTksnLFxuICAgICAgaW1hZ2U6ICdodHRwczovL2Fzc2V0cy5jb2luZ2Vja28uY29tL2NvaW5zL2ltYWdlcy84Nzcvc21hbGwvY2hhaW5saW5rLW5ldy1sb2dvLnBuZycsXG4gICAgICBkZWNpbWFsczogMTgsXG4gICAgICBwb3NpdGlvbjogJzE0JScsXG4gICAgICBwcmljZTogMCxcbiAgICAgIGNvbnRyYWN0UG9seWdvbjogJycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMyxcbiAgICAgIHN5bWJvbDogJ1dNQVRJQycsXG4gICAgICBpbWFnZTogJycsXG4gICAgICBkZWNpbWFsczogMTgsXG4gICAgICBwb3NpdGlvbjogJzEzJScsXG4gICAgICBwcmljZTogMCxcbiAgICAgIGNvbnRyYWN0UG9seWdvbjogJycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogNCxcbiAgICAgIHN5bWJvbDogJ1VOSScsXG4gICAgICBpbWFnZTogJ2h0dHBzOi8vYXNzZXRzLmNvaW5nZWNrby5jb20vY29pbnMvaW1hZ2VzLzEyNTA0L3NtYWxsL3VuaXN3YXAtdW5pLnBuZycsXG4gICAgICBkZWNpbWFsczogMTgsXG4gICAgICBwb3NpdGlvbjogJzEzJScsXG4gICAgICBwcmljZTogMCxcbiAgICAgIGNvbnRyYWN0UG9seWdvbjogJycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogNSxcbiAgICAgIHN5bWJvbDogJ0FBVkUnLFxuICAgICAgaW1hZ2U6ICcnLFxuICAgICAgZGVjaW1hbHM6IDE4LFxuICAgICAgcG9zaXRpb246ICc1JScsXG4gICAgICBwcmljZTogMCxcbiAgICAgIGNvbnRyYWN0UG9seWdvbjogJycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogNixcbiAgICAgIHN5bWJvbDogJ1NVU0hJJyxcbiAgICAgIGltYWdlOiAnJyxcbiAgICAgIGRlY2ltYWxzOiAxOCxcbiAgICAgIHBvc2l0aW9uOiAnMyUnLFxuICAgICAgcHJpY2U6IDAsXG4gICAgICBjb250cmFjdFBvbHlnb246ICcnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDcsXG4gICAgICBzeW1ib2w6ICdURUwnLFxuICAgICAgaW1hZ2U6ICcnLFxuICAgICAgZGVjaW1hbHM6IDE4LFxuICAgICAgcG9zaXRpb246ICcyJScsXG4gICAgICBwcmljZTogMCxcbiAgICAgIGNvbnRyYWN0UG9seWdvbjogJycsXG4gICAgfVxuICBdXG5dXG5cblxuZXhwb3J0IGNvbnN0IHRva2VucyA9IFtcbiAge1xuICAgIGlkOiAwLFxuICAgIHN5bWJvbDogJ1dFVEgnLFxuICAgIG5hbWU6ICdXcmFwcGVkIEV0aGVyJyxcbiAgICBpbWFnZTogJycsXG4gICAgZmVlOiAnMCUnLFxuICAgIGNvbnRyYWN0UG9seWdvbjogJzB4N2NlYjIzZmQ2YmMwYWRkNTllNjJhYzI1NTc4MjcwY2ZmMWI5ZjYxOScsXG4gICAgY29udHJhY3Q6ICcweGMwMmFhYTM5YjIyM2ZlOGQwYTBlNWM0ZjI3ZWFkOTA4M2M3NTZjYzInLFxuICAgIGRlY2ltYWxzOiAnMTgnLFxuICAgIHByaWNlOiAwLFxuICAgIGJhbGFuY2U6IDAsXG4gICAgdG90YWw6IDAsXG4gICAgYWxsb3dhbmNlOiAwLFxuICAgIGFib3V0OiAnJyxcbiAgICBtYXJrZXRDYXA6IDAsXG4gICAgdG90YWxTdXBwbHk6IDAsXG4gICAgY29tcG9uZW50czogW10sXG4gIH0sXG4gIHtcbiAgICBpZDogMSxcbiAgICBzeW1ib2w6ICdXQlRDJyxcbiAgICBuYW1lOiAnV3JhcHBlZCBCVEMnLFxuICAgIGltYWdlOiAnJyxcbiAgICBmZWU6ICcwJScsXG4gICAgY29udHJhY3RQb2x5Z29uOiAnMHgxYmZkNjcwMzdiNDJjZjczYWNmMjA0NzA2N2JkNGYyYzQ3ZDliZmQ2JyxcbiAgICBjb250cmFjdDogJzB4MjI2MGZhYzVlNTU0MmE3NzNhYTQ0ZmJjZmVkZjdjMTkzYmMyYzU5OScsXG4gICAgZGVjaW1hbHM6ICc4JyxcbiAgICBwcmljZTogMCxcbiAgICBiYWxhbmNlOiAwLFxuICAgIHRvdGFsOiAwLFxuICAgIGFsbG93YW5jZTogMCxcbiAgICBhYm91dDogJycsXG4gICAgbWFya2V0Q2FwOiAwLFxuICAgIHRvdGFsU3VwcGx5OiAwLFxuICAgIGNvbXBvbmVudHM6IFtdLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgc3ltYm9sOiAnREFJJyxcbiAgICBuYW1lOiAnRGFpIFN0YWJsZWNvaW4nLFxuICAgIGltYWdlOiAnJyxcbiAgICBmZWU6ICcwJScsXG4gICAgY29udHJhY3RQb2x5Z29uOiAnMHg4ZjNjZjdhZDIzY2QzY2FkYmQ5NzM1YWZmOTU4MDIzMjM5YzZhMDYzJyxcbiAgICBjb250cmFjdDogJzB4NmIxNzU0NzRlODkwOTRjNDRkYTk4Yjk1NGVlZGVhYzQ5NTI3MWQwZicsXG4gICAgZGVjaW1hbHM6ICcxOCcsXG4gICAgcHJpY2U6IDAsXG4gICAgYmFsYW5jZTogMCxcbiAgICB0b3RhbDogMCxcbiAgICBhbGxvd2FuY2U6IDAsXG4gICAgYWJvdXQ6ICcnLFxuICAgIG1hcmtldENhcDogMCxcbiAgICB0b3RhbFN1cHBseTogMCxcbiAgICBjb21wb25lbnRzOiBbXSxcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIHN5bWJvbDogJ1dNQVRJQycsXG4gICAgbmFtZTogJ1dyYXBwZWQgTWF0aWMnLFxuICAgIGltYWdlOiAnJyxcbiAgICBmZWU6ICcwJScsXG4gICAgY29udHJhY3RQb2x5Z29uOiAnMHgwZDUwMGIxZDhlOGVmMzFlMjFjOTlkMWRiOWE2NDQ0ZDNhZGYxMjcwJyxcbiAgICBjb250cmFjdDogJzB4N2QxYWZhN2I3MThmYjg5M2RiMzBhM2FiYzBjZmM2MDhhYWNmZWJiMCcsXG4gICAgZGVjaW1hbHM6ICcxOCcsXG4gICAgcHJpY2U6IDAsXG4gICAgYmFsYW5jZTogMCxcbiAgICB0b3RhbDogMCxcbiAgICBhbGxvd2FuY2U6IDAsXG4gICAgYWJvdXQ6ICcnLFxuICAgIG1hcmtldENhcDogMCxcbiAgICB0b3RhbFN1cHBseTogMCxcbiAgICBjb21wb25lbnRzOiBbXSxcbiAgfSxcbiAge1xuICAgIGlkOiA0LFxuICAgIHN5bWJvbDogJ1VTRFQnLFxuICAgIG5hbWU6ICdUZXRoZXIgVVNEJyxcbiAgICBpbWFnZTogJycsXG4gICAgZmVlOiAnMCUnLFxuICAgIGNvbnRyYWN0UG9seWdvbjogJzB4YzIxMzJkMDVkMzFjOTE0YTg3YzY2MTFjMTA3NDhhZWIwNGI1OGU4ZicsXG4gICAgY29udHJhY3Q6ICcweGRhYzE3Zjk1OGQyZWU1MjNhMjIwNjIwNjk5NDU5N2MxM2Q4MzFlYzcnLFxuICAgIGRlY2ltYWxzOiAnNicsXG4gICAgcHJpY2U6IDAsXG4gICAgYmFsYW5jZTogMCxcbiAgICB0b3RhbDogMCxcbiAgICBhbGxvd2FuY2U6IDAsXG4gICAgYWJvdXQ6ICcnLFxuICAgIG1hcmtldENhcDogMCxcbiAgICB0b3RhbFN1cHBseTogMCxcbiAgICBjb21wb25lbnRzOiBbXSxcbiAgfSxcbiAge1xuICAgIGlkOiA1LFxuICAgIHN5bWJvbDogJ1VTREMnLFxuICAgIG5hbWU6ICdVU0QgQ29pbicsXG4gICAgaW1hZ2U6ICcnLFxuICAgIGZlZTogJzAlJyxcbiAgICBjb250cmFjdFBvbHlnb246ICcweDI3OTFiY2ExZjJkZTQ2NjFlZDg4YTMwYzk5YTdhOTQ0OWFhODQxNzQnLFxuICAgIGNvbnRyYWN0OiAnMHhhMGI4Njk5MWM2MjE4YjM2YzFkMTlkNGEyZTllYjBjZTM2MDZlYjQ4JyxcbiAgICBkZWNpbWFsczogJzYnLFxuICAgIHByaWNlOiAwLFxuICAgIGJhbGFuY2U6IDAsXG4gICAgdG90YWw6IDAsXG4gICAgYWxsb3dhbmNlOiAwLFxuICAgIGFib3V0OiAnJyxcbiAgICBtYXJrZXRDYXA6IDAsXG4gICAgdG90YWxTdXBwbHk6IDAsXG4gICAgY29tcG9uZW50czogW10sXG4gIH0sXG5dXG5cbmV4cG9ydCBjb25zdCBEQUkgPSB0b2tlbnNbMl1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/constants/tokens.tsx\n");

/***/ })

});