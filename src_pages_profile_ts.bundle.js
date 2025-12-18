"use strict";
(self["webpackChunkadmin"] = self["webpackChunkadmin"] || []).push([["src_pages_profile_ts"],{

/***/ "./src/pages/profile.ts":
/*!******************************!*\
  !*** ./src/pages/profile.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserPage)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/APIConstants */ "./src/constants/APIConstants.ts");
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../language */ "./src/language/index.ts");
/* harmony import */ var _model_PageModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/PageModel */ "./src/model/PageModel.ts");
/* harmony import */ var _utilities_APIRequestBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/APIRequestBuilder */ "./src/utilities/APIRequestBuilder.ts");
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
 * Profile Page - User Account Management and Settings
 *
 * This module provides a comprehensive profile management interface for
 * employees/admins in the real estate system. It handles user information
 * display, profile photo uploads, and account statistics.
 *
 * Features:
 * - Profile photo upload (from device or URL)
 * - User information display and editing
 * - Account statistics (posts, views)
 * - Session-based data caching
 * - Real-time profile updates
 */
// REGION 1: Global variables and configuration
/**
 * Global variable to store the selected user profile image file
 *
 * Holds the File object for the user's profile photo during the upload process.
 * Can be populated from either:
 * - Direct file upload from user's device
 * - Converted File object from image URL
 *
 * @type {File|null} The image file to be uploaded, or null if no image selected
 */
var gImageUser = null;
// REGION 2: Page initialization
/**
 * Initialize and load profile page data
 *
 * Orchestrates the complete profile page setup including:
 * - User authentication verification
 * - Profile data loading from session or API
 * - Event handler binding for all interactive elements
 * - Photo upload modal configuration
 * - Profile statistics display
 *
 * @returns {Promise<void>} Promise that resolves when page is fully initialized
 * @throws {Error} If user authentication fails or API request errors occur
 */
function onLoad() {
    return __awaiter(this, void 0, void 0, function* () {
        // Verify user authentication
        var vToken = _utilities_SecureAuth__WEBPACK_IMPORTED_MODULE_6__["default"].getUserInfo();
        if (vToken == null) {
            (0,___WEBPACK_IMPORTED_MODULE_0__["default"])('/');
            return;
        }
        // Load user data from session or API
        var vUserData = JSON.parse(_utilities_MyUtilities__WEBPACK_IMPORTED_MODULE_7__["default"].getSessionData('user'));
        if (vUserData == null) {
            var vResult = yield new _utilities_APIRequestBuilder__WEBPACK_IMPORTED_MODULE_4__["default"]()
                .setPath(_constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_EMPLOYEE, new _model_PageModel__WEBPACK_IMPORTED_MODULE_3__["default"]())
                .getById(vToken.id);
            vUserData = vResult.data;
            _utilities_MyUtilities__WEBPACK_IMPORTED_MODULE_7__["default"].setSessionData('user', JSON.stringify(vUserData));
        }
        updateUserField(vUserData);
        // Photo upload modal trigger
        $("#button-upload").on('click', () => {
            $("#modal-upload").modal('show');
        });
        // Handle file upload from device
        $("#input-photo-upload").on('change', (event) => {
            var vFile = event.target.files[0];
            if (vFile != null) {
                var vReader = new FileReader();
                vReader.onload = (paramReaderEvent) => {
                    $("#img-photo-upload").attr('src', paramReaderEvent.target.result.toString());
                    gImageUser = vFile;
                };
                vReader.readAsDataURL(vFile);
            }
        });
        // Handle image URL input
        $("#input-photo-upload-text").on('change', (event) => __awaiter(this, void 0, void 0, function* () {
            _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_5__["default"].log(event.target.value);
            var vImageLink = event.target.value;
            var vImageSplit = vImageLink.split('.');
            $("#img-photo-upload").attr('src', event.target.value);
            gImageUser = yield convertImageUrlToFile(event.target.value);
        }));
        // Confirm photo upload
        $("#button-upload-confirm").on('click', () => __awaiter(this, void 0, void 0, function* () {
            if (gImageUser == null) {
                _utilities_MyUtilities__WEBPACK_IMPORTED_MODULE_7__["default"].showToast('error', _language__WEBPACK_IMPORTED_MODULE_2__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()].err_image_none);
                return;
            }
            _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_5__["default"].log('------ 1');
            _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_5__["default"].log('------ 2');
            var vUserData = _utilities_SecureAuth__WEBPACK_IMPORTED_MODULE_6__["default"].getUserInfo();
            var vApi = new _utilities_APIRequestBuilder__WEBPACK_IMPORTED_MODULE_4__["default"]()
                .setPath(_constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_EMPLOYEE, new _model_PageModel__WEBPACK_IMPORTED_MODULE_3__["default"]());
            yield vApi.updateSingle({ 'photo': gImageUser }, vUserData.id);
            var vUser = yield _utilities_SecureAuth__WEBPACK_IMPORTED_MODULE_6__["default"].getCurrentUser();
            _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_5__["default"].log("---- fetch user data:", JSON.stringify(vUser));
            $(".user-info img").attr('src', vUser.photo);
            $("#modal-upload").modal('hide');
            $("#img-user-photo").attr('src', vUserData.photo);
            $("#img-profile-pic").attr('src', vUserData.photo);
        }));
        // Account tab navigation
        $("#button-account").on('click', function () {
            $(this).siblings('div').css('left', '0%').css('opacity', 1);
            $(this).addClass('text-white');
            $('#button-estate').removeClass('text-white');
        });
        $(".button-edit-input").on('click', function () {
            var vDivInput = $(this).parent().siblings('div');
            var vInput = vDivInput.children('input');
            var vButton = vDivInput.children('button');
            console.log("Pressed:", vInput);
            vInput.removeAttr('disabled');
        });
    });
}
// REGION 3: Utility functions
/**
 * Convert an image URL to a File object for upload
 *
 * Fetches an image from the provided URL, converts it to a Blob,
 * and creates a File object suitable for form uploads. Automatically
 * detects and preserves the image format from the URL extension.
 *
 * @param {string} paramImageUrl - The complete URL of the image to convert
 * @returns {Promise<File>} Promise resolving to a File object with the image data
 * @throws {Error} If the image URL is invalid or fetch fails
 *
 * @example
 * const imageFile = await convertImageUrlToFile('https://example.com/photo.jpg');
 * // Returns File object named 'selectedImage.jpg'
 */
function convertImageUrlToFile(paramImageUrl) {
    return __awaiter(this, void 0, void 0, function* () {
        var vImageSplit = paramImageUrl.split('.');
        const format = vImageSplit[vImageSplit.length - 1];
        const response = yield fetch(paramImageUrl);
        const blob = yield response.blob();
        const file = new File([blob], 'selectedImage.' + format, { type: blob.type });
        return file;
    });
}
/**
 * Update user interface fields with profile data
 *
 * Populates all profile page form fields and statistics with the provided
 * user data. Updates both display elements and input fields including:
 * - Profile photos (multiple instances)
 * - Personal information (name, email, phone)
 * - Account statistics (posts count, views)
 * - Employment information (hire date)
 *
 * @param {EmployeeModel} paramData - The employee/user data object containing all profile information
 * @returns {void}
 *
 * @example
 * updateUserField(userData);
 * // Populates all profile fields with userData properties
 */
function updateUserField(paramData) {
    _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_5__["default"].log(paramData);
    $("#img-profile-pic").attr('src', paramData.photo);
    $("#img-user-photo").attr('src', paramData.photo);
    $("#input-email").val(paramData.email);
    $("#input-name-first").val(paramData.firstName);
    $("#input-name-last").val(paramData.lastName);
    $("#input-phone").val(paramData.homePhone);
    var vDateJoin = new Date(paramData['hireDate']);
    $("#input-date-join").val(vDateJoin.toLocaleString());
    $("#span-post-total").text(paramData['numRealEstates']);
    $("#span-post-today").text(paramData['numRealEstatesToday']);
    $("#span-view-total").text(paramData['viewRealEstates']);
}
// REGION 4: Page export
/**
 * Main profile page initialization function
 *
 * Loads the profile page template and initializes all profile functionality.
 * This is the entry point called by the routing system when navigating to
 * the profile page.
 *
 * Workflow:
 * 1. Fetches profile.html template
 * 2. Injects template into main container
 * 3. Initializes page with onLoad()
 *
 * @returns {Promise<void>} Promise that resolves when profile page is fully loaded and configured
 * @throws {Error} If template fetch fails or initialization errors occur
 */
function UserPage() {
    return __awaiter(this, void 0, void 0, function* () {
        var vHtml = yield fetch('/templates/profile.html').then(res => res.text());
        $("#main-container").html(vHtml);
        yield onLoad();
    });
}


/***/ })

}]);
//# sourceMappingURL=src_pages_profile_ts.bundle.js.map