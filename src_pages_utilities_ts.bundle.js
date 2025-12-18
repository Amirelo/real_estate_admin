"use strict";
(self["webpackChunkadmin"] = self["webpackChunkadmin"] || []).push([["src_pages_utilities_ts"],{

/***/ "./src/model/UtilitiesModel.ts":
/*!*************************************!*\
  !*** ./src/model/UtilitiesModel.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UtilitiesModel)
/* harmony export */ });
class UtilitiesModel {
    constructor() {
        this.id = 0;
        this.name = null;
        this.description = null;
        this.photo = null;
    }
}


/***/ }),

/***/ "./src/pages/utilities.ts":
/*!********************************!*\
  !*** ./src/pages/utilities.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ utilitiesPage)
/* harmony export */ });
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/APIConstants */ "./src/constants/APIConstants.ts");
/* harmony import */ var _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/webConstants */ "./src/constants/webConstants.ts");
/* harmony import */ var _utilities_Interaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/Interaction */ "./src/utilities/Interaction.ts");
/* harmony import */ var _model_UtilitiesModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/UtilitiesModel */ "./src/model/UtilitiesModel.ts");
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../language */ "./src/language/index.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! .. */ "./src/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







/**
 * Utilities Management Page
 *
 * This module handles the administrative interface for managing utility data
 * such as amenities and services associated with real estate properties.
 *
 * Features:
 * - CRUD operations for utility records
 * - Photo/image management with upload and preview
 * - Tabbed form interface for organized data entry
 * - Data validation and form management
 * - Table display with pagination and search
 */
// REGION 1: Global variables and configuration
/** Primary API endpoint for utilities operations */
var gApiMainPath = _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_UTILITIES;
/**
 * Main page interaction controller with configuration for utilities management
 * Sets up the complete interface including model binding, API endpoints, and view paths
 */
var gPageInteraction = new _utilities_Interaction__WEBPACK_IMPORTED_MODULE_3__["default"]()
    .setModel(_model_UtilitiesModel__WEBPACK_IMPORTED_MODULE_4__["default"])
    .setPath(gApiMainPath)
    .setViewPath(_constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_UTILITY);
// REGION 2: Element events
// (No direct element events - handled through PageInteraction framework)
// REGION 3: Event handlers
/**
 * Initialize and configure the utilities management page
 *
 * Sets up the complete page functionality including:
 * - Table structure with utility name column
 * - Form validation for required fields
 * - Photo upload functionality
 * - Tabbed interface for better UX organization
 * - API integration and event binding
 */
function onLoad() {
    return __awaiter(this, void 0, void 0, function* () {
        yield gPageInteraction
            // Configure table to display utility name
            .setTableHeaders('name', 'photo')
            // Set validation rule - name is mandatory
            .setRequiredFields("name")
            // Configure photo upload field for utility images
            .setPhotoFields("photo")
            // Create tabbed interface for organized data entry
            .createTab(_language__WEBPACK_IMPORTED_MODULE_5__["default"][(0,___WEBPACK_IMPORTED_MODULE_6__.getLanguage)()].tab_data, "name", "description") // Basic information tab
            .createTab(_language__WEBPACK_IMPORTED_MODULE_5__["default"][(0,___WEBPACK_IMPORTED_MODULE_6__.getLanguage)()].tab_photo, "photo") // Image upload tab
            // Initialize the page with all configurations
            .connectButton();
    });
}
// REGION 4: Common functions
/**
 * Main utilities page initialization function
 *
 * Loads the HTML template and initializes the utilities management interface.
 * This is the entry point called by the routing system.
 *
 * @returns Promise that resolves when page is fully loaded and configured
 */
function utilitiesPage() {
    return __awaiter(this, void 0, void 0, function* () {
        // Load the standard entity management template
        const vHtml = yield fetch(_constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.FOLDER_TEMPLATE + _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.TEMPLATE_VIEW_ENTITY)
            .then(res => res.text());
        // Inject template into main container
        $("#main-container").html(vHtml);
        // Initialize page functionality
        yield onLoad();
    });
}


/***/ })

}]);
//# sourceMappingURL=src_pages_utilities_ts.bundle.js.map