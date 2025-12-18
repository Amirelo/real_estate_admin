"use strict";
(self["webpackChunkadmin"] = self["webpackChunkadmin"] || []).push([["src_pages_customer_ts"],{

/***/ "./src/model/CustomerModel.ts":
/*!************************************!*\
  !*** ./src/model/CustomerModel.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerContactTitle: () => (/* binding */ CustomerContactTitle),
/* harmony export */   "default": () => (/* binding */ CustomerModel)
/* harmony export */ });
const CustomerContactTitle = {
    "mr": "Mr.",
    "mrs": "Mrs.",
    "ms": "Ms.",
};
class CustomerModel {
    constructor() {
        this.id = 0;
        this.contactName = '';
        this.contactTitle = '';
        this.address = '';
        this.mobile = '';
        this.email = '';
        this.note = '';
        this.createDate = null;
        this.updateDate = null;
        this.createBy = null;
        this.updateBy = null;
        this.numRealEstates = 0;
    }
}


/***/ }),

/***/ "./src/pages/customer.ts":
/*!*******************************!*\
  !*** ./src/pages/customer.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ customerPage)
/* harmony export */ });
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/APIConstants */ "./src/constants/APIConstants.ts");
/* harmony import */ var _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/webConstants */ "./src/constants/webConstants.ts");
/* harmony import */ var _utilities_Interaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/Interaction */ "./src/utilities/Interaction.ts");
/* harmony import */ var _model_CustomerModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/CustomerModel */ "./src/model/CustomerModel.ts");
/* harmony import */ var _utilities_SecureAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utilities/SecureAuth */ "./src/utilities/SecureAuth.ts");
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../language */ "./src/language/index.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! .. */ "./src/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








// /**
//  * Customer Management Page
//  * 
//  * This module handles the administrative interface for managing customer data
//  * in the real estate system. Customers are individuals or entities who inquire
//  * about or purchase real estate properties.
//  * 
//  * Features:
//  * - CRUD operations for customer records
//  * - User-specific customer filtering (customers by logged-in employee)
//  * - Interactive navigation to customer's real estate listings
//  * - Contact information management with titles and notes
//  * - Employee tracking for customer creation and updates
//  * - Table display with customer metrics and audit information
//  */
// REGION 1: Global variables and configuration
/** Primary API endpoint for customer operations */
var gApiMainPath = _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_CUSTOMER;
/** Parent API endpoint for employee data (for user-specific filtering) */
var gApiParentPath = _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_EMPLOYEE;
/**
 * Main page interaction controller configured for customer management
 * Sets up user-specific customer filtering by associating customers
 * with the currently logged-in employee
 */
var gPageInteraction = new _utilities_Interaction__WEBPACK_IMPORTED_MODULE_3__["default"]()
    .setModel(_model_CustomerModel__WEBPACK_IMPORTED_MODULE_4__["default"]); // Filter by current user
/**
 * Data transformation configuration for enhanced table display
 * Converts customer data into interactive elements and formatted displays
 */
var gDataTransform = [
    {
        name: 'numRealEstates',
        pathName: _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_REAL_ESTATE,
        to: 'link', // Convert count to clickable link
        fields: _language__WEBPACK_IMPORTED_MODULE_6__["default"][(0,___WEBPACK_IMPORTED_MODULE_7__.getLanguage)()].text_customer_posts,
        fieldName: 'customer_id', // Parameter for filtering properties by customer
    },
    {
        name: 'createBy',
        fields: 'firstName, lastName', // Concatenate employee names
        separator: ' ' // Space between first and last name
    }
];
// REGION 2: Element events
// (No direct element events - handled through PageInteraction framework)
// REGION 3: Event handlers
/**
 * Initialize and configure the customer management page
 *
 * Sets up the complete page functionality including:
 * - Table structure with customer metrics and audit information
 * - Data transformation for interactive navigation and employee display
 * - Contact information fields including notes and titles
 * - Form validation for required customer data
 * - System field exclusion from form generation
 * - API integration and event binding
 */
function onLoad() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        yield gPageInteraction
            .setPath(gApiMainPath)
            .setParentPath(gApiParentPath, (_a = _utilities_SecureAuth__WEBPACK_IMPORTED_MODULE_5__["default"].getUserInfo()) === null || _a === void 0 ? void 0 : _a.id)
            // Configure table columns with customer info, metrics, and audit data
            .setTableHeaders('numRealEstates', 'contactName', 'mobile', 'note', 'createBy', 'updateBy', 'createDate', 'updateDate')
            // Apply transformations for navigation links and employee name display
            .setTableDataTransform(...gDataTransform)
            // Configure multi-line text input for customer notes
            .setTextareaFields("note")
            // Configure contact title dropdown with predefined options
            .addSelectFields('contactTitle', _model_CustomerModel__WEBPACK_IMPORTED_MODULE_4__.CustomerContactTitle, null, null, false)
            // Set validation rules for essential customer information
            .setRequiredFields('contactName', 'mobile', 'email')
            // Exclude system-managed and calculated fields from form generation
            .setIgnoreFields('createBy', 'updateBy', 'numRealEstates', 'createDate', 'updateDate')
            // Initialize the page with all configurations
            .connectButton();
    });
}
// REGION 4: Common functions
/**
 * Main customer page initialization function
 *
 * Loads the HTML template and initializes the customer management interface.
 * This is the entry point called by the routing system.
 *
 * @returns Promise that resolves when page is fully loaded and configured
 */
function customerPage() {
    return __awaiter(this, void 0, void 0, function* () {
        // Load the standard entity management template
        let vHtml = yield fetch(_constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.FOLDER_TEMPLATE + _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.TEMPLATE_VIEW_ENTITY)
            .then(res => res.text());
        // Inject template into main container
        $("#main-container").html(vHtml);
        // Initialize page functionality
        yield onLoad();
    });
}


/***/ })

}]);
//# sourceMappingURL=src_pages_customer_ts.bundle.js.map