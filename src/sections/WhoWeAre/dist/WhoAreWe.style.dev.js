"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WhoAreWeText = exports.WhoAreWeTextContainer = exports.MiniCardsStyle = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\twidth: 40%;\n\tmargin: 0 auto;\n\tline-height: 1.7rem;\n\tfont-weight: 300;\n\n\t@media (max-width: 768px) {\n\t\twidth: auto;\n\t}\n\n\th2 {\n\t\tfont-family: 'Nunito', sans-serif;\n\t\tfont-weight: 600;\n\t\tfont-size: 25px;\n\t\tcolor: #050384;\n\t}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\twidth: 100%;\n\ttext-align: center;\n\tdisplay: block;\n\tmargin-bottom: 100px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n\tgrid-row-gap: 50px;\n\tgrid-column-gap: 30px;\n\tjustify-content: space-between;\n\talign-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MiniCardsStyle = _styledComponents["default"].div(_templateObject());

exports.MiniCardsStyle = MiniCardsStyle;

var WhoAreWeTextContainer = _styledComponents["default"].div(_templateObject2());

exports.WhoAreWeTextContainer = WhoAreWeTextContainer;

var WhoAreWeText = _styledComponents["default"].div(_templateObject3());

exports.WhoAreWeText = WhoAreWeText;