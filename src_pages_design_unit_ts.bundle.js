"use strict";
(self["webpackChunkadmin"] = self["webpackChunkadmin"] || []).push([["src_pages_design_unit_ts"],{

/***/ "./src/model/DesignUnitModel.ts":
/*!**************************************!*\
  !*** ./src/model/DesignUnitModel.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DesignUnitModel)
/* harmony export */ });
class DesignUnitModel {
    constructor() {
        this.id = 0;
        this.name = '';
        this.description = '';
        this.projects = '';
        this.address = null;
        this.phone = '';
        this.phone2 = '';
        this.fax = '';
        this.email = '';
        this.website = '';
        this.note = '';
    }
}


/***/ }),

/***/ "./src/pages/design_unit.ts":
/*!**********************************!*\
  !*** ./src/pages/design_unit.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ designUnitPage)
/* harmony export */ });
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/APIConstants */ "./src/constants/APIConstants.ts");
/* harmony import */ var _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/webConstants */ "./src/constants/webConstants.ts");
/* harmony import */ var _utilities_Interaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/Interaction */ "./src/utilities/Interaction.ts");
/* harmony import */ var _model_DesignUnitModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/DesignUnitModel */ "./src/model/DesignUnitModel.ts");
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







/**
 * Design Unit Management Page
 *
 * This module handles the administrative interface for managing design unit data
 * in the real estate system. Design units are architectural and engineering firms
 * that provide design services for real estate development projects.
 *
 * Features:
 * - CRUD operations for design unit records
 * - Contact information management (multiple phones, fax, email, website)
 * - Address selection and management
 * - Tabbed form interface for organized data entry
 * - Table display with comprehensive contact information
 * - Form validation for required fields
 */
// REGION 1: Global variables and configuration
/** Primary API endpoint for design unit operations */
var gApiMainPath = _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_DESIGN_UNIT;
/**
 * Main page interaction controller configured for design unit management
 * Sets up the complete interface including model binding, API endpoints,
 * and view paths for design unit data
 */
var gPageInteraction = new _utilities_Interaction__WEBPACK_IMPORTED_MODULE_3__["default"]()
    .setModel(_model_DesignUnitModel__WEBPACK_IMPORTED_MODULE_4__["default"])
    .setPath(gApiMainPath)
    .setViewPath(_constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_DESIGN_UNIT);
/**
 * Data transformation configuration for enhanced table display
 * Defines how address objects should be formatted in the table view
 */
var gTransformData = [
    {
        name: 'address',
        fields: 'address', // Display full address information
    }
];
// REGION 2: Element events
// (No direct element events - handled through PageInteraction framework)
// REGION 3: Event handlers
/**
 * Initialize and configure the design unit management page
 *
 * Sets up the complete page functionality including:
 * - Table structure with comprehensive contact information
 * - Address selection dropdown integration
 * - Form validation for required fields
 * - Tabbed interface for organized data entry
 * - Data transformation for address display
 * - API integration and event binding
 */
function onLoad() {
    return __awaiter(this, void 0, void 0, function* () {
        yield gPageInteraction
            // Configure table columns to display comprehensive contact information
            .setTableHeaders('name', 'address', 'phone', 'phone2', 'fax', 'email')
            // Set validation rules - design unit name is mandatory
            .setRequiredFields('name')
            // Configure address selection dropdown (optional field)
            .addSelectFields('address', null, _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_ADDRESS_MAP, null, false, 'address')
            // Create tabbed interface for organized data entry
            .createTab(_language__WEBPACK_IMPORTED_MODULE_6__["default"][(0,___WEBPACK_IMPORTED_MODULE_5__.getLanguage)()].tab_important, 'name', 'phone', 'email', 'website', 'address') // Essential contact info
            .createTab(_language__WEBPACK_IMPORTED_MODULE_6__["default"][(0,___WEBPACK_IMPORTED_MODULE_5__.getLanguage)()].tab_optional) // Additional fields (auto-populated with remaining fields)
            // Configure address field to be sent as URL parameter for proper API routing
            .setDataToHeader('address')
            // Apply data transformation for better address display in table
            .setTableDataTransform(...gTransformData)
            // Initialize the page with all configurations
            .connectButton();
    });
}
// REGION 4: Common functions
/**
 * Main design unit page initialization function
 *
 * Loads the HTML template and initializes the design unit management interface.
 * This is the entry point called by the routing system.
 *
 * @returns Promise that resolves when page is fully loaded and configured
 */
function designUnitPage() {
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
//# sourceMappingURL=src_pages_design_unit_ts.bundle.js.map