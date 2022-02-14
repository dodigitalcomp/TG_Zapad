exports.ids = [7,1,2,3,4];
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
/* 35 */,
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(54);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("6b7d7bba", content, true, context)
};

/***/ }),
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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pic.98fdc02.jpg";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/image24.b155ec1.jpg";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/image-museum.bd1b9e0.jpg";

/***/ }),
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
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Swiper.vue?vue&type=template&id=52b70166&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"block\" data-v-52b70166><img"+(_vm._ssrAttr("src",__webpack_require__(38)))+" alt class=\"item item1\" data-v-52b70166> <img"+(_vm._ssrAttr("src",__webpack_require__(39)))+" alt class=\"item item2\" data-v-52b70166> <img"+(_vm._ssrAttr("src",__webpack_require__(40)))+" alt class=\"item item3\" data-v-52b70166></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Swiper.vue?vue&type=template&id=52b70166&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Swiper.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Swipervue_type_script_lang_js_ = ({
  name: "Swiper"
});
// CONCATENATED MODULE: ./components/Swiper.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Swipervue_type_script_lang_js_ = (Swipervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Swiper.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(53)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Swipervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "52b70166",
  "8d955a8a"
  
)

/* harmony default export */ var Swiper = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(62);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("38783b3d", content, true, context)
};

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Swiper_vue_vue_type_style_index_0_id_52b70166_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Swiper_vue_vue_type_style_index_0_id_52b70166_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Swiper_vue_vue_type_style_index_0_id_52b70166_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Swiper_vue_vue_type_style_index_0_id_52b70166_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Swiper_vue_vue_type_style_index_0_id_52b70166_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.block[data-v-52b70166]{\n  position:relative;\n  width:501px;\n  height:354px\n}\n@media(max-width:1000px){\n.block[data-v-52b70166]{\n    width:268px;\n    height:190px\n}\n}\n@media(max-width:650px){\n.block[data-v-52b70166]{\n    width:339px;\n    height:239px\n}\n}\n.item[data-v-52b70166]{\n  width:501px;\n  height:354px;\n  position:absolute\n}\n@media(max-width:1000px){\n.item[data-v-52b70166]{\n    width:268px;\n    height:190px\n}\n}\n.item3[data-v-52b70166]{\n  top:10px;\n  left:10px\n}\n@media(max-width:650px){\n.item3[data-v-52b70166]{\n    width:329px;\n    height:229px\n}\n}\n.item2[data-v-52b70166]{\n  top:25px;\n  left:25px;\n  opacity:.5\n}\n@media(max-width:650px){\n.item2[data-v-52b70166]{\n    width:309px;\n    height:229px\n}\n}\n.item1[data-v-52b70166]{\n  top:40px;\n  left:40px;\n  opacity:.5\n}\n@media(max-width:650px){\n.item1[data-v-52b70166]{\n    width:279px;\n    height:229px\n}\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNiAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xNiA2QzE2IDcuMzE1NjEgMTUuNjc1NSA4LjYxMDkxIDE1LjA1NTQgOS43NzExN0MxNC40MzUyIDEwLjkzMTQgMTMuNTM4NSAxMS45MjA4IDEyLjQ0NDYgMTIuNjUxOEMxMS4zNTA3IDEzLjM4MjcgMTAuMDkzNCAxMy44MzI1IDguNzg0MTQgMTMuOTYxNUM3LjQ3NDg2IDE0LjA5MDQgNi4xNTQgMTMuODk0NSA0LjkzODUzIDEzLjM5MUMzLjcyMzA3IDEyLjg4NzYgMi42NTA1MyAxMi4wOTIxIDEuODE1OTIgMTEuMDc1MUMwLjk4MTMwNCAxMC4wNTgyIDAuNDEwMzggOC44NTEwNSAwLjE1MzcxOCA3LjU2MDcyQy0wLjEwMjk0NSA2LjI3MDM5IC0wLjAzNzQyMzUgNC45MzY2OCAwLjM0NDQ3NyAzLjY3NzcyQzAuNzI2Mzc4IDIuNDE4NzYgMS40MTI4NyAxLjI3MzQyIDIuMzQzMTUgMC4zNDMxNDZMOCA2SDE2WiIgZmlsbD0iIzIyMUYxQSIvPg0KPC9zdmc+DQo="

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/image31.f74f7b4.jpg";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Pic-fit.2bb2577.jpg";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/image30.2468a11.jpg";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Pic-fit1.21936ce.jpg";

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle976.d4e8f90.jpg";

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_3e7ac37f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_3e7ac37f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_3e7ac37f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_3e7ac37f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_3e7ac37f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(27);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(63);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.all-events[data-v-3e7ac37f]{\n  display:none\n}\n@media(max-width:650px){\n.all-events[data-v-3e7ac37f]{\n    display:flex;\n    justify-content:center;\n    margin-bottom:20px\n}\n.all-events p[data-v-3e7ac37f]{\n    font-style:normal;\n    font-weight:400;\n    font-size:13px;\n    line-height:20px;\n    display:flex;\n    align-items:center;\n    text-align:center;\n    text-transform:uppercase;\n    color:#221f1a\n}\n}\n.pt-30[data-v-3e7ac37f]{\n  padding-top:110px\n}\n@media(max-width:800px){\n.min-block[data-v-3e7ac37f]{\n    display:none!important\n}\n}\n.image-bock-img[data-v-3e7ac37f]{\n  max-width:70%;\n  margin-bottom:40px\n}\n.image-bock-title[data-v-3e7ac37f]{\n  margin-top:30px\n}\n.image-bock-title .title[data-v-3e7ac37f]{\n  font-style:normal;\n  font-weight:400;\n  font-size:50px;\n  line-height:50px;\n  text-align:center;\n  text-transform:uppercase;\n  color:#221f1a\n}\n@media(max-width:1000px){\n.image-bock-title .title[data-v-3e7ac37f]{\n    font-size:40px;\n    line-height:40px\n}\n}\n@media(max-width:500px){\n.image-bock-title .title[data-v-3e7ac37f]{\n    font-size:30px;\n    line-height:32px\n}\n}\n.image-bock-title .title-p[data-v-3e7ac37f]{\n  font-style:italic;\n  font-weight:400;\n  font-size:50px;\n  line-height:50px;\n  text-align:center;\n  text-transform:uppercase;\n  color:#221f1a\n}\n@media(max-width:1000px){\n.image-bock-title .title-p[data-v-3e7ac37f]{\n    font-size:40px;\n    line-height:40px\n}\n}\n@media(max-width:500px){\n.image-bock-title .title-p[data-v-3e7ac37f]{\n    font-size:30px;\n    line-height:32px\n}\n}\n.museum-block[data-v-3e7ac37f]{\n  padding:20px;\n  margin-top:120px;\n  display:flex;\n  flex-direction:column;\n  justify-content:center\n}\n.museum-block-title[data-v-3e7ac37f]{\n  width:100%;\n  border-bottom:1px solid;\n  padding-bottom:20px\n}\n.museum-block-title p[data-v-3e7ac37f]{\n  text-align:left;\n  font-style:normal;\n  font-weight:400;\n  font-size:40px;\n  line-height:40px;\n  text-transform:uppercase;\n  color:#221f1a\n}\n@media(max-width:1000px){\n.museum-block-title p[data-v-3e7ac37f]{\n    font-size:30px;\n    line-height:30px\n}\n}\n@media(max-width:500px){\n.museum-block-title p[data-v-3e7ac37f]{\n    font-size:25px;\n    line-height:25px\n}\n}\n.museum-block-content[data-v-3e7ac37f]{\n  display:flex;\n  justify-content:space-between;\n  align-items:center;\n  margin-top:20px\n}\n@media(max-width:650px){\n.museum-block-content[data-v-3e7ac37f]{\n    flex-direction:column\n}\n}\n.museum-block-content-text[data-v-3e7ac37f]{\n  height:560px;\n  border-right:1px solid;\n  display:flex;\n  flex-direction:column;\n  justify-content:space-between;\n  flex:1\n}\n@media(max-width:650px){\n.museum-block-content-text[data-v-3e7ac37f]{\n    border:none;\n    border-bottom:1px solid;\n    padding-bottom:20px;\n    margin-bottom:20px\n}\n}\n.museum-block-content-text .description p[data-v-3e7ac37f]{\n  max-width:471px;\n  font-style:normal;\n  font-weight:400;\n  font-size:28px;\n  line-height:35px;\n  color:#221f1a;\n  margin-bottom:20px\n}\n@media(max-width:1000px){\n.museum-block-content-text .description p[data-v-3e7ac37f]{\n    font-size:18px;\n    line-height:26px\n}\n}\n.museum-block-content-text .more[data-v-3e7ac37f]{\n  display:flex;\n  justify-content:flex-end;\n  margin-right:20px\n}\n.museum-block-content-text .more p[data-v-3e7ac37f]{\n  font-style:normal;\n  font-weight:400;\n  font-size:15px;\n  line-height:20px;\n  text-align:right;\n  text-transform:uppercase;\n  color:#221f1a\n}\n@media(max-width:500px){\n.museum-block-content-text .more[data-v-3e7ac37f]{\n    justify-content:flex-start\n}\n}\n.museum-block-content-img[data-v-3e7ac37f]{\n  height:560px;\n  display:flex;\n  flex-direction:column;\n  justify-content:space-between;\n  align-items:center;\n  flex:1\n}\n.museum-block-content-img .page[data-v-3e7ac37f]{\n  font-size:15px;\n  line-height:20px;\n  text-align:right;\n  text-transform:uppercase;\n  color:#bdbdbd;\n  margin:5px;\n  cursor:pointer\n}\n@media(max-width:500px){\n.museum-block-content-img .pagination[data-v-3e7ac37f]{\n    margin-top:60px;\n    margin-left:134px\n}\n.museum-block-content-img .icon[data-v-3e7ac37f]{\n    margin-top:60px\n}\n}\n.museum-block-content-img .active[data-v-3e7ac37f]{\n  color:#221f1a\n}\n.poster-room[data-v-3e7ac37f]{\n  background:#ffdd7c;\n  padding:20px\n}\n.poster-room-header[data-v-3e7ac37f]{\n  display:flex;\n  flex-direction:column\n}\n@media(max-width:500px){\n.poster-room-header[data-v-3e7ac37f]{\n    padding-bottom:20px;\n    border-bottom:1px solid\n}\n}\n.poster-room-header .line-dn[data-v-3e7ac37f]{\n  border-top:1px solid #000;\n  transform:rotate(-8deg)\n}\n@media(max-width:1000px){\n.poster-room-header .line-dn[data-v-3e7ac37f]{\n    transform:rotate(-15deg)\n}\n}\n@media(max-width:500px){\n.poster-room-header .line-dn[data-v-3e7ac37f]{\n    transform:rotate(-20deg)\n}\n}\n.poster-room-header-title[data-v-3e7ac37f]{\n  font-style:normal;\n  font-weight:400;\n  font-size:40px;\n  line-height:40px;\n  text-transform:uppercase;\n  color:#221f1a;\n  margin-bottom:85px\n}\n@media(max-width:1000px){\n.poster-room-header-title[data-v-3e7ac37f]{\n    font-size:30px;\n    line-height:30px\n}\n}\n@media(max-width:500px){\n.poster-room-header-title[data-v-3e7ac37f]{\n    font-size:25px;\n    line-height:25px\n}\n}\n.poster-room-header-more[data-v-3e7ac37f]{\n  margin-top:85px;\n  font-style:normal;\n  font-weight:400;\n  font-size:15px;\n  line-height:20px;\n  text-align:right;\n  text-transform:uppercase;\n  color:#221f1a\n}\n.poster-room-content[data-v-3e7ac37f]{\n  margin-top:40px;\n  padding-top:20px;\n  border-top:1px solid;\n  display:flex;\n  justify-content:space-between\n}\n@media(max-width:500px){\n.poster-room-content[data-v-3e7ac37f]{\n    border:none;\n    flex-direction:column\n}\n}\n.poster-room-content-border-right[data-v-3e7ac37f]{\n  border-right:1px solid #000\n}\n.poster-room-content-block[data-v-3e7ac37f]{\n  display:flex;\n  flex-direction:column;\n  flex:1\n}\n@media(max-width:800px){\n.poster-room-content-block[data-v-3e7ac37f]{\n    justify-content:space-between\n}\n}\n@media(max-width:500px){\n.poster-room-content-block[data-v-3e7ac37f]{\n    border:none;\n    border-bottom:1px solid;\n    margin-bottom:40px\n}\n}\n.poster-room-content-block-title[data-v-3e7ac37f]{\n  display:flex;\n  justify-content:space-between;\n  align-items:center;\n  margin-bottom:88px\n}\n.poster-room-content-block-title-authnrMini[data-v-3e7ac37f]{\n  display:none;\n  font-style:normal;\n  font-weight:400;\n  font-size:15px;\n  line-height:20px;\n  text-transform:uppercase;\n  color:#221f1a\n}\n.poster-room-content-block-title-authnrMini img[data-v-3e7ac37f]{\n  width:7px;\n  margin-bottom:9px\n}\n@media(max-width:800px){\n.poster-room-content-block-title-authnrMini[data-v-3e7ac37f]{\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n    margin-bottom:40px\n}\n}\n.poster-room-content-block-title-authnr[data-v-3e7ac37f]{\n  font-style:normal;\n  font-weight:400;\n  font-size:15px;\n  line-height:20px;\n  text-transform:uppercase;\n  color:#221f1a\n}\n.poster-room-content-block-title-authnr img[data-v-3e7ac37f]{\n  width:7px;\n  margin-left:10px\n}\n@media(max-width:800px){\n.poster-room-content-block-title-authnr[data-v-3e7ac37f]{\n    display:none\n}\n}\n.poster-room-content-block-title-text[data-v-3e7ac37f]{\n  font-style:normal;\n  font-weight:400;\n  font-size:15px;\n  line-height:20px;\n  text-transform:uppercase;\n  color:#221f1a\n}\n@media(max-width:800px){\n.poster-room-content-block-title-text[data-v-3e7ac37f]{\n    display:flex;\n    justify-content:space-between;\n    width:100%\n}\n}\n.poster-room-content-block-body[data-v-3e7ac37f]{\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  flex-direction:column\n}\n.poster-room-content-block-description[data-v-3e7ac37f]{\n  margin-top:40px;\n  font-style:normal;\n  font-weight:400;\n  font-size:30px;\n  line-height:32px;\n  text-align:center;\n  text-transform:uppercase;\n  color:#221f1a;\n  max-width:500px;\n  margin-bottom:60px\n}\n.poster-room-content-block-description span[data-v-3e7ac37f]{\n  font-style:italic\n}\n.virtual-tour[data-v-3e7ac37f]{\n  background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  height:700px;\n  padding-top:40px;\n  padding-left:20px;\n  display:flex;\n  flex-direction:column;\n  justify-content:space-between\n}\n.virtual-tour-title p[data-v-3e7ac37f]{\n  font-style:normal;\n  font-weight:400;\n  font-size:40px;\n  line-height:40px;\n  text-transform:uppercase;\n  color:#fff;\n  max-width:365px\n}\n@media(max-width:1000px){\n.virtual-tour-title p[data-v-3e7ac37f]{\n    font-size:30px;\n    line-height:30px\n}\n}\n@media(max-width:500px){\n.virtual-tour-title p[data-v-3e7ac37f]{\n    font-size:25px;\n    line-height:25px\n}\n}\n.virtual-tour-content[data-v-3e7ac37f]{\n  display:flex;\n  justify-content:center;\n  align-items:center\n}\n.education[data-v-3e7ac37f]{\n  background:#ffdd7c;\n  display:flex;\n  flex-direction:column;\n  padding:40px 20px\n}\n.education-title p[data-v-3e7ac37f]{\n  font-style:normal;\n  font-weight:400;\n  font-size:40px;\n  line-height:40px;\n  text-transform:uppercase;\n  color:#221f1a\n}\n@media(max-width:1000px){\n.education-title p[data-v-3e7ac37f]{\n    font-size:30px;\n    line-height:30px\n}\n}\n@media(max-width:650px){\n.education-title p[data-v-3e7ac37f]{\n    font-size:25px;\n    line-height:25px\n}\n}\n.education-content[data-v-3e7ac37f]{\n  display:flex;\n  justify-content:space-between;\n  align-items:center;\n  margin-bottom:85px\n}\n@media(max-width:650px){\n.education-content[data-v-3e7ac37f]{\n    flex-direction:column-reverse\n}\n}\n.education-content p[data-v-3e7ac37f]{\n  max-width:530px\n}\n.education-content img[data-v-3e7ac37f]{\n  width:529px;\n  height:384px;\n  margin-right:100px\n}\n@media(max-width:800px){\n.education-content img[data-v-3e7ac37f]{\n    width:294px;\n    height:213px;\n    margin:20px\n}\n}\n.education-footer[data-v-3e7ac37f]{\n  display:flex;\n  justify-content:space-around;\n  border-top:1px solid;\n  align-items:center;\n  padding-top:20px\n}\n@media(max-width:600px){\n.education-footer[data-v-3e7ac37f]{\n    flex-wrap:wrap\n}\n}\n@media(max-width:600px){\n.education-footer div[data-v-3e7ac37f]:nth-child(2){\n    border-right:0\n}\n}\n@media(max-width:600px){\n.education-footer div[data-v-3e7ac37f]:nth-child(3){\n    width:100%;\n    margin-top:20px;\n    border-top:1px solid\n}\n}\n.education-footer div[data-v-3e7ac37f]{\n  height:100px;\n  flex:1;\n  display:flex;\n  justify-content:center;\n  align-items:center\n}\n.education-footer div p[data-v-3e7ac37f]{\n  font-style:normal;\n  font-weight:400;\n  font-size:15px;\n  line-height:20px;\n  text-align:right;\n  text-transform:uppercase;\n  color:#221f1a\n}\n@media(max-width:600px){\n.education-footer div[data-v-3e7ac37f]{\n    width:50%;\n    flex:none\n}\n}\n.education-footer-border[data-v-3e7ac37f]{\n  border-left:1px solid;\n  border-right:1px solid\n}\n.news[data-v-3e7ac37f]{\n  padding:40px 20px\n}\n.news-content[data-v-3e7ac37f]{\n  margin-top:40px;\n  border-top:1px solid;\n  border-bottom:1px solid;\n  display:flex;\n  justify-content:space-around;\n  margin-bottom:150px;\n  position:relative\n}\n@media(max-width:500px){\n.news-content[data-v-3e7ac37f]{\n    border-bottom:none;\n    border-top:none;\n    margin-bottom:20px;\n    flex-direction:column\n}\n}\n.news-content .left[data-v-3e7ac37f]{\n  display:block;\n  font-size:50px;\n  position:absolute;\n  top:200px;\n  left:20px;\n  cursor:pointer\n}\n@media(max-width:500px){\n.news-content .left[data-v-3e7ac37f]{\n    display:none!important\n}\n}\n.news-content .right[data-v-3e7ac37f]{\n  display:block;\n  font-size:50px;\n  position:absolute;\n  top:200px;\n  right:20px;\n  cursor:pointer\n}\n@media(max-width:500px){\n.news-content .right[data-v-3e7ac37f]{\n    display:none!important\n}\n}\n.news-content .news-content-swiper-border-r[data-v-3e7ac37f]{\n  border-right:1px solid\n}\n@media(max-width:500px){\n.news-content .news-content-swiper-border-r[data-v-3e7ac37f]{\n    border-right:none\n}\n}\n.news-content-swiper[data-v-3e7ac37f]{\n  margin-top:20px;\n  margin-bottom:20px;\n  display:flex;\n  flex-direction:column;\n  justify-content:space-around;\n  flex:1;\n  padding-left:20px;\n  padding-right:20px\n}\n@media(max-width:500px){\n.news-content-swiper[data-v-3e7ac37f]{\n    border-top:none;\n    border-bottom:1px solid\n}\n}\n.news-content-swiper-title[data-v-3e7ac37f]{\n  display:flex;\n  justify-content:space-between\n}\n.news-content-swiper-title p[data-v-3e7ac37f]{\n  font-size:13px;\n  line-height:15px;\n  text-align:right\n}\n.news-content-swiper-title p[data-v-3e7ac37f],.news-content-swiper .title[data-v-3e7ac37f]{\n  font-style:normal;\n  font-weight:400;\n  text-transform:uppercase;\n  color:#221f1a\n}\n.news-content-swiper .title[data-v-3e7ac37f]{\n  display:flex;\n  flex-direction:column;\n  justify-content:center;\n  align-items:center;\n  margin-top:30px;\n  font-size:30px;\n  line-height:32px;\n  text-align:center;\n  flex:1\n}\n@media(max-width:1000px){\n.news-content-swiper .title[data-v-3e7ac37f]{\n    font-size:22px;\n    line-height:25px\n}\n}\n.news-content-swiper .title p[data-v-3e7ac37f]{\n  max-width:340px\n}\n.news-content-swiper .text[data-v-3e7ac37f]{\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  margin-top:30px;\n  font-style:normal;\n  font-weight:400;\n  font-size:15px;\n  line-height:20px;\n  text-align:center;\n  color:#221f1a;\n  flex:1;\n  margin-bottom:70px\n}\n.news-content-swiper .text p[data-v-3e7ac37f]{\n  max-width:340px\n}\n.news-content-swiper-content[data-v-3e7ac37f]{\n  display:flex;\n  flex-direction:column;\n  justify-content:center;\n  align-items:center;\n  margin-top:40px;\n  flex:1\n}\n.news-content-swiper-content img[data-v-3e7ac37f]{\n  max-width:250px\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg.1542fe8.jpg";

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Main.vue?vue&type=template&id=3e7ac37f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main pt-30"},[_vm._ssrNode("<div class=\"image-bock flex items-center justify-center flex-col \" data-v-3e7ac37f><div class=\"image-bock-img\" data-v-3e7ac37f><img"+(_vm._ssrAttr("src",__webpack_require__(38)))+" alt data-v-3e7ac37f></div> <div class=\"image-bock-title\" data-v-3e7ac37f><p class=\"title\" data-v-3e7ac37f>новое культурное</p> <p class=\"title-p\" data-v-3e7ac37f>пространство для горожан</p></div></div> "),_vm._ssrNode("<div class=\"museum-block\" data-v-3e7ac37f>","</div>",[_vm._ssrNode("<div class=\"museum-block-title\" data-v-3e7ac37f><p data-v-3e7ac37f>о музее</p></div> "),_vm._ssrNode("<div class=\"museum-block-content\" data-v-3e7ac37f>","</div>",[_vm._ssrNode("<div class=\"museum-block-content-text\" data-v-3e7ac37f><div data-v-3e7ac37f></div> <div class=\"description\" data-v-3e7ac37f><p data-v-3e7ac37f>Новый музейный комплекс—филиал Третьяковской галереи. Первый художественный музей такого масштаба в Калининградской области. </p></div> <div class=\"more\" data-v-3e7ac37f><p data-v-3e7ac37f>(подробнее)</p></div></div> "),_vm._ssrNode("<div class=\"museum-block-content-img\" data-v-3e7ac37f>","</div>",[_vm._ssrNode("<div data-v-3e7ac37f></div> "),_vm._ssrNode("<div data-v-3e7ac37f>","</div>",[_c('Swiper')],1),_vm._ssrNode(" <div class=\"flex items-center justify-between w-full\" data-v-3e7ac37f><p class=\"flex ml-20 pagination\" data-v-3e7ac37f><span class=\"page active\" data-v-3e7ac37f>1</span> <span class=\"page\" data-v-3e7ac37f>2</span> <span class=\"page\" data-v-3e7ac37f>3</span></p> <img"+(_vm._ssrAttr("src",__webpack_require__(55)))+" alt class=\"icon\" data-v-3e7ac37f></div>")],2)],2)],2),_vm._ssrNode(" <div class=\"poster-room\" data-v-3e7ac37f><div class=\"poster-room-header\" data-v-3e7ac37f><p class=\"poster-room-header-title\" data-v-3e7ac37f>афиша событий</p> <hr class=\"line-dn\" data-v-3e7ac37f> <p class=\"poster-room-header-more\" data-v-3e7ac37f>(все события)</p></div> <div class=\"poster-room-content\" data-v-3e7ac37f><div class=\"poster-room-content-block pr-5 poster-room-content-border-right min-block\" data-v-3e7ac37f><div class=\"poster-room-content-block-title\" data-v-3e7ac37f><div class=\"poster-room-content-block-title-text\" data-v-3e7ac37f><p data-v-3e7ac37f>1–21 ДЕК</p> <p data-v-3e7ac37f>Кинопоказ</p></div> <div class=\"poster-room-content-block-title-authnr\" data-v-3e7ac37f><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt class=\"mr-2\" data-v-3e7ac37f> <p data-v-3e7ac37f>Кинотеатр «Киносфера»\n               Калининград</p></div></div> <div class=\"poster-room-content-block-body\" data-v-3e7ac37f><div class=\"poster-room-content-block-img\" data-v-3e7ac37f><img"+(_vm._ssrAttr("src",__webpack_require__(39)))+" alt data-v-3e7ac37f></div> <div class=\"poster-room-content-block-title-authnrMini\" data-v-3e7ac37f><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt class=\"mr-2\" data-v-3e7ac37f> <p data-v-3e7ac37f>Кинотеатр «Киносфера»\n               Калининград</p></div> <div class=\"poster-room-content-block-description\" data-v-3e7ac37f><p data-v-3e7ac37f>Замки <span data-v-3e7ac37f>ЛуАры</span></p></div></div></div> <div class=\"poster-room-content-block pl-5\" data-v-3e7ac37f><div class=\"poster-room-content-block-title\" data-v-3e7ac37f><div class=\"poster-room-content-block-title-text\" data-v-3e7ac37f><p data-v-3e7ac37f>14–28 ДЕК</p> <p data-v-3e7ac37f>Лекции</p></div> <div class=\"poster-room-content-block-title-authnr flex\" data-v-3e7ac37f><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt class=\"mr-2\" data-v-3e7ac37f> <p data-v-3e7ac37f>Инженерный корпус</p></div></div> <div class=\"poster-room-content-block-body\" data-v-3e7ac37f><div class=\"poster-room-content-block-img\" data-v-3e7ac37f><img"+(_vm._ssrAttr("src",__webpack_require__(56)))+" alt data-v-3e7ac37f></div> <div class=\"poster-room-content-block-description\" data-v-3e7ac37f><p data-v-3e7ac37f>Мифы и легенды в произведениях <span data-v-3e7ac37f>русских художников</span></p></div> <div class=\"poster-room-content-block-title-authnrMini\" data-v-3e7ac37f><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt class=\"mr-2\" data-v-3e7ac37f> <p data-v-3e7ac37f>Инженерный корпус</p></div></div></div></div> <div class=\"poster-room-content\" data-v-3e7ac37f><div class=\"poster-room-content-block pr-5 poster-room-content-border-right min-block\" data-v-3e7ac37f><div class=\"poster-room-content-block-title\" data-v-3e7ac37f><div class=\"poster-room-content-block-title-text\" data-v-3e7ac37f><p data-v-3e7ac37f>1 ДЕК 2020–14 ЯНВ 2021 </p> <p data-v-3e7ac37f>выставка</p></div> <div class=\"poster-room-content-block-title-authnr flex\" data-v-3e7ac37f><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt class=\"mr-2\" data-v-3e7ac37f> <p data-v-3e7ac37f>галерея A1–one каунас</p></div></div> <div class=\"poster-room-content-block-body\" data-v-3e7ac37f><div class=\"poster-room-content-block-img\" data-v-3e7ac37f><img"+(_vm._ssrAttr("src",__webpack_require__(57)))+" alt data-v-3e7ac37f></div> <div class=\"poster-room-content-block-description\" data-v-3e7ac37f><p data-v-3e7ac37f>Вильямс П.В. <span data-v-3e7ac37f>история одной работы</span></p></div> <div class=\"poster-room-content-block-title-authnrMini\" data-v-3e7ac37f><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt class=\"mr-2\" data-v-3e7ac37f> <p data-v-3e7ac37f>галерея A1–one каунас</p></div></div></div> <div class=\"poster-room-content-block pr-5 pl-5 poster-room-content-border-right\" data-v-3e7ac37f><div class=\"poster-room-content-block-title\" data-v-3e7ac37f><div class=\"poster-room-content-block-title-text\" data-v-3e7ac37f><p data-v-3e7ac37f>1–31 ЯНВ 2021</p> <p data-v-3e7ac37f>Лекции</p></div> <div class=\"poster-room-content-block-title-authnr flex\" data-v-3e7ac37f><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt class=\"mr-2\" data-v-3e7ac37f> <p data-v-3e7ac37f>Инженерный корпус</p></div></div> <div class=\"poster-room-content-block-body\" data-v-3e7ac37f><div class=\"poster-room-content-block-img\" data-v-3e7ac37f><img"+(_vm._ssrAttr("src",__webpack_require__(58)))+" alt data-v-3e7ac37f></div> <div class=\"poster-room-content-block-description\" data-v-3e7ac37f><p data-v-3e7ac37f>«Маленький человек» Кабакова<span data-v-3e7ac37f> и русская живопись XIX века</span></p></div> <div class=\"poster-room-content-block-title-authnrMini\" data-v-3e7ac37f><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt class=\"mr-2\" data-v-3e7ac37f> <p data-v-3e7ac37f>Инженерный корпус</p></div></div></div> <div class=\"poster-room-content-block pr-5 pl-5\" data-v-3e7ac37f><div class=\"poster-room-content-block-title\" data-v-3e7ac37f><div class=\"poster-room-content-block-title-text\" data-v-3e7ac37f><p data-v-3e7ac37f>1 ЯНВ–31 ФЕВ 2021 </p> <p data-v-3e7ac37f>выставка</p></div> <div class=\"poster-room-content-block-title-authnr flex\" data-v-3e7ac37f><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt class=\"mr-2\" data-v-3e7ac37f> <p data-v-3e7ac37f>Музей Янтаря, Калининград</p></div></div> <div class=\"poster-room-content-block-body\" data-v-3e7ac37f><div class=\"poster-room-content-block-img\" data-v-3e7ac37f><img"+(_vm._ssrAttr("src",__webpack_require__(59)))+" alt data-v-3e7ac37f></div> <div class=\"poster-room-content-block-description\" data-v-3e7ac37f><p data-v-3e7ac37f>фотография во времена <span data-v-3e7ac37f>самоизоляции</span></p></div> <div class=\"poster-room-content-block-title-authnrMini\" data-v-3e7ac37f><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt class=\"mr-2\" data-v-3e7ac37f> <p data-v-3e7ac37f>Музей Янтаря, Калининград</p></div></div></div> <div class=\"all-events\" data-v-3e7ac37f><p data-v-3e7ac37f>(все события)</p></div></div></div> <div class=\"virtual-tour\" data-v-3e7ac37f><div class=\"virtual-tour-title\" data-v-3e7ac37f><p data-v-3e7ac37f>виртуальный тур по музею</p></div> <div class=\"virtual-tour-content\" data-v-3e7ac37f><canvas height=\"300\" id=\"virtual-tour-play\" data-v-3e7ac37f></canvas></div> <div data-v-3e7ac37f></div></div> <div class=\"education\" data-v-3e7ac37f><div class=\"education-title\" data-v-3e7ac37f><p data-v-3e7ac37f>Обучение</p></div> <div class=\"education-content\" data-v-3e7ac37f><p data-v-3e7ac37f>Мы готовим специалистов в области искусства и музейного дела для работы в качестве кураторов и арт-менеджеров. Выпускники программы будут свободно ориентироваться в мире актуального искусства и современных музейных практик, обладать широкой теоретической подготовкой в сфере искусства и музейной деятельности.</p> <img"+(_vm._ssrAttr("src",__webpack_require__(60)))+" alt data-v-3e7ac37f></div> <div class=\"education-footer\" data-v-3e7ac37f><div data-v-3e7ac37f><p data-v-3e7ac37f>(о программе)</p></div> <div class=\"education-footer-border\" data-v-3e7ac37f><p data-v-3e7ac37f>(расписание)</p></div> <div data-v-3e7ac37f><p data-v-3e7ac37f>(материалы)</p></div></div></div> <div class=\"news\" data-v-3e7ac37f><div class=\"poster-room-header\" data-v-3e7ac37f><p class=\"poster-room-header-title\" data-v-3e7ac37f>Новости</p> <hr class=\"line-dn\" data-v-3e7ac37f> <p class=\"poster-room-header-more\" data-v-3e7ac37f>(все новости)</p></div> <div class=\"news-content\" data-v-3e7ac37f><span class=\"left\" data-v-3e7ac37f>❮</span> <span class=\"right\" data-v-3e7ac37f>❯</span> <div class=\"news-content-swiper news-content-swiper-border-r\" data-v-3e7ac37f><div class=\"news-content-swiper-title\" data-v-3e7ac37f><p data-v-3e7ac37f>17 окт</p> <p data-v-3e7ac37f>музей</p></div> <div class=\"news-content-swiper-content\" data-v-3e7ac37f><img"+(_vm._ssrAttr("src",__webpack_require__(25)))+" alt data-v-3e7ac37f></div> <div class=\"title\" data-v-3e7ac37f><p data-v-3e7ac37f>ДОМ-МУЗЕЙ ВИКТОРА ВАСНЕЦОВА</p></div> <div class=\"text\" data-v-3e7ac37f><p data-v-3e7ac37f>Это многообразие связано и с особенностями каждой отдельной исторической эпохи, и с процессами.</p></div></div> <div class=\"news-content-swiper\" data-v-3e7ac37f><div class=\"news-content-swiper-title\" data-v-3e7ac37f><p data-v-3e7ac37f>17 окт</p> <p data-v-3e7ac37f>ход строительства</p></div> <div class=\"news-content-swiper-content\" data-v-3e7ac37f><img"+(_vm._ssrAttr("src",__webpack_require__(40)))+" alt data-v-3e7ac37f></div> <div class=\"title\" data-v-3e7ac37f><p data-v-3e7ac37f>ЗАЛОЖЕН ФУНДАМЕНТ ЗДАНИЯ МУЗЕЯ</p></div> <div class=\"text\" data-v-3e7ac37f><p data-v-3e7ac37f>Лекция посвящена эволюции понимания задач цвета в живописи и многообразию подходов к колориту.</p></div></div></div> <div class=\"all-events\" data-v-3e7ac37f><p data-v-3e7ac37f>(все события)</p></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Main.vue?vue&type=template&id=3e7ac37f&scoped=true&

// EXTERNAL MODULE: ./components/Swiper.vue + 4 modules
var Swiper = __webpack_require__(51);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Mainvue_type_script_lang_js_ = ({
  name: "Main",
  components: {
    Swiper: Swiper["default"]
  },

  mounted() {
    let canvas = document.getElementById('virtual-tour-play');

    if (canvas.getContext) {
      let ctx = canvas.getContext('2d');
      ctx.beginPath();
      ctx.fillStyle = "#FFFFFF";
      ctx.strokeStyle = '#FFFFFF';
      ctx.moveTo(270, 270);
      ctx.lineTo(270, 10);
      ctx.lineTo(40, 135);
      ctx.fillText("( прогуляться )", 150, 140);
      ctx.closePath();
      ctx.stroke();
    }
  }

});
// CONCATENATED MODULE: ./components/Main.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Mainvue_type_script_lang_js_ = (Mainvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Main.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(61)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Mainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3e7ac37f",
  "b78dd388"
  
)

/* harmony default export */ var Main = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Swiper: __webpack_require__(51).default})


/***/ }),
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=5d7c74b0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Header',{ref:"header"}),_vm._ssrNode(" "),_c('Main'),_vm._ssrNode(" "),_c('Footer')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=5d7c74b0&

// EXTERNAL MODULE: ./components/Main.vue + 4 modules
var Main = __webpack_require__(64);

// EXTERNAL MODULE: ./components/Footer.vue + 4 modules
var Footer = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//


/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: 'IndexPage',
  components: {
    Footer: Footer["default"],
    Main: Main["default"]
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0d0cc317"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(34).default,Main: __webpack_require__(64).default,Footer: __webpack_require__(37).default})


/***/ })
]);;
//# sourceMappingURL=index.js.map