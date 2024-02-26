"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/hotel/[id]/page",{

/***/ "(app-pages-browser)/./app/components/rooms/BookingForm.jsx":
/*!**********************************************!*\
  !*** ./app/components/rooms/BookingForm.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BookingForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.jsx\");\n/* harmony import */ var _Counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Counter */ \"(app-pages-browser)/./app/components/Counter.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_day_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-day-picker */ \"(app-pages-browser)/./node_modules/react-day-picker/dist/index.esm.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction BookingForm(param) {\n    let { maxGuests, roomId, price } = param;\n    _s();\n    const [guests, setGuests] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);\n    const [date, setDate] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        from: new Date,\n        to: new Date\n    });\n    async function handleSubmit(e) {\n        e.preventDefault();\n        const formData = new FormData(e.target);\n        formData.append(\"guests\", guests);\n        formData.append(\"range\", date);\n        const resp = await fetch(\"/api/booking\", {\n            method: \"POST\",\n            body: formData\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        className: \" mb-[200px] p-[200px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center gap-y-4 flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        hidden: true,\n                        name: \"roomId\",\n                        value: roomId,\n                        type: \"text\"\n                    }, void 0, false, {\n                        fileName: \"/Users/der/Documents/projectcourse/nextjs-base/app/components/rooms/BookingForm.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_1__.Input, {\n                        name: \"fio\",\n                        type: \"text\",\n                        placeholder: \"Ваше ФИО\"\n                    }, void 0, false, {\n                        fileName: \"/Users/der/Documents/projectcourse/nextjs-base/app/components/rooms/BookingForm.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_1__.Input, {\n                        name: \"phone\",\n                        type: \"text\",\n                        placeholder: \"Ваш телефон\"\n                    }, void 0, false, {\n                        fileName: \"/Users/der/Documents/projectcourse/nextjs-base/app/components/rooms/BookingForm.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_1__.Input, {\n                        name: \"email\",\n                        type: \"text\",\n                        placeholder: \"Ваш Email\"\n                    }, void 0, false, {\n                        fileName: \"/Users/der/Documents/projectcourse/nextjs-base/app/components/rooms/BookingForm.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_1__.Input, {\n                        name: \"passport\",\n                        type: \"text\",\n                        placeholder: \"Серия и номер паспорта\"\n                    }, void 0, false, {\n                        fileName: \"/Users/der/Documents/projectcourse/nextjs-base/app/components/rooms/BookingForm.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/der/Documents/projectcourse/nextjs-base/app/components/rooms/BookingForm.jsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                className: \" text-white px-8 py-3 bg-gradient-to-r from-sky-500 to-indigo-500 p-2 rounded-xl drop-shadow-lg\",\n                children: \"Купить курс\"\n            }, void 0, false, {\n                fileName: \"/Users/der/Documents/projectcourse/nextjs-base/app/components/rooms/BookingForm.jsx\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/der/Documents/projectcourse/nextjs-base/app/components/rooms/BookingForm.jsx\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, this);\n}\n_s(BookingForm, \"VjtcoX2+KsJsYTKig58d/I27uRE=\");\n_c = BookingForm;\nvar _c;\n$RefreshReg$(_c, \"BookingForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3Jvb21zL0Jvb2tpbmdGb3JtLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUc2QztBQUNiO0FBQ0E7QUFDRjtBQUNZO0FBRUU7QUFDUTtBQUNwQjtBQUNlO0FBR2hDLFNBQVNVLFlBQVksS0FBNEI7UUFBNUIsRUFBRUMsU0FBUyxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUE1Qjs7SUFDaEMsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ2MsTUFBTUMsUUFBUSxHQUFHZiwrQ0FBUUEsQ0FBQztRQUM3QmdCLE1BQU0sSUFBSUM7UUFDVkMsSUFBSSxJQUFJRDtJQUNaO0lBRUEsZUFBZUUsYUFBYUMsQ0FBQztRQUN6QkEsRUFBRUMsY0FBYztRQUNoQixNQUFNQyxXQUFXLElBQUlDLFNBQVNILEVBQUVJLE1BQU07UUFDdENGLFNBQVNHLE1BQU0sQ0FBQyxVQUFVYjtRQUMxQlUsU0FBU0csTUFBTSxDQUFDLFNBQVNYO1FBRXpCLE1BQU1ZLE9BQU8sTUFBTUMsTUFBTSxnQkFBZ0I7WUFDckNDLFFBQVE7WUFDUkMsTUFBTVA7UUFDVjtJQUNKO0lBRUEscUJBQ0ksOERBQUNRO1FBQUtDLFVBQVVaO1FBQWNhLFdBQVU7OzBCQUdwQyw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNYLDhEQUFDRTt3QkFBTUMsTUFBTTt3QkFBQ0MsTUFBSzt3QkFBU0MsT0FBTzNCO3dCQUFRNEIsTUFBSzs7Ozs7O2tDQUNoRCw4REFBQ3hDLHVEQUFLQTt3QkFBQ3NDLE1BQUs7d0JBQU1FLE1BQUs7d0JBQU9DLGFBQVk7Ozs7OztrQ0FDMUMsOERBQUN6Qyx1REFBS0E7d0JBQUNzQyxNQUFLO3dCQUFRRSxNQUFLO3dCQUFPQyxhQUFZOzs7Ozs7a0NBQzVDLDhEQUFDekMsdURBQUtBO3dCQUFDc0MsTUFBSzt3QkFBUUUsTUFBSzt3QkFBT0MsYUFBWTs7Ozs7O2tDQUM1Qyw4REFBQ3pDLHVEQUFLQTt3QkFBQ3NDLE1BQUs7d0JBQVdFLE1BQUs7d0JBQU9DLGFBQVk7Ozs7Ozs7Ozs7OzswQkFFbkQsOERBQUNoQyx5REFBTUE7Z0JBQUN5QixXQUFVOzBCQUFrRzs7Ozs7Ozs7Ozs7O0FBSWhJO0dBbEN3QnhCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL3Jvb21zL0Jvb2tpbmdGb3JtLmpzeD80NGIzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5cclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2lucHV0XCJcclxuaW1wb3J0IENvdW50ZXIgZnJvbSBcIi4uL0NvdW50ZXJcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IGFkZERheXMsIGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiXHJcblxyXG5pbXBvcnQgeyBEYXRlUmFuZ2UgfSBmcm9tIFwicmVhY3QtZGF5LXBpY2tlclwiXHJcbmltcG9ydCB7IENhbGVuZGFySWNvbiB9IGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtaWNvbnNcIlxyXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCJcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb29raW5nRm9ybSh7IG1heEd1ZXN0cywgcm9vbUlkLCBwcmljZSB9KSB7XHJcbiAgICBjb25zdCBbZ3Vlc3RzLCBzZXRHdWVzdHNdID0gdXNlU3RhdGUoMSlcclxuICAgIGNvbnN0IFtkYXRlLCBzZXREYXRlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBmcm9tOiBuZXcgRGF0ZSxcclxuICAgICAgICB0bzogbmV3IERhdGUsXHJcbiAgICB9KVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZS50YXJnZXQpXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdndWVzdHMnLCBndWVzdHMpXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdyYW5nZScsIGRhdGUpXHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaCgnL2FwaS9ib29raW5nJywge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgYm9keTogZm9ybURhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwiIG1iLVsyMDBweF0gcC1bMjAwcHhdXCI+XHJcblxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAteS00IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgaGlkZGVuIG5hbWU9XCJyb29tSWRcIiB2YWx1ZT17cm9vbUlkfSB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgbmFtZT1cImZpb1wiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLQktCw0YjQtSDQpNCY0J5cIiAvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IG5hbWU9XCJwaG9uZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLQktCw0Ygg0YLQtdC70LXRhNC+0L1cIiAvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IG5hbWU9XCJlbWFpbFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLQktCw0YggRW1haWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IG5hbWU9XCJwYXNzcG9ydFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLQodC10YDQuNGPINC4INC90L7QvNC10YAg0L/QsNGB0L/QvtGA0YLQsFwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIiB0ZXh0LXdoaXRlIHB4LTggcHktMyBiZy1ncmFkaWVudC10by1yIGZyb20tc2t5LTUwMCB0by1pbmRpZ28tNTAwIHAtMiByb3VuZGVkLXhsIGRyb3Atc2hhZG93LWxnXCI+0JrRg9C/0LjRgtGMINC60YPRgNGBPC9CdXR0b24+XHJcblxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsiSW5wdXQiLCJDb3VudGVyIiwidXNlU3RhdGUiLCJSZWFjdCIsImFkZERheXMiLCJmb3JtYXQiLCJEYXRlUmFuZ2UiLCJDYWxlbmRhckljb24iLCJjbiIsIkJ1dHRvbiIsIkJvb2tpbmdGb3JtIiwibWF4R3Vlc3RzIiwicm9vbUlkIiwicHJpY2UiLCJndWVzdHMiLCJzZXRHdWVzdHMiLCJkYXRlIiwic2V0RGF0ZSIsImZyb20iLCJEYXRlIiwidG8iLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwidGFyZ2V0IiwiYXBwZW5kIiwicmVzcCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsImZvcm0iLCJvblN1Ym1pdCIsImNsYXNzTmFtZSIsImRpdiIsImlucHV0IiwiaGlkZGVuIiwibmFtZSIsInZhbHVlIiwidHlwZSIsInBsYWNlaG9sZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/rooms/BookingForm.jsx\n"));

/***/ })

});