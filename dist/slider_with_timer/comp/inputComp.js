"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var InputComp = function InputComp(_ref) {
  var slideId = _ref.slideId,
    anim = _ref.anim,
    handleButtonClick = _ref.handleButtonClick;
  var handleClick = function handleClick() {
    handleButtonClick(slideId);
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "slider-indic",
    onClick: handleClick
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "slider-indic-el ".concat(anim ? "animate" : "")
  }));
};
var _default = InputComp;
exports["default"] = _default;