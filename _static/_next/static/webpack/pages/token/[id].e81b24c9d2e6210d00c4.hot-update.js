/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/token/[id]",{

/***/ "./src/services/coinGecko.tsx":
/*!************************************!*\
  !*** ./src/services/coinGecko.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCoinGeckoTokensPrice\": function() { return /* binding */ getCoinGeckoTokensPrice; }\n/* harmony export */ });\n/* harmony import */ var _Users_lucianoinsua_dApps_commonsense_cs_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_lucianoinsua_dApps_commonsense_cs_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_lucianoinsua_dApps_commonsense_cs_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_lucianoinsua_dApps_commonsense_cs_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar getCoinGeckoTokensPrice = function getCoinGeckoTokensPrice(tokensAddress) {\n  function getData(_x) {\n    return _getData.apply(this, arguments);\n  }\n\n  function _getData() {\n    _getData = (0,_Users_lucianoinsua_dApps_commonsense_cs_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_lucianoinsua_dApps_commonsense_cs_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(address) {\n      var res;\n      return _Users_lucianoinsua_dApps_commonsense_cs_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return axios__WEBPACK_IMPORTED_MODULE_2___default().get('https://api.coingecko.com/api/v3/simple/token_price/?id=polygon-pos&vs_currencies=usd&contract_addresses=' + address);\n\n            case 3:\n              res = _context.sent;\n              console.log(res.data);\n              return _context.abrupt(\"return\", res.data);\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](0);\n              console.error(_context.t0);\n              return _context.abrupt(\"return\", _context.t0);\n\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 8]]);\n    }));\n    return _getData.apply(this, arguments);\n  }\n\n  var auxAddress = '';\n  tokensAddress === null || tokensAddress === void 0 ? void 0 : tokensAddress.map(function (a, idx) {\n    return auxAddress = auxAddress + ',' + a;\n  });\n  getData(auxAddress);\n  return [];\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2VzL2NvaW5HZWNrby50c3g/MDlmMiJdLCJuYW1lcyI6WyJnZXRDb2luR2Vja29Ub2tlbnNQcmljZSIsInRva2Vuc0FkZHJlc3MiLCJnZXREYXRhIiwiYWRkcmVzcyIsImF4aW9zIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJlcnJvciIsImF1eEFkZHJlc3MiLCJtYXAiLCJhIiwiaWR4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsQ0FBQ0MsYUFBRCxFQUE2QjtBQUFBLFdBRW5EQyxPQUZtRDtBQUFBO0FBQUE7O0FBQUE7QUFBQSwrVUFFbEUsaUJBQXVCQyxPQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRXNCQyxnREFBQSxDQUNoQiw4R0FBOEdELE9BRDlGLENBRnRCOztBQUFBO0FBRVVFLGlCQUZWO0FBS0lDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBRyxDQUFDRyxJQUFoQjtBQUxKLCtDQU1XSCxHQUFHLENBQUNHLElBTmY7O0FBQUE7QUFBQTtBQUFBO0FBUUlGLHFCQUFPLENBQUNHLEtBQVI7QUFSSjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUZrRTtBQUFBO0FBQUE7O0FBZ0JsRSxNQUFJQyxVQUFVLEdBQUcsRUFBakI7QUFDQVQsZUFBYSxTQUFiLElBQUFBLGFBQWEsV0FBYixZQUFBQSxhQUFhLENBQUVVLEdBQWYsQ0FBbUIsVUFBQ0MsQ0FBRCxFQUFJQyxHQUFKO0FBQUEsV0FBYUgsVUFBVSxHQUFHQSxVQUFVLEdBQUcsR0FBYixHQUFtQkUsQ0FBN0M7QUFBQSxHQUFuQjtBQUVBVixTQUFPLENBQUNRLFVBQUQsQ0FBUDtBQUVBLFNBQU8sRUFBUDtBQUNELENBdEJNIiwiZmlsZSI6Ii4vc3JjL3NlcnZpY2VzL2NvaW5HZWNrby50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmV4cG9ydCBjb25zdCBnZXRDb2luR2Vja29Ub2tlbnNQcmljZSA9ICh0b2tlbnNBZGRyZXNzOiBzdHJpbmdbXSkgPT4ge1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoYWRkcmVzczogc3RyaW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgICAgJ2h0dHBzOi8vYXBpLmNvaW5nZWNrby5jb20vYXBpL3YzL3NpbXBsZS90b2tlbl9wcmljZS8/aWQ9cG9seWdvbi1wb3MmdnNfY3VycmVuY2llcz11c2QmY29udHJhY3RfYWRkcmVzc2VzPScgKyBhZGRyZXNzLFxuICAgICAgKVxuICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXG4gICAgICByZXR1cm4gcmVzLmRhdGFcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgIHJldHVybiBlcnJvclxuICAgIH1cblxuICB9XG5cbiAgbGV0IGF1eEFkZHJlc3MgPSAnJ1xuICB0b2tlbnNBZGRyZXNzPy5tYXAoKGEsIGlkeCkgPT4gKGF1eEFkZHJlc3MgPSBhdXhBZGRyZXNzICsgJywnICsgYSkpXG5cbiAgZ2V0RGF0YShhdXhBZGRyZXNzKVxuXG4gIHJldHVybiBbXVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/coinGecko.tsx\n");

/***/ })

});