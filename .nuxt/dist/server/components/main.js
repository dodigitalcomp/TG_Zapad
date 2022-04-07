exports.ids = [4,2];
exports.modules = {

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(116);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("7a53d9fd", content, true, context)
};

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pic.98fdc02.jpg";

/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/image24.b155ec1.jpg";

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/image-museum.bd1b9e0.jpg";

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Galleria.vue?vue&type=template&id=e6ddfb82&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"block\" data-v-e6ddfb82><img"+(_vm._ssrAttr("src",__webpack_require__(105)))+" alt class=\"item item1\" data-v-e6ddfb82> <img"+(_vm._ssrAttr("src",__webpack_require__(106)))+" alt class=\"item item2\" data-v-e6ddfb82> <img"+(_vm._ssrAttr("src",__webpack_require__(107)))+" alt class=\"item item3\" data-v-e6ddfb82></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Galleria.vue?vue&type=template&id=e6ddfb82&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Galleria.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Galleriavue_type_script_lang_js_ = ({
  name: "Galleria"
});
// CONCATENATED MODULE: ./components/Galleria.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Galleriavue_type_script_lang_js_ = (Galleriavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Galleria.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(115)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Galleriavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e6ddfb82",
  "08611162"
  
)

/* harmony default export */ var Galleria = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Galleria_vue_vue_type_style_index_0_id_e6ddfb82_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(100);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Galleria_vue_vue_type_style_index_0_id_e6ddfb82_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Galleria_vue_vue_type_style_index_0_id_e6ddfb82_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Galleria_vue_vue_type_style_index_0_id_e6ddfb82_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Galleria_vue_vue_type_style_index_0_id_e6ddfb82_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.block[data-v-e6ddfb82]{\n  position:relative;\n  width:501px;\n  height:354px\n}\n@media(max-width:1000px){\n.block[data-v-e6ddfb82]{\n    width:268px;\n    height:190px\n}\n}\n@media(max-width:650px){\n.block[data-v-e6ddfb82]{\n    width:339px;\n    height:239px\n}\n}\n.item[data-v-e6ddfb82]{\n  width:501px;\n  height:354px;\n  position:absolute\n}\n@media(max-width:1000px){\n.item[data-v-e6ddfb82]{\n    width:268px;\n    height:190px\n}\n}\n.item3[data-v-e6ddfb82]{\n  top:10px;\n  left:10px\n}\n@media(max-width:650px){\n.item3[data-v-e6ddfb82]{\n    width:329px;\n    height:229px\n}\n}\n.item2[data-v-e6ddfb82]{\n  top:25px;\n  left:25px;\n  opacity:.5\n}\n@media(max-width:650px){\n.item2[data-v-e6ddfb82]{\n    width:309px;\n    height:229px\n}\n}\n.item1[data-v-e6ddfb82]{\n  top:40px;\n  left:40px;\n  opacity:.5\n}\n@media(max-width:650px){\n.item1[data-v-e6ddfb82]{\n    width:279px;\n    height:229px\n}\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 120:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNiAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xNiA2QzE2IDcuMzE1NjEgMTUuNjc1NSA4LjYxMDkxIDE1LjA1NTQgOS43NzExN0MxNC40MzUyIDEwLjkzMTQgMTMuNTM4NSAxMS45MjA4IDEyLjQ0NDYgMTIuNjUxOEMxMS4zNTA3IDEzLjM4MjcgMTAuMDkzNCAxMy44MzI1IDguNzg0MTQgMTMuOTYxNUM3LjQ3NDg2IDE0LjA5MDQgNi4xNTQgMTMuODk0NSA0LjkzODUzIDEzLjM5MUMzLjcyMzA3IDEyLjg4NzYgMi42NTA1MyAxMi4wOTIxIDEuODE1OTIgMTEuMDc1MUMwLjk4MTMwNCAxMC4wNTgyIDAuNDEwMzggOC44NTEwNSAwLjE1MzcxOCA3LjU2MDcyQy0wLjEwMjk0NSA2LjI3MDM5IC0wLjAzNzQyMzUgNC45MzY2OCAwLjM0NDQ3NyAzLjY3NzcyQzAuNzI2Mzc4IDIuNDE4NzYgMS40MTI4NyAxLjI3MzQyIDIuMzQzMTUgMC4zNDMxNDZMOCA2SDE2WiIgZmlsbD0iIzIyMUYxQSIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(140);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("41e3ab03", content, true, context)
};

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/image31.f74f7b4.jpg";

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Pic-fit.2bb2577.jpg";

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/image30.2468a11.jpg";

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Pic-fit1.21936ce.jpg";

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle976.d4e8f90.jpg";

/***/ }),

/***/ 137:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAyMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0yMSAxTDEgMTZMMjEgMzEiIHN0cm9rZT0iIzIyMUYxQSIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ 138:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAyMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xIDFMMjEgMTZMMSAzMSIgc3Ryb2tlPSIjMjIxRjFBIi8+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_a28c28c6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(124);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_a28c28c6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_a28c28c6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_a28c28c6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_a28c28c6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(9);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(141);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(78);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n#virtual-tour-play[data-v-a28c28c6]{\n  width:336px;\n  height:405px\n}\n.all-events[data-v-a28c28c6]{\n  display:none\n}\n@media(max-width:650px){\n.all-events[data-v-a28c28c6]{\n    display:flex;\n    justify-content:center;\n    margin-bottom:20px;\n    margin-top:20px\n}\n.all-events p[data-v-a28c28c6]{\n    font-style:normal;\n    font-weight:400;\n    font-size:13px;\n    line-height:20px;\n    display:flex;\n    align-items:center;\n    text-align:center;\n    text-transform:uppercase;\n    color:#221f1a\n}\n}\n.pt-30[data-v-a28c28c6]{\n  padding-top:110px\n}\n@media(max-width:800px){\n.min-block[data-v-a28c28c6]{\n    display:none!important\n}\n}\n.image-bock-img[data-v-a28c28c6]{\n  max-width:80%;\n  margin-bottom:40px\n}\n.image-bock-title[data-v-a28c28c6]{\n  display:flex;\n  justify-content:center;\n  flex-direction:column;\n  align-items:center\n}\n.image-bock-title .title[data-v-a28c28c6]{\n  font-style:normal;\n  font-weight:400;\n  font-size:50px;\n  line-height:50px;\n  text-align:center;\n  text-transform:uppercase;\n  color:#221f1a;\n  max-width:80%\n}\n@media(max-width:1000px){\n.image-bock-title .title[data-v-a28c28c6]{\n    font-size:40px;\n    line-height:40px\n}\n}\n@media(max-width:650px){\n.image-bock-title .title[data-v-a28c28c6]{\n    font-size:30px;\n    line-height:32px\n}\n}\n.image-bock-title .title-p[data-v-a28c28c6]{\n  max-width:565px;\n  font-style:italic;\n  font-weight:400;\n  font-size:50px;\n  line-height:50px;\n  text-align:center;\n  text-transform:uppercase;\n  color:#221f1a\n}\n@media(max-width:1000px){\n.image-bock-title .title-p[data-v-a28c28c6]{\n    font-size:40px;\n    line-height:40px\n}\n}\n@media(max-width:650px){\n.image-bock-title .title-p[data-v-a28c28c6]{\n    font-size:30px;\n    line-height:32px\n}\n}\n.museum-block[data-v-a28c28c6]{\n  padding:20px;\n  margin-top:120px;\n  display:flex;\n  flex-direction:column;\n  justify-content:center\n}\n.museum-block-title[data-v-a28c28c6]{\n  width:100%;\n  border-bottom:1px solid;\n  padding-bottom:20px\n}\n.museum-block-title p[data-v-a28c28c6]{\n  text-align:left;\n  font-style:normal;\n  font-weight:400;\n  font-size:40px;\n  line-height:40px;\n  text-transform:uppercase;\n  color:#221f1a\n}\n@media(max-width:1000px){\n.museum-block-title p[data-v-a28c28c6]{\n    font-size:30px;\n    line-height:30px\n}\n}\n@media(max-width:650px){\n.museum-block-title p[data-v-a28c28c6]{\n    font-size:25px;\n    line-height:25px\n}\n}\n.museum-block-content[data-v-a28c28c6]{\n  display:flex;\n  justify-content:space-between;\n  align-items:center;\n  margin-top:20px\n}\n@media(max-width:650px){\n.museum-block-content[data-v-a28c28c6]{\n    flex-direction:column\n}\n}\n.museum-block-content-text[data-v-a28c28c6]{\n  height:560px;\n  border-right:1px solid;\n  display:flex;\n  flex-direction:column;\n  justify-content:space-between;\n  flex:1\n}\n@media(max-width:850px){\n.museum-block-content-text[data-v-a28c28c6]{\n    height:407px\n}\n}\n@media(max-width:650px){\n.museum-block-content-text[data-v-a28c28c6]{\n    border:none;\n    border-bottom:1px solid;\n    padding-bottom:20px;\n    margin-bottom:20px\n}\n}\n.museum-block-content-text .description p[data-v-a28c28c6]{\n  max-width:471px;\n  font-style:normal;\n  font-weight:400;\n  font-size:28px;\n  line-height:35px;\n  color:#221f1a;\n  margin-bottom:20px\n}\n@media(max-width:1000px){\n.museum-block-content-text .description p[data-v-a28c28c6]{\n    font-size:18px;\n    line-height:26px\n}\n}\n.museum-block-content-text .more[data-v-a28c28c6]{\n  display:flex;\n  justify-content:flex-end;\n  margin-right:20px\n}\n.museum-block-content-text .more p[data-v-a28c28c6]{\n  font-style:normal;\n  font-weight:400;\n  font-size:15px;\n  line-height:20px;\n  text-align:right;\n  text-transform:uppercase;\n  color:#221f1a\n}\n@media(max-width:650px){\n.museum-block-content-text .more[data-v-a28c28c6]{\n    justify-content:flex-start\n}\n}\n.museum-block-content-img[data-v-a28c28c6]{\n  height:560px;\n  display:flex;\n  flex-direction:column;\n  justify-content:space-between;\n  align-items:center;\n  flex:1\n}\n@media(max-width:850px){\n.museum-block-content-img[data-v-a28c28c6]{\n    height:407px\n}\n}\n.museum-block-content-img .page[data-v-a28c28c6]{\n  font-size:15px;\n  line-height:20px;\n  text-align:right;\n  text-transform:uppercase;\n  color:#bdbdbd;\n  margin:5px;\n  cursor:pointer\n}\n@media(max-width:650px){\n.museum-block-content-img .pagination-min[data-v-a28c28c6]{\n    margin-top:60px;\n    margin-left:134px\n}\n.museum-block-content-img .icon[data-v-a28c28c6]{\n    margin-top:60px\n}\n}\n.museum-block-content-img .pagination-min[data-v-a28c28c6]{\n  display:none;\n  margin-left:53px\n}\n@media(max-width:850px){\n.museum-block-content-img .pagination-min[data-v-a28c28c6]{\n    display:flex\n}\n}\n@media(max-width:650px){\n.museum-block-content-img .pagination-min[data-v-a28c28c6]{\n    margin-left:44%\n}\n}\n.museum-block-content-img .pagination-max[data-v-a28c28c6]{\n  display:flex;\n  margin-left:120px\n}\n@media(max-width:850px){\n.museum-block-content-img .pagination-max[data-v-a28c28c6]{\n    display:none\n}\n}\n.museum-block-content-img .active[data-v-a28c28c6]{\n  color:#221f1a\n}\n.poster-room[data-v-a28c28c6]{\n  background:#ffdd7c;\n  padding:20px\n}\n.poster-room-header[data-v-a28c28c6]{\n  display:flex;\n  flex-direction:column\n}\n@media(max-width:650px){\n.poster-room-header[data-v-a28c28c6]{\n    padding-bottom:20px;\n    border-bottom:1px solid\n}\n}\n.poster-room-header-title[data-v-a28c28c6]{\n  font-style:normal;\n  font-weight:400;\n  font-size:40px;\n  line-height:40px;\n  text-transform:uppercase;\n  color:#221f1a;\n  margin-bottom:85px\n}\n@media(max-width:1000px){\n.poster-room-header-title[data-v-a28c28c6]{\n    font-size:30px;\n    line-height:30px\n}\n}\n@media(max-width:650px){\n.poster-room-header-title[data-v-a28c28c6]{\n    font-size:25px;\n    line-height:25px\n}\n}\n.poster-room-header-more[data-v-a28c28c6]{\n  display:flex;\n  justify-content:flex-end;\n  margin-top:85px;\n  font-style:normal;\n  font-weight:400;\n  font-size:15px;\n  line-height:20px;\n  text-align:right;\n  text-transform:uppercase;\n  color:#221f1a\n}\n.poster-room-content[data-v-a28c28c6]{\n  margin-top:20px;\n  padding-top:20px;\n  border-top:1px solid;\n  display:flex;\n  justify-content:space-between\n}\n@media(max-width:650px){\n.poster-room-content[data-v-a28c28c6]{\n    margin-top:0;\n    border:none;\n    flex-direction:column\n}\n}\n.poster-room-content-border-right[data-v-a28c28c6]{\n  border-right:1px solid #000\n}\n@media(max-width:850px){\n.poster-room-content-block[data-v-a28c28c6]:nth-child(2){\n    padding-left:0!important\n}\n}\n@media(max-width:850px){\n.poster-room-content-block[data-v-a28c28c6]:nth-child(3){\n    padding-right:0!important\n}\n}\n@media(max-width:650px){\n.poster-room-content-block[data-v-a28c28c6]:nth-child(3){\n    padding-top:20px\n}\n}\n.poster-room-content-block[data-v-a28c28c6]{\n  display:flex;\n  flex-direction:column;\n  flex:1\n}\n@media(max-width:800px){\n.poster-room-content-block[data-v-a28c28c6]{\n    justify-content:space-between\n}\n}\n@media(max-width:650px){\n.poster-room-content-block[data-v-a28c28c6]{\n    border:none;\n    border-bottom:1px solid;\n    padding-left:0;\n    padding-right:0\n}\n}\n.poster-room-content-block-title[data-v-a28c28c6]{\n  display:flex;\n  justify-content:space-between;\n  align-items:flex-start;\n  margin-bottom:88px\n}\n.poster-room-content-block-title-authnrMini[data-v-a28c28c6]{\n  display:none;\n  font-style:normal;\n  font-weight:400;\n  font-size:15px;\n  line-height:20px;\n  text-transform:uppercase;\n  color:#221f1a\n}\n.poster-room-content-block-title-authnrMini img[data-v-a28c28c6]{\n  width:7px;\n  margin-bottom:9px\n}\n@media(max-width:800px){\n.poster-room-content-block-title-authnrMini[data-v-a28c28c6]{\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n    margin-bottom:40px\n}\n}\n.poster-room-content-block-title-authnr[data-v-a28c28c6]{\n  font-style:normal;\n  font-weight:400;\n  font-size:15px;\n  line-height:20px;\n  text-transform:uppercase;\n  color:#221f1a\n}\n.poster-room-content-block-title-authnr img[data-v-a28c28c6]{\n  width:7px;\n  margin-left:10px\n}\n@media(max-width:800px){\n.poster-room-content-block-title-authnr[data-v-a28c28c6]{\n    display:none\n}\n}\n.poster-room-content-block-title-text[data-v-a28c28c6]{\n  font-style:normal;\n  font-weight:400;\n  font-size:15px;\n  line-height:20px;\n  text-transform:uppercase;\n  color:#221f1a\n}\n@media(max-width:800px){\n.poster-room-content-block-title-text[data-v-a28c28c6]{\n    display:flex;\n    justify-content:space-between;\n    width:100%\n}\n}\n.poster-room-content-block-body[data-v-a28c28c6]{\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  flex-direction:column\n}\n.poster-room-content-block-description[data-v-a28c28c6]{\n  margin-top:40px;\n  font-style:normal;\n  font-weight:400;\n  font-size:30px;\n  line-height:32px;\n  text-align:center;\n  text-transform:uppercase;\n  color:#221f1a;\n  max-width:500px;\n  margin-bottom:60px\n}\n.poster-room-content-block-description span[data-v-a28c28c6]{\n  font-style:italic\n}\n.virtual-tour[data-v-a28c28c6]{\n  background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  height:700px;\n  padding-top:40px;\n  padding-left:20px;\n  display:flex;\n  flex-direction:column;\n  justify-content:space-between\n}\n.virtual-tour-title p[data-v-a28c28c6]{\n  font-style:normal;\n  font-weight:400;\n  font-size:40px;\n  line-height:40px;\n  text-transform:uppercase;\n  color:#fff;\n  max-width:365px\n}\n@media(max-width:1000px){\n.virtual-tour-title p[data-v-a28c28c6]{\n    font-size:30px;\n    line-height:30px\n}\n}\n@media(max-width:650px){\n.virtual-tour-title p[data-v-a28c28c6]{\n    font-size:25px;\n    line-height:25px\n}\n}\n.virtual-tour-content[data-v-a28c28c6],.virtual-tour-content .img[data-v-a28c28c6]{\n  display:flex;\n  justify-content:center;\n  align-items:center\n}\n.virtual-tour-content .img[data-v-a28c28c6]{\n  height:405px;\n  width:336px;\n  background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-repeat:no-repeat;\n  background-size:510px 405px;\n  background-position:50%\n}\n@media(max-width:950px){\n.virtual-tour-content .img[data-v-a28c28c6]{\n    height:274px;\n    width:219px;\n    background-size:332px 274px\n}\n}\n.virtual-tour-content .img .elem[data-v-a28c28c6]{\n  margin-left:30px\n}\n.virtual-tour-content .img .elem span[data-v-a28c28c6]{\n  font-style:normal;\n  font-weight:400;\n  font-size:15px;\n  line-height:20px;\n  text-align:right;\n  text-transform:uppercase;\n  color:#fff\n}\n.education[data-v-a28c28c6]{\n  background:#ffdd7c;\n  display:flex;\n  flex-direction:column;\n  padding:40px 20px\n}\n@media(max-width:850px){\n.education[data-v-a28c28c6]{\n    padding:30px 20px\n}\n}\n.education-title p[data-v-a28c28c6]{\n  font-style:normal;\n  font-weight:400;\n  font-size:40px;\n  line-height:40px;\n  text-transform:uppercase;\n  color:#221f1a\n}\n@media(max-width:1000px){\n.education-title p[data-v-a28c28c6]{\n    font-size:30px;\n    line-height:30px\n}\n}\n@media(max-width:650px){\n.education-title p[data-v-a28c28c6]{\n    font-size:25px;\n    line-height:25px\n}\n}\n.education-content[data-v-a28c28c6]{\n  display:flex;\n  justify-content:space-between;\n  align-items:center;\n  margin-bottom:85px\n}\n@media(max-width:850px){\n.education-content[data-v-a28c28c6]{\n    margin-top:71px\n}\n}\n@media(max-width:650px){\n.education-content[data-v-a28c28c6]{\n    flex-direction:column-reverse\n}\n}\n.education-content p[data-v-a28c28c6]{\n  max-width:530px;\n  font-style:normal;\n  font-weight:400;\n  font-size:18px;\n  line-height:26px;\n  color:#211f1a\n}\n@media(max-width:800px){\n.education-content p[data-v-a28c28c6]{\n    font-size:15px;\n    line-height:20px\n}\n}\n@media(max-width:650px){\n.education-content p[data-v-a28c28c6]{\n    font-size:18px;\n    line-height:26px\n}\n}\n.education-content p span[data-v-a28c28c6]{\n  color:red\n}\n.education-content img[data-v-a28c28c6]{\n  width:529px;\n  height:384px;\n  margin-right:100px\n}\n@media(max-width:800px){\n.education-content img[data-v-a28c28c6]{\n    width:294px;\n    height:213px;\n    margin:20px\n}\n}\n@media(max-width:650px){\n.education-content img[data-v-a28c28c6]{\n    width:335px;\n    height:244px\n}\n}\n.education-footer[data-v-a28c28c6]{\n  display:flex;\n  justify-content:space-around;\n  border-top:1px solid;\n  align-items:center;\n  padding-top:20px\n}\n@media(max-width:600px){\n.education-footer[data-v-a28c28c6]{\n    flex-wrap:wrap\n}\n}\n@media(max-width:600px){\n.education-footer div[data-v-a28c28c6]:nth-child(2){\n    border-right:0\n}\n}\n@media(max-width:600px){\n.education-footer div[data-v-a28c28c6]:nth-child(3){\n    width:100%;\n    margin-top:20px;\n    border-top:1px solid\n}\n}\n.education-footer div[data-v-a28c28c6]{\n  height:110px;\n  flex:1;\n  display:flex;\n  justify-content:center;\n  align-items:center\n}\n@media(max-width:850px){\n.education-footer div[data-v-a28c28c6]{\n    height:70px\n}\n}\n.education-footer div p[data-v-a28c28c6]{\n  font-style:normal;\n  font-weight:400;\n  font-size:15px;\n  line-height:20px;\n  text-align:right;\n  text-transform:uppercase;\n  color:#221f1a\n}\n@media(max-width:600px){\n.education-footer div[data-v-a28c28c6]{\n    width:50%;\n    flex:none\n}\n}\n.education-footer-border[data-v-a28c28c6]{\n  border-left:1px solid;\n  border-right:1px solid\n}\n.news[data-v-a28c28c6]{\n  padding:40px 20px\n}\n.news-content[data-v-a28c28c6]{\n  margin-top:20px;\n  border-top:1px solid;\n  border-bottom:1px solid;\n  display:flex;\n  justify-content:space-around;\n  margin-bottom:150px;\n  position:relative\n}\n@media(max-width:650px){\n.news-content[data-v-a28c28c6]{\n    border-bottom:none;\n    border-top:none;\n    margin-bottom:20px;\n    flex-direction:column\n}\n}\n.news-content .left[data-v-a28c28c6]{\n  display:block;\n  font-size:50px;\n  position:absolute;\n  top:200px;\n  left:0;\n  cursor:pointer\n}\n@media(max-width:650px){\n.news-content .left[data-v-a28c28c6]{\n    display:none!important\n}\n}\n.news-content .right[data-v-a28c28c6]{\n  display:block;\n  font-size:50px;\n  position:absolute;\n  top:200px;\n  right:0;\n  cursor:pointer\n}\n@media(max-width:650px){\n.news-content .right[data-v-a28c28c6]{\n    display:none!important\n}\n}\n.news-content .news-content-swiper-border-r[data-v-a28c28c6]{\n  border-right:1px solid\n}\n@media(max-width:650px){\n.news-content .news-content-swiper-border-r[data-v-a28c28c6]{\n    border-right:none\n}\n}\n.news-content-swiper[data-v-a28c28c6]{\n  margin-top:20px;\n  margin-bottom:20px;\n  display:flex;\n  flex-direction:column;\n  justify-content:space-around;\n  flex:1\n}\n@media(max-width:650px){\n.news-content-swiper[data-v-a28c28c6]{\n    margin-top:0;\n    border-top:none;\n    border-bottom:1px solid;\n    padding-left:0;\n    padding-right:0\n}\n}\n.news-content-swiper-title[data-v-a28c28c6]{\n  display:flex;\n  justify-content:space-between\n}\n.news-content-swiper-title p[data-v-a28c28c6]{\n  font-size:13px;\n  line-height:15px;\n  text-align:right\n}\n.news-content-swiper-title p[data-v-a28c28c6],.news-content-swiper .title[data-v-a28c28c6]{\n  font-style:normal;\n  font-weight:400;\n  text-transform:uppercase;\n  color:#221f1a\n}\n.news-content-swiper .title[data-v-a28c28c6]{\n  display:flex;\n  flex-direction:column;\n  justify-content:center;\n  align-items:center;\n  margin-top:30px;\n  font-size:30px;\n  line-height:32px;\n  text-align:center;\n  flex:1\n}\n@media(max-width:1000px){\n.news-content-swiper .title[data-v-a28c28c6]{\n    font-size:22px;\n    line-height:25px\n}\n}\n.news-content-swiper .title p[data-v-a28c28c6]{\n  max-width:340px\n}\n.news-content-swiper .text[data-v-a28c28c6]{\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  margin-top:30px;\n  font-style:normal;\n  font-weight:400;\n  font-size:15px;\n  line-height:20px;\n  text-align:center;\n  color:#221f1a;\n  flex:1;\n  margin-bottom:70px\n}\n.news-content-swiper .text p[data-v-a28c28c6]{\n  max-width:340px\n}\n.news-content-swiper-content[data-v-a28c28c6]{\n  display:flex;\n  flex-direction:column;\n  justify-content:center;\n  align-items:center;\n  margin-top:40px;\n  flex:1\n}\n.news-content-swiper-content img[data-v-a28c28c6]{\n  max-width:250px\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg.1542fe8.jpg";

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Main.vue?vue&type=template&id=a28c28c6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main pt-30"},[_vm._ssrNode("<div class=\"image-bock flex items-center justify-center flex-col \" data-v-a28c28c6><div class=\"image-bock-img\" data-v-a28c28c6><img"+(_vm._ssrAttr("src",__webpack_require__(105)))+" alt data-v-a28c28c6></div> <div class=\"image-bock-title\" data-v-a28c28c6><p class=\"title\" data-v-a28c28c6>Культурное городское пространство</p> <p class=\"title\" data-v-a28c28c6>Третьяковская галерея – Запад</p> <p class=\"title william\" data-v-a28c28c6>Россия и Европа. Искусство и общение. Творчество и развитие.</p></div></div> "),_vm._ssrNode("<div class=\"museum-block\" data-v-a28c28c6>","</div>",[_vm._ssrNode("<div class=\"museum-block-title\" data-v-a28c28c6><p data-v-a28c28c6>о музее</p></div> "),_vm._ssrNode("<div class=\"museum-block-content\" data-v-a28c28c6>","</div>",[_vm._ssrNode("<div class=\"museum-block-content-text\" data-v-a28c28c6><div data-v-a28c28c6></div> <div class=\"description\" data-v-a28c28c6><p data-v-a28c28c6>Филиал Государственной Третьяковской галереи —  новый центр притяжения в Калининграде. Это крупнейшая музейная площадка на западе России и комфортное городское пространство. Приходите на выставки и лекции, встречайтесь с друзьями и с искусством.</p></div> <div class=\"more\" data-v-a28c28c6><p class=\"flex pb-4\" data-v-a28c28c6><img"+(_vm._ssrAttr("src",__webpack_require__(44)))+" alt class=\"mr-1\" data-v-a28c28c6><span data-v-a28c28c6>подробнее</span><img"+(_vm._ssrAttr("src",__webpack_require__(45)))+" alt class=\"ml-1\" data-v-a28c28c6></p></div></div> "),_vm._ssrNode("<div class=\"museum-block-content-img\" data-v-a28c28c6>","</div>",[_vm._ssrNode("<div data-v-a28c28c6></div> "),_vm._ssrNode("<div data-v-a28c28c6>","</div>",[_c('Galleria')],1),_vm._ssrNode(" <div class=\"flex items-center justify-between w-full pb-3\" data-v-a28c28c6><p class=\"pagination-max\" data-v-a28c28c6><span class=\"page active\" data-v-a28c28c6>1</span> <span class=\"page\" data-v-a28c28c6>2</span> <span class=\"page\" data-v-a28c28c6>3</span></p> <p class=\"pagination-min\" data-v-a28c28c6><span class=\"page active\" data-v-a28c28c6>1</span> <span class=\"page\" data-v-a28c28c6>/</span> <span class=\"page\" data-v-a28c28c6>3</span></p> <img"+(_vm._ssrAttr("src",__webpack_require__(120)))+" alt class=\"icon\" data-v-a28c28c6></div>")],2)],2)],2),_vm._ssrNode(" <div class=\"poster-room\" data-v-a28c28c6><div class=\"poster-room-header line-block\" data-v-a28c28c6><p class=\"poster-room-header-title\" data-v-a28c28c6>афиша событий</p> <div class=\"line-dn\" data-v-a28c28c6></div> <p class=\"poster-room-header-more\" data-v-a28c28c6><img"+(_vm._ssrAttr("src",__webpack_require__(44)))+" alt class=\"mr-1\" data-v-a28c28c6><span data-v-a28c28c6>все события</span><img"+(_vm._ssrAttr("src",__webpack_require__(45)))+" alt class=\"ml-1\" data-v-a28c28c6></p></div> <div class=\"poster-room-content\" data-v-a28c28c6><div class=\"poster-room-content-block pr-5 poster-room-content-border-right min-block\" data-v-a28c28c6><div class=\"poster-room-content-block-title\" data-v-a28c28c6><div class=\"poster-room-content-block-title-text\" data-v-a28c28c6><p data-v-a28c28c6>1–21 ДЕК</p> <p data-v-a28c28c6>Кинопоказ</p></div> <div class=\"poster-room-content-block-title-authnr flex\" data-v-a28c28c6><img"+(_vm._ssrAttr("src",__webpack_require__(47)))+" alt class=\"mr-2\" data-v-a28c28c6> <p data-v-a28c28c6>Кинотеатр «Киносфера»</p> <p data-v-a28c28c6>Калининград</p></div></div> <div class=\"poster-room-content-block-body\" data-v-a28c28c6><div class=\"poster-room-content-block-img\" data-v-a28c28c6><img"+(_vm._ssrAttr("src",__webpack_require__(106)))+" alt data-v-a28c28c6></div> <div class=\"poster-room-content-block-title-authnrMini\" data-v-a28c28c6><img"+(_vm._ssrAttr("src",__webpack_require__(47)))+" alt class=\"mr-2\" data-v-a28c28c6> <p data-v-a28c28c6>Кинотеатр «Киносфера» </p> <p data-v-a28c28c6>Калининград</p></div> <div class=\"poster-room-content-block-description\" data-v-a28c28c6><p data-v-a28c28c6>Замки <span class=\"william\" data-v-a28c28c6>ЛуАры</span></p></div></div></div> <div class=\"poster-room-content-block pl-5\" data-v-a28c28c6><div class=\"poster-room-content-block-title\" data-v-a28c28c6><div class=\"poster-room-content-block-title-text\" data-v-a28c28c6><p data-v-a28c28c6>14–28 ДЕК</p> <p data-v-a28c28c6>Лекции</p></div> <div class=\"poster-room-content-block-title-authnr flex\" data-v-a28c28c6><img"+(_vm._ssrAttr("src",__webpack_require__(47)))+" alt class=\"mr-2\" data-v-a28c28c6> <p data-v-a28c28c6>Инженерный корпус</p></div></div> <div class=\"poster-room-content-block-body\" data-v-a28c28c6><div class=\"poster-room-content-block-img\" data-v-a28c28c6><img"+(_vm._ssrAttr("src",__webpack_require__(132)))+" alt data-v-a28c28c6></div> <div class=\"poster-room-content-block-description\" data-v-a28c28c6><p data-v-a28c28c6>Мифы и легенды в произведениях <span class=\"william\" data-v-a28c28c6>русских художников</span></p></div> <div class=\"poster-room-content-block-title-authnrMini\" data-v-a28c28c6><img"+(_vm._ssrAttr("src",__webpack_require__(47)))+" alt class=\"mr-2\" data-v-a28c28c6> <p data-v-a28c28c6>Инженерный корпус</p></div></div></div></div> <div class=\"poster-room-content\" data-v-a28c28c6><div class=\"poster-room-content-block pr-5 poster-room-content-border-right min-block\" data-v-a28c28c6><div class=\"poster-room-content-block-title\" data-v-a28c28c6><div class=\"poster-room-content-block-title-text\" data-v-a28c28c6><p data-v-a28c28c6>1 ДЕК 2020–14 ЯНВ 2021 </p> <p data-v-a28c28c6>выставка</p></div> <div class=\"poster-room-content-block-title-authnr flex\" data-v-a28c28c6><img"+(_vm._ssrAttr("src",__webpack_require__(47)))+" alt class=\"mr-2\" data-v-a28c28c6> <p data-v-a28c28c6>галерея A1–one каунас</p></div></div> <div class=\"poster-room-content-block-body\" data-v-a28c28c6><div class=\"poster-room-content-block-img\" data-v-a28c28c6><img"+(_vm._ssrAttr("src",__webpack_require__(133)))+" alt data-v-a28c28c6></div> <div class=\"poster-room-content-block-description\" data-v-a28c28c6><p data-v-a28c28c6>Вильямс П.В. <span class=\"william\" data-v-a28c28c6>история одной работы</span></p></div> <div class=\"poster-room-content-block-title-authnrMini\" data-v-a28c28c6><img"+(_vm._ssrAttr("src",__webpack_require__(47)))+" alt class=\"mr-2\" data-v-a28c28c6> <p data-v-a28c28c6>галерея A1–one каунас</p></div></div></div> <div class=\"poster-room-content-block pr-5 pl-5 poster-room-content-border-right\" data-v-a28c28c6><div class=\"poster-room-content-block-title\" data-v-a28c28c6><div class=\"poster-room-content-block-title-text\" data-v-a28c28c6><p data-v-a28c28c6>1–31 ЯНВ 2021</p> <p data-v-a28c28c6>Лекции</p></div> <div class=\"poster-room-content-block-title-authnr flex\" data-v-a28c28c6><img"+(_vm._ssrAttr("src",__webpack_require__(47)))+" alt class=\"mr-2\" data-v-a28c28c6> <p data-v-a28c28c6>Инженерный корпус</p></div></div> <div class=\"poster-room-content-block-body\" data-v-a28c28c6><div class=\"poster-room-content-block-img\" data-v-a28c28c6><img"+(_vm._ssrAttr("src",__webpack_require__(134)))+" alt data-v-a28c28c6></div> <div class=\"poster-room-content-block-description\" data-v-a28c28c6><p data-v-a28c28c6>«Маленький человек» Кабакова<span class=\"william\" data-v-a28c28c6> и русская живопись XIX века</span></p></div> <div class=\"poster-room-content-block-title-authnrMini\" data-v-a28c28c6><img"+(_vm._ssrAttr("src",__webpack_require__(47)))+" alt class=\"mr-2\" data-v-a28c28c6> <p data-v-a28c28c6>Инженерный корпус</p></div></div></div> <div class=\"poster-room-content-block pr-5 pl-5\" data-v-a28c28c6><div class=\"poster-room-content-block-title\" data-v-a28c28c6><div class=\"poster-room-content-block-title-text\" data-v-a28c28c6><p data-v-a28c28c6>1 ЯНВ–31 ФЕВ 2021 </p> <p data-v-a28c28c6>выставка</p></div> <div class=\"poster-room-content-block-title-authnr flex\" data-v-a28c28c6><img"+(_vm._ssrAttr("src",__webpack_require__(47)))+" alt class=\"mr-2\" data-v-a28c28c6> <p data-v-a28c28c6>Музей Янтаря, Калининград</p></div></div> <div class=\"poster-room-content-block-body\" data-v-a28c28c6><div class=\"poster-room-content-block-img\" data-v-a28c28c6><img"+(_vm._ssrAttr("src",__webpack_require__(135)))+" alt data-v-a28c28c6></div> <div class=\"poster-room-content-block-description\" data-v-a28c28c6><p data-v-a28c28c6>фотография во времена <span class=\"william\" data-v-a28c28c6>самоизоляции</span></p></div> <div class=\"poster-room-content-block-title-authnrMini\" data-v-a28c28c6><img"+(_vm._ssrAttr("src",__webpack_require__(47)))+" alt class=\"mr-2\" data-v-a28c28c6> <p data-v-a28c28c6>Музей Янтаря, Калининград</p></div></div></div> <div class=\"all-events\" data-v-a28c28c6><p class=\"flex \" data-v-a28c28c6><img"+(_vm._ssrAttr("src",__webpack_require__(44)))+" alt class=\"mr-1\" data-v-a28c28c6> <span data-v-a28c28c6>все события</span> <img"+(_vm._ssrAttr("src",__webpack_require__(45)))+" alt class=\"ml-1\" data-v-a28c28c6></p></div></div></div> <div class=\"virtual-tour\" data-v-a28c28c6><div class=\"virtual-tour-title\" data-v-a28c28c6><p data-v-a28c28c6>виртуальный тур по музею</p></div> <div class=\"virtual-tour-content\" data-v-a28c28c6><div class=\"img\" data-v-a28c28c6><p class=\"flex elem\" data-v-a28c28c6><img"+(_vm._ssrAttr("src",__webpack_require__(42)))+" alt class=\"mr-1\" data-v-a28c28c6> <span data-v-a28c28c6>прогуляться</span> <img"+(_vm._ssrAttr("src",__webpack_require__(43)))+" alt class=\"ml-1\" data-v-a28c28c6></p></div></div> <div data-v-a28c28c6></div></div> <div class=\"education\" data-v-a28c28c6><div class=\"education-title\" data-v-a28c28c6><p data-v-a28c28c6>ОБУЧЕНИЕ</p></div> <div class=\"education-content\" data-v-a28c28c6><div data-v-a28c28c6><p data-v-a28c28c6>Приходите учиться!</p> <p data-v-a28c28c6>Подготовка кураторов и арт-менеджеров — часть нашей миссии по культурному развитию региона. Программа подходит для новичков и для тех, кто хочет вырасти в профессии. <span data-v-a28c28c6>Дадим сильную теорию</span> отработаем ее на практике в лучших музеях страны и глубоко погрузимся в специфику работы в сфере искусства.</p></div> <img"+(_vm._ssrAttr("src",__webpack_require__(136)))+" alt data-v-a28c28c6></div> <div class=\"education-footer\" data-v-a28c28c6><div data-v-a28c28c6><p class=\"flex \" data-v-a28c28c6><img"+(_vm._ssrAttr("src",__webpack_require__(44)))+" alt class=\"mr-1\" data-v-a28c28c6><span data-v-a28c28c6>о программе</span><img"+(_vm._ssrAttr("src",__webpack_require__(45)))+" alt class=\"ml-1\" data-v-a28c28c6></p></div> <div class=\"education-footer-border\" data-v-a28c28c6><p class=\"flex \" data-v-a28c28c6><img"+(_vm._ssrAttr("src",__webpack_require__(44)))+" alt class=\"mr-1\" data-v-a28c28c6><span data-v-a28c28c6>расписание</span><img"+(_vm._ssrAttr("src",__webpack_require__(45)))+" alt class=\"ml-1\" data-v-a28c28c6></p></div> <div data-v-a28c28c6><p class=\"flex \" data-v-a28c28c6><img"+(_vm._ssrAttr("src",__webpack_require__(44)))+" alt class=\"mr-1\" data-v-a28c28c6><span data-v-a28c28c6>материалы</span><img"+(_vm._ssrAttr("src",__webpack_require__(45)))+" alt class=\"ml-1\" data-v-a28c28c6></p></div></div></div> <div class=\"news\" data-v-a28c28c6><div class=\"poster-room-header line-block\" data-v-a28c28c6><p class=\"poster-room-header-title\" data-v-a28c28c6>Новости</p> <div class=\"line-dn\" data-v-a28c28c6></div> <p class=\"poster-room-header-more\" data-v-a28c28c6><img"+(_vm._ssrAttr("src",__webpack_require__(44)))+" alt class=\"mr-1\" data-v-a28c28c6><span data-v-a28c28c6>все новости</span><img"+(_vm._ssrAttr("src",__webpack_require__(45)))+" alt class=\"ml-1\" data-v-a28c28c6></p></div> <div class=\"news-content\" data-v-a28c28c6><span class=\"left\" data-v-a28c28c6><img"+(_vm._ssrAttr("src",__webpack_require__(137)))+" alt data-v-a28c28c6></span> <span class=\"right\" data-v-a28c28c6><img"+(_vm._ssrAttr("src",__webpack_require__(138)))+" alt data-v-a28c28c6></span> <div class=\"news-content-swiper news-content-swiper-border-r pr-5\" data-v-a28c28c6><div class=\"news-content-swiper-title\" data-v-a28c28c6><p data-v-a28c28c6>17 окт</p> <p data-v-a28c28c6>музей</p></div> <div class=\"news-content-swiper-content\" data-v-a28c28c6><img"+(_vm._ssrAttr("src",__webpack_require__(46)))+" alt data-v-a28c28c6></div> <div class=\"title\" data-v-a28c28c6><p data-v-a28c28c6>ДОМ-МУЗЕЙ ВИКТОРА ВАСНЕЦОВА</p></div> <div class=\"text\" data-v-a28c28c6><p data-v-a28c28c6>Это многообразие связано и с особенностями каждой отдельной исторической эпохи, и с процессами.</p></div></div> <div class=\"news-content-swiper pl-5\" data-v-a28c28c6><div class=\"news-content-swiper-title\" data-v-a28c28c6><p data-v-a28c28c6>17 окт</p> <p data-v-a28c28c6>ход строительства</p></div> <div class=\"news-content-swiper-content\" data-v-a28c28c6><img"+(_vm._ssrAttr("src",__webpack_require__(107)))+" alt data-v-a28c28c6></div> <div class=\"title\" data-v-a28c28c6><p data-v-a28c28c6>ЗАЛОЖЕН ФУНДАМЕНТ ЗДАНИЯ МУЗЕЯ</p></div> <div class=\"text\" data-v-a28c28c6><p data-v-a28c28c6>Лекция посвящена эволюции понимания задач цвета в живописи и многообразию подходов к колориту.</p></div></div></div> <div class=\"all-events\" data-v-a28c28c6><p class=\"flex \" data-v-a28c28c6><img"+(_vm._ssrAttr("src",__webpack_require__(44)))+" alt class=\"mr-1\" data-v-a28c28c6><span data-v-a28c28c6>все новости</span><img"+(_vm._ssrAttr("src",__webpack_require__(45)))+" alt class=\"ml-1\" data-v-a28c28c6></p></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Main.vue?vue&type=template&id=a28c28c6&scoped=true&

// EXTERNAL MODULE: ./components/Galleria.vue + 4 modules
var Galleria = __webpack_require__(111);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Galleria: Galleria["default"]
  } // mounted() {
  //   let canvas = document.getElementById('virtual-tour-play');
  //   if (canvas.getContext){
  //     let ctx = canvas.getContext('2d');
  //     ctx.beginPath();
  //     ctx.fillStyle = "#FFFFFF";
  //     ctx.strokeStyle = '#FFFFFF';
  //     ctx.moveTo(canvas.width, canvas.hidden);
  //     ctx.lineTo(canvas.width, 150);
  //     ctx.lineTo(0,80);
  //     ctx.fillText("( ПРОГУЛЯТЬСЯ )",150,140);
  //     ctx.closePath();
  //     ctx.stroke();
  //   }
  // }

});
// CONCATENATED MODULE: ./components/Main.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Mainvue_type_script_lang_js_ = (Mainvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Main.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(139)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Mainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a28c28c6",
  "b78dd388"
  
)

/* harmony default export */ var Main = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Galleria: __webpack_require__(111).default})


/***/ }),

/***/ 42:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDggMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNMC44ODg2MTMgMTAuMjM1QzAuODg4NjEzIDEyLjUgMS42OTg2MSAxNC40NjUgMy4zMzM2MSAxNi4xNkMzLjQwODYxIDE2LjIzNSAzLjQ4MzYxIDE2LjIzNSAzLjU1ODYxIDE2LjE2TDMuNjYzNjEgMTYuMDdDMy43Mzg2MSAxNS45OTUgMy43Mzg2MSAxNS45MzUgMy42OTM2MSAxNS44NkMyLjQzMzYxIDE0LjI4NSAxLjc4ODYxIDEyLjMyIDEuNzg4NjEgMTAuMjk1QzEuNzg4NjEgNi4wOTUgNC4yOTM2MSAyLjk3NSA3LjE4ODYxIDEuNEM3LjI5MzYxIDEuMzU1IDcuMzIzNjEgMS4yOCA3LjI3ODYxIDEuMTc1TDcuMjE4NjEgMS4wNTVDNy4xNzM2MSAwLjk2NDk5OSA3LjExMzYxIDAuOTQ5OTk5IDcuMDA4NjEgMC45OTVDMy43Njg2MSAyLjQzNSAwLjg4ODYxMyA1LjcyIDAuODg4NjEzIDEwLjIzNVoiIGZpbGw9IndoaXRlIi8+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ 43:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDggMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNNy4zMTczNCA2Ljk1QzcuMzE3MzQgNC42ODUgNi41MDczNCAyLjcyIDQuODcyMzQgMS4wMjVDNC43OTczNCAwLjk0OTk5OSA0LjcyMjM0IDAuOTQ5OTk5IDQuNjQ3MzQgMS4wMjVMNC41NDIzNCAxLjExNUM0LjQ2NzM0IDEuMTkgNC40NTIzNCAxLjI1IDQuNTI3MzQgMS4zMjVDNS43NzIzNCAyLjkgNi40MTczNCA0Ljg2NSA2LjQxNzM0IDYuOTA1QzYuNDE3MzQgMTEuMTA1IDMuOTEyMzQgMTQuMjI1IDEuMDE3MzQgMTUuNzg1QzAuOTEyMzQ0IDE1Ljg0NSAwLjg4MjM0NCAxNS45MiAwLjkyNzM0NCAxNi4wMjVMMC45ODczNDQgMTYuMTQ1QzEuMDMyMzQgMTYuMjUgMS4wNzczNCAxNi4yNSAxLjE5NzM0IDE2LjIwNUM0LjQzNzM0IDE0Ljc2NSA3LjMxNzM0IDExLjQ5NSA3LjMxNzM0IDYuOTVaIiBmaWxsPSJ3aGl0ZSIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ 44:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDggMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNMC44ODg2MTMgMTAuMjM1QzAuODg4NjEzIDEyLjUgMS42OTg2MSAxNC40NjUgMy4zMzM2MSAxNi4xNkMzLjQwODYxIDE2LjIzNSAzLjQ4MzYxIDE2LjIzNSAzLjU1ODYxIDE2LjE2TDMuNjYzNjEgMTYuMDdDMy43Mzg2MSAxNS45OTUgMy43Mzg2MSAxNS45MzUgMy42OTM2MSAxNS44NkMyLjQzMzYxIDE0LjI4NSAxLjc4ODYxIDEyLjMyIDEuNzg4NjEgMTAuMjk1QzEuNzg4NjEgNi4wOTUgNC4yOTM2MSAyLjk3NSA3LjE4ODYxIDEuNEM3LjI5MzYxIDEuMzU1IDcuMzIzNjEgMS4yOCA3LjI3ODYxIDEuMTc1TDcuMjE4NjEgMS4wNTVDNy4xNzM2MSAwLjk2NDk5OSA3LjExMzYxIDAuOTQ5OTk5IDcuMDA4NjEgMC45OTVDMy43Njg2MSAyLjQzNSAwLjg4ODYxMyA1LjcyIDAuODg4NjEzIDEwLjIzNVoiIGZpbGw9IiMyMjFGMUEiLz4NCjwvc3ZnPg0K"

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDggMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNNy4zMTczNCA2Ljk1QzcuMzE3MzQgNC42ODUgNi41MDczNCAyLjcyIDQuODcyMzQgMS4wMjVDNC43OTczNCAwLjk0OTk5OSA0LjcyMjM0IDAuOTQ5OTk5IDQuNjQ3MzQgMS4wMjVMNC41NDIzNCAxLjExNUM0LjQ2NzM0IDEuMTkgNC40NTIzNCAxLjI1IDQuNTI3MzQgMS4zMjVDNS43NzIzNCAyLjkgNi40MTczNCA0Ljg2NSA2LjQxNzM0IDYuOTA1QzYuNDE3MzQgMTEuMTA1IDMuOTEyMzQgMTQuMjI1IDEuMDE3MzQgMTUuNzg1QzAuOTEyMzQ0IDE1Ljg0NSAwLjg4MjM0NCAxNS45MiAwLjkyNzM0NCAxNi4wMjVMMC45ODczNDQgMTYuMTQ1QzEuMDMyMzQgMTYuMjUgMS4wNzczNCAxNi4yNSAxLjE5NzM0IDE2LjIwNUM0LjQzNzM0IDE0Ljc2NSA3LjMxNzM0IDExLjQ5NSA3LjMxNzM0IDYuOTVaIiBmaWxsPSIjMjIxRjFBIi8+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Pic-fit3.d22123e.jpg";

/***/ }),

/***/ 47:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDYgMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8Y2lyY2xlIGN4PSIzIiBjeT0iMyIgcj0iMyIgZmlsbD0iIzIxMUYxQSIvPg0KPHBhdGggZD0iTTMgNVYxMiIgc3Ryb2tlPSIjMjExRjFBIi8+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Untitled-removebg-preview.16f9660.png";

/***/ })

};;
//# sourceMappingURL=main.js.map