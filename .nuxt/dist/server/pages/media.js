exports.ids = [17,1,3];
exports.modules = {

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(142);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("75667a1d", content, true, context)
};

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_media_vue_vue_type_style_index_0_id_c96474ca_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(112);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_media_vue_vue_type_style_index_0_id_c96474ca_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_media_vue_vue_type_style_index_0_id_c96474ca_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_media_vue_vue_type_style_index_0_id_c96474ca_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_media_vue_vue_type_style_index_0_id_c96474ca_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(38);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(89);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.bg-yellow[data-v-c96474ca]{\n  background:#ffdd7c\n}\n.media[data-v-c96474ca]{\n  padding-top:160px\n}\n.media-header[data-v-c96474ca]{\n  display:flex;\n  flex-direction:column;\n  padding:20px\n}\n.media-header-title[data-v-c96474ca]{\n  font-style:normal;\n  font-weight:400;\n  font-size:50px;\n  line-height:50px;\n  text-transform:uppercase;\n  color:#211f1a;\n  margin-bottom:40px\n}\n@media(max-width:700px){\n.media-header-title[data-v-c96474ca]{\n    font-size:30px;\n    line-height:32px\n}\n}\n.media-header-filter[data-v-c96474ca]{\n  display:flex;\n  justify-content:flex-start\n}\n.media-header-filter-left[data-v-c96474ca]{\n  display:flex\n}\n.media-header-filter-left span[data-v-c96474ca]{\n  margin:5px\n}\n.media-header-filter-left .item[data-v-c96474ca]{\n  cursor:pointer;\n  display:flex;\n  align-items:center;\n  margin-right:20px;\n  position:relative;\n  font-style:normal;\n  font-weight:400;\n  font-size:15px;\n  line-height:20px;\n  text-align:right;\n  text-transform:uppercase;\n  color:#221f1a\n}\n@media(max-width:700px){\n.media-header-filter-left .item[data-v-c96474ca]{\n    margin-right:5px;\n    font-size:13px;\n    line-height:15px\n}\n}\n.media-header-filter-left .item img[data-v-c96474ca]{\n  margin:5px\n}\n.media-header-filter-left .item-nav[data-v-c96474ca]{\n  padding:20px;\n  position:absolute;\n  text-align:left;\n  cursor:pointer;\n  background:#fff;\n  border:1px solid #221f1a;\n  box-sizing:border-box;\n  top:35px\n}\n.media-header-filter-left .item-nav-text[data-v-c96474ca]{\n  margin-bottom:15px;\n  white-space:nowrap\n}\n.media-header-filter-left .item-nav-text[data-v-c96474ca]:hover{\n  opacity:.5\n}\n.media-header-filter-left .item-nav-filter p[data-v-c96474ca]{\n  white-space:nowrap\n}\n.media-header-filter-left .item-nav-filter-container[data-v-c96474ca]{\n  display:block;\n  position:relative;\n  padding-left:35px;\n  margin-bottom:12px;\n  cursor:pointer;\n  font-size:22px;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  -ms-user-select:none;\n  user-select:none\n}\n.media-header-filter-left .item-nav-filter-container input[data-v-c96474ca]{\n  position:absolute;\n  opacity:0;\n  cursor:pointer;\n  height:0;\n  width:0\n}\n.media-header-filter-left .item-nav-filter .checkmark[data-v-c96474ca]{\n  position:absolute;\n  top:-7px;\n  left:0;\n  height:20px;\n  width:20px;\n  background-color:#fff;\n  border:1px solid #000\n}\n.media-header-filter-left .item-nav-filter-container:hover input~.checkmark[data-v-c96474ca],.media-header-filter-left .item-nav-filter-container input:checked~.checkmark[data-v-c96474ca]{\n  background-color:#fff;\n  border:1px solid #000\n}\n.media-header-filter-left .item-nav-filter .checkmark[data-v-c96474ca]:after{\n  content:\"\";\n  position:absolute;\n  display:none\n}\n.media-header-filter-left .item-nav-filter-container input:checked~.checkmark[data-v-c96474ca]:after{\n  display:block\n}\n.media-header-filter-left .item-nav-filter-container .checkmark[data-v-c96474ca]:after{\n  left:7px;\n  top:2px;\n  width:6px;\n  height:10px;\n  border:solid #000;\n  border-width:0 1px 1px 0;\n  transform:rotate(45deg)\n}\n.media-header-filter-left .item-nav-filter-title[data-v-c96474ca]{\n  display:flex;\n  align-items:center;\n  margin-bottom:15px\n}\n.media-header-filter-left .item-nav-filter-content[data-v-c96474ca]{\n  margin-left:20px\n}\n.media-header-filter-left .item-nav-filter-content-item[data-v-c96474ca]{\n  margin-bottom:15px\n}\n.media-header-filter-right[data-v-c96474ca]{\n  display:flex\n}\n.media-header-filter-right span[data-v-c96474ca]{\n  margin:5px\n}\n.media-header-filter-right .active[data-v-c96474ca]{\n  opacity:.7\n}\n.media-header-filter-right .item[data-v-c96474ca]{\n  display:flex;\n  align-items:center;\n  margin-right:20px;\n  font-style:normal;\n  font-weight:400;\n  font-size:15px;\n  line-height:20px;\n  text-transform:uppercase;\n  color:#221f1a;\n  cursor:pointer\n}\n.media-header-filter-right .item img[data-v-c96474ca]{\n  margin-right:5px\n}\n.media-content[data-v-c96474ca]{\n  display:flex;\n  flex-wrap:wrap\n}\n.media-content-item[data-v-c96474ca]:first-child,.media-content-item[data-v-c96474ca]:nth-child(4),.media-content-item[data-v-c96474ca]:nth-child(7),.media-content-item[data-v-c96474ca]:nth-child(10){\n  margin-left:20px;\n  padding-right:20px;\n  position:relative\n}\n.media-content-item[data-v-c96474ca]:first-child:after,.media-content-item[data-v-c96474ca]:nth-child(4):after,.media-content-item[data-v-c96474ca]:nth-child(7):after,.media-content-item[data-v-c96474ca]:nth-child(10):after{\n  display:block;\n  content:\"\";\n  top:0;\n  right:-5px;\n  width:5px;\n  height:20px;\n  position:absolute;\n  background:#fff\n}\n.media-content-item[data-v-c96474ca]:first-child:before,.media-content-item[data-v-c96474ca]:nth-child(4):before,.media-content-item[data-v-c96474ca]:nth-child(7):before,.media-content-item[data-v-c96474ca]:nth-child(10):before{\n  display:block;\n  content:\"\";\n  bottom:0;\n  right:-5px;\n  width:5px;\n  height:20px;\n  position:absolute;\n  background:#fff\n}\n.media-content-item[data-v-c96474ca]:nth-child(2),.media-content-item[data-v-c96474ca]:nth-child(5),.media-content-item[data-v-c96474ca]:nth-child(8),.media-content-item[data-v-c96474ca]:nth-child(11){\n  padding-left:20px;\n  padding-right:20px;\n  position:relative\n}\n.media-content-item[data-v-c96474ca]:nth-child(2):after,.media-content-item[data-v-c96474ca]:nth-child(5):after,.media-content-item[data-v-c96474ca]:nth-child(8):after,.media-content-item[data-v-c96474ca]:nth-child(11):after{\n  display:block;\n  content:\"\";\n  top:0;\n  right:-5px;\n  width:5px;\n  height:20px;\n  position:absolute;\n  background:#fff\n}\n.media-content-item[data-v-c96474ca]:nth-child(2):before,.media-content-item[data-v-c96474ca]:nth-child(5):before,.media-content-item[data-v-c96474ca]:nth-child(8):before,.media-content-item[data-v-c96474ca]:nth-child(11):before{\n  display:block;\n  content:\"\";\n  bottom:0;\n  right:-5px;\n  width:5px;\n  height:20px;\n  position:absolute;\n  background:#fff\n}\n.media-content-item[data-v-c96474ca]:nth-child(3),.media-content-item[data-v-c96474ca]:nth-child(6),.media-content-item[data-v-c96474ca]:nth-child(9),.media-content-item[data-v-c96474ca]:nth-child(12){\n  border-right:0;\n  padding-left:20px\n}\n@media(max-width:1040px){\n.media-content-item[data-v-c96474ca]:first-child,.media-content-item[data-v-c96474ca]:nth-child(3),.media-content-item[data-v-c96474ca]:nth-child(5),.media-content-item[data-v-c96474ca]:nth-child(7),.media-content-item[data-v-c96474ca]:nth-child(9),.media-content-item[data-v-c96474ca]:nth-child(11){\n    padding-right:20px;\n    margin-left:20px;\n    padding-left:0;\n    position:relative;\n    border-right:1px solid\n}\n.media-content-item[data-v-c96474ca]:first-child:after,.media-content-item[data-v-c96474ca]:nth-child(3):after,.media-content-item[data-v-c96474ca]:nth-child(5):after,.media-content-item[data-v-c96474ca]:nth-child(7):after,.media-content-item[data-v-c96474ca]:nth-child(9):after,.media-content-item[data-v-c96474ca]:nth-child(11):after{\n    display:block;\n    content:\"\";\n    top:0;\n    right:-5px;\n    width:5px;\n    height:20px;\n    position:absolute;\n    background:#fff\n}\n.media-content-item[data-v-c96474ca]:first-child:before,.media-content-item[data-v-c96474ca]:nth-child(3):before,.media-content-item[data-v-c96474ca]:nth-child(5):before,.media-content-item[data-v-c96474ca]:nth-child(7):before,.media-content-item[data-v-c96474ca]:nth-child(9):before,.media-content-item[data-v-c96474ca]:nth-child(11):before{\n    display:block;\n    content:\"\";\n    bottom:0;\n    right:-5px;\n    width:5px;\n    height:20px;\n    position:absolute;\n    background:#fff\n}\n}\n@media(max-width:1040px){\n.media-content-item[data-v-c96474ca]:nth-child(2),.media-content-item[data-v-c96474ca]:nth-child(4),.media-content-item[data-v-c96474ca]:nth-child(6),.media-content-item[data-v-c96474ca]:nth-child(8),.media-content-item[data-v-c96474ca]:nth-child(10),.media-content-item[data-v-c96474ca]:nth-child(12){\n    padding-left:20px;\n    padding-right:0;\n    border-right:0;\n    margin-left:0\n}\n}\n.media-content-item[data-v-c96474ca]{\n  display:flex;\n  flex-direction:column;\n  justify-content:space-between;\n  height:516px;\n  border-top:1px solid;\n  width:32.3%;\n  padding-top:20px;\n  border-right:1px solid\n}\n@media(max-width:1040px){\n.media-content-item[data-v-c96474ca]{\n    width:47.7%;\n    height:365px\n}\n}\n@media(max-width:690px){\n.media-content-item[data-v-c96474ca]{\n    width:100%;\n    padding-right:0!important;\n    padding-left:0!important;\n    margin-left:20px!important;\n    margin-right:20px;\n    border-right:0!important\n}\n}\n.media-content-item-input[data-v-c96474ca]{\n  display:flex;\n  justify-content:center\n}\n.media-content-item-input-block[data-v-c96474ca]{\n  display:flex;\n  border:1px solid;\n  align-items:center;\n  justify-content:space-between;\n  padding-right:20px;\n  padding-left:20px;\n  width:70%\n}\n@media(max-width:900px){\n.media-content-item-input-block[data-v-c96474ca]{\n    width:80%\n}\n}\n@media(max-width:680px){\n.media-content-item-input-block[data-v-c96474ca]{\n    width:90%\n}\n}\n.media-content-item-input-block input[data-v-c96474ca]{\n  height:60px;\n  background:#ffdd7c;\n  width:80%;\n  outline:none\n}\n.media-content-item-input-block button[data-v-c96474ca],.media-content-item-input-block input[data-v-c96474ca]{\n  font-style:normal;\n  font-weight:400;\n  font-size:15px;\n  line-height:20px;\n  text-transform:uppercase;\n  color:#221f1a\n}\n.media-content-item-input-block button[data-v-c96474ca]{\n  text-align:right;\n  white-space:nowrap\n}\n@media(max-width:900px){\n.media-content-item-input-block button[data-v-c96474ca]{\n    visibility:hidden;\n    position:relative\n}\n.media-content-item-input-block button[data-v-c96474ca]:after{\n    content:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    visibility:visible;\n    display:block;\n    position:absolute;\n    right:0;\n    top:0\n}\n}\n.media-content-item-email[data-v-c96474ca]{\n  height:516px\n}\n.media-content-item-text[data-v-c96474ca]{\n  display:flex;\n  justify-content:space-between;\n  font-style:normal;\n  font-weight:400;\n  font-size:15px;\n  line-height:20px;\n  text-transform:uppercase;\n  color:#221f1a\n}\n.media-content-item-text-author div[data-v-c96474ca]{\n  margin-left:20px\n}\n.media-content-item-text-author div p[data-v-c96474ca]{\n  margin-left:8px\n}\n.media-content-item-img[data-v-c96474ca],.media-content-item-title[data-v-c96474ca]{\n  display:flex;\n  justify-content:center\n}\n.media-content-item-title[data-v-c96474ca]{\n  font-style:normal;\n  font-weight:400;\n  font-size:30px;\n  line-height:32px;\n  text-align:center;\n  text-transform:uppercase;\n  color:#221f1a\n}\n@media(max-width:850px){\n.media-content-item-title[data-v-c96474ca]{\n    font-size:22px;\n    line-height:25px\n}\n}\n.media-content-item-title p[data-v-c96474ca]{\n  max-width:360px\n}\n.media-pagination[data-v-c96474ca]{\n  border-top:1px solid;\n  margin-right:20px;\n  margin-left:20px;\n  height:250px;\n  padding:20px 0;\n  display:flex;\n  flex-direction:column;\n  align-content:center;\n  justify-content:space-between\n}\n.media-pagination-page[data-v-c96474ca]{\n  display:flex;\n  justify-content:flex-start\n}\n.media-pagination-page .active[data-v-c96474ca]{\n  opacity:.4\n}\n.media-pagination-page span[data-v-c96474ca]{\n  margin-right:12px;\n  font-style:normal;\n  font-weight:400;\n  font-size:18px;\n  line-height:26px;\n  text-align:right;\n  color:#221f1a\n}\n@media(max-width:650px){\n.media-pagination-page span[data-v-c96474ca]{\n    font-size:13px;\n    line-height:15px\n}\n}\n.media-pagination-page img[data-v-c96474ca]{\n  margin-left:12px\n}\n@media(max-width:650px){\n.media-pagination-page img[data-v-c96474ca]{\n    width:9px;\n    height:17px\n}\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/media.vue?vue&type=template&id=c96474ca&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Header',{ref:"header"}),_vm._ssrNode(" <div class=\"media\" data-v-c96474ca><div class=\"media-header\" data-v-c96474ca><div class=\"media-header-title\" data-v-c96474ca><p data-v-c96474ca>медиа материалы</p></div> <div class=\"media-header-filter\" data-v-c96474ca><div class=\"media-header-filter-left \" data-v-c96474ca><div class=\"item\" data-v-c96474ca><img"+(_vm._ssrAttr("src",__webpack_require__(26)))+" alt class=\"mr-1\" data-v-c96474ca> <p data-v-c96474ca>все события</p> <img"+(_vm._ssrAttr("src",__webpack_require__(52)))+" alt data-v-c96474ca> <img"+(_vm._ssrAttr("src",__webpack_require__(27)))+" alt class=\"ml-1\" data-v-c96474ca> <div class=\"item-nav hidden\" data-v-c96474ca><p class=\"item-nav-text\" data-v-c96474ca>Все события</p> <p class=\"item-nav-text\" data-v-c96474ca>Выставки</p> <p class=\"item-nav-text\" data-v-c96474ca>Экскурсии</p> <p class=\"item-nav-text\" data-v-c96474ca>Лекции</p> <p class=\"item-nav-text\" data-v-c96474ca>Творческие мастерские</p> <p class=\"item-nav-text\" data-v-c96474ca>Концерты</p> <p class=\"item-nav-text\" data-v-c96474ca>Кино</p> <p class=\"item-nav-text\" data-v-c96474ca>ДискусCии</p> <p class=\"item-nav-text\" data-v-c96474ca>Конференции</p></div></div> <div class=\"item\" data-v-c96474ca><img"+(_vm._ssrAttr("src",__webpack_require__(26)))+" alt class=\"mr-1\" data-v-c96474ca> <p data-v-c96474ca>дата</p> <img"+(_vm._ssrAttr("src",__webpack_require__(52)))+" alt data-v-c96474ca> <img"+(_vm._ssrAttr("src",__webpack_require__(27)))+" alt class=\"ml-1\" data-v-c96474ca> <div class=\"item-nav hidden\" data-v-c96474ca><p class=\"item-nav-text\" data-v-c96474ca>Все события</p> <p class=\"item-nav-text\" data-v-c96474ca>Выставки</p> <p class=\"item-nav-text\" data-v-c96474ca>Экскурсии</p> <p class=\"item-nav-text\" data-v-c96474ca>Лекции</p> <p class=\"item-nav-text\" data-v-c96474ca>Творческие мастерские</p> <p class=\"item-nav-text\" data-v-c96474ca>Концерты</p> <p class=\"item-nav-text\" data-v-c96474ca>Кино</p> <p class=\"item-nav-text\" data-v-c96474ca>ДискусCии</p> <p class=\"item-nav-text\" data-v-c96474ca>Конференции</p></div></div></div></div></div> <div class=\"media-content\" data-v-c96474ca><div class=\"media-content-item\" data-v-c96474ca><div class=\"media-content-item-text\" data-v-c96474ca><div class=\"media-content-item-text-date\" data-v-c96474ca>20 окт</div> <div class=\"media-content-item-text-author flex\" data-v-c96474ca><div class=\"flex\" data-v-c96474ca><img"+(_vm._ssrAttr("src",__webpack_require__(55)))+" alt data-v-c96474ca> <p data-v-c96474ca><span data-v-c96474ca>40</span> <span data-v-c96474ca>фото</span></p></div> <div class=\"flex\" data-v-c96474ca><img"+(_vm._ssrAttr("src",__webpack_require__(56)))+" alt data-v-c96474ca> <p data-v-c96474ca><span data-v-c96474ca>2</span> <span data-v-c96474ca>видео</span></p></div></div></div> <div class=\"media-content-item-img\" data-v-c96474ca><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt data-v-c96474ca></div> <div class=\"media-content-item-title\" data-v-c96474ca><p data-v-c96474ca>ЗАЛОЖЕН ФУНДАМЕНТ ЗДАНИЯ МУЗЕЯ</p></div> <div data-v-c96474ca></div></div> <div class=\"media-content-item\" data-v-c96474ca><div class=\"media-content-item-text\" data-v-c96474ca><div class=\"media-content-item-text-date\" data-v-c96474ca>20 окт</div> <div class=\"media-content-item-text-author flex\" data-v-c96474ca><div class=\"flex\" data-v-c96474ca><img"+(_vm._ssrAttr("src",__webpack_require__(55)))+" alt data-v-c96474ca> <p data-v-c96474ca><span data-v-c96474ca>40</span> <span data-v-c96474ca>фото</span></p></div> <div class=\"flex\" data-v-c96474ca><img"+(_vm._ssrAttr("src",__webpack_require__(56)))+" alt data-v-c96474ca> <p data-v-c96474ca><span data-v-c96474ca>2</span> <span data-v-c96474ca>видео</span></p></div></div></div> <div class=\"media-content-item-img\" data-v-c96474ca><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt data-v-c96474ca></div> <div class=\"media-content-item-title\" data-v-c96474ca><p data-v-c96474ca>ЗАЛОЖЕН ФУНДАМЕНТ ЗДАНИЯ МУЗЕЯ</p></div> <div data-v-c96474ca></div></div> <div class=\"media-content-item\" data-v-c96474ca><div class=\"media-content-item-text\" data-v-c96474ca><div class=\"media-content-item-text-date\" data-v-c96474ca>20 окт</div> <div class=\"media-content-item-text-author flex\" data-v-c96474ca><div class=\"flex\" data-v-c96474ca><img"+(_vm._ssrAttr("src",__webpack_require__(55)))+" alt data-v-c96474ca> <p data-v-c96474ca><span data-v-c96474ca>40</span> <span data-v-c96474ca>фото</span></p></div> <div class=\"flex\" data-v-c96474ca><img"+(_vm._ssrAttr("src",__webpack_require__(56)))+" alt data-v-c96474ca> <p data-v-c96474ca><span data-v-c96474ca>2</span> <span data-v-c96474ca>видео</span></p></div></div></div> <div class=\"media-content-item-img\" data-v-c96474ca><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt data-v-c96474ca></div> <div class=\"media-content-item-title\" data-v-c96474ca><p data-v-c96474ca>ЗАЛОЖЕН ФУНДАМЕНТ ЗДАНИЯ МУЗЕЯ</p></div> <div data-v-c96474ca></div></div> <div class=\"media-content-item\" data-v-c96474ca><div class=\"media-content-item-text\" data-v-c96474ca><div class=\"media-content-item-text-date\" data-v-c96474ca>20 окт</div> <div class=\"media-content-item-text-author flex\" data-v-c96474ca><div class=\"flex\" data-v-c96474ca><img"+(_vm._ssrAttr("src",__webpack_require__(55)))+" alt data-v-c96474ca> <p data-v-c96474ca><span data-v-c96474ca>40</span> <span data-v-c96474ca>фото</span></p></div> <div class=\"flex\" data-v-c96474ca><img"+(_vm._ssrAttr("src",__webpack_require__(56)))+" alt data-v-c96474ca> <p data-v-c96474ca><span data-v-c96474ca>2</span> <span data-v-c96474ca>видео</span></p></div></div></div> <div class=\"media-content-item-img\" data-v-c96474ca><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt data-v-c96474ca></div> <div class=\"media-content-item-title\" data-v-c96474ca><p data-v-c96474ca>ЗАЛОЖЕН ФУНДАМЕНТ ЗДАНИЯ МУЗЕЯ</p></div> <div data-v-c96474ca></div></div> <div class=\"media-content-item\" data-v-c96474ca><div class=\"media-content-item-text\" data-v-c96474ca><div class=\"media-content-item-text-date\" data-v-c96474ca>20 окт</div> <div class=\"media-content-item-text-author flex\" data-v-c96474ca><div class=\"flex\" data-v-c96474ca><img"+(_vm._ssrAttr("src",__webpack_require__(55)))+" alt data-v-c96474ca> <p data-v-c96474ca><span data-v-c96474ca>40</span> <span data-v-c96474ca>фото</span></p></div> <div class=\"flex\" data-v-c96474ca><img"+(_vm._ssrAttr("src",__webpack_require__(56)))+" alt data-v-c96474ca> <p data-v-c96474ca><span data-v-c96474ca>2</span> <span data-v-c96474ca>видео</span></p></div></div></div> <div class=\"media-content-item-img\" data-v-c96474ca><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt data-v-c96474ca></div> <div class=\"media-content-item-title\" data-v-c96474ca><p data-v-c96474ca>ЗАЛОЖЕН ФУНДАМЕНТ ЗДАНИЯ МУЗЕЯ</p></div> <div data-v-c96474ca></div></div> <div class=\"media-content-item\" data-v-c96474ca><div class=\"media-content-item-text\" data-v-c96474ca><div class=\"media-content-item-text-date\" data-v-c96474ca>20 окт</div> <div class=\"media-content-item-text-author flex\" data-v-c96474ca><div class=\"flex\" data-v-c96474ca><img"+(_vm._ssrAttr("src",__webpack_require__(55)))+" alt data-v-c96474ca> <p data-v-c96474ca><span data-v-c96474ca>40</span> <span data-v-c96474ca>фото</span></p></div> <div class=\"flex\" data-v-c96474ca><img"+(_vm._ssrAttr("src",__webpack_require__(56)))+" alt data-v-c96474ca> <p data-v-c96474ca><span data-v-c96474ca>2</span> <span data-v-c96474ca>видео</span></p></div></div></div> <div class=\"media-content-item-img\" data-v-c96474ca><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt data-v-c96474ca></div> <div class=\"media-content-item-title\" data-v-c96474ca><p data-v-c96474ca>ЗАЛОЖЕН ФУНДАМЕНТ ЗДАНИЯ МУЗЕЯ</p></div> <div data-v-c96474ca></div></div> <div class=\"media-content-item\" data-v-c96474ca><div class=\"media-content-item-text\" data-v-c96474ca><div class=\"media-content-item-text-date\" data-v-c96474ca>20 окт</div> <div class=\"media-content-item-text-author flex\" data-v-c96474ca><div class=\"flex\" data-v-c96474ca><img"+(_vm._ssrAttr("src",__webpack_require__(55)))+" alt data-v-c96474ca> <p data-v-c96474ca><span data-v-c96474ca>40</span> <span data-v-c96474ca>фото</span></p></div> <div class=\"flex\" data-v-c96474ca><img"+(_vm._ssrAttr("src",__webpack_require__(56)))+" alt data-v-c96474ca> <p data-v-c96474ca><span data-v-c96474ca>2</span> <span data-v-c96474ca>видео</span></p></div></div></div> <div class=\"media-content-item-img\" data-v-c96474ca><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt data-v-c96474ca></div> <div class=\"media-content-item-title\" data-v-c96474ca><p data-v-c96474ca>ЗАЛОЖЕН ФУНДАМЕНТ ЗДАНИЯ МУЗЕЯ</p></div> <div data-v-c96474ca></div></div> <div class=\"media-content-item\" data-v-c96474ca><div class=\"media-content-item-text\" data-v-c96474ca><div class=\"media-content-item-text-date\" data-v-c96474ca>20 окт</div> <div class=\"media-content-item-text-author flex\" data-v-c96474ca><div class=\"flex\" data-v-c96474ca><img"+(_vm._ssrAttr("src",__webpack_require__(55)))+" alt data-v-c96474ca> <p data-v-c96474ca><span data-v-c96474ca>40</span> <span data-v-c96474ca>фото</span></p></div> <div class=\"flex\" data-v-c96474ca><img"+(_vm._ssrAttr("src",__webpack_require__(56)))+" alt data-v-c96474ca> <p data-v-c96474ca><span data-v-c96474ca>2</span> <span data-v-c96474ca>видео</span></p></div></div></div> <div class=\"media-content-item-img\" data-v-c96474ca><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt data-v-c96474ca></div> <div class=\"media-content-item-title\" data-v-c96474ca><p data-v-c96474ca>ЗАЛОЖЕН ФУНДАМЕНТ ЗДАНИЯ МУЗЕЯ</p></div> <div data-v-c96474ca></div></div> <div class=\"media-content-item\" data-v-c96474ca><div class=\"media-content-item-text\" data-v-c96474ca><div class=\"media-content-item-text-date\" data-v-c96474ca>20 окт</div> <div class=\"media-content-item-text-author flex\" data-v-c96474ca><div class=\"flex\" data-v-c96474ca><img"+(_vm._ssrAttr("src",__webpack_require__(55)))+" alt data-v-c96474ca> <p data-v-c96474ca><span data-v-c96474ca>40</span> <span data-v-c96474ca>фото</span></p></div> <div class=\"flex\" data-v-c96474ca><img"+(_vm._ssrAttr("src",__webpack_require__(56)))+" alt data-v-c96474ca> <p data-v-c96474ca><span data-v-c96474ca>2</span> <span data-v-c96474ca>видео</span></p></div></div></div> <div class=\"media-content-item-img\" data-v-c96474ca><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt data-v-c96474ca></div> <div class=\"media-content-item-title\" data-v-c96474ca><p data-v-c96474ca>ЗАЛОЖЕН ФУНДАМЕНТ ЗДАНИЯ МУЗЕЯ</p></div> <div data-v-c96474ca></div></div> <div class=\"media-content-item\" data-v-c96474ca><div class=\"media-content-item-text\" data-v-c96474ca><div class=\"media-content-item-text-date\" data-v-c96474ca>20 окт</div> <div class=\"media-content-item-text-author flex\" data-v-c96474ca><div class=\"flex\" data-v-c96474ca><img"+(_vm._ssrAttr("src",__webpack_require__(55)))+" alt data-v-c96474ca> <p data-v-c96474ca><span data-v-c96474ca>40</span> <span data-v-c96474ca>фото</span></p></div> <div class=\"flex\" data-v-c96474ca><img"+(_vm._ssrAttr("src",__webpack_require__(56)))+" alt data-v-c96474ca> <p data-v-c96474ca><span data-v-c96474ca>2</span> <span data-v-c96474ca>видео</span></p></div></div></div> <div class=\"media-content-item-img\" data-v-c96474ca><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt data-v-c96474ca></div> <div class=\"media-content-item-title\" data-v-c96474ca><p data-v-c96474ca>ЗАЛОЖЕН ФУНДАМЕНТ ЗДАНИЯ МУЗЕЯ</p></div> <div data-v-c96474ca></div></div> <div class=\"media-content-item\" data-v-c96474ca><div class=\"media-content-item-text\" data-v-c96474ca><div class=\"media-content-item-text-date\" data-v-c96474ca>20 окт</div> <div class=\"media-content-item-text-author flex\" data-v-c96474ca><div class=\"flex\" data-v-c96474ca><img"+(_vm._ssrAttr("src",__webpack_require__(55)))+" alt data-v-c96474ca> <p data-v-c96474ca><span data-v-c96474ca>40</span> <span data-v-c96474ca>фото</span></p></div> <div class=\"flex\" data-v-c96474ca><img"+(_vm._ssrAttr("src",__webpack_require__(56)))+" alt data-v-c96474ca> <p data-v-c96474ca><span data-v-c96474ca>2</span> <span data-v-c96474ca>видео</span></p></div></div></div> <div class=\"media-content-item-img\" data-v-c96474ca><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt data-v-c96474ca></div> <div class=\"media-content-item-title\" data-v-c96474ca><p data-v-c96474ca>ЗАЛОЖЕН ФУНДАМЕНТ ЗДАНИЯ МУЗЕЯ</p></div> <div data-v-c96474ca></div></div> <div class=\"media-content-item\" data-v-c96474ca><div class=\"media-content-item-text\" data-v-c96474ca><div class=\"media-content-item-text-date\" data-v-c96474ca>20 окт</div> <div class=\"media-content-item-text-author flex\" data-v-c96474ca><div class=\"flex\" data-v-c96474ca><img"+(_vm._ssrAttr("src",__webpack_require__(55)))+" alt data-v-c96474ca> <p data-v-c96474ca><span data-v-c96474ca>40</span> <span data-v-c96474ca>фото</span></p></div> <div class=\"flex\" data-v-c96474ca><img"+(_vm._ssrAttr("src",__webpack_require__(56)))+" alt data-v-c96474ca> <p data-v-c96474ca><span data-v-c96474ca>2</span> <span data-v-c96474ca>видео</span></p></div></div></div> <div class=\"media-content-item-img\" data-v-c96474ca><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt data-v-c96474ca></div> <div class=\"media-content-item-title\" data-v-c96474ca><p data-v-c96474ca>ЗАЛОЖЕН ФУНДАМЕНТ ЗДАНИЯ МУЗЕЯ</p></div> <div data-v-c96474ca></div></div></div> <div class=\"media-pagination line-block\" data-v-c96474ca><div class=\"media-pagination-page\" data-v-c96474ca><div class=\"flex\" data-v-c96474ca><span data-v-c96474ca>1</span> <span class=\"active\" data-v-c96474ca>2</span> <span data-v-c96474ca>3</span> <span data-v-c96474ca>4</span> <span data-v-c96474ca>...</span> <span data-v-c96474ca>10</span></div> <img"+(_vm._ssrAttr("src",__webpack_require__(69)))+" alt data-v-c96474ca></div> <div class=\"line-dn\" data-v-c96474ca></div> <div data-v-c96474ca></div></div></div> "),_c('Footer')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/media.vue?vue&type=template&id=c96474ca&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/media.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var mediavue_type_script_lang_js_ = ({
  name: "media"
});
// CONCATENATED MODULE: ./pages/media.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_mediavue_type_script_lang_js_ = (mediavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/media.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(141)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_mediavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "c96474ca",
  "86799dae"
  
)

/* harmony default export */ var media = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(31).default,Footer: __webpack_require__(39).default})


/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Pic-fit3.d22123e.jpg";

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDggMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNMC44ODg2MTMgMTAuMjM1QzAuODg4NjEzIDEyLjUgMS42OTg2MSAxNC40NjUgMy4zMzM2MSAxNi4xNkMzLjQwODYxIDE2LjIzNSAzLjQ4MzYxIDE2LjIzNSAzLjU1ODYxIDE2LjE2TDMuNjYzNjEgMTYuMDdDMy43Mzg2MSAxNS45OTUgMy43Mzg2MSAxNS45MzUgMy42OTM2MSAxNS44NkMyLjQzMzYxIDE0LjI4NSAxLjc4ODYxIDEyLjMyIDEuNzg4NjEgMTAuMjk1QzEuNzg4NjEgNi4wOTUgNC4yOTM2MSAyLjk3NSA3LjE4ODYxIDEuNEM3LjI5MzYxIDEuMzU1IDcuMzIzNjEgMS4yOCA3LjI3ODYxIDEuMTc1TDcuMjE4NjEgMS4wNTVDNy4xNzM2MSAwLjk2NDk5OSA3LjExMzYxIDAuOTQ5OTk5IDcuMDA4NjEgMC45OTVDMy43Njg2MSAyLjQzNSAwLjg4ODYxMyA1LjcyIDAuODg4NjEzIDEwLjIzNVoiIGZpbGw9IiMyMjFGMUEiLz4NCjwvc3ZnPg0K"

/***/ }),

/***/ 27:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDggMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNNy4zMTczNCA2Ljk1QzcuMzE3MzQgNC42ODUgNi41MDczNCAyLjcyIDQuODcyMzQgMS4wMjVDNC43OTczNCAwLjk0OTk5OSA0LjcyMjM0IDAuOTQ5OTk5IDQuNjQ3MzQgMS4wMjVMNC41NDIzNCAxLjExNUM0LjQ2NzM0IDEuMTkgNC40NTIzNCAxLjI1IDQuNTI3MzQgMS4zMjVDNS43NzIzNCAyLjkgNi40MTczNCA0Ljg2NSA2LjQxNzM0IDYuOTA1QzYuNDE3MzQgMTEuMTA1IDMuOTEyMzQgMTQuMjI1IDEuMDE3MzQgMTUuNzg1QzAuOTEyMzQ0IDE1Ljg0NSAwLjg4MjM0NCAxNS45MiAwLjkyNzM0NCAxNi4wMjVMMC45ODczNDQgMTYuMTQ1QzEuMDMyMzQgMTYuMjUgMS4wNzczNCAxNi4yNSAxLjE5NzM0IDE2LjIwNUM0LjQzNzM0IDE0Ljc2NSA3LjMxNzM0IDExLjQ5NSA3LjMxNzM0IDYuOTVaIiBmaWxsPSIjMjIxRjFBIi8+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDggMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNMC44ODg2MTMgMTAuMjM1QzAuODg4NjEzIDEyLjUgMS42OTg2MSAxNC40NjUgMy4zMzM2MSAxNi4xNkMzLjQwODYxIDE2LjIzNSAzLjQ4MzYxIDE2LjIzNSAzLjU1ODYxIDE2LjE2TDMuNjYzNjEgMTYuMDdDMy43Mzg2MSAxNS45OTUgMy43Mzg2MSAxNS45MzUgMy42OTM2MSAxNS44NkMyLjQzMzYxIDE0LjI4NSAxLjc4ODYxIDEyLjMyIDEuNzg4NjEgMTAuMjk1QzEuNzg4NjEgNi4wOTUgNC4yOTM2MSAyLjk3NSA3LjE4ODYxIDEuNEM3LjI5MzYxIDEuMzU1IDcuMzIzNjEgMS4yOCA3LjI3ODYxIDEuMTc1TDcuMjE4NjEgMS4wNTVDNy4xNzM2MSAwLjk2NDk5OSA3LjExMzYxIDAuOTQ5OTk5IDcuMDA4NjEgMC45OTVDMy43Njg2MSAyLjQzNSAwLjg4ODYxMyA1LjcyIDAuODg4NjEzIDEwLjIzNVoiIGZpbGw9IndoaXRlIi8+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDggMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNNy4zMTczNCA2Ljk1QzcuMzE3MzQgNC42ODUgNi41MDczNCAyLjcyIDQuODcyMzQgMS4wMjVDNC43OTczNCAwLjk0OTk5OSA0LjcyMjM0IDAuOTQ5OTk5IDQuNjQ3MzQgMS4wMjVMNC41NDIzNCAxLjExNUM0LjQ2NzM0IDEuMTkgNC40NTIzNCAxLjI1IDQuNTI3MzQgMS4zMjVDNS43NzIzNCAyLjkgNi40MTczNCA0Ljg2NSA2LjQxNzM0IDYuOTA1QzYuNDE3MzQgMTEuMTA1IDMuOTEyMzQgMTQuMjI1IDEuMDE3MzQgMTUuNzg1QzAuOTEyMzQ0IDE1Ljg0NSAwLjg4MjM0NCAxNS45MiAwLjkyNzM0NCAxNi4wMjVMMC45ODczNDQgMTYuMTQ1QzEuMDMyMzQgMTYuMjUgMS4wNzczNCAxNi4yNSAxLjE5NzM0IDE2LjIwNUM0LjQzNzM0IDE0Ljc2NSA3LjMxNzM0IDExLjQ5NSA3LjMxNzM0IDYuOTVaIiBmaWxsPSJ3aGl0ZSIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ 30:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTUiIHZpZXdCb3g9IjAgMCA1MCA1NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xNiAwSDBWNTVIMTZWMFoiIGZpbGw9IiNGRkREN0MiLz4NCjxwYXRoIGQ9Ik0zMiAxOEw1MCAwSDMyVjE4WiIgZmlsbD0iI0ZGREQ3QyIvPg0KPHBhdGggZD0iTTUwIDU1TDMyIDM3VjU1SDUwWiIgZmlsbD0iI0ZGREQ3QyIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=template&id=5d168664&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"w-full header-block",class:_vm.openMenu ? 'bg-dark menu' : _vm.bgcolor === 'yellow' ? 'bg-yellow': 'bg-white'},[_vm._ssrNode("<nav data-v-5d168664><div class=\"max-w-7lg mx-auto p-5\" data-v-5d168664><div class=\"relative flex items-center justify-between h-16\" data-v-5d168664><div class=\"flex-1 flex items-center justify-between\" data-v-5d168664><div class=\"flex-shrink-0 flex items-center nav-logo\" data-v-5d168664><svg width=\"50\" height=\"55\" viewBox=\"0 0 50 55\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" data-v-5d168664><path d=\"M16 0H0V55H16V0Z\""+(_vm._ssrAttr("fill",_vm.openMenu ? '#FFDD7C' : _vm.logoColor === 'black' ? '#221F1A' : '#FFDD7C'))+" data-v-5d168664></path> <path d=\"M32 18L50 0H32V18Z\""+(_vm._ssrAttr("fill",_vm.openMenu ? '#FFDD7C' : _vm.logoColor === 'black' ? '#221F1A' : '#FFDD7C'))+" data-v-5d168664></path> <path d=\"M50 55L32 37V55H50Z\""+(_vm._ssrAttr("fill",_vm.openMenu ? '#FFDD7C' : _vm.logoColor === 'black' ? '#221F1A' : '#FFDD7C'))+" data-v-5d168664></path></svg> <div class=\"ml-2 min-menu-text\" data-v-5d168664><p class=\"nav-title-logo\" data-v-5d168664>Третьяковская</p> <p class=\"nav-title-logo\" data-v-5d168664>галерея</p> <p class=\"nav-title-logo-mini\" data-v-5d168664>Запад</p></div></div> <div class=\"hidden sm:block sm:ml-6\" data-v-5d168664><div class=\"flex space-x-4\" data-v-5d168664><a href=\"#\" class=\"uppercase nav-title-menu whitespace-nowrap\" data-v-5d168664>Афиша</a> <a href=\"#\" class=\"uppercase nav-title-menu whitespace-nowrap\" data-v-5d168664>образование</a> <a href=\"#\" class=\"uppercase nav-title-menu whitespace-nowrap\" data-v-5d168664>о музее</a> <a href=\"#\" class=\"uppercase nav-title-menu whitespace-nowrap\" data-v-5d168664>новости</a> <a href=\"#\" class=\"uppercase nav-title-menu whitespace-nowrap\" data-v-5d168664>контакты</a></div></div> <div class=\"inset-y-0 right-0 flex items-center pr-2sm:ml-6 sm:pr-0\" data-v-5d168664>"+((!_vm.openMenu)?("<div class=\"ml-3\" data-v-5d168664><a class=\"flex cursor-pointer mr-5\" data-v-5d168664><img"+(_vm._ssrAttr("src",__webpack_require__(40)))+" alt data-v-5d168664></a></div>"):"<!---->")+" <div class=\"ml-3 hidden\" data-v-5d168664><div data-v-5d168664><a href=\"#\" class=\"nav-title\" data-v-5d168664>медиа</a></div></div> <div class=\"ml-3 relative flex nav-title hidden\" data-v-5d168664><img"+(_vm._ssrAttr("src",__webpack_require__(26)))+" alt class=\"mr-1\" data-v-5d168664> <div data-v-5d168664><a href=\"#\" data-v-5d168664>EN</a></div> <img"+(_vm._ssrAttr("src",__webpack_require__(27)))+" alt class=\"ml-1\" data-v-5d168664></div></div></div> <div class=\"flex items-center min ml-2\" data-v-5d168664><button type=\"button\" class=\"nav-button\" data-v-5d168664>"+((!_vm.openMenu)?("<img"+(_vm._ssrAttr("src",__webpack_require__(41)))+" alt data-v-5d168664>"):("<img"+(_vm._ssrAttr("src",__webpack_require__(42)))+" alt data-v-5d168664>"))+"</button></div></div></div> <div"+(_vm._ssrClass(null,!_vm.openMenu ? 'd-none' : ''))+" data-v-5d168664><div class=\"px-5 pt-2 pb-3 space-y-1 min-menu\" data-v-5d168664><a href=\"#\" class=\"uppercase nav-title-menu\" data-v-5d168664>Афиша</a> <a href=\"#\" class=\"uppercase nav-title-menu\" data-v-5d168664>образование</a> <a href=\"#\" class=\"uppercase nav-title-menu\" data-v-5d168664>о музее</a> <a href=\"#\" class=\"uppercase nav-title-menu\" data-v-5d168664>МЕДИА</a> <a href=\"#\" class=\"uppercase nav-title-menu\" data-v-5d168664>новости</a> <a href=\"#\" class=\"uppercase nav-title-menu\" data-v-5d168664>ПРОГРАММА ЛОЯЛЬНОСТИ</a> <a href=\"#\" class=\"uppercase nav-title-menu\" data-v-5d168664>контакты</a> <canvas id=\"header-arrow\" data-v-5d168664></canvas> <a href=\"#\" class=\"uppercase nav-title-menu flex items-center\" data-v-5d168664><img"+(_vm._ssrAttr("src",__webpack_require__(28)))+" alt class=\"mr-1 nav-title-menu-img\" data-v-5d168664> <span data-v-5d168664>EN</span> <img"+(_vm._ssrAttr("src",__webpack_require__(29)))+" alt class=\"ml-1 nav-title-menu-img\" data-v-5d168664></a></div></div></nav>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Header.vue?vue&type=template&id=5d168664&scoped=true&

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
    showMenu() {
      this.openMenu = !this.openMenu;
      const body = document.getElementsByTagName('body');
      body[0].style.overflow = 'hidden';
    },

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
  
  var style0 = __webpack_require__(43)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5d168664",
  "13697a50"
  
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(31).default})


/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("2d24c1f0", content, true, context)
};

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAxNSAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNC43MjI4IDMwVjE0LjY4NEgwLjVWOS44ODQzMkg0LjcyMjhWNi4zNDQ4M0M0LjcyMjggMi4yMzY4NiA3LjI3ODM2IDAgMTEuMDEyNSAwQzEyLjgwMTIgMCAxNC4zMzc1IDAuMTMxMTkgMTQuNzg1NyAwLjE4OTQ5N1Y0LjQ4Mjk5TDEyLjE5NjQgNC40ODQzMkMxMC4xNjYgNC40ODQzMiA5Ljc3MzE2IDUuNDMxOCA5Ljc3MzE2IDYuODIwNTdWOS44ODU2NEgxNC42MTU2TDEzLjk4NTIgMTQuNjg1NEg5Ljc3MzE2VjMwSDQuNzIyOFoiIGZpbGw9IndoaXRlIi8+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/insta.9d37843.svg";

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ok.7bdd5f5.svg";

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/vk.8debadd.svg";

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(46);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("7def0504", content, true, context)
};

/***/ }),

/***/ 38:
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

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=dc2943c6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"footer\" data-v-dc2943c6><div class=\"footer-block-logo\" data-v-dc2943c6><img"+(_vm._ssrAttr("src",__webpack_require__(30)))+" alt class=\"footer-block-logo-image\" data-v-dc2943c6> <canvas height=\"632\" id=\"footer-arrow\" data-v-dc2943c6></canvas></div> <div class=\"footer-block-info\" data-v-dc2943c6><div class=\"footer-block-info-title\" data-v-dc2943c6><a href data-v-dc2943c6>Афиша</a> <a href data-v-dc2943c6>образование</a> <a href data-v-dc2943c6>о музее</a> <a href data-v-dc2943c6>медиа</a></div> <div class=\"footer-block-info-social\" data-v-dc2943c6><a href data-v-dc2943c6><img"+(_vm._ssrAttr("src",__webpack_require__(33)))+" alt data-v-dc2943c6></a> <a href data-v-dc2943c6><img"+(_vm._ssrAttr("src",__webpack_require__(34)))+" alt data-v-dc2943c6></a> <a href data-v-dc2943c6><img"+(_vm._ssrAttr("src",__webpack_require__(35)))+" alt data-v-dc2943c6></a> <a href data-v-dc2943c6><img"+(_vm._ssrAttr("src",__webpack_require__(36)))+" alt data-v-dc2943c6></a></div> <div class=\"footer-block-info-text\" data-v-dc2943c6><p data-v-dc2943c6>2020 © Третьяковская галерея Запад</p></div></div> <div class=\"footer-block-about\" data-v-dc2943c6><div class=\"footer-block-about-title\" data-v-dc2943c6><a href data-v-dc2943c6>новости</a> <a href data-v-dc2943c6>программа лояльности</a> <a href data-v-dc2943c6>контакты</a></div> <div class=\"footer-block-about-input\" data-v-dc2943c6><p data-v-dc2943c6>Узнавайте больше об искусстве с нашей рассылкой</p> <label data-v-dc2943c6><input type=\"text\" placeholder=\"ваш email\" data-v-dc2943c6> <button class=\"flex items-center\" data-v-dc2943c6><img"+(_vm._ssrAttr("src",__webpack_require__(28)))+" alt class=\"mr-1\" data-v-dc2943c6> <span data-v-dc2943c6>отправить</span> <img"+(_vm._ssrAttr("src",__webpack_require__(29)))+" alt class=\"ml-1\" data-v-dc2943c6></button></label></div> <div class=\"footer-block-about-conditions\" data-v-dc2943c6><div data-v-dc2943c6><p data-v-dc2943c6>Условия использования материалов сайта</p> <p data-v-dc2943c6>Политика конфиденциальности</p></div> <div data-v-dc2943c6><p class=\"made flex items-center\" data-v-dc2943c6><img"+(_vm._ssrAttr("src",__webpack_require__(28)))+" alt class=\"mr-1\" data-v-dc2943c6> <span data-v-dc2943c6>Made by ONY</span> <img"+(_vm._ssrAttr("src",__webpack_require__(29)))+" alt class=\"ml-1\" data-v-dc2943c6></p></div></div></div></div> <div class=\"footer-min\" data-v-dc2943c6><div class=\"footer-block-logo img-max\" data-v-dc2943c6><img"+(_vm._ssrAttr("src",__webpack_require__(30)))+" alt data-v-dc2943c6></div> <div class=\"footer-block-info\" data-v-dc2943c6><div class=\"mini-block\" data-v-dc2943c6><img"+(_vm._ssrAttr("src",__webpack_require__(30)))+" alt class=\"img-min\" data-v-dc2943c6> <div class=\"footer-block-info-title\" data-v-dc2943c6><a href data-v-dc2943c6>Афиша</a> <a href data-v-dc2943c6>образование</a> <a href data-v-dc2943c6>о музее</a> <a href data-v-dc2943c6>медиа</a> <a href data-v-dc2943c6>новости</a> <a href data-v-dc2943c6>программа лояльности</a> <a href data-v-dc2943c6>контакты</a></div></div> <div class=\"canvas\" data-v-dc2943c6><canvas id=\"footer-arrow-min\" data-v-dc2943c6></canvas></div> <div class=\"footer-block-about-input\" data-v-dc2943c6><p data-v-dc2943c6>Узнавайте больше об искусстве с нашей рассылкой</p> <label data-v-dc2943c6><input type=\"text\" placeholder=\"ваш email\" data-v-dc2943c6> <button class=\"flex items-center\" data-v-dc2943c6><img"+(_vm._ssrAttr("src",__webpack_require__(28)))+" alt class=\"mr-1\" data-v-dc2943c6> <span data-v-dc2943c6>отправить</span> <img"+(_vm._ssrAttr("src",__webpack_require__(29)))+" alt class=\"ml-1\" data-v-dc2943c6></button></label></div> <div class=\"footer-block-info-social\" data-v-dc2943c6><a href data-v-dc2943c6><img"+(_vm._ssrAttr("src",__webpack_require__(33)))+" alt data-v-dc2943c6></a> <a href data-v-dc2943c6><img"+(_vm._ssrAttr("src",__webpack_require__(34)))+" alt data-v-dc2943c6></a> <a href data-v-dc2943c6><img"+(_vm._ssrAttr("src",__webpack_require__(35)))+" alt data-v-dc2943c6></a> <a href data-v-dc2943c6><img"+(_vm._ssrAttr("src",__webpack_require__(36)))+" alt data-v-dc2943c6></a></div> <div class=\"footer-block-info-text\" data-v-dc2943c6><p class=\"info-text-max\" data-v-dc2943c6>2020 © Третьяковская галерея Запад</p> <div class=\"conditions-mini\" data-v-dc2943c6><p data-v-dc2943c6>Правила использования</p> <p data-v-dc2943c6>Политика конфиденциальности</p></div></div> <div class=\"footer-block-about\" data-v-dc2943c6><div class=\"footer-block-about-conditions\" data-v-dc2943c6><div class=\"conditions-max\" data-v-dc2943c6><p data-v-dc2943c6>Условия использования материалов сайта</p> <p data-v-dc2943c6>Политика конфиденциальности</p></div> <p class=\"info-text-mini\" data-v-dc2943c6>2020 © Третьяковская галерея Запад</p> <div data-v-dc2943c6><p class=\"made flex items-center\" data-v-dc2943c6><img"+(_vm._ssrAttr("src",__webpack_require__(28)))+" alt class=\"mr-1\" data-v-dc2943c6> <span data-v-dc2943c6>Made by ONY</span> <img"+(_vm._ssrAttr("src",__webpack_require__(29)))+" alt class=\"ml-1\" data-v-dc2943c6></p></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=dc2943c6&scoped=true&

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
//
//
//
//
//
//
//
//
//
//
//
//
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
  
  var style0 = __webpack_require__(45)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Footervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "dc2943c6",
  "1b91d344"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxjaXJjbGUgY3g9IjciIGN5PSI3IiByPSI2LjUiIHN0cm9rZT0iIzIyMUYxQSIvPg0KPHBhdGggZD0iTTExLjUgMTEuNUwxOS41IDE5LjUiIHN0cm9rZT0iIzIyMUYxQSIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ 41:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHk9IjYiIHdpZHRoPSIzMCIgaGVpZ2h0PSIxIiBmaWxsPSIjMjIxRjFBIi8+DQo8cmVjdCB5PSIxNCIgd2lkdGg9IjMwIiBoZWlnaHQ9IjEiIGZpbGw9IiMyMjFGMUEiLz4NCjxyZWN0IHk9IjIyIiB3aWR0aD0iMzAiIGhlaWdodD0iMSIgZmlsbD0iIzIyMUYxQSIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ 42:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xIDE5TDEwIDEwTTE5IDFMMTAgMTBNMTAgMTBMMSAxTTEwIDEwTDE5IDE5IiBzdHJva2U9IndoaXRlIi8+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_5d168664_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_5d168664_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_5d168664_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_5d168664_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_5d168664_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.menu[data-v-5d168664]{\n  overflow-y:scroll;\n  height:100%\n}\n.min-menu-text[data-v-5d168664]{\n  display:block\n}\n@media(max-width:650px){\n.min-menu-text[data-v-5d168664]{\n    display:none\n}\n}\n.d-none[data-v-5d168664]{\n  display:none\n}\n#header-arrow[data-v-5d168664]{\n  width:100%;\n  height:360px\n}\n@media(max-width:650px){\n#header-arrow[data-v-5d168664]{\n    height:182px\n}\n}\n.bg-yellow[data-v-5d168664]{\n  background:#ffdd7c\n}\n.bg-white[data-v-5d168664]{\n  background:#fff\n}\n.header-block[data-v-5d168664]{\n  position:fixed;\n  z-index:9999\n}\n.min[data-v-5d168664]{\n  display:none\n}\n.hidden[data-v-5d168664],.min-menu[data-v-5d168664]{\n  display:flex\n}\n.min-menu[data-v-5d168664]{\n  flex-direction:column;\n  color:#fff;\n  overflow-y:auto\n}\n.min-menu .nav-title-menu[data-v-5d168664]{\n  color:#fff;\n  margin-bottom:30px\n}\n@media(max-width:650px){\n.min-menu .nav-title-menu[data-v-5d168664]{\n    margin-bottom:20px\n}\n}\n.nav-button[data-v-5d168664]{\n  width:30px\n}\n.bg-dark[data-v-5d168664]{\n  background:#221f1a\n}\n.nav-title[data-v-5d168664]{\n  font-size:15px;\n  line-height:20px;\n  text-transform:uppercase;\n  flex:none;\n  order:1;\n  flex-grow:0;\n  margin:0 21px\n}\n.nav-title[data-v-5d168664],.nav-title-menu[data-v-5d168664]{\n  font-style:normal;\n  font-weight:400;\n  color:#221f1a\n}\n.nav-title-menu[data-v-5d168664]{\n  font-size:22px;\n  line-height:25px\n}\n@media(max-width:850px){\n.nav-title-menu[data-v-5d168664]{\n    font-size:30px;\n    line-height:32px\n}\n}\n@media(max-width:650px){\n.nav-title-menu[data-v-5d168664]{\n    font-size:18px;\n    line-height:26px\n}\n}\n.nav-title-menu-img[data-v-5d168664]{\n  height:32px\n}\n@media(max-width:650px){\n.nav-title-menu-img[data-v-5d168664]{\n    height:22px\n}\n}\n@media(max-width:990px){\n.hidden[data-v-5d168664]{\n    display:none\n}\n.min[data-v-5d168664]{\n    display:flex\n}\n}\n.nav-logo img[data-v-5d168664]{\n  width:50px;\n  height:55px\n}\n.nav-title-logo[data-v-5d168664]{\n  font-weight:700;\n  font-size:18px;\n  line-height:15px;\n  color:#221f1a\n}\n.nav-title-logo-mini[data-v-5d168664]{\n  margin:0;\n  padding:0;\n  font-weight:700;\n  font-size:16px;\n  line-height:20px;\n  color:#221f1a\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_dc2943c6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_dc2943c6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_dc2943c6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_dc2943c6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_dc2943c6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(38);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(47);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.info-text-mini[data-v-dc2943c6]{\n  display:none\n}\n@media(max-width:500px){\n.info-text-mini[data-v-dc2943c6]{\n    display:block;\n    font-size:13px;\n    line-height:20px\n}\n}\n.info-text-max[data-v-dc2943c6]{\n  display:block\n}\n@media(max-width:500px){\n.info-text-max[data-v-dc2943c6]{\n    display:none\n}\n}\n.conditions-mini[data-v-dc2943c6]{\n  display:none\n}\n@media(max-width:500px){\n.conditions-mini[data-v-dc2943c6]{\n    display:block\n}\n}\n.conditions-max[data-v-dc2943c6]{\n  display:block\n}\n@media(max-width:500px){\n.conditions-max[data-v-dc2943c6]{\n    display:none\n}\n}\n@media(max-width:500px){\n.mini-block[data-v-dc2943c6]{\n    display:flex;\n    align-items:flex-start\n}\n}\n.img-min[data-v-dc2943c6]{\n  display:none\n}\n@media(max-width:500px){\n.img-min[data-v-dc2943c6]{\n    display:block;\n    margin-top:3px\n}\n}\n.img-max[data-v-dc2943c6]{\n  display:block\n}\n@media(max-width:500px){\n.img-max[data-v-dc2943c6]{\n    display:none!important\n}\n}\n.footer-min[data-v-dc2943c6]{\n  padding:40px 20px;\n  display:none\n}\n@media(max-width:800px){\n.footer-min[data-v-dc2943c6]{\n    display:flex;\n    background:#221f1a\n}\n.footer-min #footer-arrow-min[data-v-dc2943c6]{\n    width:100%;\n    height:200px\n}\n.footer-min .footer-block-info[data-v-dc2943c6]{\n    display:flex;\n    flex-direction:column;\n    margin-bottom:10px;\n    flex:1\n}\n}\n@media(max-width:800px)and (max-width:500px){\n.footer-min .footer-block-logo[data-v-dc2943c6]{\n    margin-right:0;\n    height:200px;\n    display:inline\n}\n.footer-min .footer-block-info-title[data-v-dc2943c6]{\n    margin-left:80px\n}\n}\n.footer[data-v-dc2943c6]{\n  background:#221f1a;\n  display:flex;\n  padding:40px 20px;\n  justify-content:space-between\n}\n@media(max-width:800px){\n.footer[data-v-dc2943c6]{\n    display:none!important\n}\n}\n.footer #footer-arrow[data-v-dc2943c6]{\n  flex:1\n}\n.footer-block-logo[data-v-dc2943c6]{\n  position:relative\n}\n.footer-block-logo-image[data-v-dc2943c6]{\n  position:absolute;\n  top:0;\n  left:0\n}\n.footer-block-about[data-v-dc2943c6]{\n  display:flex;\n  flex-direction:column;\n  justify-content:space-between;\n  width:50%\n}\n@media(max-width:800px){\n.footer-block-about[data-v-dc2943c6]{\n    width:100%\n}\n}\n.footer-block-about-conditions[data-v-dc2943c6]{\n  font-style:normal;\n  font-weight:400;\n  font-size:15px;\n  line-height:20px;\n  color:#fff;\n  display:flex;\n  justify-content:space-between\n}\n@media(max-width:800px){\n.footer-block-about-conditions[data-v-dc2943c6]{\n    align-items:flex-end\n}\n}\n@media(max-width:500px){\n.footer-block-about-conditions[data-v-dc2943c6]{\n    flex-direction:column;\n    justify-content:flex-start;\n    align-items:flex-start;\n    border-top:1px solid #fff;\n    padding-top:20px\n}\n}\n.footer-block-about-conditions .made[data-v-dc2943c6]{\n  white-space:nowrap;\n  font-style:normal;\n  font-weight:400;\n  font-size:15px;\n  line-height:20px;\n  text-align:right;\n  text-transform:uppercase;\n  color:#fff\n}\n.footer-block-about-conditions .made .ml[data-v-dc2943c6]{\n  margin-left:5px\n}\n.footer-block-about-conditions .made .mr[data-v-dc2943c6]{\n  margin-right:5px\n}\n@media(max-width:500px){\n.footer-block-about-conditions .made[data-v-dc2943c6]{\n    text-align:left;\n    margin-top:15px;\n    font-size:13px;\n    line-height:20px\n}\n}\n.footer-block-about-input[data-v-dc2943c6]{\n  color:#fff\n}\n.footer-block-about-input p[data-v-dc2943c6]{\n  margin-bottom:20px;\n  font-style:normal;\n  font-weight:400;\n  font-size:18px;\n  line-height:26px\n}\n@media(max-width:850px){\n.footer-block-about-input p[data-v-dc2943c6]{\n    font-size:15px;\n    line-height:20px\n}\n}\n@media(max-width:650px){\n.footer-block-about-input p[data-v-dc2943c6]{\n    font-size:13px\n}\n}\n.footer-block-about-input label[data-v-dc2943c6]{\n  display:flex;\n  justify-content:space-between;\n  flex-wrap:nowrap;\n  border:1px solid #fff;\n  padding-left:20px;\n  padding-right:20px;\n  width:100%;\n  align-items:center\n}\n.footer-block-about-input label input[data-v-dc2943c6]{\n  background-color:#221f1a;\n  width:70%;\n  height:60px;\n  outline:none;\n  font-style:normal;\n  font-weight:400;\n  font-size:15px;\n  line-height:20px;\n  text-transform:uppercase;\n  color:#fff\n}\n.footer-block-about-input label input[data-v-dc2943c6]::-moz-placeholder{\n  color:#fff;\n  opacity:1\n}\n.footer-block-about-input label input[data-v-dc2943c6]:-ms-input-placeholder{\n  color:#fff;\n  opacity:1\n}\n.footer-block-about-input label input[data-v-dc2943c6]::placeholder{\n  color:#fff;\n  opacity:1\n}\n.footer-block-about-input label input[data-v-dc2943c6]:-ms-input-placeholder{\n  color:#fff\n}\n.footer-block-about-input label input[data-v-dc2943c6]::-ms-input-placeholder{\n  color:#fff\n}\n.footer-block-about-input label button[data-v-dc2943c6]{\n  font-style:normal;\n  font-weight:400;\n  font-size:15px;\n  line-height:20px;\n  text-align:right;\n  text-transform:uppercase;\n  white-space:nowrap\n}\n@media(max-width:650px){\n.footer-block-about-input label button[data-v-dc2943c6]{\n    visibility:hidden;\n    position:relative\n}\n.footer-block-about-input label button[data-v-dc2943c6]:after{\n    content:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    visibility:visible;\n    display:block;\n    position:absolute;\n    right:0;\n    top:0\n}\n}\n.footer-block-about-title[data-v-dc2943c6]{\n  display:flex;\n  flex-direction:column\n}\n.footer-block-about-title a[data-v-dc2943c6]{\n  font-style:normal;\n  font-weight:400;\n  font-size:22px;\n  line-height:25px;\n  text-transform:uppercase;\n  color:#fff;\n  margin-bottom:10px\n}\n.footer-block-info[data-v-dc2943c6]{\n  justify-content:space-between\n}\n.footer-block-info[data-v-dc2943c6],.footer-block-info-title[data-v-dc2943c6]{\n  display:flex;\n  flex-direction:column\n}\n.footer-block-info-title a[data-v-dc2943c6]{\n  font-style:normal;\n  font-weight:400;\n  font-size:22px;\n  line-height:25px;\n  text-transform:uppercase;\n  color:#fff;\n  margin-bottom:15px\n}\n@media(max-width:850px){\n.footer-block-info-title a[data-v-dc2943c6]{\n    font-size:15px;\n    line-height:20px;\n    margin-bottom:20px\n}\n}\n@media(max-width:650px){\n.footer-block-info-title a[data-v-dc2943c6]{\n    font-size:13px;\n    line-height:15px\n}\n}\n.footer-block-info-text[data-v-dc2943c6]{\n  font-style:normal;\n  font-weight:400;\n  font-size:15px;\n  line-height:20px;\n  color:#fff;\n  margin-bottom:21px\n}\n@media(max-width:650px){\n.footer-block-info-text[data-v-dc2943c6]{\n    font-size:13px;\n    line-height:20px\n}\n}\n.footer-block-info-social[data-v-dc2943c6]{\n  margin-top:15px;\n  display:flex;\n  align-items:center\n}\n.footer-block-info-social a[data-v-dc2943c6]{\n  margin:10px 30px 10px 10px\n}\n@media(max-width:800px){\n.footer-block-info-social[data-v-dc2943c6]{\n    margin-top:20px;\n    margin-bottom:60px\n}\n.footer-block-info-social a[data-v-dc2943c6]{\n    margin-right:47px\n}\n.footer-block-info-social a img[data-v-dc2943c6]{\n    width:16px;\n    height:16px\n}\n}\n@media(max-width:500px){\n.footer-block-info-social[data-v-dc2943c6]{\n    width:100%;\n    justify-content:space-between\n}\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 47:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAxNiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xIDIxTDE0LjMzMzMgMTFMMSAwLjk5OTk5OSIgc3Ryb2tlPSJ3aGl0ZSIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ 52:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNMCAwLjVIMTBMNSA3LjVMMCAwLjVaIiBmaWxsPSIjMjIxRjFBIi8+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ 55:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHg9IjMiIHk9IjQiIHdpZHRoPSIxMSIgaGVpZ2h0PSI5IiBmaWxsPSIjMjIxRjFBIi8+DQo8cmVjdCB4PSI2LjUiIHk9IjcuNSIgd2lkdGg9IjEwIiBoZWlnaHQ9IjgiIHN0cm9rZT0iIzIyMUYxQSIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ 56:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHg9IjMiIHk9IjYiIHdpZHRoPSI5IiBoZWlnaHQ9IjgiIGZpbGw9IiMyMjFGMUEiLz4NCjxwYXRoIGQ9Ik0xMyAxMEwxNyA3TDE3IDEzTDEzIDEwWiIgZmlsbD0iIzIyMUYxQSIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ 69:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAxMSAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0wLjk5OTk4NSAxOC41TDkuOTk5OTggOS41TDAuOTk5OTg1IDEiIHN0cm9rZT0iIzIyMUYxQSIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ 89:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAxNiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xIDIxTDE0LjMzMzMgMTFMMSAwLjk5OTk5OSIgc3Ryb2tlPSIjMjIxRjFBIi8+DQo8L3N2Zz4NCg=="

/***/ })

};;
//# sourceMappingURL=media.js.map