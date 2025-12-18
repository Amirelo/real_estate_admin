"use strict";
(self["webpackChunkadmin"] = self["webpackChunkadmin"] || []).push([["src_pages_district_ts"],{

/***/ "./src/model/DistrictModel.ts":
/*!************************************!*\
  !*** ./src/model/DistrictModel.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DistrictModel)
/* harmony export */ });
class DistrictModel {
    constructor() {
        this.id = 0;
        this.name = '';
        this.prefix = '';
        this.province = null;
        this.propertiesNum = 0;
        this.projectNum = 0;
        this.totalPropertiesView = 0;
    }
}


/***/ }),

/***/ "./src/pages/district.ts":
/*!*******************************!*\
  !*** ./src/pages/district.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ districtPage)
/* harmony export */ });
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/APIConstants */ "./src/constants/APIConstants.ts");
/* harmony import */ var _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/webConstants */ "./src/constants/webConstants.ts");
/* harmony import */ var _utilities_Interaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/Interaction */ "./src/utilities/Interaction.ts");
/* harmony import */ var _model_DistrictModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/DistrictModel */ "./src/model/DistrictModel.ts");
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
 * District Management Page
 *
 * This module handles the administrative interface for managing district data
 * within the Vietnamese administrative hierarchy (Province > District > Ward > Street).
 * Districts are the second-level administrative divisions that contain wards and streets.
 *
 * Features:
 * - CRUD operations for district records
 * - Province association through dropdown selection
 * - Interactive navigation links to related projects and properties
 * - Data summary with counts of related entities
 * - Table display with province relationship information
 * - Form validation for required district data
 */
// REGION 1: Global variables and configuration
/** Primary API endpoint for district operations */
var gApiMainPath = _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_DISTRICT;
/** Parent API endpoint for province data (for province association) */
var gApiParentPath = _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_PROVINCE;
/**
 * Main page interaction controller configured for district management
 * Sets up the complete interface including model binding, API endpoints,
 * parent-child relationship with provinces, and view paths
 */
var gPageInteraction = new _utilities_Interaction__WEBPACK_IMPORTED_MODULE_3__["default"]()
    .setModel(_model_DistrictModel__WEBPACK_IMPORTED_MODULE_4__["default"])
    .setPath(gApiMainPath)
    .setParentPath(gApiParentPath, null)
    .setViewPath(_constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_DISTRICT);
/**
 * Data transformation configuration for enhanced table display
 * Combines province display formatting with interactive navigation links
 * for related projects and properties
 */
var gTableTransform = [{
        name: 'province',
        fields: 'name, code', // Display province name and code
        separator: ', '
    },
    {
        name: 'projectNum',
        pathName: _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_PROJECT,
        to: 'link', // Convert count to clickable link
        fields: 'Project detail',
        fieldName: 'district_id', // Parameter for filtering projects by district
    },
    {
        name: 'propertiesNum',
        pathName: _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_REAL_ESTATE,
        to: 'link', // Convert count to clickable link
        fields: 'Real Estate Detail',
        fieldName: 'district_id' // Parameter for filtering properties by district
    }];
// REGION 2: Element events
// (No direct element events - handled through PageInteraction framework)
// REGION 3: Event handlers
/**
 * Initialize and configure the district management page
 *
 * Sets up the complete page functionality including:
 * - Table structure with project/property count links and province information
 * - Data transformation for interactive navigation and province display
 * - Form validation for required district fields
 * - Province dropdown for district association
 * - API integration and event binding
 */
function onLoad() {
    return __awaiter(this, void 0, void 0, function* () {
        yield gPageInteraction
            // Configure table columns with interactive count links and basic district data
            .setTableHeaders('projectNum', 'propertiesNum', 'name', 'prefix', 'province')
            .setIgnoreFields('propertiesNum', 'projectNum', 'totalPropertiesView')
            // Apply transformations for province display and navigation links
            .setTableDataTransform(...gTableTransform)
            // Set validation rules - name and prefix are mandatory
            .setRequiredFields('name', 'prefix')
            // Configure province dropdown for district association
            .addSelectFields('province', null, _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_PROVINCE, null, true)
            // Initialize the page with all configurations
            .connectButton();
        // Legacy code - commented out field generation methods
        // These have been replaced by the modern PageInteraction configuration above
        // TODO: Remove commented code after confirming new implementation works correctly
        // .generateOptionalFields()
        // .generateSelectWithApi('province', PATH_API_PROVINCE, 'name', true);
    });
}
// REGION 4: Common functions
/**
 * Main district page initialization function
 *
 * Loads the HTML template and initializes the district management interface.
 * This is the entry point called by the routing system.
 *
 * @returns Promise that resolves when page is fully loaded and configured
 */
function districtPage() {
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
//# sourceMappingURL=src_pages_district_ts.bundle.js.map