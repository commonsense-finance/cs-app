/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/tokens/controls.tsx":
/*!********************************************!*\
  !*** ./src/components/tokens/controls.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TokenHeader\": function() { return /* binding */ TokenHeader; },\n/* harmony export */   \"TokenStats\": function() { return /* binding */ TokenStats; },\n/* harmony export */   \"TokenAbout\": function() { return /* binding */ TokenAbout; },\n/* harmony export */   \"TokenComponents\": function() { return /* binding */ TokenComponents; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _components_csComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/csComponents */ \"./src/components/csComponents/index.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var src_services_tokenSetv2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/tokenSetv2 */ \"./src/services/tokenSetv2.tsx\");\n/* harmony import */ var src_constants_tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/constants/tokens */ \"./src/constants/tokens.tsx\");\n/* harmony import */ var _components_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/charts */ \"./src/components/charts/index.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/lucianoinsua/dApps/commonsense/cs-app/src/components/tokens/controls.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$(),\n    _s4 = $RefreshSig$();\n\n\n\n\n\n\n\nvar TokenHeader = function TokenHeader() {\n  _s();\n\n  var _router$query;\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  var activeToken = src_constants_tokens__WEBPACK_IMPORTED_MODULE_4__.tokensProduct[Number(router === null || router === void 0 ? void 0 : (_router$query = router.query) === null || _router$query === void 0 ? void 0 : _router$query.id)];\n  var tokensProductPrice = (0,src_services_tokenSetv2__WEBPACK_IMPORTED_MODULE_3__.useTokensSetPrice)(src_constants_tokens__WEBPACK_IMPORTED_MODULE_4__.tokensProduct);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n      src: activeToken.image,\n      alt: \"\",\n      width: \"27\",\n      height: \"27\",\n      className: \"me-2 rounded pb-1\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n      className: \"d-inline\",\n      children: activeToken === null || activeToken === void 0 ? void 0 : activeToken.symbol\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n      className: \"pb-3\",\n      children: activeToken === null || activeToken === void 0 ? void 0 : activeToken.name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: \"Price\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: (tokensProductPrice === null || tokensProductPrice === void 0 ? void 0 : tokensProductPrice[activeToken === null || activeToken === void 0 ? void 0 : activeToken.id]) && (0,src_services_tokenSetv2__WEBPACK_IMPORTED_MODULE_3__.currencyFormat)(tokensProductPrice[activeToken === null || activeToken === void 0 ? void 0 : activeToken.id][0])\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(TokenHeader, \"wnbKk83rVLgT7S7EOqtfJe52YQ8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter, src_services_tokenSetv2__WEBPACK_IMPORTED_MODULE_3__.useTokensSetPrice];\n});\n\n_c = TokenHeader;\nvar TokenStats = function TokenStats() {\n  _s2();\n\n  var _router$query2;\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  var activeToken = src_constants_tokens__WEBPACK_IMPORTED_MODULE_4__.tokensProduct[Number(router === null || router === void 0 ? void 0 : (_router$query2 = router.query) === null || _router$query2 === void 0 ? void 0 : _router$query2.id)];\n  var tokensProductPrice = (0,src_services_tokenSetv2__WEBPACK_IMPORTED_MODULE_3__.useTokensSetPrice)(src_constants_tokens__WEBPACK_IMPORTED_MODULE_4__.tokensProduct);\n  var tokensProductTotalSupply = (0,src_services_tokenSetv2__WEBPACK_IMPORTED_MODULE_3__.useTokensTotalSupply)(src_constants_tokens__WEBPACK_IMPORTED_MODULE_4__.tokensProduct);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Row, {\n      className: \"pb-4\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {\n        className: \"col-sm-4 col-12 pb-2\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_csComponents__WEBPACK_IMPORTED_MODULE_1__.Card, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Market Cap\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n            children: (tokensProductTotalSupply === null || tokensProductTotalSupply === void 0 ? void 0 : tokensProductTotalSupply[activeToken === null || activeToken === void 0 ? void 0 : activeToken.id]) && (0,src_services_tokenSetv2__WEBPACK_IMPORTED_MODULE_3__.currencyFormat)((0,src_services_tokenSetv2__WEBPACK_IMPORTED_MODULE_3__.mulFormat)(tokensProductTotalSupply[activeToken === null || activeToken === void 0 ? void 0 : activeToken.id][0], tokensProductPrice[activeToken === null || activeToken === void 0 ? void 0 : activeToken.id][0]))\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {\n        className: \"col-sm-4 col-12 pb-2\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_csComponents__WEBPACK_IMPORTED_MODULE_1__.Card, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Total Supply\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n            children: (tokensProductTotalSupply === null || tokensProductTotalSupply === void 0 ? void 0 : tokensProductTotalSupply[activeToken === null || activeToken === void 0 ? void 0 : activeToken.id]) && (0,src_services_tokenSetv2__WEBPACK_IMPORTED_MODULE_3__.amountFormat)(tokensProductTotalSupply[activeToken === null || activeToken === void 0 ? void 0 : activeToken.id][0])\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {\n        className: \"col-sm-4 col-12 pb-2\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_csComponents__WEBPACK_IMPORTED_MODULE_1__.Card, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Annual Fees \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n            children: activeToken === null || activeToken === void 0 ? void 0 : activeToken.fee\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s2(TokenStats, \"u5Ixl0jUMsdwu8kxqnkGtfDnbDE=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter, src_services_tokenSetv2__WEBPACK_IMPORTED_MODULE_3__.useTokensSetPrice, src_services_tokenSetv2__WEBPACK_IMPORTED_MODULE_3__.useTokensTotalSupply];\n});\n\n_c2 = TokenStats;\nvar TokenAbout = function TokenAbout() {\n  _s3();\n\n  var _router$query3;\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  var activeToken = src_constants_tokens__WEBPACK_IMPORTED_MODULE_4__.tokensProduct[Number(router === null || router === void 0 ? void 0 : (_router$query3 = router.query) === null || _router$query3 === void 0 ? void 0 : _router$query3.id)];\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n      className: \"pb-2\",\n      children: \"About\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      className: \"pb-4\",\n      children: activeToken === null || activeToken === void 0 ? void 0 : activeToken.about\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s3(TokenAbout, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];\n});\n\n_c3 = TokenAbout;\nvar TokenComponents = function TokenComponents() {\n  _s4();\n\n  var _router$query4, _router$query5;\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  var activeToken = src_constants_tokens__WEBPACK_IMPORTED_MODULE_4__.tokensProduct[Number(router === null || router === void 0 ? void 0 : (_router$query4 = router.query) === null || _router$query4 === void 0 ? void 0 : _router$query4.id)]; //const components = useTokenSetComponents(activeToken.contractPolygon)\n\n  var components = src_constants_tokens__WEBPACK_IMPORTED_MODULE_4__.ComponentsTokenProduct[Number(router === null || router === void 0 ? void 0 : (_router$query5 = router.query) === null || _router$query5 === void 0 ? void 0 : _router$query5.id)];\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n      className: \"pb-2\",\n      children: \"Components\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_csComponents__WEBPACK_IMPORTED_MODULE_1__.Card, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Row, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_csComponents__WEBPACK_IMPORTED_MODULE_1__.Table, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                  children: \"#\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 112,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                  children: \"Token\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 113,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                  className: \"d-none d-md-table-cell\",\n                  children: \"Value per Token\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 114,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                  className: \"d-none d-md-table-cell\",\n                  children: \"Porcent\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 115,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                  className: \"text-end\",\n                  children: \"24hs Change\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 116,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 111,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 110,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n              className: \"border-top\",\n              children: components === null || components === void 0 ? void 0 : components.map(function (component) {\n                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                      src: '',\n                      alt: \"\",\n                      width: \"23\",\n                      className: \"me-2 rounded\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 124,\n                      columnNumber: 23\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 123,\n                    columnNumber: 21\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    children: component.symbol\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 131,\n                    columnNumber: 21\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    className: \"text-end d-none d-md-table-cell\",\n                    children: component.price\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 136,\n                    columnNumber: 21\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    className: \"text-end d-none d-md-table-cell\",\n                    children: component.price\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 139,\n                    columnNumber: 21\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    className: \"text-end\",\n                    children: component.price\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 142,\n                    columnNumber: 21\n                  }, _this)]\n                }, component.id, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 122,\n                  columnNumber: 19\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 120,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 109,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {\n          className: \"p-4\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_charts__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 150,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 149,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 148,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n}; // export const TokenTransactions = () => {\n//   return <h4>Transactions</h4>\n// }\n\n_s4(TokenComponents, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];\n});\n\n_c4 = TokenComponents;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"TokenHeader\");\n$RefreshReg$(_c2, \"TokenStats\");\n$RefreshReg$(_c3, \"TokenAbout\");\n$RefreshReg$(_c4, \"TokenComponents\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdG9rZW5zL2NvbnRyb2xzLnRzeD81ODY3Il0sIm5hbWVzIjpbIlRva2VuSGVhZGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwiYWN0aXZlVG9rZW4iLCJ0b2tlbnNQcm9kdWN0IiwiTnVtYmVyIiwicXVlcnkiLCJpZCIsInRva2Vuc1Byb2R1Y3RQcmljZSIsInVzZVRva2Vuc1NldFByaWNlIiwiaW1hZ2UiLCJzeW1ib2wiLCJuYW1lIiwiY3VycmVuY3lGb3JtYXQiLCJUb2tlblN0YXRzIiwidG9rZW5zUHJvZHVjdFRvdGFsU3VwcGx5IiwidXNlVG9rZW5zVG90YWxTdXBwbHkiLCJtdWxGb3JtYXQiLCJhbW91bnRGb3JtYXQiLCJmZWUiLCJUb2tlbkFib3V0IiwiYWJvdXQiLCJUb2tlbkNvbXBvbmVudHMiLCJjb21wb25lbnRzIiwiQ29tcG9uZW50c1Rva2VuUHJvZHVjdCIsIm1hcCIsImNvbXBvbmVudCIsInByaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQVNBO0FBQ0E7QUFFTyxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQUE7O0FBQy9CLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQSxNQUFNQyxXQUFXLEdBQUdDLCtEQUFhLENBQUNDLE1BQU0sQ0FBQ0osTUFBRCxhQUFDQSxNQUFELHdDQUFDQSxNQUFNLENBQUVLLEtBQVQsa0RBQUMsY0FBZUMsRUFBaEIsQ0FBUCxDQUFqQztBQUNBLE1BQU1DLGtCQUFrQixHQUFHQywwRUFBaUIsQ0FBQ0wsK0RBQUQsQ0FBNUM7QUFFQSxzQkFDRTtBQUFBLDRCQUNFO0FBQ0UsU0FBRyxFQUFFRCxXQUFXLENBQUNPLEtBRG5CO0FBRUUsU0FBRyxFQUFDLEVBRk47QUFHRSxXQUFLLEVBQUMsSUFIUjtBQUlFLFlBQU0sRUFBQyxJQUpUO0FBS0UsZUFB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OiIuL3NyYy9jb21wb25lbnRzL3Rva2Vucy9jb250cm9scy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgQ29sLCBSb3cgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5pbXBvcnQgeyBUYWJsZSwgQ2FyZCB9IGZyb20gJ0Bjb21wb25lbnRzL2NzQ29tcG9uZW50cydcblxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQge1xuICBhbW91bnRGb3JtYXQsXG4gIGJhbGFuY2VGb3JtYXQsXG4gIGN1cnJlbmN5Rm9ybWF0LFxuICBtdWxGb3JtYXQsXG4gIHVzZVRva2VuU2V0Q29tcG9uZW50cyxcbiAgdXNlVG9rZW5zU2V0UHJpY2UsXG4gIHVzZVRva2Vuc1RvdGFsU3VwcGx5LFxufSBmcm9tICdzcmMvc2VydmljZXMvdG9rZW5TZXR2MidcbmltcG9ydCB7IENvbXBvbmVudHNUb2tlblByb2R1Y3QsIHRva2Vuc1Byb2R1Y3QgfSBmcm9tICdzcmMvY29uc3RhbnRzL3Rva2VucydcbmltcG9ydCBDb21wb25lbnRzQ2hhcnQgZnJvbSAnQGNvbXBvbmVudHMvY2hhcnRzJ1xuXG5leHBvcnQgY29uc3QgVG9rZW5IZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IGFjdGl2ZVRva2VuID0gdG9rZW5zUHJvZHVjdFtOdW1iZXIocm91dGVyPy5xdWVyeT8uaWQpXVxuICBjb25zdCB0b2tlbnNQcm9kdWN0UHJpY2UgPSB1c2VUb2tlbnNTZXRQcmljZSh0b2tlbnNQcm9kdWN0KVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxpbWdcbiAgICAgICAgc3JjPXthY3RpdmVUb2tlbi5pbWFnZX1cbiAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgd2lkdGg9XCIyN1wiXG4gICAgICAgIGhlaWdodD1cIjI3XCJcbiAgICAgICAgY2xhc3NOYW1lPVwibWUtMiByb3VuZGVkIHBiLTFcIlxuICAgICAgLz5cbiAgICAgIDxoNCBjbGFzc05hbWU9XCJkLWlubGluZVwiPnthY3RpdmVUb2tlbj8uc3ltYm9sfTwvaDQ+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwicGItM1wiPnthY3RpdmVUb2tlbj8ubmFtZX08L2gyPlxuICAgICAgPHA+UHJpY2U8L3A+XG4gICAgICA8aDE+XG4gICAgICAgIHt0b2tlbnNQcm9kdWN0UHJpY2U/LlthY3RpdmVUb2tlbj8uaWRdICYmXG4gICAgICAgICAgY3VycmVuY3lGb3JtYXQodG9rZW5zUHJvZHVjdFByaWNlW2FjdGl2ZVRva2VuPy5pZF0hWzBdKX1cbiAgICAgIDwvaDE+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IFRva2VuU3RhdHMgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IGFjdGl2ZVRva2VuID0gdG9rZW5zUHJvZHVjdFtOdW1iZXIocm91dGVyPy5xdWVyeT8uaWQpXVxuXG4gIGNvbnN0IHRva2Vuc1Byb2R1Y3RQcmljZSA9IHVzZVRva2Vuc1NldFByaWNlKHRva2Vuc1Byb2R1Y3QpXG4gIGNvbnN0IHRva2Vuc1Byb2R1Y3RUb3RhbFN1cHBseSA9IHVzZVRva2Vuc1RvdGFsU3VwcGx5KHRva2Vuc1Byb2R1Y3QpXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFJvdyBjbGFzc05hbWU9XCJwYi00XCI+XG4gICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiY29sLXNtLTQgY29sLTEyIHBiLTJcIj5cbiAgICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgIDxwPk1hcmtldCBDYXA8L3A+XG4gICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgIHt0b2tlbnNQcm9kdWN0VG90YWxTdXBwbHk/LlthY3RpdmVUb2tlbj8uaWRdICYmXG4gICAgICAgICAgICAgICAgY3VycmVuY3lGb3JtYXQoXG4gICAgICAgICAgICAgICAgICBtdWxGb3JtYXQoXG4gICAgICAgICAgICAgICAgICAgIHRva2Vuc1Byb2R1Y3RUb3RhbFN1cHBseVthY3RpdmVUb2tlbj8uaWRdIVswXSxcbiAgICAgICAgICAgICAgICAgICAgdG9rZW5zUHJvZHVjdFByaWNlW2FjdGl2ZVRva2VuPy5pZF0hWzBdLFxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIGNsYXNzTmFtZT1cImNvbC1zbS00IGNvbC0xMiBwYi0yXCI+XG4gICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICA8cD5Ub3RhbCBTdXBwbHk8L3A+XG4gICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgIHt0b2tlbnNQcm9kdWN0VG90YWxTdXBwbHk/LlthY3RpdmVUb2tlbj8uaWRdICYmXG4gICAgICAgICAgICAgICAgYW1vdW50Rm9ybWF0KHRva2Vuc1Byb2R1Y3RUb3RhbFN1cHBseVthY3RpdmVUb2tlbj8uaWRdIVswXSl9XG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiY29sLXNtLTQgY29sLTEyIHBiLTJcIj5cbiAgICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgIDxwPkFubnVhbCBGZWVzIDwvcD5cbiAgICAgICAgICAgIDxoMz57YWN0aXZlVG9rZW4/LmZlZX08L2gzPlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgVG9rZW5BYm91dCA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgYWN0aXZlVG9rZW4gPSB0b2tlbnNQcm9kdWN0W051bWJlcihyb3V0ZXI/LnF1ZXJ5Py5pZCldXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoNCBjbGFzc05hbWU9XCJwYi0yXCI+QWJvdXQ8L2g0PlxuICAgICAgPHAgY2xhc3NOYW1lPVwicGItNFwiPnthY3RpdmVUb2tlbj8uYWJvdXR9PC9wPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBUb2tlbkNvbXBvbmVudHMgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IGFjdGl2ZVRva2VuID0gdG9rZW5zUHJvZHVjdFtOdW1iZXIocm91dGVyPy5xdWVyeT8uaWQpXVxuICAvL2NvbnN0IGNvbXBvbmVudHMgPSB1c2VUb2tlblNldENvbXBvbmVudHMoYWN0aXZlVG9rZW4uY29udHJhY3RQb2x5Z29uKVxuICBjb25zdCBjb21wb25lbnRzID0gQ29tcG9uZW50c1Rva2VuUHJvZHVjdFtOdW1iZXIocm91dGVyPy5xdWVyeT8uaWQpXVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDQgY2xhc3NOYW1lPVwicGItMlwiPkNvbXBvbmVudHM8L2g0PlxuICAgICAgPENhcmQ+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbD5cbiAgICAgICAgICAgIDxUYWJsZT5cbiAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgIDx0aD4jPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aD5Ub2tlbjwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiZC1ub25lIGQtbWQtdGFibGUtY2VsbFwiPlZhbHVlIHBlciBUb2tlbjwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiZC1ub25lIGQtbWQtdGFibGUtY2VsbFwiPlBvcmNlbnQ8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRleHQtZW5kXCI+MjRocyBDaGFuZ2U8L3RoPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDwvdGhlYWQ+XG5cbiAgICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cImJvcmRlci10b3BcIj5cbiAgICAgICAgICAgICAgICB7Y29tcG9uZW50cz8ubWFwKChjb21wb25lbnQ6IGFueSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPHRyIGtleT17Y29tcG9uZW50LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Jyd9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZS0yIHJvdW5kZWRcIlxuICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgIHsvKiB7YmFsYW5jZUZvcm1hdChjb21wb25lbnQucG9zaXRpb24sIGNvbXBvbmVudC5kZWNpbWFscykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJyAnICsgKi99XG4gICAgICAgICAgICAgICAgICAgICAge2NvbXBvbmVudC5zeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LWVuZCBkLW5vbmUgZC1tZC10YWJsZS1jZWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAge2NvbXBvbmVudC5wcmljZX1cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtZW5kIGQtbm9uZSBkLW1kLXRhYmxlLWNlbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7Y29tcG9uZW50LnByaWNlfVxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1lbmRcIj57Y29tcG9uZW50LnByaWNlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cInAtNFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPENvbXBvbmVudHNDaGFydCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9DYXJkPlxuICAgIDwvPlxuICApXG59XG5cbi8vIGV4cG9ydCBjb25zdCBUb2tlblRyYW5zYWN0aW9ucyA9ICgpID0+IHtcbi8vICAgcmV0dXJuIDxoND5UcmFuc2FjdGlvbnM8L2g0PlxuLy8gfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/tokens/controls.tsx\n");

/***/ })

});