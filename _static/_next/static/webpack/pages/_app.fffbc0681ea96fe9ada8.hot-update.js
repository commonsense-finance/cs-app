/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/header/index.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components */ \"./src/components/index.ts\");\n/* harmony import */ var _components_Icons___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Icons/ */ \"./src/components/Icons/index.js\");\n/* harmony import */ var _redux_slices_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redux/slices/theme */ \"./src/redux/slices/theme/index.ts\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _usedapp_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @usedapp/core */ \"./node_modules/@usedapp/core/dist/esm/src/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/lucianoinsua/dApps/commonsense/cs-app/src/components/header/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Header = function Header() {\n  _s();\n\n  var theme = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_redux_slices_theme__WEBPACK_IMPORTED_MODULE_3__.selectTheme);\n\n  var _useEthers = (0,_usedapp_core__WEBPACK_IMPORTED_MODULE_6__.useEthers)(),\n      account = _useEthers.account,\n      chainId = _useEthers.chainId;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Navbar, {\n      collapseOnSelect: true,\n      expand: \"lg\",\n      className: \"navbar-\".concat(theme.bgMode, \" bg-transparence\"),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Navbar.Brand, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n          href: \"/\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Icons___WEBPACK_IMPORTED_MODULE_2__.CSLogo, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 24,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Navbar.Toggle, {\n        \"aria-controls\": \"responsive-navbar-nav\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Navbar.Collapse, {\n        id: \"responsive-navbar-nav\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Nav, {\n          className: \"me-auto\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.SwitchTheme, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Button, {\n            className: \"me-2\",\n            variant: theme.bgMode,\n            children: \"Beta 1.0v\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 13\n          }, _this), account && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Button, {\n            variant: theme.bgMode,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: \"d-inline align-middle\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"me-2 badge rounded-circle bg-success p-1\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                  className: \"visually-hidden\",\n                  children: \"unread messages\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 39,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 38,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: (0,_usedapp_core__WEBPACK_IMPORTED_MODULE_6__.getChainName)(chainId || 0)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 41,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 37,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Nav, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.Wallet, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Header, \"xoX8pBsUV8AltjdPkdaOg8Hd/VQ=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector, _usedapp_core__WEBPACK_IMPORTED_MODULE_6__.useEthers];\n});\n\n_c = Header;\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LnRzeD8wN2UyIl0sIm5hbWVzIjpbIkhlYWRlciIsInRoZW1lIiwidXNlU2VsZWN0b3IiLCJzZWxlY3RUaGVtZSIsInVzZUV0aGVycyIsImFjY291bnQiLCJjaGFpbklkIiwiYmdNb2RlIiwiZ2V0Q2hhaW5OYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQzFCLE1BQU1DLEtBQUssR0FBR0Msd0RBQVcsQ0FBQ0MsNERBQUQsQ0FBekI7O0FBRDBCLG1CQUVHQyx3REFBUyxFQUZaO0FBQUEsTUFFbEJDLE9BRmtCLGNBRWxCQSxPQUZrQjtBQUFBLE1BRVRDLE9BRlMsY0FFVEEsT0FGUzs7QUFJMUIsc0JBQ0U7QUFBQSwyQkFDRSw4REFBQyxtREFBRDtBQUNFLHNCQUFnQixNQURsQjtBQUVFLFlBQU0sRUFBQyxJQUZUO0FBR0UsZUFBUyxtQkFBWUwsS0FBSyxDQUFDTSxNQUFsQixxQkFIWDtBQUFBLDhCQUtFLDhEQUFDLHlEQUFEO0FBQUEsK0JBQ0UsOERBQUMsa0RBQUQ7QUFBTSxjQUFJLEVBQUMsR0FBWDtBQUFBLGlDQUNFO0FBQUEsbUNBQ0UsOERBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGLGVBWUUsOERBQUMsMERBQUQ7QUFBZSx5QkFBYztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWkYsZUFhRSw4REFBQyw0REFBRDtBQUFpQixVQUFFLEVBQUMsdUJBQXBCO0FBQUEsZ0NBQ0UsOERBQUMsZ0RBQUQ7QUFBSyxtQkFBUyxFQUFDLFNBQWY7QUFBQSxrQ0FDRSw4REFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUsOERBQUMsbURBQUQ7QUFBUSxxQkFBUyxFQUFDLE1BQWxCO0FBQXlCLG1CQUFPLEVBQUVOLEtBQUssQ0FBQ00sTUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsRUFLR0YsT0FBTyxpQkFDTiw4REFBQyxtREFBRDtBQUFRLG1CQUFPLEVBQUVKLEtBQUssQ0FBQ00sTUFBdkI7QUFBQSxtQ0FDRTtBQUFLLHVCQUFTLEVBQUMsdUJBQWY7QUFBQSxzQ0FDRTtBQUFNLHlCQUFTLEVBQUMsMENBQWhCO0FBQUEsdUNBQ0U7QUFBTSwyQkFBUyxFQUFDLGlCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFJRTtBQUFBLDBCQUFPQywyREFBWSxDQUFDRixPQUFPLElBQUksQ0FBWjtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBaUJFLDhEQUFDLGdEQUFEO0FBQUEsaUNBRUUsOERBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBd0NELENBNUNNOztHQUFNTixNO1VBQ0dFLG9ELEVBQ2VFLG9EOzs7S0FGbEJKLE0iLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBTd2l0Y2hUaGVtZSwgQWN0aXZpdGllcywgV2FsbGV0IH0gZnJvbSAnQGNvbXBvbmVudHMnXG5pbXBvcnQgeyBDU0xvZ28gfSBmcm9tICdAY29tcG9uZW50cy9JY29ucy8nXG5pbXBvcnQgeyBzZWxlY3RUaGVtZSB9IGZyb20gJ0ByZWR1eC9zbGljZXMvdGhlbWUnXG5pbXBvcnQgeyBOYXZiYXIsIE5hdiwgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IGdldENoYWluTmFtZSwgdXNlRXRoZXJzIH0gZnJvbSAnQHVzZWRhcHAvY29yZSdcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VTZWxlY3RvcihzZWxlY3RUaGVtZSlcbiAgY29uc3QgeyBhY2NvdW50LCBjaGFpbklkIH0gPSB1c2VFdGhlcnMoKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOYXZiYXJcbiAgICAgICAgY29sbGFwc2VPblNlbGVjdFxuICAgICAgICBleHBhbmQ9XCJsZ1wiXG4gICAgICAgIGNsYXNzTmFtZT17YG5hdmJhci0ke3RoZW1lLmJnTW9kZX0gYmctdHJhbnNwYXJlbmNlYH1cbiAgICAgID5cbiAgICAgICAgPE5hdmJhci5CcmFuZD5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgIDxDU0xvZ28gLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvTmF2YmFyLkJyYW5kPlxuICAgICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwicmVzcG9uc2l2ZS1uYXZiYXItbmF2XCIgLz5cbiAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cInJlc3BvbnNpdmUtbmF2YmFyLW5hdlwiPlxuICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibWUtYXV0b1wiPlxuICAgICAgICAgICAgPFN3aXRjaFRoZW1lIC8+XG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIm1lLTJcIiB2YXJpYW50PXt0aGVtZS5iZ01vZGV9PlxuICAgICAgICAgICAgICBCZXRhIDEuMHZcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAge2FjY291bnQgJiYgKFxuICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9e3RoZW1lLmJnTW9kZX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWlubGluZSBhbGlnbi1taWRkbGVcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1lLTIgYmFkZ2Ugcm91bmRlZC1jaXJjbGUgYmctc3VjY2VzcyBwLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidmlzdWFsbHktaGlkZGVuXCI+dW5yZWFkIG1lc3NhZ2VzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+e2dldENoYWluTmFtZShjaGFpbklkIHx8IDApfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgIDxOYXY+XG4gICAgICAgICAgICB7LyogPEFjdGl2aXRpZXMgLz4gKi99XG4gICAgICAgICAgICA8V2FsbGV0IC8+XG4gICAgICAgICAgPC9OYXY+XG4gICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxuICAgICAgPC9OYXZiYXI+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/header/index.tsx\n");

/***/ })

});