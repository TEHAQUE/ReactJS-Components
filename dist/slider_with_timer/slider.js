"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _inputComp = _interopRequireDefault(require("./comp/inputComp"));
require("./styl.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Slider = function Slider() {
  var sliderList = [{
    id: 0,
    img: 'https://source.unsplash.com/random/1920x1080'
  }, {
    id: 1,
    img: 'https://source.unsplash.com/random/1920x1081'
  }, {
    id: 2,
    img: 'https://source.unsplash.com/random/1920x1082'
  }, {
    id: 3,
    img: 'https://source.unsplash.com/random/1920x1083'
  }, {
    id: 4,
    img: 'https://source.unsplash.com/random/1920x1084'
  }];
  var _useState = (0, _react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    slideId = _useState2[0],
    setSlideId = _useState2[1];
  var initialArray = [true, false, false, false, false];
  var _useState3 = (0, _react.useState)(initialArray),
    _useState4 = _slicedToArray(_useState3, 2),
    isAnimating = _useState4[0],
    setIsAnimating = _useState4[1];
  (0, _react.useEffect)(function () {
    var timer = setTimeout(function () {
      setSlideId((slideId + 1) % initialArray.length); // the value is divided by the length of the array, after reaching the last index the function returned to the first argument
      setIsAnimating(function (prevState) {
        return prevState.map(function (user, i) {
          return i === slideId ? true : false;
        });
      });
    }, 20000); // here you can change slide display time 20000 = 20s
    return function () {
      return clearTimeout(timer);
    };
  }, [slideId]);
  //function that change slide on click
  var handleButtonClick = function handleButtonClick(index) {
    setSlideId(index);
    setIsAnimating(function (prevState) {
      return prevState.map(function (user, i) {
        return i === index ? true : false;
      });
    });
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, "// this is slider", /*#__PURE__*/React.createElement("div", {
    className: "slider",
    style: {
      backgroundImage: "url(".concat(sliderList[slideId].img, ")")
    }
  }), "// if you don't want buttons to change the slide, skip this component", /*#__PURE__*/React.createElement("div", {
    className: "slider-menu"
  }, /*#__PURE__*/React.createElement("div", {
    className: "slider-indic-bar"
  }, sliderList.map(function (user, i) {
    return /*#__PURE__*/React.createElement(_inputComp["default"], {
      key: sliderList[i].id,
      slideId: i,
      anim: isAnimating[i],
      handleButtonClick: handleButtonClick
    });
  }))));
};
var _default = Slider;
exports["default"] = _default;