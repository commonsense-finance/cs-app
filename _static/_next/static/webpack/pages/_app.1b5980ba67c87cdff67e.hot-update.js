/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/charts/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/charts/index.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.modern.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/lucianoinsua/dApps/commonsense/cs-app/src/components/charts/index.tsx\",\n    _this = undefined;\n\n\n\nvar data = {\n  labels: ['Ene', 'Feb', 'Mar', '...', '...', 'Dic'],\n  datasets: [{\n    label: 'Price',\n    data: [10, 11, 10, 15, 14, 16, 17],\n    fill: false,\n    backgroundColor: '#75bfc0',\n    borderColor: '#75bfc0',\n    tension: 0.5\n  }]\n};\nvar options = {\n  scales: {\n    y: {\n      beginAtZero: false\n    }\n  }\n};\n\nvar LineChart = function LineChart() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Line, {\n      data: data,\n      options: options\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false);\n};\n\n_c = LineChart;\nvar chartExample10 = {\n  data: {\n    labels: ['WBTC 25%', 'WETH 25%', 'LINK 14%', 'WMATIC 13%', 'UNI 13%', 'AAVE 5%', 'SUSHI 3%', 'TEL 2%'],\n    datasets: [{\n      label: 'CS Index',\n      pointRadius: 0,\n      pointHoverRadius: 0,\n      backgroundColor: ['#ff8779', '#2a84e9', '#e2e2e2'],\n      borderWidth: 0,\n      data: [25, 25, 14, 13, 13, 5, 3, 2]\n    }]\n  },\n  options: {\n    responsive: true,\n    plugins: {\n      legend: {\n        position: 'left'\n      },\n      title: {\n        display: false,\n        text: 'Chart.js Doughnut Chart'\n      }\n    }\n  }\n};\n\nvar ComponentsChart = function ComponentsChart() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Doughnut, {\n      data: chartExample10.data,\n      options: chartExample10.options\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false);\n};\n\n_c2 = ComponentsChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ComponentsChart);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"LineChart\");\n$RefreshReg$(_c2, \"ComponentsChart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2hhcnRzL2luZGV4LnRzeD9iZTAzIl0sIm5hbWVzIjpbImRhdGEiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImxhYmVsIiwiZmlsbCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwidGVuc2lvbiIsIm9wdGlvbnMiLCJzY2FsZXMiLCJ5IiwiYmVnaW5BdFplcm8iLCJMaW5lQ2hhcnQiLCJjaGFydEV4YW1wbGUxMCIsInBvaW50UmFkaXVzIiwicG9pbnRIb3ZlclJhZGl1cyIsImJvcmRlcldpZHRoIiwicmVzcG9uc2l2ZSIsInBsdWdpbnMiLCJsZWdlbmQiLCJwb3NpdGlvbiIsInRpdGxlIiwiZGlzcGxheSIsInRleHQiLCJDb21wb25lbnRzQ2hhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHO0FBQ1hDLFFBQU0sRUFBRSxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixLQUF0QixFQUE2QixLQUE3QixFQUFvQyxLQUFwQyxDQURHO0FBRVhDLFVBQVEsRUFBRSxDQUNSO0FBQ0VDLFNBQUssRUFBRSxPQURUO0FBRUVILFFBQUksRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsRUFBakIsRUFBcUIsRUFBckIsRUFBeUIsRUFBekIsQ0FGUjtBQUdFSSxRQUFJLEVBQUUsS0FIUjtBQUlFQyxtQkFBZSxFQUFFLFNBSm5CO0FBS0VDLGVBQVcsRUFBRSxTQUxmO0FBTUVDLFdBQU8sRUFBRTtBQU5YLEdBRFE7QUFGQyxDQUFiO0FBY0EsSUFBTUMsT0FBTyxHQUFHO0FBRWRDLFFBQU0sRUFBRTtBQUNOQyxLQUFDLEVBQUU7QUFDREMsaUJBQVcsRUFBRTtBQURaO0FBREc7QUFGTSxDQUFoQjs7QUFTQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLHNCQUNoQjtBQUFBLDJCQUNFLDhEQUFDLGlEQUFEO0FBQU0sVUFBSSxFQUFFWixJQUFaO0FBQWtCLGFBQU8sRUFBRVE7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURnQjtBQUFBLENBQWxCOztLQUFNSSxTO0FBTU4sSUFBTUMsY0FBYyxHQUFHO0FBQ3JCYixNQUFJLEVBQUU7QUFDSkMsVUFBTSxFQUFFLENBQUMsVUFBRCxFQUFhLFVBQWIsRUFBeUIsVUFBekIsRUFBcUMsWUFBckMsRUFBbUQsU0FBbkQsRUFBOEQsU0FBOUQsRUFBeUUsVUFBekUsRUFBcUYsUUFBckYsQ0FESjtBQUVKQyxZQUFRLEVBQUUsQ0FDUjtBQUNFQyxXQUFLLEVBQUUsVUFEVDtBQUVFVyxpQkFBVyxFQUFFLENBRmY7QUFHRUMsc0JBQWdCLEVBQUUsQ0FIcEI7QUFJRVYscUJBQWUsRUFBRSxDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLFNBQXZCLENBSm5CO0FBS0VXLGlCQUFXLEVBQUUsQ0FMZjtBQU1FaEIsVUFBSSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixFQUFqQixFQUFxQixDQUFyQixFQUF3QixDQUF4QixFQUEyQixDQUEzQjtBQU5SLEtBRFE7QUFGTixHQURlO0FBZW5CUSxTQUFPLEVBQUU7QUFDUFMsY0FBVSxFQUFFLElBREw7QUFFUEMsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRTtBQUNOQyxnQkFBUSxFQUFFO0FBREosT0FERDtBQUlQQyxXQUFLLEVBQUU7QUFDTEMsZUFBTyxFQUFFLEtBREo7QUFFTEMsWUFBSSxFQUFFO0FBRkQ7QUFKQTtBQUZGO0FBZlUsQ0FBdkI7O0FBOEJBLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0I7QUFBQSxzQkFDdEI7QUFBQSwyQkFDRSw4REFBQyxxREFBRDtBQUFVLFVBQUksRUFBRVgsY0FBYyxDQUFDYixJQUEvQjtBQUFxQyxhQUFPLEVBQUVhLGNBQWMsQ0FBQ0w7QUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURzQjtBQUFBLENBQXhCOztNQUFNZ0IsZTtBQU9OLCtEQUFlQSxlQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvY2hhcnRzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmUsIERvdWdobnV0IH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJ1xuXG5jb25zdCBkYXRhID0ge1xuICBsYWJlbHM6IFsnRW5lJywgJ0ZlYicsICdNYXInLCAnLi4uJywgJy4uLicsICdEaWMnXSxcbiAgZGF0YXNldHM6IFtcbiAgICB7XG4gICAgICBsYWJlbDogJ1ByaWNlJyxcbiAgICAgIGRhdGE6IFsxMCwgMTEsIDEwLCAxNSwgMTQsIDE2LCAxN10sXG4gICAgICBmaWxsOiBmYWxzZSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyM3NWJmYzAnLFxuICAgICAgYm9yZGVyQ29sb3I6ICcjNzViZmMwJyxcbiAgICAgIHRlbnNpb246IDAuNSxcbiAgICB9LFxuICBdLFxufVxuXG5jb25zdCBvcHRpb25zID0ge1xuICBcbiAgc2NhbGVzOiB7XG4gICAgeToge1xuICAgICAgYmVnaW5BdFplcm86IGZhbHNlLFxuICAgIH0sXG4gIH0sXG59XG5cbmNvbnN0IExpbmVDaGFydCA9ICgpID0+IChcbiAgPD5cbiAgICA8TGluZSBkYXRhPXtkYXRhfSBvcHRpb25zPXtvcHRpb25zfSAvPlxuICA8Lz5cbilcblxuY29uc3QgY2hhcnRFeGFtcGxlMTAgPSB7XG4gIGRhdGE6IHtcbiAgICBsYWJlbHM6IFsnV0JUQyAyNSUnLCAnV0VUSCAyNSUnLCAnTElOSyAxNCUnLCAnV01BVElDIDEzJScsICdVTkkgMTMlJywgJ0FBVkUgNSUnLCAnU1VTSEkgMyUnLCAnVEVMIDIlJ10sXG4gICAgZGF0YXNldHM6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdDUyBJbmRleCcsXG4gICAgICAgIHBvaW50UmFkaXVzOiAwLFxuICAgICAgICBwb2ludEhvdmVyUmFkaXVzOiAwLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFsnI2ZmODc3OScsICcjMmE4NGU5JywgJyNlMmUyZTInXSxcbiAgICAgICAgYm9yZGVyV2lkdGg6IDAsXG4gICAgICAgIGRhdGE6IFsyNSwgMjUsIDE0LCAxMywgMTMsIDUsIDMsIDJdLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICBcbiAgICBvcHRpb25zOiB7XG4gICAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgICAgcGx1Z2luczoge1xuICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICBwb3NpdGlvbjogJ2xlZnQnLFxuICAgICAgICB9LFxuICAgICAgICB0aXRsZToge1xuICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgICAgIHRleHQ6ICdDaGFydC5qcyBEb3VnaG51dCBDaGFydCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gIFxufTtcblxuY29uc3QgQ29tcG9uZW50c0NoYXJ0ID0gKCkgPT4gKFxuICA8PlxuICAgIDxEb3VnaG51dCBkYXRhPXtjaGFydEV4YW1wbGUxMC5kYXRhfSBvcHRpb25zPXtjaGFydEV4YW1wbGUxMC5vcHRpb25zfSAvPlxuICA8Lz5cbilcblxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnRzQ2hhcnRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/charts/index.tsx\n");

/***/ })

});