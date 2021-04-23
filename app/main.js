/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./index.html");
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @style/main.scss */ "./scss/main.scss");
/* harmony import */ var _js_Slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/Slider */ "./js/Slider.js");
/* harmony import */ var _js_device__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/device */ "./js/device.js");
/* harmony import */ var _js_device__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_device__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_slide_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/slide-toggle */ "./js/slide-toggle.js");
/* harmony import */ var _js_slide_toggle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_slide_toggle__WEBPACK_IMPORTED_MODULE_4__);






/***/ }),

/***/ "./js/Slider.js":
/*!**********************!*\
  !*** ./js/Slider.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../node_modules/swiper/esm/components/core/core-class.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var SwiperSlider = /*#__PURE__*/function () {
  function SwiperSlider(selector) {
    _classCallCheck(this, SwiperSlider);

    this.selector = selector;
    this.slider = null;
    this.slides = document.querySelectorAll('.swiper-slide');
    this.$el = document.querySelector(selector);
    this.groupsInfo = {};
    this.$headerNav = document.getElementById('headerNav');
  }

  _createClass(SwiperSlider, [{
    key: "init",
    value: function init() {
      this.getGroupsInfo();

      var _this = this;

      this.slider = new swiper__WEBPACK_IMPORTED_MODULE_0__.default(this.selector, {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: false,
        on: {
          slideChangeTransitionStart: function slideChangeTransitionStart() {
            _this.slideChange();
          }
        }
      });
    }
  }, {
    key: "getGroupsInfo",
    value: function getGroupsInfo() {
      var _iterator = _createForOfIteratorHelper(this.slides),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var group = _step.value;
          var groupName = group.getAttribute('data-group');

          if (this.groupsInfo[groupName]) {
            this.groupsInfo[groupName] += 1;
          } else {
            this.groupsInfo[groupName] = 1;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "slideChange",
    value: function slideChange() {
      var currIndex = this.slider.realIndex;
      var groupNumber = this.slides[currIndex].getAttribute('data-group');
      var groupCount = this.groupsInfo[groupNumber];
      var groupLineArr = this.$headerNav.querySelectorAll('span');

      var _iterator2 = _createForOfIteratorHelper(groupLineArr),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var line = _step2.value;

          if (line.getAttribute('data-group') === groupNumber) {}
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }]);

  return SwiperSlider;
}();

document.addEventListener('DOMContentLoaded', function () {
  var slider = new SwiperSlider('#slider');
  slider.init();
});

/***/ }),

/***/ "./js/device.js":
/*!**********************!*\
  !*** ./js/device.js ***!
  \**********************/
/***/ (function() {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function cardRevert(selector) {
  var cardList = document.querySelectorAll(selector);

  var _iterator = _createForOfIteratorHelper(cardList),
      _step;

  try {
    var _loop = function _loop() {
      var card = _step.value;
      card.addEventListener('click', function () {
        card.classList.toggle('is-active');
      });
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

document.addEventListener('DOMContentLoaded', function () {
  cardRevert('.device');
});

/***/ }),

/***/ "./js/slide-toggle.js":
/*!****************************!*\
  !*** ./js/slide-toggle.js ***!
  \****************************/
/***/ (function() {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function slideToggle(item, list) {
  var content = item.querySelector('.content');
  var openSelector = 'is-open';
  item.addEventListener('click', function () {
    if (item.classList.contains(openSelector)) {
      closeItem(item, content);
    } else {
      var _iterator = _createForOfIteratorHelper(list),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var i = _step.value;

          if (i.classList.contains(openSelector)) {
            closeItem(i, i.querySelector('.content'));
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      item.classList.add(openSelector);
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });

  function closeItem(item, content) {
    item.classList.remove(openSelector);
    content.style.maxHeight = 0;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  var slideToggleElList = document.querySelectorAll('.js-slide-toggle');

  var _iterator2 = _createForOfIteratorHelper(slideToggleElList),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var item = _step2.value;
      slideToggle(item, slideToggleElList);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
});

/***/ }),

/***/ "./images/Squircle-2.png":
/*!*******************************!*\
  !*** ./images/Squircle-2.png ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "126226b5cc6fa6001c2a.png";

/***/ }),

/***/ "./images/Squircle-3.png":
/*!*******************************!*\
  !*** ./images/Squircle-3.png ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "50dcfcfd44aae3c5d3b2.png";

/***/ }),

/***/ "./images/Squircle-4.png":
/*!*******************************!*\
  !*** ./images/Squircle-4.png ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "4e399f63722d2642127e.png";

/***/ }),

/***/ "./images/Squircle.png":
/*!*****************************!*\
  !*** ./images/Squircle.png ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "9c854417048963377fd9.png";

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/Squircle.png */ "./images/Squircle.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/Squircle-2.png */ "./images/Squircle-2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/Squircle-3.png */ "./images/Squircle-3.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/Squircle-4.png */ "./images/Squircle-4.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var code = "<!DOCTYPE html>\r\n<html lang=\"ru\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\r\n    <title>Title</title>\r\n</head>\r\n\r\n<body>\r\n    <div class=\"page\">\r\n        <header class=\"header\">\r\n            <a href=\"javascript:void(0)\" class=\"header__logo\"></a>\r\n            <div class=\"header__nav\" id=\"headerNav\">\r\n                <span data-group=\"1\"></span>\r\n                <span data-group=\"2\"></span>\r\n                <span data-group=\"3\"></span>\r\n                <span data-group=\"4\"></span>\r\n            </div>\r\n        </header>\r\n\r\n        <div class=\"container\">\r\n            <div class=\"swiper-container\" id=\"slider\">\r\n                <div class=\"swiper-wrapper\">\r\n                    <div class=\"swiper-slide slide slide_center\" data-group=\"1\">\r\n                        <div class=\"slide__content\">\r\n                            <h3 class=\"slide__title slide__title_big\">Каждому&nbsp;&mdash; своя<br />Yota и&nbsp;своя\r\n                                eSIM</h3>\r\n                            <p class=\"slide__desc\">Все та&nbsp;же SIM&nbsp;карта,<br />но&nbsp;без пластика</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"swiper-slide slide\" data-group=\"1\">\r\n                        <div class=\"slide__content\">\r\n                            <h3 class=\"slide__title\">Получайте номер, не&nbsp;выходя из&nbsp;дома</h3>\r\n                            <p class=\"slide__desc\">Чтобы оформить eSIM нужны только паспорт и&nbsp;смартфон.</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"swiper-slide slide\" data-group=\"1\">\r\n                        <div class=\"slide__content\">\r\n                            <h3 class=\"slide__title\">Не ограничивайте себя</h3>\r\n                            <p class=\"slide__desc\">SIM карта одна, а&nbsp;номеров много. Теперь необязательно иметь\r\n                                несколько слотов в&nbsp;телефоне.</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"swiper-slide slide\" data-group=\"2\">\r\n                        <div class=\"slide__content\">\r\n                            <h3 class=\"slide__title\">Гарантия безопасности </h3>\r\n                            <p class=\"slide__desc\">eSIM встроена в&nbsp;устройство, поэтому при потере или краже можно\r\n                                заблокировать не&nbsp;только&nbsp;ее, но&nbsp;и&nbsp;гаджет.</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"swiper-slide slide\" data-group=\"2\">\r\n                        <div class=\"slide__content slide__content_full\">\r\n                            <h3 class=\"slide__title\">Один номер для всех ваших устройств</h3>\r\n                            <div class=\"device-list\">\r\n                                <div class=\"device\">\r\n                                    <div class=\"device__bg device__bg_back\"></div>\r\n                                    <div class=\"device__bg device__bg_front\">\r\n                                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\" />\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"device\">\r\n                                    <div class=\"device__bg device__bg_back\"></div>\r\n                                    <div class=\"device__bg device__bg_front\">\r\n                                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\" />\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"device\">\r\n                                    <div class=\"device__bg device__bg_back\"></div>\r\n                                    <div class=\"device__bg device__bg_front\">\r\n                                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\" />\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"device\">\r\n                                    <div class=\"device__bg device__bg_back\"></div>\r\n                                    <div class=\"device__bg device__bg_front\">\r\n                                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\" />\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"device\">\r\n                                    <div class=\"device__bg device__bg_back\"></div>\r\n                                    <div class=\"device__bg device__bg_front\">\r\n                                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\" />\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"device\">\r\n                                    <div class=\"device__bg device__bg_back\"></div>\r\n                                    <div class=\"device__bg device__bg_front\">\r\n                                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\" />\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"swiper-slide slide\" data-group=\"3\">\r\n                        <div class=\"slide__content slide__content_wide\">\r\n                            <h3 class=\"slide__title\">Подключите eSIM за&nbsp;три шага</h3>\r\n                            <ul class=\"steps\">\r\n                                <li>Оставьте заявку на&nbsp;сайте или в&nbsp;приложении</li>\r\n                                <li>Пройдите идентификацию</li>\r\n                                <li>Активируйте eSIM&nbsp;со своего смартфона</li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\" swiper-slide slide\" data-group=\"3\">\r\n                        <div class=\"slide__content slide__content_full\">\r\n                            <h3 class=\"slide__title\">Yota про выгоду и&nbsp;прозрачность</h3>\r\n                            <div class=\"benefit\">\r\n                                <div class=\"benefit__item\">\r\n                                    <p>Звонки на&nbsp;все <br />номера<br />России без доплат</p>\r\n                                </div>\r\n                                <div class=\"benefit__item benefit__item_big\">\r\n                                    <p>Минуты, Гб&nbsp;<br />и&nbsp;приложения\r\n                                        <br />за&nbsp;счет покупок\r\n                                    </p>\r\n                                </div>\r\n                                <div class=\"benefit__item\">\r\n                                    <p>Бесплатные<br />звонки<br />\r\n                                        Yota&nbsp;&mdash; Yota</p>\r\n                                </div>\r\n                                <div class=\"benefit__item\">\r\n                                    <p>Единая цена дома<br />\r\n                                        и&nbsp;в&nbsp;поездках<br /> по&nbsp;России</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"swiper-slide slide\"  data-group=\"4\">\r\n                        <div class=\"slide__content slide__content_wide\">\r\n                            <h3 class=\"slide__title\">Давайте уточним</h3>\r\n                            <div class=\"toggle-list\">\r\n                                <div class=\"toggle-list__item js-slide-toggle\">\r\n                                    <div class=\"head\">\r\n                                        <span>Если потерял телефон с&nbsp;eSIM?</span>\r\n                                        <svg class=\"head__icon\" width=\"13\" height=\"7\" viewBox=\"0 0 13 7\" stroke=\"white\"\r\n                                            fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <path d=\"M11.498 1.00021L6.09795 5.80021L0.997954 1.00021\"\r\n                                                stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n                                        </svg>\r\n                                    </div>\r\n                                    <div class=\"content\">Чтобы подключить eSIM&nbsp;к новому устройству и&nbsp;сохранить\r\n                                        номер, достаточно пройти аутентификацию или выпустить обычную SIM-карту\r\n                                        с&nbsp;тем&nbsp;же номером.</div>\r\n                                </div>\r\n                                <div class=\"toggle-list__item js-slide-toggle\">\r\n                                    <div class=\"head\">\r\n                                        <span>Можно перенести свой номер?</span>\r\n                                        <svg class=\"head__icon\" width=\"13\" height=\"7\" viewBox=\"0 0 13 7\" stroke=\"white\"\r\n                                            fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <path d=\"M11.498 1.00021L6.09795 5.80021L0.997954 1.00021\"\r\n                                                stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n                                        </svg>\r\n                                    </div>\r\n                                    <div class=\"content\">Чтобы подключить eSIM&nbsp;к новому устройству и&nbsp;сохранить\r\n                                        номер, достаточно пройти аутентификацию или выпустить обычную SIM-карту\r\n                                        с&nbsp;тем&nbsp;же номером.</div>\r\n                                </div>\r\n                                <div class=\"toggle-list__item js-slide-toggle\">\r\n                                    <div class=\"head\">\r\n                                        <span>Можно иметь несколько eSIM?</span>\r\n                                        <svg class=\"head__icon\" width=\"13\" height=\"7\" viewBox=\"0 0 13 7\" stroke=\"white\"\r\n                                            fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <path d=\"M11.498 1.00021L6.09795 5.80021L0.997954 1.00021\"\r\n                                                stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n                                        </svg>\r\n                                    </div>\r\n                                    <div class=\"content\">Чтобы подключить eSIM&nbsp;к новому устройству и&nbsp;сохранить\r\n                                        номер, достаточно пройти аутентификацию или выпустить обычную SIM-карту\r\n                                        с&nbsp;тем&nbsp;же номером.</div>\r\n                                </div>\r\n                                <div class=\"toggle-list__item js-slide-toggle\">\r\n                                    <div class=\"head\">\r\n                                        <span>Есть&nbsp;ли eSIM&nbsp;на планшетах?</span>\r\n                                        <svg class=\"head__icon\" width=\"13\" height=\"7\" viewBox=\"0 0 13 7\" stroke=\"white\"\r\n                                            fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <path d=\"M11.498 1.00021L6.09795 5.80021L0.997954 1.00021\"\r\n                                                stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n                                        </svg>\r\n                                    </div>\r\n                                    <div class=\"content\">Чтобы подключить eSIM&nbsp;к новому устройству и&nbsp;сохранить\r\n                                        номер, достаточно пройти аутентификацию или выпустить обычную SIM-карту\r\n                                        с&nbsp;тем&nbsp;же номером.</div>\r\n                                </div>\r\n                                <div class=\"toggle-list__item js-slide-toggle\">\r\n                                    <div class=\"head\">\r\n                                        <span>Как удалить eSIM&nbsp;с устройства?</span>\r\n                                        <svg class=\"head__icon\" width=\"13\" height=\"7\" viewBox=\"0 0 13 7\" stroke=\"white\"\r\n                                            fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <path d=\"M11.498 1.00021L6.09795 5.80021L0.997954 1.00021\"\r\n                                                stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n                                        </svg>\r\n                                    </div>\r\n                                    <div class=\"content\">Чтобы подключить eSIM&nbsp;к новому устройству и&nbsp;сохранить\r\n                                        номер, достаточно пройти аутентификацию или выпустить обычную SIM-карту\r\n                                        с&nbsp;тем&nbsp;же номером.</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"swiper-slide slide\"  data-group=\"4\">\r\n                        <div class=\"slide__content slide__content_wide\">\r\n                            <h3 class=\"slide__title\">Выберите модель своего смартфона</h3>\r\n                            <div class=\"models\">\r\n                                <label for=\"value1\" class=\"label label_button\">\r\n                                    <input id=\"value1\" type=\"radio\" name=\"model\" />\r\n                                    <span class=\"button button_label\">iPhone 11, Pro, XS, XR, 12</span>\r\n                                </label>\r\n                                <label for=\"value2\" class=\"label label_button\">\r\n                                    <input id=\"value2\" type=\"radio\" name=\"model\" />\r\n                                    <span class=\"button button_label\">Pixel 4, 3, 3a </span>\r\n                                </label>\r\n                                <label for=\"value3\" class=\"label label_button\">\r\n                                    <input id=\"value3\" type=\"radio\" name=\"model\" />\r\n                                    <span class=\"button button_label\">Samsung Galaxy Fold, Flip</span>\r\n                                </label>\r\n                                <label for=\"value4\" class=\"label label_button\">\r\n                                    <input id=\"value4\" type=\"radio\" name=\"model\" />\r\n                                    <span class=\"button button_label\">Другой, поддерживающий eSIM</span>\r\n                                </label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"swiper-slide slide\" data-group=\"1\">\r\n                        <div class=\"slide__content slide__content_full\">\r\n                            <h3 class=\"slide__title\">Собери свою Yota</h3>\r\n                            <div class=\"options\">\r\n                                <div class=\"tumbler\">\r\n                                    <input type=\"checkbox\" id=\"diu76\" class=\"tumbler__input\" name=\"\" value=\"\">\r\n                                    <label for=\"diu76\" class=\"tumbler__text\">Безлимитный интернет</span>\r\n                                </div>\r\n\r\n                                <div class=\"options__list\">\r\n                                    <div class=\"options__item\">\r\n                                        <label for=\"opt1\" class=\"options__icon\">\r\n                                            <input type=\"checkbox\" id=\"opt1\" class=\"options__input\" name=\"\" value=\"\">\r\n                                            <span class=\"options__label\">25P</span>\r\n                                            <span class=\"options__text\">SMS</span>\r\n                                        </label>\r\n                    \r\n                                    </div>\r\n                                    <div class=\"options__item\">\r\n                                        <label for=\"opt2\" class=\"options__icon\">\r\n                                            <input type=\"checkbox\" id=\"opt2\" class=\"options__input\" name=\"\" value=\"\">\r\n                                            <span class=\"options__label\">25P</span>\r\n                                        </label>\r\n                                        <span class=\"options__text\">Видео</span>\r\n                                    </div>\r\n                                    <div class=\"options__item\">\r\n                                        <label for=\"opt3\" class=\"options__icon\">\r\n                                            <input type=\"checkbox\" id=\"opt3\" class=\"options__input\" name=\"\" value=\"\">\r\n                                            <span class=\"options__label\">25P</span>\r\n                                        </label>\r\n                                        <span class=\"options__text\">Музыка</span>\r\n                                    </div>\r\n                                    <div class=\"options__item\">\r\n                                        <label for=\"opt4\" class=\"options__icon\">\r\n                                            <input type=\"checkbox\" id=\"opt4\" class=\"options__input\" name=\"\" value=\"\">\r\n                                            <span class=\"options__label\">25P</span>\r\n                                        </label>\r\n                                        <span class=\"options__text\">Транспорт</span>\r\n                                    </div>\r\n                                    <div class=\"options__item\">\r\n                                        <label for=\"opt5\" class=\"options__icon\">\r\n                                            <input type=\"checkbox\" id=\"opt5\" class=\"options__input\" name=\"\" value=\"\">\r\n                                            <span class=\"options__label\">25P</span>\r\n                                        </label>\r\n                                        <span class=\"options__text\">Соцсети</span>\r\n                                    </div>\r\n                                    <div class=\"options__item\">\r\n                                        <label for=\"opt6\" class=\"options__icon\">\r\n                                            <input type=\"checkbox\" id=\"opt61\" class=\"options__input\" name=\"\" value=\"\">\r\n                                            <span class=\"options__label\">25P</span>\r\n                                        </label>\r\n                                        <span class=\"options__text\">Мессенджеры</span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <footer class=\"footer\">\r\n            <div class=\"footer__row\">\r\n                <button class=\"button\"><span class=\"button__text\">Оформить заказ</span></button>\r\n                <button class=\"button button_circle\"></button>\r\n            </div>\r\n\r\n            <a href=\"javascript:void(0)\" class=\"link\">Устройства, поддерживающие eSIM</a>\r\n        </footer>\r\n    </div>\r\n</body>\r\n</html>";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			__webpack_require__.O();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js-node_modules_html-loader_dist_runtime_getUrl-57080f"], function() { return __webpack_require__("../node_modules/@babel/polyfill/lib/index.js"); })
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js-node_modules_html-loader_dist_runtime_getUrl-57080f"], function() { return __webpack_require__("./index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map