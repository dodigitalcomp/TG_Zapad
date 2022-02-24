exports.ids = [5];
exports.modules = {

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(65);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("8b468a08", content, true, context)
};

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/VueSwiper.vue?vue&type=template&id=8a1c0e48&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"event-page-content-info-image"},[(_vm.slides.length)?_c('swiper',{ref:"swiperThumbs",staticClass:"swiper",attrs:{"options":_vm.swiperOption}},_vm._l((_vm.slides),function(slide,i){return _c('swiper-slide',{key:i,staticClass:"swiper-slide",attrs:{"index":i}},[_c('img',{attrs:{"src":__webpack_require__(61),"alt":""}})])}),1):_vm._e(),_vm._ssrNode(" "+((_vm.text)?("<div data-v-8a1c0e48><p class=\"text\" data-v-8a1c0e48>"+_vm._ssrEscape(_vm._s(_vm.text))+"</p></div>"):"<!---->")+" <div class=\"pagination\" data-v-8a1c0e48><div slot=\"pagination\" class=\"swiper-pagination\" data-v-8a1c0e48></div> <div class=\"event-page-content-info-image-pag-img\" data-v-8a1c0e48><img"+(_vm._ssrAttr("src",__webpack_require__(62)))+" alt class=\"arrows__btn arrows__btn_prev\" data-v-8a1c0e48> <img"+(_vm._ssrAttr("src",__webpack_require__(63)))+" alt class=\"arrows__btn arrows__btn_next\" data-v-8a1c0e48></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/VueSwiper.vue?vue&type=template&id=8a1c0e48&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/VueSwiper.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var VueSwipervue_type_script_lang_js_ = ({
  name: 'VueSwiper',

  data() {
    return {
      selected: 'Technologies',
      openSelect: false,
      slides: [1, 1, 1, 1, 1],
      swiperOptionSlider: {
        centeredSlides: true,
        spaceBetween: 10,
        slidesPerView: 100
      },
      swiperOption: {
        spaceBetween: 10,
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination',
          type: "bullets",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          }
        },
        navigation: {
          nextEl: '.arrows__btn_next',
          prevEl: '.arrows__btn_prev'
        }
      }
    };
  },

  props: ['text']
});
// CONCATENATED MODULE: ./components/VueSwiper.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VueSwipervue_type_script_lang_js_ = (VueSwipervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/VueSwiper.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(64)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_VueSwipervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "8a1c0e48",
  "26f784aa"
  
)

/* harmony default export */ var VueSwiper = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/image32.57fa4ee.jpg";

/***/ }),

/***/ 62:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAxMSAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDE4LjVMMSA5LjVMMTAgMSIgc3Ryb2tlPSIjMjIxRjFBIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ 63:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAxMSAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEgMTguNUwxMCA5LjVMMSAxIiBzdHJva2U9IiMyMjFGMUEiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueSwiper_vue_vue_type_style_index_0_id_8a1c0e48_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueSwiper_vue_vue_type_style_index_0_id_8a1c0e48_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueSwiper_vue_vue_type_style_index_0_id_8a1c0e48_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueSwiper_vue_vue_type_style_index_0_id_8a1c0e48_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueSwiper_vue_vue_type_style_index_0_id_8a1c0e48_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.event-page-content-info[data-v-8a1c0e48]{\n  position:relative;\n  overflow:hidden\n}\n.event-page-content-info .text[data-v-8a1c0e48]{\n  font-style:normal;\n  font-weight:400;\n  font-size:15px;\n  line-height:20px;\n  color:#221f1a;\n  max-width:453px\n}\n.event-page-content-info-image-img[data-v-8a1c0e48]{\n  display:flex;\n  width:100%;\n  overflow:hidden\n}\n.event-page-content-info-image-img img[data-v-8a1c0e48]:nth-child(odd){\n  margin-right:20px\n}\n.event-page-content-info-image-pagMini[data-v-8a1c0e48]{\n  display:none\n}\n@media(max-width:850px){\n.event-page-content-info-image-pagMini[data-v-8a1c0e48]{\n    display:flex;\n    margin-top:20px;\n    margin-bottom:60px\n}\n}\n.event-page-content-info-image-pag[data-v-8a1c0e48]{\n  display:flex;\n  align-items:center;\n  margin-top:20px;\n  margin-bottom:60px\n}\n@media(max-width:850px){\n.event-page-content-info-image-pag[data-v-8a1c0e48]{\n    display:none\n}\n}\n.event-page-content-info-image-pag-number[data-v-8a1c0e48]{\n  width:70%\n}\n.event-page-content-info-image-pag-number .active[data-v-8a1c0e48]{\n  opacity:1!important\n}\n.event-page-content-info-image-pag-number span[data-v-8a1c0e48]{\n  text-align:left;\n  margin-right:20px;\n  font-style:normal;\n  font-weight:400;\n  font-size:15px;\n  line-height:20px;\n  text-transform:uppercase;\n  color:#221f1a;\n  opacity:.3\n}\n.event-page-content-info-image-pag-img[data-v-8a1c0e48]{\n  margin-top:5px;\n  margin-left:50%;\n  display:flex\n}\n.event-page-content-info-image-pag-img img[data-v-8a1c0e48]{\n  margin-left:22px\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=vue-swiper.js.map