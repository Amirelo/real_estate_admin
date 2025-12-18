"use strict";
(self["webpackChunkadmin"] = self["webpackChunkadmin"] || []).push([["src_pages_region_link_ts"],{

/***/ "./src/model/RegionLink.ts":
/*!*********************************!*\
  !*** ./src/model/RegionLink.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RegionLink)
/* harmony export */ });
class RegionLink {
    constructor() {
        this.id = 0;
        this.name = '';
        this.description = '';
        this.photo = '';
        this.address = '';
        this.latitude = -1;
        this.longtitude = -1;
    }
}


/***/ }),

/***/ "./src/pages/region_link.ts":
/*!**********************************!*\
  !*** ./src/pages/region_link.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ regionLinkPage)
/* harmony export */ });
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/APIConstants */ "./src/constants/APIConstants.ts");
/* harmony import */ var _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/webConstants */ "./src/constants/webConstants.ts");
/* harmony import */ var _utilities_Interaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/Interaction */ "./src/utilities/Interaction.ts");
/* harmony import */ var _model_RegionLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/RegionLink */ "./src/model/RegionLink.ts");
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../language */ "./src/language/index.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! .. */ "./src/index.ts");
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
 * Region Link Management Page
 *
 * This module handles the administrative interface for managing region link data,
 * which represents geographical regions or areas of interest with coordinates
 * and associated information. These links are used for mapping and location-based
 * features in the real estate system.
 *
 * Features:
 * - CRUD operations for region link records
 * - Geographic coordinate management (latitude/longitude)
 * - Photo upload and management
 * - Tabbed form interface for organized data entry
 * - Textarea support for detailed descriptions
 * - Form validation for required geographic data
 */
// REGION 1: Global variables and configuration
/** Primary API endpoint for region link operations */
var gApiMainPath = _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_REGION_LINK;
/**
 * Main page interaction controller configured for region link management
 * Sets up the complete interface including model binding, API endpoints,
 * and view paths for geographic region data
 */
var gPageInteraction = new _utilities_Interaction__WEBPACK_IMPORTED_MODULE_3__["default"]()
    .setModel(_model_RegionLink__WEBPACK_IMPORTED_MODULE_4__["default"])
    .setPath(gApiMainPath)
    .setViewPath(_constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_REGION_LINK);
// REGION 2: Element events
// (No direct element events - handled through PageInteraction framework)
// REGION 3: Event handlers
/**
 * Initialize and configure the region link management page
 *
 * Sets up the complete page functionality including:
 * - Table structure with geographic coordinate columns
 * - Form validation for required location data
 * - Textarea configuration for descriptions
 * - Photo upload functionality
 * - Tabbed interface for organized data entry
 * - API integration and event binding
 */
function onLoad() {
    return __awaiter(this, void 0, void 0, function* () {
        yield gPageInteraction
            // Configure table columns to display region information with coordinates
            .setTableHeaders('name', 'photo', 'latitude', 'longtitude')
            // Set validation rules for geographic and descriptive data
            .setRequiredFields("name", "description", "latitude", "longtitude")
            // Configure multi-line text input for detailed descriptions
            .setTextareaFields('description')
            // Configure photo upload field for region images
            .setPhotoFields('photo')
            // Create tabbed interface for organized data entry
            .createTab(_language__WEBPACK_IMPORTED_MODULE_5__["default"][(0,___WEBPACK_IMPORTED_MODULE_6__.getLanguage)()].tab_important, "name", "description", "address", "latitude", "longtitude") // Essential information tab
            .createTab(_language__WEBPACK_IMPORTED_MODULE_5__["default"][(0,___WEBPACK_IMPORTED_MODULE_6__.getLanguage)()].tab_photo, "photo") // Image upload tab
            // Initialize the page with all configurations
            .connectButton();
        // Additional configuration override (Note: this seems redundant)
        // TODO: Review if this override is necessary or should be removed
        // .generateOptionalFields() // Commented out - legacy code
    });
}
// REGION 4: Common functions
/**
 * Main region link page initialization function
 *
 * Loads the HTML template and initializes the region link management interface.
 * This is the entry point called by the routing system.
 *
 * @returns Promise that resolves when page is fully loaded and configured
 */
function regionLinkPage() {
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
//# sourceMappingURL=src_pages_region_link_ts.bundle.js.map