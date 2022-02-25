exports.ids = [2];
exports.modules = {

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(73);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("2ee74e9d", content, true, context)
};

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pic.98fdc02.jpg";

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/image24.b155ec1.jpg";

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/image-museum.bd1b9e0.jpg";

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Galleria.vue?vue&type=template&id=e6ddfb82&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"block\" data-v-e6ddfb82><img"+(_vm._ssrAttr("src",__webpack_require__(67)))+" alt class=\"item item1\" data-v-e6ddfb82> <img"+(_vm._ssrAttr("src",__webpack_require__(68)))+" alt class=\"item item2\" data-v-e6ddfb82> <img"+(_vm._ssrAttr("src",__webpack_require__(69)))+" alt class=\"item item3\" data-v-e6ddfb82></div>")])}
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
  
  var style0 = __webpack_require__(72)
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

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Galleria_vue_vue_type_style_index_0_id_e6ddfb82_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Galleria_vue_vue_type_style_index_0_id_e6ddfb82_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Galleria_vue_vue_type_style_index_0_id_e6ddfb82_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Galleria_vue_vue_type_style_index_0_id_e6ddfb82_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Galleria_vue_vue_type_style_index_0_id_e6ddfb82_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.block[data-v-e6ddfb82]{\n  position:relative;\n  width:501px;\n  height:354px\n}\n@media(max-width:1000px){\n.block[data-v-e6ddfb82]{\n    width:268px;\n    height:190px\n}\n}\n@media(max-width:650px){\n.block[data-v-e6ddfb82]{\n    width:339px;\n    height:239px\n}\n}\n.item[data-v-e6ddfb82]{\n  width:501px;\n  height:354px;\n  position:absolute\n}\n@media(max-width:1000px){\n.item[data-v-e6ddfb82]{\n    width:268px;\n    height:190px\n}\n}\n.item3[data-v-e6ddfb82]{\n  top:10px;\n  left:10px\n}\n@media(max-width:650px){\n.item3[data-v-e6ddfb82]{\n    width:329px;\n    height:229px\n}\n}\n.item2[data-v-e6ddfb82]{\n  top:25px;\n  left:25px;\n  opacity:.5\n}\n@media(max-width:650px){\n.item2[data-v-e6ddfb82]{\n    width:309px;\n    height:229px\n}\n}\n.item1[data-v-e6ddfb82]{\n  top:40px;\n  left:40px;\n  opacity:.5\n}\n@media(max-width:650px){\n.item1[data-v-e6ddfb82]{\n    width:279px;\n    height:229px\n}\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=galleria.js.map