/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/SubscribeButton/styles.module.scss":
/*!***********************************************************!*\
  !*** ./src/components/SubscribeButton/styles.module.scss ***!
  \***********************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"subscribeButton\": \"styles_subscribeButton__52c6u\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vc3R5bGVzLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL2NvbXBvbmVudHMvU3Vic2NyaWJlQnV0dG9uL3N0eWxlcy5tb2R1bGUuc2Nzcz9kYmU1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInN1YnNjcmliZUJ1dHRvblwiOiBcInN0eWxlc19zdWJzY3JpYmVCdXR0b25fXzUyYzZ1XCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SubscribeButton/styles.module.scss\n");

/***/ }),

/***/ "./src/pages/home.module.scss":
/*!************************************!*\
  !*** ./src/pages/home.module.scss ***!
  \************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"contentContainer\": \"home_contentContainer__HYuN8\",\n\t\"hero\": \"home_hero__lhpWS\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZS5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3BhZ2VzL2hvbWUubW9kdWxlLnNjc3M/ZTRjMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250ZW50Q29udGFpbmVyXCI6IFwiaG9tZV9jb250ZW50Q29udGFpbmVyX19IWXVOOFwiLFxuXHRcImhlcm9cIjogXCJob21lX2hlcm9fX2xocFdTXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/home.module.scss\n");

/***/ }),

/***/ "./src/components/SubscribeButton/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/SubscribeButton/index.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SubscribeButton\": () => (/* binding */ SubscribeButton)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api */ \"./src/services/api.ts\");\n/* harmony import */ var _services_stripe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/stripe.js */ \"./src/services/stripe.js.ts\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/SubscribeButton/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction SubscribeButton({ priceId  }) {\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    async function handleSubscribe() {\n        if (!session) {\n            (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"github\");\n            return;\n        }\n        try {\n            const response = await _services_api__WEBPACK_IMPORTED_MODULE_2__.api.post(\"/subscribe\");\n            const { sessionId  } = response.data;\n            const stripe = await (0,_services_stripe_js__WEBPACK_IMPORTED_MODULE_3__.getStripeJs)();\n            await stripe.redirectToCheckout({\n                sessionId\n            });\n        } catch (error) {\n            alert(error.message);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"button\",\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().subscribeButton),\n        onClick: handleSubscribe,\n        children: \"Subscribe now\"\n    }, void 0, false, {\n        fileName: \"C:\\\\ibis\\\\ignite-react\\\\ignews\\\\src\\\\components\\\\SubscribeButton\\\\index.tsx\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQW9EO0FBQ1g7QUFDYztBQUNkO0FBTWxDLFNBQVNLLGVBQWUsQ0FBQyxFQUFDQyxPQUFPLEdBQXVCLEVBQUU7SUFDN0QsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sR0FBRSxHQUFHUCwyREFBVSxFQUFFO0lBRXRDLGVBQWVRLGVBQWUsR0FBRztRQUM3QixJQUFHLENBQUNELE9BQU8sRUFBQztZQUNSUix1REFBTSxDQUFDLFFBQVEsQ0FBQztZQUNoQixPQUFPO1NBQ1Y7UUFFRCxJQUFJO1lBQ0EsTUFBTVUsUUFBUSxHQUFHLE1BQU1SLG1EQUFRLENBQUMsWUFBWSxDQUFDO1lBRTdDLE1BQU0sRUFBQ1UsU0FBUyxHQUFDLEdBQUdGLFFBQVEsQ0FBQ0gsSUFBSTtZQUVqQyxNQUFNTSxNQUFNLEdBQUcsTUFBTVYsZ0VBQVcsRUFBRTtZQUVsQyxNQUFNVSxNQUFNLENBQUNDLGtCQUFrQixDQUFDO2dCQUFDRixTQUFTO2FBQUMsQ0FBQztTQUMvQyxDQUFDLE9BQU9HLEtBQUssRUFBRTtZQUNaQyxLQUFLLENBQUNELEtBQUssQ0FBQ0UsT0FBTyxDQUFDO1NBQ3ZCO0tBRUo7SUFFRCxxQkFDSSw4REFBQ0MsUUFBTTtRQUNIQyxJQUFJLEVBQUMsUUFBUTtRQUNiQyxTQUFTLEVBQUVoQiw0RUFBc0I7UUFDakNrQixPQUFPLEVBQUViLGVBQWU7a0JBQzNCLGVBRUQ7Ozs7O1lBQVMsQ0FDWjtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL2NvbXBvbmVudHMvU3Vic2NyaWJlQnV0dG9uL2luZGV4LnRzeD85MGU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNpZ25JbiwgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCdcclxuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpJztcclxuaW1wb3J0IHsgZ2V0U3RyaXBlSnMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zdHJpcGUuanMnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJ1xyXG5cclxuaW50ZXJmYWNlIFN1YnNjcmliZUJ1dHRvblByb3BzIHtcclxuICAgIHByaWNlSWQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFN1YnNjcmliZUJ1dHRvbih7cHJpY2VJZH06IFN1YnNjcmliZUJ1dHRvblByb3BzKSB7XHJcbiAgICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1YnNjcmliZSgpIHtcclxuICAgICAgICBpZighc2Vzc2lvbil7XHJcbiAgICAgICAgICAgIHNpZ25JbignZ2l0aHViJylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdCgnL3N1YnNjcmliZScpXHJcblxyXG4gICAgICAgICAgICBjb25zdCB7c2Vzc2lvbklkfSA9IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdHJpcGUgPSBhd2FpdCBnZXRTdHJpcGVKcygpO1xyXG5cclxuICAgICAgICAgICAgYXdhaXQgc3RyaXBlLnJlZGlyZWN0VG9DaGVja291dCh7c2Vzc2lvbklkfSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBhbGVydChlcnJvci5tZXNzYWdlKVxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc3Vic2NyaWJlQnV0dG9ufVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJzY3JpYmV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICBTdWJzY3JpYmUgbm93XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsic2lnbkluIiwidXNlU2Vzc2lvbiIsImFwaSIsImdldFN0cmlwZUpzIiwic3R5bGVzIiwiU3Vic2NyaWJlQnV0dG9uIiwicHJpY2VJZCIsImRhdGEiLCJzZXNzaW9uIiwiaGFuZGxlU3Vic2NyaWJlIiwicmVzcG9uc2UiLCJwb3N0Iiwic2Vzc2lvbklkIiwic3RyaXBlIiwicmVkaXJlY3RUb0NoZWNrb3V0IiwiZXJyb3IiLCJhbGVydCIsIm1lc3NhZ2UiLCJidXR0b24iLCJ0eXBlIiwiY2xhc3NOYW1lIiwic3Vic2NyaWJlQnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SubscribeButton/index.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.module.scss */ \"./src/pages/home.module.scss\");\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_SubscribeButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SubscribeButton */ \"./src/components/SubscribeButton/index.tsx\");\n/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/stripe */ \"./src/services/stripe.ts\");\n\n\n\n\n\nfunction Home({ product  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Home | ig.news\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\ibis\\\\ignite-react\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\ibis\\\\ignite-react\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().contentContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().hero),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"\\uD83D\\uDC4F Hey, welcome\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\ibis\\\\ignite-react\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: [\n                                    \"News about the \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"React\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\ibis\\\\ignite-react\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 24,\n                                        columnNumber: 30\n                                    }, this),\n                                    \" world.\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\ibis\\\\ignite-react\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Get access to all the publications \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\ibis\\\\ignite-react\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 26,\n                                        columnNumber: 48\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: [\n                                            \"for \",\n                                            product.amount,\n                                            \" month\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\ibis\\\\ignite-react\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 27,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\ibis\\\\ignite-react\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SubscribeButton__WEBPACK_IMPORTED_MODULE_2__.SubscribeButton, {\n                                priceId: product.priceId\n                            }, void 0, false, {\n                                fileName: \"C:\\\\ibis\\\\ignite-react\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\ibis\\\\ignite-react\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/images/avatar.svg\",\n                        alt: \"Girl coding\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\ibis\\\\ignite-react\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\ibis\\\\ignite-react\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\nconst getStaticProps = async ()=>{\n    const price = await _services_stripe__WEBPACK_IMPORTED_MODULE_3__.stripe.prices.retrieve(\"price_1KnhZmBuk1Sx4XUfYerfmwkt\");\n    const product = {\n        priceId: price.id,\n        amount: new Intl.NumberFormat(\"pt-BR\", {\n            style: \"currency\",\n            currency: \"BRL\"\n        }).format(price.unit_amount / 100)\n    };\n    return {\n        props: {\n            product\n        },\n        revalidate: 60 * 60 * 24 //24hrs\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE0QjtBQUNXO0FBQ3NCO0FBRWxCO0FBUzVCLFNBQVNJLElBQUksQ0FBQyxFQUFDQyxPQUFPLEdBQVksRUFBRTtJQUNqRCxxQkFDRTs7MEJBQ0UsOERBQUNMLGtEQUFJOzBCQUNILDRFQUFDTSxPQUFLOzhCQUFDLGdCQUFjOzs7Ozt3QkFBUTs7Ozs7b0JBQ3hCOzBCQUVQLDhEQUFDQyxNQUFJO2dCQUFDQyxTQUFTLEVBQUVQLDJFQUF1Qjs7a0NBQ3RDLDhEQUFDUyxTQUFPO3dCQUFDRixTQUFTLEVBQUVQLCtEQUFXOzswQ0FDN0IsOERBQUNXLE1BQUk7MENBQUMsMkJBQWM7Ozs7O29DQUFPOzBDQUMzQiw4REFBQ0MsSUFBRTs7b0NBQUMsaUJBQWU7a0RBQUEsOERBQUNELE1BQUk7a0RBQUMsT0FBSzs7Ozs7NENBQU87b0NBQUEsU0FBTzs7Ozs7O29DQUFLOzBDQUNqRCw4REFBQ0UsR0FBQzs7b0NBQUMscUNBQ2tDO2tEQUFBLDhEQUFDQyxJQUFFOzs7OzRDQUFFO2tEQUN4Qyw4REFBQ0gsTUFBSTs7NENBQUMsTUFBSTs0Q0FBQ1AsT0FBTyxDQUFDVyxNQUFNOzRDQUFDLFFBQU07Ozs7Ozs0Q0FBTzs7Ozs7O29DQUNyQzswQ0FDSiw4REFBQ2Qsd0VBQWU7Z0NBQUNlLE9BQU8sRUFBRVosT0FBTyxDQUFDWSxPQUFPOzs7OztvQ0FBRzs7Ozs7OzRCQUNwQztrQ0FFViw4REFBQ0MsS0FBRzt3QkFBQ0MsR0FBRyxFQUFDLG9CQUFvQjt3QkFBQ0MsR0FBRyxFQUFDLGFBQWE7Ozs7OzRCQUFHOzs7Ozs7b0JBQzdDOztvQkFDTixDQUNKO0NBQ0Y7QUFFTSxNQUFNQyxjQUFjLEdBQW1CLFVBQVk7SUFDeEQsTUFBTUMsS0FBSyxHQUFHLE1BQU1uQixvRUFBc0IsQ0FBQyxnQ0FBZ0MsQ0FBQztJQUU1RSxNQUFNRSxPQUFPLEdBQUc7UUFDZFksT0FBTyxFQUFFSyxLQUFLLENBQUNHLEVBQUU7UUFDakJULE1BQU0sRUFBRSxJQUFJVSxJQUFJLENBQUNDLFlBQVksQ0FBQyxPQUFPLEVBQUU7WUFDckNDLEtBQUssRUFBRSxVQUFVO1lBQ2pCQyxRQUFRLEVBQUUsS0FBSztTQUNoQixDQUFDLENBQUNDLE1BQU0sQ0FBQ1IsS0FBSyxDQUFDUyxXQUFXLEdBQUcsR0FBRyxDQUFDO0tBRW5DO0lBRUQsT0FBTztRQUNMQyxLQUFLLEVBQUU7WUFDTDNCLE9BQU87U0FDUjtRQUNENEIsVUFBVSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU87S0FDakM7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaG9tZS5tb2R1bGUuc2NzcydcbmltcG9ydCB7U3Vic2NyaWJlQnV0dG9ufSBmcm9tICcuLi9jb21wb25lbnRzL1N1YnNjcmliZUJ1dHRvbidcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IHN0cmlwZSB9IGZyb20gJy4uL3NlcnZpY2VzL3N0cmlwZSdcblxuaW50ZXJmYWNlIEhvbWVQcm9wcyB7XG4gIHByb2R1Y3Q6IHtcbiAgICBwcmljZUlkOiBzdHJpbmc7XG4gICAgYW1vdW50OiBudW1iZXI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7cHJvZHVjdH06IEhvbWVQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkhvbWUgfCBpZy5uZXdzPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudENvbnRhaW5lcn0+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmhlcm99PlxuICAgICAgICAgIDxzcGFuPvCfkY8gSGV5LCB3ZWxjb21lPC9zcGFuPlxuICAgICAgICAgIDxoMT5OZXdzIGFib3V0IHRoZSA8c3Bhbj5SZWFjdDwvc3Bhbj4gd29ybGQuPC9oMT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEdldCBhY2Nlc3MgdG8gYWxsIHRoZSBwdWJsaWNhdGlvbnMgPGJyLz5cbiAgICAgICAgICAgIDxzcGFuPmZvciB7cHJvZHVjdC5hbW91bnR9IG1vbnRoPC9zcGFuPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8U3Vic2NyaWJlQnV0dG9uIHByaWNlSWQ9e3Byb2R1Y3QucHJpY2VJZH0vPiBcbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9hdmF0YXIuc3ZnXCIgYWx0PVwiR2lybCBjb2RpbmdcIiAvPlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHByaWNlID0gYXdhaXQgc3RyaXBlLnByaWNlcy5yZXRyaWV2ZSgncHJpY2VfMUtuaFptQnVrMVN4NFhVZlllcmZtd2t0Jyk7XG5cbiAgY29uc3QgcHJvZHVjdCA9IHtcbiAgICBwcmljZUlkOiBwcmljZS5pZCxcbiAgICBhbW91bnQ6IG5ldyBJbnRsLk51bWJlckZvcm1hdCgncHQtQlInLCB7XG4gICAgICBzdHlsZTogJ2N1cnJlbmN5JyxcbiAgICAgIGN1cnJlbmN5OiAnQlJMJyxcbiAgICB9KS5mb3JtYXQocHJpY2UudW5pdF9hbW91bnQgLyAxMDApLFxuXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm9kdWN0XG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiA2MCAqIDYwICogMjQgLy8yNGhyc1xuICB9XG59Il0sIm5hbWVzIjpbIkhlYWQiLCJzdHlsZXMiLCJTdWJzY3JpYmVCdXR0b24iLCJzdHJpcGUiLCJIb21lIiwicHJvZHVjdCIsInRpdGxlIiwibWFpbiIsImNsYXNzTmFtZSIsImNvbnRlbnRDb250YWluZXIiLCJzZWN0aW9uIiwiaGVybyIsInNwYW4iLCJoMSIsInAiLCJiciIsImFtb3VudCIsInByaWNlSWQiLCJpbWciLCJzcmMiLCJhbHQiLCJnZXRTdGF0aWNQcm9wcyIsInByaWNlIiwicHJpY2VzIiwicmV0cmlldmUiLCJpZCIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImN1cnJlbmN5IiwiZm9ybWF0IiwidW5pdF9hbW91bnQiLCJwcm9wcyIsInJldmFsaWRhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: \"/api\"\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXBpLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QjtBQUVsQixNQUFNQyxHQUFHLEdBQUdELG1EQUFZLENBQUM7SUFDOUJHLE9BQU8sRUFBRSxNQUFNO0NBQ2hCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvYXBpLnRzPzk1NmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogJy9hcGknXHJcbn0pIl0sIm5hbWVzIjpbImF4aW9zIiwiYXBpIiwiY3JlYXRlIiwiYmFzZVVSTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/api.ts\n");

/***/ }),

/***/ "./src/services/stripe.js.ts":
/*!***********************************!*\
  !*** ./src/services/stripe.js.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStripeJs\": () => (/* binding */ getStripeJs)\n/* harmony export */ });\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stripe/stripe-js */ \"@stripe/stripe-js\");\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function getStripeJs() {\n    const stripeJs = await (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__.loadStripe)(\"pk_test_51KnhX0Buk1Sx4XUfOQUmmLHQEbMd1RH1I2rvvT4q9rViwNRYVtNfvq25zwGQiizC0A7LhNaO0vq2uUYvzLwns4FQ00kWIzW9hV\");\n    return stripeJs;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvc3RyaXBlLmpzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQztBQUV4QyxlQUFlQyxXQUFXLEdBQUU7SUFDL0IsTUFBTUMsUUFBUSxHQUFHLE1BQU1GLDZEQUFVLENBQUNHLDZHQUF5QyxDQUFDO0lBRTVFLE9BQU9ELFFBQVE7Q0FDbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvc3RyaXBlLmpzLnRzP2E5MzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbG9hZFN0cmlwZSB9IGZyb20gXCJAc3RyaXBlL3N0cmlwZS1qc1wiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0cmlwZUpzKCl7XHJcbiAgICBjb25zdCBzdHJpcGVKcyA9IGF3YWl0IGxvYWRTdHJpcGUocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSSVBFX1BVQkxJQ19LRVkpXHJcblxyXG4gICAgcmV0dXJuIHN0cmlwZUpzXHJcbn0iXSwibmFtZXMiOlsibG9hZFN0cmlwZSIsImdldFN0cmlwZUpzIiwic3RyaXBlSnMiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU1RSSVBFX1BVQkxJQ19LRVkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/stripe.js.ts\n");

/***/ }),

/***/ "./src/services/stripe.ts":
/*!********************************!*\
  !*** ./src/services/stripe.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stripe\": () => (/* binding */ stripe)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_API_KEY, {\n    apiVersion: \"2020-08-27\",\n    appInfo: {\n        name: \"Ignews\",\n        version: \"0.1.0\"\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvc3RyaXBlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0QjtBQUVyQixNQUFNQyxNQUFNLEdBQUcsSUFBSUQsK0NBQU0sQ0FDNUJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxjQUFjLEVBQzFCO0lBQ0lDLFVBQVUsRUFBRSxZQUFZO0lBQ3hCQyxPQUFPLEVBQUU7UUFDTEMsSUFBSSxFQUFFLFFBQVE7UUFDZEMsT0FBTyxFQUFFLE9BQU87S0FDbkI7Q0FDSixDQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvc3RyaXBlLnRzP2FiOTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0cmlwZSBmcm9tICdzdHJpcGUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0cmlwZSA9IG5ldyBTdHJpcGUoXHJcbiAgICBwcm9jZXNzLmVudi5TVFJJUEVfQVBJX0tFWSxcclxuICAgIHtcclxuICAgICAgICBhcGlWZXJzaW9uOiAnMjAyMC0wOC0yNycsXHJcbiAgICAgICAgYXBwSW5mbzoge1xyXG4gICAgICAgICAgICBuYW1lOiAnSWduZXdzJyxcclxuICAgICAgICAgICAgdmVyc2lvbjogJzAuMS4wJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuKTsiXSwibmFtZXMiOlsiU3RyaXBlIiwic3RyaXBlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9BUElfS0VZIiwiYXBpVmVyc2lvbiIsImFwcEluZm8iLCJuYW1lIiwidmVyc2lvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/stripe.ts\n");

/***/ }),

/***/ "@stripe/stripe-js":
/*!************************************!*\
  !*** external "@stripe/stripe-js" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@stripe/stripe-js");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stripe");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();