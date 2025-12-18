"use strict";
(self["webpackChunkadmin"] = self["webpackChunkadmin"] || []).push([["src_pages_dashboard_ts"],{

/***/ "./src/components/card/CardDashboard.ts":
/*!**********************************************!*\
  !*** ./src/components/card/CardDashboard.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CardDashboard)
/* harmony export */ });
/* harmony import */ var _constants_DataConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/DataConstants */ "./src/constants/DataConstants.ts");
/* harmony import */ var _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/MyLogger */ "./src/utilities/MyLogger.ts");
/**
 * CardDashboard - Custom Web Component for Dashboard Metric Cards
 *
 * This component creates interactive dashboard cards that display key performance
 * indicators with dynamic styling based on metric values. It supports two-line
 * data display with automatic color coding for positive/negative trends and
 * internationalization capabilities.
 *
 * Features:
 * - Dynamic metric display with trend-based color coding
 * - Two-line data layout for related metrics
 * - Internationalization support with data attributes
 * - Automatic styling based on positive/negative values
 * - Fluent interface for easy configuration
 * - Responsive Bootstrap grid integration
 *
 * @example
 * ```typescript
 * const card = document.createElement('card-dashboard') as CardDashboard;
 * card.setTitle('Sales Overview')
 *     .setLine1(25, 'new customers')
 *     .setLine2(-5, 'cancellations')
 *     .setLangData('dashboard.sales');
 * ```
 */


class CardDashboard extends HTMLElement {
    /**
     * Creates a new CardDashboard instance.
     */
    constructor() {
        super();
        // this.render()
    }
    /**
     * Web Component lifecycle callback invoked when element is added to DOM.
     * Triggers the initial rendering of the card.
     */
    connectedCallback() {
        this.render();
    }
    /**
     * Set the card title and update display
     *
     * @param title - Title text to display in card header
     * @returns This instance for method chaining
     */
    setTitle(title) {
        _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_1__["default"].log(this);
        this.title = title;
        $(this).find('h5').text(this.title);
        return this;
    }
    /**
     * Set the first metric line with automatic trend styling
     *
     * Displays the amount with a '+' prefix. Positive values show in green,
     * negative in red, and zero in gray.
     *
     * @param amount - Numeric value (positive=green, negative=red, zero=gray)
     * @param text - Description text for the metric
     * @returns This instance for method chaining
     */
    setLine1(amount, text) {
        this.amount1 = amount;
        this.text1 = text;
        var vText = $(this).find('p:first-of-type');
        if (vText.length == 0) {
            return this;
        }
        // Display absolute value with '+' prefix
        vText.html('+ ' + Math.abs(this.amount1) + ' ' + this.text1);
        // Apply trend-based styling
        if (amount > 0) {
            vText.addClass('text-success font-weight-bold');
            vText.removeClass('text-secondary');
            return this;
        }
        if (amount < 0) {
            vText.addClass('text-danger font-weight-bold');
            vText.removeClass('text-secondary');
            return this;
        }
        // Neutral styling for zero values
        vText.addClass('text-secondary');
        vText.removeClass('text-success text-danger font-weight-bold');
        return this;
    }
    /**
     * Set the second metric line with automatic trend styling
     *
     * Displays the amount with a '+' prefix. Positive values show in green,
     * negative in red, and zero in gray.
     *
     * @param amount - Numeric value (positive=green, negative=red, zero=gray)
     * @param text - Description text for the metric
     * @returns This instance for method chaining
     */
    setLine2(amount, text) {
        this.amount2 = amount;
        this.text2 = text;
        var vText = $(this).find('p:last-of-type');
        if (vText.length == 0) {
            return this;
        }
        // Display absolute value with '+' prefix
        vText.html('+ ' + Math.abs(this.amount2) + ' ' + this.text2);
        // Apply trend-based styling
        if (amount > 0) {
            vText.addClass('text-success font-weight-bold');
            vText.removeClass('text-secondary');
            return this;
        }
        if (amount < 0) {
            vText.addClass('text-danger font-weight-bold');
            vText.removeClass('text-secondary');
            return this;
        }
        // Neutral styling for zero values
        vText.addClass('text-secondary');
        vText.removeClass('text-success text-danger font-weight-bold');
        return this;
    }
    /**
     * Configure internationalization data attributes
     *
     * Sets data-lang-text attributes for dynamic translation. Automatically
     * appends "_line1" and "_line2" suffixes to the base key.
     *
     * @param langData - Base language key for i18n lookup (e.g., 'dashboard.sales')
     * @returns This instance for method chaining
     */
    setLangData(langData) {
        this.langData = langData;
        _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_1__["default"].log("lang data - setup:", this.langData);
        // Set i18n data attributes for dynamic translation
        $(this).find('h5').data(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_0__.DATA_LANGUAGE, this.langData);
        $(this).find('p:first-of-type').data(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_0__.DATA_LANGUAGE, this.langData + "_line1");
        $(this).find('p:last-of-type').data(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_0__.DATA_LANGUAGE, this.langData + "_line2");
        return this;
    }
    /**
     * Render the complete dashboard card with styling and content
     *
     * Creates the card structure with responsive layout, applies trend-based
     * styling, and configures internationalization attributes. Called automatically
     * by connectedCallback when the element is added to the DOM.
     *
     * @private
     */
    render() {
        // Apply responsive grid classes and styling
        this.classList.add(...'col-md-3 col-12 p-2'.split(' '));
        this.style.width = 'fit-content';
        // Create main card container with Bootstrap styling
        var vDivCardBody = $("<div>")
            .addClass("border rounded-lg p-2 bg-light card-dashboard h-100");
        // Create card elements
        var vTitle = $("<h5>").text(this.title);
        // First metric line with amount and description
        var vLine1 = $("<div>");
        var vTextAmount1 = $("<span>").addClass('pr-1').text('+' +
            Math.abs(this.amount1));
        var vTextDescription1 = $("<span>").text(this.text1);
        // Second metric line with amount and description
        var vLine2 = $("<div>");
        var vTextAmount2 = $("<span>").addClass('pr-1').text('+' +
            Math.abs(this.amount2));
        var vTextDescription2 = $("<span>").text(this.text2);
        // Assemble card structure
        vLine1.append(vTextAmount1, vTextDescription1);
        vLine2.append(vTextAmount2, vTextDescription2);
        vDivCardBody.append(vTitle, vLine1, vLine2);
        this.append(vDivCardBody.get()[0]);
        // Configure internationalization data attributes
        _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_1__["default"].log("---- lang data:", this.langData);
        vTitle.data(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_0__.DATA_LANGUAGE, this.langData);
        vTextDescription1.data(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_0__.DATA_LANGUAGE, this.langData + "_line1");
        vTextDescription2.data(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_0__.DATA_LANGUAGE, this.langData + "_line2");
        // Apply trend-based styling for first line
        if (this.amount1 > 0) {
            vLine1.addClass('text-success font-weight-bold');
            vLine1.removeClass('text-secondary');
        }
        else if (this.amount1 < 0) {
            vLine1.addClass('text-danger font-weight-bold');
            vLine1.removeClass('text-secondary');
        }
        // Apply trend-based styling for second line
        if (this.amount2 > 0) {
            vLine2.addClass('text-success font-weight-bold');
            vLine2.removeClass('text-secondary');
        }
        else if (this.amount2 < 0) {
            vLine2.addClass('text-danger font-weight-bold');
            vLine2.removeClass('text-secondary');
        }
    }
}
if (customElements.get('card-dashboard') == null) {
    customElements.define('card-dashboard', CardDashboard);
}


/***/ }),

/***/ "./src/pages/dashboard.ts":
/*!********************************!*\
  !*** ./src/pages/dashboard.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dashboardPage)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _components_card_CardDashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/card/CardDashboard */ "./src/components/card/CardDashboard.ts");
/* harmony import */ var _components_buttons_ImageButon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/buttons/ImageButon */ "./src/components/buttons/ImageButon.ts");
/* harmony import */ var _components_table_TableRowComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/table/TableRowComponent */ "./src/components/table/TableRowComponent.ts");
/* harmony import */ var _constants_APIConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/APIConstants */ "./src/constants/APIConstants.ts");
/* harmony import */ var _constants_webConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/webConstants */ "./src/constants/webConstants.ts");
/* harmony import */ var _model_PageModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/PageModel */ "./src/model/PageModel.ts");
/* harmony import */ var _utilities_APIRequestBuilder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utilities/APIRequestBuilder */ "./src/utilities/APIRequestBuilder.ts");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/chart.js");
/* harmony import */ var _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utilities/MyLogger */ "./src/utilities/MyLogger.ts");
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../language */ "./src/language/index.ts");
/* harmony import */ var _utilities_SecureAuth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utilities/SecureAuth */ "./src/utilities/SecureAuth.ts");
/* harmony import */ var _constants_DataConstants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../constants/DataConstants */ "./src/constants/DataConstants.ts");
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
 * Dashboard Page - Real Estate Analytics and Overview
 *
 * This module provides a comprehensive dashboard interface for the real estate
 * admin system, displaying key metrics, analytics, and quick access to important
 * data. It features interactive charts, data cards, and management tools.
 *
 * Features:
 * - Real-time analytics cards with key metrics
 * - Interactive doughnut charts for province-based data
 * - Unverified real estate listings management
 * - Role-based dashboard content
 * - Quick navigation to verification workflows
 * - Chart.js integration for data visualization
 */
// REGION 1: Global variables and configuration
/** Register Chart.js components for doughnut chart functionality */
chart_js__WEBPACK_IMPORTED_MODULE_8__.Chart.register([chart_js__WEBPACK_IMPORTED_MODULE_8__.DoughnutController, chart_js__WEBPACK_IMPORTED_MODULE_8__.ArcElement, chart_js__WEBPACK_IMPORTED_MODULE_8__.Legend, chart_js__WEBPACK_IMPORTED_MODULE_8__.Tooltip]);
// REGION 2: Element events
// (Event binding handled in specific functions)
// REGION 3: Event handlers
/**
 * Initialize and load dashboard data
 *
 * Orchestrates the complete dashboard setup including:
 * - User authentication and role verification
 * - Dashboard data fetching from API
 * - Dynamic content generation based on user role
 * - Chart and card updates with real-time data
 */
function onLoad() {
    return __awaiter(this, void 0, void 0, function* () {
        // Fetch comprehensive dashboard data from API
        var vDashboard = yield getUserDashboardData();
        _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_9__["default"].log("---- dashboard result:", vDashboard);
        // Get current user information for role-based customization
        var vUserInfo = _utilities_SecureAuth__WEBPACK_IMPORTED_MODULE_11__["default"].getUserInfo();
        _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_9__["default"].log("--- user data:", vUserInfo);
        var vCurrentUser = yield (new _utilities_APIRequestBuilder__WEBPACK_IMPORTED_MODULE_7__["default"]()
            .setPath(_constants_APIConstants__WEBPACK_IMPORTED_MODULE_4__.PATH_API_EMPLOYEE, new _model_PageModel__WEBPACK_IMPORTED_MODULE_6__["default"]()).getById(vUserInfo.id));
        if (vCurrentUser == null) {
            (0,___WEBPACK_IMPORTED_MODULE_0__["default"])(_constants_webConstants__WEBPACK_IMPORTED_MODULE_5__.PATH_DEFAULT);
        }
        _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_9__["default"].log("-- user data:", vCurrentUser);
        // Update dashboard components with fetched data
        updateCardData(vDashboard.data);
        getUnverifiedRealEstates(vDashboard.data.currentUserRSNotVerified);
        getTop5Provinces(vDashboard.data.topPostProvinces);
        getTopViewProvinces(vDashboard.data.topViewProvinces);
        getTopSellProvinces(vDashboard.data.topSellProvinces);
        yield getUserRequireHelp();
        // Hide loading indicator once dashboard is ready
        $("#div-loading").removeClass('d-flex').addClass('d-none');
    });
}
/**
 * Handle view button clicks for real estate verification
 * Navigates to the verification page for the selected property
 */
function onButtonViewClick() {
    var vId = this.getAttribute('view-id');
    (0,___WEBPACK_IMPORTED_MODULE_0__["default"])(_constants_webConstants__WEBPACK_IMPORTED_MODULE_5__.PATH_REAL_ESTATE + '/' + vId + '/verify');
}
// REGION 4: Common functions
/**
 * Fetches the comprehensive dashboard data from the API
 *
 * Retrieves all necessary metrics and statistics for the dashboard including:
 * - User-specific real estate data
 * - Customer statistics
 * - Property verification status
 * - Provincial analytics
 *
 * @returns {Promise<any>} Promise resolving to the dashboard data object containing all metrics
 */
function getUserDashboardData() {
    return __awaiter(this, void 0, void 0, function* () {
        var vApi = new _utilities_APIRequestBuilder__WEBPACK_IMPORTED_MODULE_7__["default"]().setPath(_constants_APIConstants__WEBPACK_IMPORTED_MODULE_4__.PATH_API_EMPLOYEE, new _model_PageModel__WEBPACK_IMPORTED_MODULE_6__["default"]());
        return yield vApi.getDashboard();
    });
}
/**
 * Update dashboard metric cards with current data
 *
 * Creates and displays key performance indicator cards showing:
 * - Customer growth metrics (weekly/monthly)
 * - Customer request volumes
 * - New property listings
 * - Properties requiring verification
 *
 * @param paramData - Dashboard data object containing all metrics
 */
function updateCardData(paramData) {
    $("#span-verify-total").text();
    _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_9__["default"].log('---- update');
    // Customer growth metrics card
    var vCardCustomer = new _components_card_CardDashboard__WEBPACK_IMPORTED_MODULE_1__["default"]()
        .setLangData('dashboard_card1')
        .setTitle('Customer')
        .setLine1(paramData.newCustomerWeek, ' ' + _language__WEBPACK_IMPORTED_MODULE_10__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()].text_dashboard_customer_week)
        .setLine2(paramData.newCustomerMonth, ' ' + _language__WEBPACK_IMPORTED_MODULE_10__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()].text_dashboard_customer_month);
    // Customer request tracking card
    var vCardRequest = new _components_card_CardDashboard__WEBPACK_IMPORTED_MODULE_1__["default"]()
        .setLangData('dashboard_card2')
        .setTitle('Customer Request')
        .setLine1(paramData.customerRequestDay.length, ' ' + _language__WEBPACK_IMPORTED_MODULE_10__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()].text_dashboard_request_day)
        .setLine2(paramData.customerRequestWeek.length, ' ' + _language__WEBPACK_IMPORTED_MODULE_10__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()].text_dashboard_request_week);
    // New property listings metrics card
    var vCardRealEstates = new _components_card_CardDashboard__WEBPACK_IMPORTED_MODULE_1__["default"]()
        .setLangData('dashboard_card3')
        .setTitle('New Estates')
        .setLine1(paramData.postedWeek, ' ' + _language__WEBPACK_IMPORTED_MODULE_10__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()].text_dashboard_post_week)
        .setLine2(paramData.postedMonth, ' ' + _language__WEBPACK_IMPORTED_MODULE_10__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()].text_dashboard_post_month);
    // Verification status tracking card
    var vCardRealEstatesVerify = new _components_card_CardDashboard__WEBPACK_IMPORTED_MODULE_1__["default"]()
        .setLangData('dashboard_card4')
        .setTitle('Estates not verified')
        .setLine1(-paramData.totalCurrentUserRSNotVerified, ' ' + _language__WEBPACK_IMPORTED_MODULE_10__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()].text_dashboard_not_verify)
        .setLine2(-paramData.totalOutdatedRealEstate, ' ' + _language__WEBPACK_IMPORTED_MODULE_10__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()].text_dashboard_not_verify_weeks);
    // Append all cards to dashboard
    $('#dashboard-cards').append(vCardCustomer);
    $('#dashboard-cards').append(vCardRequest);
    $('#dashboard-cards').append(vCardRealEstates);
    $('#dashboard-cards').append(vCardRealEstatesVerify);
}
/**
 * Populate unverified real estates table
 *
 * Creates an interactive table showing properties that require verification,
 * with quick access buttons for the verification workflow.
 *
 * @param paramData - Array of unverified real estate objects
 */
function getUnverifiedRealEstates(paramData) {
    if (paramData == null || paramData.length == 0) {
        var vCell = new _components_table_TableRowComponent__WEBPACK_IMPORTED_MODULE_3__["default"]()
            .setColSpan(4)
            .setData(_language__WEBPACK_IMPORTED_MODULE_10__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()].text_entries_none);
        $("#table-estates").append(vCell.innerHTML);
        return;
    }
    paramData.forEach((item) => {
        var _a;
        // Create view button for quick access to verification page
        var vViewButton = _components_buttons_ImageButon__WEBPACK_IMPORTED_MODULE_2__["default"].create('view');
        vViewButton.setAttribute('view-id', item.id.toString());
        // Create table row with property information and action button
        var vCell = new _components_table_TableRowComponent__WEBPACK_IMPORTED_MODULE_3__["default"]()
            .setPhotoFieldsIndex(0)
            .setData((_a = item.photo) !== null && _a !== void 0 ? _a : _constants_APIConstants__WEBPACK_IMPORTED_MODULE_4__.IMAGE_NOT_FOUND, item.title, item.createDate.toString(), vViewButton);
        $("#table-estates").append(vCell.innerHTML);
    });
    // Bind click event for verification navigation
    $("#table-estates").on('click', '.button-view', onButtonViewClick);
}
/**
 * Generate top 5 provinces chart by property count
 *
 * @param paramData - Array of province objects with property counts
 */
function getTop5Provinces(paramData) {
    _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_9__["default"].log('--- pdaat', paramData);
    var vNames = paramData.map(item => item.name); // Extract province names
    var vValues = paramData.map(item => item.total); // Extract property counts
    fillDonutChartData('chart-location-active', vNames, vValues);
}
/**
 * Generate top provinces chart by view count
 *
 * @param paramData - Array of province objects with view counts
 */
function getTopViewProvinces(paramData) {
    var vNames = paramData.map(item => item.name);
    var vValues = paramData.map(item => item.total);
    fillDonutChartData('chart-location-view', vNames, vValues);
}
/**
 * Generate top provinces chart by sales activity
 *
 * @param paramData - Array of province objects with sales counts
 */
function getTopSellProvinces(paramData) {
    var vNames = paramData.map(item => item.name);
    var vValue = paramData.map(item => item.total);
    fillDonutChartData('chart-location-sell', vNames, vValue);
}
/**
 * Create and render doughnut chart with provided data
 *
 * Generates interactive Chart.js doughnut charts with consistent styling
 * and hover effects for data visualization.
 *
 * @param paramId - Canvas element ID for chart rendering
 * @param paramNames - Array of labels for chart segments
 * @param paramData - Array of numerical values for chart segments
 */
function fillDonutChartData(paramId, paramNames, paramData) {
    const canvas = document.getElementById(paramId);
    // Adjust layout if no data available
    if (paramNames.length == 0) {
        $(canvas).siblings('div').css('max-width', '500px');
    }
    // Configure chart data with labels and styling
    const data = {
        labels: paramNames,
        datasets: [{
                label: 'Most Estates by Provinces',
                data: paramData,
                backgroundColor: [
                    'rgb(255, 99, 132)', // Red
                    'rgb(54, 162, 235)', // Blue
                    'rgb(255, 205, 86)', // Yellow
                    'rgba(86, 255, 187, 1)', // Green
                    'rgba(173, 86, 255, 1)', // Purple
                ],
                hoverOffset: 4 // Expand segment on hover
            }]
    };
    // Configure chart options for doughnut style
    const pie = {
        type: 'doughnut',
        data: data,
        options: {
            cutout: '70%', // Create doughnut hole (70% of radius)
        }
    };
    // Render chart on canvas element
    new chart_js__WEBPACK_IMPORTED_MODULE_8__.Chart(canvas, pie);
}
/**
 * Fetches and displays customer support requests that require attention
 *
 * Retrieves the latest unhandled customer requests from the API and populates
 * the dashboard table with request details including type, body, creation date,
 * and current status. Applies localization to request types and statuses.
 *
 * Filters applied:
 * - Latest requests only
 * - Not yet handled
 *
 * @returns {Promise<void>} Promise that resolves when the request table is populated
 * @throws {Error} If API request fails or data format is invalid
 */
function getUserRequireHelp() {
    return __awaiter(this, void 0, void 0, function* () {
        var vUrlSearchParams = new URLSearchParams();
        vUrlSearchParams.set('latest', 'true');
        vUrlSearchParams.set('notHandle', 'true');
        var vApi = new _utilities_APIRequestBuilder__WEBPACK_IMPORTED_MODULE_7__["default"]()
            .setPath(_constants_APIConstants__WEBPACK_IMPORTED_MODULE_4__.PATH_API_CUSTOMER_REQUEST, new _model_PageModel__WEBPACK_IMPORTED_MODULE_6__["default"])
            .setParams(vUrlSearchParams);
        var vData = yield vApi.getAll();
        if (vData == null || vData['data'] == null || vData['data'].length == 0) {
            var vCell = new _components_table_TableRowComponent__WEBPACK_IMPORTED_MODULE_3__["default"]()
                .setColSpan(4)
                .setData(_language__WEBPACK_IMPORTED_MODULE_10__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()].text_entries_none);
            $("#table-request").append(vCell.innerHTML);
        }
        vData['data'].forEach(item => {
            _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_9__["default"].log("----- Data item:" + item);
            var vViewButton = _components_buttons_ImageButon__WEBPACK_IMPORTED_MODULE_2__["default"].create('update');
            vViewButton.setAttribute(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_12__.DATA_ATTR_ID_UPDATE, item.id.toString());
            var vTableRow = new _components_table_TableRowComponent__WEBPACK_IMPORTED_MODULE_3__["default"]();
            vTableRow.setData(item.type, item.body, item.createDate, item.status, vViewButton);
            var vRow = vTableRow.firstElementChild;
            vRow.setAttribute(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_12__.DATA_ITEM, JSON.stringify(item));
            $("#table-request").append(vRow);
            var vTdType = $("#table-request td:nth-of-type(1)");
            vTdType.get().forEach(element => {
                var vTypeText = 'text_customer_request_type_' + $(element).text();
                _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_9__["default"].log("--- dashboard - langText:", vTypeText);
                $(element).data(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_12__.DATA_LANGUAGE, vTypeText);
                _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_9__["default"].log("----- dashboard - langText after:", $(element).data(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_12__.DATA_LANGUAGE));
            });
            var vTdStatus = $("#table-request td:nth-of-type(4)");
            vTdStatus.get().forEach(element => {
                _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_9__["default"].log("----- parent:", $(element).parent());
                var vTypeText = 'text_customer_request_status_' +
                    JSON.parse($(element).parent()
                        .attr(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_12__.DATA_ITEM)).status;
                _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_9__["default"].log("--- dashboard - langText:", vTypeText);
                $(element).data(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_12__.DATA_LANGUAGE, vTypeText);
                _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_9__["default"].log("----- dashboard - langText after:", $(element).data(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_12__.DATA_LANGUAGE));
            });
        });
    });
}
/**
 * Main dashboard page initialization function
 *
 * Loads the dashboard template and initializes all dashboard functionality.
 * This is the entry point called by the routing system.
 *
 * @returns Promise that resolves when dashboard is fully loaded and configured
 */
function dashboardPage() {
    return __awaiter(this, void 0, void 0, function* () {
        // Load dashboard-specific template
        var vHtml = yield fetch('/templates/dashboard.html')
            .then(res => res.text());
        // Inject template into main container
        $("#main-container").html(vHtml);
        // Initialize dashboard functionality and load data
        yield onLoad();
    });
}


/***/ })

}]);
//# sourceMappingURL=src_pages_dashboard_ts.bundle.js.map