"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/hotel/page",{

/***/ "(app-pages-browser)/./app/components/Counter.jsx":
/*!************************************!*\
  !*** ./app/components/Counter.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Counter; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nfunction Counter(param) {\n    let { maxGuest, setGuests, guests } = param;\n    let max_guest = 300;\n    if (maxGuest) {\n        max_guest = maxGuest;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center gap-x-5\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    className: \" text-white px-8 py-3 w-5 bg-gradient-to-r from-sky-500 to-indigo-500 p-2 rounded-xl drop-shadow-lg\",\n                    type: \"button\",\n                    onClick: ()=>{\n                        if (guests > 1) setGuests(guests - 10);\n                    },\n                    children: \"-\"\n                }, void 0, false, {\n                    fileName: \"/Users/der/Documents/projectcourse/nextjs-base/app/components/Counter.jsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: guests\n                }, void 0, false, {\n                    fileName: \"/Users/der/Documents/projectcourse/nextjs-base/app/components/Counter.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    className: \" text-white px-8 py-3 bg-gradient-to-r from-sky-500 to-indigo-500 p-2 rounded-xl drop-shadow-lg\",\n                    type: \"button\",\n                    onClick: ()=>{\n                        if (guests < max_guest) setGuests(guests + 10);\n                    },\n                    children: \"+\"\n                }, void 0, false, {\n                    fileName: \"/Users/der/Documents/projectcourse/nextjs-base/app/components/Counter.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/der/Documents/projectcourse/nextjs-base/app/components/Counter.jsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/der/Documents/projectcourse/nextjs-base/app/components/Counter.jsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_c = Counter;\nvar _c;\n$RefreshReg$(_c, \"Counter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0NvdW50ZXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFK0M7QUFLaEMsU0FBU0MsUUFBUSxLQUErQjtRQUEvQixFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsTUFBTSxFQUFFLEdBQS9CO0lBRzlCLElBQUlDLFlBQVk7SUFDaEIsSUFBSUgsVUFBVTtRQUNaRyxZQUFZSDtJQUNkO0lBRUEscUJBRUUsOERBQUNJO2tCQUNDLDRFQUFDQTtZQUFJQyxXQUFVOzs4QkFFYiw4REFBQ1AseURBQU1BO29CQUNMTyxXQUFVO29CQUNWQyxNQUFLO29CQUNMQyxTQUFTO3dCQUNQLElBQUlMLFNBQVMsR0FDWEQsVUFBVUMsU0FBUztvQkFDdkI7OEJBQUc7Ozs7Ozs4QkFFTCw4REFBQ007OEJBQU1OOzs7Ozs7OEJBRVAsOERBQUNKLHlEQUFNQTtvQkFDTE8sV0FBVTtvQkFDVkMsTUFBSztvQkFDTEMsU0FBUzt3QkFDUCxJQUFJTCxTQUFTQyxXQUNYRixVQUFVQyxTQUFTO29CQUN2Qjs4QkFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNYjtLQW5Dd0JIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0NvdW50ZXIuanN4PzA2NWEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3VudGVyKHsgbWF4R3Vlc3QsIHNldEd1ZXN0cywgZ3Vlc3RzIH0pIHtcclxuXHJcblxyXG4gIGxldCBtYXhfZ3Vlc3QgPSAzMDBcclxuICBpZiAobWF4R3Vlc3QpIHtcclxuICAgIG1heF9ndWVzdCA9IG1heEd1ZXN0XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLXgtNVwiPlxyXG5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCIgdGV4dC13aGl0ZSBweC04IHB5LTMgdy01IGJnLWdyYWRpZW50LXRvLXIgZnJvbS1za3ktNTAwIHRvLWluZGlnby01MDAgcC0yIHJvdW5kZWQteGwgZHJvcC1zaGFkb3ctbGdcIlxyXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChndWVzdHMgPiAxKVxyXG4gICAgICAgICAgICAgIHNldEd1ZXN0cyhndWVzdHMgLSAxMClcclxuICAgICAgICAgIH19Pi08L0J1dHRvbj5cclxuXHJcbiAgICAgICAgPHNwYW4+e2d1ZXN0c308L3NwYW4+XHJcblxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIiB0ZXh0LXdoaXRlIHB4LTggcHktMyBiZy1ncmFkaWVudC10by1yIGZyb20tc2t5LTUwMCB0by1pbmRpZ28tNTAwIHAtMiByb3VuZGVkLXhsIGRyb3Atc2hhZG93LWxnXCJcclxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZ3Vlc3RzIDwgbWF4X2d1ZXN0KVxyXG4gICAgICAgICAgICAgIHNldEd1ZXN0cyhndWVzdHMgKyAxMClcclxuICAgICAgICAgIH19Pis8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiQnV0dG9uIiwiQ291bnRlciIsIm1heEd1ZXN0Iiwic2V0R3Vlc3RzIiwiZ3Vlc3RzIiwibWF4X2d1ZXN0IiwiZGl2IiwiY2xhc3NOYW1lIiwidHlwZSIsIm9uQ2xpY2siLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Counter.jsx\n"));

/***/ })

});