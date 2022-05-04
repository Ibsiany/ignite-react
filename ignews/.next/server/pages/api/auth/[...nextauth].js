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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("faunadb");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_fauna__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/fauna */ \"(api)/./src/services/fauna.ts\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.GITHUB_CLIENT_ID,\n            clientSecret: process.env.GITHUB_CLIENT_SECRET,\n            authorization: {\n                params: {\n                    scope: \"read:user\"\n                }\n            }\n        }), \n    ],\n    callbacks: {\n        async signIn ({ user , account , profile  }) {\n            const { email  } = user;\n            try {\n                await _services_fauna__WEBPACK_IMPORTED_MODULE_3__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_1__.query.If(faunadb__WEBPACK_IMPORTED_MODULE_1__.query.Not(faunadb__WEBPACK_IMPORTED_MODULE_1__.query.Exists(faunadb__WEBPACK_IMPORTED_MODULE_1__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_1__.query.Index(\"user_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_1__.query.Casefold(user.email)))), faunadb__WEBPACK_IMPORTED_MODULE_1__.query.Create(faunadb__WEBPACK_IMPORTED_MODULE_1__.query.Collection(\"users\"), {\n                    data: {\n                        email\n                    }\n                }), faunadb__WEBPACK_IMPORTED_MODULE_1__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_1__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_1__.query.Index(\"user_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_1__.query.Casefold(user.email)))));\n                return true;\n            } catch  {\n                return false;\n            }\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFpQztBQUNGO0FBQ3lCO0FBQ1I7QUFFaEQsaUVBQWVBLGdEQUFRLENBQUM7SUFDdEJJLFNBQVMsRUFBRTtRQUNURixpRUFBYyxDQUFDO1lBQ2JHLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGdCQUFnQjtZQUN0Q0MsWUFBWSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csb0JBQW9CO1lBQzlDQyxhQUFhLEVBQUc7Z0JBQUVDLE1BQU0sRUFBRTtvQkFBRUMsS0FBSyxFQUFFLFdBQVc7aUJBQUU7YUFBRTtTQUNuRCxDQUFDO0tBQ0g7SUFDREMsU0FBUyxFQUFHO1FBQ1YsTUFBTUMsTUFBTSxFQUFDLEVBQUVDLElBQUksR0FBRUMsT0FBTyxHQUFFQyxPQUFPLEdBQUUsRUFBRTtZQUN2QyxNQUFNLEVBQUVDLEtBQUssR0FBRSxHQUFHSCxJQUFJO1lBRXRCLElBQUk7Z0JBQ0YsTUFBTWIsd0RBQVcsQ0FDZkYsNkNBQVEsQ0FDTkEsOENBQVMsQ0FDUEEsaURBQVksQ0FDVkEsZ0RBQVcsQ0FDVEEsZ0RBQVcsQ0FBQyxlQUFlLENBQUMsRUFDNUJBLG1EQUFjLENBQUNlLElBQUksQ0FBQ0csS0FBSyxDQUFDLENBQzNCLENBQ0YsQ0FDRixFQUNEbEIsaURBQVksQ0FDVkEscURBQWdCLENBQUMsT0FBTyxDQUFDLEVBQ3pCO29CQUFFMkIsSUFBSSxFQUFFO3dCQUFFVCxLQUFLO3FCQUFFO2lCQUFDLENBQ25CLEVBQ0RsQiw4Q0FBUyxDQUNQQSxnREFBVyxDQUNUQSxnREFBVyxDQUFDLGVBQWUsQ0FBQyxFQUM1QkEsbURBQWMsQ0FBQ2UsSUFBSSxDQUFDRyxLQUFLLENBQUMsQ0FDM0IsQ0FDRixDQUNGLENBQ0Y7Z0JBRUQsT0FBTyxJQUFJO2FBQ1osQ0FBQyxPQUFNO2dCQUNOLE9BQU8sS0FBSzthQUNiO1NBQ0Y7S0FDRjtDQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz81MGExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XHJcbmltcG9ydCB7IHF1ZXJ5IH0gZnJvbSAnZmF1bmFkYidcclxuaW1wb3J0IEdpdGh1YlByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dpdGh1YlwiO1xyXG5pbXBvcnQgeyBmYXVuYSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2ZhdW5hJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEdpdGh1YlByb3ZpZGVyKHtcclxuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfSUQsXHJcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX0NMSUVOVF9TRUNSRVQsXHJcbiAgICAgIGF1dGhvcml6YXRpb246ICB7IHBhcmFtczogeyBzY29wZTogJ3JlYWQ6dXNlcicgfSB9LFxyXG4gICAgfSksXHJcbiAgXSxcclxuICBjYWxsYmFja3MgOiB7XHJcbiAgICBhc3luYyBzaWduSW4oeyB1c2VyLCBhY2NvdW50LCBwcm9maWxlIH0pIHtcclxuICAgICAgY29uc3QgeyBlbWFpbCB9ID0gdXNlclxyXG4gICAgICBcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBmYXVuYS5xdWVyeShcclxuICAgICAgICAgIHF1ZXJ5LklmKFxyXG4gICAgICAgICAgICBxdWVyeS5Ob3QoXHJcbiAgICAgICAgICAgICAgcXVlcnkuRXhpc3RzKFxyXG4gICAgICAgICAgICAgICAgcXVlcnkuTWF0Y2goXHJcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LkluZGV4KCd1c2VyX2J5X2VtYWlsJyksXHJcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LkNhc2Vmb2xkKHVzZXIuZW1haWwpXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBxdWVyeS5DcmVhdGUoXHJcbiAgICAgICAgICAgICAgcXVlcnkuQ29sbGVjdGlvbigndXNlcnMnKSxcclxuICAgICAgICAgICAgICB7IGRhdGE6IHsgZW1haWwgfX1cclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgcXVlcnkuR2V0KFxyXG4gICAgICAgICAgICAgIHF1ZXJ5Lk1hdGNoKFxyXG4gICAgICAgICAgICAgICAgcXVlcnkuSW5kZXgoJ3VzZXJfYnlfZW1haWwnKSxcclxuICAgICAgICAgICAgICAgIHF1ZXJ5LkNhc2Vmb2xkKHVzZXIuZW1haWwpXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICB9IGNhdGNoIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSkiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJxdWVyeSIsIkdpdGh1YlByb3ZpZGVyIiwiZmF1bmEiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHSVRIVUJfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR0lUSFVCX0NMSUVOVF9TRUNSRVQiLCJhdXRob3JpemF0aW9uIiwicGFyYW1zIiwic2NvcGUiLCJjYWxsYmFja3MiLCJzaWduSW4iLCJ1c2VyIiwiYWNjb3VudCIsInByb2ZpbGUiLCJlbWFpbCIsIklmIiwiTm90IiwiRXhpc3RzIiwiTWF0Y2giLCJJbmRleCIsIkNhc2Vmb2xkIiwiQ3JlYXRlIiwiQ29sbGVjdGlvbiIsImRhdGEiLCJHZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "(api)/./src/services/fauna.ts":
/*!*******************************!*\
  !*** ./src/services/fauna.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fauna\": () => (/* binding */ fauna)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst fauna = new faunadb__WEBPACK_IMPORTED_MODULE_0__.Client({\n    secret: process.env.FAUNADB_KEY\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmljZXMvZmF1bmEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRXpCLE1BQU1DLEtBQUssR0FBRyxJQUFJRCwyQ0FBTSxDQUFDO0lBQzVCRSxNQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxXQUFXO0NBQ2xDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvZmF1bmEudHM/MzIzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnQgfSBmcm9tICdmYXVuYWRiJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGZhdW5hID0gbmV3IENsaWVudCh7XHJcbiAgICBzZWNyZXQ6IHByb2Nlc3MuZW52LkZBVU5BREJfS0VZXHJcbn0pIl0sIm5hbWVzIjpbIkNsaWVudCIsImZhdW5hIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIkZBVU5BREJfS0VZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/services/fauna.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();