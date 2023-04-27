"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _mainMenuList = _interopRequireDefault(require("./mainMenuList"));
require("./style.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var MainMenu = function MainMenu(_ref) {
  var searchFieldName = _ref.searchFieldName;
  var _useState = (0, _react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    scrollTop = _useState2[0],
    setScrollTop = _useState2[1];
  var _useState3 = (0, _react.useState)('notShrinked'),
    _useState4 = _slicedToArray(_useState3, 2),
    isShrinked = _useState4[0],
    setIsShrinked = _useState4[1];
  (0, _react.useEffect)(function () {
    var handleScroll = function handleScroll(event) {
      setScrollTop(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);
    if (scrollTop > 80) {
      return setIsShrinked('shrinked');
    } else {
      return setIsShrinked('notShrinked');
    }
  }, [scrollTop]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "mainMenu-m ".concat(isShrinked),
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "mainMenu",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        className: "searchInput",
        type: "search",
        onChange: searchFieldName,
        placeholder: "Search article..."
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_mainMenuList["default"], {})]
    })
  });
};
var _default = MainMenu;
exports["default"] = _default;