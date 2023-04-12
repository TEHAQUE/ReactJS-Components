"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _bgLayer = _interopRequireDefault(require("./comp/bgLayer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Parallax = function Parallax(_ref) {
  var images = _ref.images;
  return /*#__PURE__*/React.createElement("div", {
    className: "comp-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "comp"
  }, images.map(function (i, user) {
    return /*#__PURE__*/React.createElement(_bgLayer["default"], {
      key: "bgLayer ".concat(user),
      img: i[0],
      depth: i[1]
    });
  })));
};
var _default = Parallax;
exports["default"] = _default;