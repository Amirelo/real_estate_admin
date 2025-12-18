"use strict";
(self["webpackChunkadmin"] = self["webpackChunkadmin"] || []).push([["src_utilities_Interaction_ts"],{

/***/ "./src/components/navigation/TabSwitch.ts":
/*!************************************************!*\
  !*** ./src/components/navigation/TabSwitch.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TabSwitch)
/* harmony export */ });
/**
 * TabSwitch - Custom Web Component for Interactive Tab Navigation
 *
 * This component creates a dynamic tab navigation system with smooth animations
 * and responsive design. It's used primarily in modal dialogs to organize
 * complex forms into logical sections with visual feedback.
 *
 * Features:
 * - Dynamic tab addition with automatic width distribution
 * - Smooth sliding highlight indicator
 * - Modal type association (CREATE/UPDATE)
 * - Responsive button sizing
 * - Cloneable for multiple modal instances
 */
class TabSwitch extends HTMLElement {
    constructor() {
        super();
        this.render();
    }
    /**
     * Web Component lifecycle method - ensures proper rendering
     */
    connectedCallback() {
        this.render();
    }
    /**
     * Add a new tab to the tab switch component
     *
     * Dynamically creates tab buttons with proper styling and automatically
     * redistributes widths for equal spacing. Updates the highlight indicator
     * to match the new tab count.
     *
     * @param name - Display text for the tab button
     * @param index - Zero-based position index of the tab
     * @param modalType - Modal context (CREATE or UPDATE) for proper ID generation
     * @returns TabSwitch instance for method chaining
     */
    addTab(name, index, modalType) {
        // Create tab button with proper styling and ID
        var vButton = $("<button>")
            .text(name)
            .attr('id', 'button-tab-' + modalType.toLowerCase() + '-' + index)
            .addClass(`border-0 bg-transparent  
            ${index == 0 ? 'text-white' : 'tex-dark'}`) // First tab is active by default
            .css('width', 100 / (index + 1) + "%") // Equal width distribution
            .css("z-index", "1"); // Above highlight indicator
        // Update existing buttons to have equal width distribution
        $(this).find('button')
            .css('width', 100 / (index + 1) + "%");
        // Update highlight indicator width to match new tab count
        $(this).children("div")
            .css('width', 100 / (index + 1) + "%");
        // Add the new button to the tab container
        $(this).append(vButton);
        return this;
    }
    /**
     * Configure the tab switch for a specific modal type
     *
     * Sets the component ID to enable proper event binding and styling
     * for different modal contexts (create vs update operations).
     *
     * @param modalType - Modal context (CREATE or UPDATE)
     * @returns TabSwitch instance for method chaining
     */
    setModalType(modalType) {
        // Set the ID attribute based on modal type (CREATE/UPDATE)
        this.setAttribute("id", "tab-switch-" + modalType.toLowerCase());
        return this;
    }
    /**
     * Create a deep copy of the tab switch component
     *
     * Useful for duplicating tab configurations across multiple modals
     * while maintaining independent state and event handling.
     *
     * @returns Cloned TabSwitch element
     */
    clone() {
        // Create a deep copy of the tab switch element
        const copy = $(this).clone();
        return copy.get()[0];
    }
    /**
     * Render the base tab switch structure
     *
     * Creates the container with styling and the animated highlight indicator.
     * Prevents duplicate rendering through guard clause.
     */
    render() {
        // Prevent multiple renders of the same component
        if ($(this).children('div').length > 0) {
            return;
        }
        // Apply CSS classes for tab switch styling
        this.classList.add(..."mb-4 w-100 row rounded-lg".split(' '), ..."overflow-hidden p-2 mx-0 position-relative".split(' '), ..."bg-light border border-dark".split(" "));
        // Create the highlight indicator that moves between tabs
        var vHighlight = $("<div>")
            .addClass("bg-dark h-100 position-absolute")
            .css({
            "left": "0", // Start at leftmost position
            "top": "0",
            "z-index": "0", // Behind tab buttons
            "transition": "0.3s" // Smooth sliding animation
        });
        this.append(vHighlight.get()[0]);
    }
}
// Register custom element if not already defined
if (customElements.get('tab-switch') == null) {
    customElements.define('tab-switch', TabSwitch);
}


/***/ }),

/***/ "./src/model/ModalSelectFieldModel.ts":
/*!********************************************!*\
  !*** ./src/model/ModalSelectFieldModel.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ModalSelectFieldModel)
/* harmony export */ });
class ModalSelectFieldModel {
    constructor(name, data, path, linkPath, required, displayFieldData, linkPathName) {
        this.name = name;
        this.data = data;
        this.path = path;
        this.linkPath = linkPath;
        this.required = required;
        this.displayFieldData = displayFieldData;
        this.linkPathName = linkPathName;
    }
}


/***/ }),

/***/ "./src/utilities/DataProcessor.ts":
/*!****************************************!*\
  !*** ./src/utilities/DataProcessor.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataProcessor: () => (/* binding */ DataProcessor)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _constants_DataConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/DataConstants */ "./src/constants/DataConstants.ts");
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../language */ "./src/language/index.ts");
/* harmony import */ var _MyLogger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MyLogger */ "./src/utilities/MyLogger.ts");
/* harmony import */ var _MyUtilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MyUtilities */ "./src/utilities/MyUtilities.ts");





/**
 * Generic data processor for handling form data collection and validation
 * Provides reusable methods for extracting data from modal forms and validating
 * against business rules with comprehensive error handling and user feedback.
 *
 * @template TModel - The model type for strongly typed data processing
 */
class DataProcessor {
    /**
     * Collects form data from modal inputs and populates the provided object
     * Handles various input types including text, number, file, select, and textarea
     * Automatically converts field IDs to property names using naming conventions
     *
     * @param paramObject - Target object to populate with collected data
     * @param paramType - Modal type ('CREATE' or 'UPDATE') to determine which modal to process
     */
    collectData(paramObject, paramType) {
        // Determine the correct modal selector based on operation type
        var vModalName = `#modal-${paramType == "CREATE" ? "create" : "update"}`;
        // Process all form input elements within the specified modal
        $(vModalName)
            .find("input, select, textarea")
            .get()
            .forEach((item) => {
            var _a, _b;
            // Extract field name from element ID by removing modal prefix
            // Format: "modal-create-fieldName" or "modal-update-fieldName"
            var vName = _MyUtilities__WEBPACK_IMPORTED_MODULE_4__["default"].convertName(item.id.split("-").splice(2).join("-"), // Remove first two parts (modal-create/update)
            "fieldName");
            _MyLogger__WEBPACK_IMPORTED_MODULE_3__["default"].log("Data processor: ", $(item).attr(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_1__.DATA_MULTIPLE_VALUE));
            _MyLogger__WEBPACK_IMPORTED_MODULE_3__["default"].log("Data processor: ", $(item).prop("tagName"));
            if ($(item).prop("tagName").toLowerCase() == "select" &&
                $(item).attr(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_1__.DATA_MULTIPLE_VALUE)) {
                _MyLogger__WEBPACK_IMPORTED_MODULE_3__["default"].log("Data Processor - is multi select");
                var vValues = $(item).parent()
                    .find('.div-multi-selection').children().get()
                    .map(element => element
                    .getAttribute(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_1__.DATA_ATTR_OPTION_ID)).join(',');
                _MyLogger__WEBPACK_IMPORTED_MODULE_3__["default"].log("Multiple values:", vValues);
                paramObject[vName] = vValues;
                return;
            }
            // Handle different input types with appropriate data extraction
            if ($(item).attr("type") == "number" ||
                $(item).prop("tagName") == "select") {
                // Numeric inputs and dropdown selections - store raw value
                paramObject[vName] = $(item).val();
                return;
            }
            if ($(item).prop("tagName") == "textarea") {
                // Rich text areas - extract HTML content for formatting preservation
                paramObject[vName] = $(item).html();
                return;
            }
            if ($(item).attr("type") == "file") {
                // File upload inputs - get first selected file or null if none selected
                paramObject[vName] = (_a = $(item)[0]
                    .files[0]) !== null && _a !== void 0 ? _a : null;
                return;
            }
            // Text inputs and other standard types - trim whitespace for clean data
            paramObject[vName] = (_b = $(item).val()) === null || _b === void 0 ? void 0 : _b.toString().trim();
        });
    }
    /**
     * Validates collected data against required fields and business rules
     * Performs two-phase validation: required fields first, then optional fields
     * Provides user feedback through toast notifications on validation failure
     *
     * @param paramData - Object containing data to validate
     * @param paramType - Modal type for context-specific validation messages
     * @param requiredFields - Array of field names that must have valid values
     * @returns Boolean indicating whether all validations passed
     */
    validateData(paramData, paramType, requiredFields) {
        var vResult = true;
        var vChecks = []; // Track individual field validation results
        // Create defensive copy to avoid modifying original required fields array
        var vImportantFields = [...requiredFields];
        // Phase 1: Validate all required fields with strict checking
        vImportantFields === null || vImportantFields === void 0 ? void 0 : vImportantFields.forEach((name) => {
            var vCheckCurrent = this.checkField(paramData[name], name.toString(), paramType, true); // true = required field
            _MyLogger__WEBPACK_IMPORTED_MODULE_3__["default"].log("Important check:", paramData[name], "- result:", vCheckCurrent);
            vChecks.push(vCheckCurrent);
        });
        // Phase 2: Validate remaining optional fields with relaxed checking
        var vKeys = Object.keys(paramData);
        vKeys.forEach((key) => {
            // Skip fields already validated as required
            if (!vImportantFields.includes(key)) {
                var vCheckCurrent = this.checkField(paramData[key], key, paramType, false); // false = optional field
                vChecks.push(vCheckCurrent);
                _MyLogger__WEBPACK_IMPORTED_MODULE_3__["default"].log("Not Important check:", paramData[key], "- result:", vCheckCurrent);
            }
        });
        // Aggregate validation results and provide user feedback
        if (vChecks.includes(false)) {
            // At least one validation failed - show error notification
            _MyUtilities__WEBPACK_IMPORTED_MODULE_4__["default"].showToast("error", _language__WEBPACK_IMPORTED_MODULE_2__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()].err_field);
            vResult = false;
        }
        return vResult;
    }
    checkField(paramData, paramInputName, paramInputType, paramRequired) {
        var vInput = null;
        var vElementNames = ['input', 'select', 'textarea'];
        // Find the input element by trying different element types
        var vIndex = 0;
        while ((vInput == null || vInput.length == 0)
            && vIndex < vElementNames.length) {
            vInput = $(`#${vElementNames[vIndex]}-` +
                `${paramInputType.toString().toLowerCase()}-${paramInputName}`);
            vIndex++;
        }
        _MyLogger__WEBPACK_IMPORTED_MODULE_3__["default"].log("--- element name:", vInput, paramInputName);
        // Validate required fields
        if (paramRequired == true) {
            if (paramData == null || paramData.length == 0) {
                vInput.addClass('border-danger').attr('title', paramInputName + " " + _language__WEBPACK_IMPORTED_MODULE_2__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()].warn_empty);
                return false;
            }
            // Numeric field validation
            if (vInput.attr('type') == 'number') {
                if (isNaN(paramData)) {
                    vInput.addClass('border-danger')
                        .attr('title', paramInputName + " " +
                        _language__WEBPACK_IMPORTED_MODULE_2__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()].warn_number_only);
                    return false;
                }
            }
            // Email format validation
            if (paramInputName.toLowerCase().includes('email') &&
                !_MyUtilities__WEBPACK_IMPORTED_MODULE_4__["default"].validateEmail(paramData)) {
                vInput.addClass('border-danger').attr('title', paramInputName + " " + _language__WEBPACK_IMPORTED_MODULE_2__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()].warn_format);
                return false;
            }
            // Phone number validation
            if ('phone mobile'.includes(paramInputName.toLowerCase()) &&
                (!_MyUtilities__WEBPACK_IMPORTED_MODULE_4__["default"].validatePhoneNumber(paramData) || isNaN(paramData))) {
                _MyLogger__WEBPACK_IMPORTED_MODULE_3__["default"].log("mobile fail check");
                vInput.addClass('border-danger').attr('title', paramInputName +
                    " " + _language__WEBPACK_IMPORTED_MODULE_2__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()].warn_empty);
                return false;
            }
            _MyLogger__WEBPACK_IMPORTED_MODULE_3__["default"].log("Pass all check", paramInputName);
            // Remove error styling if validation passes
            vInput.removeClass('border-danger').removeAttr('title');
            return true;
        }
        // Validate optional fields (only if they have content)
        if (paramData != null && paramData.length > 0) {
            if ((vInput.attr('type') == 'number' ||
                paramInputName.toLowerCase().includes('phone')) &&
                isNaN(paramData)) {
                vInput.addClass('border-danger')
                    .attr('title', paramInputName + " " +
                    _language__WEBPACK_IMPORTED_MODULE_2__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()].warn_number_only);
                return false;
            }
            if (paramInputName.toLowerCase().includes('email') &&
                !_MyUtilities__WEBPACK_IMPORTED_MODULE_4__["default"].validateEmail(paramData)) {
                vInput.addClass('border-danger').attr('title', paramInputName +
                    " " + _language__WEBPACK_IMPORTED_MODULE_2__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()].warn_format);
                return false;
            }
            if ('phone mobile'.includes(paramInputName.toLowerCase()) &&
                !_MyUtilities__WEBPACK_IMPORTED_MODULE_4__["default"].validatePhoneNumber(paramData)) {
                vInput.addClass('border-danger').attr('title', paramInputName + " " + _language__WEBPACK_IMPORTED_MODULE_2__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()].warn_empty);
                return false;
            }
            vInput.removeClass('border-danger').removeAttr('title');
            return true;
        }
    }
}


/***/ }),

/***/ "./src/utilities/EventBinder.ts":
/*!**************************************!*\
  !*** ./src/utilities/EventBinder.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EventBinder)
/* harmony export */ });
/* harmony import */ var _components_buttons_ImageButon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/buttons/ImageButon */ "./src/components/buttons/ImageButon.ts");
/* harmony import */ var _constants_DataConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/DataConstants */ "./src/constants/DataConstants.ts");
/* harmony import */ var _EventHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventHandler */ "./src/utilities/EventHandler.ts");
/* harmony import */ var _ModalUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ModalUtils */ "./src/utilities/ModalUtils.ts");
/* harmony import */ var _MyLogger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MyLogger */ "./src/utilities/MyLogger.ts");





/**
 * EventBinder - Centralized event management system for the application
 *
 * This class serves as the main orchestrator for all DOM event bindings in the admin interface.
 * It provides a structured approach to event management, ensuring proper separation of concerns
 * and maintainable event handling throughout the application lifecycle.
 *
 * Key responsibilities:
 * - Bind all DOM events to their respective handlers
 * - Manage event lifecycle (binding/unbinding)
 * - Coordinate between different UI components and their interactions
 * - Provide centralized event configuration and management
 */
class EventBinder {
    /**
     * Initialize EventBinder with required handler dependencies
     *
     * @param paginationHandler - Handles pagination-related events (page navigation, limit changes)
     * @param searchHandler - Manages search and filtering operations
     * @param crudHandler - Processes CRUD operation confirmations
     * @param interactor - Handles page-specific interactions and navigation
     */
    constructor(paginationHandler, searchHandler, crudHandler, interactor) {
        this.paginationHandler = paginationHandler;
        this.searchHandler = searchHandler;
        this.crudHandler = crudHandler;
        this.interactor = interactor;
    }
    /**
     * Master event binding method - orchestrates all event registration
     *
     * This is the primary entry point for setting up the complete event system.
     * Called during page initialization to establish all user interaction handlers.
     * Events are organized by functional area for better maintainability.
     */
    bindAllEvents() {
        this.bindPaginationEvents(); // Page navigation and size controls
        this.bindSearchEvents(); // Search and filtering functionality
        this.bindModalEvents(); // Modal dialogs for CRUD operations
        this.bindTableEvents(); // Data table interactions
        this.bindCrudEvent(); // CRUD operation confirmations
        this.bindAdvanceSearchEvents(); // Advanced search and query building
        this.bindPhotoEvent(); // Image/file upload handling
        this.bindTabEvent(); // Tab navigation within modals
        this.bindModalSelectEvent(); // Dynamic select dropdown handling
        this.bindModalSelectMultipleValue();
    }
    /**
     * Configure pagination control event handlers
     *
     * Manages all pagination-related user interactions including:
     * - Page size selection (records per page)
     * - Navigation controls (first, previous, next, last)
     * - Real-time data refresh on pagination changes
     */
    bindPaginationEvents() {
        // Page size selector - triggers immediate data refresh with new limit
        $(".select-limit").on('change', this.paginationHandler
            .selectLimitChange.bind(this));
        // Navigation button bindings for intuitive page traversal
        $(".button-to-begin").on("click", this.paginationHandler
            .buttonToBeginClick.bind(this)); // Jump to first page
        $(".button-to-back").on("click", this.paginationHandler
            .buttonToBackClick.bind(this)); // Previous page
        $(".button-to-forward").on("click", this.paginationHandler
            .buttonToFowardClick.bind(this)); // Next page
        $(".button-to-last").on("click", this.paginationHandler
            .buttonToEndClick.bind(this)); // Jump to last page
    }
    /**
     * Configure search and filtering event handlers
     *
     * Handles both basic and advanced search functionality:
     * - Quick search with instant feedback
     * - Advanced search with multiple criteria
     * - Filter management and clearing
     */
    bindSearchEvents() {
        // Basic search functionality with button and keyboard support
        $("#button-find").on('click', this.searchHandler
            .onButtonFindClick.bind(this.searchHandler));
        $("#input-search").on('keydown', this.searchHandler
            .onSubmitInputSearch.bind(this.searchHandler)); // Enter key support
        // Advanced search and filter management
        $("#button-filter-clear").on("click", this.searchHandler
            .onButtonFilterClick.bind(this.searchHandler)); // Clear all filters
        $("#button-search-advance-confirm").on('click', this.searchHandler
            .onButtonadvanceSearchConfirmClick.bind(this.searchHandler)); // Apply advanced search
    }
    /**
     * Configure modal dialog event handlers
     *
     * Manages all modal-related interactions including:
     * - Modal lifecycle events (show/hide)
     * - CRUD operation triggers from table actions
     * - Data cleanup and state management
     */
    bindModalEvents() {
        // Modal cleanup events - prevent data persistence between operations
        $("#modal-create").on("hidden.bs.modal", () => (0,_ModalUtils__WEBPACK_IMPORTED_MODULE_3__.clearModal)('CREATE'));
        $("#modal-update").on("hidden.bs.modal", () => (0,_ModalUtils__WEBPACK_IMPORTED_MODULE_3__.clearModal)('UPDATE'));
        // CRUD operation triggers from UI elements
        $("navigation-table").on('click', '.button-create', _EventHandler__WEBPACK_IMPORTED_MODULE_2__.onButtonCreateClick); // New record
        $("#table-data").on('click', '.button-update', _ModalUtils__WEBPACK_IMPORTED_MODULE_3__.onButtonUpdateClick); // Edit record
        $("#table-data").on('click', '.button-delete', _EventHandler__WEBPACK_IMPORTED_MODULE_2__.onButtonDeleteClick); // Delete record
        $("#table-data").on('click', '.button-view', (event) => // View details
         (0,_EventHandler__WEBPACK_IMPORTED_MODULE_2__.onButtonViewClick)(event, this.interactor.viewPath));
    }
    /**
     * Configure data table interaction events
     *
     * Handles table-specific user interactions:
     * - Column sorting (ascending/descending)
     * - Row selection and actions
     * - Dynamic content updates
     */
    bindTableEvents() {
        // Column sorting functionality - exclude action column (first column)
        // off('click') ensures no duplicate event bindings on re-initialization
        $("#table-data th").not(':first-of-type').off('click').on('click', this.searchHandler.onButtonSortClick.bind(this));
    }
    /**
     * Configure CRUD operation confirmation event handlers
     *
     * Handles final confirmation steps for all CRUD operations:
     * - Data validation before submission
     * - API request execution
     * - Success/error handling and user feedback
     */
    bindCrudEvent() {
        // Create operation confirmation - validates and submits new record
        $("#button-create-confirm").on("click", this.crudHandler
            .onButtonCreateConfirmEvent.bind(this.crudHandler));
        // Update operation confirmation - validates and submits changes
        $("#button-update-confirm").on("click", this.crudHandler
            .onButtonUpdateConfirmClick.bind(this.crudHandler));
        // Delete operation confirmation - executes deletion after user confirmation
        $("#button-delete-confirm").on("click", this.crudHandler
            .onButtonDeleteConfirmClick.bind(this.crudHandler));
    }
    /**
     * Configure advanced search functionality
     *
     * Sets up complex search capabilities including:
     * - Dynamic search group creation
     * - Multi-criteria query building
     * - Advanced search modal management
     */
    bindAdvanceSearchEvents() {
        // Dynamic search group creation for complex queries
        $(".button-create-search-group").on('click', _EventHandler__WEBPACK_IMPORTED_MODULE_2__.createSearchGroup.bind(this));
        // Initialize advanced search modal if present in DOM
        if ($("#modal-search-advance").length > 0) {
            // Create and inject advanced search button
            var vAdvanceButton = _components_buttons_ImageButon__WEBPACK_IMPORTED_MODULE_0__["default"].create('advance');
            $(".filter-tab").append(vAdvanceButton);
            // Bind modal trigger event
            $("#button-search-advance").on('click', function () {
                $("#modal-search-advance").modal('show');
            });
        }
    }
    /**
     * Configure file upload and image handling events
     *
     * Manages image/file selection in modal forms:
     * - File validation and preview
     * - Upload progress feedback
     * - Error handling for invalid files
     */
    bindPhotoEvent() {
        // File selection handlers for both create and update scenarios
        $("#modal-create input[type='file']").on('change', (e) => (0,_EventHandler__WEBPACK_IMPORTED_MODULE_2__.onImageFileSelected)(e, 'CREATE'));
        $("#modal-update input[type='file']").on('change', (e) => (0,_EventHandler__WEBPACK_IMPORTED_MODULE_2__.onImageFileSelected)(e, 'UPDATE'));
        // $("#modal-create .drop-zone").on('drop',
        //     (e) => onImageFileDrop(e, 'CREATE'));
        // $("#modal-update .drop-zone").on('drop',
        //     (e) => onImageFileDrop(e, 'UPDATE'));
    }
    /**
     * Configure tab navigation events within modals
     *
     * Handles tab switching in multi-step forms:
     * - State preservation between tabs
     * - Validation per tab section
     * - Smooth user experience during navigation
     */
    bindTabEvent() {
        // Tab switching for create modal (multi-step form support)
        $("#tab-switch-create").on('click', 'button', _EventHandler__WEBPACK_IMPORTED_MODULE_2__.onTabModalClick);
        $("#tab-switch-create").on('dragover', 'button', _EventHandler__WEBPACK_IMPORTED_MODULE_2__.onTabModalClick);
        // Tab switching for update modal (multi-step form support)
        $("#tab-switch-update").on('click', 'button', _EventHandler__WEBPACK_IMPORTED_MODULE_2__.onTabModalClick);
        $("#tab-switch-update").on('dragover', 'button', _EventHandler__WEBPACK_IMPORTED_MODULE_2__.onTabModalClick);
    }
    /**
     * Configure dynamic select dropdown event handlers
     *
     * Manages cascading dropdown functionality where one select influences another:
     * - Parent-child relationship handling
     * - Dynamic option loading based on selection
     * - API integration for dependent data
     */
    bindModalSelectEvent() {
        // Find all select elements with cascading functionality
        var vModal = $('#modal-create').find(`select[${_constants_DataConstants__WEBPACK_IMPORTED_MODULE_1__.DATA_ATTR_PARENT_API}]`).get();
        _MyLogger__WEBPACK_IMPORTED_MODULE_4__["default"].log('modal to bind', vModal);
        // Exit early if no cascading selects found
        if (vModal.length == 0) {
            return;
        }
        // Configure each cascading select relationship
        for (const select of vModal) {
            _MyLogger__WEBPACK_IMPORTED_MODULE_4__["default"].log("Current select:", select);
            // Extract relationship configuration from data attributes
            let vLinkParent = $(select).attr(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_1__.DATA_ATTR_PARENT_API); // Parent API endpoint
            let vLinkCurrent = $(select).attr(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_1__.DATA_ATTR_CURRENT_API); // Current API endpoint
            let vLinkPath = $(select).attr(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_1__.DATA_ATTR_LINK_NAME); // Path identifier
            // Find corresponding select in update modal
            let vSelectUpdate = $("#modal-update")
                .find(`select[${_constants_DataConstants__WEBPACK_IMPORTED_MODULE_1__.DATA_ATTR_CURRENT_API}=${vLinkCurrent}]`).get()[0];
            _MyLogger__WEBPACK_IMPORTED_MODULE_4__["default"].log("-- select update:", vSelectUpdate);
            _MyLogger__WEBPACK_IMPORTED_MODULE_4__["default"].log("Modal with select event:", vLinkParent, vLinkCurrent, vLinkPath);
            _MyLogger__WEBPACK_IMPORTED_MODULE_4__["default"].log("Modal select bind path:", "#select-create-" + vLinkPath);
            // Bind change events for both create and update modals
            $(`#select-create-${vLinkPath}`).on('change', (e) => (0,_EventHandler__WEBPACK_IMPORTED_MODULE_2__.onModalSelectRelationClick)(e, select));
            $(`#select-update-${vLinkPath}`).on('change', (e) => (0,_EventHandler__WEBPACK_IMPORTED_MODULE_2__.onModalSelectRelationClick)(e, vSelectUpdate));
        }
    }
    bindModalSelectMultipleValue() {
        var vModal = $('#modal-create').find(`select[${_constants_DataConstants__WEBPACK_IMPORTED_MODULE_1__.DATA_MULTIPLE_VALUE}]`).get();
        _MyLogger__WEBPACK_IMPORTED_MODULE_4__["default"].log("Modal found for multiple selection:", vModal);
        // Exit early if no cascading selects found
        if (vModal.length == 0) {
            return;
        }
        // Configure each cascading select relationship
        for (var vSelect of vModal) {
            _MyLogger__WEBPACK_IMPORTED_MODULE_4__["default"].log("Current select:", vSelect);
            var vSelectCreateId = vSelect.id.split('-').slice(2).join('-');
            _MyLogger__WEBPACK_IMPORTED_MODULE_4__["default"].log("Id of update to find:", `select-update-${vSelectCreateId}`);
            // Find corresponding select in update modal
            // Bind change events for both create and update modals
            $(vSelect).on('change', (e) => (0,_EventHandler__WEBPACK_IMPORTED_MODULE_2__.onModalSelectMultipleClick)(e));
            $(`#select-update-${vSelectCreateId}`).on('change', (e) => (0,_EventHandler__WEBPACK_IMPORTED_MODULE_2__.onModalSelectMultipleClick)(e));
            $(vSelect).find('.button-card-delete').on('click', (e) => (0,_EventHandler__WEBPACK_IMPORTED_MODULE_2__.onModalDeleteCardClick)(e));
            $(`#select-update-${vSelectCreateId}`)
                .find('.button-card-delete').on('click', (e) => (0,_EventHandler__WEBPACK_IMPORTED_MODULE_2__.onModalDeleteCardClick)(e));
        }
    }
    /**
     * Configure password visibility toggle functionality
     *
     * Handles password field show/hide toggle buttons:
     * - Eye icon state management
     * - Input type switching (password/text)
     * - Accessibility considerations
     */
    bindPasswordInputEvent() {
        $(".button-visibility").on('click', function () {
            // Toggle between show and hide states
            if ($(this).children("i").hasClass("fa-eye-slash")) {
                // Currently hidden - show password
                $(this).siblings("input").attr('type', 'text');
                $(this).children("i").removeClass("fa-eye-slash").addClass('fa-eye');
            }
            else {
                // Currently visible - hide password
                $(this).siblings("input").attr('type', 'password');
                $(this).children("i").removeClass("fa-eye").addClass('fa-eye-slash');
            }
        });
    }
    /**
     * Cleanup method for removing all bound events
     *
     * Essential for preventing memory leaks when components are destroyed.
     * Should be called during page navigation or component unmounting.
     *
     * TODO: Implement complete event unbinding strategy
     * - Remove all click handlers
     * - Clear modal event listeners
     * - Unbind dynamic event handlers
     * - Reset component state
     */
    unbindAllevents() {
        // TODO: Implement comprehensive event cleanup
        // This should systematically remove all event listeners to prevent memory leaks
        // Consider using namespaced events for easier cleanup: .on('click.eventBinder')
    }
}


/***/ }),

/***/ "./src/utilities/FieldBuilder.ts":
/*!***************************************!*\
  !*** ./src/utilities/FieldBuilder.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FieldBuilder)
/* harmony export */ });
/* harmony import */ var _components_navigation_TabSwitch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/navigation/TabSwitch */ "./src/components/navigation/TabSwitch.ts");
/* harmony import */ var _constants_DataConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/DataConstants */ "./src/constants/DataConstants.ts");
/* harmony import */ var _model_PageModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/PageModel */ "./src/model/PageModel.ts");
/* harmony import */ var _ApiHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ApiHandler */ "./src/utilities/ApiHandler.ts");
/* harmony import */ var _ModalUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ModalUtils */ "./src/utilities/ModalUtils.ts");
/* harmony import */ var _MyLogger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MyLogger */ "./src/utilities/MyLogger.ts");
/* harmony import */ var _MyUtilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MyUtilities */ "./src/utilities/MyUtilities.ts");
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
 * FieldBuilder - Dynamic form field generator for modal dialogs
 *
 * This generic class provides a fluent interface for building complex modal forms
 * with various field types including text inputs, selects, textareas, file uploads,
 * and tabbed layouts. It automatically handles field validation, data binding,
 * and API integration for dropdown options.
 *
 * Key Features:
 * - Type-safe field configuration using TypeScript generics
 * - Automatic field type detection based on model properties
 * - Support for cascading dropdowns with API data loading
 * - Tabbed form layouts for complex data entry
 * - Image upload handling with preview functionality
 * - Field validation and requirement management
 *
 * @template TModel - The model type that defines the structure of form fields
 */
class FieldBuilder {
    /**
     * Initialize FieldBuilder with a model constructor
     * Sets up empty arrays for all field type collections
     *
     * @param model - Constructor function for the model type
     */
    constructor(model) {
        this.model = model;
        this.selectFields = [];
        this.requiredFields = [];
        this.ignoreFields = [];
        this.photoFields = [];
        this.textAreaFields = [];
        this.multiSelectFields = [];
        this.tabs = {};
    }
    /**
     * Main orchestration method for form generation
     *
     * Coordinates the complete form building process including:
     * 1. Validation of field configurations
     * 2. Tab structure generation
     * 3. Required field processing
     * 4. Optional field auto-detection and generation
     * 5. Image picker setup
     *
     * This method should be called after all field configurations are set
     */
    beginGeneration() {
        return __awaiter(this, void 0, void 0, function* () {
            // Skip generation if no field configurations are provided
            if (this.selectFields.length == 0 &&
                this.requiredFields.length == 0 &&
                this.ignoreFields.length == 0 &&
                this.photoFields.length == 0 &&
                this.textAreaFields.length == 0 &&
                this.selectFields.length == 0) {
                return;
            }
            // Generate tab structure if configured
            this.generateTabs();
            // Process all explicitly required fields first
            for (const name of this.requiredFields) {
                yield this.generateField(name, true);
            }
            for (const name of this.multiSelectFields) {
                yield this.generateField(name, false, true);
            }
            // Auto-generate fields for remaining model properties
            var vModel = new this.model();
            var vModelKeys = Object.keys(vModel);
            for (const key of vModelKeys) {
                var vKey = key;
                // Skip fields that are already processed or explicitly ignored
                if (!this.requiredFields.includes(vKey) &&
                    !this.ignoreFields.includes(vKey) &&
                    !this.photoFields.includes(vKey) &&
                    !this.multiSelectFields.includes(vKey) &&
                    vKey != 'id') { // Always skip ID field
                    yield this.generateField(vKey, false);
                }
            }
            // Setup image picker for the first photo field if any exist
            if (this.photoFields.length > 0) {
                (0,_ModalUtils__WEBPACK_IMPORTED_MODULE_4__.generateImagePicker)(this.photoFields[0], true, this.tabs);
            }
        });
    }
    /**
     * Determine the appropriate HTML input element type for a field
     *
     * Analyzes field configuration to select the most appropriate input type:
     * - textarea: For multi-line text content
     * - select: For dropdown lists with predefined options
     * - input: Default for single-line inputs
     *
     * @param name - The field name to analyze
     * @returns The HTML input element type ('textarea', 'select', or 'input')
     */
    getInputType(name) {
        // Check if field is configured as a textarea
        if (this.textAreaFields && this.textAreaFields.includes(name)) {
            return 'textarea';
        }
        // Check if field is configured as a select dropdown
        if (this.selectFields && this.selectFields.map(item => item.name)
            .includes(name)) {
            return 'select';
        }
        // Default to standard input element
        return 'input';
    }
    /**
     * Determine the data type for form field validation and rendering
     *
     * Inspects the model property type to determine appropriate input attributes:
     * - number: For numeric inputs with validation
     * - file: For image/document upload fields
     * - text: Default for string-based inputs
     *
     * @param name - The field name to analyze
     * @returns The input data type ('number', 'file', or 'text')
     */
    getDataType(name) {
        // Create temporary model instance for type inspection
        var vModelTemp = new this.model();
        // Check TypeScript property type
        if (typeof vModelTemp[name] == 'number') {
            return 'number';
        }
        // Check if field is configured for file uploads
        if (this.photoFields && name in this.photoFields) {
            return 'file';
        }
        // Default to text input
        return 'text';
    }
    /**
     * Retrieve option data for select fields from various sources
     *
     * Supports multiple data source types:
     * 1. Static data: Pre-defined key-value pairs
     * 2. API data: Dynamic loading from REST endpoints
     * 3. Cascading selects: Parent-child relationships
     *
     * @param element - Select field configuration object
     * @returns Promise resolving to options object {value: label} or null
     */
    getOptionData(element) {
        return __awaiter(this, void 0, void 0, function* () {
            // Return early if no select configuration provided
            if (!element) {
                return null;
            }
            // Use static data if available (highest priority)
            if (element.data != null) {
                return element.data;
            }
            // Fetch data from API if path is configured and not a cascading select
            if (element.path != null &&
                (element.linkPath == null ||
                    element.linkPath.length == 0)) {
                // Request all available data (limit: -1 means no pagination)
                var vResult = yield (0,_ApiHandler__WEBPACK_IMPORTED_MODULE_3__.getAllData)(element.path, new _model_PageModel__WEBPACK_IMPORTED_MODULE_2__["default"](), { limit: '-1' }, null, true, null, null);
                // Transform API response array into select options object
                var vMapped = vResult.data
                    .map(item => {
                    var _a;
                    return {
                        [item['id']]: // Use ID as option value
                        (_a = item[element.displayFieldData]) !== null && _a !== void 0 ? _a : item['name'] // Use configured display field or fallback to 'name'
                    };
                });
                // Merge all option objects into a single options object
                return Object.assign({}, ...vMapped);
            }
            return null;
        });
    }
    /**
     * Generate tabbed layout structure for complex forms
     *
     * Creates Bootstrap-compatible tab navigation and content containers
     * for organizing form fields into logical sections. Handles responsive
     * sizing and proper modal layout management.
     */
    generateTabs() {
        var vTabKeys = this.tabs ? Object.keys(this.tabs) : null;
        // Only generate if tabs are actually configured
        if (vTabKeys && vTabKeys.length > 0) {
            // Use extra-large modal for complex forms with many tabs
            if (vTabKeys.length > 4) {
                $("#modal-create .modal-dialog").addClass('modal-xl');
            }
            var vTabContainer = new _components_navigation_TabSwitch__WEBPACK_IMPORTED_MODULE_0__["default"]();
            // Create tab structure for both CREATE and UPDATE modals
            vTabKeys.forEach((name, index) => {
                // Add tab button to navigation
                vTabContainer.addTab(name, index, 'CREATE');
                // Create tab content container with animated height transitions
                var vContainer = $("<div>")
                    .addClass('overflow-hidden')
                    .css('max-height', `${index > 0 ? '0' : '1000px'}`); // First tab visible by default
                // Clone containers for both modal types
                $("#modal-create .modal-body").append(vContainer
                    .clone().attr("id", "tab-create-" + index));
                $("#modal-update .modal-body").append(vContainer
                    .clone().attr("id", "tab-update-" + index));
            });
            // Insert tab navigation controls at the top of modal bodies
            var vTabCreate = vTabContainer.clone().setModalType('CREATE');
            $("#modal-create .modal-body").prepend(vTabCreate);
            var vTabUpdate = vTabContainer.clone().setModalType('UPDATE');
            $("#modal-update .modal-body").prepend(vTabUpdate);
        }
    }
    /**
     * Generate individual form field with complete configuration
     *
     * Creates a fully configured form field including:
     * - Proper input type and validation
     * - Option data for select fields
     * - Cascading dropdown relationships
     * - Tab placement and organization
     *
     * @param name - Field name from the model
     * @param required - Whether the field is mandatory
     */
    generateField(name, required, isMulti) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d;
            // Determine field rendering characteristics
            var vInputType = this.getInputType(name);
            var vInputDataType = this.getDataType(name);
            // Load select options if applicable
            var vSelectData = yield this.getOptionData((_a = this.selectFields) === null || _a === void 0 ? void 0 : _a.filter(item => item.name == name)[0]);
            // Get select field configuration for cascading functionality
            var vOption = (_b = this.selectFields) === null || _b === void 0 ? void 0 : _b.filter(item => item.name == name)[0];
            _MyLogger__WEBPACK_IMPORTED_MODULE_5__["default"].log(" Generate field option:", vOption);
            // Generate the actual form field with all configurations
            (0,_ModalUtils__WEBPACK_IMPORTED_MODULE_4__.generateModalField)(name, required, vInputType, vInputDataType, vSelectData, this.tabs, (_c = vOption === null || vOption === void 0 ? void 0 : vOption.linkPath) !== null && _c !== void 0 ? _c : null, (_d = vOption === null || vOption === void 0 ? void 0 : vOption.path) !== null && _d !== void 0 ? _d : null, vOption === null || vOption === void 0 ? void 0 : vOption.linkPathName, isMulti);
            var vOptions = $("#modal-create option, #modal-update option");
            vOptions.get().forEach(element => {
                var vModelNameFormatted = _MyUtilities__WEBPACK_IMPORTED_MODULE_6__["default"]
                    .convertName(this.model.name, 'tableId')
                    .split('-').slice(1, -1).join('_');
                var vLangTextName = 'text_' + vModelNameFormatted + "_" +
                    $(element).parent().attr('id')
                        .split('-').slice(2).join('_') + "_" + $(element).val();
                _MyLogger__WEBPACK_IMPORTED_MODULE_5__["default"].logElement("Option lang text:", vLangTextName);
                $(element).attr(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_1__.DATA_ATTR_LANGUAGE, vLangTextName);
            });
        });
    }
}


/***/ }),

/***/ "./src/utilities/Interaction.ts":
/*!**************************************!*\
  !*** ./src/utilities/Interaction.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PageInteraction)
/* harmony export */ });
/* harmony import */ var _model_PageModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/PageModel */ "./src/model/PageModel.ts");
/* harmony import */ var _ApiHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ApiHandler */ "./src/utilities/ApiHandler.ts");
/* harmony import */ var _TableUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TableUtils */ "./src/utilities/TableUtils.ts");
/* harmony import */ var _ModalUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ModalUtils */ "./src/utilities/ModalUtils.ts");
/* harmony import */ var _EventHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EventHandler */ "./src/utilities/EventHandler.ts");
/* harmony import */ var _FieldBuilder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FieldBuilder */ "./src/utilities/FieldBuilder.ts");
/* harmony import */ var _EventBinder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EventBinder */ "./src/utilities/EventBinder.ts");
/* harmony import */ var _DataProcessor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DataProcessor */ "./src/utilities/DataProcessor.ts");
/* harmony import */ var _model_ModalSelectFieldModel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/ModalSelectFieldModel */ "./src/model/ModalSelectFieldModel.ts");
/* harmony import */ var _MyUtilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MyUtilities */ "./src/utilities/MyUtilities.ts");
/* harmony import */ var _APIRequestBuilder__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./APIRequestBuilder */ "./src/utilities/APIRequestBuilder.ts");
/* harmony import */ var _constants_APIConstants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../constants/APIConstants */ "./src/constants/APIConstants.ts");
/* harmony import */ var _components_table_TableRowComponent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/table/TableRowComponent */ "./src/components/table/TableRowComponent.ts");
/* harmony import */ var _MyLogger__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./MyLogger */ "./src/utilities/MyLogger.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../language */ "./src/language/index.ts");
/* harmony import */ var _SecureAuth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./SecureAuth */ "./src/utilities/SecureAuth.ts");
/* harmony import */ var _constants_webConstants__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../constants/webConstants */ "./src/constants/webConstants.ts");
/* harmony import */ var _constants_DataConstants__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../constants/DataConstants */ "./src/constants/DataConstants.ts");
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
 * Orchestrates page-level functionality for admin interface with type-safe model binding.
 * Provides fluent API for configuring tables, forms, modals, pagination, search, and CRUD operations.
 * Supports nested resources, image handling, and advanced filtering.
 * @template TModel - The model type for type-safe operations
 */
class PageInteraction {
    /**
     * Initializes PageInteraction with default configuration and handler instances.
     */
    constructor() {
        this.pageDetailId = null;
        this.searchBody = null;
        this.pageData = new _model_PageModel__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.searchParam = new Object();
        this.viewPath = null;
        this.singleImage = true;
        this.transformData = null;
        this.initializeHandlers();
    }
    /**
     * Creates all event handler and processor instances for coordinated functionality.
     */
    initializeHandlers() {
        this.paginationHandler = new _EventHandler__WEBPACK_IMPORTED_MODULE_4__.PaginationHandler(this);
        this.searchHandler = new _EventHandler__WEBPACK_IMPORTED_MODULE_4__.SearchHandler(this);
        this.dataProcessor = new _DataProcessor__WEBPACK_IMPORTED_MODULE_7__.DataProcessor();
    }
    /**
     * Configures the data model type for type-safe operations.
     * Enables TypeScript type checking and initializes field builder with model type.
     * @template T - The specific model type
     * @param model - Constructor function for the model class
     * @returns Typed PageInteraction instance for method chaining
     */
    setModel(model) {
        this.model = model;
        this.fieldBuilder = new _FieldBuilder__WEBPACK_IMPORTED_MODULE_5__["default"](this.model);
        this.crudHanlder = new _EventHandler__WEBPACK_IMPORTED_MODULE_4__.CrudHanlder(this, this.dataProcessor, this.fieldBuilder);
        this.eventBinder = new _EventBinder__WEBPACK_IMPORTED_MODULE_6__["default"](this.paginationHandler, this.searchHandler, this.crudHanlder, this);
        return this;
    }
    /**
     * Sets the primary API endpoint path.
     * @param path - REST API endpoint path
     * @returns PageInteraction instance for method chaining
     */
    setPath(path) {
        this.path = path;
        return this;
    }
    /**
     * Sets the view/detail page navigation path.
     * @param viewPath - Base path for detail view navigation
     * @returns PageInteraction instance for method chaining
     */
    setViewPath(viewPath) {
        this.viewPath = viewPath;
        return this;
    }
    /**
     * Configures image selection behavior.
     * @param isSingleImage - True for single image, false for multiple
     * @returns PageInteraction instance for method chaining
     */
    isSingleImage(isSingleImage) {
        this.singleImage = isSingleImage;
        return this;
    }
    /**
     * Specifies fields to be sent as URL parameters instead of request body.
     * @param dataToHeader - Field names for URL parameters
     * @returns PageInteraction instance for method chaining
     */
    setDataToHeader(...dataToHeader) {
        this.fieldsToUrlParams = dataToHeader;
        return this;
    }
    /**
     * Sets initial search parameters for data filtering.
     * @param extraParam - Search/filter parameters object
     * @returns PageInteraction instance for method chaining
     */
    setExtraParam(extraParam) {
        this.searchParam = extraParam;
        return this;
    }
    /**
     * Merges additional search parameters with existing ones.
     * @param extraParam - Additional search parameters
     * @returns PageInteraction instance for method chaining
     */
    addExtraParams(extraParam) {
        this.searchParam =
            this.searchParam ? Object.assign(Object.assign({}, this.searchParam), extraParam) :
                extraParam;
        return this;
    }
    /**
     * Configures data transformation rules for table display.
     * @param transformData - Array of transformation configuration objects
     * @returns PageInteraction instance for method chaining
     */
    setTableDataTransform(...transformData) {
        this.transformData = transformData;
        return this;
    }
    /**
     * Sets up table column headers and structure.
     * @param fields - Model field names for table columns
     * @returns PageInteraction instance for method chaining
     */
    setTableHeaders(...fields) {
        (0,_TableUtils__WEBPACK_IMPORTED_MODULE_2__.setTableHeaders)(...fields);
        this.pageDetailId = null;
        return this;
    }
    /**
     * Updates pagination with current data metrics.
     * @param totalEntries - Total records in dataset
     * @param pageEntries - Records on current page
     * @returns PageInteraction instance for method chaining
     */
    setEntries(totalEntries, pageEntries) {
        this.pageData.totalEntries = totalEntries;
        this.pageData.pageEntries = pageEntries;
        (0,_TableUtils__WEBPACK_IMPORTED_MODULE_2__.createPagination)(this.pageData, this.transformData);
        return this;
    }
    /**
     * Specifies required fields for form validation.
     * @param fields - Model field names that are required
     * @returns PageInteraction instance for method chaining
     */
    setRequiredFields(...fields) {
        this.fieldBuilder.requiredFields = fields;
        return this;
    }
    /**
     * Configures fields to render as multi-line text areas.
     * @param fields - Model field names for textarea elements
     * @returns PageInteraction instance for method chaining
     */
    setTextareaFields(...fields) {
        this.fieldBuilder.textAreaFields = fields;
        return this;
    }
    /**
     * Adds a dropdown select field with static or dynamic options.
     * Supports cascading dropdowns and multi-selection.
     * @param name - Model field name
     * @param data - Static option data
     * @param path - API endpoint for dynamic options
     * @param linkPath - Parent API path for cascading
     * @param required - Whether field is mandatory
     * @param displayFieldData - Field name to display in options
     * @param linkPathName - Field name for cascading relationship
     * @param multiSelection - Whether multiple selections allowed
     * @returns PageInteraction instance for method chaining
     */
    addSelectFields(name, data, path, linkPath, required, displayFieldData, linkPathName, multiSelection) {
        // Prevent duplicate select field configuration
        if (this.fieldBuilder.selectFields.map(item => item.name)
            .includes(name)) {
            return this;
        }
        // Track multi-selection fields
        if (multiSelection) {
            this.fieldBuilder.multiSelectFields.push(name);
        }
        // Auto-add to required fields if specified
        if (required == true && !this.fieldBuilder.requiredFields.includes(name)) {
            this.fieldBuilder.requiredFields.push(name);
        }
        // Add select field configuration
        this.fieldBuilder.selectFields = [...this.fieldBuilder.selectFields,
            new _model_ModalSelectFieldModel__WEBPACK_IMPORTED_MODULE_8__["default"](name, data, path, linkPath, required, displayFieldData, linkPathName)];
        return this;
    }
    /**
     * Configures optional fields for the form.
     * @param fields - Model field names that are optional
     * @returns PageInteraction instance for method chaining
     */
    setOptionalFields(...fields) {
        this.fieldBuilder.optionalFields = fields;
        return this;
    }
    /**
     * Excludes fields from automatic form generation.
     * @param fields - Model field names to ignore
     * @returns PageInteraction instance for method chaining
     */
    setIgnoreFields(...fields) {
        this.fieldBuilder.ignoreFields = fields;
        return this;
    }
    /**
     * Configures fields for image/file upload functionality.
     * @param fields - Model field names for image/file data
     * @returns PageInteraction instance for method chaining
     */
    setPhotoFields(...fields) {
        this.fieldBuilder.photoFields = fields;
        return this;
    }
    /**
     * Creates a tab section in modal forms for organizing fields.
     * @param name - Display name for the tab
     * @param fields - Model field names to include in tab
     * @returns PageInteraction instance for method chaining
     */
    createTab(name, ...fields) {
        this.fieldBuilder.tabs[name] = fields;
        return this;
    }
    /**
     * Configures parent-child resource relationship for nested APIs.
     * @param parentPath - Parent resource API path
     * @param parentId - Parent resource identifier
     * @returns PageInteraction instance for method chaining
     */
    setParentPath(parentPath, parentId) {
        this.parentPath = parentPath;
        this.parentId = parentId;
        return this;
    }
    /**
     * Sets parent path and ID from currently authenticated employee.
     * @param parentPath - Parent resource API path
     */
    setParentEmployee(parentPath) {
        return __awaiter(this, void 0, void 0, function* () {
            this.parentPath = parentPath;
            var vUserData = _SecureAuth__WEBPACK_IMPORTED_MODULE_16__["default"].getUserInfo();
            this.parentId = vUserData === null || vUserData === void 0 ? void 0 : vUserData.id;
        });
    }
    /**
     * Configures search body for POST-based search requests.
     * @param searchBody - Search criteria object
     * @returns PageInteraction instance for method chaining
     */
    setSearchBody(searchBody) {
        if (searchBody == null) {
            return this;
        }
        this.searchBody = searchBody;
        return this;
    }
    /**
     * Orchestrates page initialization based on URL pattern.
     * Determines view type (table, detail, nested) and loads appropriate data.
     * @returns Promise resolving to PageInteraction instance
     */
    connectButton() {
        return __awaiter(this, void 0, void 0, function* () {
            // Check for detail page URL pattern
            var vMatch = _MyUtilities__WEBPACK_IMPORTED_MODULE_9__["default"].validateDetailPagePath();
            if (vMatch != null) {
                this.pageDetailId = Number(vMatch[2]);
                yield this.connectPageDetail();
                return;
            }
            // Check for nested detail page URL pattern
            var vMatch2 = _MyUtilities__WEBPACK_IMPORTED_MODULE_9__["default"].validateDetailPagePath2();
            if (vMatch2 != null) {
                yield this.connectPageDetail2();
                return;
            }
            // Default to table page view
            yield this.connectTablePage();
            $("#div-loading").removeClass('d-flex').addClass('d-none');
            return this;
        });
    }
    /**
     * Initializes table page with data, controls, and event handlers.
     * Sets up pagination, headers, modals, and binds all interactions.
     */
    connectTablePage() {
        return __awaiter(this, void 0, void 0, function* () {
            (0,___WEBPACK_IMPORTED_MODULE_14__.setLoadingStatus)(true);
            this.pageDetailId = null;
            // Load initial data with configured parameters
            var vResult = yield (0,_ApiHandler__WEBPACK_IMPORTED_MODULE_1__.getAllData)(this.path, this.pageData, this.searchParam, this.viewPath, false, null, null, this.searchBody);
            // Handle empty results
            if (vResult == null || vResult.data.length == 0) {
                return;
            }
            _MyLogger__WEBPACK_IMPORTED_MODULE_13__["default"].log("------- Get table data result:", vResult);
            // Update pagination metrics
            this.setEntries(vResult.entries, vResult.data['length']);
            // Map API path to language key for modal titles
            var vName = "";
            switch (this.path) {
                case _constants_APIConstants__WEBPACK_IMPORTED_MODULE_11__.PATH_API_MASTER_LAYOUT:
                    vName = "nav_master_layout";
                    break;
                case _constants_APIConstants__WEBPACK_IMPORTED_MODULE_11__.PATH_API_ADDRESS_MAP:
                    vName = "nav_address_map";
                    break;
                case _constants_APIConstants__WEBPACK_IMPORTED_MODULE_11__.PATH_API_CONSTRUCTION_CONTRACTOR:
                    vName = "nav_construction_contractor";
                    break;
                case _constants_APIConstants__WEBPACK_IMPORTED_MODULE_11__.PATH_API_DESIGN_UNIT:
                    vName = "nav_design_unit";
                    break;
                case _constants_APIConstants__WEBPACK_IMPORTED_MODULE_11__.PATH_API_INVESTOR:
                    vName = "nav_investor";
                    break;
                case _constants_APIConstants__WEBPACK_IMPORTED_MODULE_11__.PATH_API_REGION_LINK:
                    vName = "nav_region_link";
                    break;
                case _constants_APIConstants__WEBPACK_IMPORTED_MODULE_11__.PATH_API_UTILITIES:
                    vName = "nav_utilities";
                    break;
                case _constants_APIConstants__WEBPACK_IMPORTED_MODULE_11__.PATH_API_CUSTOMER:
                    vName = "nav_customer";
                    break;
                case _constants_APIConstants__WEBPACK_IMPORTED_MODULE_11__.PATH_API_CUSTOMER_REQUEST:
                    vName = "nav_customer_request";
                    break;
                case _constants_APIConstants__WEBPACK_IMPORTED_MODULE_11__.PATH_API_EMPLOYEE:
                    vName = "nav_employee";
                    break;
                case _constants_APIConstants__WEBPACK_IMPORTED_MODULE_11__.PATH_API_PROJECT:
                    vName = "nav_project";
                    break;
                case _constants_APIConstants__WEBPACK_IMPORTED_MODULE_11__.PATH_API_PROVINCE:
                    vName = "nav_province";
                    break;
                case _constants_APIConstants__WEBPACK_IMPORTED_MODULE_11__.PATH_API_DISTRICT:
                    vName = "nav_district";
                    break;
                case _constants_APIConstants__WEBPACK_IMPORTED_MODULE_11__.PATH_API_WARD:
                    vName = "nav_ward";
                    break;
                case _constants_APIConstants__WEBPACK_IMPORTED_MODULE_11__.PATH_API_STREET:
                    vName = "nav_street";
                    break;
                case _constants_APIConstants__WEBPACK_IMPORTED_MODULE_11__.PATH_API_REAL_ESTATE:
                    vName = "nav_real_estate";
                    break;
                case _constants_APIConstants__WEBPACK_IMPORTED_MODULE_11__.PATH_API_BLOG:
                    vName = "nav_blog";
                    break;
            }
            // Configure modals and generate form fields
            (0,_ModalUtils__WEBPACK_IMPORTED_MODULE_3__.updateModalName)(vName);
            yield this.fieldBuilder.beginGeneration();
            // Setup pagination and bind events
            (0,_TableUtils__WEBPACK_IMPORTED_MODULE_2__.createPagination)(this.pageData, this.transformData);
            this.eventBinder.bindAllEvents();
            (0,___WEBPACK_IMPORTED_MODULE_14__.setLoadingStatus)(false);
        });
    }
    /**
     * Loads and displays detailed information for a specific record.
     * Applies transformations and formats data for detail view.
     */
    connectPageDetail() {
        return __awaiter(this, void 0, void 0, function* () {
            (0,___WEBPACK_IMPORTED_MODULE_14__.setLoadingStatus)(true);
            // Fetch record by ID
            var vApi = new _APIRequestBuilder__WEBPACK_IMPORTED_MODULE_10__["default"]()
                .setPath(this.path, new _model_PageModel__WEBPACK_IMPORTED_MODULE_0__["default"]());
            var vResult = yield vApi.getById(this.pageDetailId);
            // Render detailed data
            this.loadDataToDetailTable(vResult.data);
            // Apply transformations if configured
            if (this.transformData != null) {
                var vRows = $("#table-data tbody tr");
                vRows.get().forEach(element => {
                    var vTitle = $(element).data(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_18__.DATA_FIELD_TITLE);
                    var vValue = $(element).data(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_18__.DATA_FIELD_VALUE);
                    _MyLogger__WEBPACK_IMPORTED_MODULE_13__["default"].log("--- title:", vTitle);
                    _MyLogger__WEBPACK_IMPORTED_MODULE_13__["default"].log("--- value:", vValue);
                    // Apply each transformation rule
                    this.transformData.forEach((transData) => {
                        if (!vValue && vValue.length <= 0) {
                            return;
                        }
                        if (transData.name == vTitle) {
                            // Add suffix if transforming to text
                            if (transData.to && transData.to == 'text') {
                                vValue = vValue + (transData === null || transData === void 0 ? void 0 : transData.suffix);
                            }
                            // Extract nested field value
                            if (transData.fields) {
                                vValue = JSON.parse(vValue)[transData.fields];
                                _MyLogger__WEBPACK_IMPORTED_MODULE_13__["default"].log("--- updated value:", vValue);
                            }
                            $(element).find('td:last-of-type').html(vValue);
                        }
                    });
                });
                this.transformData.forEach(item => {
                });
            }
            (0,___WEBPACK_IMPORTED_MODULE_14__.setLoadingStatus)(false);
        });
    }
    /**
     * Loads nested detail view with parent and related child records.
     * Displays parent data in secondary table and child records in main table.
     */
    connectPageDetail2() {
        return __awaiter(this, void 0, void 0, function* () {
            (0,___WEBPACK_IMPORTED_MODULE_14__.setLoadingStatus)(true);
            this.pageDetailId = null;
            // Load parent record
            var vApi = new _APIRequestBuilder__WEBPACK_IMPORTED_MODULE_10__["default"]()
                .setPath(this.parentPath, new _model_PageModel__WEBPACK_IMPORTED_MODULE_0__["default"]());
            var vData = yield vApi.getById(this.parentId);
            // Display parent data in secondary table
            this.loadDataToDetailTable(vData.data, 'table-data2');
            // Load child records in main table
            this.connectTablePage();
            (0,___WEBPACK_IMPORTED_MODULE_14__.setLoadingStatus)(false);
        });
    }
    /**
     * Renders record data into a formatted detail table.
     * Handles field formatting, image URLs, and object relationships.
     * @param data - Record data to display
     * @param tableId - Optional table element ID
     */
    loadDataToDetailTable(data, tableId) {
        var vKeys = Object.keys(data);
        vKeys.forEach(key => {
            // Convert field name to display format
            var vName = _MyUtilities__WEBPACK_IMPORTED_MODULE_9__["default"].convertName(key, 'tableHeaderName');
            var vFieldId = _MyUtilities__WEBPACK_IMPORTED_MODULE_9__["default"].convertName(key, 'tableId');
            var vValue = data[key];
            _MyLogger__WEBPACK_IMPORTED_MODULE_13__["default"].log("--- table key: " + vName + " --- " + vValue);
            // Extract ID from object relationships
            if (vValue != null && typeof vValue == 'object') {
                vValue = vValue.id;
            }
            // Check if value is an image path
            var vSplit = vValue != null && vValue.length > 0 ?
                vValue.split('.') : null;
            if (vSplit != null && _constants_webConstants__WEBPACK_IMPORTED_MODULE_17__.IMAGE_EXTENSION
                .includes(vSplit[vSplit.length - 1])) {
                _MyLogger__WEBPACK_IMPORTED_MODULE_13__["default"].log("--- is image file: " + vValue);
                // Build complete image URL
                vValue = vValue.startsWith('http') ? vValue :
                    _constants_APIConstants__WEBPACK_IMPORTED_MODULE_11__.BASE_URL + _constants_APIConstants__WEBPACK_IMPORTED_MODULE_11__.PATH_IMAGE + "/" + this.path + "/" +
                        this.pageDetailId + "/" + data[key];
                // Create responsive image element
                vValue = $("<img>")
                    .css('max-width', '100%')
                    .attr('src', vValue);
            }
            // Create table row with formatted data
            _MyLogger__WEBPACK_IMPORTED_MODULE_13__["default"].log("----- language key: " + "input_" +
                vFieldId.split('-').join('_'));
            var vTableRow1 = new _components_table_TableRowComponent__WEBPACK_IMPORTED_MODULE_12__["default"]()
                .setData(_language__WEBPACK_IMPORTED_MODULE_15__["default"][(0,___WEBPACK_IMPORTED_MODULE_14__.getLanguage)()]["input_" +
                vFieldId.split('-').join('_')], vValue);
            // Add data attributes for transformations
            var vResult = $(vTableRow1).find('tr').data(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_18__.DATA_FIELD_TITLE, key)
                .data(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_18__.DATA_FIELD_VALUE, typeof data[key] == "object" ?
                JSON.stringify(data[key]) :
                data[key])
                .get();
            // Append to specified or default table
            $(tableId && !tableId.startsWith('#') ?
                "#" + tableId : "#table-data").find('tbody')
                .append(vResult);
        });
    }
}


/***/ })

}]);
//# sourceMappingURL=src_utilities_Interaction_ts.bundle.js.map