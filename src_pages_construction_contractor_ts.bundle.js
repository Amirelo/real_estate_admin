"use strict";
(self["webpackChunkadmin"] = self["webpackChunkadmin"] || []).push([["src_pages_construction_contractor_ts"],{

/***/ "./src/model/ConstructionContractor.ts":
/*!*********************************************!*\
  !*** ./src/model/ConstructionContractor.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConstructionContractorModel)
/* harmony export */ });
class ConstructionContractorModel {
    constructor() {
        this.id = 0;
        this.name = '';
        this.description = '';
        this.projects = '';
        this.phone = '';
        this.phone2 = '';
        this.fax = '';
        this.email = '';
        this.website = '';
        this.note = '';
        this.address = null;
    }
}


/***/ }),

/***/ "./src/pages/construction_contractor.ts":
/*!**********************************************!*\
  !*** ./src/pages/construction_contractor.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ constructionContractorPage)
/* harmony export */ });
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/APIConstants */ "./src/constants/APIConstants.ts");
/* harmony import */ var _model_ConstructionContractor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/ConstructionContractor */ "./src/model/ConstructionContractor.ts");
/* harmony import */ var _utilities_Interaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/Interaction */ "./src/utilities/Interaction.ts");
/* harmony import */ var _constants_webConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/webConstants */ "./src/constants/webConstants.ts");
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
 * Construction Contractor Management Page
 *
 * This module handles the administrative interface for managing construction
 * contractor data in the real estate system. Construction contractors are
 * companies or individuals responsible for building and constructing real
 * estate development projects.
 *
 * Features:
 * - CRUD operations for construction contractor records
 * - Contact information management (phone, email, website)
 * - Address selection and management
 * - Tabbed form interface for organized data entry
 * - Table display with essential contractor information
 * - Form validation for required fields
 */
// REGION 1: Global variables and configuration
/** Primary API endpoint for construction contractor operations */
var gApiMainPath = _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_CONSTRUCTION_CONTRACTOR;
/**
 * Main page interaction controller configured for construction contractor management
 * Sets up the complete interface including model binding, API endpoints,
 * and view paths for contractor data
 */
var gPageInteraction = new _utilities_Interaction__WEBPACK_IMPORTED_MODULE_3__["default"]()
    .setModel(_model_ConstructionContractor__WEBPACK_IMPORTED_MODULE_2__["default"])
    .setPath(gApiMainPath)
    .setViewPath(_constants_webConstants__WEBPACK_IMPORTED_MODULE_4__.PATH_CONSTRUCTION_CONTRACTOR)
    .setDataToHeader('address');
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
 * Initialize and configure the construction contractor management page
 *
 * Sets up the complete page functionality including:
 * - Table structure with essential contractor contact information
 * - Address selection dropdown integration
 * - Form validation for required fields
 * - Tabbed interface for organized data entry
 * - Data transformation for address display
 * - API integration and event binding
 */
function onLoad() {
    return __awaiter(this, void 0, void 0, function* () {
        yield gPageInteraction
            // Configure table columns to display key contractor information
            .setTableHeaders('name', 'phone', 'email', 'address')
            // Set validation rules - contractor name is mandatory
            .setRequiredFields('name')
            // Configure address selection dropdown (optional field)
            .addSelectFields('address', null, _constants_webConstants__WEBPACK_IMPORTED_MODULE_4__.PATH_ADDRESS_MAP, null, false, 'address')
            // Create tabbed interface for organized data entry
            .createTab(_language__WEBPACK_IMPORTED_MODULE_5__["default"][(0,___WEBPACK_IMPORTED_MODULE_6__.getLanguage)()].tab_important, 'name', 'phone', 'email', 'website', 'address') // Essential contact info
            .createTab(_language__WEBPACK_IMPORTED_MODULE_5__["default"][(0,___WEBPACK_IMPORTED_MODULE_6__.getLanguage)()].tab_optional) // Additional fields (auto-populated with remaining fields)
            // Apply data transformation for better address display in table
            .setTableDataTransform(gTransformData)
            // Initialize the page with all configurations
            .connectButton();
        // Legacy code section - commented out optional field generation
        // TODO: Remove commented code after confirming new implementation works correctly
        // .generateOptionalFields()
    });
}
// REGION 4: Common functions
/**
 * Main construction contractor page initialization function
 *
 * Loads the HTML template and initializes the contractor management interface.
 * This is the entry point called by the routing system.
 *
 * @returns Promise that resolves when page is fully loaded and configured
 */
function constructionContractorPage() {
    return __awaiter(this, void 0, void 0, function* () {
        // Load the standard entity management template
        let vHtml = yield fetch(_constants_webConstants__WEBPACK_IMPORTED_MODULE_4__.FOLDER_TEMPLATE + _constants_webConstants__WEBPACK_IMPORTED_MODULE_4__.TEMPLATE_VIEW_ENTITY)
            .then(res => res.text());
        // Inject template into main container
        $("#main-container").html(vHtml);
        // Initialize page functionality
        yield onLoad();
    });
}


/***/ })

}]);
//# sourceMappingURL=src_pages_construction_contractor_ts.bundle.js.map