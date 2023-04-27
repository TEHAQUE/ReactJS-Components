"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var MainMenuList = function MainMenuList() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "mainMenuList",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
      to: "/news",
      className: "mainMenuBtn",
      children: "News"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
      to: "/podcasts",
      className: "mainMenuBtn",
      children: "Podcasts"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
      to: "/",
      className: "mainMenuLogo",
      children: "SW News"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
      to: "/articles",
      className: "mainMenuBtn",
      children: "Articles"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
      to: "/gallery",
      className: "mainMenuBtn",
      children: "Gallery"
    })]
  });
};
var _default = MainMenuList;
exports["default"] = _default;