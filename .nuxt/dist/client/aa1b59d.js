(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{236:function(t,n,e){"use strict";e.r(n);var o=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"ml-2 min-menu-text"},[e("p",{staticClass:"nav-title-logo"},[t._v("Третьяковская")]),t._v(" "),e("p",{staticClass:"nav-title-logo"},[t._v("галерея")]),t._v(" "),e("p",{staticClass:"nav-title-logo-mini"},[t._v("Запад")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"hidden sm:block sm:ml-6"},[e("div",{staticClass:"flex space-x-4"},[e("a",{staticClass:"uppercase nav-title-menu whitespace-nowrap",attrs:{href:"#"}},[t._v("Афиша")]),t._v(" "),e("a",{staticClass:"uppercase nav-title-menu whitespace-nowrap",attrs:{href:"#"}},[t._v("образование")]),t._v(" "),e("a",{staticClass:"uppercase nav-title-menu whitespace-nowrap",attrs:{href:"#"}},[t._v("о музее")]),t._v(" "),e("a",{staticClass:"uppercase nav-title-menu whitespace-nowrap",attrs:{href:"#"}},[t._v("новости")]),t._v(" "),e("a",{staticClass:"uppercase nav-title-menu whitespace-nowrap",attrs:{href:"#"}},[t._v("контакты")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("a",{staticClass:"flex cursor-pointer mr-5"},[n("img",{attrs:{src:e(264),alt:""}})])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"ml-3 hidden"},[e("div",[e("a",{staticClass:"nav-title",attrs:{href:"#"}},[t._v("медиа")])])])},function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"ml-3 relative flex nav-title hidden"},[o("img",{staticClass:"mr-1",attrs:{src:e(234),alt:""}}),t._v(" "),o("div",[o("a",{attrs:{href:"#"}},[t._v("EN")])]),t._v(" "),o("img",{staticClass:"ml-1",attrs:{src:e(235),alt:""}})])},function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"px-5 pt-2 pb-3 space-y-1 min-menu"},[o("a",{staticClass:"uppercase nav-title-menu",attrs:{href:"#"}},[t._v("Афиша")]),t._v(" "),o("a",{staticClass:"uppercase nav-title-menu",attrs:{href:"#"}},[t._v("образование")]),t._v(" "),o("a",{staticClass:"uppercase nav-title-menu",attrs:{href:"#"}},[t._v("о музее")]),t._v(" "),o("a",{staticClass:"uppercase nav-title-menu",attrs:{href:"#"}},[t._v("МЕДИА")]),t._v(" "),o("a",{staticClass:"uppercase nav-title-menu",attrs:{href:"#"}},[t._v("новости")]),t._v(" "),o("a",{staticClass:"uppercase nav-title-menu",attrs:{href:"#"}},[t._v("ПРОГРАММА ЛОЯЛЬНОСТИ")]),t._v(" "),o("a",{staticClass:"uppercase nav-title-menu",attrs:{href:"#"}},[t._v("контакты")]),t._v(" "),o("canvas",{attrs:{id:"header-arrow"}}),t._v(" "),o("a",{staticClass:"uppercase nav-title-menu flex items-center",attrs:{href:"#"}},[o("img",{staticClass:"mr-1 nav-title-menu-img",attrs:{src:e(238),alt:""}}),t._v(" "),o("span",[t._v("EN")]),t._v(" "),o("img",{staticClass:"ml-1 nav-title-menu-img",attrs:{src:e(239),alt:""}})])])}],l={name:"Header",props:["bgcolor","logoColor"],data:function(){return{openMenu:!1}},mounted:function(){this.addCanvas()},methods:{showMenu:function(){this.openMenu=!this.openMenu,document.getElementsByTagName("body")[0].style.overflow="hidden"},addCanvas:function(){var canvas=document.getElementById("header-arrow");if(canvas&&canvas.getContext){var t=canvas.getContext("2d");t.beginPath(),t.strokeStyle="#FFFFFF",t.moveTo(canvas.width+1,0),t.lineTo(1,canvas.height/2),t.lineTo(2*canvas.height+1,canvas.height),t.closePath(),t.stroke()}}}},d=(e(265),e(41)),component=Object(d.a)(l,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("header",{staticClass:"w-full header-block",class:t.openMenu?"bg-dark menu":"yellow"===t.bgcolor?"bg-yellow":"bg-white"},[o("nav",{},[o("div",{staticClass:"max-w-7lg mx-auto p-5"},[o("div",{staticClass:"relative flex items-center justify-between h-16"},[o("div",{staticClass:"flex-1 flex items-center justify-between"},[o("div",{staticClass:"flex-shrink-0 flex items-center nav-logo"},[o("svg",{attrs:{width:"50",height:"55",viewBox:"0 0 50 55",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{attrs:{d:"M16 0H0V55H16V0Z",fill:t.openMenu?"#FFDD7C":"black"===t.logoColor?"#221F1A":"#FFDD7C"}}),t._v(" "),o("path",{attrs:{d:"M32 18L50 0H32V18Z",fill:t.openMenu?"#FFDD7C":"black"===t.logoColor?"#221F1A":"#FFDD7C"}}),t._v(" "),o("path",{attrs:{d:"M50 55L32 37V55H50Z",fill:t.openMenu?"#FFDD7C":"black"===t.logoColor?"#221F1A":"#FFDD7C"}})]),t._v(" "),t._m(0)]),t._v(" "),t._m(1),t._v(" "),o("div",{staticClass:"inset-y-0 right-0 flex items-center pr-2sm:ml-6 sm:pr-0"},[t.openMenu?t._e():o("div",{staticClass:"ml-3"},[t._m(2)]),t._v(" "),t._m(3),t._v(" "),t._m(4)])]),t._v(" "),o("div",{staticClass:"flex items-center min ml-2"},[o("button",{staticClass:"nav-button",attrs:{type:"button"},on:{click:t.showMenu}},[t.openMenu?o("img",{attrs:{src:e(263),alt:""}}):o("img",{attrs:{src:e(262),alt:""}})])])])]),t._v(" "),o("div",{class:t.openMenu?"":"d-none"},[t._m(5)])])])}),o,!1,null,"5d168664",null);n.default=component.exports;installComponents(component,{Header:e(236).default})},237:function(t,n,e){"use strict";e.r(n);var o=[function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[o("div",{staticClass:"footer"},[o("div",{staticClass:"footer-block-logo"},[o("img",{attrs:{src:e(241),alt:""}}),t._v(" "),o("canvas",{attrs:{height:"632",id:"footer-arrow"}})]),t._v(" "),o("div",{staticClass:"footer-block-info"},[o("div",{staticClass:"footer-block-info-title"},[o("a",{attrs:{href:""}},[t._v("Афиша")]),t._v(" "),o("a",{attrs:{href:""}},[t._v("образование")]),t._v(" "),o("a",{attrs:{href:""}},[t._v("о музее")]),t._v(" "),o("a",{attrs:{href:""}},[t._v("медиа")])]),t._v(" "),o("div",{staticClass:"footer-block-info-social"},[o("a",{attrs:{href:""}},[o("img",{attrs:{src:e(248),alt:""}})]),t._v(" "),o("a",{attrs:{href:""}},[o("img",{attrs:{src:e(249),alt:""}})]),t._v(" "),o("a",{attrs:{href:""}},[o("img",{attrs:{src:e(250),alt:""}})]),t._v(" "),o("a",{attrs:{href:""}},[o("img",{attrs:{src:e(251),alt:""}})])]),t._v(" "),o("div",{staticClass:"footer-block-info-text"},[o("p",[t._v("2020 © Третьяковская галерея Запад")])])]),t._v(" "),o("div",{staticClass:"footer-block-about"},[o("div",{staticClass:"footer-block-about-title"},[o("a",{attrs:{href:""}},[t._v("новости")]),t._v(" "),o("a",{attrs:{href:""}},[t._v("программа лояльности")]),t._v(" "),o("a",{attrs:{href:""}},[t._v("контакты")])]),t._v(" "),o("div",{staticClass:"footer-block-about-input"},[o("p",[t._v("Узнавайте больше об искусстве с нашей рассылкой")]),t._v(" "),o("label",[o("input",{attrs:{type:"text",placeholder:"ваш email"}}),t._v(" "),o("button",[t._v("(отправить)")])])]),t._v(" "),o("div",{staticClass:"footer-block-about-conditions"},[o("div",[o("p",[t._v("Условия использования материалов сайта")]),t._v(" "),o("p",[t._v("Политика конфиденциальности")])]),t._v(" "),o("div",[o("p",{staticClass:"made"},[o("span",{staticClass:"mr"},[t._v("(")]),t._v("Made by ONY"),o("span",{staticClass:"ml"},[t._v(")")])])])])])]),t._v(" "),o("div",{staticClass:"footer-min"},[o("div",{staticClass:"footer-block-logo img-max"},[o("img",{attrs:{src:e(241),alt:""}})]),t._v(" "),o("div",{staticClass:"footer-block-info"},[o("div",{staticClass:"mini-block"},[o("img",{staticClass:"img-min",attrs:{src:e(241),alt:""}}),t._v(" "),o("div",{staticClass:"footer-block-info-title"},[o("a",{attrs:{href:""}},[t._v("Афиша")]),t._v(" "),o("a",{attrs:{href:""}},[t._v("образование")]),t._v(" "),o("a",{attrs:{href:""}},[t._v("о музее")]),t._v(" "),o("a",{attrs:{href:""}},[t._v("медиа")]),t._v(" "),o("a",{attrs:{href:""}},[t._v("новости")]),t._v(" "),o("a",{attrs:{href:""}},[t._v("программа лояльности")]),t._v(" "),o("a",{attrs:{href:""}},[t._v("контакты")])])]),t._v(" "),o("div",{staticClass:"canvas"},[o("canvas",{attrs:{id:"footer-arrow-min"}})]),t._v(" "),o("div",{staticClass:"footer-block-about-input"},[o("p",[t._v("Узнавайте больше об искусстве с нашей рассылкой")]),t._v(" "),o("label",[o("input",{attrs:{type:"text",placeholder:"ваш email"}}),t._v(" "),o("button",{staticClass:"flex"},[o("img",{staticClass:"mr-1",attrs:{src:e(238),alt:""}}),t._v(" "),o("span",[t._v("отправить")]),t._v(" "),o("img",{staticClass:"ml-1",attrs:{src:e(239),alt:""}})])])]),t._v(" "),o("div",{staticClass:"footer-block-info-social"},[o("a",{attrs:{href:""}},[o("img",{attrs:{src:e(248),alt:""}})]),t._v(" "),o("a",{attrs:{href:""}},[o("img",{attrs:{src:e(249),alt:""}})]),t._v(" "),o("a",{attrs:{href:""}},[o("img",{attrs:{src:e(250),alt:""}})]),t._v(" "),o("a",{attrs:{href:""}},[o("img",{attrs:{src:e(251),alt:""}})])]),t._v(" "),o("div",{staticClass:"footer-block-info-text"},[o("p",{staticClass:"info-text-max"},[t._v("2020 © Третьяковская галерея Запад")]),t._v(" "),o("div",{staticClass:"conditions-mini"},[o("p",[t._v("Правила использования")]),t._v(" "),o("p",[t._v("Политика конфиденциальности")])])]),t._v(" "),o("div",{staticClass:"footer-block-about"},[o("div",{staticClass:"footer-block-about-conditions"},[o("div",{staticClass:"conditions-max"},[o("p",[t._v("Условия использования материалов сайта")]),t._v(" "),o("p",[t._v("Политика конфиденциальности")])]),t._v(" "),o("p",{staticClass:"info-text-mini"},[t._v("2020 © Третьяковская галерея Запад")]),t._v(" "),o("div",[o("p",{staticClass:"made flex"},[o("img",{staticClass:"mr-1",attrs:{src:e(238),alt:""}}),t._v(" "),o("span",[t._v("Made by ONY")]),t._v(" "),o("img",{staticClass:"ml-1",attrs:{src:e(239),alt:""}})])])])])])])])}],l={name:"Footer",mounted:function(){var canvas=document.getElementById("footer-arrow");if(canvas.getContext){var t=canvas.getContext("2d");t.beginPath(),t.strokeStyle="#FFFFFF",t.moveTo(canvas.width+1,0),t.lineTo(1,canvas.height/2),t.lineTo(canvas.height/2,canvas.height),t.closePath(),t.stroke()}var n=document.getElementById("footer-arrow-min");if(n.getContext){var e=n.getContext("2d");e.beginPath(),e.strokeStyle="#FFFFFF",e.moveTo(n.width+1,10),e.lineTo(1,n.height/2),e.lineTo(3*n.height,n.height),e.closePath(),e.stroke()}}},d=(e(259),e(41)),component=Object(d.a)(l,(function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)}),o,!1,null,"0538218d",null);n.default=component.exports},241:function(t,n){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTUiIHZpZXdCb3g9IjAgMCA1MCA1NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xNiAwSDBWNTVIMTZWMFoiIGZpbGw9IiNGRkREN0MiLz4NCjxwYXRoIGQ9Ik0zMiAxOEw1MCAwSDMyVjE4WiIgZmlsbD0iI0ZGREQ3QyIvPg0KPHBhdGggZD0iTTUwIDU1TDMyIDM3VjU1SDUwWiIgZmlsbD0iI0ZGREQ3QyIvPg0KPC9zdmc+DQo="},248:function(t,n){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAxNSAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNC43MjI4IDMwVjE0LjY4NEgwLjVWOS44ODQzMkg0LjcyMjhWNi4zNDQ4M0M0LjcyMjggMi4yMzY4NiA3LjI3ODM2IDAgMTEuMDEyNSAwQzEyLjgwMTIgMCAxNC4zMzc1IDAuMTMxMTkgMTQuNzg1NyAwLjE4OTQ5N1Y0LjQ4Mjk5TDEyLjE5NjQgNC40ODQzMkMxMC4xNjYgNC40ODQzMiA5Ljc3MzE2IDUuNDMxOCA5Ljc3MzE2IDYuODIwNTdWOS44ODU2NEgxNC42MTU2TDEzLjk4NTIgMTQuNjg1NEg5Ljc3MzE2VjMwSDQuNzIyOFoiIGZpbGw9IndoaXRlIi8+DQo8L3N2Zz4NCg=="},249:function(t,n,e){t.exports=e.p+"img/insta.9d37843.svg"},250:function(t,n,e){t.exports=e.p+"img/ok.7bdd5f5.svg"},251:function(t,n,e){t.exports=e.p+"img/vk.8debadd.svg"},252:function(t,n,e){var content=e(260);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(54).default)("c687f4b2",content,!0,{sourceMap:!1})},253:function(t,n,e){var content=e(266);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(54).default)("3c28f2e0",content,!0,{sourceMap:!1})},259:function(t,n,e){"use strict";e(252)},260:function(t,n,e){var o=e(53),l=e(242),d=e(261),r=o((function(i){return i[1]})),c=l(d);r.push([t.i,"/*purgecss start ignore*/\n.info-text-mini[data-v-0538218d]{\n  display:none\n}\n@media(max-width:500px){\n.info-text-mini[data-v-0538218d]{\n    display:block;\n    font-size:13px;\n    line-height:20px\n}\n}\n.info-text-max[data-v-0538218d]{\n  display:block\n}\n@media(max-width:500px){\n.info-text-max[data-v-0538218d]{\n    display:none\n}\n}\n.conditions-mini[data-v-0538218d]{\n  display:none\n}\n@media(max-width:500px){\n.conditions-mini[data-v-0538218d]{\n    display:block\n}\n}\n.conditions-max[data-v-0538218d]{\n  display:block\n}\n@media(max-width:500px){\n.conditions-max[data-v-0538218d]{\n    display:none\n}\n}\n@media(max-width:500px){\n.mini-block[data-v-0538218d]{\n    display:flex;\n    align-items:flex-start\n}\n}\n.img-min[data-v-0538218d]{\n  display:none\n}\n@media(max-width:500px){\n.img-min[data-v-0538218d]{\n    display:block;\n    margin-top:3px\n}\n}\n.img-max[data-v-0538218d]{\n  display:block\n}\n@media(max-width:500px){\n.img-max[data-v-0538218d]{\n    display:none!important\n}\n}\n.footer-min[data-v-0538218d]{\n  padding:40px 20px;\n  display:none\n}\n@media(max-width:800px){\n.footer-min[data-v-0538218d]{\n    display:flex;\n    background:#221f1a\n}\n.footer-min .footer-block-logo[data-v-0538218d]{\n    margin-right:152px\n}\n.footer-min #footer-arrow-min[data-v-0538218d]{\n    width:100%;\n    height:200px\n}\n.footer-min .footer-block-info[data-v-0538218d]{\n    display:flex;\n    flex-direction:column;\n    margin-bottom:10px;\n    flex:1\n}\n}\n@media(max-width:800px)and (max-width:500px){\n.footer-min .footer-block-logo[data-v-0538218d]{\n    margin-right:0;\n    height:200px;\n    display:inline\n}\n.footer-min .footer-block-info-title[data-v-0538218d]{\n    margin-left:80px\n}\n}\n.footer[data-v-0538218d]{\n  background:#221f1a;\n  display:flex;\n  padding:40px 20px;\n  justify-content:space-between\n}\n@media(max-width:800px){\n.footer[data-v-0538218d]{\n    display:none!important\n}\n}\n.footer #footer-arrow[data-v-0538218d]{\n  flex:1\n}\n.footer-block-about[data-v-0538218d]{\n  display:flex;\n  flex-direction:column;\n  justify-content:space-between;\n  width:50%\n}\n@media(max-width:800px){\n.footer-block-about[data-v-0538218d]{\n    width:100%\n}\n}\n.footer-block-about-conditions[data-v-0538218d]{\n  font-style:normal;\n  font-weight:400;\n  font-size:15px;\n  line-height:20px;\n  color:#fff;\n  display:flex;\n  justify-content:space-between\n}\n@media(max-width:800px){\n.footer-block-about-conditions[data-v-0538218d]{\n    align-items:flex-end\n}\n}\n@media(max-width:500px){\n.footer-block-about-conditions[data-v-0538218d]{\n    flex-direction:column;\n    justify-content:flex-start;\n    align-items:flex-start;\n    border-top:1px solid #fff;\n    padding-top:20px\n}\n}\n.footer-block-about-conditions .made[data-v-0538218d]{\n  white-space:nowrap;\n  font-style:normal;\n  font-weight:400;\n  font-size:15px;\n  line-height:20px;\n  text-align:right;\n  text-transform:uppercase;\n  color:#fff\n}\n.footer-block-about-conditions .made .ml[data-v-0538218d]{\n  margin-left:5px\n}\n.footer-block-about-conditions .made .mr[data-v-0538218d]{\n  margin-right:5px\n}\n@media(max-width:500px){\n.footer-block-about-conditions .made[data-v-0538218d]{\n    text-align:left;\n    margin-top:15px;\n    font-size:13px;\n    line-height:20px\n}\n}\n.footer-block-about-input[data-v-0538218d]{\n  color:#fff\n}\n.footer-block-about-input p[data-v-0538218d]{\n  margin-bottom:20px;\n  font-style:normal;\n  font-weight:400;\n  font-size:18px;\n  line-height:26px\n}\n@media(max-width:850px){\n.footer-block-about-input p[data-v-0538218d]{\n    font-size:15px;\n    line-height:20px\n}\n}\n@media(max-width:650px){\n.footer-block-about-input p[data-v-0538218d]{\n    font-size:13px\n}\n}\n.footer-block-about-input label[data-v-0538218d]{\n  display:flex;\n  justify-content:space-between;\n  flex-wrap:nowrap;\n  border:1px solid #fff;\n  padding-left:20px;\n  padding-right:20px;\n  width:100%;\n  align-items:center\n}\n.footer-block-about-input label input[data-v-0538218d]{\n  background-color:#221f1a;\n  width:70%;\n  height:60px;\n  outline:none;\n  font-style:normal;\n  font-weight:400;\n  font-size:15px;\n  line-height:20px;\n  text-transform:uppercase;\n  color:#fff\n}\n.footer-block-about-input label input[data-v-0538218d]::-moz-placeholder{\n  color:#fff;\n  opacity:1\n}\n.footer-block-about-input label input[data-v-0538218d]:-ms-input-placeholder{\n  color:#fff;\n  opacity:1\n}\n.footer-block-about-input label input[data-v-0538218d]::placeholder{\n  color:#fff;\n  opacity:1\n}\n.footer-block-about-input label input[data-v-0538218d]:-ms-input-placeholder{\n  color:#fff\n}\n.footer-block-about-input label input[data-v-0538218d]::-ms-input-placeholder{\n  color:#fff\n}\n.footer-block-about-input label button[data-v-0538218d]{\n  font-style:normal;\n  font-weight:400;\n  font-size:15px;\n  line-height:20px;\n  text-align:right;\n  text-transform:uppercase;\n  white-space:nowrap\n}\n@media(max-width:650px){\n.footer-block-about-input label button[data-v-0538218d]{\n    visibility:hidden;\n    position:relative\n}\n.footer-block-about-input label button[data-v-0538218d]:after{\n    content:url("+c+");\n    visibility:visible;\n    display:block;\n    position:absolute;\n    right:0;\n    top:0\n}\n}\n.footer-block-about-title[data-v-0538218d]{\n  display:flex;\n  flex-direction:column\n}\n.footer-block-about-title a[data-v-0538218d]{\n  font-style:normal;\n  font-weight:400;\n  font-size:22px;\n  line-height:25px;\n  text-transform:uppercase;\n  color:#fff;\n  margin-bottom:10px\n}\n.footer-block-info[data-v-0538218d]{\n  justify-content:space-between\n}\n.footer-block-info[data-v-0538218d],.footer-block-info-title[data-v-0538218d]{\n  display:flex;\n  flex-direction:column\n}\n.footer-block-info-title a[data-v-0538218d]{\n  font-style:normal;\n  font-weight:400;\n  font-size:22px;\n  line-height:25px;\n  text-transform:uppercase;\n  color:#fff;\n  margin-bottom:15px\n}\n@media(max-width:850px){\n.footer-block-info-title a[data-v-0538218d]{\n    font-size:15px;\n    line-height:20px;\n    margin-bottom:20px\n}\n}\n@media(max-width:650px){\n.footer-block-info-title a[data-v-0538218d]{\n    font-size:13px;\n    line-height:15px\n}\n}\n.footer-block-info-text[data-v-0538218d]{\n  font-style:normal;\n  font-weight:400;\n  font-size:15px;\n  line-height:20px;\n  color:#fff;\n  margin-bottom:21px\n}\n@media(max-width:650px){\n.footer-block-info-text[data-v-0538218d]{\n    font-size:13px;\n    line-height:20px\n}\n}\n.footer-block-info-social[data-v-0538218d]{\n  margin-top:15px;\n  display:flex;\n  align-items:center\n}\n.footer-block-info-social a[data-v-0538218d]{\n  margin:10px\n}\n@media(max-width:800px){\n.footer-block-info-social[data-v-0538218d]{\n    margin-top:20px;\n    margin-bottom:60px\n}\n.footer-block-info-social a[data-v-0538218d]{\n    margin-right:47px\n}\n.footer-block-info-social a img[data-v-0538218d]{\n    width:16px;\n    height:16px\n}\n}\n@media(max-width:500px){\n.footer-block-info-social[data-v-0538218d]{\n    width:100%;\n    justify-content:space-between\n}\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},261:function(t,n){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAxNiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEgMjFMMTQuMzMzMyAxMUwxIDAuOTk5OTk5IiBzdHJva2U9IndoaXRlIi8+Cjwvc3ZnPgo="},262:function(t,n){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHk9IjYiIHdpZHRoPSIzMCIgaGVpZ2h0PSIxIiBmaWxsPSIjMjIxRjFBIi8+DQo8cmVjdCB5PSIxNCIgd2lkdGg9IjMwIiBoZWlnaHQ9IjEiIGZpbGw9IiMyMjFGMUEiLz4NCjxyZWN0IHk9IjIyIiB3aWR0aD0iMzAiIGhlaWdodD0iMSIgZmlsbD0iIzIyMUYxQSIvPg0KPC9zdmc+DQo="},263:function(t,n){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xIDE5TDEwIDEwTTE5IDFMMTAgMTBNMTAgMTBMMSAxTTEwIDEwTDE5IDE5IiBzdHJva2U9IndoaXRlIi8+DQo8L3N2Zz4NCg=="},264:function(t,n){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxjaXJjbGUgY3g9IjciIGN5PSI3IiByPSI2LjUiIHN0cm9rZT0iIzIyMUYxQSIvPg0KPHBhdGggZD0iTTExLjUgMTEuNUwxOS41IDE5LjUiIHN0cm9rZT0iIzIyMUYxQSIvPg0KPC9zdmc+DQo="},265:function(t,n,e){"use strict";e(253)},266:function(t,n,e){var o=e(53)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\n.menu[data-v-5d168664]{\n  overflow-y:scroll;\n  height:100%\n}\n.min-menu-text[data-v-5d168664]{\n  display:block\n}\n@media(max-width:650px){\n.min-menu-text[data-v-5d168664]{\n    display:none\n}\n}\n.d-none[data-v-5d168664]{\n  display:none\n}\n#header-arrow[data-v-5d168664]{\n  width:100%;\n  height:360px\n}\n@media(max-width:650px){\n#header-arrow[data-v-5d168664]{\n    height:182px\n}\n}\n.bg-yellow[data-v-5d168664]{\n  background:#ffdd7c\n}\n.bg-white[data-v-5d168664]{\n  background:#fff\n}\n.header-block[data-v-5d168664]{\n  position:fixed;\n  z-index:9999\n}\n.min[data-v-5d168664]{\n  display:none\n}\n.hidden[data-v-5d168664],.min-menu[data-v-5d168664]{\n  display:flex\n}\n.min-menu[data-v-5d168664]{\n  flex-direction:column;\n  color:#fff;\n  overflow-y:auto\n}\n.min-menu .nav-title-menu[data-v-5d168664]{\n  color:#fff;\n  margin-bottom:30px\n}\n@media(max-width:650px){\n.min-menu .nav-title-menu[data-v-5d168664]{\n    margin-bottom:20px\n}\n}\n.nav-button[data-v-5d168664]{\n  width:30px\n}\n.bg-dark[data-v-5d168664]{\n  background:#221f1a\n}\n.nav-title[data-v-5d168664]{\n  font-size:15px;\n  line-height:20px;\n  text-transform:uppercase;\n  flex:none;\n  order:1;\n  flex-grow:0;\n  margin:0 21px\n}\n.nav-title[data-v-5d168664],.nav-title-menu[data-v-5d168664]{\n  font-style:normal;\n  font-weight:400;\n  color:#221f1a\n}\n.nav-title-menu[data-v-5d168664]{\n  font-size:22px;\n  line-height:25px\n}\n@media(max-width:850px){\n.nav-title-menu[data-v-5d168664]{\n    font-size:30px;\n    line-height:32px\n}\n}\n@media(max-width:650px){\n.nav-title-menu[data-v-5d168664]{\n    font-size:18px;\n    line-height:26px\n}\n}\n.nav-title-menu-img[data-v-5d168664]{\n  height:32px\n}\n@media(max-width:650px){\n.nav-title-menu-img[data-v-5d168664]{\n    height:22px\n}\n}\n@media(max-width:990px){\n.hidden[data-v-5d168664]{\n    display:none\n}\n.min[data-v-5d168664]{\n    display:flex\n}\n}\n.nav-logo img[data-v-5d168664]{\n  width:50px;\n  height:55px\n}\n.nav-title-logo[data-v-5d168664]{\n  font-weight:700;\n  font-size:18px;\n  line-height:15px;\n  color:#221f1a\n}\n.nav-title-logo-mini[data-v-5d168664]{\n  margin:0;\n  padding:0;\n  font-weight:700;\n  font-size:16px;\n  line-height:20px;\n  color:#221f1a\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},340:function(t,n,e){"use strict";e.r(n);var o=e(296),l={name:"IndexPage",components:{Footer:e(237).default,Main:o.default}},d=e(41),component=Object(d.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("Header",{ref:"header"}),t._v(" "),e("Main"),t._v(" "),e("Footer")],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Header:e(236).default,Main:e(296).default,Footer:e(237).default})}}]);