exports.ids = [8,1,2];
exports.modules = Array(25).concat([
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
/* 67 */,
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(76);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("6e40c826", content, true, context)
};

/***/ }),
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_news_vue_vue_type_style_index_0_id_04fd7d8a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_news_vue_vue_type_style_index_0_id_04fd7d8a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_news_vue_vue_type_style_index_0_id_04fd7d8a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_news_vue_vue_type_style_index_0_id_04fd7d8a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_news_vue_vue_type_style_index_0_id_04fd7d8a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(27);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(77);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.bg-yellow[data-v-04fd7d8a]{\n  background:#ffdd7c\n}\n.news[data-v-04fd7d8a]{\n  padding-top:160px\n}\n.news-header[data-v-04fd7d8a]{\n  display:flex;\n  flex-direction:column;\n  padding:20px\n}\n.news-header-title[data-v-04fd7d8a]{\n  font-style:normal;\n  font-weight:400;\n  font-size:50px;\n  line-height:50px;\n  text-transform:uppercase;\n  color:#211f1a;\n  margin-bottom:40px\n}\n@media(max-width:700px){\n.news-header-title[data-v-04fd7d8a]{\n    font-size:30px;\n    line-height:32px\n}\n}\n.news-header-filter[data-v-04fd7d8a]{\n  display:flex;\n  justify-content:flex-start\n}\n.news-header-filter-left[data-v-04fd7d8a]{\n  display:flex\n}\n.news-header-filter-left span[data-v-04fd7d8a]{\n  margin:5px\n}\n.news-header-filter-left .item[data-v-04fd7d8a]{\n  cursor:pointer;\n  display:flex;\n  align-items:center;\n  margin-right:20px;\n  position:relative;\n  font-style:normal;\n  font-weight:400;\n  font-size:15px;\n  line-height:20px;\n  text-align:right;\n  text-transform:uppercase;\n  color:#221f1a\n}\n@media(max-width:700px){\n.news-header-filter-left .item[data-v-04fd7d8a]{\n    margin-right:5px;\n    font-size:13px;\n    line-height:15px\n}\n}\n.news-header-filter-left .item img[data-v-04fd7d8a]{\n  margin:5px\n}\n.news-header-filter-left .item-nav[data-v-04fd7d8a]{\n  padding:20px;\n  position:absolute;\n  text-align:left;\n  cursor:pointer;\n  background:#fff;\n  border:1px solid #221f1a;\n  box-sizing:border-box;\n  top:35px\n}\n.news-header-filter-left .item-nav-text[data-v-04fd7d8a]{\n  margin-bottom:15px;\n  white-space:nowrap\n}\n.news-header-filter-left .item-nav-text[data-v-04fd7d8a]:hover{\n  opacity:.5\n}\n.news-header-filter-left .item-nav-filter p[data-v-04fd7d8a]{\n  white-space:nowrap\n}\n.news-header-filter-left .item-nav-filter-container[data-v-04fd7d8a]{\n  display:block;\n  position:relative;\n  padding-left:35px;\n  margin-bottom:12px;\n  cursor:pointer;\n  font-size:22px;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  -ms-user-select:none;\n  user-select:none\n}\n.news-header-filter-left .item-nav-filter-container input[data-v-04fd7d8a]{\n  position:absolute;\n  opacity:0;\n  cursor:pointer;\n  height:0;\n  width:0\n}\n.news-header-filter-left .item-nav-filter .checkmark[data-v-04fd7d8a]{\n  position:absolute;\n  top:-7px;\n  left:0;\n  height:20px;\n  width:20px;\n  background-color:#fff;\n  border:1px solid #000\n}\n.news-header-filter-left .item-nav-filter-container:hover input~.checkmark[data-v-04fd7d8a],.news-header-filter-left .item-nav-filter-container input:checked~.checkmark[data-v-04fd7d8a]{\n  background-color:#fff;\n  border:1px solid #000\n}\n.news-header-filter-left .item-nav-filter .checkmark[data-v-04fd7d8a]:after{\n  content:\"\";\n  position:absolute;\n  display:none\n}\n.news-header-filter-left .item-nav-filter-container input:checked~.checkmark[data-v-04fd7d8a]:after{\n  display:block\n}\n.news-header-filter-left .item-nav-filter-container .checkmark[data-v-04fd7d8a]:after{\n  left:7px;\n  top:2px;\n  width:6px;\n  height:10px;\n  border:solid #000;\n  border-width:0 1px 1px 0;\n  transform:rotate(45deg)\n}\n.news-header-filter-left .item-nav-filter-title[data-v-04fd7d8a]{\n  display:flex;\n  align-items:center;\n  margin-bottom:15px\n}\n.news-header-filter-left .item-nav-filter-content[data-v-04fd7d8a]{\n  margin-left:20px\n}\n.news-header-filter-left .item-nav-filter-content-item[data-v-04fd7d8a]{\n  margin-bottom:15px\n}\n.news-header-filter-right[data-v-04fd7d8a]{\n  display:flex\n}\n.news-header-filter-right span[data-v-04fd7d8a]{\n  margin:5px\n}\n.news-header-filter-right .active[data-v-04fd7d8a]{\n  opacity:.7\n}\n.news-header-filter-right .item[data-v-04fd7d8a]{\n  display:flex;\n  align-items:center;\n  margin-right:20px;\n  font-style:normal;\n  font-weight:400;\n  font-size:15px;\n  line-height:20px;\n  text-transform:uppercase;\n  color:#221f1a;\n  cursor:pointer\n}\n.news-header-filter-right .item img[data-v-04fd7d8a]{\n  margin-right:5px\n}\n.news-content[data-v-04fd7d8a]{\n  display:flex;\n  flex-wrap:wrap\n}\n@media(max-width:680px){\n.news-content-item[data-v-04fd7d8a]:first-child,.news-content-item[data-v-04fd7d8a]:nth-child(2),.news-content-item[data-v-04fd7d8a]:nth-child(3),.news-content-item[data-v-04fd7d8a]:nth-child(4),.news-content-item[data-v-04fd7d8a]:nth-child(5),.news-content-item[data-v-04fd7d8a]:nth-child(6),.news-content-item[data-v-04fd7d8a]:nth-child(7),.news-content-item[data-v-04fd7d8a]:nth-child(8),.news-content-item[data-v-04fd7d8a]:nth-child(9),.news-content-item[data-v-04fd7d8a]:nth-child(10),.news-content-item[data-v-04fd7d8a]:nth-child(11),.news-content-item[data-v-04fd7d8a]:nth-child(12){\n    width:92%!important;\n    border-right:0!important;\n    margin-left:20px;\n    padding-right:20px\n}\n}\n.news-content-item[data-v-04fd7d8a]:first-child,.news-content-item[data-v-04fd7d8a]:nth-child(3),.news-content-item[data-v-04fd7d8a]:nth-child(4),.news-content-item[data-v-04fd7d8a]:nth-child(6),.news-content-item[data-v-04fd7d8a]:nth-child(8),.news-content-item[data-v-04fd7d8a]:nth-child(9),.news-content-item[data-v-04fd7d8a]:nth-child(11){\n  border-right:1px solid;\n  position:relative\n}\n.news-content-item[data-v-04fd7d8a]:first-child:after,.news-content-item[data-v-04fd7d8a]:nth-child(3):after,.news-content-item[data-v-04fd7d8a]:nth-child(4):after,.news-content-item[data-v-04fd7d8a]:nth-child(6):after,.news-content-item[data-v-04fd7d8a]:nth-child(8):after,.news-content-item[data-v-04fd7d8a]:nth-child(9):after,.news-content-item[data-v-04fd7d8a]:nth-child(11):after{\n  display:block;\n  content:\"\";\n  top:0;\n  right:-5px;\n  width:5px;\n  height:20px;\n  position:absolute;\n  background:#fff\n}\n.news-content-item[data-v-04fd7d8a]:first-child:before,.news-content-item[data-v-04fd7d8a]:nth-child(3):before,.news-content-item[data-v-04fd7d8a]:nth-child(4):before,.news-content-item[data-v-04fd7d8a]:nth-child(6):before,.news-content-item[data-v-04fd7d8a]:nth-child(8):before,.news-content-item[data-v-04fd7d8a]:nth-child(9):before,.news-content-item[data-v-04fd7d8a]:nth-child(11):before{\n  display:block;\n  content:\"\";\n  bottom:0;\n  right:-5px;\n  width:5px;\n  height:20px;\n  position:absolute;\n  background:#fff\n}\n.news-content-item[data-v-04fd7d8a]:first-child{\n  margin-left:20px;\n  padding-top:20px;\n  padding-right:20px;\n  width:64.6%\n}\n@media(max-width:900px){\n.news-content-item[data-v-04fd7d8a]:first-child{\n    width:96%;\n    border-right:0\n}\n}\n.news-content-item[data-v-04fd7d8a]:nth-child(2){\n  width:32.4%;\n  padding-top:20px;\n  padding-left:20px\n}\n@media(max-width:900px){\n.news-content-item[data-v-04fd7d8a]:nth-child(2){\n    width:48%;\n    margin-left:20px;\n    padding-right:20px;\n    border-right:1px solid;\n    position:relative\n}\n.news-content-item[data-v-04fd7d8a]:nth-child(2):after{\n    top:0\n}\n.news-content-item[data-v-04fd7d8a]:nth-child(2):after,.news-content-item[data-v-04fd7d8a]:nth-child(2):before{\n    display:block;\n    content:\"\";\n    right:-5px;\n    width:5px;\n    height:20px;\n    position:absolute;\n    background:#fff\n}\n.news-content-item[data-v-04fd7d8a]:nth-child(2):before{\n    bottom:0\n}\n}\n.news-content-item[data-v-04fd7d8a]:nth-child(3){\n  margin-left:20px;\n  padding-top:20px;\n  padding-right:20px;\n  width:32.3%\n}\n@media(max-width:900px){\n.news-content-item[data-v-04fd7d8a]:nth-child(3){\n    width:48%;\n    margin-left:0;\n    padding-left:20px;\n    border-right:0\n}\n}\n.news-content-item[data-v-04fd7d8a]:nth-child(4){\n  padding-top:20px;\n  padding-left:20px;\n  padding-right:20px;\n  width:32.3%\n}\n@media(max-width:900px){\n.news-content-item[data-v-04fd7d8a]:nth-child(4){\n    width:48%;\n    margin-left:20px\n}\n}\n.news-content-item[data-v-04fd7d8a]:nth-child(5){\n  padding-top:20px;\n  padding-left:20px;\n  width:32.6%\n}\n@media(max-width:900px){\n.news-content-item[data-v-04fd7d8a]:nth-child(5){\n    width:48%\n}\n}\n.news-content-item[data-v-04fd7d8a]:nth-child(6){\n  margin-left:20px;\n  padding-top:20px;\n  padding-right:20px;\n  width:32.3%\n}\n@media(max-width:900px){\n.news-content-item[data-v-04fd7d8a]:nth-child(6){\n    width:48%\n}\n}\n.news-content-item[data-v-04fd7d8a]:nth-child(7){\n  width:64.6%;\n  padding:20px\n}\n.news-content-item:nth-child(7) .item-block[data-v-04fd7d8a]{\n  height:476px;\n  display:flex;\n  flex-direction:column;\n  justify-content:space-around\n}\n@media(max-width:900px){\n.news-content-item[data-v-04fd7d8a]:nth-child(7){\n    width:48%\n}\n}\n@media(max-width:680px){\n.news-content-item[data-v-04fd7d8a]:nth-child(7){\n    padding-left:0;\n    padding-right:0\n}\n}\n.news-content-item[data-v-04fd7d8a]:nth-child(8){\n  margin-left:20px;\n  padding-top:20px;\n  padding-right:20px;\n  width:32.3%\n}\n@media(max-width:900px){\n.news-content-item[data-v-04fd7d8a]:nth-child(8){\n    width:48%\n}\n}\n.news-content-item[data-v-04fd7d8a]:nth-child(9){\n  padding-top:20px;\n  padding-left:20px;\n  padding-right:20px;\n  width:32.3%\n}\n@media(max-width:900px){\n.news-content-item[data-v-04fd7d8a]:nth-child(9){\n    width:48%;\n    border-right:0\n}\n}\n.news-content-item[data-v-04fd7d8a]:nth-child(10){\n  padding-top:20px;\n  padding-left:20px;\n  width:32.6%\n}\n@media(max-width:900px){\n.news-content-item[data-v-04fd7d8a]:nth-child(10){\n    width:96%\n}\n}\n.news-content-item[data-v-04fd7d8a]:nth-child(11){\n  margin-left:20px;\n  padding-top:20px;\n  padding-right:20px;\n  width:64.6%\n}\n@media(max-width:900px){\n.news-content-item[data-v-04fd7d8a]:nth-child(11){\n    width:48%\n}\n}\n.news-content-item[data-v-04fd7d8a]:nth-child(12){\n  width:32.4%;\n  padding-top:20px;\n  padding-left:20px\n}\n@media(max-width:900px){\n.news-content-item[data-v-04fd7d8a]:nth-child(12){\n    width:48%\n}\n}\n.news-content-item[data-v-04fd7d8a]{\n  display:flex;\n  flex-direction:column;\n  justify-content:space-between;\n  height:516px;\n  border-top:1px solid\n}\n.news-content-item-input[data-v-04fd7d8a]{\n  display:flex;\n  justify-content:center\n}\n.news-content-item-input-block[data-v-04fd7d8a]{\n  display:flex;\n  border:1px solid;\n  align-items:center;\n  justify-content:space-between;\n  padding-right:20px;\n  padding-left:20px;\n  width:70%\n}\n@media(max-width:900px){\n.news-content-item-input-block[data-v-04fd7d8a]{\n    width:80%\n}\n}\n@media(max-width:680px){\n.news-content-item-input-block[data-v-04fd7d8a]{\n    width:90%\n}\n}\n.news-content-item-input-block input[data-v-04fd7d8a]{\n  height:60px;\n  background:#ffdd7c;\n  color:#000;\n  font-weight:600;\n  width:80%;\n  outline:none\n}\n.news-content-item-input-block button[data-v-04fd7d8a]{\n  font-style:normal;\n  font-weight:400;\n  font-size:15px;\n  line-height:20px;\n  text-align:right;\n  text-transform:uppercase;\n  color:#221f1a;\n  white-space:nowrap\n}\n@media(max-width:900px){\n.news-content-item-input-block button[data-v-04fd7d8a]{\n    visibility:hidden;\n    position:relative\n}\n.news-content-item-input-block button[data-v-04fd7d8a]:after{\n    content:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    visibility:visible;\n    display:block;\n    position:absolute;\n    right:0;\n    top:0\n}\n}\n.news-content-item-email[data-v-04fd7d8a]{\n  height:516px\n}\n.news-content-item-text[data-v-04fd7d8a]{\n  display:flex;\n  justify-content:space-between;\n  font-style:normal;\n  font-weight:400;\n  font-size:15px;\n  line-height:20px;\n  text-transform:uppercase;\n  color:#221f1a\n}\n.news-content-item-description[data-v-04fd7d8a],.news-content-item-img[data-v-04fd7d8a],.news-content-item-title[data-v-04fd7d8a]{\n  display:flex;\n  justify-content:center\n}\n.news-content-item-title[data-v-04fd7d8a]{\n  font-size:30px;\n  line-height:32px;\n  text-transform:uppercase\n}\n.news-content-item-description[data-v-04fd7d8a],.news-content-item-title[data-v-04fd7d8a]{\n  font-style:normal;\n  font-weight:400;\n  text-align:center;\n  color:#221f1a\n}\n.news-content-item-description[data-v-04fd7d8a]{\n  margin-bottom:70px;\n  font-size:15px;\n  line-height:20px\n}\n.news-pagination[data-v-04fd7d8a]{\n  border-top:1px solid;\n  margin-right:20px;\n  margin-left:20px;\n  height:250px;\n  padding:20px;\n  display:flex;\n  flex-direction:column;\n  align-content:center;\n  justify-content:space-between\n}\n.news-pagination-page[data-v-04fd7d8a]{\n  display:flex;\n  justify-content:flex-start\n}\n.news-pagination-page .active[data-v-04fd7d8a]{\n  opacity:.4\n}\n.news-pagination-page span[data-v-04fd7d8a]{\n  margin:12px;\n  font-style:normal;\n  font-weight:400;\n  font-size:18px;\n  line-height:26px;\n  text-align:right;\n  color:#221f1a\n}\n.news-pagination-page img[data-v-04fd7d8a]{\n  margin-left:12px\n}\n.news-pagination-line[data-v-04fd7d8a]{\n  position:relative\n}\n.news-pagination-line[data-v-04fd7d8a]:after{\n  content:\"\";\n  width:100%;\n  border-bottom:1px solid #000;\n  position:absolute;\n  left:0;\n  top:50%;\n  z-index:1;\n  transform:rotate(-7deg)\n}\n@media(max-width:800px){\n.news-pagination-line[data-v-04fd7d8a]:after{\n    transform:rotate(-15deg)\n}\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAxNiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEgMjFMMTQuMzMzMyAxMUwxIDAuOTk5OTk5IiBzdHJva2U9IiMyMjFGMUEiLz4KPC9zdmc+Cg=="

/***/ }),
/* 78 */,
/* 79 */,
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/news.vue?vue&type=template&id=04fd7d8a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Header',{ref:"header"}),_vm._ssrNode(" <div class=\"news\" data-v-04fd7d8a><div class=\"news-header\" data-v-04fd7d8a><div class=\"news-header-title\" data-v-04fd7d8a><p data-v-04fd7d8a>Новости</p></div> <div class=\"news-header-filter\" data-v-04fd7d8a><div class=\"news-header-filter-left \" data-v-04fd7d8a><div class=\"item\" data-v-04fd7d8a><span data-v-04fd7d8a>(</span> <p data-v-04fd7d8a>все рубрики</p> <img"+(_vm._ssrAttr("src",__webpack_require__(35)))+" alt data-v-04fd7d8a> <span data-v-04fd7d8a>)</span> <div class=\"item-nav hidden\" data-v-04fd7d8a><p class=\"item-nav-text\" data-v-04fd7d8a>Все события</p> <p class=\"item-nav-text\" data-v-04fd7d8a>Выставки</p> <p class=\"item-nav-text\" data-v-04fd7d8a>Экскурсии</p> <p class=\"item-nav-text\" data-v-04fd7d8a>Лекции</p> <p class=\"item-nav-text\" data-v-04fd7d8a>Творческие мастерские</p> <p class=\"item-nav-text\" data-v-04fd7d8a>Концерты</p> <p class=\"item-nav-text\" data-v-04fd7d8a>Кино</p> <p class=\"item-nav-text\" data-v-04fd7d8a>ДискусCии</p> <p class=\"item-nav-text\" data-v-04fd7d8a>Конференции</p></div></div> <div class=\"item\" data-v-04fd7d8a><span data-v-04fd7d8a>(</span> <p data-v-04fd7d8a>дата</p> <img"+(_vm._ssrAttr("src",__webpack_require__(35)))+" alt data-v-04fd7d8a> <span data-v-04fd7d8a>)</span> <div class=\"item-nav hidden\" data-v-04fd7d8a><p class=\"item-nav-text\" data-v-04fd7d8a>Все события</p> <p class=\"item-nav-text\" data-v-04fd7d8a>Выставки</p> <p class=\"item-nav-text\" data-v-04fd7d8a>Экскурсии</p> <p class=\"item-nav-text\" data-v-04fd7d8a>Лекции</p> <p class=\"item-nav-text\" data-v-04fd7d8a>Творческие мастерские</p> <p class=\"item-nav-text\" data-v-04fd7d8a>Концерты</p> <p class=\"item-nav-text\" data-v-04fd7d8a>Кино</p> <p class=\"item-nav-text\" data-v-04fd7d8a>ДискусCии</p> <p class=\"item-nav-text\" data-v-04fd7d8a>Конференции</p></div></div></div></div></div> <div class=\"news-content\" data-v-04fd7d8a><div class=\"news-content-item\" data-v-04fd7d8a><div class=\"news-content-item-text\" data-v-04fd7d8a><div class=\"news-content-item-text-date\" data-v-04fd7d8a>20 окт</div> <div class=\"news-content-item-text-author\" data-v-04fd7d8a>ход строительства</div></div> <div class=\"news-content-item-img\" data-v-04fd7d8a><img"+(_vm._ssrAttr("src",__webpack_require__(25)))+" alt data-v-04fd7d8a></div> <div class=\"news-content-item-title\" data-v-04fd7d8a><p data-v-04fd7d8a>ЗАЛОЖЕН ФУНДАМЕНТ ЗДАНИЯ МУЗЕЯ</p></div> <div class=\"news-content-item-description\" data-v-04fd7d8a><p data-v-04fd7d8a>Лекция посвящена эволюции понимания задач цвета в живописи и многообразию подходов к колориту.</p></div></div> <div class=\"news-content-item\" data-v-04fd7d8a><div class=\"news-content-item-text\" data-v-04fd7d8a><div class=\"news-content-item-text-date\" data-v-04fd7d8a>20 окт</div> <div class=\"news-content-item-text-author\" data-v-04fd7d8a>ход строительства</div></div> <div class=\"news-content-item-img\" data-v-04fd7d8a><img"+(_vm._ssrAttr("src",__webpack_require__(25)))+" alt data-v-04fd7d8a></div> <div class=\"news-content-item-title\" data-v-04fd7d8a><p data-v-04fd7d8a>ЗАЛОЖЕН ФУНДАМЕНТ ЗДАНИЯ МУЗЕЯ</p></div> <div class=\"news-content-item-description\" data-v-04fd7d8a><p data-v-04fd7d8a>Лекция посвящена эволюции понимания задач цвета в живописи и многообразию подходов к колориту.</p></div></div> <div class=\"news-content-item\" data-v-04fd7d8a><div class=\"news-content-item-text\" data-v-04fd7d8a><div class=\"news-content-item-text-date\" data-v-04fd7d8a>20 окт</div> <div class=\"news-content-item-text-author\" data-v-04fd7d8a>ход строительства</div></div> <div class=\"news-content-item-img\" data-v-04fd7d8a><img"+(_vm._ssrAttr("src",__webpack_require__(25)))+" alt data-v-04fd7d8a></div> <div class=\"news-content-item-title\" data-v-04fd7d8a><p data-v-04fd7d8a>ЗАЛОЖЕН ФУНДАМЕНТ ЗДАНИЯ МУЗЕЯ</p></div> <div class=\"news-content-item-description\" data-v-04fd7d8a><p data-v-04fd7d8a>Лекция посвящена эволюции понимания задач цвета в живописи и многообразию подходов к колориту.</p></div></div> <div class=\"news-content-item\" data-v-04fd7d8a><div class=\"news-content-item-text\" data-v-04fd7d8a><div class=\"news-content-item-text-date\" data-v-04fd7d8a>20 окт</div> <div class=\"news-content-item-text-author\" data-v-04fd7d8a>ход строительства</div></div> <div class=\"news-content-item-img\" data-v-04fd7d8a><img"+(_vm._ssrAttr("src",__webpack_require__(25)))+" alt data-v-04fd7d8a></div> <div class=\"news-content-item-title\" data-v-04fd7d8a><p data-v-04fd7d8a>ЗАЛОЖЕН ФУНДАМЕНТ ЗДАНИЯ МУЗЕЯ</p></div> <div class=\"news-content-item-description\" data-v-04fd7d8a><p data-v-04fd7d8a>Лекция посвящена эволюции понимания задач цвета в живописи и многообразию подходов к колориту.</p></div></div> <div class=\"news-content-item\" data-v-04fd7d8a><div class=\"news-content-item-text\" data-v-04fd7d8a><div class=\"news-content-item-text-date\" data-v-04fd7d8a>20 окт</div> <div class=\"news-content-item-text-author\" data-v-04fd7d8a>ход строительства</div></div> <div class=\"news-content-item-img\" data-v-04fd7d8a><img"+(_vm._ssrAttr("src",__webpack_require__(25)))+" alt data-v-04fd7d8a></div> <div class=\"news-content-item-title\" data-v-04fd7d8a><p data-v-04fd7d8a>ЗАЛОЖЕН ФУНДАМЕНТ ЗДАНИЯ МУЗЕЯ</p></div> <div class=\"news-content-item-description\" data-v-04fd7d8a><p data-v-04fd7d8a>Лекция посвящена эволюции понимания задач цвета в живописи и многообразию подходов к колориту.</p></div></div> <div class=\"news-content-item\" data-v-04fd7d8a><div class=\"news-content-item-text\" data-v-04fd7d8a><div class=\"news-content-item-text-date\" data-v-04fd7d8a>20 окт</div> <div class=\"news-content-item-text-author\" data-v-04fd7d8a>ход строительства</div></div> <div class=\"news-content-item-img\" data-v-04fd7d8a><img"+(_vm._ssrAttr("src",__webpack_require__(25)))+" alt data-v-04fd7d8a></div> <div class=\"news-content-item-title\" data-v-04fd7d8a><p data-v-04fd7d8a>ЗАЛОЖЕН ФУНДАМЕНТ ЗДАНИЯ МУЗЕЯ</p></div> <div class=\"news-content-item-description\" data-v-04fd7d8a><p data-v-04fd7d8a>Лекция посвящена эволюции понимания задач цвета в живописи и многообразию подходов к колориту.</p></div></div> <div class=\"news-content-item\" data-v-04fd7d8a><div class=\"bg-yellow item-block\" data-v-04fd7d8a><div class=\"news-content-item-title\" data-v-04fd7d8a><p data-v-04fd7d8a>Будь в курсе</p></div> <div class=\"news-content-item-input\" data-v-04fd7d8a><div class=\"news-content-item-input-block\" data-v-04fd7d8a><input type=\"text\" value=\"ваш email\" placeholder=\"ваш email\" data-v-04fd7d8a> <button class=\"text\" data-v-04fd7d8a>( подписаться )</button></div></div> <div class=\"news-content-item-description\" data-v-04fd7d8a><p data-v-04fd7d8a>Подпишись на рассылку новостей Третьяковской галереи Запад и будь в курсе новых публикаций</p></div></div></div> <div class=\"news-content-item\" data-v-04fd7d8a><div class=\"news-content-item-text\" data-v-04fd7d8a><div class=\"news-content-item-text-date\" data-v-04fd7d8a>20 окт</div> <div class=\"news-content-item-text-author\" data-v-04fd7d8a>ход строительства</div></div> <div class=\"news-content-item-img\" data-v-04fd7d8a><img"+(_vm._ssrAttr("src",__webpack_require__(25)))+" alt data-v-04fd7d8a></div> <div class=\"news-content-item-title\" data-v-04fd7d8a><p data-v-04fd7d8a>ЗАЛОЖЕН ФУНДАМЕНТ ЗДАНИЯ МУЗЕЯ</p></div> <div class=\"news-content-item-description\" data-v-04fd7d8a><p data-v-04fd7d8a>Лекция посвящена эволюции понимания задач цвета в живописи и многообразию подходов к колориту.</p></div></div> <div class=\"news-content-item\" data-v-04fd7d8a><div class=\"news-content-item-text\" data-v-04fd7d8a><div class=\"news-content-item-text-date\" data-v-04fd7d8a>20 окт</div> <div class=\"news-content-item-text-author\" data-v-04fd7d8a>ход строительства</div></div> <div class=\"news-content-item-img\" data-v-04fd7d8a><img"+(_vm._ssrAttr("src",__webpack_require__(25)))+" alt data-v-04fd7d8a></div> <div class=\"news-content-item-title\" data-v-04fd7d8a><p data-v-04fd7d8a>ЗАЛОЖЕН ФУНДАМЕНТ ЗДАНИЯ МУЗЕЯ</p></div> <div class=\"news-content-item-description\" data-v-04fd7d8a><p data-v-04fd7d8a>Лекция посвящена эволюции понимания задач цвета в живописи и многообразию подходов к колориту.</p></div></div> <div class=\"news-content-item\" data-v-04fd7d8a><div class=\"news-content-item-text\" data-v-04fd7d8a><div class=\"news-content-item-text-date\" data-v-04fd7d8a>20 окт</div> <div class=\"news-content-item-text-author\" data-v-04fd7d8a>ход строительства</div></div> <div class=\"news-content-item-img\" data-v-04fd7d8a><img"+(_vm._ssrAttr("src",__webpack_require__(25)))+" alt data-v-04fd7d8a></div> <div class=\"news-content-item-title\" data-v-04fd7d8a><p data-v-04fd7d8a>ЗАЛОЖЕН ФУНДАМЕНТ ЗДАНИЯ МУЗЕЯ</p></div> <div class=\"news-content-item-description\" data-v-04fd7d8a><p data-v-04fd7d8a>Лекция посвящена эволюции понимания задач цвета в живописи и многообразию подходов к колориту.</p></div></div> <div class=\"news-content-item\" data-v-04fd7d8a><div class=\"news-content-item-text\" data-v-04fd7d8a><div class=\"news-content-item-text-date\" data-v-04fd7d8a>20 окт</div> <div class=\"news-content-item-text-author\" data-v-04fd7d8a>ход строительства</div></div> <div class=\"news-content-item-img\" data-v-04fd7d8a><img"+(_vm._ssrAttr("src",__webpack_require__(25)))+" alt data-v-04fd7d8a></div> <div class=\"news-content-item-title\" data-v-04fd7d8a><p data-v-04fd7d8a>ЗАЛОЖЕН ФУНДАМЕНТ ЗДАНИЯ МУЗЕЯ</p></div> <div class=\"news-content-item-description\" data-v-04fd7d8a><p data-v-04fd7d8a>Лекция посвящена эволюции понимания задач цвета в живописи и многообразию подходов к колориту.</p></div></div> <div class=\"news-content-item\" data-v-04fd7d8a><div class=\"news-content-item-text\" data-v-04fd7d8a><div class=\"news-content-item-text-date\" data-v-04fd7d8a>20 окт</div> <div class=\"news-content-item-text-author\" data-v-04fd7d8a>ход строительства</div></div> <div class=\"news-content-item-img\" data-v-04fd7d8a><img"+(_vm._ssrAttr("src",__webpack_require__(25)))+" alt data-v-04fd7d8a></div> <div class=\"news-content-item-title\" data-v-04fd7d8a><p data-v-04fd7d8a>ЗАЛОЖЕН ФУНДАМЕНТ ЗДАНИЯ МУЗЕЯ</p></div> <div class=\"news-content-item-description\" data-v-04fd7d8a><p data-v-04fd7d8a>Лекция посвящена эволюции понимания задач цвета в живописи и многообразию подходов к колориту.</p></div></div></div> <div class=\"news-pagination\" data-v-04fd7d8a><div class=\"news-pagination-page\" data-v-04fd7d8a><div class=\"flex\" data-v-04fd7d8a><span data-v-04fd7d8a>1</span> <span class=\"active\" data-v-04fd7d8a>2</span> <span data-v-04fd7d8a>3</span> <span data-v-04fd7d8a>4</span> <span data-v-04fd7d8a>...</span> <span data-v-04fd7d8a>10</span></div> <img"+(_vm._ssrAttr("src",__webpack_require__(65)))+" alt data-v-04fd7d8a></div> <div class=\"news-pagination-line\" data-v-04fd7d8a></div> <div data-v-04fd7d8a></div></div></div> "),_c('Footer')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/news.vue?vue&type=template&id=04fd7d8a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/news.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var newsvue_type_script_lang_js_ = ({
  name: "news"
});
// CONCATENATED MODULE: ./pages/news.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_newsvue_type_script_lang_js_ = (newsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/news.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(75)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_newsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "04fd7d8a",
  "0b949cc4"
  
)

/* harmony default export */ var news = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(34).default,Footer: __webpack_require__(37).default})


/***/ })
]);;
//# sourceMappingURL=news.js.map