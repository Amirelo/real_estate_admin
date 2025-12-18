"use strict";
(self["webpackChunkadmin"] = self["webpackChunkadmin"] || []).push([["src_pages_settings_ts"],{

/***/ "./src/pages/settings.ts":
/*!*******************************!*\
  !*** ./src/pages/settings.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SettingsPage)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _constants_webConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/webConstants */ "./src/constants/webConstants.ts");
/* harmony import */ var _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/MyLogger */ "./src/utilities/MyLogger.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



// REGION 1: Global variables
// REGION 2: Element events
// REGION 3: Event handlers
/**
 * Application Settings Page
 *
 * This module handles the user interface for application configuration settings.
 * Currently focused on language/localization preferences, with potential for
 * expansion to include other user preferences and system configurations.
 *
 * Features:
 * - Language selection and switching
 * - Real-time language preference updates
 * - Persistent language settings across sessions
 * - Simple and intuitive settings interface
 */
/**
 * Initialize page event handlers and load current settings
 *
 * Sets up the settings interface by loading current language preference
 * and binding change handlers for real-time updates.
 */
function onLoad() {
    // Load and display current language setting in the dropdown
    $("#select-language").val((0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)());
    // Bind language change handler for immediate preference updates
    $("#select-language").on('change', function () {
        var vSelectedLanguage = $(this).val();
        _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_2__["default"].log("--- change language to:", vSelectedLanguage);
        // Apply new language setting across the application
        (0,___WEBPACK_IMPORTED_MODULE_0__.changeLanguage)(vSelectedLanguage);
    });
}
// REGION 4: Common functions
/**
 * Main settings page initialization function
 *
 * Loads the settings template and initializes the configuration interface.
 * This is the entry point called by the routing system.
 *
 * @returns Promise that resolves when page is fully loaded and configured
 */
function SettingsPage() {
    return __awaiter(this, void 0, void 0, function* () {
        (0,___WEBPACK_IMPORTED_MODULE_0__.setLoadingStatus)(true);
        // Load the settings page template
        var vHtml = yield fetch(_constants_webConstants__WEBPACK_IMPORTED_MODULE_1__.FOLDER_TEMPLATE + _constants_webConstants__WEBPACK_IMPORTED_MODULE_1__.TEMPLATE_SETTING)
            .then(res => res.text());
        // Inject template into main container (replace existing content)
        $("#main-container").html(vHtml);
        _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_2__["default"].log("-setting page");
        // Initialize page functionality and event handlers
        onLoad();
        (0,___WEBPACK_IMPORTED_MODULE_0__.setLoadingStatus)(false);
    });
}


/***/ })

}]);
//# sourceMappingURL=src_pages_settings_ts.bundle.js.map