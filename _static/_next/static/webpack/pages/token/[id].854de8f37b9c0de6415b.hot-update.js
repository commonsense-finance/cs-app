/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/token/[id]",{

/***/ "./src/components/charts/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/charts/index.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.modern.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/lucianoinsua/dApps/commonsense/cs-app/src/components/charts/index.tsx\",\n    _this = undefined;\n\n\n\nvar data = {\n  labels: ['Ene', 'Feb', 'Mar', '...', '...', 'Dic'],\n  datasets: [{\n    label: 'Price',\n    data: [10, 11, 10, 15, 14, 16, 17],\n    fill: false,\n    backgroundColor: '#75bfc0',\n    borderColor: '#75bfc0',\n    tension: 0.5\n  }]\n};\nvar options = {\n  scales: {\n    y: {\n      beginAtZero: false\n    }\n  }\n};\n\nvar LineChart = function LineChart() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Line, {\n      data: data,\n      options: options\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false);\n};\n\n_c = LineChart;\nvar chartExample10 = {\n  data: {\n    labels: ['WBTC 25%', 'WETH 25%', 'LINK 14%', 'WMATIC 13%', 'UNI 13%', 'AAVE 5%', 'SUSHI 3%', 'TEL 2%'],\n    datasets: [{\n      label: 'CS Index',\n      pointRadius: 0,\n      pointHoverRadius: 0,\n      backgroundColor: ['#ff8779', '#f1c388', '#5b5e8c', '#2a84e9', '#e2e2e2', '#f35f50', '#75bfc0', '#3a3b59'],\n      borderWidth: 0,\n      data: [25, 25, 14, 13, 13, 5, 3, 2]\n    }]\n  },\n  options: {\n    responsive: true,\n    plugins: {\n      title: {\n        display: true,\n        text: 'Title'\n      }\n    }\n  }\n};\n\nvar ComponentsChart = function ComponentsChart() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Doughnut, {\n      data: chartExample10.data,\n      options: chartExample10.options\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false);\n};\n\n_c2 = ComponentsChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ComponentsChart);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"LineChart\");\n$RefreshReg$(_c2, \"ComponentsChart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2hhcnRzL2luZGV4LnRzeD9iZTAzIl0sIm5hbWVzIjpbImRhdGEiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImxhYmVsIiwiZmlsbCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwidGVuc2lvbiIsIm9wdGlvbnMiLCJzY2FsZXMiLCJ5IiwiYmVnaW5BdFplcm8iLCJMaW5lQ2hhcnQiLCJjaGFydEV4YW1wbGUxMCIsInBvaW50UmFkaXVzIiwicG9pbnRIb3ZlclJhZGl1cyIsImJvcmRlcldpZHRoIiwicmVzcG9uc2l2ZSIsInBsdWdpbnMiLCJ0aXRsZSIsImRpc3BsYXkiLCJ0ZXh0IiwiQ29tcG9uZW50c0NoYXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBRztBQUNYQyxRQUFNLEVBQUUsQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsRUFBc0IsS0FBdEIsRUFBNkIsS0FBN0IsRUFBb0MsS0FBcEMsQ0FERztBQUVYQyxVQUFRLEVBQUUsQ0FDUjtBQUNFQyxTQUFLLEVBQUUsT0FEVDtBQUVFSCxRQUFJLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEVBQWpCLEVBQXFCLEVBQXJCLEVBQXlCLEVBQXpCLENBRlI7QUFHRUksUUFBSSxFQUFFLEtBSFI7QUFJRUMsbUJBQWUsRUFBRSxTQUpuQjtBQUtFQyxlQUFXLEVBQUUsU0FMZjtBQU1FQyxXQUFPLEVBQUU7QUFOWCxHQURRO0FBRkMsQ0FBYjtBQWNBLElBQU1DLE9BQU8sR0FBRztBQUVkQyxRQUFNLEVBQUU7QUFDTkMsS0FBQyxFQUFFO0FBQ0RDLGlCQUFXLEVBQUU7QUFEWjtBQURHO0FBRk0sQ0FBaEI7O0FBU0EsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxzQkFDaEI7QUFBQSwyQkFDRSw4REFBQyxpREFBRDtBQUFNLFVBQUksRUFBRVosSUFBWjtBQUFrQixhQUFPLEVBQUVRO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFEZ0I7QUFBQSxDQUFsQjs7S0FBTUksUztBQU1OLElBQU1DLGNBQWMsR0FBRztBQUNyQmIsTUFBSSxFQUFFO0FBQ0pDLFVBQU0sRUFBRSxDQUFDLFVBQUQsRUFBYSxVQUFiLEVBQXlCLFVBQXpCLEVBQXFDLFlBQXJDLEVBQW1ELFNBQW5ELEVBQThELFNBQTlELEVBQXlFLFVBQXpFLEVBQXFGLFFBQXJGLENBREo7QUFFSkMsWUFBUSxFQUFFLENBQ1I7QUFDRUMsV0FBSyxFQUFFLFVBRFQ7QUFFRVcsaUJBQVcsRUFBRSxDQUZmO0FBR0VDLHNCQUFnQixFQUFFLENBSHBCO0FBSUVWLHFCQUFlLEVBQUUsQ0FBQyxTQUFELEVBQVksU0FBWixFQUF1QixTQUF2QixFQUFrQyxTQUFsQyxFQUE2QyxTQUE3QyxFQUF3RCxTQUF4RCxFQUFtRSxTQUFuRSxFQUErRSxTQUEvRSxDQUpuQjtBQUtFVyxpQkFBVyxFQUFFLENBTGY7QUFNRWhCLFVBQUksRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsRUFBakIsRUFBcUIsQ0FBckIsRUFBd0IsQ0FBeEIsRUFBMkIsQ0FBM0I7QUFOUixLQURRO0FBRk4sR0FEZTtBQWVuQlEsU0FBTyxFQUFFO0FBQ1BTLGNBQVUsRUFBRSxJQURMO0FBRVBDLFdBQU8sRUFBRTtBQUVQQyxXQUFLLEVBQUU7QUFDTEMsZUFBTyxFQUFFLElBREo7QUFFTEMsWUFBSSxFQUFFO0FBRkQ7QUFGQTtBQUZGO0FBZlUsQ0FBdkI7O0FBNEJBLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0I7QUFBQSxzQkFDdEI7QUFBQSwyQkFDRSw4REFBQyxxREFBRDtBQUFVLFVBQUksRUFBRVQsY0FBYyxDQUFDYixJQUEvQjtBQUFxQyxhQUFPLEVBQUVhLGNBQWMsQ0FBQ0w7QUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURzQjtBQUFBLENBQXhCOztNQUFNYyxlO0FBT04sK0RBQWVBLGVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jaGFydHMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluZSwgRG91Z2hudXQgfSBmcm9tICdyZWFjdC1jaGFydGpzLTInXG5cbmNvbnN0IGRhdGEgPSB7XG4gIGxhYmVsczogWydFbmUnLCAnRmViJywgJ01hcicsICcuLi4nLCAnLi4uJywgJ0RpYyddLFxuICBkYXRhc2V0czogW1xuICAgIHtcbiAgICAgIGxhYmVsOiAnUHJpY2UnLFxuICAgICAgZGF0YTogWzEwLCAxMSwgMTAsIDE1LCAxNCwgMTYsIDE3XSxcbiAgICAgIGZpbGw6IGZhbHNlLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzc1YmZjMCcsXG4gICAgICBib3JkZXJDb2xvcjogJyM3NWJmYzAnLFxuICAgICAgdGVuc2lvbjogMC41LFxuICAgIH0sXG4gIF0sXG59XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIFxuICBzY2FsZXM6IHtcbiAgICB5OiB7XG4gICAgICBiZWdpbkF0WmVybzogZmFsc2UsXG4gICAgfSxcbiAgfSxcbn1cblxuY29uc3QgTGluZUNoYXJ0ID0gKCkgPT4gKFxuICA8PlxuICAgIDxMaW5lIGRhdGE9e2RhdGF9IG9wdGlvbnM9e29wdGlvbnN9IC8+XG4gIDwvPlxuKVxuXG5jb25zdCBjaGFydEV4YW1wbGUxMCA9IHtcbiAgZGF0YToge1xuICAgIGxhYmVsczogWydXQlRDIDI1JScsICdXRVRIIDI1JScsICdMSU5LIDE0JScsICdXTUFUSUMgMTMlJywgJ1VOSSAxMyUnLCAnQUFWRSA1JScsICdTVVNISSAzJScsICdURUwgMiUnXSxcbiAgICBkYXRhc2V0czogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogJ0NTIEluZGV4JyxcbiAgICAgICAgcG9pbnRSYWRpdXM6IDAsXG4gICAgICAgIHBvaW50SG92ZXJSYWRpdXM6IDAsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogWycjZmY4Nzc5JywgJyNmMWMzODgnLCAnIzViNWU4YycsICcjMmE4NGU5JywgJyNlMmUyZTInLCAnI2YzNWY1MCcsICcjNzViZmMwJywgICcjM2EzYjU5J10sXG4gICAgICAgIGJvcmRlcldpZHRoOiAwLFxuICAgICAgICBkYXRhOiBbMjUsIDI1LCAxNCwgMTMsIDEzLCA1LCAzLCAyXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAgXG4gICAgb3B0aW9uczoge1xuICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAgIHBsdWdpbnM6IHtcbiAgICAgICAgXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICB0ZXh0OiAnVGl0bGUnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICBcbn07XG5cbmNvbnN0IENvbXBvbmVudHNDaGFydCA9ICgpID0+IChcbiAgPD5cbiAgICA8RG91Z2hudXQgZGF0YT17Y2hhcnRFeGFtcGxlMTAuZGF0YX0gb3B0aW9ucz17Y2hhcnRFeGFtcGxlMTAub3B0aW9uc30gLz5cbiAgPC8+XG4pXG5cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50c0NoYXJ0XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/charts/index.tsx\n");

/***/ })

});