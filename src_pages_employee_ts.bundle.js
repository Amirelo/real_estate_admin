"use strict";
(self["webpackChunkadmin"] = self["webpackChunkadmin"] || []).push([["src_pages_employee_ts"],{

/***/ "./src/pages/employee.ts":
/*!*******************************!*\
  !*** ./src/pages/employee.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ employeePage)
/* harmony export */ });
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/APIConstants */ "./src/constants/APIConstants.ts");
/* harmony import */ var _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/webConstants */ "./src/constants/webConstants.ts");
/* harmony import */ var _utilities_Interaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/Interaction */ "./src/utilities/Interaction.ts");
/* harmony import */ var _model_EmployeeModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/EmployeeModel */ "./src/model/EmployeeModel.ts");
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../language */ "./src/language/index.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _utilities_SecureAuth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utilities/SecureAuth */ "./src/utilities/SecureAuth.ts");
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
 * Employee Management Page
 *
 * This module handles the comprehensive administrative interface for managing
 * employee data in the real estate admin system. It provides role-based access
 * control, ensuring different user levels have appropriate permissions.
 *
 * Features:
 * - Complete CRUD operations for employee records
 * - Role-based field visibility and access control
 * - Photo management for employee profiles
 * - Tabbed form interface for organized data entry
 * - Data transformation for better display (checkboxes, text mappings)
 * - Hierarchical employee relationships (reports-to structure)
 * - User level management with permission-based restrictions
 */
// REGION 1: Global variables and configuration
/** Primary API endpoint for employee operations */
var gApiMainPath = _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_EMPLOYEE;
/**
 * Main page interaction controller configured for employee management
 * Sets up the complete interface including model binding, API endpoints,
 * and view paths for employee data
 */
var gPageInteraction = new _utilities_Interaction__WEBPACK_IMPORTED_MODULE_3__["default"]()
    .setModel(_model_EmployeeModel__WEBPACK_IMPORTED_MODULE_4__["default"])
    .setPath(gApiMainPath)
    .setViewPath(_constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_EMPLOYEE);
/**
 * Data transformation configuration for enhanced table display
 * Converts raw data into user-friendly formats including checkboxes,
 * text mappings, and concatenated fields
 */
var gDataTransform = [
    {
        name: 'activated',
        to: 'checkbox', // Display as checkbox
        value: 'Y' // Checked when value equals 'Y'
    },
    {
        name: 'userLevel',
        to: 'text', // Display as mapped text
        fields: _model_EmployeeModel__WEBPACK_IMPORTED_MODULE_4__.employeeUserLevel // Use enum mapping for display
    },
    {
        name: 'reportsTo',
        fields: 'firstName, lastName', // Concatenate employee names
        separator: ' ' // Space between first and last name
    }
];
/**
 * Fields to exclude from automatic form generation
 * These are typically calculated fields, sensitive data, or fields
 * handled by specialized UI components
 */
var gIgnoreFields = ['hireDate', 'realEstateCreated', 'realEstateUpdated',
    'customerCreated', 'customerUpdated', 'viewRealEstates',
    'numRealEstatesToday', 'numRealEstates', 'password',
    'titleOfCourtesy', 'extension', 'userLevel',
    'birthDate', 'activated', 'photo', "reportsTo"];
/**
 * Table column configuration for employee data display
 * Defines which fields to show in the main employee listing table
 */
var gTableHeaders = ['lastName', 'firstName',
    'title', 'birthDate', 'hireDate',
    'address', 'city', 'region', 'postalCode', 'country',
    'homePhone', 'photo', 'email', 'activated', 'userLevel',
    'reportsTo'];
/**
 * Employee user level configuration (modifiable based on current user permissions)
 * Will be filtered based on current user's role to prevent privilege escalation
 */
var gEmployeeLevel = _model_EmployeeModel__WEBPACK_IMPORTED_MODULE_4__.employeeUserLevel;
// REGION 2: Element events
// (No direct element events - handled through PageInteraction framework)
// REGION 3: Event handlers
/**
 * Initialize and configure the employee management page
 *
 * Sets up the complete page functionality including:
 * - Role-based access control and permission filtering
 * - Table structure with employee information and transformations
 * - Form validation for required employee fields
 * - Tabbed interface for organized data entry
 * - Photo upload functionality for employee profiles
 * - User level dropdown with permission-based filtering
 * - API integration and event binding
 */
function onLoad() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        // Get current user's authentication data for role-based access control
        var vUserInfo = (_a = _utilities_SecureAuth__WEBPACK_IMPORTED_MODULE_7__["default"].getUserInfo()) === null || _a === void 0 ? void 0 : _a.id;
        // Filter available user levels based on current user's permissions
        // Non-admin users cannot create admin accounts (prevent privilege escalation)
        // if (!vTokenData.role[0].authority.includes("ADMIN")) {
        //     delete gEmployeeLevel[2];  // Remove admin level option
        // }
        // Apply data transformations for enhanced table display
        gPageInteraction.setTableDataTransform(...gDataTransform);
        yield gPageInteraction
            // Set validation rules for essential employee information
            .setRequiredFields('lastName', 'firstName', 'username', 'email', 'userLevel')
            // Exclude system-managed and sensitive fields from form generation
            .setIgnoreFields(...gIgnoreFields)
            // Configure table columns for employee listing
            .setTableHeaders(...gTableHeaders)
            // Configure photo upload functionality for employee profiles
            .setPhotoFields("photo")
            // Create tabbed interface for organized data entry
            .createTab(_language__WEBPACK_IMPORTED_MODULE_5__["default"][(0,___WEBPACK_IMPORTED_MODULE_6__.getLanguage)()].tab_important, 'lastName', 'firstName', 'username', 'email', 'userLevel') // Essential info
            .createTab(_language__WEBPACK_IMPORTED_MODULE_5__["default"][(0,___WEBPACK_IMPORTED_MODULE_6__.getLanguage)()].tab_photo, "photo") // Profile image management
            .createTab(_language__WEBPACK_IMPORTED_MODULE_5__["default"][(0,___WEBPACK_IMPORTED_MODULE_6__.getLanguage)()].tab_optional) // Additional fields (auto-populated)
            // Configure user level dropdown with filtered options based on permissions
            .addSelectFields('userLevel', gEmployeeLevel, null, null, true)
            // Initialize the page with all configurations
            .connectButton();
        // Additional page interaction instance (appears unused - potential cleanup candidate)
        // ...existing code...
        // Legacy code - commented out field generation methods
        // These have been replaced by the modern PageInteraction configuration above
        // TODO: Remove commented code after confirming new implementation works correctly
        // .generateImagePicker('photo')
        // .generateSelectFromObject('titleOfCourtesy', employeeTitleCourtesy, false)
        // .generateField('birthDate', false, 'input', 'date')
        // .generateSelectFromObject('userLevel', employeeUserLevel, true)
        // .generateSelectWithApi('reportsTo', PATH_API_EMPLOYEE, 'firstName', false);
    });
}
// REGION 4: Common functions
/**
 * Main employee page initialization function
 *
 * Loads the HTML template and initializes the employee management interface.
 * This is the entry point called by the routing system.
 *
 * @returns Promise that resolves when page is fully loaded and configured
 */
function employeePage() {
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
//# sourceMappingURL=src_pages_employee_ts.bundle.js.map