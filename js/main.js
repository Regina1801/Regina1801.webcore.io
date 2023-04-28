/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var body = document.body;
var burger = document.querySelector('.upper-menu__btn-burger');
var btnClose = document.querySelector('.main-menu__btn-burger-close');
var sidebar = document.querySelector('.sidebar-left');
var overlay = document.querySelector('.overlay');
var dataNameContainers = document.querySelectorAll('[data-container]');
var btnReadMore = document.querySelectorAll('.read-more');
var dataNameModal = document.querySelectorAll('[data-modal]');
var modal = document.querySelector('.modal');
var modalFeedback = document.querySelector('.modal__feedback');
var modalCallback = document.querySelector('.modal__callback');
var btnFeedback = document.querySelector('.main-menu__btn-chat');
var btnCallback = document.querySelector('.main-menu__btn-call');
var closeModalFeedback = document.querySelector('.modal__feedback-close-btn');
var closeModalCallback = document.querySelector('.modal__callback-close-btn');
btnCallback.addEventListener("click", function () {
  modalFeedback.classList.add('visibility-hidden');
  //modalFeedback.style.display = "none";
  modal.classList.add('modal--open');
  modalCallback.classList.add('modal__callback--open');
  overlay.classList.add('overlay--open');
  body.classList.add('disable-scroll');
});
btnFeedback.addEventListener("click", function () {
  modalCallback.classList.add('visibility-hidden');
  modalCallback.style.display = "none";
  modal.classList.add('modal--open');
  modalFeedback.classList.add('modal__feedback--open');
  overlay.classList.add('overlay--open');
  body.classList.add('disable-scroll');
});
closeModalFeedback.addEventListener("click", function () {
  modal.classList.remove('modal--open');
  //modalFeedback.classList.remove('modal__feedback--open');
  closeOverlay();
});
closeModalCallback.addEventListener("click", function () {
  modal.classList.remove('modal--open');
  //modalCallback.classList.remove('modal__callback--open');
  closeOverlay();
});
function showLeftSidebar() {
  sidebar.classList.add('sidebar-left--open');
  overlay.classList.add('overlay--open');
}
function removeLeftSidebar() {
  sidebar.classList.remove('sidebar-left--open');
  overlay.classList.remove('overlay--open');
}
burger.addEventListener('click', function () {
  showLeftSidebar();
});
btnClose.addEventListener('click', function () {
  removeLeftSidebar();
});
function openMore(name) {
  _toConsumableArray(dataNameContainers).forEach(function (container) {
    return container.dataset.container === name ? container.classList.toggle('open') : '';
  });
}
function changeBtn(btn) {
  if (!btn.classList.contains('read-more--open')) {
    btn.classList.add('read-more--open');
    btn.textContent = "Скрыть";
  } else {
    btn.classList.remove('read-more--open');
    btn.textContent = "Показать все";
  }
}
document.addEventListener('click', function (e) {
  openMore(e.target.dataset.name);
  if (e.target.classList.contains('read-more')) {
    changeBtn(e.target);
  }
});
overlay.addEventListener('click', function (e) {
  if (e.target === overlay) {
    closeOverlay();
  }
});
function closeOverlay() {
  _toConsumableArray(dataNameModal).forEach(function (modalEl) {
    modal.classList.remove('modal--open');
    modalEl.classList.remove('modal-wrapper--open');
    body.classList.remove('disable-scroll');
    overlay.classList.remove('overlay--open');
  });
  sidebar.classList.remove('sidebar-left--open');
}

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/focus-visible/dist/focus-visible */ "../node_modules/focus-visible/dist/focus-visible.js");
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.html */ "./index.html");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slider */ "./js/slider.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index */ "./index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index__WEBPACK_IMPORTED_MODULE_4__);






/***/ }),

/***/ "./js/slider.js":
/*!**********************!*\
  !*** ./js/slider.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../node_modules/swiper/swiper.esm.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var sliders = document.querySelectorAll(".swiper-default");
var sliderPrice = document.querySelectorAll(".swiper-price");
_toConsumableArray(sliders).forEach(function (slider) {
  var swiper;
  function createSlider() {
    if (window.innerWidth <= 767 && !slider.classList.contains('swiper-initialized')) {
      return swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](slider, {
        loop: true,
        width: 272,
        slidesPerView: 1,
        spaceBetween: 16,
        modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination],
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        }
      });
    }
    if (window.innerWidth > 767 && slider.classList.contains('swiper-initialized')) swiper.destroy();
  }
  createSlider();
  window.addEventListener('resize', function () {
    createSlider();
  });
});
sliderPrice.forEach(function (slider) {
  var swiperPrice;
  function createSliderPrice() {
    if (window.innerWidth <= 767 && !slider.classList.contains('swiper-initialized')) {
      return swiperPrice = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](slider, {
        loop: true,
        width: 292,
        slidesPerView: 1,
        spaceBetween: 16,
        modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination],
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        }
      });
    }
    if (window.innerWidth > 767 && slider.classList.contains('swiper-initialized')) swiperPrice.destroy();
  }
  createSliderPrice();
  window.addEventListener('resize', function () {
    createSliderPrice();
  });
});

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicon.ico */ "./assets/favicon.ico"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/logo.svg */ "./img/logo.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/repair.svg */ "./img/repair.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/checkstatus.svg */ "./img/checkstatus.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/picture.jpg */ "./img/picture.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/logotips/Lenovo.png */ "./img/logotips/Lenovo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/logotips/Samsung.png */ "./img/logotips/Samsung.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./img/logotips/apple.png */ "./img/logotips/apple.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./img/logotips/ViewSonic.png */ "./img/logotips/ViewSonic.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./img/logotips/bosh.png */ "./img/logotips/bosh.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./img/logotips/hp.png */ "./img/logotips/hp.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./img/logotips/acer.png */ "./img/logotips/acer.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./img/logotips/sony.png */ "./img/logotips/sony.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);
var code = "<!DOCTYPE html>\n<html lang=\"ru\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <link rel=\"shortcut icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" type=\"image/x-icon\">\n  <title>Сервис центр</title>\n</head>\n<body>\n<div class=\"modal\">\n  <div class=\"modal__feedback modal-wrapper\" data-modal=\"feedback\">\n    <button class=\"modal__feedback-close-btn btn--reset\" data-btn=\"feedback\"></button>\n    <form class=\"modal__form\">\n      <h2 class=\"modal__title title\">Обратная связь</h2>\n      <input type=\"text\" class=\"modal__input\" placeholder=\"Имя\">\n      <input type=\"tel\" class=\"modal__input\" placeholder=\"Телефон\">\n      <input type=\"email\" class=\"modal__input\" placeholder=\"Электронная почта\">\n      <textarea class=\"modal__input modal__textarea\" placeholder=\"Сообщение\" rows=\"5\" cols=\"33\"></textarea>\n      <p class=\"modal__agreement\">Нажимая “отправить”, вы даете согласие на <a href=\"#\">обработку персональных\n        данных</a> и соглашаетесь с нашей <a href=\"#\">политикой конфиденциальности</a></p>\n      <button class=\"modal__submit-btn btn--reset\">ОТПРАВИТЬ</button>\n    </form>\n  </div>\n  <div class=\"modal__callback modal-wrapper\" data-modal=\"callback\">\n    <button class=\"modal__callback-close-btn btn--reset\" data-btn=\"callback\"></button>\n    <form class=\"modal__form\">\n      <h2 class=\"modal__title title\">Заказать звонок</h2>\n      <input type=\"tel\" class=\"modal__input\" placeholder=\"Телефон\">\n      <p class=\"modal__agreement\">Нажимая “отправить”, вы даете согласие на <a href=\"#\">обработку персональных\n        данных</a> и соглашаетесь с нашей <a href=\"#\">политикой конфиденциальности</a></p>\n      <button class=\"modal__submit-btn btn--reset\">ОТПРАВИТЬ</button>\n    </form>\n  </div>\n</div>\n<div class=\"overlay\"></div>\n<header class=\"header\">\n  <div class=\"header__wrapper container\">\n    <div class=\"header__upper-menu upper-menu\">\n      <div class=\"upper-menu__left\">\n        <button class=\"upper-menu__btn upper-menu__btn-burger btn--reset\" aria-label=\"Открыть меню\"></button>\n        <div class=\"upper-menu__left-splitter\"></div>\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"Логотип компании\" class=\"upper-menu__logo\">\n      </div>\n      <div class=\"upper-menu__right\">\n        <button class=\"upper-menu__btn upper-menu__btn-call btn--reset\" aria-label=\"Заказать звонок\"></button>\n        <button class=\"upper-menu__btn upper-menu__btn-chat btn--reset\" aria-label=\"Обратная связь\"></button>\n        <button class=\"upper-menu__btn upper-menu__btn-profile btn--reset\" aria-label=\"Профиль\"></button>\n        <div class=\"upper-menu__right-splitter\"></div>\n        <button class=\"upper-menu__btn upper-menu__btn-repair btn--reset\" aria-label=\"Оставить заявку\"></button>\n        <button class=\"upper-menu__btn upper-menu__btn-checkstatus btn--reset\"\n                aria-label=\"Проверить статус ремонта\"></button>\n      </div>\n    </div>\n  </div>\n</header>\n<main class=\"main\">\n  <div class=\"sidebar-left\">\n    <div class=\"sidebar-left__wrapper container\">\n      <div class=\"sidebar-left__main-menu main-menu\">\n        <div class=\"main-menu__top\">\n          <div class=\"main-menu__top-header\">\n            <button class=\"main-menu__btn main-menu__btn-burger-close btn--reset\" aria-label=\"Открыть меню\"></button>\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"Логотип компании\" class=\"main-menu__logo\">\n            <button class=\"main-menu__btn main-menu__btn-search btn--reset\" aria-label=\"Открыть меню\"></button>\n          </div>\n          <ul class=\"main-menu__list\">\n            <li class=\"main-menu__item main-menu__item--active\"><a href=\"#\" class=\"main-menu__link\">Ремонт техники</a>\n            </li>\n            <li class=\"main-menu__item\"><a href=\"#\" class=\"main-menu__link\">Услуги и сервисы</a>\n            </li>\n            <li class=\"main-menu__item\"><a href=\"#\" class=\"main-menu__link\">Корпоративным клиентам</a></li>\n            <li class=\"main-menu__item\"><a href=\"#\" class=\"main-menu__link\">Продавцам техники</a></li>\n            <li class=\"main-menu__item\"><a href=\"#\" class=\"main-menu__link\">Партнерам</a></li>\n            <li class=\"main-menu__item\"><a href=\"#\" class=\"main-menu__link\">Производителям</a></li>\n            <li class=\"main-menu__item\"><a href=\"#\" class=\"main-menu__link\">Наши сервисные центры</a></li>\n            <li class=\"main-menu__item\"><a href=\"#\" class=\"main-menu__link\">Контакты</a></li>\n          </ul>\n        </div>\n        <div class=\"main-menu__bottom\">\n          <div class=\"main-menu__btn-wrapper\">\n            <button class=\"main-menu__btn main-menu__btn-call btn--reset\" aria-label=\"Заказать звонок\" data-btn=\"callback\"></button>\n            <button class=\"main-menu__btn main-menu__btn-chat btn--reset\" aria-label=\"Обратная связь\" data-btn=\"feedback\"></button>\n            <button class=\"main-menu__btn main-menu__btn-profile btn--reset\" aria-label=\"Профиль\"></button>\n          </div>\n          <div class=\"main-menu__contact-wrapper contact\">\n            <a href=\"mailto:mail@cps.com\" class=\"contact__mail\">mail@cps.com</a>\n            <a href=\"tel:+78008908900\" class=\"contact__tel\">8 800 890 8900</a>\n          </div>\n        </div>\n        <div class=\"main-menu__lang\">\n          <button class=\"main-menu__lang-btn main-menu__lang-btn--active btn--reset\">RU</button>\n          <button class=\"main-menu__lang-btn btn--reset\">EN</button>\n          <button class=\"main-menu__lang-btn btn--reset\">CH</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"main__wrapper\">\n    <section class=\"services container\">\n      <div class=\"services__header services-header\">\n        <h1 class=\"visually-hidden\">Компания по ремонту техники CPS</h1>\n        <h2 class=\"services-header__title title\">Услуги и сервисы</h2>\n        <div class=\"services-header__btn-container\">\n          <button class=\"services-header__btn btn--reset services-header__btn-wrapper\">Оставить заявку <img\n              src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"Оставить заявку\" class=\"services-header__btn-img\">\n          </button>\n          <button class=\"services-header__btn btn--reset services-header__btn-wrapper\">Статус ремонта\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"Проверить статус ремонта\" class=\"services-header__btn-img\">\n          </button>\n        </div>\n        <div class=\"services-header__menu\">\n          <ul class=\"services-header__list\">\n            <li class=\"services-header__item services-header__item--active\"><a href=\"#\" class=\"services-header__link\">Ремонтируемые\n              бренды</a></li>\n            <li class=\"services-header__item\"><a href=\"#\" class=\"services-header__link\">Ремонтируемые устройства</a>\n            </li>\n            <li class=\"services-header__item\"><a href=\"#\" class=\"services-header__link\">Цены на услуги</a></li>\n            <li class=\"services-header__item\"><a href=\"#\" class=\"services-header__link\">Адреса сервисных центров</a>\n            </li>\n            <li class=\"services-header__item\"><a href=\"#\" class=\"services-header__link\">Специальные цены</a></li>\n            <li class=\"services-header__item\"><a href=\"#\" class=\"services-header__link\">Отзывы</a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"services__description services-description\">\n        <div class=\"services-description__box\">\n          <div class=\"services-description__text \">\n            <p class=\"services-description__par\">Мы являемся авторизованным сервисным центром по ремонту техники Dell.\n              Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.</p>\n            <p class=\"services-description__par\">Мы успешно работаем с 1992 года и заслужили репутацию надежного\n              партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются\n              по рекомендациям и, в свою очередь, советуют нас родным и близким.</p>\n          </div>\n          <div class=\"services-description__more-box\">\n            <button class=\"services-description__read-more btn--reset\">Читать далее</button>\n          </div>\n        </div>\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\" class=\"services-description__img\">\n      </div>\n    </section>\n    <section class=\"brands container\">\n      <div class=\"brands__header section__header\">\n        <h2 class=\"brands__title section-title title\">Ремонт техники различных брендов</h2>\n      </div>\n      <div class=\"swiper swiper-default container\">\n        <div class=\"swiper-wrapper brands__wrapper\" data-container=\"brands\">\n          <div class=\"brands__item swiper-slide\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"Логотип компании\" class=\"brands__item-img\">\n            <button class=\"brands__item-btn item-btn btn--reset\"></button>\n          </div>\n          <div class=\"brands__item swiper-slide\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"Логотип компании\" class=\"brands__item-img\">\n            <button class=\"brands__item-btn item-btn btn--reset\"></button>\n          </div>\n          <div class=\"brands__item swiper-slide\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"Логотип компании\" class=\"brands__item-img\">\n            <button class=\"brands__item-btn item-btn btn--reset\"></button>\n          </div>\n          <div class=\"brands__item swiper-slide\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"Логотип компании\" class=\"brands__item-img\">\n            <button class=\"brands__item-btn item-btn btn--reset\"></button>\n          </div>\n          <div class=\"brands__item swiper-slide\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"Логотип компании\" class=\"brands__item-img\">\n            <button class=\"brands__item-btn item-btn btn--reset\"></button>\n          </div>\n          <div class=\"brands__item swiper-slide brands__item--hp\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"Логотип компании\" class=\"brands__item-img\">\n            <button class=\"brands__item-btn item-btn btn--reset\"></button>\n          </div>\n          <div class=\"brands__item swiper-slide\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"Логотип компании\" class=\"brands__item-img\">\n            <button class=\"brands__item-btn item-btn btn--reset\"></button>\n          </div>\n          <div class=\"brands__item swiper-slide\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"Логотип компании\" class=\"brands__item-img\">\n            <button class=\"brands__item-btn item-btn btn--reset\"></button>\n          </div>\n          <div class=\"brands__item swiper-slide\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"Логотип компании\" class=\"brands__item-img\">\n            <button class=\"brands__item-btn item-btn btn--reset\"></button>\n          </div>\n          <div class=\"brands__item swiper-slide\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"Логотип компании\" class=\"brands__item-img\">\n            <button class=\"brands__item-btn item-btn btn--reset\"></button>\n          </div>\n          <div class=\"brands__item swiper-slide\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"Логотип компании\" class=\"brands__item-img\">\n            <button class=\"brands__item-btn item-btn btn--reset\"></button>\n          </div>\n        </div>\n        <div class=\"swiper-pagination\"></div>\n      </div>\n      <div class=\"brands__more-box more-box\">\n        <button class=\"brands__read-more read-more btn--reset\" data-name=\"brands\">Показать все</button>\n      </div>\n    </section>\n    <section class=\"repair container\">\n      <div class=\"repair__header section__header\">\n        <h2 class=\"repair__title section-title title\">Ремонт различных видов техники</h2>\n      </div>\n      <div class=\"swiper swiper-default container\">\n        <div class=\"swiper-wrapper repair__wrapper\" data-container=\"repair\">\n          <div class=\"repair__item swiper-slide\">\n            <p class=\"repair__item-title title\">Ремонт ноутбуков</p>\n            <button class=\"repair__item-btn item-btn btn--reset\"></button>\n          </div>\n          <div class=\"repair__item swiper-slide\">\n            <p class=\"repair__item-title title\">Ремонт планшетов</p>\n            <button class=\"repair__item-btn item-btn btn--reset\"></button>\n          </div>\n          <div class=\"repair__item swiper-slide\">\n            <p class=\"repair__item-title title\">Ремонт ПК</p>\n            <button class=\"repair__item-btn item-btn btn--reset\"></button>\n          </div>\n          <div class=\"repair__item swiper-slide\">\n            <p class=\"repair__item-title title\">Ремонт Мониторов</p>\n            <button class=\"repair__item-btn item-btn btn--reset\"></button>\n          </div>\n          <div class=\"repair__item swiper-slide\">\n            <p class=\"repair__item-title title\">Ремонт Мобильных телефонов</p>\n            <button class=\"repair__item-btn item-btn btn--reset\"></button>\n          </div>\n          <div class=\"repair__item swiper-slide\">\n            <p class=\"repair__item-title title\">Ремонт Разбитых сердец</p>\n            <button class=\"repair__item-btn item-btn btn--reset\"></button>\n          </div>\n          <div class=\"repair__item swiper-slide\">\n            <p class=\"repair__item-title title\">Ремонт Аксессуаров</p>\n            <button class=\"repair__item-btn item-btn btn--reset\"></button>\n          </div>\n          <div class=\"repair__item swiper-slide\">\n            <p class=\"repair__item-title title\">Ремонт Кривой верстки</p>\n            <button class=\"repair__item-btn item-btn btn--reset\"></button>\n          </div>\n          <div class=\"repair__item swiper-slide\">\n            <p class=\"repair__item-title title\">Ремонт Космических бластеров</p>\n            <button class=\"repair__item-btn item-btn btn--reset\"></button>\n          </div>\n        </div>\n        <div class=\"swiper-pagination\"></div>\n      </div>\n      <div class=\"repair__more-box more-box\">\n        <button class=\"repair__read-more read-more btn--reset\" data-name=\"repair\">Показать все</button>\n      </div>\n    </section>\n    <section class=\"price container\">\n      <div class=\"price__header section__header\">\n        <h2 class=\"price__title section-title title\">Цены на услуги</h2>\n      </div>\n      <div class=\"swiper swiper-price container\">\n        <div class=\"price-header\">\n          <p class=\"price-header__title price-header__title-repair\">Ремонтные услуги</p>\n          <p class=\"price-header__title\">Цена</p>\n          <p class=\"price-header__title\">Срок</p>\n        </div>\n        <div class=\"swiper-wrapper price__wrapper\">\n          <div class=\"price__item price-item swiper-slide\">\n            <div class=\"price-item__service\">\n              <h3 class=\"price-item__title title\">Ремонтные услуги</h3>\n              <p class=\"price-item__text\">Диагностика</p>\n            </div>\n            <div class=\"price-item__price\">\n              <h3 class=\"price-item__title title\">Цена</h3>\n              <p class=\"price-item__text\">Бесплатно</p>\n            </div>\n            <div class=\"price-item__period\">\n              <h3 class=\"price-item__title title\">Срок</h3>\n              <p class=\"price-item__text\">30 мин</p>\n            </div>\n            <button class=\"price-item__btn btn--reset\">\n              <span>ЗАКАЗАТЬ</span>\n            </button>\n          </div>\n          <div class=\"price__item price-item swiper-slide\">\n            <div class=\"price-item__service\">\n              <h3 class=\"price-item__title title\">Ремонтные услуги</h3>\n              <p class=\"price-item__text\">Замена дисплея</p>\n            </div>\n            <div class=\"price-item__price\">\n              <h3 class=\"price-item__title title\">Цена</h3>\n              <p class=\"price-item__text\">1000 ₽</p>\n            </div>\n            <div class=\"price-item__period\">\n              <h3 class=\"price-item__title title\">Срок</h3>\n              <p class=\"price-item__text\">30-120 мин</p>\n            </div>\n            <button class=\"price-item__btn btn--reset\">\n              <span>ЗАКАЗАТЬ</span>\n            </button>\n          </div>\n          <div class=\"price__item price-item swiper-slide\">\n            <div class=\"price-item__service\">\n              <h3 class=\"price-item__title title\">Ремонтные услуги</h3>\n              <p class=\"price-item__text\">Замена полифонического динамика</p>\n            </div>\n            <div class=\"price-item__price\">\n              <h3 class=\"price-item__title title\">Цена</h3>\n              <p class=\"price-item__text\">1000 ₽</p>\n            </div>\n            <div class=\"price-item__period\">\n              <h3 class=\"price-item__title title\">Срок</h3>\n              <p class=\"price-item__text\">30-120 мин</p>\n            </div>\n            <button class=\"price-item__btn btn--reset\">\n              <span>ЗАКАЗАТЬ</span>\n            </button>\n          </div>\n          <div class=\"price__item price-item swiper-slide\">\n            <div class=\"price-item__service\">\n              <h3 class=\"price-item__title title\">Ремонтные услуги</h3>\n              <p class=\"price-item__text\">Тестирование с выдачей технического заключения</p>\n            </div>\n            <div class=\"price-item__price\">\n              <h3 class=\"price-item__title title\">Цена</h3>\n              <p class=\"price-item__text\">1000 ₽</p>\n            </div>\n            <div class=\"price-item__period\">\n              <h3 class=\"price-item__title title\">Срок</h3>\n              <p class=\"price-item__text\">30-120 мин</p>\n            </div>\n            <button class=\"price-item__btn btn--reset\">\n              <span>ЗАКАЗАТЬ</span>\n            </button>\n          </div>\n          <div class=\"price__item price-item swiper-slide\">\n            <div class=\"price-item__service\">\n              <h3 class=\"price-item__title title\">Ремонтные услуги</h3>\n              <p class=\"price-item__text\">Замена программного обеспечения</p>\n            </div>\n            <div class=\"price-item__price\">\n              <h3 class=\"price-item__title title\">Цена</h3>\n              <p class=\"price-item__text\">1000 ₽</p>\n            </div>\n            <div class=\"price-item__period\">\n              <h3 class=\"price-item__title title\">Срок</h3>\n              <p class=\"price-item__text\">30-120 мин</p>\n            </div>\n            <button class=\"price-item__btn btn--reset\">\n              <span>ЗАКАЗАТЬ</span>\n            </button>\n          </div>\n        </div>\n        <div class=\"swiper-pagination\"></div>\n      </div>\n      <div class=\"price__wrapper-bottom\">\n        <p class=\"price__description\">Все цены указаны с учетом НДС. Стоимость ремонта указана на единичную услугу. Для\n          получения коммерческого предложения на постоянное обслуживание, оставьте заявку.</p>\n        <p class=\"price__commercial\">\n          <a href=\"#\"><span>Получить коммерческое предложение</span></a>\n        </p>\n      </div>\n    </section>\n    <footer class=\"footer container\">\n      <p class=\"footer__copywriter\">&copy;2019 CPS<span>Разработано командой Apesong</span></p>\n      <p class=\"footer__policy\">Политика конфиденциальности</p>\n      <p class=\"footer__offer\">Информация, размещенная на данной странице, не является публичной офертой</p>\n    </footer>\n  </div>\n</main>\n\n</body>\n</html>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/favicon.ico":
/*!****************************!*\
  !*** ./assets/favicon.ico ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/favicon.ico";

/***/ }),

/***/ "./img/checkstatus.svg":
/*!*****************************!*\
  !*** ./img/checkstatus.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/checkstatus.svg";

/***/ }),

/***/ "./img/logo.svg":
/*!**********************!*\
  !*** ./img/logo.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/logo.svg";

/***/ }),

/***/ "./img/logotips/Lenovo.png":
/*!*********************************!*\
  !*** ./img/logotips/Lenovo.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/Lenovo.png";

/***/ }),

/***/ "./img/logotips/Samsung.png":
/*!**********************************!*\
  !*** ./img/logotips/Samsung.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/Samsung.png";

/***/ }),

/***/ "./img/logotips/ViewSonic.png":
/*!************************************!*\
  !*** ./img/logotips/ViewSonic.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/ViewSonic.png";

/***/ }),

/***/ "./img/logotips/acer.png":
/*!*******************************!*\
  !*** ./img/logotips/acer.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/acer.png";

/***/ }),

/***/ "./img/logotips/apple.png":
/*!********************************!*\
  !*** ./img/logotips/apple.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/apple.png";

/***/ }),

/***/ "./img/logotips/bosh.png":
/*!*******************************!*\
  !*** ./img/logotips/bosh.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/bosh.png";

/***/ }),

/***/ "./img/logotips/hp.png":
/*!*****************************!*\
  !*** ./img/logotips/hp.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/hp.png";

/***/ }),

/***/ "./img/logotips/sony.png":
/*!*******************************!*\
  !*** ./img/logotips/sony.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/sony.png";

/***/ }),

/***/ "./img/picture.jpg":
/*!*************************!*\
  !*** ./img/picture.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/picture.jpg";

/***/ }),

/***/ "./img/repair.svg":
/*!************************!*\
  !*** ./img/repair.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/repair.svg";

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_focus-visible_dist_focus-visible_js-node_modules_html-loader_dist_runtim-69a700"], () => (__webpack_require__("./js/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map