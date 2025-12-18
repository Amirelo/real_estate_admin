"use strict";
(self["webpackChunkadmin"] = self["webpackChunkadmin"] || []).push([["src_pages_project_ts"],{

/***/ "./src/model/ProjectModel.ts":
/*!***********************************!*\
  !*** ./src/model/ProjectModel.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectModel)
/* harmony export */ });
class ProjectModel {
    constructor() {
        this.id = -1;
        this.name = '';
        this.address = '';
        this.slogan = '';
        this.description = '';
        this.acreage = null;
        this.constructArea = null;
        this.numBlock = null;
        this.numFloors = '';
        this.numApartment = null;
        this.apartmentArea = '';
        this.investor = null;
        this.constructionContractor = null;
        this.designUnit = null;
        this.utilities = '';
        this.regionLink = '';
        this.photo = '';
        this.latitude = null;
        this.longtitude = null;
        this.masterLayouts = null;
        this.realEstates = null;
        this.province = null;
        this.district = null;
        this.ward = null;
        this.street = null;
    }
}


/***/ }),

/***/ "./src/pages/project.ts":
/*!******************************!*\
  !*** ./src/pages/project.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projectPage)
/* harmony export */ });
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/APIConstants */ "./src/constants/APIConstants.ts");
/* harmony import */ var _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/webConstants */ "./src/constants/webConstants.ts");
/* harmony import */ var _utilities_Interaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/Interaction */ "./src/utilities/Interaction.ts");
/* harmony import */ var _model_ProjectModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/ProjectModel */ "./src/model/ProjectModel.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../language */ "./src/language/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







//#region 1: Global variables and configuration
/** Primary API endpoint for project operations */
var gApiMainPath = _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_PROJECT;
/**
 * Main page interaction controller configured for project management
 * Sets up the complete interface including model binding, API endpoints,
 * and view paths for project data
 */
var gPageInteraction = new _utilities_Interaction__WEBPACK_IMPORTED_MODULE_3__["default"]()
    .setModel(_model_ProjectModel__WEBPACK_IMPORTED_MODULE_4__["default"])
    .setPath(gApiMainPath)
    .setViewPath(_constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_PROJECT);
/**
 * Data transformation configuration for enhanced table display
 * Defines how related location objects should be formatted in the table view
 */
var gDataTransform = [
    {
        name: 'province',
        fields: 'name, code', // Display province name and code
        separator: ', '
    },
    {
        name: 'district',
        fields: 'prefix, name', // Display district prefix and name
        separator: ' '
    }
];
/**
 * Fields to be sent as URL parameters for proper API routing
 * These fields represent relationships that need special handling in API requests
 */
var gDataToHeaders = ['investor',
    'province', 'district', 'ward', 'designUnit', 'constructionContractor'];
/**
 * Fields to exclude from automatic form generation
 * These are typically calculated fields or complex relationships handled separately
 */
var gIgnoreFields = ['realEstates', 'masterLayouts'];
//#endregion
// REGION 2: Element events
// (No direct element events - handled through PageInteraction framework)
//#region 3: Event handlers
/**
 * Project Management Page
 *
 * This module handles the comprehensive administrative interface for managing
 * real estate development projects. Projects are complex entities that involve
 * multiple stakeholders, location data, utilities, and associated real estate
 * properties.
 *
 * Features:
 * - Complete CRUD operations for project records
 * - Multi-stakeholder management (investors, contractors, design units)
 * - Location hierarchy integration (province > district > ward)
 * - Utilities and region link associations
 * - Photo management for project imagery
 * - Tabbed form interface for organized data entry
 * - Multi-select support for utilities and region links
 */
/**
 * Initialize and configure the project management page
 *
 * Sets up the comprehensive page functionality including:
 * - Table structure with key project information and location data
 * - Complex multi-select dropdown configurations
 * - Cascading location dropdowns (province > district > ward)
 * - Stakeholder relationship management
 * - Tabbed interface for organized data entry
 * - Photo upload functionality
 * - API integration and event binding
 */
function onLoad() {
    return __awaiter(this, void 0, void 0, function* () {
        yield gPageInteraction
            // Configure table columns to display essential project information
            .setTableHeaders('name', 'province', 'district', 'latitude', 'longtitude')
            // Set validation rules - project name is mandatory
            .setRequiredFields('name')
            // Apply data transformations for better display of location objects
            .setTableDataTransform(...gDataTransform)
            // Configure fields to be sent as URL parameters for proper API routing
            .setDataToHeader(...gDataToHeaders)
            // Exclude complex relationship fields from form generation
            .setIgnoreFields(...gIgnoreFields)
            // Configure stakeholder dropdown selections
            .addSelectFields('designUnit', null, _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_DESIGN_UNIT, null, false)
            .addSelectFields('constructionContractor', null, _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_CONSTRUCTION_CONTRACTOR, null, false)
            // Configure multi-select dropdowns for utilities and region links
            .addSelectFields('utilities', null, _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_UTILITIES, null, false, null, null, true)
            .addSelectFields('regionLink', null, _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_REGION_LINK, null, false, null, null, true)
            // Configure investor selection
            .addSelectFields('investor', null, _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_INVESTOR, null, true)
            // Configure cascading location dropdowns
            .addSelectFields('province', null, _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_PROVINCE, null, true)
            .addSelectFields('district', null, _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_DISTRICT, _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_PROVINCE, true, 'name', 'province')
            .addSelectFields('ward', null, _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_WARD, _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_DISTRICT, true, 'name', 'district')
            // Configure photo upload functionality
            .setPhotoFields("photo")
            // Configure multi-line text input for project descriptions
            .setTextareaFields("description")
            // Create tabbed interface for organized data entry
            .createTab(_language__WEBPACK_IMPORTED_MODULE_6__["default"][(0,___WEBPACK_IMPORTED_MODULE_5__.getLanguage)()].tab_data, 'name', 'address', 'slogan', 'description', 'acreage') // Basic project info
            .createTab(_language__WEBPACK_IMPORTED_MODULE_6__["default"][(0,___WEBPACK_IMPORTED_MODULE_5__.getLanguage)()].tab_data_2, 'designUnit', 'constructionContractor', // Stakeholders and location
        'utilities', 'regionLink', 'investor', 'province', 'district', 'ward')
            .createTab(_language__WEBPACK_IMPORTED_MODULE_6__["default"][(0,___WEBPACK_IMPORTED_MODULE_5__.getLanguage)()].tab_photo, 'photo') // Image management
            .createTab(_language__WEBPACK_IMPORTED_MODULE_6__["default"][(0,___WEBPACK_IMPORTED_MODULE_5__.getLanguage)()].tab_optional) // Additional fields (auto-populated)
            // Initialize the page with all configurations
            .connectButton();
        // Additional page interaction instance (appears unused - potential cleanup candidate)
        gPageInteraction;
    });
}
//#endregion
// REGION 4: Common functions
/**
 * Main project page initialization function
 *
 * Loads the HTML template and initializes the project management interface.
 * This is the entry point called by the routing system.
 *
 * @returns Promise that resolves when page is fully loaded and configured
 */
function projectPage() {
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
//# sourceMappingURL=src_pages_project_ts.bundle.js.map