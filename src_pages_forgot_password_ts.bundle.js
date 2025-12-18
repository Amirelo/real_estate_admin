"use strict";
(self["webpackChunkadmin"] = self["webpackChunkadmin"] || []).push([["src_pages_forgot_password_ts"],{

/***/ "./src/pages/forgot_password.ts":
/*!**************************************!*\
  !*** ./src/pages/forgot_password.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ForgotPasswordPage)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/APIConstants */ "./src/constants/APIConstants.ts");
/* harmony import */ var _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/webConstants */ "./src/constants/webConstants.ts");
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../language */ "./src/language/index.ts");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _utilities_ApiHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utilities/ApiHandler */ "./src/utilities/ApiHandler.ts");
/* harmony import */ var _utilities_EventHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilities/EventHandler */ "./src/utilities/EventHandler.ts");
/* harmony import */ var _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utilities/MyLogger */ "./src/utilities/MyLogger.ts");
/* harmony import */ var _utilities_MyUtilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utilities/MyUtilities */ "./src/utilities/MyUtilities.ts");
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
 * Forgot Password Page Module
 *
 * This module handles the complete forgot password flow for employees:
 * Step 1: Email validation and verification code sending
 * Step 2: Verification code validation
 * Step 3: Password change with confirmation
 *
 * Features:
 * - Multi-step wizard interface with progress tracking
 * - Session-based state management with timeout
 * - Email validation and verification code handling
 * - Password strength validation and confirmation matching
 * - Automatic cleanup of expired sessions
 */
// REGION 1: Global variables
// Current step in the forgot password flow 
// (1: email, 2: verify code, 3: change password)
var gStep = 1;
// Total number of steps in the forgot password process
var gMaxSteps = 3;
// REGION 2: Element events
// REGION 3: Event handlers
/**
 * Initialize page event listeners and check for existing session data
 * Handles page load functionality including:
 * - Setting up event listeners for form interactions
 * - Checking for existing forgot password sessions
 * - Managing session timeouts and expiration
 */
function onLoad() {
    // Bind password visibility toggle functionality for show/hide password
    $(".button-visibility").on('click', _utilities_EventHandler__WEBPACK_IMPORTED_MODULE_6__.onButtonVisibilityClick);
    // Bind form submission handler to process each step
    $("form").on('submit', onFormSubmit);
    $("#button-resend-email").on('click', onResendEmailClick);
    setupVerificationInputs();
    // Check if user already has email stored in session (returning user)
    // This allows users to continue the process if they refresh the page
    var vEmail = _utilities_MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].getSessionData('change-password-email');
    // Validate session timing - sessions expire after 10 minutes for security
    var vStartTime = new Date(_utilities_MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].getSessionData('change-password-time'));
    var vCurrentTime = new Date().getTime();
    var vTimeDifference = vCurrentTime - vStartTime.getTime();
    // If session is valid (within 10 minutes), continue from step 2
    if (vEmail != null && vStartTime != null &&
        vTimeDifference < 10 * 60 * 1000) {
        // Resume the verification step with remaining timeout
        startTimeout(vTimeDifference);
    }
    else {
        // Clean up expired or invalid session data
        _utilities_MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].removeSessionData('change-password-email');
        _utilities_MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].removeSessionData('change-password-time');
    }
}
/**
 * Handle form submission based on current step
 * Routes form submission to appropriate handler based on current wizard step
 * @param {Event} e - Form submit event
 */
function onFormSubmit(e) {
    return __awaiter(this, void 0, void 0, function* () {
        e.preventDefault(); // Prevent default form submission
        (0,___WEBPACK_IMPORTED_MODULE_0__.setLoadingStatus)(true); // Show loading indicator to user
        switch (gStep) {
            case 1:
                // Step 1: Validate email and send verification code
                yield onSendEmailClick();
                break;
            case 2:
                // Step 2: Verify the code sent to email
                yield onVerifyCodeClick();
                break;
            case 3:
                // Step 3: Change the password
                yield onPasswordChangeClick();
                break;
            default:
                _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_7__["default"].log('Invalid action');
        }
        (0,___WEBPACK_IMPORTED_MODULE_0__.setLoadingStatus)(false); // Hide loading indicator
    });
}
// REGION 4: Common functions
/**
 * Handle email validation and send verification code
 * Step 1 of the forgot password process:
 * - Validates email format and existence
 * - Sends verification code to user's email
 * - Stores email in session for subsequent steps
 * - Initiates session timeout management
 */
function onSendEmailClick() {
    return __awaiter(this, void 0, void 0, function* () {
        _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_7__["default"].log("Send email");
        // Step 1: Collect email input from form
        var vEmail = $("#input-email").val().toString().trim();
        _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_7__["default"].log("Pass collect data");
        // Step 2: Validate email format and presence
        if (vEmail == null || vEmail.length == 0 || !_utilities_MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].validateEmail(vEmail)) {
            // Add visual feedback for validation errors
            $("#input-email").addClass('border-danger').attr('title', 'Invalid email');
            _utilities_MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].showToast("error", _language__WEBPACK_IMPORTED_MODULE_3__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()].err_field);
            return;
        }
        _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_7__["default"].log("Pass validation");
        // Step 3: Send verification email via API
        var vResult = yield (0,_utilities_ApiHandler__WEBPACK_IMPORTED_MODULE_5__.requestSendEmailVerification)(vEmail);
        _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_7__["default"].log("Pass API call");
        // Step 4: Handle API response and proceed to next step
        if (vResult == null || vResult.statusCode != 200) {
            // Email not found in system - show error feedback
            $("#input-email").addClass('border-danger').attr('title', 'Email not found');
            return;
        }
        // Store email in session for subsequent steps (expires in 10 minutes)
        _utilities_MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].setSessionData('change-password-email', vEmail);
        _utilities_MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].setSessionData('change-password-time', new Date().toUTCString());
        // Start countdown timer for verification code expiration
        startTimeout(0);
        moveToNextStep();
    });
}
/**
 * Handle verification code validation
 * Step 2 of the forgot password process:
 * - Validates the 6-digit code sent to user's email
 * - Verifies code with backend API
 * - Progresses to password change step on success
 */
function onVerifyCodeClick() {
    return __awaiter(this, void 0, void 0, function* () {
        // Step 1: Collect verification code and email from session
        var vNum1 = $("#input-verify-code1").val().toString().trim();
        var vNum2 = $("#input-verify-code2").val().toString().trim();
        var vNum3 = $("#input-verify-code3").val().toString().trim();
        var vNum4 = $("#input-verify-code4").val().toString().trim();
        var vNum5 = $("#input-verify-code5").val().toString().trim();
        var vEmail = _utilities_MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].getSessionData('change-password-email');
        var vCode = vNum1 + vNum2 + vNum3 + vNum4 + vNum5;
        // Step 2: Validate verification code presence
        if (vCode == null || vCode.length == 0) {
            // Add visual feedback for empty verification code
            $(vCode).addClass('border-danger')
                .attr('tooltip', _language__WEBPACK_IMPORTED_MODULE_3__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()].err_auth_code_incorrect);
            _utilities_MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].showToast("error", _language__WEBPACK_IMPORTED_MODULE_3__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()].err_auth_code_incorrect);
            return;
        }
        // Step 3: Verify code with API using email and verification action
        var vResult = yield (0,_utilities_ApiHandler__WEBPACK_IMPORTED_MODULE_5__.requestVerifyCode)(vEmail, vCode, _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.EMPLOYEE_VERIFICATION_ACTION.change_password);
        _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_7__["default"].log("-- result:", vResult);
        // Step 4: Handle verification result and update UI
        if (vResult == null || vResult['data'] == false) {
            // Code verification failed - show error feedback
            $("#input-verify-code").addClass('border-danger')
                .attr('tooltip', 'The code is incorrect!');
            return;
        }
        // Update submit button text for final step
        $("form button[type='submit']").text('Change password');
        gStep = 3;
        _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_7__["default"].log("Moveing to next step");
        moveToNextStep();
    });
}
/**
 * Handle password change with confirmation validation
 * Step 3 (final) of the forgot password process:
 * - Validates new password strength and confirmation match
 * - Updates user's password via API
 * - Cleans up session data and redirects to sign in
 */
function onPasswordChangeClick() {
    return __awaiter(this, void 0, void 0, function* () {
        // Step 1: Collect password and confirmation inputs
        var vPassword = $("#input-password").val().toString().trim();
        var vPasswordConfirm = $("#input-password-confirm").val().toString().trim();
        // Step 2: Validate password presence and confirmation match
        var vResultValidate = validatePasswordChange(vPassword, vPasswordConfirm);
        if (!vResultValidate) {
            _utilities_MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].showToast("error", _language__WEBPACK_IMPORTED_MODULE_3__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()].err_auth_code_incorrect);
            return;
        }
        // Step 3: Prepare API request with email and new password
        var vObject = {
            email: _utilities_MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].getSessionData('change-password-email'),
            password: vPassword
        };
        var vResult = yield (0,_utilities_ApiHandler__WEBPACK_IMPORTED_MODULE_5__.requestChangePassword)(vObject);
        // Step 4: Handle password change result and redirect
        if (vResult == null) {
            return;
        }
        // Clean up session data and redirect to sign in page
        _utilities_MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].removeSessionData('change-password-email');
        (0,___WEBPACK_IMPORTED_MODULE_0__["default"])(_constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_SIGN_IN);
    });
}
function onResendEmailClick(e) {
    return __awaiter(this, void 0, void 0, function* () {
        e.stopPropagation();
        e.preventDefault();
        (0,___WEBPACK_IMPORTED_MODULE_0__.setLoadingStatus)(true);
        _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_7__["default"].log("Resend email");
        // Step 1: Collect email input from form
        var vEmail = _utilities_MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].getSessionData('change-password-email');
        if (vEmail == null || vEmail.length == 0) {
            return;
        }
        _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_7__["default"].log("Pass collect data");
        // Step 2: Validate email format and presence
        if (vEmail == null || vEmail.length == 0 || !_utilities_MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].validateEmail(vEmail)) {
            return;
        }
        _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_7__["default"].log("Pass validation");
        // Step 3: Send verification email via API
        var vResult = yield (0,_utilities_ApiHandler__WEBPACK_IMPORTED_MODULE_5__.requestSendEmailVerification)(vEmail);
        _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_7__["default"].log("Pass API call");
        // Step 4: Handle API response and proceed to next step
        if (vResult == null || vResult.statusCode != 200) {
            // Email not found in system - show error feedback
            $("#input-email").addClass('border-danger').attr('title', 'Email not found');
            return;
        }
        // Store email in session for subsequent steps (expires in 10 minutes)
        _utilities_MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].setSessionData('change-password-email', vEmail);
        _utilities_MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].setSessionData('change-password-time', new Date().toUTCString());
        // Start countdown timer for verification code expiration
        startTimeout(0);
        (0,___WEBPACK_IMPORTED_MODULE_0__.setLoadingStatus)(false);
    });
}
/**
 * Validate password change inputs
 * Performs comprehensive validation on new password and confirmation:
 * - Checks for empty passwords
 * - Validates minimum length (6 characters)
 * - Ensures password and confirmation match
 * - Provides visual feedback for validation errors
 *
 * @param {string} paramPassword - New password input
 * @param {string} paramPasswordConfirm - Password confirmation input
 * @returns {boolean} True if validation passes, false otherwise
 */
function validatePasswordChange(paramPassword, paramPasswordConfirm) {
    // Validate primary password field
    if (paramPassword == null || paramPassword == '') {
        $("#input-password").addClass('border-danger')
            .attr('tooltip', 'Password cannot be empty');
        return false;
    }
    else if (paramPassword.length < 6) {
        $("#input-password").addClass('border-danger')
            .attr('tooltip', 'Password must have at least 6 characters');
        return false;
    }
    else {
        // Remove error styling if validation passes
        $("#input-password").removeClass('border-danger').removeAttr('tooltip');
    }
    // Validate password confirmation field
    if (paramPasswordConfirm == null || paramPassword == '') {
        $("#input-password-confirm").addClass('border-danger')
            .attr('tooltip', 'Password cannot be empty');
        return false;
    }
    else if (paramPassword.length < 6) {
        $("#input-password-confirm").addClass('border-danger')
            .attr('tooltip', 'Password must have at least 6 characters');
        return false;
    }
    else {
        $("#input-password-confirm").removeClass('border-danger')
            .removeAttr('tooltip');
    }
    // Ensure passwords match
    if (paramPassword != paramPasswordConfirm) {
        $("#input-password").addClass('border-danger')
            .attr('tooltip', 'Password does not match');
        return false;
    }
    else {
        $("#input-password").removeClass('border-danger').removeAttr('tooltip');
    }
    return true;
}
/**
 * Start session timeout management for verification step
 * Manages the 10-minute timeout for verification code:
 * - Moves to verification step (step 2)
 * - Sets up automatic cleanup after timeout
 * - Displays countdown timer to user
 * - Forces page reload when session expires
 *
 * @param {number} paramTimeDifference - Time already elapsed since session start
 */
function startTimeout(paramTimeDifference) {
    gStep = 2;
    moveToNextStep();
    // Set timeout for automatic session cleanup (10 minutes total)
    setTimeout(() => {
        // Clean up session data when timeout expires
        _utilities_MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].removeSessionData('change-password-email');
        _utilities_MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].removeSessionData('change-password-time');
        clearInterval(vExpireInterval);
        window.location.reload(); // Force page reload to reset state
    }, 10 * 60 * 1000 - paramTimeDifference);
    // Calculate remaining time and start countdown display
    var vRemainingTime = 10 * 60 * 1000 - paramTimeDifference;
    var vExpireInterval = setInterval(() => {
        vRemainingTime -= 1000; // Decrease by 1 second
        // Calculate minutes and seconds for display
        let vMinutes = Math.trunc(vRemainingTime / 1000 / 60);
        let vSeconds = Math.trunc((vRemainingTime / 1000) % 60);
        let vTimeDisplay = Math.trunc(vRemainingTime / 60 / 60);
        // Update countdown display in MM:SS format
        $("#span-timeout").html(vMinutes + ":" + vSeconds);
    }, 1000); // Update every second
}
/**
 * Move to the next step in the forgot password flow
 * Updates UI to show next step and progress indicator:
 * - Hides current step content
 * - Shows next step content
 * - Updates progress circle indicators
 * - Updates progress bar width
 */
function moveToNextStep() {
    // Prevent moving beyond maximum steps
    if (gStep > gMaxSteps) {
        return;
    }
    _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_7__["default"].log("current step:", gStep);
    // Hide current step and show next step with CSS transitions
    $(`#tab${gStep - 1}`).css("max-height", 0);
    $(`#tab${gStep}`).css("max-height", "100%");
    // Update progress circle indicator - highlight current step
    $(`.circle:nth-of-type(${gStep})`)
        .addClass('bg-primary-my').removeClass('bg-dark');
    // Update progress bar width based on current step
    // Step 1: 0%, Step 2: 50%, Step 3: 100%
    $(".line-progress").css("width", gStep == 1 ? 0 : 100 / (gMaxSteps - gStep + 1) + "%");
}
function setupVerificationInputs() {
    var vInputs = $('.input-code-verify');
    vInputs.each(function (index) {
        var vInputCurrent = $(this);
        // Handle input event
        vInputCurrent.on('input', function (e) {
            var vInputValue = $(this).val();
            // Only allow alphanumeric characters
            var vSanitized = vInputValue.replace(/[^a-zA-Z0-9]/g, '');
            $(this).val(vSanitized.toUpperCase());
            // Move to next input if filled
            if (vSanitized.length > 1) {
                $(this).val(vInputValue.slice(vInputValue.length - 1));
            }
            if (vSanitized.length != 1) {
                return;
            }
            if (index < vInputs.length - 1) {
                vInputs.eq(index + 1).focus();
                return;
            }
            _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_7__["default"].log("Last input");
            $("button[type='submit']").focus();
        });
        // Handle keydown for backspace
        vInputCurrent.on('keydown', function (e) {
            // If backspace and input is empty, move to previous input
            if (e.key === 'Backspace' && $(this).val() === '' && index > 0) {
                vInputs.eq(index - 1).focus();
            }
        });
        // Handle paste event
        vInputCurrent.on('paste', function (e) {
            var _a;
            e.preventDefault();
            // Get pasted text
            var vTextPasted = ((_a = e.originalEvent
                .clipboardData) === null || _a === void 0 ? void 0 : _a.getData('text')) || '';
            var vSanitized = vTextPasted.replace(/[^a-zA-Z0-9]/g, '')
                .toUpperCase();
            // Fill inputs with pasted characters
            for (let i = 0; i < vSanitized.length &&
                (index + i) < vInputs.length; i++) {
                vInputs.eq(index + i).val(vSanitized[i]);
            }
            // Focus next empty input or last input
            const nextIndex = Math.min(index + vSanitized.length, vInputs.length - 1);
            vInputs.eq(nextIndex).focus();
        });
    });
    // Focus first input on load
    vInputs.eq(0).focus();
}
/**
 * Main function to initialize the forgot password page
 * Entry point for the forgot password module:
 * - Loads the HTML template from server
 * - Injects template into main container
 * - Initializes all event handlers and functionality
 *
 * @returns {Promise<void>} Promise that resolves when page is fully initialized
 */
function ForgotPasswordPage() {
    return __awaiter(this, void 0, void 0, function* () {
        // Load forgot password HTML template from server
        var vHtml = yield fetch(_constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.FOLDER_TEMPLATE + _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.TEMPLATE_FORGOT_PASSWORD)
            .then(res => res.text());
        // Insert template into main container div
        $("#main-container").html(vHtml);
        // Initialize page functionality and event handlers
        onLoad();
    });
}


/***/ })

}]);
//# sourceMappingURL=src_pages_forgot_password_ts.bundle.js.map