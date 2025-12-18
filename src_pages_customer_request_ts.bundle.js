"use strict";
(self["webpackChunkadmin"] = self["webpackChunkadmin"] || []).push([["src_pages_customer_request_ts"],{

/***/ "./src/model/CustomerRequestModel.ts":
/*!*******************************************!*\
  !*** ./src/model/CustomerRequestModel.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerRequestStatus: () => (/* binding */ CustomerRequestStatus),
/* harmony export */   CustomerRequestType: () => (/* binding */ CustomerRequestType),
/* harmony export */   "default": () => (/* binding */ CustomerRequestModel)
/* harmony export */ });
class CustomerRequestModel {
    constructor() {
        this.id = 0;
        this.status = -1;
        this.type = -1;
        this.body = "";
        this.phone = "";
        this.note = "";
        this.createDate = null;
        this.updateDate = null;
        this.createBy = null;
        this.updateBy = null;
        this.requestBy = null;
    }
}
const CustomerRequestStatus = {
    0: "New",
    1: "In Progress",
    2: "Completed",
};
const CustomerRequestType = {
    0: "Support",
    1: "Complaint",
    2: "House Visit"
};


/***/ }),

/***/ "./src/pages/customer_request.ts":
/*!***************************************!*\
  !*** ./src/pages/customer_request.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlogPage)
/* harmony export */ });
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/APIConstants */ "./src/constants/APIConstants.ts");
/* harmony import */ var _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/webConstants */ "./src/constants/webConstants.ts");
/* harmony import */ var _utilities_Interaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/Interaction */ "./src/utilities/Interaction.ts");
/* harmony import */ var _model_CustomerRequestModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/CustomerRequestModel */ "./src/model/CustomerRequestModel.ts");
/* harmony import */ var _utilities_SecureAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utilities/SecureAuth */ "./src/utilities/SecureAuth.ts");
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
 * Design Unit Management Page
 *
 * This module handles the administrative interface for managing design unit data
 * in the real estate system. Design units are architectural and engineering firms
 * that provide design services for real estate development projects.
 *
 * Features:
 * - CRUD operations for design unit records
 * - Contact information management (multiple phones, fax, email, website)
 * - Address selection and management
 * - Tabbed form interface for organized data entry
 * - Table display with comprehensive contact information
 * - Form validation for required fields
 */
// REGION 1: Global variables and configuration
/** Primary API endpoint for design unit operations */
var gApiMainPath = _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_CUSTOMER_REQUEST;
var gApiParentPath = _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_EMPLOYEE;
var gTransformData = [
    {
        name: "type",
        to: "text",
        fields: _model_CustomerRequestModel__WEBPACK_IMPORTED_MODULE_4__.CustomerRequestType
    },
    {
        name: "status",
        to: "text",
        fields: _model_CustomerRequestModel__WEBPACK_IMPORTED_MODULE_4__.CustomerRequestStatus
    }
];
/**
 * Main page interaction controller configured for design unit management
 * Sets up the complete interface including model binding, API endpoints,
 * and view paths for design unit data
 */
var gPageInteraction = new _utilities_Interaction__WEBPACK_IMPORTED_MODULE_3__["default"]()
    .setModel(_model_CustomerRequestModel__WEBPACK_IMPORTED_MODULE_4__["default"])
    .setViewPath(_constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_CUSTOMER_REQUEST)
    .setTableDataTransform(...gTransformData);
// REGION 2: Element events
// (No direct element events - handled through PageInteraction framework)
// REGION 3: Event handlers
/**
 * Initialize and configure the design unit management page
 *
 * Sets up the complete page functionality including:
 * - Table structure with comprehensive contact information
 * - Address selection dropdown integration
 * - Form validation for required fields
 * - Tabbed interface for organized data entry
 * - Data transformation for address display
 * - API integration and event binding
 */
function onLoad() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        yield gPageInteraction
            .setPath(gApiMainPath)
            .setParentPath(gApiParentPath, (_a = _utilities_SecureAuth__WEBPACK_IMPORTED_MODULE_5__["default"].getUserInfo()) === null || _a === void 0 ? void 0 : _a.id)
            // Configure table columns to display comprehensive contact information
            .setTableHeaders('type', 'body', 'phone', 'status', 'note', 'createDate')
            .setIgnoreFields('createBy', 'updateBy', 'createDate', 'updateDate')
            // Create tabbed interface for organized data entry
            .setTextareaFields("body")
            .setDataToHeader('requestBy')
            .addSelectFields('requestBy', null, _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_CUSTOMER, null, false, 'contactName')
            .addSelectFields('status', _model_CustomerRequestModel__WEBPACK_IMPORTED_MODULE_4__.CustomerRequestStatus, null, null, true)
            .addSelectFields('type', _model_CustomerRequestModel__WEBPACK_IMPORTED_MODULE_4__.CustomerRequestType, null, null, true)
            // Initialize the page with all configurations
            .connectButton();
    });
}
// REGION 4: Common functions
/**
 * Main design unit page initialization function
 *
 * Loads the HTML template and initializes the design unit management interface.
 * This is the entry point called by the routing system.
 *
 * @returns Promise that resolves when page is fully loaded and configured
 */
function BlogPage() {
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
//# sourceMappingURL=src_pages_customer_request_ts.bundle.js.map