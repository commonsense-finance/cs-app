/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/token/[id]",{

/***/ "./src/components/tokens/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/tokens/index.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Tokens\": function() { return /* binding */ Tokens; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_csComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/csComponents */ \"./src/components/csComponents/index.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_slices_tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @redux/slices/tokens */ \"./src/redux/slices/tokens/index.ts\");\n/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ethersproject/units */ \"./node_modules/@ethersproject/units/lib.esm/index.js\");\n/* harmony import */ var _redux_slices_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @redux/slices/theme */ \"./src/redux/slices/theme/index.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/lucianoinsua/dApps/commonsense/cs-app/src/components/tokens/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Tokens = function Tokens() {\n  _s();\n\n  var theme = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_redux_slices_theme__WEBPACK_IMPORTED_MODULE_5__.selectTheme);\n  var tokens = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_redux_slices_tokens__WEBPACK_IMPORTED_MODULE_4__.selectTokensProduct);\n\n  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {\n    return state.tokens;\n  }),\n      statusTokensProduct = _useSelector.statusTokensProduct;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"pb-5\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n      className: \"pb-2 text-\".concat(theme.textMode),\n      children: \"Investments Tokens\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_csComponents__WEBPACK_IMPORTED_MODULE_1__.Card, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_csComponents__WEBPACK_IMPORTED_MODULE_1__.Table, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n              children: \"#\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 23,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n              children: \"Symbol\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 24,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n              className: \"d-none d-md-table-cell\",\n              children: \"Name\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 25,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n              className: \"text-end d-none d-sm-table-cell\",\n              children: \"Market Cap\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 26,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n              className: \"text-end\",\n              children: \"Fees\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 27,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n              className: \"text-center\",\n              children: \"Actions\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 28,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 22,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n          className: \"border-top\",\n          children: tokens === null || tokens === void 0 ? void 0 : tokens.map(function (token, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                  src: token.image,\n                  alt: \"\",\n                  width: \"23\",\n                  className: \"me-2 rounded\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 35,\n                  columnNumber: 19\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 34,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                children: token.symbol\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 42,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"d-none d-md-table-cell\",\n                children: token.name\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 43,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"text-end d-none d-sm-table-cell\",\n                children: [\"$\", Number((0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_6__.formatUnits)(token.marketCap)).toFixed(2)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 44,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"text-end\",\n                children: token.fee\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 47,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"text-center\",\n                children: [statusTokensProduct === 'Succsess' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                  href: '/token/' + token.id + '?action=Invest',\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_csComponents__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    className: \"btn-sm me-2\",\n                    children: \"Invest\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 51,\n                    columnNumber: 21\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 50,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_csComponents__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                  className: \"btn-sm me-2\",\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: '/token/' + token.id + '?action=Invest',\n                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {}, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 55,\n                      columnNumber: 21\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 54,\n                    columnNumber: 19\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 53,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 48,\n                columnNumber: 17\n              }, _this)]\n            }, index, true, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 15\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Tokens, \"O/ti2vf1TTv4Jpu8Yeefes4/rAM=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector];\n});\n\n_c = Tokens;\n\nvar _c;\n\n$RefreshReg$(_c, \"Tokens\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdG9rZW5zL2luZGV4LnRzeD9lNDVjIl0sIm5hbWVzIjpbIlRva2VucyIsInRoZW1lIiwidXNlU2VsZWN0b3IiLCJzZWxlY3RUaGVtZSIsInRva2VucyIsInNlbGVjdFRva2Vuc1Byb2R1Y3QiLCJzdGF0ZSIsInN0YXR1c1Rva2Vuc1Byb2R1Y3QiLCJ0ZXh0TW9kZSIsIm1hcCIsInRva2VuIiwiaW5kZXgiLCJpbWFnZSIsInN5bWJvbCIsIm5hbWUiLCJOdW1iZXIiLCJmb3JtYXRVbml0cyIsIm1hcmtldENhcCIsInRvRml4ZWQiLCJmZWUiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHTyxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQzFCLE1BQU1DLEtBQUssR0FBR0Msd0RBQVcsQ0FBQ0MsNERBQUQsQ0FBekI7QUFDQSxNQUFNQyxNQUFNLEdBQUdGLHdEQUFXLENBQUNHLHFFQUFELENBQTFCOztBQUYwQixxQkFHTUgsd0RBQVcsQ0FBQyxVQUFDSSxLQUFEO0FBQUEsV0FBc0JBLEtBQUssQ0FBQ0YsTUFBNUI7QUFBQSxHQUFELENBSGpCO0FBQUEsTUFHbEJHLG1CQUhrQixnQkFHbEJBLG1CQUhrQjs7QUFLMUIsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBLDRCQUNFO0FBQUksZUFBUyxzQkFBZU4sS0FBSyxDQUFDTyxRQUFyQixDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSw4REFBQywwREFBRDtBQUFBLDZCQUNFLDhEQUFDLDJEQUFEO0FBQUEsZ0NBQ0U7QUFBQSxpQ0FDRTtBQUFBLG9DQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsZUFHRTtBQUFJLHVCQUFTLEVBQUMsd0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEYsZUFJRTtBQUFJLHVCQUFTLEVBQUMsaUNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkYsZUFLRTtBQUFJLHVCQUFTLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMRixlQU1FO0FBQUksdUJBQVMsRUFBQyxhQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFXRTtBQUFPLG1CQUFTLEVBQUMsWUFBakI7QUFBQSxvQkFDR0osTUFESCxhQUNHQSxNQURILHVCQUNHQSxNQUFNLENBQUVLLEdBQVIsQ0FBWSxVQUFDQyxLQUFELEVBQVFDLEtBQVI7QUFBQSxnQ0FDWDtBQUFBLHNDQUNFO0FBQUEsdUNBQ0U7QUFDRSxxQkFBRyxFQUFFRCxLQUFLLENBQUNFLEtBRGI7QUFFRSxxQkFBRyxFQUFDLEVBRk47QUFHRSx1QkFBSyxFQUFDLElBSFI7QUFJRSwyQkFBUyxFQUFDO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFTRTtBQUFBLDBCQUFLRixLQUFLLENBQUNHO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFURixlQVVFO0FBQUkseUJBQVMsRUFBQyx3QkFBZDtBQUFBLDBCQUF3Q0gsS0FBSyxDQUFDSTtBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVZGLGVBV0U7QUFBSSx5QkFBUyxFQUFDLGlDQUFkO0FBQUEsZ0NBQ0lDLE1BQU0sQ0FBQ0MsaUVBQVcsQ0FBQ04sS0FBSyxDQUFDTyxTQUFQLENBQVosQ0FBTixDQUFxQ0MsT0FBckMsQ0FBNkMsQ0FBN0MsQ0FESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBWEYsZUFjRTtBQUFJLHlCQUFTLEVBQUMsVUFBZDtBQUFBLDBCQUEwQlIsS0FBSyxDQUFDUztBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWRGLGVBZUU7QUFBSSx5QkFBUyxFQUFDLGFBQWQ7QUFBQSwyQkFDRVosbUJBQW1CLEtBQUssVUFBeEIsaUJBQ0EsOERBQUMsa0RBQUQ7QUFBTSxzQkFBSSxFQUFFLFlBQVlHLEtBQUssQ0FBQ1UsRUFBbEIsR0FBdUIsZ0JBQW5DO0FBQUEseUNBQ0UsOERBQUMsNERBQUQ7QUFBUSw2QkFBUyxFQUFDLGFBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRixlQUtFLDhEQUFDLDREQUFEO0FBQVEsMkJBQVMsRUFBQyxhQUFsQjtBQUFBLHlDQUNBLDhEQUFDLGtEQUFEO0FBQU0sd0JBQUksRUFBRSxZQUFZVixLQUFLLENBQUNVLEVBQWxCLEdBQXVCLGdCQUFuQztBQUFBLDJDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBZkY7QUFBQSxlQUFTVCxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRFc7QUFBQSxXQUFaO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF5REQsQ0E5RE07O0dBQU1YLE07VUFDR0Usb0QsRUFDQ0Esb0QsRUFDaUJBLG9EOzs7S0FIckJGLE0iLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90b2tlbnMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBUYWJsZSB9IGZyb20gJ0Bjb21wb25lbnRzL2NzQ29tcG9uZW50cydcblxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgc2VsZWN0VG9rZW5zUHJvZHVjdCB9IGZyb20gJ0ByZWR1eC9zbGljZXMvdG9rZW5zJ1xuaW1wb3J0IHsgZm9ybWF0VW5pdHMgfSBmcm9tICdAZXRoZXJzcHJvamVjdC91bml0cydcbmltcG9ydCB7IHNlbGVjdFRoZW1lIH0gZnJvbSAnQHJlZHV4L3NsaWNlcy90aGVtZSdcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gJ0ByZWR1eC9zdG9yZSdcblxuZXhwb3J0IGNvbnN0IFRva2VucyA9ICgpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VTZWxlY3RvcihzZWxlY3RUaGVtZSlcbiAgY29uc3QgdG9rZW5zID0gdXNlU2VsZWN0b3Ioc2VsZWN0VG9rZW5zUHJvZHVjdClcbiAgY29uc3QgeyBzdGF0dXNUb2tlbnNQcm9kdWN0IH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudG9rZW5zKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYi01XCI+XG4gICAgICA8aDQgY2xhc3NOYW1lPXtgcGItMiB0ZXh0LSR7dGhlbWUudGV4dE1vZGV9YH0+SW52ZXN0bWVudHMgVG9rZW5zPC9oND5cbiAgICAgIDxDYXJkPlxuICAgICAgICA8VGFibGU+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGg+IzwvdGg+XG4gICAgICAgICAgICAgIDx0aD5TeW1ib2w8L3RoPlxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiZC1ub25lIGQtbWQtdGFibGUtY2VsbFwiPk5hbWU8L3RoPlxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGV4dC1lbmQgZC1ub25lIGQtc20tdGFibGUtY2VsbFwiPk1hcmtldCBDYXA8L3RoPlxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGV4dC1lbmRcIj5GZWVzPC90aD5cbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+QWN0aW9uczwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cImJvcmRlci10b3BcIj5cbiAgICAgICAgICAgIHt0b2tlbnM/Lm1hcCgodG9rZW4sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz17dG9rZW4uaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjNcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZS0yIHJvdW5kZWRcIlxuICAgICAgICAgICAgICAgICAgPjwvaW1nPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPnt0b2tlbi5zeW1ib2x9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZC1ub25lIGQtbWQtdGFibGUtY2VsbFwiPnt0b2tlbi5uYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtZW5kIGQtbm9uZSBkLXNtLXRhYmxlLWNlbGxcIj5cbiAgICAgICAgICAgICAgICAgICR7TnVtYmVyKGZvcm1hdFVuaXRzKHRva2VuLm1hcmtldENhcCkpLnRvRml4ZWQoMil9XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1lbmRcIj57dG9rZW4uZmVlfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgeyBzdGF0dXNUb2tlbnNQcm9kdWN0ID09PSAnU3VjY3Nlc3MnICYmIFxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy90b2tlbi8nICsgdG9rZW4uaWQgKyAnP2FjdGlvbj1JbnZlc3QnfT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidG4tc20gbWUtMlwiPkludmVzdDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPiB9XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1zbSBtZS0yXCI+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnL3Rva2VuLycgKyB0b2tlbi5pZCArICc/YWN0aW9uPUludmVzdCd9PlxuICAgICAgICAgICAgICAgICAgICA8YT48L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIFxuey8qIFxuICAgICAgICAgICAgICAgICAgaHJlZj17e1xuICAgICAgICAgICAgICBwYXRobmFtZTogJy9ibG9nL1tzbHVnXScsXG4gICAgICAgICAgICAgIHF1ZXJ5OiB7IHNsdWc6IHBvc3Quc2x1ZyB9LFxuICAgICAgICAgICAgfX0gKi99XG5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC9UYWJsZT5cbiAgICAgIDwvQ2FyZD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/tokens/index.tsx\n");

/***/ })

});