"use strict";
(self["webpackChunkadmin"] = self["webpackChunkadmin"] || []).push([["src_pages_verification_ts"],{

/***/ "./src/pages/verification.ts":
/*!***********************************!*\
  !*** ./src/pages/verification.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ verificationPage)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _constants_webConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/webConstants */ "./src/constants/webConstants.ts");
/* harmony import */ var _utilities_ApiHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/ApiHandler */ "./src/utilities/ApiHandler.ts");
/* harmony import */ var _utilities_EventHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/EventHandler */ "./src/utilities/EventHandler.ts");
/* harmony import */ var _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/MyLogger */ "./src/utilities/MyLogger.ts");
/* harmony import */ var _utilities_MyUtilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utilities/MyUtilities */ "./src/utilities/MyUtilities.ts");
/* harmony import */ var _utilities_SecureAuth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilities/SecureAuth */ "./src/utilities/SecureAuth.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







// Global action identifier for verification type
var gAction = -1;
// Event handlers
function onLoad() {
    $(".button-visibility").on('click', _utilities_EventHandler__WEBPACK_IMPORTED_MODULE_3__.onButtonVisibilityClick);
    $("#form-verify").on('submit', onFormSubmit);
    $("#button-resend-email").on('click', onButtonResendEmailClick);
    setupVerificationInputs();
}
function onFormSubmit(e) {
    return __awaiter(this, void 0, void 0, function* () {
        if (e) {
            e.preventDefault();
        }
        (0,___WEBPACK_IMPORTED_MODULE_0__.setLoadingStatus)(true);
        var vObject = { code: '' };
        // B1: Collect form data
        collectData(vObject);
        _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_4__["default"].log("Verification");
        // B2: Validate form data
        var vResultValidate = validateData(vObject);
        if (!vResultValidate) {
            return;
        }
        // B3: Call API
        var vUserData = _utilities_SecureAuth__WEBPACK_IMPORTED_MODULE_6__["default"].getUserInfo();
        // Verify code with API
        var vResult = yield (0,_utilities_ApiHandler__WEBPACK_IMPORTED_MODULE_2__.requestVerifyCodeById)(vUserData === null || vUserData === void 0 ? void 0 : vUserData.id, vObject.code, gAction);
        if (vResult == null) {
            return;
        }
        yield _utilities_MyUtilities__WEBPACK_IMPORTED_MODULE_5__["default"].checkExistingUser();
        (0,___WEBPACK_IMPORTED_MODULE_0__.setLoadingStatus)(false);
        (0,___WEBPACK_IMPORTED_MODULE_0__["default"])(_constants_webConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_ADDRESS_MAP);
    });
}
function onButtonResendEmailClick() {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
// Data collection and validation
function collectData(paramObject) {
    var vNum1 = $("#input-verify-code1").val().toString().trim();
    var vNum2 = $("#input-verify-code2").val().toString().trim();
    var vNum3 = $("#input-verify-code3").val().toString().trim();
    var vNum4 = $("#input-verify-code4").val().toString().trim();
    var vNum5 = $("#input-verify-code5").val().toString().trim();
    paramObject['code'] = vNum1 + vNum2 + vNum3 + vNum4 + vNum5;
    // Set action based on existing session
    gAction = 0;
}
function validateData(paramObject) {
    let vResult = true;
    if (paramObject['code'].length == 0) {
        $("#input-verification").addClass('border-danger')
            .attr('title', 'Code is incorrect');
        vResult = false;
    }
    return vResult;
}
function setupVerificationInputs() {
    const vInputs = $('.input-code-verify');
    vInputs.each(function (index) {
        const vInputCurrent = $(this);
        // Handle input event
        vInputCurrent.on('input', function (e) {
            const value = $(this).val();
            // Only allow alphanumeric characters
            const sanitized = value.replace(/[^a-zA-Z0-9]/g, '');
            $(this).val(sanitized.toUpperCase());
            // Move to next input if filled
            if (sanitized.length > 1) {
                $(this).val(value.slice(value.length - 1));
            }
            if (sanitized.length != 1) {
                return;
            }
            if (index < vInputs.length - 1) {
                vInputs.eq(index + 1).focus();
                return;
            }
            _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_4__["default"].log("Last input");
            onFormSubmit();
        });
        // Handle keydown for backspace
        vInputCurrent.on('keydown', function (e) {
            // If backspace and input is empty, move to previous input
            if (e.key === 'Backspace' && $(this).val() === '' && index > 0) {
                vInputs.eq(index - 1).focus();
            }
        });
        // Handle paste event
        vInputCurrent.on('paste', function (e) {
            var _a;
            e.preventDefault();
            // Get pasted text
            const pastedText = ((_a = e.originalEvent.clipboardData) === null || _a === void 0 ? void 0 : _a.getData('text')) || '';
            const sanitized = pastedText.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
            // Fill inputs with pasted characters
            for (let i = 0; i < sanitized.length && (index + i) < vInputs.length; i++) {
                vInputs.eq(index + i).val(sanitized[i]);
            }
            // Focus next empty input or last input
            const nextIndex = Math.min(index + sanitized.length, vInputs.length - 1);
            vInputs.eq(nextIndex).focus();
        });
    });
    // Focus first input on load
    vInputs.eq(0).focus();
}
// Main page initialization
function verificationPage() {
    return __awaiter(this, void 0, void 0, function* () {
        const vHtml = yield fetch(_constants_webConstants__WEBPACK_IMPORTED_MODULE_1__.FOLDER_TEMPLATE + _constants_webConstants__WEBPACK_IMPORTED_MODULE_1__.TEMPLATE_VERIFICATION)
            .then(res => res.text());
        $("#main-container").append(vHtml);
        onLoad();
    });
}


/***/ })

}]);
//# sourceMappingURL=src_pages_verification_ts.bundle.js.map