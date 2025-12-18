"use strict";
(self["webpackChunkadmin"] = self["webpackChunkadmin"] || []).push([["src_pages_sign_up_ts"],{

/***/ "./src/pages/sign_up.ts":
/*!******************************!*\
  !*** ./src/pages/sign_up.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SignUpPage)
/* harmony export */ });
/* harmony import */ var _constants_APIConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/APIConstants */ "./src/constants/APIConstants.ts");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _utilities_MyUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/MyUtilities */ "./src/utilities/MyUtilities.ts");
/* harmony import */ var _utilities_ApiHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/ApiHandler */ "./src/utilities/ApiHandler.ts");
/* harmony import */ var _utilities_EventHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/EventHandler */ "./src/utilities/EventHandler.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants/webConstants */ "./src/constants/webConstants.ts");
/* harmony import */ var _model_EmployeeModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/EmployeeModel */ "./src/model/EmployeeModel.ts");
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../language */ "./src/language/index.ts");
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
 * Employee Registration Page
 *
 * This module handles the user interface and logic for employee account registration
 * in the real estate admin system. It provides a comprehensive registration form
 * with validation, password visibility controls, and API integration.
 *
 * Features:
 * - Multi-field registration form (username, password, names, email)
 * - Real-time form validation with visual feedback
 * - Password confirmation and strength requirements
 * - Email format validation
 * - Password visibility toggle functionality
 * - API integration for account creation
 * - Navigation to verification page on success
 */
// REGION 1: Global variables
// (No global variables required for this page)
// REGION 2: Element events
// (Event binding handled in onLoad function)
// REGION 3: Event handlers
/**
 * Initialize page event handlers and bind UI interactions
 *
 * Sets up all necessary event listeners for the registration form including
 * password visibility toggles and form submission handling.
 */
function onLoad() {
    // Bind password visibility toggle buttons
    // Allows users to show/hide password fields for better UX
    $(".button-visibility").on('click', _utilities_EventHandler__WEBPACK_IMPORTED_MODULE_4__.onButtonVisibilityClick);
    // Bind form submission handler with validation and API call
    $("#form-signup").on('submit', onFormSignUpSubmit);
}
/**
 * Handle registration form submission
 *
 * Orchestrates the complete registration workflow including:
 * 1. Data collection from form fields
 * 2. Client-side validation with error feedback
 * 3. API request for account creation
 * 4. Navigation to verification page on success
 *
 * @param e - Form submission event
 */
function onFormSignUpSubmit(e) {
    return __awaiter(this, void 0, void 0, function* () {
        (0,___WEBPACK_IMPORTED_MODULE_5__.setLoadingStatus)(true);
        e.preventDefault(); // Prevent default form submission
        var vObject = new _model_EmployeeModel__WEBPACK_IMPORTED_MODULE_7__["default"]();
        // Step 1: Collect data from form inputs
        collectData(vObject);
        // Step 2: Validate collected data with visual feedback
        var vValidateResult = validateData(vObject);
        if (!vValidateResult) {
            _utilities_MyUtilities__WEBPACK_IMPORTED_MODULE_2__["default"].showToast('error', _language__WEBPACK_IMPORTED_MODULE_8__["default"][(0,___WEBPACK_IMPORTED_MODULE_5__.getLanguage)()].err_field);
            return;
        }
        // Remove password confirmation field before API call (not needed server-side)
        delete vObject['passConfirm'];
        // Step 3: Submit registration request to API
        var vResult = yield (0,_utilities_ApiHandler__WEBPACK_IMPORTED_MODULE_3__.requestSignUp)(_constants_APIConstants__WEBPACK_IMPORTED_MODULE_0__.PATH_API_EMPLOYEE, vObject);
        if (vResult) {
            // Navigate to verification page on successful registration
            (0,___WEBPACK_IMPORTED_MODULE_5__["default"])(_constants_APIConstants__WEBPACK_IMPORTED_MODULE_0__.PATH_SIGN_IN);
        }
        (0,___WEBPACK_IMPORTED_MODULE_5__.setLoadingStatus)(false);
    });
}
// REGION 4: Common functions
/**
 * Collect registration data from form inputs
 *
 * Extracts and trims values from all registration form fields,
 * including password confirmation for client-side validation.
 *
 * @param paramObject - Employee model object to populate with form data
 */
function collectData(paramObject) {
    paramObject['username'] = $("#input-username").val().toString().trim();
    paramObject['password'] = $("#input-password").val().toString().trim();
    paramObject['passConfirm'] = $("#input-password-confirm").val().toString().trim();
    paramObject['firstName'] = $("#input-firstname").val().toString().trim();
    paramObject['lastName'] = $("#input-lastname").val().toString().trim();
    paramObject['email'] = $("#input-email").val().toString().trim();
}
/**
 * Comprehensive form validation with visual feedback
 *
 * Validates all registration fields according to business rules:
 * - Username: Required, non-empty
 * - Password: Required, minimum 6 characters, must match confirmation
 * - Names: Required, non-empty
 * - Email: Required, valid format
 *
 * Provides immediate visual feedback by adding/removing error styling
 * and tooltip messages for failed validations.
 *
 * @param paramObject - Object containing form data to validate
 * @returns True if all validations pass, false otherwise
 */
function validateData(paramObject) {
    var vResult = true;
    // Validate username field
    if (paramObject['username'].length == 0) {
        $("#input-username").addClass('border-danger')
            .attr('tooltip', 'Username cannot be empty');
        vResult = false;
    }
    else {
        $("#input-username").removeClass('border-danger')
            .removeAttr('tooltip');
    }
    // Validate password field with strength and confirmation checks
    if (paramObject['password'].length == 0) {
        $("#input-password").addClass('border-danger')
            .attr('tooltip', 'Password cannot be empty');
        vResult = false;
    }
    else if (paramObject['password'].length < 6) {
        $("#input-password").addClass('border-danger')
            .attr('tooltip', 'Password must be from and above 6 characters');
        vResult = false;
    }
    else if (paramObject['passConfirm'] != paramObject['password']) {
        $("#input-password").addClass('border-danger')
            .attr('tooltip', 'Passwords does not match');
        vResult = false;
    }
    else {
        $("#input-password").removeClass('border-danger')
            .removeAttr('tooltip');
    }
    // Validate first name field
    if (paramObject['firstName'].length == 0) {
        $("#input-firstname").addClass('border-danger')
            .attr('tooltip', 'First name cannot be empty');
        vResult = false;
    }
    else {
        $("#input-firstname").removeClass('border-danger')
            .removeAttr('tooltip');
    }
    // Validate last name field
    if (paramObject['lastName'].length == 0) {
        $("#input-lastname").addClass('border-danger')
            .attr('tooltip', 'Last name cannot be empty');
        vResult = false;
    }
    else {
        $("#input-lastname").removeClass('border-danger')
            .removeAttr('tooltip');
    }
    // Validate email field with format checking
    if (paramObject['email'].length == 0) {
        $("#input-email").addClass('border-danger')
            .attr('tooltip', 'Email cannot be empty');
        vResult = false;
    }
    else if (!_utilities_MyUtilities__WEBPACK_IMPORTED_MODULE_2__["default"].validateEmail(paramObject['email'])) {
        $("#input-email").addClass('border-danger')
            .attr('tooltip', 'Current email format is not allowed');
        vResult = false;
    }
    else {
        $("#input-email").removeClass('border-danger')
            .removeAttr('tooltip');
    }
    return vResult;
}
/**
 * Main registration page initialization function
 *
 * Loads the registration template and initializes the page functionality.
 * This is the entry point called by the routing system.
 *
 * @returns Promise that resolves when page is fully loaded and configured
 */
function SignUpPage() {
    return __awaiter(this, void 0, void 0, function* () {
        // Load the registration form template
        var vHtml = yield fetch(_constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.FOLDER_TEMPLATE + _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.TEMPLATE_SIGN_UP)
            .then(res => res.text());
        // Inject template into main container
        $("#main-container").append(vHtml);
        // Initialize page functionality
        onLoad();
    });
}


/***/ })

}]);
//# sourceMappingURL=src_pages_sign_up_ts.bundle.js.map