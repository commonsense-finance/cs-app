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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.modern.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/lucianoinsua/dApps/commonsense/cs-app/src/components/charts/index.tsx\",\n    _this = undefined;\n\n\n\nvar data = {\n  labels: ['Ene', 'Feb', 'Mar', '...', '...', 'Dic'],\n  datasets: [{\n    label: 'Price',\n    data: [10, 11, 10, 15, 14, 16, 17],\n    fill: false,\n    backgroundColor: '#75bfc0',\n    borderColor: '#75bfc0',\n    tension: 0.5\n  }]\n};\nvar options = {\n  scales: {\n    y: {\n      beginAtZero: false\n    }\n  }\n};\n\nvar LineChart = function LineChart() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Line, {\n      data: data,\n      options: options\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false);\n};\n\n_c = LineChart;\nvar chartExample10 = {\n  data: {\n    labels: ['BTC 25%', 'ETH', 'LINK', 'WMATIC', 'UNI', 'AAVE', 'SUSHI', 'TEL'],\n    datasets: [{\n      label: 'CS Index',\n      pointRadius: 0,\n      pointHoverRadius: 0,\n      backgroundColor: ['#ff8779', '#2a84e9', '#e2e2e2'],\n      borderWidth: 0,\n      data: [25, 25, 14, 13, 13, 5, 3, 2]\n    }]\n  },\n  options: {\n    cutoutPercentage: 70,\n    legend: {\n      display: false\n    },\n    tooltips: {\n      backgroundColor: '#f5f5f5',\n      titleFontColor: '#333',\n      bodyFontColor: '#666',\n      bodySpacing: 4,\n      xPadding: 12,\n      mode: 'nearest',\n      intersect: 0,\n      position: 'nearest'\n    },\n    scales: {\n      yAxes: [{\n        display: 0,\n        ticks: {\n          display: false\n        },\n        gridLines: {\n          drawBorder: false,\n          zeroLineColor: 'transparent',\n          color: 'rgba(255,255,255,0.05)'\n        }\n      }],\n      xAxes: [{\n        display: 0,\n        barPercentage: 1.6,\n        gridLines: {\n          drawBorder: false,\n          color: 'rgba(255,255,255,0.1)',\n          zeroLineColor: 'transparent'\n        },\n        ticks: {\n          display: false\n        }\n      }]\n    }\n  }\n};\n\nvar ComponentsChart = function ComponentsChart() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Doughnut, {\n      data: chartExample10.data,\n      options: chartExample10.options\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false);\n};\n\n_c2 = ComponentsChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ComponentsChart);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"LineChart\");\n$RefreshReg$(_c2, \"ComponentsChart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2hhcnRzL2luZGV4LnRzeD9iZTAzIl0sIm5hbWVzIjpbImRhdGEiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImxhYmVsIiwiZmlsbCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwidGVuc2lvbiIsIm9wdGlvbnMiLCJzY2FsZXMiLCJ5IiwiYmVnaW5BdFplcm8iLCJMaW5lQ2hhcnQiLCJjaGFydEV4YW1wbGUxMCIsInBvaW50UmFkaXVzIiwicG9pbnRIb3ZlclJhZGl1cyIsImJvcmRlcldpZHRoIiwiY3V0b3V0UGVyY2VudGFnZSIsImxlZ2VuZCIsImRpc3BsYXkiLCJ0b29sdGlwcyIsInRpdGxlRm9udENvbG9yIiwiYm9keUZvbnRDb2xvciIsImJvZHlTcGFjaW5nIiwieFBhZGRpbmciLCJtb2RlIiwiaW50ZXJzZWN0IiwicG9zaXRpb24iLCJ5QXhlcyIsInRpY2tzIiwiZ3JpZExpbmVzIiwiZHJhd0JvcmRlciIsInplcm9MaW5lQ29sb3IiLCJjb2xvciIsInhBeGVzIiwiYmFyUGVyY2VudGFnZSIsIkNvbXBvbmVudHNDaGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLEdBQUc7QUFDWEMsUUFBTSxFQUFFLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLEVBQXNCLEtBQXRCLEVBQTZCLEtBQTdCLEVBQW9DLEtBQXBDLENBREc7QUFFWEMsVUFBUSxFQUFFLENBQ1I7QUFDRUMsU0FBSyxFQUFFLE9BRFQ7QUFFRUgsUUFBSSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixFQUFqQixFQUFxQixFQUFyQixFQUF5QixFQUF6QixDQUZSO0FBR0VJLFFBQUksRUFBRSxLQUhSO0FBSUVDLG1CQUFlLEVBQUUsU0FKbkI7QUFLRUMsZUFBVyxFQUFFLFNBTGY7QUFNRUMsV0FBTyxFQUFFO0FBTlgsR0FEUTtBQUZDLENBQWI7QUFjQSxJQUFNQyxPQUFPLEdBQUc7QUFFZEMsUUFBTSxFQUFFO0FBQ05DLEtBQUMsRUFBRTtBQUNEQyxpQkFBVyxFQUFFO0FBRFo7QUFERztBQUZNLENBQWhCOztBQVNBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsc0JBQ2hCO0FBQUEsMkJBQ0UsOERBQUMsaURBQUQ7QUFBTSxVQUFJLEVBQUVaLElBQVo7QUFBa0IsYUFBTyxFQUFFUTtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBRGdCO0FBQUEsQ0FBbEI7O0tBQU1JLFM7QUFNTixJQUFNQyxjQUFjLEdBQUc7QUFDckJiLE1BQUksRUFBRTtBQUNKQyxVQUFNLEVBQUUsQ0FBQyxTQUFELEVBQVksS0FBWixFQUFtQixNQUFuQixFQUEyQixRQUEzQixFQUFxQyxLQUFyQyxFQUE0QyxNQUE1QyxFQUFvRCxPQUFwRCxFQUE2RCxLQUE3RCxDQURKO0FBRUpDLFlBQVEsRUFBRSxDQUNSO0FBQ0VDLFdBQUssRUFBRSxVQURUO0FBRUVXLGlCQUFXLEVBQUUsQ0FGZjtBQUdFQyxzQkFBZ0IsRUFBRSxDQUhwQjtBQUlFVixxQkFBZSxFQUFFLENBQUMsU0FBRCxFQUFZLFNBQVosRUFBdUIsU0FBdkIsQ0FKbkI7QUFLRVcsaUJBQVcsRUFBRSxDQUxmO0FBTUVoQixVQUFJLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEVBQWpCLEVBQXFCLENBQXJCLEVBQXdCLENBQXhCLEVBQTJCLENBQTNCO0FBTlIsS0FEUTtBQUZOLEdBRGU7QUFjckJRLFNBQU8sRUFBRTtBQUNQUyxvQkFBZ0IsRUFBRSxFQURYO0FBRVBDLFVBQU0sRUFBRTtBQUNOQyxhQUFPLEVBQUU7QUFESCxLQUZEO0FBS1BDLFlBQVEsRUFBRTtBQUNSZixxQkFBZSxFQUFFLFNBRFQ7QUFFUmdCLG9CQUFjLEVBQUUsTUFGUjtBQUdSQyxtQkFBYSxFQUFFLE1BSFA7QUFJUkMsaUJBQVcsRUFBRSxDQUpMO0FBS1JDLGNBQVEsRUFBRSxFQUxGO0FBTVJDLFVBQUksRUFBRSxTQU5FO0FBT1JDLGVBQVMsRUFBRSxDQVBIO0FBUVJDLGNBQVEsRUFBRTtBQVJGLEtBTEg7QUFlUGxCLFVBQU0sRUFBRTtBQUNObUIsV0FBSyxFQUFFLENBQ0w7QUFDRVQsZUFBTyxFQUFFLENBRFg7QUFFRVUsYUFBSyxFQUFFO0FBQ0xWLGlCQUFPLEVBQUU7QUFESixTQUZUO0FBS0VXLGlCQUFTLEVBQUU7QUFDVEMsb0JBQVUsRUFBRSxLQURIO0FBRVRDLHVCQUFhLEVBQUUsYUFGTjtBQUdUQyxlQUFLLEVBQUU7QUFIRTtBQUxiLE9BREssQ0FERDtBQWNOQyxXQUFLLEVBQUUsQ0FDTDtBQUNFZixlQUFPLEVBQUUsQ0FEWDtBQUVFZ0IscUJBQWEsRUFBRSxHQUZqQjtBQUdFTCxpQkFBUyxFQUFFO0FBQ1RDLG9CQUFVLEVBQUUsS0FESDtBQUVURSxlQUFLLEVBQUUsdUJBRkU7QUFHVEQsdUJBQWEsRUFBRTtBQUhOLFNBSGI7QUFRRUgsYUFBSyxFQUFFO0FBQ0xWLGlCQUFPLEVBQUU7QUFESjtBQVJULE9BREs7QUFkRDtBQWZEO0FBZFksQ0FBdkI7O0FBNkRBLElBQU1pQixlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0FBQUEsc0JBQ3RCO0FBQUEsMkJBQ0UsOERBQUMscURBQUQ7QUFBVSxVQUFJLEVBQUV2QixjQUFjLENBQUNiLElBQS9CO0FBQXFDLGFBQU8sRUFBRWEsY0FBYyxDQUFDTDtBQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBRHNCO0FBQUEsQ0FBeEI7O01BQU00QixlO0FBT04sK0RBQWVBLGVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jaGFydHMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluZSwgRG91Z2hudXQgfSBmcm9tICdyZWFjdC1jaGFydGpzLTInXG5cbmNvbnN0IGRhdGEgPSB7XG4gIGxhYmVsczogWydFbmUnLCAnRmViJywgJ01hcicsICcuLi4nLCAnLi4uJywgJ0RpYyddLFxuICBkYXRhc2V0czogW1xuICAgIHtcbiAgICAgIGxhYmVsOiAnUHJpY2UnLFxuICAgICAgZGF0YTogWzEwLCAxMSwgMTAsIDE1LCAxNCwgMTYsIDE3XSxcbiAgICAgIGZpbGw6IGZhbHNlLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzc1YmZjMCcsXG4gICAgICBib3JkZXJDb2xvcjogJyM3NWJmYzAnLFxuICAgICAgdGVuc2lvbjogMC41LFxuICAgIH0sXG4gIF0sXG59XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIFxuICBzY2FsZXM6IHtcbiAgICB5OiB7XG4gICAgICBiZWdpbkF0WmVybzogZmFsc2UsXG4gICAgfSxcbiAgfSxcbn1cblxuY29uc3QgTGluZUNoYXJ0ID0gKCkgPT4gKFxuICA8PlxuICAgIDxMaW5lIGRhdGE9e2RhdGF9IG9wdGlvbnM9e29wdGlvbnN9IC8+XG4gIDwvPlxuKVxuXG5jb25zdCBjaGFydEV4YW1wbGUxMCA9IHtcbiAgZGF0YToge1xuICAgIGxhYmVsczogWydCVEMgMjUlJywgJ0VUSCcsICdMSU5LJywgJ1dNQVRJQycsICdVTkknLCAnQUFWRScsICdTVVNISScsICdURUwnXSxcbiAgICBkYXRhc2V0czogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogJ0NTIEluZGV4JyxcbiAgICAgICAgcG9pbnRSYWRpdXM6IDAsXG4gICAgICAgIHBvaW50SG92ZXJSYWRpdXM6IDAsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogWycjZmY4Nzc5JywgJyMyYTg0ZTknLCAnI2UyZTJlMiddLFxuICAgICAgICBib3JkZXJXaWR0aDogMCxcbiAgICAgICAgZGF0YTogWzI1LCAyNSwgMTQsIDEzLCAxMywgNSwgMywgMl0sXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIG9wdGlvbnM6IHtcbiAgICBjdXRvdXRQZXJjZW50YWdlOiA3MCxcbiAgICBsZWdlbmQ6IHtcbiAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgIH0sXG4gICAgdG9vbHRpcHM6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmNWY1ZjUnLFxuICAgICAgdGl0bGVGb250Q29sb3I6ICcjMzMzJyxcbiAgICAgIGJvZHlGb250Q29sb3I6ICcjNjY2JyxcbiAgICAgIGJvZHlTcGFjaW5nOiA0LFxuICAgICAgeFBhZGRpbmc6IDEyLFxuICAgICAgbW9kZTogJ25lYXJlc3QnLFxuICAgICAgaW50ZXJzZWN0OiAwLFxuICAgICAgcG9zaXRpb246ICduZWFyZXN0JyxcbiAgICB9LFxuICAgIHNjYWxlczoge1xuICAgICAgeUF4ZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGRpc3BsYXk6IDAsXG4gICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgICBkcmF3Qm9yZGVyOiBmYWxzZSxcbiAgICAgICAgICAgIHplcm9MaW5lQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICBjb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMC4wNSknLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgeEF4ZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGRpc3BsYXk6IDAsXG4gICAgICAgICAgYmFyUGVyY2VudGFnZTogMS42LFxuICAgICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgICAgZHJhd0JvcmRlcjogZmFsc2UsXG4gICAgICAgICAgICBjb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMC4xKScsXG4gICAgICAgICAgICB6ZXJvTGluZUNvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIH0sXG59O1xuXG5jb25zdCBDb21wb25lbnRzQ2hhcnQgPSAoKSA9PiAoXG4gIDw+XG4gICAgPERvdWdobnV0IGRhdGE9e2NoYXJ0RXhhbXBsZTEwLmRhdGF9IG9wdGlvbnM9e2NoYXJ0RXhhbXBsZTEwLm9wdGlvbnN9IC8+XG4gIDwvPlxuKVxuXG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudHNDaGFydFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/charts/index.tsx\n");

/***/ })

});