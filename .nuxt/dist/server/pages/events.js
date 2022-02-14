exports.ids = [6,1,2];
exports.modules = Array(24).concat([
/* 24 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDYgMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8Y2lyY2xlIGN4PSIzIiBjeT0iMyIgcj0iMyIgZmlsbD0iIzIxMUYxQSIvPg0KPHBhdGggZD0iTTMgNVYxMiIgc3Ryb2tlPSIjMjExRjFBIi8+DQo8L3N2Zz4NCg=="

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Pic-fit3.d22123e.jpg";

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTUiIHZpZXdCb3g9IjAgMCA1MCA1NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xNiAwSDBWNTVIMTZWMFoiIGZpbGw9IiNGRkREN0MiLz4NCjxwYXRoIGQ9Ik0zMiAxOEw1MCAwSDMyVjE4WiIgZmlsbD0iI0ZGREQ3QyIvPg0KPHBhdGggZD0iTTUwIDU1TDMyIDM3VjU1SDUwWiIgZmlsbD0iI0ZGREQ3QyIvPg0KPC9zdmc+DQo="

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAxNSAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNC43MjI4IDMwVjE0LjY4NEgwLjVWOS44ODQzMkg0LjcyMjhWNi4zNDQ4M0M0LjcyMjggMi4yMzY4NiA3LjI3ODM2IDAgMTEuMDEyNSAwQzEyLjgwMTIgMCAxNC4zMzc1IDAuMTMxMTkgMTQuNzg1NyAwLjE4OTQ5N1Y0LjQ4Mjk5TDEyLjE5NjQgNC40ODQzMkMxMC4xNjYgNC40ODQzMiA5Ljc3MzE2IDUuNDMxOCA5Ljc3MzE2IDYuODIwNTdWOS44ODU2NEgxNC42MTU2TDEzLjk4NTIgMTQuNjg1NEg5Ljc3MzE2VjMwSDQuNzIyOFoiIGZpbGw9IndoaXRlIi8+DQo8L3N2Zz4NCg=="

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/insta.9d37843.svg";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ok.7bdd5f5.svg";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/vk.8debadd.svg";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(42);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("05a7020a", content, true, context)
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(50);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("642860ce", content, true, context)
};

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=template&id=1b263a2a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"w-full header-block",class:_vm.openMenu ? 'bg-dark' : _vm.bgcolor === 'yellow' ? 'bg-yellow': 'bg-white'},[_vm._ssrNode("<nav data-v-1b263a2a><div class=\"max-w-7lg mx-auto p-5\" data-v-1b263a2a><div class=\"relative flex items-center justify-between h-16\" data-v-1b263a2a><div class=\"flex-1 flex items-center justify-between\" data-v-1b263a2a><div class=\"flex-shrink-0 flex items-center nav-logo\" data-v-1b263a2a><svg width=\"50\" height=\"55\" viewBox=\"0 0 50 55\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" data-v-1b263a2a><path d=\"M16 0H0V55H16V0Z\""+(_vm._ssrAttr("fill",_vm.openMenu ? '#FFDD7C' : _vm.logoColor === 'black' ? '#221F1A' : '#FFDD7C'))+" data-v-1b263a2a></path> <path d=\"M32 18L50 0H32V18Z\""+(_vm._ssrAttr("fill",_vm.openMenu ? '#FFDD7C' : _vm.logoColor === 'black' ? '#221F1A' : '#FFDD7C'))+" data-v-1b263a2a></path> <path d=\"M50 55L32 37V55H50Z\""+(_vm._ssrAttr("fill",_vm.openMenu ? '#FFDD7C' : _vm.logoColor === 'black' ? '#221F1A' : '#FFDD7C'))+" data-v-1b263a2a></path></svg> <div class=\"ml-2\" data-v-1b263a2a><p class=\"nav-title-logo\" data-v-1b263a2a>Третьяковская</p> <p class=\"nav-title-logo\" data-v-1b263a2a>галерея</p> <p class=\"nav-title-logo-mini\" data-v-1b263a2a>Запад</p></div></div> <div class=\"hidden sm:block sm:ml-6\" data-v-1b263a2a><div class=\"flex space-x-4\" data-v-1b263a2a><a href=\"#\" class=\"uppercase nav-title-menu whitespace-nowrap\" data-v-1b263a2a>Афиша</a> <a href=\"#\" class=\"uppercase nav-title-menu whitespace-nowrap\" data-v-1b263a2a>образование</a> <a href=\"#\" class=\"uppercase nav-title-menu whitespace-nowrap\" data-v-1b263a2a>о музее</a> <a href=\"#\" class=\"uppercase nav-title-menu whitespace-nowrap\" data-v-1b263a2a>новости</a> <a href=\"#\" class=\"uppercase nav-title-menu whitespace-nowrap\" data-v-1b263a2a>контакты</a></div></div> <div class=\"inset-y-0 right-0 flex items-center pr-2sm:ml-6 sm:pr-0\" data-v-1b263a2a>"+((!_vm.openMenu)?("<div class=\"ml-3\" data-v-1b263a2a><a class=\"flex cursor-pointer\" data-v-1b263a2a><img"+(_vm._ssrAttr("src",__webpack_require__(44)))+" alt data-v-1b263a2a></a></div>"):"<!---->")+" <div class=\"ml-3 hidden\" data-v-1b263a2a><div data-v-1b263a2a><a href=\"#\" class=\"nav-title\" data-v-1b263a2a>медиа</a></div></div> <div class=\"ml-3 relative flex nav-title hidden\" data-v-1b263a2a><img"+(_vm._ssrAttr("src",__webpack_require__(45)))+" alt class=\"mr-1\" data-v-1b263a2a> <div data-v-1b263a2a><a href=\"#\" data-v-1b263a2a>EN</a></div> <img"+(_vm._ssrAttr("src",__webpack_require__(46)))+" alt class=\"ml-1\" data-v-1b263a2a></div></div></div> <div class=\"flex items-center min ml-2\" data-v-1b263a2a><button type=\"button\" class=\"nav-button\" data-v-1b263a2a>"+((!_vm.openMenu)?("<img"+(_vm._ssrAttr("src",__webpack_require__(47)))+" alt data-v-1b263a2a>"):("<img"+(_vm._ssrAttr("src",__webpack_require__(48)))+" alt data-v-1b263a2a>"))+"</button></div></div></div> <div"+(_vm._ssrClass(null,!_vm.openMenu ? 'd-none' : ''))+" data-v-1b263a2a><div class=\"px-2 pt-2 pb-3 space-y-1 min-menu\" data-v-1b263a2a><a href=\"#\" class=\"uppercase nav-title-menu\" data-v-1b263a2a>Афиша</a> <a href=\"#\" class=\"uppercase nav-title-menu\" data-v-1b263a2a>образование</a> <a href=\"#\" class=\"uppercase nav-title-menu\" data-v-1b263a2a>о музее</a> <a href=\"#\" class=\"uppercase nav-title-menu\" data-v-1b263a2a>МЕДИА</a> <a href=\"#\" class=\"uppercase nav-title-menu\" data-v-1b263a2a>новости</a> <a href=\"#\" class=\"uppercase nav-title-menu\" data-v-1b263a2a>ПРОГРАММА ЛОЯЛЬНОСТИ</a> <a href=\"#\" class=\"uppercase nav-title-menu\" data-v-1b263a2a>контакты</a> <canvas id=\"header-arrow\" data-v-1b263a2a></canvas> <a href=\"#\" class=\"uppercase nav-title-menu\" data-v-1b263a2a>EN</a></div></div></nav>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Header.vue?vue&type=template&id=1b263a2a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Headervue_type_script_lang_js_ = ({
  name: "Header",
  props: ['bgcolor', 'logoColor'],

  data() {
    return {
      openMenu: false
    };
  },

  mounted() {
    this.addCanvas();
  },

  methods: {
    addCanvas() {
      let canvas = document.getElementById('header-arrow');

      if (canvas) {
        if (canvas.getContext) {
          let ctx = canvas.getContext('2d');
          ctx.beginPath();
          ctx.strokeStyle = '#FFFFFF';
          ctx.moveTo(canvas.width + 1, 0);
          ctx.lineTo(1, canvas.height / 2);
          ctx.lineTo(canvas.height * 2 + 1, canvas.height);
          ctx.closePath();
          ctx.stroke();
        }
      }
    }

  }
});
// CONCATENATED MODULE: ./components/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Header.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(49)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1b263a2a",
  "13697a50"
  
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(34).default})


/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDAuNUgxMEw1IDcuNUwwIDAuNVoiIGZpbGw9IiMyMjFGMUEiLz4KPC9zdmc+Cg=="

/***/ }),
/* 36 */,
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=439c05b5&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"footer\" data-v-439c05b5><div class=\"footer-block-logo\" data-v-439c05b5><img"+(_vm._ssrAttr("src",__webpack_require__(26)))+" alt data-v-439c05b5> <canvas height=\"632\" id=\"footer-arrow\" data-v-439c05b5></canvas></div> <div class=\"footer-block-info\" data-v-439c05b5><div class=\"footer-block-info-title\" data-v-439c05b5><a href data-v-439c05b5>Афиша</a> <a href data-v-439c05b5>образование</a> <a href data-v-439c05b5>о музее</a> <a href data-v-439c05b5>медиа</a></div> <div class=\"footer-block-info-social\" data-v-439c05b5><a href data-v-439c05b5><img"+(_vm._ssrAttr("src",__webpack_require__(28)))+" alt data-v-439c05b5></a> <a href data-v-439c05b5><img"+(_vm._ssrAttr("src",__webpack_require__(29)))+" alt data-v-439c05b5></a> <a href data-v-439c05b5><img"+(_vm._ssrAttr("src",__webpack_require__(30)))+" alt data-v-439c05b5></a> <a href data-v-439c05b5><img"+(_vm._ssrAttr("src",__webpack_require__(31)))+" alt data-v-439c05b5></a></div> <div class=\"footer-block-info-text\" data-v-439c05b5><p data-v-439c05b5>2020 © Третьяковская галерея Запад</p></div></div> <div class=\"footer-block-about\" data-v-439c05b5><div class=\"footer-block-about-title\" data-v-439c05b5><a href data-v-439c05b5>новости</a> <a href data-v-439c05b5>программа лояльности</a> <a href data-v-439c05b5>контакты</a></div> <div class=\"footer-block-about-input\" data-v-439c05b5><p data-v-439c05b5>Узнавайте больше об искусстве с нашей рассылкой</p> <label data-v-439c05b5><input type=\"text\" placeholder=\"ваш email\" data-v-439c05b5> <button data-v-439c05b5>(отправить)</button></label></div> <div class=\"footer-block-about-conditions\" data-v-439c05b5><div data-v-439c05b5><p data-v-439c05b5>Условия использования материалов сайта</p> <p data-v-439c05b5>Политика конфиденциальности</p></div> <div data-v-439c05b5><p data-v-439c05b5>(Made by ONY)</p></div></div></div></div> <div class=\"footer-min\" data-v-439c05b5><div class=\"footer-block-logo img-max\" data-v-439c05b5><img"+(_vm._ssrAttr("src",__webpack_require__(26)))+" alt data-v-439c05b5></div> <div class=\"footer-block-info\" data-v-439c05b5><div class=\"mini-block\" data-v-439c05b5><img"+(_vm._ssrAttr("src",__webpack_require__(26)))+" alt class=\"img-min\" data-v-439c05b5> <div class=\"footer-block-info-title\" data-v-439c05b5><a href data-v-439c05b5>Афиша</a> <a href data-v-439c05b5>образование</a> <a href data-v-439c05b5>о музее</a> <a href data-v-439c05b5>медиа</a> <a href data-v-439c05b5>новости</a> <a href data-v-439c05b5>программа лояльности</a> <a href data-v-439c05b5>контакты</a></div></div> <div class=\"canvas\" data-v-439c05b5><canvas id=\"footer-arrow-min\" data-v-439c05b5></canvas></div> <div class=\"footer-block-about-input\" data-v-439c05b5><p data-v-439c05b5>Узнавайте больше об искусстве с нашей рассылкой</p> <label data-v-439c05b5><input type=\"text\" placeholder=\"ваш email\" data-v-439c05b5> <button data-v-439c05b5>(отправить)</button></label></div> <div class=\"footer-block-info-social\" data-v-439c05b5><a href data-v-439c05b5><img"+(_vm._ssrAttr("src",__webpack_require__(28)))+" alt data-v-439c05b5></a> <a href data-v-439c05b5><img"+(_vm._ssrAttr("src",__webpack_require__(29)))+" alt data-v-439c05b5></a> <a href data-v-439c05b5><img"+(_vm._ssrAttr("src",__webpack_require__(30)))+" alt data-v-439c05b5></a> <a href data-v-439c05b5><img"+(_vm._ssrAttr("src",__webpack_require__(31)))+" alt data-v-439c05b5></a></div> <div class=\"footer-block-info-text\" data-v-439c05b5><p data-v-439c05b5>2020 © Третьяковская галерея Запад</p></div> <div class=\"footer-block-about\" data-v-439c05b5><div class=\"footer-block-about-conditions\" data-v-439c05b5><div data-v-439c05b5><p data-v-439c05b5>Условия использования материалов сайта</p> <p data-v-439c05b5>Политика конфиденциальности</p></div> <div data-v-439c05b5><p class=\"made\" data-v-439c05b5>(Made by ONY)</p></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=439c05b5&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Footervue_type_script_lang_js_ = ({
  name: "Footer",

  mounted() {
    let canvas = document.getElementById('footer-arrow');

    if (canvas.getContext) {
      let ctx = canvas.getContext('2d');
      ctx.beginPath();
      ctx.strokeStyle = '#FFFFFF';
      ctx.moveTo(canvas.width + 1, 0);
      ctx.lineTo(1, canvas.height / 2);
      ctx.lineTo(canvas.height / 2, canvas.height);
      ctx.closePath();
      ctx.stroke();
    }

    let canvasMin = document.getElementById('footer-arrow-min');

    if (canvasMin.getContext) {
      let ctx = canvasMin.getContext('2d');
      ctx.beginPath();
      ctx.strokeStyle = '#FFFFFF';
      ctx.moveTo(canvasMin.width + 1, 10);
      ctx.lineTo(1, canvasMin.height / 2);
      ctx.lineTo(canvasMin.height * 3, canvasMin.height);
      ctx.closePath();
      ctx.stroke();
    }
  }

});
// CONCATENATED MODULE: ./components/Footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Footer.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(41)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Footervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "439c05b5",
  "1b91d344"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_439c05b5_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_439c05b5_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_439c05b5_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_439c05b5_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_439c05b5_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(27);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(43);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n@media(max-width:500px){\n.mini-block[data-v-439c05b5]{\n    display:flex;\n    align-items:flex-start\n}\n}\n.img-min[data-v-439c05b5]{\n  display:none\n}\n@media(max-width:500px){\n.img-min[data-v-439c05b5]{\n    display:block;\n    margin-top:3px\n}\n}\n.img-max[data-v-439c05b5]{\n  display:block\n}\n@media(max-width:500px){\n.img-max[data-v-439c05b5]{\n    display:none!important\n}\n}\n.footer-min[data-v-439c05b5]{\n  padding:40px 20px;\n  display:none\n}\n@media(max-width:800px){\n.footer-min[data-v-439c05b5]{\n    display:flex;\n    background:#221f1a\n}\n.footer-min .footer-block-logo[data-v-439c05b5]{\n    margin-right:100px\n}\n.footer-min #footer-arrow-min[data-v-439c05b5]{\n    width:100%;\n    height:200px\n}\n.footer-min .footer-block-info-social[data-v-439c05b5]{\n    margin-top:20px;\n    margin-bottom:10px\n}\n.footer-min .footer-block-info[data-v-439c05b5]{\n    display:flex;\n    flex-direction:column;\n    margin-bottom:10px;\n    flex:1\n}\n}\n@media(max-width:800px)and (max-width:500px){\n.footer-min .footer-block-logo[data-v-439c05b5]{\n    margin-right:0;\n    height:200px;\n    display:inline\n}\n.footer-min .footer-block-info-title[data-v-439c05b5]{\n    margin-left:80px\n}\n}\n.footer[data-v-439c05b5]{\n  background:#221f1a;\n  display:flex;\n  padding:40px 20px;\n  justify-content:space-between\n}\n@media(max-width:800px){\n.footer[data-v-439c05b5]{\n    display:none!important\n}\n}\n.footer #footer-arrow[data-v-439c05b5]{\n  flex:1\n}\n.footer-block-about[data-v-439c05b5]{\n  display:flex;\n  flex-direction:column;\n  justify-content:space-between;\n  width:50%\n}\n@media(max-width:800px){\n.footer-block-about[data-v-439c05b5]{\n    width:100%\n}\n}\n.footer-block-about-conditions[data-v-439c05b5]{\n  font-style:normal;\n  font-weight:400;\n  font-size:15px;\n  line-height:20px;\n  color:#fff;\n  display:flex;\n  justify-content:space-between\n}\n@media(max-width:500px){\n.footer-block-about-conditions[data-v-439c05b5]{\n    flex-direction:column;\n    justify-content:flex-start;\n    border-top:1px solid #fff;\n    padding-top:20px\n}\n}\n.footer-block-about-conditions .made[data-v-439c05b5]{\n  white-space:nowrap;\n  font-style:normal;\n  font-weight:400;\n  font-size:15px;\n  line-height:20px;\n  text-align:right;\n  text-transform:uppercase;\n  color:#fff\n}\n@media(max-width:500px){\n.footer-block-about-conditions .made[data-v-439c05b5]{\n    text-align:left;\n    margin-top:15px\n}\n}\n.footer-block-about-input[data-v-439c05b5]{\n  color:#fff\n}\n.footer-block-about-input p[data-v-439c05b5]{\n  margin-bottom:20px\n}\n.footer-block-about-input label[data-v-439c05b5]{\n  display:flex;\n  justify-content:space-around;\n  flex-wrap:nowrap;\n  border:1px solid #fff;\n  padding:9px;\n  width:100%\n}\n.footer-block-about-input label input[data-v-439c05b5]{\n  background-color:#221f1a;\n  width:70%;\n  outline:none\n}\n.footer-block-about-input label button[data-v-439c05b5]{\n  font-style:normal;\n  font-weight:400;\n  font-size:15px;\n  line-height:20px;\n  text-align:right;\n  text-transform:uppercase;\n  white-space:nowrap\n}\n@media(max-width:650px){\n.footer-block-about-input label button[data-v-439c05b5]{\n    visibility:hidden;\n    position:relative\n}\n.footer-block-about-input label button[data-v-439c05b5]:after{\n    content:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    visibility:visible;\n    display:block;\n    position:absolute;\n    right:0;\n    top:0\n}\n}\n.footer-block-about-title[data-v-439c05b5]{\n  display:flex;\n  flex-direction:column\n}\n.footer-block-about-title a[data-v-439c05b5]{\n  font-style:normal;\n  font-weight:400;\n  font-size:22px;\n  line-height:25px;\n  text-transform:uppercase;\n  color:#fff;\n  margin-bottom:10px\n}\n.footer-block-info[data-v-439c05b5]{\n  justify-content:space-between\n}\n.footer-block-info[data-v-439c05b5],.footer-block-info-title[data-v-439c05b5]{\n  display:flex;\n  flex-direction:column\n}\n.footer-block-info-title a[data-v-439c05b5]{\n  font-style:normal;\n  font-weight:400;\n  font-size:22px;\n  line-height:25px;\n  text-transform:uppercase;\n  color:#fff;\n  margin-bottom:10px\n}\n.footer-block-info-text[data-v-439c05b5]{\n  font-style:normal;\n  font-weight:400;\n  font-size:15px;\n  line-height:20px;\n  color:#fff;\n  margin-bottom:30px\n}\n.footer-block-info-social[data-v-439c05b5]{\n  margin-top:15px;\n  display:flex;\n  align-items:center\n}\n.footer-block-info-social a[data-v-439c05b5]{\n  margin:10px\n}\n@media(max-width:500px){\n.footer-block-info-social[data-v-439c05b5]{\n    width:100%;\n    justify-content:space-between\n}\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAxNiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEgMjFMMTQuMzMzMyAxMUwxIDAuOTk5OTk5IiBzdHJva2U9IndoaXRlIi8+Cjwvc3ZnPgo="

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxjaXJjbGUgY3g9IjciIGN5PSI3IiByPSI2LjUiIHN0cm9rZT0iIzIyMUYxQSIvPg0KPHBhdGggZD0iTTExLjUgMTEuNUwxOS41IDE5LjUiIHN0cm9rZT0iIzIyMUYxQSIvPg0KPC9zdmc+DQo="

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDggMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNMC44ODg2MTMgMTAuMjM1QzAuODg4NjEzIDEyLjUgMS42OTg2MSAxNC40NjUgMy4zMzM2MSAxNi4xNkMzLjQwODYxIDE2LjIzNSAzLjQ4MzYxIDE2LjIzNSAzLjU1ODYxIDE2LjE2TDMuNjYzNjEgMTYuMDdDMy43Mzg2MSAxNS45OTUgMy43Mzg2MSAxNS45MzUgMy42OTM2MSAxNS44NkMyLjQzMzYxIDE0LjI4NSAxLjc4ODYxIDEyLjMyIDEuNzg4NjEgMTAuMjk1QzEuNzg4NjEgNi4wOTUgNC4yOTM2MSAyLjk3NSA3LjE4ODYxIDEuNEM3LjI5MzYxIDEuMzU1IDcuMzIzNjEgMS4yOCA3LjI3ODYxIDEuMTc1TDcuMjE4NjEgMS4wNTVDNy4xNzM2MSAwLjk2NDk5OSA3LjExMzYxIDAuOTQ5OTk5IDcuMDA4NjEgMC45OTVDMy43Njg2MSAyLjQzNSAwLjg4ODYxMyA1LjcyIDAuODg4NjEzIDEwLjIzNVoiIGZpbGw9IiMyMjFGMUEiLz4NCjwvc3ZnPg0K"

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDggMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNNy4zMTczNCA2Ljk1QzcuMzE3MzQgNC42ODUgNi41MDczNCAyLjcyIDQuODcyMzQgMS4wMjVDNC43OTczNCAwLjk0OTk5OSA0LjcyMjM0IDAuOTQ5OTk5IDQuNjQ3MzQgMS4wMjVMNC41NDIzNCAxLjExNUM0LjQ2NzM0IDEuMTkgNC40NTIzNCAxLjI1IDQuNTI3MzQgMS4zMjVDNS43NzIzNCAyLjkgNi40MTczNCA0Ljg2NSA2LjQxNzM0IDYuOTA1QzYuNDE3MzQgMTEuMTA1IDMuOTEyMzQgMTQuMjI1IDEuMDE3MzQgMTUuNzg1QzAuOTEyMzQ0IDE1Ljg0NSAwLjg4MjM0NCAxNS45MiAwLjkyNzM0NCAxNi4wMjVMMC45ODczNDQgMTYuMTQ1QzEuMDMyMzQgMTYuMjUgMS4wNzczNCAxNi4yNSAxLjE5NzM0IDE2LjIwNUM0LjQzNzM0IDE0Ljc2NSA3LjMxNzM0IDExLjQ5NSA3LjMxNzM0IDYuOTVaIiBmaWxsPSIjMjIxRjFBIi8+DQo8L3N2Zz4NCg=="

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHk9IjYiIHdpZHRoPSIzMCIgaGVpZ2h0PSIxIiBmaWxsPSIjMjIxRjFBIi8+DQo8cmVjdCB5PSIxNCIgd2lkdGg9IjMwIiBoZWlnaHQ9IjEiIGZpbGw9IiMyMjFGMUEiLz4NCjxyZWN0IHk9IjIyIiB3aWR0aD0iMzAiIGhlaWdodD0iMSIgZmlsbD0iIzIyMUYxQSIvPg0KPC9zdmc+DQo="

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xIDE5TDEwIDEwTTE5IDFMMTAgMTBNMTAgMTBMMSAxTTEwIDEwTDE5IDE5IiBzdHJva2U9IndoaXRlIi8+DQo8L3N2Zz4NCg=="

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_1b263a2a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_1b263a2a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_1b263a2a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_1b263a2a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_1b263a2a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.d-none[data-v-1b263a2a]{\n  display:none\n}\n#header-arrow[data-v-1b263a2a]{\n  width:100%;\n  height:100px\n}\n.bg-yellow[data-v-1b263a2a]{\n  background:#ffdd7c\n}\n.bg-white[data-v-1b263a2a]{\n  background:#fff\n}\n.header-block[data-v-1b263a2a]{\n  position:fixed;\n  z-index:9999\n}\n.min[data-v-1b263a2a]{\n  display:none\n}\n.hidden[data-v-1b263a2a],.min-menu[data-v-1b263a2a]{\n  display:flex\n}\n.min-menu[data-v-1b263a2a]{\n  flex-direction:column;\n  color:#fff\n}\n.min-menu .nav-title-menu[data-v-1b263a2a]{\n  color:#fff;\n  margin-bottom:30px\n}\n@media(max-width:650px){\n.min-menu .nav-title-menu[data-v-1b263a2a]{\n    margin-bottom:20px\n}\n}\n.nav-button[data-v-1b263a2a]{\n  width:30px\n}\n.bg-dark[data-v-1b263a2a]{\n  background:#221f1a\n}\n.nav-title[data-v-1b263a2a]{\n  font-size:15px;\n  line-height:20px;\n  text-transform:uppercase;\n  flex:none;\n  order:1;\n  flex-grow:0;\n  margin:0 21px\n}\n.nav-title[data-v-1b263a2a],.nav-title-menu[data-v-1b263a2a]{\n  font-style:normal;\n  font-weight:400;\n  color:#221f1a\n}\n.nav-title-menu[data-v-1b263a2a]{\n  font-size:22px;\n  line-height:25px\n}\n@media(max-width:1220px){\n.nav-title-menu[data-v-1b263a2a]{\n    font-size:18px\n}\n}\n@media(max-width:990px){\n.nav-title-menu[data-v-1b263a2a]{\n    font-size:16px\n}\n}\n@media(max-width:990px){\n.hidden[data-v-1b263a2a]{\n    display:none\n}\n.min[data-v-1b263a2a]{\n    display:flex\n}\n}\n.nav-logo img[data-v-1b263a2a]{\n  width:50px;\n  height:55px\n}\n.nav-title-logo[data-v-1b263a2a]{\n  font-weight:700;\n  font-size:18px;\n  line-height:15px;\n  color:#221f1a\n}\n.nav-title-logo-mini[data-v-1b263a2a]{\n  margin:0;\n  padding:0;\n  font-weight:700;\n  font-size:16px;\n  line-height:20px;\n  color:#221f1a\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAxMSAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAuOTk5OTg1IDE4LjVMOS45OTk5OCA5LjVMMC45OTk5ODUgMSIgc3Ryb2tlPSIjMjIxRjFBIi8+Cjwvc3ZnPgo="

/***/ }),
/* 66 */,
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(74);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("bfe03920", content, true, context)
};

/***/ }),
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMCAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeT0iOCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjIiIGZpbGw9IiMyMjFGMUEiLz4KPHJlY3QgeT0iNCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjIiIGZpbGw9IiMyMjFGMUEiLz4KPHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjIiIGZpbGw9IiMyMjFGMUEiLz4KPC9zdmc+Cg=="

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMCAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeT0iNiIgd2lkdGg9IjQiIGhlaWdodD0iNCIgZmlsbD0iIzIyMUYxQSIvPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMjIxRjFBIi8+CjxyZWN0IHg9IjYiIHk9IjYiIHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiMyMjFGMUEiLz4KPHJlY3QgeD0iNiIgd2lkdGg9IjQiIGhlaWdodD0iNCIgZmlsbD0iIzIyMUYxQSIvPgo8L3N2Zz4K"

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_events_vue_vue_type_style_index_0_id_4b9a64b0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_events_vue_vue_type_style_index_0_id_4b9a64b0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_events_vue_vue_type_style_index_0_id_4b9a64b0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_events_vue_vue_type_style_index_0_id_4b9a64b0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_events_vue_vue_type_style_index_0_id_4b9a64b0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.hidden[data-v-4b9a64b0]{\n  display:none!important\n}\n.events[data-v-4b9a64b0]{\n  background:#ffdd7c;\n  padding-top:161px\n}\n.events .mini[data-v-4b9a64b0]{\n  display:none\n}\n@media(max-width:920px){\n.events .mini[data-v-4b9a64b0]{\n    display:flex\n}\n}\n.events .max[data-v-4b9a64b0]{\n  display:flex\n}\n@media(max-width:920px){\n.events .max[data-v-4b9a64b0]{\n    display:none\n}\n}\n.events .border-top[data-v-4b9a64b0]{\n  border-top:1px solid\n}\n.events-header[data-v-4b9a64b0]{\n  display:flex;\n  flex-direction:column;\n  padding:20px\n}\n.events-header-title[data-v-4b9a64b0]{\n  font-style:normal;\n  font-weight:400;\n  font-size:50px;\n  line-height:50px;\n  text-transform:uppercase;\n  color:#211f1a;\n  margin-bottom:40px\n}\n@media(max-width:700px){\n.events-header-title[data-v-4b9a64b0]{\n    font-size:30px;\n    line-height:32px\n}\n}\n.events-header-filter[data-v-4b9a64b0]{\n  display:flex;\n  justify-content:space-between\n}\n.events-header-filter-left[data-v-4b9a64b0]{\n  display:flex\n}\n.events-header-filter-left span[data-v-4b9a64b0]{\n  margin:5px\n}\n.events-header-filter-left .item[data-v-4b9a64b0]{\n  cursor:pointer;\n  display:flex;\n  align-items:center;\n  margin-right:20px;\n  position:relative;\n  font-style:normal;\n  font-weight:400;\n  font-size:15px;\n  line-height:20px;\n  text-align:right;\n  text-transform:uppercase;\n  color:#221f1a\n}\n@media(max-width:700px){\n.events-header-filter-left .item[data-v-4b9a64b0]{\n    margin-right:5px;\n    font-size:13px;\n    line-height:15px\n}\n}\n.events-header-filter-left .item img[data-v-4b9a64b0]{\n  margin:5px\n}\n.events-header-filter-left .item-nav[data-v-4b9a64b0]{\n  padding:20px;\n  position:absolute;\n  text-align:left;\n  cursor:pointer;\n  background:#fff;\n  border:1px solid #221f1a;\n  box-sizing:border-box;\n  top:35px\n}\n.events-header-filter-left .item-nav-text[data-v-4b9a64b0]{\n  margin-bottom:15px;\n  white-space:nowrap\n}\n.events-header-filter-left .item-nav-text[data-v-4b9a64b0]:hover{\n  opacity:.5\n}\n.events-header-filter-left .item-nav-filter p[data-v-4b9a64b0]{\n  white-space:nowrap\n}\n.events-header-filter-left .item-nav-filter-container[data-v-4b9a64b0]{\n  display:block;\n  position:relative;\n  padding-left:35px;\n  margin-bottom:12px;\n  cursor:pointer;\n  font-size:22px;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  -ms-user-select:none;\n  user-select:none\n}\n.events-header-filter-left .item-nav-filter-container input[data-v-4b9a64b0]{\n  position:absolute;\n  opacity:0;\n  cursor:pointer;\n  height:0;\n  width:0\n}\n.events-header-filter-left .item-nav-filter .checkmark[data-v-4b9a64b0]{\n  position:absolute;\n  top:-7px;\n  left:0;\n  height:20px;\n  width:20px;\n  background-color:#fff;\n  border:1px solid #000\n}\n.events-header-filter-left .item-nav-filter-container:hover input~.checkmark[data-v-4b9a64b0],.events-header-filter-left .item-nav-filter-container input:checked~.checkmark[data-v-4b9a64b0]{\n  background-color:#fff;\n  border:1px solid #000\n}\n.events-header-filter-left .item-nav-filter .checkmark[data-v-4b9a64b0]:after{\n  content:\"\";\n  position:absolute;\n  display:none\n}\n.events-header-filter-left .item-nav-filter-container input:checked~.checkmark[data-v-4b9a64b0]:after{\n  display:block\n}\n.events-header-filter-left .item-nav-filter-container .checkmark[data-v-4b9a64b0]:after{\n  left:7px;\n  top:2px;\n  width:6px;\n  height:10px;\n  border:solid #000;\n  border-width:0 1px 1px 0;\n  transform:rotate(45deg)\n}\n.events-header-filter-left .item-nav-filter-title[data-v-4b9a64b0]{\n  display:flex;\n  align-items:center;\n  margin-bottom:15px\n}\n.events-header-filter-left .item-nav-filter-content[data-v-4b9a64b0]{\n  margin-left:20px\n}\n.events-header-filter-left .item-nav-filter-content-item[data-v-4b9a64b0]{\n  margin-bottom:15px\n}\n.events-header-filter-right[data-v-4b9a64b0]{\n  display:flex\n}\n.events-header-filter-right span[data-v-4b9a64b0]{\n  margin:5px\n}\n.events-header-filter-right .active[data-v-4b9a64b0]{\n  opacity:.7\n}\n.events-header-filter-right .item[data-v-4b9a64b0]{\n  display:flex;\n  align-items:center;\n  margin-right:20px;\n  font-style:normal;\n  font-weight:400;\n  font-size:15px;\n  line-height:20px;\n  text-transform:uppercase;\n  color:#221f1a;\n  cursor:pointer\n}\n.events-header-filter-right .item img[data-v-4b9a64b0]{\n  margin-right:5px\n}\n.events-content-block[data-v-4b9a64b0]{\n  border-top:1px solid;\n  margin-left:20px;\n  margin-right:20px;\n  display:flex\n}\n@media(max-width:920px){\n.events-content-block[data-v-4b9a64b0]{\n    flex-direction:column\n}\n}\n.events-content-block-text[data-v-4b9a64b0]{\n  margin-top:20px;\n  margin-bottom:20px;\n  padding-left:20px;\n  flex:2;\n  border-right:1px solid\n}\n@media(max-width:920px){\n.events-content-block-text[data-v-4b9a64b0]{\n    border-right:0;\n    border-bottom:1px solid;\n    padding-bottom:20px;\n    margin-bottom:0\n}\n}\n.events-content-block-text-day[data-v-4b9a64b0]{\n  font-size:15px;\n  line-height:20px\n}\n.events-content-block-text-date[data-v-4b9a64b0],.events-content-block-text-day[data-v-4b9a64b0]{\n  font-style:normal;\n  font-weight:400;\n  text-transform:uppercase;\n  color:#221f1a\n}\n.events-content-block-text-date[data-v-4b9a64b0]{\n  font-size:30px;\n  line-height:32px\n}\n.events-content-block-items[data-v-4b9a64b0]{\n  flex:6\n}\n.events-content-block-item[data-v-4b9a64b0]{\n  padding-bottom:20px;\n  padding-top:20px;\n  height:270px;\n  display:flex;\n  flex:6\n}\n@media(max-width:700px){\n.events-content-block-item[data-v-4b9a64b0]{\n    height:auto\n}\n}\n.events-content-block-item-image[data-v-4b9a64b0]{\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  width:269px;\n  border-right:1px solid\n}\n@media(max-width:700px){\n.events-content-block-item-image[data-v-4b9a64b0]{\n    display:none\n}\n}\n.events-content-block-item-imageMini[data-v-4b9a64b0]{\n  display:none;\n  justify-content:center;\n  align-items:center;\n  margin-bottom:30px;\n  margin-top:30px\n}\n@media(max-width:700px){\n.events-content-block-item-imageMini[data-v-4b9a64b0]{\n    display:flex\n}\n}\n.events-content-block-item-body[data-v-4b9a64b0]{\n  padding-left:20px;\n  padding-right:20px;\n  flex:1;\n  flex-direction:column;\n  align-content:space-between\n}\n.events-content-block-item-body[data-v-4b9a64b0],.events-content-block-item-body-text[data-v-4b9a64b0]{\n  display:flex;\n  justify-content:space-between\n}\n.events-content-block-item-body-text-authorMini p[data-v-4b9a64b0],.events-content-block-item-body-text-author p[data-v-4b9a64b0],.events-content-block-item-body-text-date p[data-v-4b9a64b0]{\n  font-style:normal;\n  font-weight:400;\n  font-size:15px;\n  line-height:20px;\n  text-transform:uppercase;\n  color:#221f1a\n}\n@media(max-width:700px){\n.events-content-block-item-body-text-authorMini p[data-v-4b9a64b0],.events-content-block-item-body-text-author p[data-v-4b9a64b0],.events-content-block-item-body-text-date p[data-v-4b9a64b0]{\n    font-size:13px;\n    line-height:15px\n}\n}\n@media(max-width:920px){\n.events-content-block-item-body-text-date[data-v-4b9a64b0]{\n    display:flex;\n    justify-content:space-between;\n    width:100%\n}\n}\n.events-content-block-item-body-text-authorMini[data-v-4b9a64b0]{\n  display:none\n}\n@media(max-width:700px){\n.events-content-block-item-body-text-authorMini[data-v-4b9a64b0]{\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n    margin-bottom:20px;\n    margin-top:30px\n}\n}\n.events-content-block-item-body-text-author[data-v-4b9a64b0]{\n  display:flex;\n  justify-content:center;\n  align-items:flex-start\n}\n.events-content-block-item-body-text-author img[data-v-4b9a64b0]{\n  margin-top:5px;\n  margin-right:15px\n}\n@media(max-width:700px){\n.events-content-block-item-body-text-author[data-v-4b9a64b0]{\n    display:none\n}\n}\n.events-content-block-item-body-description[data-v-4b9a64b0]{\n  font-style:normal;\n  font-weight:400;\n  font-size:30px;\n  line-height:32px;\n  display:flex;\n  align-items:center;\n  text-align:center;\n  text-transform:uppercase;\n  color:#221f1a;\n  justify-content:center\n}\n@media(max-width:700px){\n.events-content-block-item-body-description[data-v-4b9a64b0]{\n    font-size:22px;\n    line-height:25px\n}\n}\n.events-content-block-item-body-description span[data-v-4b9a64b0]{\n  font-style:italic\n}\n.events-calendar[data-v-4b9a64b0]{\n  display:flex;\n  flex-wrap:wrap\n}\n.events-calendar-item[data-v-4b9a64b0]:nth-child(odd){\n  border-right:1px solid;\n  line-height:10px;\n  margin-left:20px;\n  padding-right:20px;\n  position:relative\n}\n@media(max-width:680px){\n.events-calendar-item[data-v-4b9a64b0]:nth-child(odd){\n    border-right:0\n}\n}\n.events-calendar-item[data-v-4b9a64b0]:nth-child(odd):after{\n  position:absolute;\n  top:0;\n  right:-5px;\n  content:\"\";\n  display:block;\n  width:10px;\n  height:20px;\n  background:#ffdd7c\n}\n@media(max-width:680px){\n.events-calendar-item[data-v-4b9a64b0]:nth-child(odd):after{\n    display:none\n}\n}\n.events-calendar-item[data-v-4b9a64b0]:nth-child(odd):before{\n  position:absolute;\n  bottom:0;\n  right:-5px;\n  content:\"\";\n  display:block;\n  width:10px;\n  height:20px;\n  background:#ffdd7c\n}\n@media(max-width:680px){\n.events-calendar-item[data-v-4b9a64b0]:nth-child(odd):before{\n    display:none\n}\n}\n.events-calendar-item[data-v-4b9a64b0]:nth-child(2n){\n  margin-right:20px;\n  padding-left:20px\n}\n.events-calendar-item[data-v-4b9a64b0]{\n  border-top:1px solid;\n  height:620px;\n  display:flex;\n  padding-top:20px;\n  flex-direction:column;\n  justify-content:space-between;\n  width:47%\n}\n@media(max-width:920px){\n.events-calendar-item[data-v-4b9a64b0]{\n    height:420px\n}\n}\n@media(max-width:680px){\n.events-calendar-item[data-v-4b9a64b0]{\n    width:100%\n}\n}\n.events-calendar-item-text[data-v-4b9a64b0]{\n  display:flex;\n  justify-content:space-between;\n  align-items:flex-start\n}\n.events-calendar-item-text-author p[data-v-4b9a64b0],.events-calendar-item-text-date p[data-v-4b9a64b0],.events-calendar-item-text-mini p[data-v-4b9a64b0]{\n  font-style:normal;\n  font-weight:400;\n  font-size:15px;\n  line-height:20px;\n  text-transform:uppercase;\n  color:#221f1a\n}\n@media(max-width:700px){\n.events-calendar-item-text-author p[data-v-4b9a64b0],.events-calendar-item-text-date p[data-v-4b9a64b0],.events-calendar-item-text-mini p[data-v-4b9a64b0]{\n    font-size:13px;\n    line-height:15px\n}\n}\n@media(max-width:920px){\n.events-calendar-item-text-date[data-v-4b9a64b0]{\n    display:flex;\n    justify-content:space-between;\n    width:100%\n}\n}\n.events-calendar-item-text-mini[data-v-4b9a64b0]{\n  display:none\n}\n@media(max-width:920px){\n.events-calendar-item-text-mini[data-v-4b9a64b0]{\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n    margin-bottom:20px\n}\n}\n.events-calendar-item-text-author[data-v-4b9a64b0]{\n  display:flex;\n  align-items:center\n}\n.events-calendar-item-text-author img[data-v-4b9a64b0]{\n  margin-right:15px\n}\n@media(max-width:920px){\n.events-calendar-item-text-author[data-v-4b9a64b0]{\n    display:none\n}\n}\n.events-calendar-item-image[data-v-4b9a64b0]{\n  display:flex;\n  justify-content:center;\n  align-items:center\n}\n.events-calendar-item-description[data-v-4b9a64b0]{\n  font-style:normal;\n  font-weight:400;\n  font-size:30px;\n  line-height:32px;\n  display:flex;\n  align-items:flex-start;\n  text-transform:uppercase;\n  color:#221f1a;\n  justify-content:center\n}\n@media(max-width:700px){\n.events-calendar-item-description[data-v-4b9a64b0]{\n    font-size:22px;\n    line-height:25px\n}\n}\n.events-calendar-item-description span[data-v-4b9a64b0]{\n  font-style:italic\n}\n.events-pagination[data-v-4b9a64b0]{\n  border-top:1px solid;\n  margin-right:20px;\n  margin-left:20px;\n  height:240px;\n  padding:20px;\n  display:flex;\n  flex-direction:column;\n  align-content:center;\n  justify-content:space-between\n}\n.events-pagination-page[data-v-4b9a64b0]{\n  display:flex;\n  justify-content:flex-start\n}\n.events-pagination-page .active[data-v-4b9a64b0]{\n  opacity:.4\n}\n.events-pagination-page span[data-v-4b9a64b0]{\n  margin:12px;\n  font-style:normal;\n  font-weight:400;\n  font-size:18px;\n  line-height:26px;\n  text-align:right;\n  color:#221f1a\n}\n.events-pagination-page img[data-v-4b9a64b0]{\n  margin-left:12px\n}\n.events-pagination-line[data-v-4b9a64b0]{\n  position:relative\n}\n.events-pagination-line[data-v-4b9a64b0]:after{\n  content:\"\";\n  width:100%;\n  border-bottom:1px solid #000;\n  position:absolute;\n  left:0;\n  top:50%;\n  z-index:1;\n  transform:rotate(-8deg)\n}\n@media(max-width:800px){\n.events-pagination-line[data-v-4b9a64b0]:after{\n    transform:rotate(-15deg)\n}\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/events.vue?vue&type=template&id=4b9a64b0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Header',{ref:"header",attrs:{"bgcolor":"yellow","logoColor":"black"}}),_vm._ssrNode(" <div class=\"events\" data-v-4b9a64b0><div class=\"events-header\" data-v-4b9a64b0><div class=\"events-header-title\" data-v-4b9a64b0><p data-v-4b9a64b0>Афиша событий</p></div> <div class=\"events-header-filter\" data-v-4b9a64b0><div class=\"events-header-filter-left mini \" data-v-4b9a64b0><div class=\"item\" data-v-4b9a64b0><span data-v-4b9a64b0>(</span> <p data-v-4b9a64b0>Фильтр</p> <img"+(_vm._ssrAttr("src",__webpack_require__(35)))+" alt data-v-4b9a64b0> <span data-v-4b9a64b0>)</span> <div class=\"item-nav hidden\" data-v-4b9a64b0><p class=\"item-nav-text\" data-v-4b9a64b0>Все события</p> <p class=\"item-nav-text\" data-v-4b9a64b0>Выставки</p> <p class=\"item-nav-text\" data-v-4b9a64b0>Экскурсии</p> <p class=\"item-nav-text\" data-v-4b9a64b0>Лекции</p> <p class=\"item-nav-text\" data-v-4b9a64b0>Творческие мастерские</p> <p class=\"item-nav-text\" data-v-4b9a64b0>Концерты</p> <p class=\"item-nav-text\" data-v-4b9a64b0>Кино</p> <p class=\"item-nav-text\" data-v-4b9a64b0>ДискусCии</p> <p class=\"item-nav-text\" data-v-4b9a64b0>Конференции</p></div></div></div> <div class=\"events-header-filter-left max \" data-v-4b9a64b0><div class=\"item\" data-v-4b9a64b0><span data-v-4b9a64b0>(</span> <p class=\"whitespace-nowrap\" data-v-4b9a64b0>Все события</p> <img"+(_vm._ssrAttr("src",__webpack_require__(35)))+" alt data-v-4b9a64b0> <span data-v-4b9a64b0>)</span> <div class=\"item-nav hidden\" data-v-4b9a64b0><p class=\"item-nav-text\" data-v-4b9a64b0>Все события</p> <p class=\"item-nav-text\" data-v-4b9a64b0>Выставки</p> <p class=\"item-nav-text\" data-v-4b9a64b0>Экскурсии</p> <p class=\"item-nav-text\" data-v-4b9a64b0>Лекции</p> <p class=\"item-nav-text\" data-v-4b9a64b0>Творческие мастерские</p> <p class=\"item-nav-text\" data-v-4b9a64b0>Концерты</p> <p class=\"item-nav-text\" data-v-4b9a64b0>Кино</p> <p class=\"item-nav-text\" data-v-4b9a64b0>ДискусCии</p> <p class=\"item-nav-text\" data-v-4b9a64b0>Конференции</p></div></div> <div class=\"item\" data-v-4b9a64b0><span data-v-4b9a64b0>(</span> <p class=\"whitespace-nowrap\" data-v-4b9a64b0>Аудитория</p> <img"+(_vm._ssrAttr("src",__webpack_require__(35)))+" alt data-v-4b9a64b0> <span data-v-4b9a64b0>)</span> <div class=\"item-nav hidden\" data-v-4b9a64b0><p class=\"item-nav-text\" data-v-4b9a64b0>Любая аудитория</p> <p class=\"item-nav-text\" data-v-4b9a64b0>Взрослые</p> <p class=\"item-nav-text\" data-v-4b9a64b0>Экскурсии</p> <p class=\"item-nav-text\" data-v-4b9a64b0>Подростки</p> <p class=\"item-nav-text\" data-v-4b9a64b0>Дети</p> <p class=\"item-nav-text\" data-v-4b9a64b0>Друзья музея</p></div></div> <div class=\"item\" data-v-4b9a64b0><span data-v-4b9a64b0>(</span> <p class=\"whitespace-nowrap\" data-v-4b9a64b0>Все площадки</p> <img"+(_vm._ssrAttr("src",__webpack_require__(35)))+" alt data-v-4b9a64b0> <span data-v-4b9a64b0>)</span> <div class=\"item-nav hidden\" data-v-4b9a64b0><div class=\"item-nav-filter\" data-v-4b9a64b0><div class=\"item-nav-filter-title\" data-v-4b9a64b0><label class=\"item-nav-filter-container\" data-v-4b9a64b0><input type=\"checkbox\" data-v-4b9a64b0> <span class=\"checkmark\" data-v-4b9a64b0></span></label> <p data-v-4b9a64b0>Все площадки</p></div> <div class=\"item-nav-filter-content\" data-v-4b9a64b0><div class=\"item-nav-filter-content-item\" data-v-4b9a64b0><div class=\"flex items-center\" data-v-4b9a64b0><label class=\"item-nav-filter-container\" data-v-4b9a64b0><input type=\"checkbox\" data-v-4b9a64b0> <span class=\"checkmark\" data-v-4b9a64b0></span></label> <p data-v-4b9a64b0>Калининград (Россия)</p> <img"+(_vm._ssrAttr("src",__webpack_require__(35)))+" alt data-v-4b9a64b0></div> <div data-v-4b9a64b0></div></div> <div class=\"item-nav-filter-content-item\" data-v-4b9a64b0><div class=\"flex items-center\" data-v-4b9a64b0><label class=\"item-nav-filter-container\" data-v-4b9a64b0><input type=\"checkbox\" data-v-4b9a64b0> <span class=\"checkmark\" data-v-4b9a64b0></span></label> <p data-v-4b9a64b0>Москва (Россия)</p> <img"+(_vm._ssrAttr("src",__webpack_require__(35)))+" alt data-v-4b9a64b0></div> <div data-v-4b9a64b0></div></div> <div class=\"item-nav-filter-content-item\" data-v-4b9a64b0><div class=\"flex items-center\" data-v-4b9a64b0><label class=\"item-nav-filter-container\" data-v-4b9a64b0><input type=\"checkbox\" data-v-4b9a64b0> <span class=\"checkmark\" data-v-4b9a64b0></span></label> <p data-v-4b9a64b0>Рига (Латвия)</p> <img"+(_vm._ssrAttr("src",__webpack_require__(35)))+" alt data-v-4b9a64b0></div> <div data-v-4b9a64b0></div></div> <div class=\"item-nav-filter-content-item\" data-v-4b9a64b0><div class=\"flex items-center\" data-v-4b9a64b0><label class=\"item-nav-filter-container\" data-v-4b9a64b0><input type=\"checkbox\" data-v-4b9a64b0> <span class=\"checkmark\" data-v-4b9a64b0></span></label> <p data-v-4b9a64b0>Вильнюс (Литва)</p> <img"+(_vm._ssrAttr("src",__webpack_require__(35)))+" alt data-v-4b9a64b0></div> <div class=\"ml-5\" data-v-4b9a64b0><div class=\"flex items-center mt-4\" data-v-4b9a64b0><label class=\"item-nav-filter-container\" data-v-4b9a64b0><input type=\"checkbox\" data-v-4b9a64b0> <span class=\"checkmark\" data-v-4b9a64b0></span></label> <p data-v-4b9a64b0>Museum of illusions</p></div> <div class=\"flex items-center mt-4\" data-v-4b9a64b0><label class=\"item-nav-filter-container\" data-v-4b9a64b0><input type=\"checkbox\" data-v-4b9a64b0> <span class=\"checkmark\" data-v-4b9a64b0></span></label> <p data-v-4b9a64b0>Верхний замок-музей</p></div> <div class=\"flex items-center mt-4\" data-v-4b9a64b0><label class=\"item-nav-filter-container\" data-v-4b9a64b0><input type=\"checkbox\" data-v-4b9a64b0> <span class=\"checkmark\" data-v-4b9a64b0></span></label> <p data-v-4b9a64b0>Национальный музей &quot;Дворецвеликих князей литовских&quot;</p></div> <div class=\"flex items-center mt-4\" data-v-4b9a64b0><label class=\"item-nav-filter-container\" data-v-4b9a64b0><input type=\"checkbox\" data-v-4b9a64b0> <span class=\"checkmark\" data-v-4b9a64b0></span></label> <p data-v-4b9a64b0>Музей Холокоста</p></div></div></div></div></div></div></div> <div class=\"item\" data-v-4b9a64b0><span data-v-4b9a64b0>(</span> <p class=\"whitespace-nowrap\" data-v-4b9a64b0>data</p> <img"+(_vm._ssrAttr("src",__webpack_require__(35)))+" alt data-v-4b9a64b0> <span data-v-4b9a64b0>)</span></div></div> <div class=\"events-header-filter-right\" data-v-4b9a64b0><span data-v-4b9a64b0>(</span> <div class=\"item\" data-v-4b9a64b0><img"+(_vm._ssrAttr("src",__webpack_require__(71)))+" alt data-v-4b9a64b0> <p data-v-4b9a64b0>Календарь</p></div> <span data-v-4b9a64b0>/</span> <div class=\"item active\" data-v-4b9a64b0><img"+(_vm._ssrAttr("src",__webpack_require__(72)))+" alt data-v-4b9a64b0> <p data-v-4b9a64b0>события</p></div> <span data-v-4b9a64b0>)</span></div></div></div> <div class=\"events-content\" data-v-4b9a64b0><div class=\"events-content-block\" data-v-4b9a64b0><div class=\"events-content-block-text\" data-v-4b9a64b0><p class=\"events-content-block-text-day\" data-v-4b9a64b0>четверг, сегодня</p> <p class=\"events-content-block-text-date\" data-v-4b9a64b0>7 октября</p></div> <div class=\"events-content-block-items\" data-v-4b9a64b0><div class=\"events-content-block-item\" data-v-4b9a64b0><div class=\"events-content-block-item-image\" data-v-4b9a64b0><img"+(_vm._ssrAttr("src",__webpack_require__(25)))+" alt data-v-4b9a64b0></div> <div class=\"events-content-block-item-body\" data-v-4b9a64b0><div class=\"events-content-block-item-body-text\" data-v-4b9a64b0><div class=\"events-content-block-item-body-text-date\" data-v-4b9a64b0><p data-v-4b9a64b0>10:00–20:00</p> <p data-v-4b9a64b0>выставка</p></div> <div class=\"events-content-block-item-body-text-author\" data-v-4b9a64b0><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt data-v-4b9a64b0> <p data-v-4b9a64b0>Музей Янтаря, Калининград</p></div></div> <div class=\"events-content-block-item-imageMini\" data-v-4b9a64b0><img"+(_vm._ssrAttr("src",__webpack_require__(25)))+" alt data-v-4b9a64b0></div> <div class=\"events-content-block-item-body-description\" data-v-4b9a64b0><p data-v-4b9a64b0>Истоки мира</p></div> <div data-v-4b9a64b0><div class=\"events-content-block-item-body-text-authorMini\" data-v-4b9a64b0><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt data-v-4b9a64b0> <p data-v-4b9a64b0>Музей Янтаря, Калининград</p></div></div></div></div> <div class=\"events-content-block-item border-top\" data-v-4b9a64b0><div class=\"events-content-block-item-image\" data-v-4b9a64b0><img"+(_vm._ssrAttr("src",__webpack_require__(25)))+" alt data-v-4b9a64b0></div> <div class=\"events-content-block-item-body\" data-v-4b9a64b0><div class=\"events-content-block-item-body-text\" data-v-4b9a64b0><div class=\"events-content-block-item-body-text-date\" data-v-4b9a64b0><p data-v-4b9a64b0>19:00</p> <p data-v-4b9a64b0>Кинопоказ</p></div> <div class=\"events-content-block-item-body-text-author\" data-v-4b9a64b0><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt data-v-4b9a64b0> <p data-v-4b9a64b0>Кинотеатр «Киносфера» Калининград</p></div></div> <div class=\"events-content-block-item-imageMini\" data-v-4b9a64b0><img"+(_vm._ssrAttr("src",__webpack_require__(25)))+" alt data-v-4b9a64b0></div> <div class=\"events-content-block-item-body-description\" data-v-4b9a64b0><p data-v-4b9a64b0>Мифы и легенды в произведениях <span data-v-4b9a64b0> русских художников</span></p></div> <div data-v-4b9a64b0><div class=\"events-content-block-item-body-text-authorMini\" data-v-4b9a64b0><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt data-v-4b9a64b0> <p data-v-4b9a64b0>Музей Янтаря, Калининград</p></div></div></div></div></div></div> <div class=\"events-content-block\" data-v-4b9a64b0><div class=\"events-content-block-text\" data-v-4b9a64b0><p class=\"events-content-block-text-day\" data-v-4b9a64b0>Пятница, завтра</p> <p class=\"events-content-block-text-date\" data-v-4b9a64b0>8 октября</p></div> <div class=\"events-content-block-items\" data-v-4b9a64b0><div class=\"events-content-block-item\" data-v-4b9a64b0><div class=\"events-content-block-item-image\" data-v-4b9a64b0><img"+(_vm._ssrAttr("src",__webpack_require__(25)))+" alt data-v-4b9a64b0></div> <div class=\"events-content-block-item-body\" data-v-4b9a64b0><div class=\"events-content-block-item-body-text\" data-v-4b9a64b0><div class=\"events-content-block-item-body-text-date\" data-v-4b9a64b0><p data-v-4b9a64b0>10:00–12:00</p> <p data-v-4b9a64b0>выставка</p></div> <div class=\"events-content-block-item-body-text-author\" data-v-4b9a64b0><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt data-v-4b9a64b0> <p data-v-4b9a64b0>Музей Янтаря, Калининград</p></div></div> <div class=\"events-content-block-item-imageMini\" data-v-4b9a64b0><img"+(_vm._ssrAttr("src",__webpack_require__(25)))+" alt data-v-4b9a64b0></div> <div class=\"events-content-block-item-body-description\" data-v-4b9a64b0><p data-v-4b9a64b0>«Маленький человек» <span data-v-4b9a64b0>и русская живопись XIX века</span></p></div> <div data-v-4b9a64b0><div class=\"events-content-block-item-body-text-authorMini\" data-v-4b9a64b0><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt data-v-4b9a64b0> <p data-v-4b9a64b0>Музей Янтаря, Калининград</p></div></div></div></div></div></div> <div class=\"events-content-block\" data-v-4b9a64b0><div class=\"events-content-block-text\" data-v-4b9a64b0><p class=\"events-content-block-text-day\" data-v-4b9a64b0>Суббота</p> <p class=\"events-content-block-text-date\" data-v-4b9a64b0>9 октября</p></div> <div class=\"events-content-block-items\" data-v-4b9a64b0><div class=\"events-content-block-item\" data-v-4b9a64b0><div class=\"events-content-block-item-image\" data-v-4b9a64b0><img"+(_vm._ssrAttr("src",__webpack_require__(25)))+" alt data-v-4b9a64b0></div> <div class=\"events-content-block-item-body\" data-v-4b9a64b0><div class=\"events-content-block-item-body-text\" data-v-4b9a64b0><div class=\"events-content-block-item-body-text-date\" data-v-4b9a64b0><p data-v-4b9a64b0>10:00–12:00</p> <p data-v-4b9a64b0>выставка</p></div> <div class=\"events-content-block-item-body-text-author\" data-v-4b9a64b0><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt data-v-4b9a64b0> <p data-v-4b9a64b0>Музей Янтаря, Калининград</p></div></div> <div class=\"events-content-block-item-imageMini\" data-v-4b9a64b0><img"+(_vm._ssrAttr("src",__webpack_require__(25)))+" alt data-v-4b9a64b0></div> <div class=\"events-content-block-item-body-description\" data-v-4b9a64b0><p data-v-4b9a64b0>Замки <span data-v-4b9a64b0>ЛуАры</span></p></div> <div data-v-4b9a64b0><div class=\"events-content-block-item-body-text-authorMini\" data-v-4b9a64b0><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt data-v-4b9a64b0> <p data-v-4b9a64b0>Музей Янтаря, Калининград</p></div></div></div></div> <div class=\"events-content-block-item border-top\" data-v-4b9a64b0><div class=\"events-content-block-item-image\" data-v-4b9a64b0><img"+(_vm._ssrAttr("src",__webpack_require__(25)))+" alt data-v-4b9a64b0></div> <div class=\"events-content-block-item-body\" data-v-4b9a64b0><div class=\"events-content-block-item-body-text\" data-v-4b9a64b0><div class=\"events-content-block-item-body-text-date\" data-v-4b9a64b0><p data-v-4b9a64b0>10:00–12:00</p> <p data-v-4b9a64b0>выставка</p></div> <div class=\"events-content-block-item-body-text-author\" data-v-4b9a64b0><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt data-v-4b9a64b0> <p data-v-4b9a64b0>Музей Янтаря, Калининград</p></div></div> <div class=\"events-content-block-item-imageMini\" data-v-4b9a64b0><img"+(_vm._ssrAttr("src",__webpack_require__(25)))+" alt data-v-4b9a64b0></div> <div class=\"events-content-block-item-body-description\" data-v-4b9a64b0><p data-v-4b9a64b0>Истоки<span data-v-4b9a64b0> мира</span></p></div> <div data-v-4b9a64b0><div class=\"events-content-block-item-body-text-authorMini\" data-v-4b9a64b0><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt data-v-4b9a64b0> <p data-v-4b9a64b0>Музей Янтаря, Калининград</p></div></div></div></div> <div class=\"events-content-block-item border-top\" data-v-4b9a64b0><div class=\"events-content-block-item-image\" data-v-4b9a64b0><img"+(_vm._ssrAttr("src",__webpack_require__(25)))+" alt data-v-4b9a64b0></div> <div class=\"events-content-block-item-body\" data-v-4b9a64b0><div class=\"events-content-block-item-body-text\" data-v-4b9a64b0><div class=\"events-content-block-item-body-text-date\" data-v-4b9a64b0><p data-v-4b9a64b0>10:00–12:00</p> <p data-v-4b9a64b0>выставка</p></div> <div class=\"events-content-block-item-body-text-author\" data-v-4b9a64b0><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt data-v-4b9a64b0> <p data-v-4b9a64b0>Музей Янтаря, Калининград</p></div></div> <div class=\"events-content-block-item-imageMini\" data-v-4b9a64b0><img"+(_vm._ssrAttr("src",__webpack_require__(25)))+" alt data-v-4b9a64b0></div> <div class=\"events-content-block-item-body-description\" data-v-4b9a64b0><p data-v-4b9a64b0>Мифы и легенд в произведениях <span data-v-4b9a64b0>русских художников</span></p></div> <div data-v-4b9a64b0><div class=\"events-content-block-item-body-text-authorMini\" data-v-4b9a64b0><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt data-v-4b9a64b0> <p data-v-4b9a64b0>Музей Янтаря, Калининград</p></div></div></div></div></div></div></div> <div class=\"events-calendar hidden\" data-v-4b9a64b0><div class=\"events-calendar-item\" data-v-4b9a64b0><div class=\"events-calendar-item-text\" data-v-4b9a64b0><div class=\"events-calendar-item-text-date\" data-v-4b9a64b0><p data-v-4b9a64b0>10:00–12:00</p> <p data-v-4b9a64b0>выставка</p></div> <div class=\"events-calendar-item-text-author\" data-v-4b9a64b0><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt data-v-4b9a64b0> <p data-v-4b9a64b0>Музей Янтаря, Калининград</p></div></div> <div class=\"events-calendar-item-image\" data-v-4b9a64b0><img"+(_vm._ssrAttr("src",__webpack_require__(25)))+" alt data-v-4b9a64b0></div> <div class=\"events-calendar-item-description\" data-v-4b9a64b0><p data-v-4b9a64b0>Истоки<span data-v-4b9a64b0> мира</span></p></div> <div data-v-4b9a64b0><div class=\"events-calendar-item-text-mini\" data-v-4b9a64b0><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt data-v-4b9a64b0> <p data-v-4b9a64b0>Музей Янтаря, Калининград</p></div></div></div> <div class=\"events-calendar-item\" data-v-4b9a64b0><div class=\"events-calendar-item-text\" data-v-4b9a64b0><div class=\"events-calendar-item-text-date\" data-v-4b9a64b0><p data-v-4b9a64b0>10:00–12:00</p> <p data-v-4b9a64b0>выставка</p></div> <div class=\"events-calendar-item-text-author\" data-v-4b9a64b0><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt data-v-4b9a64b0> <p data-v-4b9a64b0>Музей Янтаря, Калининград</p></div></div> <div class=\"events-calendar-item-image\" data-v-4b9a64b0><img"+(_vm._ssrAttr("src",__webpack_require__(25)))+" alt data-v-4b9a64b0></div> <div class=\"events-calendar-item-description\" data-v-4b9a64b0><p data-v-4b9a64b0>Истоки<span data-v-4b9a64b0> мира</span></p></div> <div data-v-4b9a64b0><div class=\"events-calendar-item-text-mini\" data-v-4b9a64b0><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt data-v-4b9a64b0> <p data-v-4b9a64b0>Музей Янтаря, Калининград</p></div></div></div> <div class=\"events-calendar-item\" data-v-4b9a64b0><div class=\"events-calendar-item-text\" data-v-4b9a64b0><div class=\"events-calendar-item-text-date\" data-v-4b9a64b0><p data-v-4b9a64b0>10:00–12:00</p> <p data-v-4b9a64b0>выставка</p></div> <div class=\"events-calendar-item-text-author\" data-v-4b9a64b0><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt data-v-4b9a64b0> <p data-v-4b9a64b0>Музей Янтаря, Калининград</p></div></div> <div class=\"events-calendar-item-image\" data-v-4b9a64b0><img"+(_vm._ssrAttr("src",__webpack_require__(25)))+" alt data-v-4b9a64b0></div> <div class=\"events-calendar-item-description\" data-v-4b9a64b0><p data-v-4b9a64b0>Истоки<span data-v-4b9a64b0> мира</span></p></div> <div data-v-4b9a64b0><div class=\"events-calendar-item-text-mini\" data-v-4b9a64b0><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt data-v-4b9a64b0> <p data-v-4b9a64b0>Музей Янтаря, Калининград</p></div></div></div> <div class=\"events-calendar-item\" data-v-4b9a64b0><div class=\"events-calendar-item-text\" data-v-4b9a64b0><div class=\"events-calendar-item-text-date\" data-v-4b9a64b0><p data-v-4b9a64b0>10:00–12:00</p> <p data-v-4b9a64b0>выставка</p></div> <div class=\"events-calendar-item-text-author\" data-v-4b9a64b0><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt data-v-4b9a64b0> <p data-v-4b9a64b0>Музей Янтаря, Калининград</p></div></div> <div class=\"events-calendar-item-image\" data-v-4b9a64b0><img"+(_vm._ssrAttr("src",__webpack_require__(25)))+" alt data-v-4b9a64b0></div> <div class=\"events-calendar-item-description\" data-v-4b9a64b0><p data-v-4b9a64b0>Истоки<span data-v-4b9a64b0> мира</span></p></div> <div data-v-4b9a64b0><div class=\"events-calendar-item-text-mini\" data-v-4b9a64b0><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt data-v-4b9a64b0> <p data-v-4b9a64b0>Музей Янтаря, Калининград</p></div></div></div> <div class=\"events-calendar-item\" data-v-4b9a64b0><div class=\"events-calendar-item-text\" data-v-4b9a64b0><div class=\"events-calendar-item-text-date\" data-v-4b9a64b0><p data-v-4b9a64b0>10:00–12:00</p> <p data-v-4b9a64b0>выставка</p></div> <div class=\"events-calendar-item-text-author\" data-v-4b9a64b0><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt data-v-4b9a64b0> <p data-v-4b9a64b0>Музей Янтаря, Калининград</p></div></div> <div class=\"events-calendar-item-image\" data-v-4b9a64b0><img"+(_vm._ssrAttr("src",__webpack_require__(25)))+" alt data-v-4b9a64b0></div> <div class=\"events-calendar-item-description\" data-v-4b9a64b0><p data-v-4b9a64b0>Истоки<span data-v-4b9a64b0> мира</span></p></div> <div data-v-4b9a64b0><div class=\"events-calendar-item-text-mini\" data-v-4b9a64b0><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt data-v-4b9a64b0> <p data-v-4b9a64b0>Музей Янтаря, Калининград</p></div></div></div> <div class=\"events-calendar-item\" data-v-4b9a64b0><div class=\"events-calendar-item-text\" data-v-4b9a64b0><div class=\"events-calendar-item-text-date\" data-v-4b9a64b0><p data-v-4b9a64b0>10:00–12:00</p> <p data-v-4b9a64b0>выставка</p></div> <div class=\"events-calendar-item-text-author\" data-v-4b9a64b0><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt data-v-4b9a64b0> <p data-v-4b9a64b0>Музей Янтаря, Калининград</p></div></div> <div class=\"events-calendar-item-image\" data-v-4b9a64b0><img"+(_vm._ssrAttr("src",__webpack_require__(25)))+" alt data-v-4b9a64b0></div> <div class=\"events-calendar-item-description\" data-v-4b9a64b0><p data-v-4b9a64b0>Истоки<span data-v-4b9a64b0> мира</span></p></div> <div data-v-4b9a64b0><div class=\"events-calendar-item-text-mini\" data-v-4b9a64b0><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt data-v-4b9a64b0> <p data-v-4b9a64b0>Музей Янтаря, Калининград</p></div></div></div></div> <div class=\"events-pagination\" data-v-4b9a64b0><div class=\"events-pagination-page\" data-v-4b9a64b0><div class=\"flex\" data-v-4b9a64b0><span data-v-4b9a64b0>1</span> <span class=\"active\" data-v-4b9a64b0>2</span> <span data-v-4b9a64b0>3</span> <span data-v-4b9a64b0>4</span> <span data-v-4b9a64b0>...</span> <span data-v-4b9a64b0>10</span></div> <img"+(_vm._ssrAttr("src",__webpack_require__(65)))+" alt data-v-4b9a64b0></div> <div class=\"events-pagination-line\" data-v-4b9a64b0></div> <div data-v-4b9a64b0></div></div></div> "),_c('Footer')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/events.vue?vue&type=template&id=4b9a64b0&scoped=true&

// EXTERNAL MODULE: ./components/Footer.vue + 4 modules
var Footer = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/events.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var eventsvue_type_script_lang_js_ = ({
  name: 'IndexPage',
  components: {
    Footer: Footer["default"]
  },

  data() {
    return {
      date_today: new Date()
    };
  }

});
// CONCATENATED MODULE: ./pages/events.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_eventsvue_type_script_lang_js_ = (eventsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/events.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(73)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_eventsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4b9a64b0",
  "b34a57b8"
  
)

/* harmony default export */ var events = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(34).default,Footer: __webpack_require__(37).default})


/***/ })
]);;
//# sourceMappingURL=events.js.map