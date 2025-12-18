"use strict";
(self["webpackChunkadmin"] = self["webpackChunkadmin"] || []).push([["src_pages_investor_ts"],{

/***/ "./src/model/InvestorModel.ts":
/*!************************************!*\
  !*** ./src/model/InvestorModel.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InvestorModel)
/* harmony export */ });
class InvestorModel {
    constructor() {
        this.id = 0;
        this.name = "";
        this.description = "";
        this.projects = "";
        this.phone = "";
        this.phone2 = "";
        this.fax = "";
        this.email = "";
        this.website = "";
        this.note = "";
        this.address = null;
    }
}


/***/ }),

/***/ "./src/pages/investor.ts":
/*!*******************************!*\
  !*** ./src/pages/investor.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ investorPage)
/* harmony export */ });
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/APIConstants */ "./src/constants/APIConstants.ts");
/* harmony import */ var _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/webConstants */ "./src/constants/webConstants.ts");
/* harmony import */ var _model_InvestorModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/InvestorModel */ "./src/model/InvestorModel.ts");
/* harmony import */ var _utilities_Interaction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/Interaction */ "./src/utilities/Interaction.ts");
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
 * Investor Management Page
 *
 * This module handles the administrative interface for managing investor data
 * in the real estate system. Investors are key stakeholders who fund and
 * participate in real estate development projects.
 *
 * Features:
 * - CRUD operations for investor records
 * - Contact information management (phone, email, website)
 * - Address selection and management
 * - Tabbed form interface for organized data entry
 * - Table display with essential investor information
 * - Form validation for required fields
 */
// REGION 1: Global variables and configuration
/** Primary API endpoint for investor operations */
var gApiMainPath = _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_INVESTOR;
/**
 * Main page interaction controller configured for investor management
 * Sets up the complete interface including model binding, API endpoints,
 * and view paths for investor data
 */
var gPageInteraction = new _utilities_Interaction__WEBPACK_IMPORTED_MODULE_4__["default"]()
    .setModel(_model_InvestorModel__WEBPACK_IMPORTED_MODULE_3__["default"])
    .setPath(gApiMainPath)
    .setViewPath(_constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_INVESTOR);
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
 * Initialize and configure the investor management page
 *
 * Sets up the complete page functionality including:
 * - Table structure with essential investor contact information
 * - Address selection dropdown integration
 * - Form validation for required fields
 * - Tabbed interface for organized data entry
 * - Data transformation for address display
 * - API integration and event binding
 */
function onLoad() {
    return __awaiter(this, void 0, void 0, function* () {
        yield gPageInteraction
            // Configure table columns to display key investor information
            .setTableHeaders('name', 'phone', 'email')
            // Configure address selection dropdown (optional field)
            .addSelectFields('address', null, _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_ADDRESS_MAP, null, false, 'address')
            // Set validation rules - investor name is mandatory
            .setRequiredFields('name')
            // Configure address field to be sent as URL parameter for proper API routing
            .setDataToHeader('address')
            // Create tabbed interface for organized data entry
            .createTab(_language__WEBPACK_IMPORTED_MODULE_6__["default"][(0,___WEBPACK_IMPORTED_MODULE_5__.getLanguage)()].tab_important, 'name', 'phone', 'email', 'website', 'address') // Essential information
            .createTab(_language__WEBPACK_IMPORTED_MODULE_6__["default"][(0,___WEBPACK_IMPORTED_MODULE_5__.getLanguage)()].tab_optional) // Additional fields (auto-populated with remaining fields)
            // Apply data transformation for better address display in table
            .setTableDataTransform(...gTransformData)
            // Initialize the page with all configurations
            .connectButton();
    });
}
// REGION 4: Common functions
/**
 * Main investor page initialization function
 *
 * Loads the HTML template and initializes the investor management interface.
 * This is the entry point called by the routing system.
 *
 * @returns Promise that resolves when page is fully loaded and configured
 */
function investorPage() {
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
//# sourceMappingURL=src_pages_investor_ts.bundle.js.map