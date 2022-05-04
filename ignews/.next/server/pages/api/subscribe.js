"use strict";
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
exports.id = "pages/api/subscribe";
exports.ids = ["pages/api/subscribe"];
exports.modules = {

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("faunadb");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "(api)/./src/pages/api/subscribe.ts":
/*!************************************!*\
  !*** ./src/pages/api/subscribe.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_fauna__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/fauna */ \"(api)/./src/services/fauna.ts\");\n/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/stripe */ \"(api)/./src/services/stripe.ts\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (request, response)=>{\n    if (request.method === \"POST\") {\n        const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)({\n            req: request\n        });\n        const user = await _services_fauna__WEBPACK_IMPORTED_MODULE_2__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index(\"user_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(session.user.email))));\n        let customerId = user.data.stripe_customer_id;\n        if (!customerId) {\n            const stripeCustomer = await _services_stripe__WEBPACK_IMPORTED_MODULE_3__.stripe.customers.create({\n                email: session.user.email\n            });\n            await _services_fauna__WEBPACK_IMPORTED_MODULE_2__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Update(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Ref(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Collection(\"users\"), user.ref.id), {\n                data: {\n                    stripe_customer_id: stripeCustomer.id\n                }\n            }));\n            customerId = stripeCustomer.id;\n        }\n        const stripeCheckoutSession = await _services_stripe__WEBPACK_IMPORTED_MODULE_3__.stripe.checkout.sessions.create({\n            customer: customerId,\n            payment_method_types: [\n                \"card\"\n            ],\n            billing_address_collection: \"required\",\n            line_items: [\n                {\n                    price: \"price_1KnhZmBuk1Sx4XUfYerfmwkt\",\n                    quantity: 1\n                }\n            ],\n            mode: \"subscription\",\n            allow_promotion_codes: true,\n            success_url: process.env.STRIPE_SUCCESS_URL,\n            cancel_url: process.env.STRIPE_CANCEL_URL\n        });\n        return response.status(200).json({\n            sessionId: stripeCheckoutSession.id\n        });\n    } else {\n        response.setHeader(\"Allow\", \"POST\");\n        response.status(405).end(\"Method not allowed!\");\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3N1YnNjcmliZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWdDO0FBRVU7QUFDRztBQUNFO0FBVy9DLGlFQUFlLE9BQU9JLE9BQXVCLEVBQUVDLFFBQXdCLEdBQUk7SUFDdkUsSUFBR0QsT0FBTyxDQUFDRSxNQUFNLEtBQUssTUFBTSxFQUFDO1FBQ3pCLE1BQU1DLE9BQU8sR0FBRyxNQUFNTiwyREFBVSxDQUFDO1lBQUVPLEdBQUcsRUFBRUosT0FBTztTQUFFLENBQUM7UUFFbEQsTUFBTUssSUFBSSxHQUFHLE1BQU1QLHdEQUFXLENBQzVCRiw4Q0FBUyxDQUNQQSxnREFBVyxDQUNUQSxnREFBVyxDQUFDLGVBQWUsQ0FBQyxFQUM1QkEsbURBQWMsQ0FBQ08sT0FBTyxDQUFDRSxJQUFJLENBQUNLLEtBQUssQ0FBQyxDQUNuQyxDQUNGLENBQ0Y7UUFFRCxJQUFJQyxVQUFVLEdBQUdOLElBQUksQ0FBQ08sSUFBSSxDQUFDQyxrQkFBa0I7UUFFN0MsSUFBSSxDQUFDRixVQUFVLEVBQUU7WUFDZixNQUFNRyxjQUFjLEdBQUcsTUFBTWYscUVBQXVCLENBQUM7Z0JBQ25EVyxLQUFLLEVBQUVQLE9BQU8sQ0FBQ0UsSUFBSSxDQUFDSyxLQUFLO2FBQzFCLENBQUM7WUFFRixNQUFNWix3REFBVyxDQUNmRixpREFBWSxDQUNWQSw4Q0FBUyxDQUFDQSxxREFBZ0IsQ0FBQyxPQUFPLENBQUMsRUFBRVMsSUFBSSxDQUFDZSxHQUFHLENBQUNDLEVBQUUsQ0FBQyxFQUNqRDtnQkFDRVQsSUFBSSxFQUFFO29CQUNKQyxrQkFBa0IsRUFBRUMsY0FBYyxDQUFDTyxFQUFFO2lCQUN0QzthQUNGLENBQ0YsQ0FDRjtZQUVEVixVQUFVLEdBQUdHLGNBQWMsQ0FBQ08sRUFBRTtTQUMvQjtRQUVELE1BQU1DLHFCQUFxQixHQUFHLE1BQU12Qiw2RUFBK0IsQ0FBQztZQUNsRTBCLFFBQVEsRUFBRWQsVUFBVTtZQUNwQmUsb0JBQW9CLEVBQUU7Z0JBQUMsTUFBTTthQUFDO1lBQzlCQywwQkFBMEIsRUFBRSxVQUFVO1lBQ3RDQyxVQUFVLEVBQUU7Z0JBQ1Y7b0JBQUVDLEtBQUssRUFBRSxnQ0FBZ0M7b0JBQUVDLFFBQVEsRUFBRSxDQUFDO2lCQUFFO2FBQ3pEO1lBQ0RDLElBQUksRUFBRSxjQUFjO1lBQ3BCQyxxQkFBcUIsRUFBRSxJQUFJO1lBQzNCQyxXQUFXLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxrQkFBa0I7WUFDM0NDLFVBQVUsRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNHLGlCQUFpQjtTQUMxQyxDQUFDO1FBRUYsT0FBT3JDLFFBQVEsQ0FBQ3NDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLFNBQVMsRUFBRW5CLHFCQUFxQixDQUFDRCxFQUFFO1NBQUUsQ0FBQztLQUM1RSxNQUFNO1FBQ0hwQixRQUFRLENBQUN5QyxTQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztRQUNuQ3pDLFFBQVEsQ0FBQ3NDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0ksR0FBRyxDQUFDLHFCQUFxQixDQUFDO0tBQ2xEO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvYXBpL3N1YnNjcmliZS50cz8wNThhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHF1ZXJ5IH0gZnJvbSBcImZhdW5hZGJcIjtcclxuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7Z2V0U2Vzc2lvbn0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0J1xyXG5pbXBvcnQgeyBmYXVuYSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9mYXVuYVwiO1xyXG5pbXBvcnQgeyBzdHJpcGUgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc3RyaXBlXCI7XHJcblxyXG50eXBlIFVzZXIgPSB7XHJcbiAgICByZWY6IHtcclxuICAgICAgaWQ6IHN0cmluZ1xyXG4gICAgfSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgc3RyaXBlX2N1c3RvbWVyX2lkOiBzdHJpbmdcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcXVlc3Q6IE5leHRBcGlSZXF1ZXN0LCByZXNwb25zZTpOZXh0QXBpUmVzcG9uc2UpPT4ge1xyXG4gICAgaWYocmVxdWVzdC5tZXRob2QgPT09ICdQT1NUJyl7IFxyXG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxOiByZXF1ZXN0IH0pO1xyXG5cclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgZmF1bmEucXVlcnk8VXNlcj4oXHJcbiAgICAgICAgICBxdWVyeS5HZXQoXHJcbiAgICAgICAgICAgIHF1ZXJ5Lk1hdGNoKFxyXG4gICAgICAgICAgICAgIHF1ZXJ5LkluZGV4KCd1c2VyX2J5X2VtYWlsJyksXHJcbiAgICAgICAgICAgICAgcXVlcnkuQ2FzZWZvbGQoc2Vzc2lvbi51c2VyLmVtYWlsKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKVxyXG4gICAgXHJcbiAgICAgICAgbGV0IGN1c3RvbWVySWQgPSB1c2VyLmRhdGEuc3RyaXBlX2N1c3RvbWVyX2lkXHJcbiAgICBcclxuICAgICAgICBpZiAoIWN1c3RvbWVySWQpIHtcclxuICAgICAgICAgIGNvbnN0IHN0cmlwZUN1c3RvbWVyID0gYXdhaXQgc3RyaXBlLmN1c3RvbWVycy5jcmVhdGUoe1xyXG4gICAgICAgICAgICBlbWFpbDogc2Vzc2lvbi51c2VyLmVtYWlsLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgXHJcbiAgICAgICAgICBhd2FpdCBmYXVuYS5xdWVyeShcclxuICAgICAgICAgICAgcXVlcnkuVXBkYXRlKFxyXG4gICAgICAgICAgICAgIHF1ZXJ5LlJlZihxdWVyeS5Db2xsZWN0aW9uKCd1c2VycycpLCB1c2VyLnJlZi5pZCksXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICBzdHJpcGVfY3VzdG9tZXJfaWQ6IHN0cmlwZUN1c3RvbWVyLmlkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICApXHJcbiAgICBcclxuICAgICAgICAgIGN1c3RvbWVySWQgPSBzdHJpcGVDdXN0b21lci5pZFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBzdHJpcGVDaGVja291dFNlc3Npb24gPSBhd2FpdCBzdHJpcGUuY2hlY2tvdXQuc2Vzc2lvbnMuY3JlYXRlKHtcclxuICAgICAgICAgIGN1c3RvbWVyOiBjdXN0b21lcklkLFxyXG4gICAgICAgICAgcGF5bWVudF9tZXRob2RfdHlwZXM6IFsnY2FyZCddLFxyXG4gICAgICAgICAgYmlsbGluZ19hZGRyZXNzX2NvbGxlY3Rpb246ICdyZXF1aXJlZCcsXHJcbiAgICAgICAgICBsaW5lX2l0ZW1zOiBbXHJcbiAgICAgICAgICAgIHsgcHJpY2U6ICdwcmljZV8xS25oWm1CdWsxU3g0WFVmWWVyZm13a3QnLCBxdWFudGl0eTogMSB9XHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgbW9kZTogJ3N1YnNjcmlwdGlvbicsXHJcbiAgICAgICAgICBhbGxvd19wcm9tb3Rpb25fY29kZXM6IHRydWUsXHJcbiAgICAgICAgICBzdWNjZXNzX3VybDogcHJvY2Vzcy5lbnYuU1RSSVBFX1NVQ0NFU1NfVVJMLFxyXG4gICAgICAgICAgY2FuY2VsX3VybDogcHJvY2Vzcy5lbnYuU1RSSVBFX0NBTkNFTF9VUkxcclxuICAgICAgICB9KVxyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cygyMDApLmpzb24oeyBzZXNzaW9uSWQ6IHN0cmlwZUNoZWNrb3V0U2Vzc2lvbi5pZCB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXNwb25zZS5zZXRIZWFkZXIoJ0FsbG93JywgJ1BPU1QnKVxyXG4gICAgICAgIHJlc3BvbnNlLnN0YXR1cyg0MDUpLmVuZCgnTWV0aG9kIG5vdCBhbGxvd2VkIScpXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsicXVlcnkiLCJnZXRTZXNzaW9uIiwiZmF1bmEiLCJzdHJpcGUiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJtZXRob2QiLCJzZXNzaW9uIiwicmVxIiwidXNlciIsIkdldCIsIk1hdGNoIiwiSW5kZXgiLCJDYXNlZm9sZCIsImVtYWlsIiwiY3VzdG9tZXJJZCIsImRhdGEiLCJzdHJpcGVfY3VzdG9tZXJfaWQiLCJzdHJpcGVDdXN0b21lciIsImN1c3RvbWVycyIsImNyZWF0ZSIsIlVwZGF0ZSIsIlJlZiIsIkNvbGxlY3Rpb24iLCJyZWYiLCJpZCIsInN0cmlwZUNoZWNrb3V0U2Vzc2lvbiIsImNoZWNrb3V0Iiwic2Vzc2lvbnMiLCJjdXN0b21lciIsInBheW1lbnRfbWV0aG9kX3R5cGVzIiwiYmlsbGluZ19hZGRyZXNzX2NvbGxlY3Rpb24iLCJsaW5lX2l0ZW1zIiwicHJpY2UiLCJxdWFudGl0eSIsIm1vZGUiLCJhbGxvd19wcm9tb3Rpb25fY29kZXMiLCJzdWNjZXNzX3VybCIsInByb2Nlc3MiLCJlbnYiLCJTVFJJUEVfU1VDQ0VTU19VUkwiLCJjYW5jZWxfdXJsIiwiU1RSSVBFX0NBTkNFTF9VUkwiLCJzdGF0dXMiLCJqc29uIiwic2Vzc2lvbklkIiwic2V0SGVhZGVyIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/subscribe.ts\n");

/***/ }),

/***/ "(api)/./src/services/fauna.ts":
/*!*******************************!*\
  !*** ./src/services/fauna.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fauna\": () => (/* binding */ fauna)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst fauna = new faunadb__WEBPACK_IMPORTED_MODULE_0__.Client({\n    secret: process.env.FAUNADB_KEY\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmljZXMvZmF1bmEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRXpCLE1BQU1DLEtBQUssR0FBRyxJQUFJRCwyQ0FBTSxDQUFDO0lBQzVCRSxNQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxXQUFXO0NBQ2xDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvZmF1bmEudHM/MzIzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnQgfSBmcm9tICdmYXVuYWRiJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGZhdW5hID0gbmV3IENsaWVudCh7XHJcbiAgICBzZWNyZXQ6IHByb2Nlc3MuZW52LkZBVU5BREJfS0VZXHJcbn0pIl0sIm5hbWVzIjpbIkNsaWVudCIsImZhdW5hIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIkZBVU5BREJfS0VZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/services/fauna.ts\n");

/***/ }),

/***/ "(api)/./src/services/stripe.ts":
/*!********************************!*\
  !*** ./src/services/stripe.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stripe\": () => (/* binding */ stripe)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_API_KEY, {\n    apiVersion: \"2020-08-27\",\n    appInfo: {\n        name: \"Ignews\",\n        version: \"0.1.0\"\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmljZXMvc3RyaXBlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0QjtBQUVyQixNQUFNQyxNQUFNLEdBQUcsSUFBSUQsK0NBQU0sQ0FDNUJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxjQUFjLEVBQzFCO0lBQ0lDLFVBQVUsRUFBRSxZQUFZO0lBQ3hCQyxPQUFPLEVBQUU7UUFDTEMsSUFBSSxFQUFFLFFBQVE7UUFDZEMsT0FBTyxFQUFFLE9BQU87S0FDbkI7Q0FDSixDQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvc3RyaXBlLnRzP2FiOTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0cmlwZSBmcm9tICdzdHJpcGUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0cmlwZSA9IG5ldyBTdHJpcGUoXHJcbiAgICBwcm9jZXNzLmVudi5TVFJJUEVfQVBJX0tFWSxcclxuICAgIHtcclxuICAgICAgICBhcGlWZXJzaW9uOiAnMjAyMC0wOC0yNycsXHJcbiAgICAgICAgYXBwSW5mbzoge1xyXG4gICAgICAgICAgICBuYW1lOiAnSWduZXdzJyxcclxuICAgICAgICAgICAgdmVyc2lvbjogJzAuMS4wJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuKTsiXSwibmFtZXMiOlsiU3RyaXBlIiwic3RyaXBlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9BUElfS0VZIiwiYXBpVmVyc2lvbiIsImFwcEluZm8iLCJuYW1lIiwidmVyc2lvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/services/stripe.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/subscribe.ts"));
module.exports = __webpack_exports__;

})();