"use strict";
(self["webpackChunkadmin"] = self["webpackChunkadmin"] || []).push([["src_pages_master_layout_ts"],{

/***/ "./src/model/MasterLayoutModel.ts":
/*!****************************************!*\
  !*** ./src/model/MasterLayoutModel.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MasterLayoutModel)
/* harmony export */ });
class MasterLayoutModel {
    constructor() {
        this.id = 0;
        this.name = '';
        this.description = '';
        this.acreage = null;
        this.apartmentList = '';
        this.photo = '';
        this.createDate = null;
        this.updateDate = null;
    }
}


/***/ }),

/***/ "./src/pages/master_layout.ts":
/*!************************************!*\
  !*** ./src/pages/master_layout.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ masterLayoutPage)
/* harmony export */ });
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/APIConstants */ "./src/constants/APIConstants.ts");
/* harmony import */ var _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/webConstants */ "./src/constants/webConstants.ts");
/* harmony import */ var _utilities_Interaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/Interaction */ "./src/utilities/Interaction.ts");
/* harmony import */ var _model_MasterLayoutModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/MasterLayoutModel */ "./src/model/MasterLayoutModel.ts");
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
 * Master Layout Management Page
 *
 * This module handles the administrative interface for managing master layout data
 * within real estate projects. Master layouts represent the overall design and
 * structure plans for development projects, including apartment distributions
 * and spatial arrangements.
 *
 * Features:
 * - CRUD operations for master layout records
 * - Project association through dropdown selection
 * - Photo management for layout diagrams and plans
 * - Tabbed form interface for organized data entry
 * - Acreage and apartment list management
 * - Timestamp tracking for audit purposes
 */
// REGION 1: Global variables and configuration
/** Primary API endpoint for master layout operations */
var gApiMainPath = _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_MASTER_LAYOUT;
/** Parent API endpoint for project data (for project association) */
var gParentPath = _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_PROJECT;
var gDataTransform = [
    {
        name: "acreage",
        to: 'text',
        suffix: "m<sup>2</sup>",
    },
    {
        name: 'project',
        fields: 'name', // Display project name
        separator: ', '
    }
];
/**
 * Main page interaction controller configured for master layout management
 * Sets up the complete interface including model binding, API endpoints,
 * parent-child relationship with projects, and view paths
 */
var gPageInteraction = new _utilities_Interaction__WEBPACK_IMPORTED_MODULE_3__["default"]()
    .setModel(_model_MasterLayoutModel__WEBPACK_IMPORTED_MODULE_4__["default"])
    .setPath(gApiMainPath)
    .setParentPath(gParentPath, null)
    .setViewPath(_constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_MASTER_LAYOUT)
    .setTableDataTransform(...gDataTransform);
// REGION 2: Element events
// (No direct element events - handled through PageInteraction framework)
// REGION 3: Event handlers
/**
 * Initialize and configure the master layout management page
 *
 * Sets up the complete page functionality including:
 * - Table structure with layout and project information
 * - Tabbed interface for organized data entry
 * - Form validation for required fields
 * - Photo upload functionality for layout diagrams
 * - Project association dropdown
 * - Data transformation for project display
 * - API integration and event binding
 */
function onLoad() {
    return __awaiter(this, void 0, void 0, function* () {
        yield gPageInteraction
            // Configure table columns to display master layout information with timestamps
            .setTableHeaders('name', 'project', 'acreage', 'photo', 'createDate', 'updateDate')
            // Create tabbed interface for organized data entry
            .createTab(_language__WEBPACK_IMPORTED_MODULE_5__["default"][(0,___WEBPACK_IMPORTED_MODULE_6__.getLanguage)()].tab_data, 'name', 'description', 'acreage', 'apartmentList', 'project') // Basic layout information
            .createTab(_language__WEBPACK_IMPORTED_MODULE_5__["default"][(0,___WEBPACK_IMPORTED_MODULE_6__.getLanguage)()].tab_photo, 'photo') // Layout diagrams and plans
            // Set validation ru
            // les - layout name is mandatory
            .setRequiredFields('name')
            .addSelectFields('project', null, _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_PROJECT, null, true)
            // Configure photo upload field for layout diagrams
            .setPhotoFields('photo')
            // Exclude system-managed timestamp fields from form generation
            .setIgnoreFields('createDate', 'updateDate')
            // Configure project association dropdown
            // Configure project field to be sent as URL parameter for proper API routing
            .setDataToHeader('project')
            // Configure data transformation for better project display in table
            // Initialize the page with all configurations
            .connectButton();
    });
}
// REGION 4: Common functions
/**
 * Main master layout page initialization function
 *
 * Loads the HTML template and initializes the master layout management interface.
 * This is the entry point called by the routing system.
 *
 * @returns Promise that resolves when page is fully loaded and configured
 */
function masterLayoutPage() {
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
//# sourceMappingURL=src_pages_master_layout_ts.bundle.js.map