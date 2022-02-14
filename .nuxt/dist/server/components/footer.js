exports.ids = [1];
exports.modules = {

/***/ 26:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTUiIHZpZXdCb3g9IjAgMCA1MCA1NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xNiAwSDBWNTVIMTZWMFoiIGZpbGw9IiNGRkREN0MiLz4NCjxwYXRoIGQ9Ik0zMiAxOEw1MCAwSDMyVjE4WiIgZmlsbD0iI0ZGREQ3QyIvPg0KPHBhdGggZD0iTTUwIDU1TDMyIDM3VjU1SDUwWiIgZmlsbD0iI0ZGREQ3QyIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ 27:
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

/***/ 28:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAxNSAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNC43MjI4IDMwVjE0LjY4NEgwLjVWOS44ODQzMkg0LjcyMjhWNi4zNDQ4M0M0LjcyMjggMi4yMzY4NiA3LjI3ODM2IDAgMTEuMDEyNSAwQzEyLjgwMTIgMCAxNC4zMzc1IDAuMTMxMTkgMTQuNzg1NyAwLjE4OTQ5N1Y0LjQ4Mjk5TDEyLjE5NjQgNC40ODQzMkMxMC4xNjYgNC40ODQzMiA5Ljc3MzE2IDUuNDMxOCA5Ljc3MzE2IDYuODIwNTdWOS44ODU2NEgxNC42MTU2TDEzLjk4NTIgMTQuNjg1NEg5Ljc3MzE2VjMwSDQuNzIyOFoiIGZpbGw9IndoaXRlIi8+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/insta.9d37843.svg";

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ok.7bdd5f5.svg";

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/vk.8debadd.svg";

/***/ }),

/***/ 32:
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

/***/ 37:
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

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_439c05b5_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_439c05b5_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_439c05b5_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_439c05b5_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_439c05b5_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 42:
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

/***/ 43:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAxNiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEgMjFMMTQuMzMzMyAxMUwxIDAuOTk5OTk5IiBzdHJva2U9IndoaXRlIi8+Cjwvc3ZnPgo="

/***/ })

};;
//# sourceMappingURL=footer.js.map