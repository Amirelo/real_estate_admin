"use strict";
(self["webpackChunkadmin"] = self["webpackChunkadmin"] || []).push([["src_pages_subscription_ts"],{

/***/ "./src/model/SubscriptionModel.ts":
/*!****************************************!*\
  !*** ./src/model/SubscriptionModel.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SubscriptionModel)
/* harmony export */ });
class SubscriptionModel {
    constructor() {
        this.id = 0;
        this.user = '';
        this.endPoint = '';
        this.publicKey = '';
        this.authenticationToken = '';
        this.contentEncoding = '';
    }
}


/***/ }),

/***/ "./src/pages/subscription.ts":
/*!***********************************!*\
  !*** ./src/pages/subscription.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ customerPage)
/* harmony export */ });
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/APIConstants */ "./src/constants/APIConstants.ts");
/* harmony import */ var _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/webConstants */ "./src/constants/webConstants.ts");
/* harmony import */ var _utilities_Interaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/Interaction */ "./src/utilities/Interaction.ts");
/* harmony import */ var _model_SubscriptionModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/SubscriptionModel */ "./src/model/SubscriptionModel.ts");
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
 * Subscription Management Page
 *
 * This module handles the administrative interface for managing push notification
 * subscriptions within the real estate admin system. It provides functionality
 * to view, create, edit, and delete subscription records that are used for
 * web push notifications.
 *
 * Features:
 * - CRUD operations for subscription records
 * - User association through employee dropdown
 * - Push notification configuration management
 * - Table display with subscription details
 * - Form validation for required subscription fields
 */
// REGION 1: Global variables and configuration
/** Primary API endpoint for subscription operations */
var gApiMainPath = _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_SUBSCRIPTION;
/**
 * Main page interaction controller configured for subscription management
 * Sets up the complete interface including model binding, API endpoints,
 * and data handling for push notification subscriptions
 */
var gPageInteraction = new _utilities_Interaction__WEBPACK_IMPORTED_MODULE_3__["default"]()
    .setModel(_model_SubscriptionModel__WEBPACK_IMPORTED_MODULE_4__["default"]) // Set the subscription data model for type safety
    .setPath(gApiMainPath); // Configure API path for subscription operations
var gDataTransform = [
    {
        name: 'user',
        fields: 'lastName,firstName',
        separator: ' '
    }
];
// REGION 2: Element events
// (No direct element events - handled through PageInteraction framework)
// REGION 3: Event handlers
/**
 * Initialize and configure the subscription management page
 *
 * Sets up the complete page functionality including:
 * - Table structure with subscription-specific columns
 * - Form validation for push notification requirements
 * - User dropdown for associating subscriptions with employees
 * - API integration and event binding
 */
function onLoad() {
    return __awaiter(this, void 0, void 0, function* () {
        yield gPageInteraction
            // Configure table columns to display subscription information
            .setTableHeaders('user', 'publicKey', 'authenticationToken', 'contentEncoding')
            // Set validation rules - core push notification fields are mandatory
            .setRequiredFields('publicKey', 'authenticationToken', 'contentEncoding', 'endPoint')
            // Configure user dropdown to associate subscriptions with employees
            .addSelectFields('user', null, _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_EMPLOYEE, null, true, 'firstName')
            .setTableDataTransform(...gDataTransform)
            // Initialize the page with all configurations
            .connectButton();
    });
}
// REGION 4: Common functions
/**
 * Main subscription page initialization function
 *
 * Loads the HTML template and initializes the subscription management interface.
 * This is the entry point called by the routing system.
 *
 * @returns Promise that resolves when page is fully loaded and configured
 */
function customerPage() {
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
//# sourceMappingURL=src_pages_subscription_ts.bundle.js.map