"use strict";
(self["webpackChunkadmin"] = self["webpackChunkadmin"] || []).push([["src_pages_province_ts"],{

/***/ "./src/model/ProvinceModel.ts":
/*!************************************!*\
  !*** ./src/model/ProvinceModel.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProvinceModel)
/* harmony export */ });
class ProvinceModel {
    constructor() {
        this.id = 0;
        this.name = '';
        this.code = '';
        this.propertiesNum = 0;
        this.projectNum = 0;
        this.totalPropertiesView = 0;
    }
}


/***/ }),

/***/ "./src/pages/province.ts":
/*!*******************************!*\
  !*** ./src/pages/province.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ provincePage)
/* harmony export */ });
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/APIConstants */ "./src/constants/APIConstants.ts");
/* harmony import */ var _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/webConstants */ "./src/constants/webConstants.ts");
/* harmony import */ var _utilities_Interaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/Interaction */ "./src/utilities/Interaction.ts");
/* harmony import */ var _model_ProvinceModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/ProvinceModel */ "./src/model/ProvinceModel.ts");
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
 * Province Management Page
 *
 * This module handles the administrative interface for managing province data
 * in the Vietnamese administrative hierarchy. Provinces are the top-level
 * administrative divisions that contain districts, wards, and streets.
 *
 * Features:
 * - CRUD operations for province records
 * - Interactive navigation links to related projects and properties
 * - Data summary with counts of related entities
 * - Table display with province codes and names
 * - Form validation for required province data
 */
// REGION 1: Global variables and configuration
/** Primary API endpoint for province operations */
var gApiMainPath = _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_PROVINCE;
/**
 * Main page interaction controller configured for province management
 * Sets up the complete interface including model binding and API endpoints
 */
var gPageInteraction = new _utilities_Interaction__WEBPACK_IMPORTED_MODULE_3__["default"]()
    .setModel(_model_ProvinceModel__WEBPACK_IMPORTED_MODULE_4__["default"])
    .setPath(gApiMainPath);
/**
 * Data transformation configuration for interactive navigation links
 * Converts numeric counts into clickable links that navigate to related data views
 */
var gDataTransform = [
    {
        name: 'projectNum',
        pathName: _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_PROJECT,
        to: 'link',
        fields: 'Project detail',
        fieldName: 'province_id',
    },
    {
        name: 'propertiesNum',
        pathName: _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_REAL_ESTATE,
        to: 'link',
        fields: 'Real Estate Detail',
        fieldName: 'province_id'
    }
];
// REGION 2: Element events
// (No direct element events - handled through PageInteraction framework)
// REGION 3: Event handlers
/**
 * Initialize and configure the province management page
 *
 * Sets up the complete page functionality including:
 * - Table structure with project and property count links
 * - Data transformation for interactive navigation
 * - Form configuration excluding calculated fields
 * - Form validation for required province data
 * - API integration and event binding
 */
function onLoad() {
    return __awaiter(this, void 0, void 0, function* () {
        yield gPageInteraction
            // Configure table columns with interactive count links and basic province data
            .setTableHeaders('projectNum', 'propertiesNum', 'name', 'code')
            // Apply transformations to convert counts into navigation links
            .setTableDataTransform(...gDataTransform)
            // Exclude calculated/summary fields from form generation
            .setIgnoreFields('propertiesNum', 'projectNum', 'totalPropertiesView')
            // Set validation rules - name and code are mandatory
            .setRequiredFields('name', 'code')
            // Initialize the page with all configurations
            .connectButton();
    });
}
// REGION 4: Common functions
/**
 * Main province page initialization function
 *
 * Loads the HTML template and initializes the province management interface.
 * This is the entry point called by the routing system.
 *
 * @returns Promise that resolves when page is fully loaded and configured
 */
function provincePage() {
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
//# sourceMappingURL=src_pages_province_ts.bundle.js.map