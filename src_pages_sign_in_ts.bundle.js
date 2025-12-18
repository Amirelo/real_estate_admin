"use strict";
(self["webpackChunkadmin"] = self["webpackChunkadmin"] || []).push([["src_pages_sign_in_ts"],{

/***/ "./src/pages/sign_in.ts":
/*!******************************!*\
  !*** ./src/pages/sign_in.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ signInPage)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _constants_webConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/webConstants */ "./src/constants/webConstants.ts");
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../language */ "./src/language/index.ts");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _utilities_EventHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/EventHandler */ "./src/utilities/EventHandler.ts");
/* harmony import */ var _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utilities/MyLogger */ "./src/utilities/MyLogger.ts");
/* harmony import */ var _utilities_SecureAuth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilities/SecureAuth */ "./src/utilities/SecureAuth.ts");
/* harmony import */ var _utilities_MyUtilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utilities/MyUtilities */ "./src/utilities/MyUtilities.ts");
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
 * Employee Sign-In Page
 *
 * This module handles the authentication interface for employee login
 * in the real estate admin system. It provides a secure login form
 * with validation, password visibility controls, and API integration.
 *
 * Features:
 * - Username and password authentication
 * - Form validation with error feedback
 * - Password visibility toggle functionality
 * - API integration for authentication
 * - Automatic redirection on successful login
 * - Loading state management during authentication
 */
// REGION 1: Global variables
// (No global variables required for this page)
// REGION 2: Element events
// (Event binding handled in onLoad function)
// REGION 3: Event handlers
/**
 * Initialize page event handlers and bind UI interactions
 *
 * Sets up all necessary event listeners for the sign-in form including
 * form submission handling and password visibility toggles.
 */
function onLoad() {
    // Bind form submission handler for authentication
    $("#form-signin").on('submit', onFormSignInSubmit);
    // Bind password visibility toggle functionality
    // Allows users to show/hide password field for better UX
    $(".button-visibility").on('click', _utilities_EventHandler__WEBPACK_IMPORTED_MODULE_4__.onButtonVisibilityClick);
}
/**
 * Handle sign-in form submission
 *
 * Orchestrates the complete authentication workflow including:
 * 1. Data collection from form fields
 * 2. Client-side validation
 * 3. API authentication request
 * 4. Redirection on successful authentication
 *
 * @param e - Form submission event
 */
function onFormSignInSubmit(e) {
    return __awaiter(this, void 0, void 0, function* () {
        e.preventDefault(); // Prevent default form submission
        (0,___WEBPACK_IMPORTED_MODULE_0__.setLoadingStatus)(true);
        _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_5__["default"].log("Fetch sign in data");
        // Prepare authentication object
        var vObject = {
            username: '',
            password: ''
        };
        // Step 1: Collect credentials from form inputs
        collectData(vObject);
        _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_5__["default"].log("Validate sign in data");
        // Step 2: Validate required fields
        var vValidate = validateData(vObject);
        if (!vValidate) {
            _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_5__["default"].log("Fail validation");
            _utilities_MyUtilities__WEBPACK_IMPORTED_MODULE_7__["default"].showToast('error', _language__WEBPACK_IMPORTED_MODULE_2__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()].err_auth_empty);
            return;
        }
        _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_5__["default"].log("Signing in user ...");
        // Step 3: Submit authentication request to API
        var vResult = yield _utilities_SecureAuth__WEBPACK_IMPORTED_MODULE_6__["default"].signIn(vObject.username, vObject.password);
        if (vResult == null) {
            _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_5__["default"].log("Sign in fail");
            // Authentication failed - error handling done by requestSignIn
            (0,___WEBPACK_IMPORTED_MODULE_0__.setLoadingStatus)(false);
            return;
        }
        _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_5__["default"].log("Sign in success, re-locating");
        _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_5__["default"].log("Turn off loading widget");
        (0,___WEBPACK_IMPORTED_MODULE_0__.setLoadingStatus)(false);
        // Step 4: Redirect to main application on successful authentication
        (0,___WEBPACK_IMPORTED_MODULE_0__["default"])(_constants_webConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_VERIFICATION);
    });
}
// REGION 4: Common functions
/**
 * Collect data for object
 * @param paramObject: Object to send to server
 */
function collectData(paramObject) {
    paramObject['username'] = $("#input-username").val().toString().trim();
    paramObject['password'] = $("#input-password").val().toString().trim();
}
/**
 * validate data for object
 * @param paramObject: Object to send to server
 */
function validateData(paramObject) {
    var vResult = true;
    if (paramObject['username'].length == 0 ||
        paramObject['password'].length == 0) {
        _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_5__["default"].log("Fail validation");
        vResult = false;
        (0,___WEBPACK_IMPORTED_MODULE_0__.setLoadingStatus)(false);
        return;
    }
    return vResult;
}
/**
 * Main sign-in page initialization function
 *
 * Loads the sign-in template and initializes the authentication interface.
 * This is the entry point called by the routing system.
 *
 * @returns Promise that resolves when page is fully loaded and configured
 */
function signInPage() {
    return __awaiter(this, void 0, void 0, function* () {
        // Load the sign-in form template
        var vHtml = yield fetch('/templates/sign_in.html').then(res => res.text());
        // Inject template into main container
        $("#main-container").append(vHtml);
        // Initialize page functionality
        onLoad();
    });
}


/***/ })

}]);
//# sourceMappingURL=src_pages_sign_in_ts.bundle.js.map