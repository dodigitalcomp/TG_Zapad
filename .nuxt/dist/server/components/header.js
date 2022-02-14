exports.ids = [2];
exports.modules = {

/***/ 33:
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

/***/ 34:
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

/***/ 44:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxjaXJjbGUgY3g9IjciIGN5PSI3IiByPSI2LjUiIHN0cm9rZT0iIzIyMUYxQSIvPg0KPHBhdGggZD0iTTExLjUgMTEuNUwxOS41IDE5LjUiIHN0cm9rZT0iIzIyMUYxQSIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDggMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNMC44ODg2MTMgMTAuMjM1QzAuODg4NjEzIDEyLjUgMS42OTg2MSAxNC40NjUgMy4zMzM2MSAxNi4xNkMzLjQwODYxIDE2LjIzNSAzLjQ4MzYxIDE2LjIzNSAzLjU1ODYxIDE2LjE2TDMuNjYzNjEgMTYuMDdDMy43Mzg2MSAxNS45OTUgMy43Mzg2MSAxNS45MzUgMy42OTM2MSAxNS44NkMyLjQzMzYxIDE0LjI4NSAxLjc4ODYxIDEyLjMyIDEuNzg4NjEgMTAuMjk1QzEuNzg4NjEgNi4wOTUgNC4yOTM2MSAyLjk3NSA3LjE4ODYxIDEuNEM3LjI5MzYxIDEuMzU1IDcuMzIzNjEgMS4yOCA3LjI3ODYxIDEuMTc1TDcuMjE4NjEgMS4wNTVDNy4xNzM2MSAwLjk2NDk5OSA3LjExMzYxIDAuOTQ5OTk5IDcuMDA4NjEgMC45OTVDMy43Njg2MSAyLjQzNSAwLjg4ODYxMyA1LjcyIDAuODg4NjEzIDEwLjIzNVoiIGZpbGw9IiMyMjFGMUEiLz4NCjwvc3ZnPg0K"

/***/ }),

/***/ 46:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDggMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNNy4zMTczNCA2Ljk1QzcuMzE3MzQgNC42ODUgNi41MDczNCAyLjcyIDQuODcyMzQgMS4wMjVDNC43OTczNCAwLjk0OTk5OSA0LjcyMjM0IDAuOTQ5OTk5IDQuNjQ3MzQgMS4wMjVMNC41NDIzNCAxLjExNUM0LjQ2NzM0IDEuMTkgNC40NTIzNCAxLjI1IDQuNTI3MzQgMS4zMjVDNS43NzIzNCAyLjkgNi40MTczNCA0Ljg2NSA2LjQxNzM0IDYuOTA1QzYuNDE3MzQgMTEuMTA1IDMuOTEyMzQgMTQuMjI1IDEuMDE3MzQgMTUuNzg1QzAuOTEyMzQ0IDE1Ljg0NSAwLjg4MjM0NCAxNS45MiAwLjkyNzM0NCAxNi4wMjVMMC45ODczNDQgMTYuMTQ1QzEuMDMyMzQgMTYuMjUgMS4wNzczNCAxNi4yNSAxLjE5NzM0IDE2LjIwNUM0LjQzNzM0IDE0Ljc2NSA3LjMxNzM0IDExLjQ5NSA3LjMxNzM0IDYuOTVaIiBmaWxsPSIjMjIxRjFBIi8+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ 47:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHk9IjYiIHdpZHRoPSIzMCIgaGVpZ2h0PSIxIiBmaWxsPSIjMjIxRjFBIi8+DQo8cmVjdCB5PSIxNCIgd2lkdGg9IjMwIiBoZWlnaHQ9IjEiIGZpbGw9IiMyMjFGMUEiLz4NCjxyZWN0IHk9IjIyIiB3aWR0aD0iMzAiIGhlaWdodD0iMSIgZmlsbD0iIzIyMUYxQSIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ 48:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xIDE5TDEwIDEwTTE5IDFMMTAgMTBNMTAgMTBMMSAxTTEwIDEwTDE5IDE5IiBzdHJva2U9IndoaXRlIi8+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_1b263a2a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_1b263a2a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_1b263a2a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_1b263a2a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_1b263a2a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.d-none[data-v-1b263a2a]{\n  display:none\n}\n#header-arrow[data-v-1b263a2a]{\n  width:100%;\n  height:100px\n}\n.bg-yellow[data-v-1b263a2a]{\n  background:#ffdd7c\n}\n.bg-white[data-v-1b263a2a]{\n  background:#fff\n}\n.header-block[data-v-1b263a2a]{\n  position:fixed;\n  z-index:9999\n}\n.min[data-v-1b263a2a]{\n  display:none\n}\n.hidden[data-v-1b263a2a],.min-menu[data-v-1b263a2a]{\n  display:flex\n}\n.min-menu[data-v-1b263a2a]{\n  flex-direction:column;\n  color:#fff\n}\n.min-menu .nav-title-menu[data-v-1b263a2a]{\n  color:#fff;\n  margin-bottom:30px\n}\n@media(max-width:650px){\n.min-menu .nav-title-menu[data-v-1b263a2a]{\n    margin-bottom:20px\n}\n}\n.nav-button[data-v-1b263a2a]{\n  width:30px\n}\n.bg-dark[data-v-1b263a2a]{\n  background:#221f1a\n}\n.nav-title[data-v-1b263a2a]{\n  font-size:15px;\n  line-height:20px;\n  text-transform:uppercase;\n  flex:none;\n  order:1;\n  flex-grow:0;\n  margin:0 21px\n}\n.nav-title[data-v-1b263a2a],.nav-title-menu[data-v-1b263a2a]{\n  font-style:normal;\n  font-weight:400;\n  color:#221f1a\n}\n.nav-title-menu[data-v-1b263a2a]{\n  font-size:22px;\n  line-height:25px\n}\n@media(max-width:1220px){\n.nav-title-menu[data-v-1b263a2a]{\n    font-size:18px\n}\n}\n@media(max-width:990px){\n.nav-title-menu[data-v-1b263a2a]{\n    font-size:16px\n}\n}\n@media(max-width:990px){\n.hidden[data-v-1b263a2a]{\n    display:none\n}\n.min[data-v-1b263a2a]{\n    display:flex\n}\n}\n.nav-logo img[data-v-1b263a2a]{\n  width:50px;\n  height:55px\n}\n.nav-title-logo[data-v-1b263a2a]{\n  font-weight:700;\n  font-size:18px;\n  line-height:15px;\n  color:#221f1a\n}\n.nav-title-logo-mini[data-v-1b263a2a]{\n  margin:0;\n  padding:0;\n  font-weight:700;\n  font-size:16px;\n  line-height:20px;\n  color:#221f1a\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=header.js.map