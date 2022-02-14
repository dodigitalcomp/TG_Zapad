exports.ids = [3,4];
exports.modules = Array(24).concat([
/* 24 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDYgMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8Y2lyY2xlIGN4PSIzIiBjeT0iMyIgcj0iMyIgZmlsbD0iIzIxMUYxQSIvPg0KPHBhdGggZD0iTTMgNVYxMiIgc3Ryb2tlPSIjMjExRjFBIi8+DQo8L3N2Zz4NCg=="

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Pic-fit3.d22123e.jpg";

/***/ }),
/* 26 */,
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
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
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
/* 37 */,
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
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
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


/***/ })
]);;
//# sourceMappingURL=main.js.map