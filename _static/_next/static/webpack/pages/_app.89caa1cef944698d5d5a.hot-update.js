/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/redux/actions.ts":
/*!******************************!*\
  !*** ./src/redux/actions.ts ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setError\": function() { return /* reexport safe */ _redux_slices_errors__WEBPACK_IMPORTED_MODULE_0__.setError; },\n/* harmony export */   \"setActiveToken\": function() { return /* reexport safe */ _redux_slices_tokens__WEBPACK_IMPORTED_MODULE_1__.setActiveToken; },\n/* harmony export */   \"updateTokensList\": function() { return /* reexport safe */ _redux_slices_tokens__WEBPACK_IMPORTED_MODULE_1__.updateTokensList; },\n/* harmony export */   \"updateWeb3\": function() { return /* reexport safe */ _redux_slices_web3__WEBPACK_IMPORTED_MODULE_2__.updateWeb3; },\n/* harmony export */   \"setAction\": function() { return /* reexport safe */ _redux_slices_swap__WEBPACK_IMPORTED_MODULE_3__.setAction; },\n/* harmony export */   \"setTokenFrom\": function() { return /* reexport safe */ _redux_slices_swap__WEBPACK_IMPORTED_MODULE_3__.setTokenFrom; },\n/* harmony export */   \"setTokenTo\": function() { return /* reexport safe */ _redux_slices_swap__WEBPACK_IMPORTED_MODULE_3__.setTokenTo; },\n/* harmony export */   \"setActiveFocus\": function() { return /* reexport safe */ _redux_slices_swap__WEBPACK_IMPORTED_MODULE_3__.setActiveFocus; },\n/* harmony export */   \"setAmoutFrom\": function() { return /* reexport safe */ _redux_slices_swap__WEBPACK_IMPORTED_MODULE_3__.setAmoutFrom; },\n/* harmony export */   \"setAmoutTo\": function() { return /* reexport safe */ _redux_slices_swap__WEBPACK_IMPORTED_MODULE_3__.setAmoutTo; },\n/* harmony export */   \"updateToken\": function() { return /* reexport safe */ _redux_slices_swap__WEBPACK_IMPORTED_MODULE_3__.updateToken; },\n/* harmony export */   \"swapApprove\": function() { return /* reexport safe */ _redux_slices_swap__WEBPACK_IMPORTED_MODULE_3__.swapApprove; },\n/* harmony export */   \"swapGetEstimatedIssueSetAmount\": function() { return /* reexport safe */ _redux_slices_swap__WEBPACK_IMPORTED_MODULE_3__.swapGetEstimatedIssueSetAmount; },\n/* harmony export */   \"swapGetAmountInToIssueExactSet\": function() { return /* reexport safe */ _redux_slices_swap__WEBPACK_IMPORTED_MODULE_3__.swapGetAmountInToIssueExactSet; },\n/* harmony export */   \"swapIssueExactSetFromToken\": function() { return /* reexport safe */ _redux_slices_swap__WEBPACK_IMPORTED_MODULE_3__.swapIssueExactSetFromToken; },\n/* harmony export */   \"swapRedeemExactSetForToken\": function() { return /* reexport safe */ _redux_slices_swap__WEBPACK_IMPORTED_MODULE_3__.swapRedeemExactSetForToken; }\n/* harmony export */ });\n/* harmony import */ var _redux_slices_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux/slices/errors */ \"./src/redux/slices/errors/index.ts\");\n/* harmony import */ var _redux_slices_tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redux/slices/tokens */ \"./src/redux/slices/tokens/index.ts\");\n/* harmony import */ var _redux_slices_web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redux/slices/web3 */ \"./src/redux/slices/web3/index.ts\");\n/* harmony import */ var _redux_slices_swap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redux/slices/swap */ \"./src/redux/slices/swap/index.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHV4L2FjdGlvbnMudHM/OGZmMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9yZWR1eC9hY3Rpb25zLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgeyBzZXRFcnJvciB9IGZyb20gXCJAcmVkdXgvc2xpY2VzL2Vycm9yc1wiO1xuZXhwb3J0IHsgc2V0QWN0aXZlVG9rZW4sIHVwZGF0ZVRva2Vuc0xpc3QgfSBmcm9tIFwiQHJlZHV4L3NsaWNlcy90b2tlbnNcIjtcbmV4cG9ydCB7IHVwZGF0ZVdlYjMgfSBmcm9tIFwiQHJlZHV4L3NsaWNlcy93ZWIzXCI7XG5leHBvcnQgeyBzZXRBY3Rpb24sIHNldFRva2VuRnJvbSwgc2V0VG9rZW5Ubywgc2V0QWN0aXZlRm9jdXMsIHNldEFtb3V0RnJvbSwgc2V0QW1vdXRUbywgdXBkYXRlVG9rZW4sIFxuICAgIHN3YXBBcHByb3ZlLCBzd2FwR2V0RXN0aW1hdGVkSXNzdWVTZXRBbW91bnQsIHN3YXBHZXRBbW91bnRJblRvSXNzdWVFeGFjdFNldCwgc3dhcElzc3VlRXhhY3RTZXRGcm9tVG9rZW4sIHN3YXBSZWRlZW1FeGFjdFNldEZvclRva2VuIH0gZnJvbSBcIkByZWR1eC9zbGljZXMvc3dhcFwiO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/redux/actions.ts\n");

/***/ })

});