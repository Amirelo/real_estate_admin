"use strict";
(self["webpackChunkadmin"] = self["webpackChunkadmin"] || []).push([["src_pages_address_map_ts"],{

/***/ "./src/model/AddressMapModel.ts":
/*!**************************************!*\
  !*** ./src/model/AddressMapModel.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddressMapModel)
/* harmony export */ });
class AddressMapModel {
    constructor() {
        this.id = 0;
        this.address = "";
        this.latitude = 0;
        this.longtitude = 0;
    }
}


/***/ }),

/***/ "./src/pages/address_map.ts":
/*!**********************************!*\
  !*** ./src/pages/address_map.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddressMapPage)
/* harmony export */ });
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/APIConstants */ "./src/constants/APIConstants.ts");
/* harmony import */ var _utilities_Interaction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/Interaction */ "./src/utilities/Interaction.ts");
/* harmony import */ var _model_AddressMapModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/AddressMapModel */ "./src/model/AddressMapModel.ts");
/* harmony import */ var _constants_webConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/webConstants */ "./src/constants/webConstants.ts");
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
 * Address Map Management Page
 *
 * This module handles the administrative interface for managing address map data
 * in the real estate system. Address maps store geographic coordinates and
 * location information that can be used for mapping and location-based features.
 *
 * Features:
 * - CRUD operations for address map records
 * - Geographic coordinate management (latitude/longitude)
 * - Address information storage and validation
 * - Table display with location data
 * - Form validation for required geographic fields
 */
// REGION 1: Global variables and configuration
/** Primary API endpoint for address map operations */
var gApiMainPath = _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_ADDRESS_MAP;
/**
 * Main page interaction controller configured for address map management
 * Uses generic type parameter for type safety with AddressMapModel
 * Sets up the complete interface including model binding and API endpoints
 */
var gPageInteraction = new _utilities_Interaction__WEBPACK_IMPORTED_MODULE_2__["default"]()
    .setModel(_model_AddressMapModel__WEBPACK_IMPORTED_MODULE_3__["default"]) // Set the data model for type-safe operations
    .setPath(gApiMainPath); // Configure API path for address map operations
// REGION 2: Element events
// (No direct element events - handled through PageInteraction framework)
// REGION 3: Event handlers
/**
 * Initialize and configure the address map management page
 *
 * Sets up the complete page functionality including:
 * - Table structure with address and coordinate information
 * - Form validation for required geographic data
 * - API integration and event binding
 */
function onLoad() {
    return __awaiter(this, void 0, void 0, function* () {
        yield gPageInteraction
            // Configure table columns to display address and coordinate information
            .setTableHeaders('address', 'latitude', 'longtitude')
            // Set validation rules - all geographic fields are mandatory
            .setRequiredFields('address', 'latitude', 'longtitude')
            // Initialize the page with all configurations
            .connectButton();
    });
}
// REGION 4: Common functions
/**
 * Main address map page initialization function
 *
 * Loads the HTML template and initializes the address map management interface.
 * This is the entry point called by the routing system.
 *
 * @returns Promise that resolves when page is fully loaded and configured
 */
function AddressMapPage() {
    return __awaiter(this, void 0, void 0, function* () {
        // Load the standard entity management template
        let vHtml = yield fetch(_constants_webConstants__WEBPACK_IMPORTED_MODULE_4__.FOLDER_TEMPLATE + _constants_webConstants__WEBPACK_IMPORTED_MODULE_4__.TEMPLATE_VIEW_ENTITY)
            .then(res => res.text());
        // Inject template into main container
        $("#main-container").append(vHtml);
        // Initialize page functionality
        yield onLoad();
    });
}


/***/ })

}]);
//# sourceMappingURL=src_pages_address_map_ts.bundle.js.map