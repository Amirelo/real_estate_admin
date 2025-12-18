"use strict";
(self["webpackChunkadmin"] = self["webpackChunkadmin"] || []).push([["src_pages_page_detail_ts"],{

/***/ "./src/pages/page_detail.ts":
/*!**********************************!*\
  !*** ./src/pages/page_detail.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MasterLayoutDetailPage)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/APIConstants */ "./src/constants/APIConstants.ts");
/* harmony import */ var _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/webConstants */ "./src/constants/webConstants.ts");
/* harmony import */ var _utilities_Interaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/Interaction */ "./src/utilities/Interaction.ts");
/* harmony import */ var _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/MyLogger */ "./src/utilities/MyLogger.ts");
/* harmony import */ var _utilities_MyUtilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utilities/MyUtilities */ "./src/utilities/MyUtilities.ts");
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
 * Universal Entity Detail Page
 *
 * This module provides a universal detail page handler that can display
 * detailed information for any entity type in the system. It dynamically
 * determines the entity type from the URL path and configures the appropriate
 * API endpoint for data retrieval.
 *
 * Features:
 * - Dynamic entity type detection from URL patterns
 * - Universal detail view for all system entities
 * - Automatic API endpoint mapping
 * - Error handling with user feedback
 * - Fallback navigation for invalid paths
 *
 * Supported Entity Types:
 * - Master Layouts, Construction Contractors, Design Units
 * - Investors, Region Links, Utilities
 * - Geographic entities (Districts, Provinces, Wards, Streets)
 * - Projects, Real Estate properties
 * - Users (Customers, Employees)
 * - Subscriptions
 */
// REGION 1: Global variables and configuration
/** Universal page interaction controller for detail view display */
var gInteraction = new _utilities_Interaction__WEBPACK_IMPORTED_MODULE_3__["default"]();
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
// REGION 2: Element events
// (No direct element events - handled through PageInteraction framework)
// REGION 3: Event handlers
// (Event handling managed by PageInteraction based on entity type)
// REGION 4: Common functions
/**
 * Initialize and configure the universal detail page
 *
 * Analyzes the current URL to determine the entity type and ID,
 * then configures the appropriate API endpoint for data retrieval.
 * Uses a comprehensive switch statement to map URL paths to API endpoints.
 */
function onLoad() {
    return __awaiter(this, void 0, void 0, function* () {
        // Validate URL matches expected detail page pattern (/entity/id)
        var vMatch = _utilities_MyUtilities__WEBPACK_IMPORTED_MODULE_5__["default"].validateDetailPagePath();
        if (vMatch == null) {
            return;
        }
        // Map entity path to corresponding API endpoint
        switch (vMatch[1]) {
            case _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_MASTER_LAYOUT:
                gInteraction.setPath(_constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_MASTER_LAYOUT)
                    .setTableDataTransform(...gDataTransform);
                break;
            case _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_CONSTRUCTION_CONTRACTOR:
                gInteraction.setPath(_constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_CONSTRUCTION_CONTRACTOR);
                break;
            case _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_DESIGN_UNIT:
                gInteraction.setPath(_constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_DESIGN_UNIT);
                break;
            case _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_INVESTOR:
                gInteraction.setPath(_constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_INVESTOR);
                break;
            case _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_REGION_LINK:
                gInteraction.setPath(_constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_REGION_LINK);
                break;
            case _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_UTILITY:
                gInteraction.setPath(_constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_UTILITIES);
                break;
            case _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_DISTRICT:
                gInteraction.setPath(_constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_DISTRICT);
                break;
            case _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_PROVINCE:
                gInteraction.setPath(_constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_PROVINCE);
                break;
            case _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_WARD:
                gInteraction.setPath(_constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_WARD);
                break;
            case _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_STREET:
                gInteraction.setPath(_constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_STREET);
                break;
            case _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_PROJECT:
                gInteraction.setPath(_constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_PROJECT);
                break;
            case _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_REAL_ESTATE:
                gInteraction.setPath(_constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_REAL_ESTATE);
                break;
            case _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_SUBSCRIPTION:
                gInteraction.setPath(_constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_SUBSCRIPTION);
                break;
            case _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_CUSTOMER:
                gInteraction.setPath(_constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_CUSTOMER);
                break;
            case _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_EMPLOYEE:
                gInteraction.setPath(_constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_EMPLOYEE);
                break;
            case _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_CUSTOMER_REQUEST:
                gInteraction.setPath(_constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_CUSTOMER_REQUEST);
                break;
            case _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_BLOG:
                gInteraction.setPath(_constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_BLOG);
                break;
            default:
                // Handle unsupported entity types with user feedback
                _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_4__["default"].log("Path not found");
                (0,___WEBPACK_IMPORTED_MODULE_0__["default"])(_constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_ADDRESS_MAP);
        }
        // Initialize the detail page with configured API endpoint
        gInteraction
            .connectButton();
    });
}
/**
 * Main universal detail page initialization function
 *
 * Loads the detail page template and initializes the universal interface.
 * This is the entry point called by the routing system for individual
 * entity detail views.
 *
 * @returns Promise that resolves when page is fully loaded and configured
 */
function MasterLayoutDetailPage() {
    return __awaiter(this, void 0, void 0, function* () {
        // Load the universal detail page template
        var vHtml = yield fetch('/templates/page_detail.html').then(res => res.text());
        // Inject template into main container
        $("#main-container").html(vHtml);
        // Initialize universal detail page functionality
        yield onLoad();
    });
}


/***/ })

}]);
//# sourceMappingURL=src_pages_page_detail_ts.bundle.js.map