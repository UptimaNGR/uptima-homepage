"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MiniCardBrief = exports.MiniCardHeader = exports.MiniCardStyle = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\tfont-weight: 300;\n\tcolor: #959499;\n\tmargin: 10px 0;\n\tline-height: 1.5rem;\n\t/* font-size: 15.5px; */\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tfont-weight: 600;\n\tfont-size: 20px;\n\tmargin: 10px 0;\n\tfont-family: 'Nunito', sans-serif;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\ttext-align: center;\n\n\t&:not(:first-child) {\n\t\tmargin-left: 50px;\n\n\t\t@media (max-width: 480px) {\n\t\t\tmargin-left: 0;\n\t\t}\n\t}\n\n\t.mini-card-image {\n\t\theight: 80px;\n\t\twidth: 80px;\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MiniCardStyle = _styledComponents["default"].div(_templateObject());

exports.MiniCardStyle = MiniCardStyle;

var MiniCardHeader = _styledComponents["default"].div(_templateObject2());

exports.MiniCardHeader = MiniCardHeader;

var MiniCardBrief = _styledComponents["default"].div(_templateObject3());

exports.MiniCardBrief = MiniCardBrief;