"use strict";
(self["webpackChunkadmin"] = self["webpackChunkadmin"] || []).push([["src_pages_real_estate_ts"],{

/***/ "./src/model/RealEstateModel.ts":
/*!**************************************!*\
  !*** ./src/model/RealEstateModel.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RealEstateFurniture: () => (/* binding */ RealEstateFurniture),
/* harmony export */   RealEstatePriceTime: () => (/* binding */ RealEstatePriceTime),
/* harmony export */   RealEstateRequest: () => (/* binding */ RealEstateRequest),
/* harmony export */   RealEstateStatus: () => (/* binding */ RealEstateStatus),
/* harmony export */   RealEstateType: () => (/* binding */ RealEstateType),
/* harmony export */   "default": () => (/* binding */ RealEstateModel)
/* harmony export */ });
const RealEstateStatus = {
    0: 'Unverified',
    1: 'Success',
    2: 'Sold',
    3: 'Taken down',
    4: 'Denied'
};
const RealEstateType = {
    0: 'Land',
    1: 'House',
    2: 'Apartment',
    3: 'Office',
    4: 'Buisness Premise',
    5: 'Boarding house'
};
const RealEstateFurniture = {
    0: 'Basic',
    1: 'Full',
    3: 'Unknown'
};
const RealEstateRequest = {
    0: 'Sell',
    3: 'Rent',
};
const RealEstatePriceTime = {
    0: 'Bình thường',
    1: 'Bán nhanh',
};
class RealEstateModel {
    constructor() {
        this.id = 0;
        this.title = '';
        this.type = null;
        this.request = null;
        this.address = '';
        this.price = null;
        this.priceMin = null;
        this.priceTime = null;
        this.createDate = null;
        this.acreage = null;
        this.direction = null;
        this.totalFloors = null;
        this.floorNumber = null;
        this.bath = null;
        this.apartCode = '';
        this.wallArea = null;
        this.bedroom = null;
        this.balcony = null;
        this.landscapeView = '';
        this.apartLoca = null;
        this.apartType = null;
        this.furnitureType = null;
        this.priceRent = null;
        this.returnRate = null;
        this.legalDoc = null;
        this.description = '';
        this.widthY = null;
        this.LongX = null;
        this.streetHouse = null;
        this.FSBO = null;
        this.viewNum = null;
        this.createBy = null;
        this.updateBy = null;
        this.shape = '';
        this.distanceToFacade = null;
        this.adjacentFacadeNum = null;
        this.adjactentRoad = '';
        this.alleyMinWidth = null;
        this.adjacentAlleyMinWidth = null;
        this.factor = null;
        this.structure = '';
        this.DTSXD = null;
        this.CLCL = null;
        this.priceCTXD = null;
        this.valueCTXD = null;
        this.photo = '';
        this.latitude = null;
        this.longtitude = null;
        this.street = null;
        this.province = null;
        this.district = null;
        this.ward = null;
        this.project = null;
        this.customer = null;
        this.addressFull = null;
        this.yearCreate = 0;
        this.monthCreate = 0;
        this.dayCreate = 0;
    }
}


/***/ }),

/***/ "./src/pages/real_estate.ts":
/*!**********************************!*\
  !*** ./src/pages/real_estate.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ realEstatePage)
/* harmony export */ });
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _constants_webConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/webConstants */ "./src/constants/webConstants.ts");
/* harmony import */ var _constants_APIConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/APIConstants */ "./src/constants/APIConstants.ts");
/* harmony import */ var _model_RealEstateModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/RealEstateModel */ "./src/model/RealEstateModel.ts");
/* harmony import */ var _utilities_Interaction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/Interaction */ "./src/utilities/Interaction.ts");
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
 * Real Estate Management Page
 *
 * This module handles the comprehensive administrative interface for managing
 * real estate property listings in the system. It provides extensive functionality
 * for property data entry, location management, and property details across
 * multiple categorized tabs.
 *
 * Features:
 * - Complete CRUD operations for real estate properties
 * - Multi-tab form interface for organized data entry
 * - Cascading location dropdowns (Province > District > Ward > Street)
 * - Customer and project associations
 * - Photo management with multiple image support
 * - Comprehensive property details (pricing, dimensions, features)
 * - Geographic coordinate management
 * - User-specific property listings based on authentication
 */
// REGION 1: Global variables and configuration
/** Primary API endpoint for real estate operations */
var gApiMainPath = _constants_APIConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_API_REAL_ESTATE;
/**
 * Main page interaction controller with comprehensive real estate configuration
 * Sets up the complete interface including model binding, API endpoints,
 * parent-child relationships for user-specific listings, and view paths
 */
var gPageInteraction = new _utilities_Interaction__WEBPACK_IMPORTED_MODULE_4__["default"]()
    .setModel(_model_RealEstateModel__WEBPACK_IMPORTED_MODULE_3__["default"])
    .setViewPath(_constants_webConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_REAL_ESTATE);
/**
 * Data transformation configuration for enhanced table display
 * Defines how related objects should be formatted in the table view
 */
var gTableTransform = [{
        name: 'province',
        fields: 'name, code', // Display province name and code
        separator: ', '
    },
    {
        name: 'ward',
        fields: 'prefix, name', // Display ward prefix and name
        separator: ' '
    },
    {
        name: 'district',
        fields: 'prefix, name', // Display district prefix and name
        separator: ' '
    },
    {
        name: 'customer',
        fields: 'contactName' // Display customer contact name
    }];
// REGION 2: Element events
// (No direct element events - handled through PageInteraction framework)
// REGION 3: Event handlers
/**
 * Initialize and configure the real estate management page
 *
 * Sets up the comprehensive page functionality including:
 * - Table structure with key property information
 * - Extensive tabbed form interface for organized data entry
 * - Complex cascading dropdown relationships for location data
 * - Form validation and field configuration
 * - Multi-image upload support
 * - API integration and event binding
 */
function onLoad() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        yield gPageInteraction
            .setPath(gApiMainPath)
            .setParentPath(_constants_APIConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_API_EMPLOYEE, (_a = _utilities_SecureAuth__WEBPACK_IMPORTED_MODULE_7__["default"].getUserInfo()) === null || _a === void 0 ? void 0 : _a.id)
            // Configure table columns to display essential property information
            .setTableHeaders('title', 'customer', 'province', 'ward', 'district')
            // Apply data transformations for better display of related objects
            .setTableDataTransform(...gTableTransform)
            // Set validation rules - title and type are mandatory
            .setRequiredFields('title', 'type')
            // Configure multi-line text input for property descriptions
            .setTextareaFields('description')
            .addSelectFields('request', _model_RealEstateModel__WEBPACK_IMPORTED_MODULE_3__.RealEstateRequest, null, null, true)
            .addSelectFields('type', _model_RealEstateModel__WEBPACK_IMPORTED_MODULE_3__.RealEstateType, null, null, true)
            .addSelectFields('priceTime', _model_RealEstateModel__WEBPACK_IMPORTED_MODULE_3__.RealEstatePriceTime, null, null, true)
            // Configure photo upload with multiple image support
            .setPhotoFields('photo')
            // Create comprehensive tabbed interface for organized data entry
            .createTab(_language__WEBPACK_IMPORTED_MODULE_5__["default"][(0,___WEBPACK_IMPORTED_MODULE_6__.getLanguage)()].tab_r1, 'title', 'type', 'request', 'description', 'price', 'priceTime', 'direction') // Property basics
            .createTab(_language__WEBPACK_IMPORTED_MODULE_5__["default"][(0,___WEBPACK_IMPORTED_MODULE_6__.getLanguage)()].tab_r2, 'bath', 'bedroom', 'balcony', 'acreage', 'furnitureType', 'widthY', 'LongX', 'latitude', 'longtitude') // Building details
            .createTab(_language__WEBPACK_IMPORTED_MODULE_5__["default"][(0,___WEBPACK_IMPORTED_MODULE_6__.getLanguage)()].tab_r3, 'customer', 'project', 'province', 'district', 'ward', 'street', 'address') // Location details
            .createTab(_language__WEBPACK_IMPORTED_MODULE_5__["default"][(0,___WEBPACK_IMPORTED_MODULE_6__.getLanguage)()].tab_photo, 'photo') // Image management
            .createTab(_language__WEBPACK_IMPORTED_MODULE_5__["default"][(0,___WEBPACK_IMPORTED_MODULE_6__.getLanguage)()].tab_r4, 'priceMin', 'priceRent', 'totalFloors', 'floorNumber', 'apartLoca', 'apartType', 'apartCode', 'wallArea', 'landscapeView', 'factor', 'returnRate') // Extended property data
            .createTab(_language__WEBPACK_IMPORTED_MODULE_5__["default"][(0,___WEBPACK_IMPORTED_MODULE_6__.getLanguage)()].tab_r5, 'distanceToFacade', 'adjacentFacadeNum', 'alleyMinWidth', 'adjacentAlleyMinWidth', 'streetHouse', 'DTSXD', 'priceCTXD', 'valueCTXD', 'FSBO', 'adjactentRoad') // Advanced property metrics
            .createTab(_language__WEBPACK_IMPORTED_MODULE_5__["default"][(0,___WEBPACK_IMPORTED_MODULE_6__.getLanguage)()].tab_r6) // Reserved for future expansion
            // Enable multiple image selection
            .isSingleImage(false)
            // Exclude system-managed fields from form generation
            .setIgnoreFields('createDate', 'updateBy', 'createBy', 'viewNum', 'addressFull')
            // Configure complex cascading dropdown relationships for location hierarchy
            .addSelectFields('province', null, _constants_APIConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_API_PROVINCE, null, true) // Root level
            .addSelectFields('district', null, _constants_APIConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_API_DISTRICT, _constants_APIConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_API_PROVINCE, true, 'name', 'province') // Depends on province
            .addSelectFields('ward', null, _constants_APIConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_API_WARD, _constants_APIConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_API_DISTRICT, true, 'name', 'district') // Depends on district
            .addSelectFields('street', null, _constants_APIConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_API_STREET, _constants_APIConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_API_DISTRICT, true, 'name', 'district') // Depends on district
            // Configure entity relationship dropdowns
            .addSelectFields('customer', null, _constants_APIConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_API_CUSTOMER, null, true, 'contactName')
            .addSelectFields('project', null, _constants_APIConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_API_PROJECT, null, true)
            // Configure fields to be sent as URL parameters for proper API routing
            .setDataToHeader("province", "district", "ward", "street", "customer", "project")
            // Initialize the page with all configurations
            .connectButton();
    });
}
// REGION 4: Common functions
/**
 * Main real estate page initialization function
 *
 * Loads the HTML template and initializes the real estate management interface.
 * This is the entry point called by the routing system.
 *
 * @returns Promise that resolves when page is fully loaded and configured
 */
function realEstatePage() {
    return __awaiter(this, void 0, void 0, function* () {
        // Load the standard entity management template
        const vHtml = yield fetch(_constants_webConstants__WEBPACK_IMPORTED_MODULE_1__.FOLDER_TEMPLATE + _constants_webConstants__WEBPACK_IMPORTED_MODULE_1__.TEMPLATE_VIEW_ENTITY)
            .then(res => res.text());
        // Inject template into main container
        $("#main-container").html(vHtml);
        // Initialize page functionality
        yield onLoad();
    });
}


/***/ })

}]);
//# sourceMappingURL=src_pages_real_estate_ts.bundle.js.map