"use strict";
(self["webpackChunkadmin"] = self["webpackChunkadmin"] || []).push([["src_pages_page_detail2_ts"],{

/***/ "./src/model/ProjectModel.ts":
/*!***********************************!*\
  !*** ./src/model/ProjectModel.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectModel)
/* harmony export */ });
class ProjectModel {
    constructor() {
        this.id = -1;
        this.name = '';
        this.address = '';
        this.slogan = '';
        this.description = '';
        this.acreage = null;
        this.constructArea = null;
        this.numBlock = null;
        this.numFloors = '';
        this.numApartment = null;
        this.apartmentArea = '';
        this.investor = null;
        this.constructionContractor = null;
        this.designUnit = null;
        this.utilities = '';
        this.regionLink = '';
        this.photo = '';
        this.latitude = null;
        this.longtitude = null;
        this.masterLayouts = null;
        this.realEstates = null;
        this.province = null;
        this.district = null;
        this.ward = null;
        this.street = null;
    }
}


/***/ }),

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

/***/ "./src/pages/page_detail2.ts":
/*!***********************************!*\
  !*** ./src/pages/page_detail2.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MasterLayoutDetailPage)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/APIConstants */ "./src/constants/APIConstants.ts");
/* harmony import */ var _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/webConstants */ "./src/constants/webConstants.ts");
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../language */ "./src/language/index.ts");
/* harmony import */ var _model_ProjectModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/ProjectModel */ "./src/model/ProjectModel.ts");
/* harmony import */ var _model_RealEstateModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/RealEstateModel */ "./src/model/RealEstateModel.ts");
/* harmony import */ var _utilities_Interaction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilities/Interaction */ "./src/utilities/Interaction.ts");
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









// REGION 1: Global variables and configuration
/** Main page interaction controller for dynamic configuration */
var gInteraction = new _utilities_Interaction__WEBPACK_IMPORTED_MODULE_6__["default"]();
/**
 * Data transformation configuration for enhanced table display
 * Currently configured to display province name in related records
 */
var gTransformData = [
    {
        name: 'province',
        fields: 'name' // Display province name for location context
    }
];
/**
 * Dynamic Detail Page with Parent-Child Relationships
 *
 * This module handles dynamic detail pages that display child records filtered
 * by parent entity relationships. It analyzes URL parameters to determine
 * the parent-child relationship and configures the appropriate data display.
 *
 * Features:
 * - Dynamic URL parameter parsing for parent-child relationships
 * - Support for multiple entity types (Real Estate, Projects)
 * - Flexible parent filtering (Customer, Province, District)
 * - Automatic table configuration based on entity type
 * - Error handling with user feedback and navigation
 * - Search body configuration for filtered queries
 */
// REGION 2: Element events
// (No direct element events - handled through PageInteraction framework)
// REGION 3: Event handlers
// (Event handling managed by PageInteraction based on dynamic configuration)
// REGION 4: Common functions
/**
 * Initialize and configure the dynamic detail page
 *
 * Analyzes the current URL to determine:
 * 1. The child entity type to display (Real Estate or Projects)
 * 2. The parent entity and ID for filtering
 * 3. Appropriate API endpoints and search parameters
 *
 * Supports various parent-child relationships:
 * - Customer -> Real Estate properties
 * - Province -> Real Estate properties or Projects
 * - District -> Real Estate properties or Projects
 */
function onLoad() {
    return __awaiter(this, void 0, void 0, function* () {
        _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_7__["default"].log("Detail page 2");
        var vId = null;
        var vPath = null;
        // Validate URL matches expected detail page pattern
        var vMatch = _utilities_MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].validateDetailPagePath2();
        if (vMatch == null) {
            _utilities_MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].showToast("error", _language__WEBPACK_IMPORTED_MODULE_3__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()].err_path);
            return;
        }
        // Parse URL search parameters to find parent entity information
        var vUrlSearchParams = new URLSearchParams(window.location.search);
        _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_7__["default"].log("Search param:", vUrlSearchParams);
        // Validate search parameters exist
        if (vUrlSearchParams == null) {
            (0,___WEBPACK_IMPORTED_MODULE_0__["default"])(_constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_ADDRESS_MAP);
            _utilities_MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].showToast("error", _language__WEBPACK_IMPORTED_MODULE_3__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()].err_path);
            return;
        }
        if (vUrlSearchParams == null || vUrlSearchParams.size == 0) {
            (0,___WEBPACK_IMPORTED_MODULE_0__["default"])(_constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_ADDRESS_MAP);
            _utilities_MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].showToast("error", _language__WEBPACK_IMPORTED_MODULE_3__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()].err_path);
            return;
        }
        // Extract parent entity type and ID from URL parameters
        // Expected format: ?entity_id=123 (e.g., customer_id=456)
        var vIterator = vUrlSearchParams.entries();
        let result = vIterator.next();
        while (!result.done && vId == null) {
            var [key, value] = result.value;
            if (key.includes('_id')) {
                vId = value; // Extract parent entity ID
                vPath = key.split('_')[0]; // Extract parent entity type
            }
            result = vIterator.next();
        }
        // Validate that parent entity information was found
        if (vId == null) {
            _utilities_MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].showToast("error", _language__WEBPACK_IMPORTED_MODULE_3__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()].err_path);
            return;
        }
        // Configure page interaction based on child entity type
        switch (vMatch[1]) {
            case _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_REAL_ESTATE:
                // Configure Real Estate listings filtered by parent entity
                if (vPath == _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_CUSTOMER) {
                    // Show properties belonging to specific customer
                    gInteraction
                        .setParentPath(_constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_CUSTOMER, vId)
                        .setSearchBody({ "customerId": vId });
                }
                if (vPath == _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_PROVINCE) {
                    // Show properties in specific province
                    gInteraction
                        .setParentPath(_constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_PROVINCE, vId)
                        .setSearchBody({ "provinceId": vId });
                }
                if (vPath == _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_DISTRICT) {
                    // Show properties in specific district
                    gInteraction
                        .setParentPath(_constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_DISTRICT, vId)
                        .setSearchBody({ "districtId": vId });
                }
                // Configure Real Estate display
                gInteraction
                    .setModel(_model_RealEstateModel__WEBPACK_IMPORTED_MODULE_5__["default"])
                    .setPath(_constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_REAL_ESTATE)
                    .setTableHeaders('title', 'province')
                    .setTableDataTransform(...gTransformData)
                    .setViewPath(_constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_REAL_ESTATE);
                break;
            case _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_PROJECT:
                // Configure Project listings filtered by parent entity
                if (vPath == _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_PROVINCE) {
                    // Show projects in specific province
                    gInteraction
                        .setParentPath(_constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_PROVINCE, vId)
                        .setSearchBody({ "provinceId": vId });
                }
                if (vPath == _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_DISTRICT) {
                    // Show projects in specific district
                    gInteraction
                        .setParentPath(_constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_DISTRICT, vId)
                        .setSearchBody({ "districtId": vId });
                }
                // Configure Project display
                gInteraction
                    .setModel(_model_ProjectModel__WEBPACK_IMPORTED_MODULE_4__["default"])
                    .setPath(_constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_PROJECT)
                    .setTableHeaders('name', 'province')
                    .setTableDataTransform(...gTransformData)
                    .setViewPath(_constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_REAL_ESTATE);
                break;
            default:
                // Handle unsupported entity types
                _utilities_MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].showToast('error', _language__WEBPACK_IMPORTED_MODULE_3__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()].err_path);
                (0,___WEBPACK_IMPORTED_MODULE_0__["default"])(_constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_ADDRESS_MAP);
                return;
        }
        // Initialize the configured page interaction
        gInteraction.connectButton();
    });
}
/**
 * Main dynamic detail page initialization function
 *
 * Loads the detail page template and initializes the dynamic interface.
 * This is the entry point called by the routing system for parent-child
 * relationship views.
 *
 * @returns Promise that resolves when page is fully loaded and configured
 */
function MasterLayoutDetailPage() {
    return __awaiter(this, void 0, void 0, function* () {
        // Load the detail page template
        var vHtml = yield fetch('/templates/page_detail2.html')
            .then(res => res.text());
        // Inject template into main container
        $("#main-container").html(vHtml);
        // Initialize dynamic page functionality
        yield onLoad();
    });
}


/***/ })

}]);
//# sourceMappingURL=src_pages_page_detail2_ts.bundle.js.map