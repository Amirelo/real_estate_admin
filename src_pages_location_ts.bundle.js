"use strict";
(self["webpackChunkadmin"] = self["webpackChunkadmin"] || []).push([["src_pages_location_ts"],{

/***/ "./src/pages/location.ts":
/*!*******************************!*\
  !*** ./src/pages/location.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ locationPage)
/* harmony export */ });
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _constants_webConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/webConstants */ "./src/constants/webConstants.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


// REGION 1: Global variables
//  const gModalCreate = new Modal();
// REIGON 2: Element events
// REGION 3: Event handlers
// REGION 4: Common function
function onLoad() {
    return __awaiter(this, void 0, void 0, function* () {
        // checkToken();
        // handleSignInStatus();
    });
}
function locationPage() {
    return __awaiter(this, void 0, void 0, function* () {
        const vHtml = yield fetch(_constants_webConstants__WEBPACK_IMPORTED_MODULE_1__.FOLDER_TEMPLATE + _constants_webConstants__WEBPACK_IMPORTED_MODULE_1__.TEMPLATE_VIEW_ENTITY)
            .then(res => res.text());
        $("#main-container").html(vHtml);
        onLoad();
    });
}


/***/ })

}]);
//# sourceMappingURL=src_pages_location_ts.bundle.js.map