"use strict";
(self["webpackChunkadmin"] = self["webpackChunkadmin"] || []).push([["src_pages_real_estate_verify_ts"],{

/***/ "./src/components/card/CardProperty.ts":
/*!*********************************************!*\
  !*** ./src/components/card/CardProperty.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CardProperty)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./src/index.ts");
/* harmony import */ var _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/APIConstants */ "./src/constants/APIConstants.ts");
/* harmony import */ var _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/webConstants */ "./src/constants/webConstants.ts");
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../language */ "./src/language/index.ts");
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
 * CardProperty - Property Card Component Factory Function
 *
 * Creates a dynamic property card element for displaying real estate listings
 * with comprehensive property information, images, and metadata. Supports
 * various layout configurations and optional edit functionality.
 *
 * Features:
 * - Responsive card layout with Bootstrap grid system
 * - Property image display with fallback handling
 * - Dynamic pricing with automatic formatting
 * - Time-based posting date calculation (days/months/years ago)
 * - Property type indicators (Sell/Rent) with color coding
 * - Property details display (acreage, bedrooms, bathrooms)
 * - Optional edit mode with action buttons
 * - Configurable grid layout (items per row)
 *
 * @param property - Real estate property data object
 * @param isHorizontal - Optional horizontal layout flag (currently unused)
 * @param itemPerRow - Number of cards per row (affects grid sizing)
 * @param isEdit - Whether to show edit button for property management
 * @returns Promise resolving to HTMLElement containing the property card
 */
function CardProperty(property, itemPerRow, isEdit) {
    return __awaiter(this, void 0, void 0, function* () {
        const template = document.createElement('template');
        // Process property title with fallback for missing data
        var title = property.title != null && property.title.length > 0 ?
            property.title : 'No title';
        // Construct property image URL
        // var vPhoto = await validateImage(property.photo, PATH_API_REAL_ESTATE, property.id);
        var vPhoto = _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.BASE_URL + _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_IMAGE + '/' +
            _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_REAL_ESTATE + "/" + property.id + "/" + property.photo;
        // Calculate and format posting date relative to current time
        var vDateCreate = property.createDate;
        vDateCreate = new Date(vDateCreate);
        var vYear = property.yearCreate;
        var vMonth = property.monthCreate;
        var vDay = property.dayCreate;
        // Format time difference for user-friendly display
        var vDisplayDate = "";
        if (vYear >= 1) {
            vDisplayDate = vYear + ' ' + _language__WEBPACK_IMPORTED_MODULE_3__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()].text_date_year_ago;
        }
        else if (vMonth >= 1) {
            vDisplayDate = vMonth + ' ' + _language__WEBPACK_IMPORTED_MODULE_3__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()].text_date_month_ago;
        }
        else {
            vDisplayDate = vDay + ' ' + _language__WEBPACK_IMPORTED_MODULE_3__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()].text_date_day_ago;
        }
        // Process and format property price
        var vPrice = property.price;
        // Convert to millions if price is in thousands (< 7 digits)
        vPrice = property.request == 0 ? vPrice * _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.BILLION : vPrice * _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.MILLION;
        // Generate complete card HTML with dynamic content
        var vHtml = `
        <article class="col-lg-${itemPerRow ? 12 / itemPerRow : 4} col-md-6 card-property">
        <a href="/properties/${property.id}" data-link class="letter-spacing-none ">
                <div class="card h-100">
                    <!-- Property image with responsive aspect ratio -->
                    <img style="aspect-ratio: 1.2; object-fit: cover;"
                        src="${vPhoto}" class="card-img-top"
                        alt="">
                    
                    <!-- Property type badge (Sell/Rent) with color coding -->
                    <p class="mb-0 position-absolute ${property.request == 0 ? "bg-warning" : "bg-primary-my"} px-3 py-2 font-weight-bold rounded-lg" style="top:1rem;left:1rem">${property.request == 0 ? "Sell" : "Rent"}</p>
                    
                    <div class="card-body d-flex flex-column">
                        <!-- Property title and basic information -->
                        <h5 class="card-title">${title}</h5>
                        <p class="p-address">${property.addressFull}</p>
                        <p>Posted: ${vDisplayDate}</p>
                        
                        <!-- Property details grid (acreage, bedrooms, bathrooms) -->
                        <div class="row">
                            <div class="d-flex align-items-center col-md-4">
                                <i class="fa-solid fa-expand mr-2"></i>
                                <span class="span-square small">${property.acreage && property.acreage != null ? property.acreage : 'No info'}</span>
                            </div>
                            <div class="d-flex align-items-center col-md-4">
                                <i class="fa-solid fa-bed mr-2"></i>
                                <span class="span-bedroom small">${property.bedroom && property.bedroom != null ? property.bedroom : 0}</span>
                            </div>
                            <div class="d-flex align-items-center col-md-4">
                                <i class="fa-solid fa-toilet mr-2"></i>
                                <span class="span-bathroom small">${property.bath && property.bath != null ? property.bath : 0}</span>
                            </div>
                        </div>
                        
                        <!-- Optional edit button for property management -->
                         ${isEdit == true ?
            `<a href="/properties/${property.id}/edit" class="btn btn-info mt-auto mb-0" data-link style="z-index=3;">Edit</a>`
            :
                ""}
                    </div>
                    
                    <!-- Property price display -->
                    <div class="card-footer">
                        <p class="card-price text-danger mb-0">Price: ${vPrice.toString()}</p>
                    </div>
                </div>
                </a>
            </article>
        `;
        template.innerHTML = vHtml;
        return template.content.firstElementChild;
    });
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

/***/ "./src/pages/real_estate_verify.ts":
/*!*****************************************!*\
  !*** ./src/pages/real_estate_verify.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PropertyDetailPage)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _components_card_CardProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/card/CardProperty */ "./src/components/card/CardProperty.ts");
/* harmony import */ var _constants_APIConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/APIConstants */ "./src/constants/APIConstants.ts");
/* harmony import */ var _constants_webConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/webConstants */ "./src/constants/webConstants.ts");
/* harmony import */ var _model_PageModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/PageModel */ "./src/model/PageModel.ts");
/* harmony import */ var _model_RealEstateModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/RealEstateModel */ "./src/model/RealEstateModel.ts");
/* harmony import */ var _utilities_ApiHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilities/ApiHandler */ "./src/utilities/ApiHandler.ts");
/* harmony import */ var _utilities_APIRequestBuilder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utilities/APIRequestBuilder */ "./src/utilities/APIRequestBuilder.ts");
/* harmony import */ var _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utilities/MyLogger */ "./src/utilities/MyLogger.ts");
/* harmony import */ var _utilities_SecureAuth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utilities/SecureAuth */ "./src/utilities/SecureAuth.ts");
/* harmony import */ var _utilities_MyUtilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utilities/MyUtilities */ "./src/utilities/MyUtilities.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};











// REGION 1: Global variables
var gIsSCrolling = false;
var gCurrentImage = 1;
var gImagesDefault = [];
var gProperty = null;
var gStatus = 0;
// REGION 2: Element events
// REGION 3: Event hanlders
// REGION 4: Common functions
function onLoad() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e;
        const path = window.location.pathname;
        var match = _utilities_MyUtilities__WEBPACK_IMPORTED_MODULE_10__["default"].validateVerifyPath();
        const propertyId = match ? match[1] : null;
        _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_8__["default"].log("Match:", match[1]);
        var vResult = yield new _utilities_APIRequestBuilder__WEBPACK_IMPORTED_MODULE_7__["default"]()
            .setPath(_constants_APIConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_API_REAL_ESTATE, new _model_PageModel__WEBPACK_IMPORTED_MODULE_4__["default"]())
            .getById(Number(propertyId));
        gProperty = vResult['data'];
        getNearbyProperties();
        $("#button-slide-right").on('click', () => handleImageDisplay(true));
        $("#button-slide-left").on('click', () => handleImageDisplay(false));
        uploadContactCard(gProperty.createby);
        uploadProjectCard(gProperty.project);
        // MyLogger.log("------ IMAGE PATH:", vImage)
        // MyLogger.log(vData)
        $("#h5-title").text(gProperty.title ? gProperty.title : "No title");
        $("#span-description").text(gProperty.description ? gProperty.description : "No description");
        _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_8__["default"].log(gProperty.request);
        // $("#select-request").find(`option[value=${vData.request}]`).attr('selected');
        $("#p-room-type").text(_model_RealEstateModel__WEBPACK_IMPORTED_MODULE_5__.RealEstateType[gProperty.type]);
        _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_8__["default"].log(_model_RealEstateModel__WEBPACK_IMPORTED_MODULE_5__.RealEstateType[2], gProperty.type);
        $("#p-furniture").text(_model_RealEstateModel__WEBPACK_IMPORTED_MODULE_5__.RealEstateFurniture[gProperty.furnitureType]);
        $("#button-contact-phone").on('click', function () {
            var vPhone = gProperty.createBy.homePhone.split('').map((number, index) => {
                if (index % 3 == 0 && index < 9) {
                    return ' ' + number;
                }
                return number;
            }).join('');
            $("#span-phone-mobile").text(vPhone);
            navigator.clipboard.writeText(vPhone.split(' ').join(''));
            $(this).popover({ trigger: 'focus' });
        });
        var vPriceText = '';
        if (gProperty.price.length > 3) {
            vPriceText = gProperty.price + " billion";
        }
        else {
            vPriceText = gProperty.price + " million";
        }
        if (gProperty.request == 3) {
            vPriceText += "/month";
        }
        $(".p-price").html(vPriceText);
        $(".p-bedroom").text((_a = gProperty.bedroom) !== null && _a !== void 0 ? _a : 0);
        $(".p-acreage").text((_b = gProperty.acreage) !== null && _b !== void 0 ? _b : 0);
        $(".p-bathroom").text((_c = gProperty.bathroom) !== null && _c !== void 0 ? _c : 0);
        $("#span-image-current").text(gCurrentImage);
        $("#span-realestate-amount").text(gProperty.project.numRealEstates);
        // if (vImage != null) {
        //     $("#span-image-max").text(vImage == null ? 1 : vImage['data'].length)
        //     gImagesDefault = vImage['data']
        // }
        var vMasterLayouts = (_d = gProperty.project) === null || _d === void 0 ? void 0 : _d.masterLayouts;
        _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_8__["default"].log("Master layouts:", vMasterLayouts);
        if (vMasterLayouts == null || vMasterLayouts.length == 0) {
            $("#div-floor-plan").parent().addClass('d-none');
        }
        // TODO: continue
        (_e = gProperty.project.utilities) === null || _e === void 0 ? void 0 : _e.split(',').forEach((item) => __awaiter(this, void 0, void 0, function* () {
            // MyLogger.log('---- utilities', item);
            var vResultUtil = yield new _utilities_APIRequestBuilder__WEBPACK_IMPORTED_MODULE_7__["default"]()
                .setPath(_constants_APIConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_API_UTILITIES, new _model_PageModel__WEBPACK_IMPORTED_MODULE_4__["default"]())
                .getById(Number(item));
            var vUtilities = vResultUtil === null || vResultUtil === void 0 ? void 0 : vResultUtil.data;
            // MyLogger.log("Utilities:", vUtilities)
            $("#div-amenities").append(`<p class='col-lg-6'><i class="fa-regular fa-square-check pr-3 text-secondary-my"></i>${vUtilities.name}</p>`);
        }));
        // $(".p-price").html(formatPrice(vData.price * PRICE_MIL));
        var vAddress = '';
        gProperty['address'] ? vAddress += gProperty['address'] : '';
        gProperty['street'] ? vAddress += ", " + gProperty['street'].prefix + " " + gProperty['street'].name : '';
        gProperty['ward'] ? vAddress += ", " + gProperty['ward'].prefix + " " + gProperty['ward'].name : '';
        gProperty['district'] ? vAddress += ", " + gProperty['district'].prefix + " " + gProperty['district'].name : '';
        gProperty['province'] ? vAddress += ", " + gProperty['province'].name : '';
        var vPhoto = gProperty['photo'];
        if ((vPhoto == null || vPhoto.length == 0)
        //  && vImage == null
        ) {
            vPhoto = _constants_APIConstants__WEBPACK_IMPORTED_MODULE_2__.IMAGE_NOT_FOUND;
        }
        else if (vPhoto != null && vPhoto.length > 0 && vPhoto.slice(0, 4) != 'http') {
            vPhoto = `${_constants_APIConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_IMAGE}${_constants_APIConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_API_REAL_ESTATE}/${gProperty['id']}/${vPhoto}`;
        }
        // if (vImage != null) {
        //     vImage['data'].forEach(item => {
        //         $("#image-slide").append(`<img class="w-100" style=" flex-shrink: 0;" src="${IMAGE_PATH}${item}" alt="">
        // `)
        //     })
        // }
        vPhoto != null ? $("#image-slide").append(`<img class="w-100" style=" flex-shrink: 0;" src="${vPhoto}" alt="">`) : '';
        $("#span-address").text(vAddress);
        if (gProperty['customer'] == null) {
            $("#span-phone").parent().addClass('d-none');
        }
        else {
            $("#span-phone").text(gProperty['customer'].mobile);
        }
        if (gProperty.createBy != null) {
            $("#button-bio").attr('href', '/agents/' + gProperty.createBy.id);
        }
        $("#button-reject").on('click', onButtonRejectClick);
        $("#button-take-down").on('click', onButtonTakeDownClick);
        $("#button-accept").on('click', onButtonAcceptClick);
        $("#button-sold").on('click', onButtonSoldClick);
    });
}
function updateRealEstateStatus(status) {
    return __awaiter(this, void 0, void 0, function* () {
        // Update number of views
        var vObject = {
            status: status
        };
        var vUserData = _utilities_SecureAuth__WEBPACK_IMPORTED_MODULE_9__["default"].getUserInfo();
        var vResult = yield (0,_utilities_ApiHandler__WEBPACK_IMPORTED_MODULE_6__.requestUpdateDataSingle)(vObject, _constants_APIConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_API_REAL_ESTATE, gProperty.id, _constants_APIConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_API_EMPLOYEE, vUserData.id);
        if (vResult != null && vResult['statusCode'] == 200) {
            (0,___WEBPACK_IMPORTED_MODULE_0__["default"])(_constants_webConstants__WEBPACK_IMPORTED_MODULE_3__.PATH_DEFAULT);
        }
    });
}
function getNearbyProperties() {
    return __awaiter(this, void 0, void 0, function* () {
        _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_8__["default"].log("--- property data: ", gProperty);
        var vParams = new URLSearchParams();
        vParams.set('latest', 'true');
        vParams.set('provinceId', gProperty.province.id);
        vParams.set('districtId', gProperty.district.id);
        vParams.set('priceMax', gProperty.price);
        var vResult = yield new _utilities_APIRequestBuilder__WEBPACK_IMPORTED_MODULE_7__["default"]()
            .setPath(_constants_webConstants__WEBPACK_IMPORTED_MODULE_3__.PATH_REAL_ESTATE, new _model_PageModel__WEBPACK_IMPORTED_MODULE_4__["default"]())
            .setParams(vParams);
        _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_8__["default"].log("Data:", vResult);
        if (vResult == null || vResult['data'] == null) {
            return;
        }
        var vLength = 0;
        vResult['data'].forEach((item) => __awaiter(this, void 0, void 0, function* () {
            if (item.id == gProperty.id) {
                return;
            }
            vLength += 1;
            var vCard = (0,_components_card_CardProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(item);
            $("#div-properties-nearby").append(yield vCard);
        }));
        if (vLength <= 0) {
            $("#div-properties-nearby").parent().addClass('d-none');
        }
    });
}
function uploadContactCard(paramData) {
    if (paramData == null) {
        $("#div-user").addClass('d-none');
        return;
    }
    var vPhoto = paramData.photo ? _constants_APIConstants__WEBPACK_IMPORTED_MODULE_2__.BASE_URL + "uploads/" + _constants_APIConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_API_EMPLOYEE + "/" + paramData.id + "/" + paramData.photo : _constants_APIConstants__WEBPACK_IMPORTED_MODULE_2__.IMAGE_NOT_FOUND;
    $("#h5-customer-name").text(paramData.firstName + ' ' + paramData.lastName);
    $("#img-customer-photo").attr('src', vPhoto);
    var vDate = new Date(paramData.hireDate);
    $("#span-customer-year").text(vDate.getFullYear());
    $("#span-customer-num").text(paramData.numRealEstates);
    var vPhone = paramData.homePhone;
    vPhone = vPhone === null || vPhone === void 0 ? void 0 : vPhone.split('/')[0];
    if (vPhone == null) {
        $("#a-contact-zalo").addClass('d-none');
        return;
    }
    // $("#a-contact-zalo").attr('href', ZALO_LINK + vPhone)
    $("#span-phone-mobile").text(vPhone.split('').map((number, index) => {
        if (index < 7) {
            if (index % 3 == 0) {
                return ' ' + number;
            }
            return number;
        }
        return '*';
    }).join(''));
}
function uploadProjectCard(paramData) {
    var _a;
    $("#div-property-project img").attr('src', (_a = paramData.photo) !== null && _a !== void 0 ? _a : _constants_APIConstants__WEBPACK_IMPORTED_MODULE_2__.IMAGE_NOT_FOUND);
    $("#div-property-project .name").text(paramData.name.toLowerCase());
    $("#div-property-project .address").text(paramData.address);
}
function handleImageDisplay(isRight) {
    if (!gIsSCrolling) {
        gIsSCrolling = true;
        var vScrollWidth = $("#image-slide")[0].clientWidth;
        var vScrollDistance = $("#image-slide").scrollLeft() +
            (isRight ? vScrollWidth : -vScrollWidth);
        // MyLogger.log(vScrollDistance)
        $("#image-slide").animate({ scrollLeft: vScrollDistance }, 300, function () {
            gIsSCrolling = false;
        });
        if (gCurrentImage < gImagesDefault.length) {
            gCurrentImage += 1;
            $("#span-image-current").text(gCurrentImage);
        }
    }
    if (isRight && gCurrentImage < gImagesDefault.length) {
        gCurrentImage += 1;
    }
    if (!isRight && gCurrentImage > 1) {
        gCurrentImage -= 1;
    }
    $("#span-image-current").text(gCurrentImage);
}
function onButtonRejectClick() {
    updateRealEstateStatus(4);
}
function onButtonTakeDownClick() {
    updateRealEstateStatus(3);
}
function onButtonAcceptClick() {
    updateRealEstateStatus(1);
}
function onButtonSoldClick() {
    updateRealEstateStatus(2);
}
function PropertyDetailPage() {
    return __awaiter(this, void 0, void 0, function* () {
        _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_8__["default"].log("Verify page");
        const html = yield fetch('/templates/real_estate_verify.html')
            .then(res => res.text());
        $("#main-container").html(html);
        yield onLoad();
    });
}


/***/ })

}]);
//# sourceMappingURL=src_pages_real_estate_verify_ts.bundle.js.map