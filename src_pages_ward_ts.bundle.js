"use strict";
(self["webpackChunkadmin"] = self["webpackChunkadmin"] || []).push([["src_pages_ward_ts"],{

/***/ "./src/model/WardModel.ts":
/*!********************************!*\
  !*** ./src/model/WardModel.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WardModel)
/* harmony export */ });
class WardModel {
    constructor() {
        this.id = 0;
        this.name = '';
        this.prefix = '';
        this.province = null;
        this.district = null;
    }
}


/***/ }),

/***/ "./src/pages/ward.ts":
/*!***************************!*\
  !*** ./src/pages/ward.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ wardPage)
/* harmony export */ });
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/APIConstants */ "./src/constants/APIConstants.ts");
/* harmony import */ var _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/webConstants */ "./src/constants/webConstants.ts");
/* harmony import */ var _utilities_Interaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/Interaction */ "./src/utilities/Interaction.ts");
/* harmony import */ var _model_WardModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/WardModel */ "./src/model/WardModel.ts");
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
 * Ward Management Page
 *
 * This module handles the administrative interface for managing ward (commune) data
 * within the Vietnamese administrative hierarchy (Province > District > Ward).
 *
 * Features:
 * - CRUD operations for ward records
 * - Cascading dropdown selection (Province -> District -> Ward)
 * - Data validation and form management
 * - Table display with related province and district information
 * - Pagination and search functionality
 */
// REGION 1: Global variables and configuration
/** Primary API endpoint for ward operations */
var gApiMainPath = _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_WARD;
/** Parent API endpoint for district data (for cascading dropdowns) */
var gParentPath = _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_DISTRICT;
/**
 * Main page interaction controller with comprehensive configuration
 * Sets up the complete ward management interface including:
 * - Model binding for type safety
 * - API endpoint configuration
 * - Parent-child relationship for cascading selects
 * - View path for detail navigation
 */
var gPageInteraction = new _utilities_Interaction__WEBPACK_IMPORTED_MODULE_3__["default"]()
    .setModel(_model_WardModel__WEBPACK_IMPORTED_MODULE_4__["default"])
    .setPath(gApiMainPath)
    .setParentPath(gParentPath, null)
    .setViewPath(_constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_WARD);
// REGION 2: Element events
// (No direct element events - handled through PageInteraction framework)
// REGION 3: Event handlers
/**
 * Initialize and configure the ward management page
 *
 * Sets up the complete page functionality including:
 * - Table structure with appropriate columns
 * - Form validation rules
 * - Data transformation for better display
 * - Cascading dropdown relationships
 * - API integration and event binding
 */
function onLoad() {
    return __awaiter(this, void 0, void 0, function* () {
        yield gPageInteraction
            // Configure table columns to display ward information with related data
            .setTableHeaders('name', 'prefix', 'province', 'district')
            // Set validation rules - name and prefix are mandatory
            .setRequiredFields('name', 'prefix')
            // Configure data transformation for better display of related objects
            .setTableDataTransform({
            name: 'province', // Transform province object
            fields: 'name', // Display province name
            separator: ', ' // Separator for multiple values
        }, {
            name: 'district', // Transform district object
            fields: 'name', // Display district name
            separator: ', ' // Separator for multiple values
        })
            // Configure cascading dropdown fields
            .addSelectFields('province', null, _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_PROVINCE, null, true) // Root level dropdown
            .addSelectFields('district', null, _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_DISTRICT, _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_PROVINCE, true, null, 'province') // Dependent on province
            // Configure fields to be sent as URL parameters for proper API routing
            .setDataToHeader('province')
            // Initialize the page with all configurations
            .connectButton();
    });
}
// REGION 4: Common functions
/**
 * Main ward page initialization function
 *
 * Loads the HTML template and initializes the ward management interface.
 * This is the entry point called by the routing system.
 *
 * @returns Promise that resolves when page is fully loaded and configured
 */
function wardPage() {
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
//# sourceMappingURL=src_pages_ward_ts.bundle.js.map