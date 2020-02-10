webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var react_typist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-typist */ "./node_modules/react-typist/dist/Typist.js");
/* harmony import */ var react_typist__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_typist__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_3__["createElement"];

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  body {\n    background: #FAFF04;\n    font-size: 18px;\n    font-family: Raleway, Helvetica, sans-serif;\n    font-style: normal;\n    font-weight: normal;\n    line-height: 160%;\n    color: #001C36;\n    text-rendering: optimizeLegibility;\n\n    @media(min-width: ", ") {\n      font-size: 24px;\n    }\n  }\n\n  .Typist .Cursor {\n    display: inline-block;\n  \n    &--blinking {\n      opacity: 1;\n      animation: blink 1s linear infinite;\n      @keyframes blink {\n        0% { opacity:1; }\n        50% { opacity:0; }\n        100% { opacity:1; }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var sizes = {
  lg: "720px"
};
var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["createGlobalStyle"])(_templateObject(), sizes.lg);
var PageContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].section.withConfig({
  displayName: "pages__PageContainer",
  componentId: "sc-6pgrpc-0"
})(["margin:0 auto;max-width:19.5em;padding:0;@media (min-width:", "){max-width:36em;padding:1em;}"], sizes.lg);
var PageHeader = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].h1.withConfig({
  displayName: "pages__PageHeader",
  componentId: "sc-6pgrpc-1"
})(["margin-top:2.5em;min-height:2.7em;margin-bottom:0.8em;font-weight:900;font-size:48px;line-height:89.4%;letter-spacing:-0.02em;text-transform:uppercase;color:#001c36;@media (min-width:", "){font-size:96px;margin-bottom:0.5em;}"], sizes.lg);
var Talent = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].span.withConfig({
  displayName: "pages__Talent",
  componentId: "sc-6pgrpc-2"
})(["color:#0c467a;"]);
var Separator = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].hr.withConfig({
  displayName: "pages__Separator",
  componentId: "sc-6pgrpc-3"
})(["margin:0;height:0.5em;background:#001c36;max-width:5em;border:none;"]);
var Portrait = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].img.withConfig({
  displayName: "pages__Portrait",
  componentId: "sc-6pgrpc-4"
})(["max-width:10em;margin-bottom:0.8em;"]);
var AboutMe = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].article.withConfig({
  displayName: "pages__AboutMe",
  componentId: "sc-6pgrpc-5"
})(["margin-bottom:2.5em;display:flex;flex-direction:column;@media (min-width:", "){flex-direction:row;align-items:flex-start;>:first-child{margin-right:2em;flex:0;}p:first-child{margin-top:0;}img{margin:0;}}"], sizes.lg);
var NavOptions = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].ul.withConfig({
  displayName: "pages__NavOptions",
  componentId: "sc-6pgrpc-6"
})(["margin:1.6em 0;display:flex;align-items:center;justify-content:flex-start;flex-wrap:wrap;flex-direction:row;height:2em;li{margin-right:1em;display:flex;}@media (min-width:", "){margin:2em 0;}"], sizes.lg);
var TextNavItem = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].li.withConfig({
  displayName: "pages__TextNavItem",
  componentId: "sc-6pgrpc-7"
})(["text-transform:uppercase;font-weight:900;font-size:18px;line-height:160%;height:2em;display:flex;align-items:center;@media (min-width:", "){font-size:36px;}"], sizes.lg);
var NavLink = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].a.withConfig({
  displayName: "pages__NavLink",
  componentId: "sc-6pgrpc-8"
})(["color:#001c36;text-decoration:none;transition:color 0.2s,transform 0.2s;&:hover,&:focus,& > *:hover,& > *:focus{color:#0c467a;transform:scale(1.2);}"]);

var BlogItem = __jsx(TextNavItem, null, __jsx(NavLink, {
  title: "https://shaun.substack.com/",
  href: "https://shaun.substack.com/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Blog"));

var Home = function Home() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__["useState"](false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      finishedFirstSection = _React$useState2[0],
      setFinishedFirstSection = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3__["useState"](0),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      loopCount = _React$useState4[0],
      setLoopCount = _React$useState4[1];

  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    console.log("👋 Hello there! Want to get in touch? Drop me an email.");
  }, []);
  return __jsx(PageContainer, null, __jsx(GlobalStyle, null), __jsx(PageHeader, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("title", null, "Shaun Stanworth - Technology, Product, Strategy")), __jsx(react_typist__WEBPACK_IMPORTED_MODULE_6___default.a, {
    cursor: {
      show: false,
      hideWhenDone: true
    },
    onTypingDone: function onTypingDone() {
      setFinishedFirstSection(true);
    }
  }, "Shaun", __jsx("br", null), "builds", __jsx("br", null)), finishedFirstSection ? __jsx(react_typist__WEBPACK_IMPORTED_MODULE_6___default.a, {
    key: loopCount,
    cursor: {
      show: finishedFirstSection,
      blink: true
    },
    startDelay: loopCount === 0 ? 1600 : 0,
    onTypingDone: function onTypingDone() {
      setLoopCount(loopCount + 1);
    }
  }, __jsx(react_typist__WEBPACK_IMPORTED_MODULE_6___default.a.Delay, {
    ms: 600
  }), __jsx(Talent, null, "Product."), __jsx(react_typist__WEBPACK_IMPORTED_MODULE_6___default.a.Backspace, {
    count: "Product.".length,
    delay: 1200
  }), __jsx(react_typist__WEBPACK_IMPORTED_MODULE_6___default.a.Delay, {
    ms: 600
  }), __jsx(Talent, null, "Technology."), __jsx(react_typist__WEBPACK_IMPORTED_MODULE_6___default.a.Backspace, {
    count: "Technology.".length,
    delay: 1200
  }), __jsx(react_typist__WEBPACK_IMPORTED_MODULE_6___default.a.Delay, {
    ms: 600
  }), __jsx(Talent, null, "Strategy."), __jsx(react_typist__WEBPACK_IMPORTED_MODULE_6___default.a.Backspace, {
    count: "Strategy.".length,
    delay: 1200
  }), __jsx(react_typist__WEBPACK_IMPORTED_MODULE_6___default.a.Delay, {
    ms: 600
  }), __jsx(Talent, null, "Teams."), __jsx(react_typist__WEBPACK_IMPORTED_MODULE_6___default.a.Backspace, {
    count: "Teams.".length,
    delay: 1200
  }), __jsx(react_typist__WEBPACK_IMPORTED_MODULE_6___default.a.Delay, {
    ms: 600
  }), __jsx(Talent, null, "At scale."), __jsx(react_typist__WEBPACK_IMPORTED_MODULE_6___default.a.Backspace, {
    count: "At scale.".length,
    delay: 1200
  }), __jsx(react_typist__WEBPACK_IMPORTED_MODULE_6___default.a.Delay, {
    ms: 600
  }), __jsx(Talent, null, "Start-ups."), __jsx(react_typist__WEBPACK_IMPORTED_MODULE_6___default.a.Backspace, {
    count: "Start-ups.".length,
    delay: 1200
  }), __jsx(react_typist__WEBPACK_IMPORTED_MODULE_6___default.a.Delay, {
    ms: 600
  }), __jsx(Talent, null, "Growth."), __jsx(react_typist__WEBPACK_IMPORTED_MODULE_6___default.a.Backspace, {
    count: "Growth.".length,
    delay: 1200
  })) : null), __jsx(Separator, null), __jsx("nav", null, __jsx(NavOptions, null, __jsx("li", null, __jsx(NavLink, {
    href: "mailto:shaun.stanworth@googlemail.com?subject=Hello!",
    target: "_blank",
    rel: "noopener noreferrer",
    title: "shaun.stanworth@googlemail.com"
  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_5__["MdMailOutline"], {
    size: "2em"
  }))), __jsx("li", null, __jsx(NavLink, {
    href: "https://linkedin.com/in/shaunstanworth",
    target: "_blank",
    rel: "noopener noreferrer",
    title: "LinkedIn"
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaLinkedin"], {
    size: "1.8em"
  }))), __jsx("li", null, __jsx(NavLink, {
    href: "https://twitter.com/shauns_uk",
    target: "_blank",
    rel: "noopener noreferrer",
    title: "Twitter"
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaTwitter"], {
    size: "1.8em"
  }))), __jsx("li", null, BlogItem))), __jsx(AboutMe, null, __jsx(Portrait, {
    src: "/portrait-greyscale.jpg",
    alt: "Portrait of Me"
  }), __jsx("div", null, __jsx("p", null, "I\u2019m Shaun Stanworth, and I help teams to build technology, product, and strategy", " ", __jsx("strong", null, "through hands-on engineering leadership"), ". With lead-level experience in a range of technologies \u2014 from Python to PostgreSQL, and React to AWS \u2014 I optimise a product roadmap and engineering strategy that", " ", __jsx("strong", null, "helps you rapidly build and iterate"), " on native mobile apps, web apps, and backends."), __jsx("p", null, __jsx("strong", null, "Currently:"), " Director of Technology @ Freeformers"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.9f13379988486883d2ee.hot-update.js.map