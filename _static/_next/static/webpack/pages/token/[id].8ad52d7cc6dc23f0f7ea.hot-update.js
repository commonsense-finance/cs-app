/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/token/[id]",{

/***/ "./pages/token/[id].tsx":
/*!******************************!*\
  !*** ./pages/token/[id].tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @redux/actions */ \"./src/redux/actions.ts\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components */ \"./src/components/index.ts\");\n/* harmony import */ var _redux_slices_tokens__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @redux/slices/tokens */ \"./src/redux/slices/tokens/index.ts\");\n/* harmony import */ var src_constants_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/constants/styles */ \"./src/constants/styles.ts\");\n/* harmony import */ var _redux_slices_swap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @redux/slices/swap */ \"./src/redux/slices/swap/index.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/lucianoinsua/dApps/commonsense/cs-app/pages/token/[id].tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar token = function token() {\n  _s();\n\n  var _router$query5;\n\n  var tokensProduct = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_redux_slices_tokens__WEBPACK_IMPORTED_MODULE_6__.selectTokensList);\n\n  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_redux_slices_swap__WEBPACK_IMPORTED_MODULE_8__.selectSwap),\n      token = _useSelector.token;\n\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var _router$query;\n\n    if (router !== null && router !== void 0 && (_router$query = router.query) !== null && _router$query !== void 0 && _router$query.id) {\n      var _router$query2, _router$query3, _router$query4;\n\n      //for Tokens Page\n      dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_4__.setActiveToken)(Number(router === null || router === void 0 ? void 0 : (_router$query2 = router.query) === null || _router$query2 === void 0 ? void 0 : _router$query2.id))); //for Token Product\n\n      dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_4__.setTokenTo)(tokensProduct[Number(router === null || router === void 0 ? void 0 : (_router$query3 = router.query) === null || _router$query3 === void 0 ? void 0 : _router$query3.id)]));\n      dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_4__.updateToken)(token.id));\n      dispatch((0,_redux_slices_swap__WEBPACK_IMPORTED_MODULE_8__.updateTokenProduct)(Number(router === null || router === void 0 ? void 0 : (_router$query4 = router.query) === null || _router$query4 === void 0 ? void 0 : _router$query4.id)));\n      dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_4__.setAction)(router.query.action));\n    }\n  }, [router === null || router === void 0 ? void 0 : (_router$query5 = router.query) === null || _router$query5 === void 0 ? void 0 : _router$query5.id]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"text-white\",\n      style: {\n        backgroundColor: src_constants_styles__WEBPACK_IMPORTED_MODULE_7__.primaryColor\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Container, {\n        className: \"py-4\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_5__.TokenHeader, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Container, {\n      className: \"py-5\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Row, {\n        className: \"pb-5\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Col, {\n          className: \"col-8\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_5__.TokenStats, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_5__.TokenAbout, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_5__.TokenComponents, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Col, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_5__.Swap, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(token, \"o02xpS7Gnfvj48dh07JffNf09Xs=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch, next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (token);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG9rZW4vW2lkXS50c3g/OWVmMCJdLCJuYW1lcyI6WyJ0b2tlbiIsInRva2Vuc1Byb2R1Y3QiLCJ1c2VTZWxlY3RvciIsInNlbGVjdFRva2Vuc0xpc3QiLCJzZWxlY3RTd2FwIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInF1ZXJ5IiwiaWQiLCJzZXRBY3RpdmVUb2tlbiIsIk51bWJlciIsInNldFRva2VuVG8iLCJ1cGRhdGVUb2tlbiIsInVwZGF0ZVRva2VuUHJvZHVjdCIsInNldEFjdGlvbiIsImFjdGlvbiIsImJhY2tncm91bmRDb2xvciIsInByaW1hcnlDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsaUJBQU07QUFBQTs7QUFBQTs7QUFDbEIsTUFBTUMsYUFBYSxHQUFHQyx3REFBVyxDQUFDQyxrRUFBRCxDQUFqQzs7QUFEa0IscUJBRUFELHdEQUFXLENBQUNFLDBEQUFELENBRlg7QUFBQSxNQUVWSixLQUZVLGdCQUVWQSxLQUZVOztBQUdsQixNQUFNSyxRQUFRLEdBQUdDLHdEQUFXLEVBQTVCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUVBQyxrREFBUyxDQUFDLFlBQU07QUFBQTs7QUFDZCxRQUFJRixNQUFKLGFBQUlBLE1BQUosZ0NBQUlBLE1BQU0sQ0FBRUcsS0FBWiwwQ0FBSSxjQUFlQyxFQUFuQixFQUF1QjtBQUFBOztBQUNyQjtBQUNBTixjQUFRLENBQUNPLDhEQUFjLENBQUNDLE1BQU0sQ0FBQ04sTUFBRCxhQUFDQSxNQUFELHlDQUFDQSxNQUFNLENBQUVHLEtBQVQsbURBQUMsZUFBZUMsRUFBaEIsQ0FBUCxDQUFmLENBQVIsQ0FGcUIsQ0FHckI7O0FBQ0FOLGNBQVEsQ0FBQ1MsMERBQVUsQ0FBQ2IsYUFBYSxDQUFDWSxNQUFNLENBQUNOLE1BQUQsYUFBQ0EsTUFBRCx5Q0FBQ0EsTUFBTSxDQUFFRyxLQUFULG1EQUFDLGVBQWVDLEVBQWhCLENBQVAsQ0FBZCxDQUFYLENBQVI7QUFFQU4sY0FBUSxDQUFDVSwyREFBVyxDQUFDZixLQUFLLENBQUNXLEVBQVAsQ0FBWixDQUFSO0FBQ0FOLGNBQVEsQ0FBQ1csc0VBQWtCLENBQUNILE1BQU0sQ0FBQ04sTUFBRCxhQUFDQSxNQUFELHlDQUFDQSxNQUFNLENBQUVHLEtBQVQsbURBQUMsZUFBZUMsRUFBaEIsQ0FBUCxDQUFuQixDQUFSO0FBRUFOLGNBQVEsQ0FBQ1kseURBQVMsQ0FBQ1YsTUFBTSxDQUFDRyxLQUFQLENBQWFRLE1BQWQsQ0FBVixDQUFSO0FBQ0Q7QUFDRixHQVpRLEVBWU4sQ0FBQ1gsTUFBRCxhQUFDQSxNQUFELHlDQUFDQSxNQUFNLENBQUVHLEtBQVQsbURBQUMsZUFBZUMsRUFBaEIsQ0FaTSxDQUFUO0FBY0Esc0JBQ0U7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQyxZQUFmO0FBQTRCLFdBQUssRUFBRTtBQUFFUSx1QkFBZSxFQUFFQyw4REFBWUE7QUFBL0IsT0FBbkM7QUFBQSw2QkFDRSw4REFBQyxzREFBRDtBQUFXLGlCQUFTLEVBQUMsTUFBckI7QUFBQSwrQkFDRSw4REFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQU1FLDhEQUFDLHNEQUFEO0FBQVcsZUFBUyxFQUFDLE1BQXJCO0FBQUEsNkJBQ0UsOERBQUMsZ0RBQUQ7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBQSxnQ0FDRSw4REFBQyxnREFBRDtBQUFLLG1CQUFTLEVBQUMsT0FBZjtBQUFBLGtDQUNFLDhEQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSw4REFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBR0UsOERBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFPRSw4REFBQyxnREFBRDtBQUFBLGlDQUNFLDhEQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORjtBQUFBLGtCQURGO0FBc0JELENBMUNEOztHQUFNcEIsSztVQUNrQkUsb0QsRUFDSkEsb0QsRUFDREksb0QsRUFDRkUsa0Q7OztBQXdDakIsK0RBQWVSLEtBQWYiLCJmaWxlIjoiLi9wYWdlcy90b2tlbi9baWRdLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHNldEFjdGl2ZVRva2VuLCBzZXRUb2tlblRvLCBzZXRBY3Rpb24sIHVwZGF0ZVRva2VuIH0gZnJvbSAnQHJlZHV4L2FjdGlvbnMnXG5pbXBvcnQgeyBDb2wsIFJvdywgQ29udGFpbmVyIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IHtcbiAgVG9rZW5BYm91dCxcbiAgVG9rZW5Db21wb25lbnRzLFxuICBUb2tlbkhlYWRlcixcbiAgVG9rZW5TdGF0cyxcbiAgU3dhcCxcbn0gZnJvbSAnQGNvbXBvbmVudHMnXG5pbXBvcnQgeyBzZWxlY3RUb2tlbnNMaXN0IH0gZnJvbSAnQHJlZHV4L3NsaWNlcy90b2tlbnMnXG5pbXBvcnQgeyBwcmltYXJ5Q29sb3IgfSBmcm9tICdzcmMvY29uc3RhbnRzL3N0eWxlcydcbmltcG9ydCB7IHNlbGVjdFN3YXAsIHVwZGF0ZVRva2VuUHJvZHVjdCB9IGZyb20gJ0ByZWR1eC9zbGljZXMvc3dhcCdcblxuY29uc3QgdG9rZW4gPSAoKSA9PiB7XG4gIGNvbnN0IHRva2Vuc1Byb2R1Y3QgPSB1c2VTZWxlY3RvcihzZWxlY3RUb2tlbnNMaXN0KVxuICBjb25zdCB7IHRva2VuIH0gPSB1c2VTZWxlY3RvcihzZWxlY3RTd2FwKVxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChyb3V0ZXI/LnF1ZXJ5Py5pZCkge1xuICAgICAgLy9mb3IgVG9rZW5zIFBhZ2VcbiAgICAgIGRpc3BhdGNoKHNldEFjdGl2ZVRva2VuKE51bWJlcihyb3V0ZXI/LnF1ZXJ5Py5pZCkpKVxuICAgICAgLy9mb3IgVG9rZW4gUHJvZHVjdFxuICAgICAgZGlzcGF0Y2goc2V0VG9rZW5Ubyh0b2tlbnNQcm9kdWN0W051bWJlcihyb3V0ZXI/LnF1ZXJ5Py5pZCldKSlcblxuICAgICAgZGlzcGF0Y2godXBkYXRlVG9rZW4odG9rZW4uaWQpKVxuICAgICAgZGlzcGF0Y2godXBkYXRlVG9rZW5Qcm9kdWN0KE51bWJlcihyb3V0ZXI/LnF1ZXJ5Py5pZCkpKVxuXG4gICAgICBkaXNwYXRjaChzZXRBY3Rpb24ocm91dGVyLnF1ZXJ5LmFjdGlvbikpXG4gICAgfVxuICB9LCBbcm91dGVyPy5xdWVyeT8uaWRdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogcHJpbWFyeUNvbG9yIH19PlxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cInB5LTRcIj5cbiAgICAgICAgICA8VG9rZW5IZWFkZXIgLz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwicHktNVwiPlxuICAgICAgICA8Um93IGNsYXNzTmFtZT1cInBiLTVcIj5cbiAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cImNvbC04XCI+XG4gICAgICAgICAgICA8VG9rZW5TdGF0cyAvPlxuICAgICAgICAgICAgPFRva2VuQWJvdXQgLz5cbiAgICAgICAgICAgIDxUb2tlbkNvbXBvbmVudHMgLz5cbiAgICAgICAgICAgIHsvKiA8VG9rZW5UcmFuc2FjdGlvbnMgLz4gKi99XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbD5cbiAgICAgICAgICAgIDxTd2FwIC8+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9rZW5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/token/[id].tsx\n");

/***/ })

});