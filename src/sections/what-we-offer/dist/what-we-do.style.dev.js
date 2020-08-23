"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WhatWeOfferStyle = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tmargin-bottom: 100px;\n\n\th3 {\n\t\ttext-align: center;\n\t\tmargin-bottom: 40px;\n\t\tfont-family: 'Nunito', sans-serif;\n\t\tfont-size: 25px;\n\t}\n\n\t.what-we-offer-cards {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(auto-fit, minmax(500px, 1fr));\n\t\tgrid-row-gap: 50px;\n\t\talign-items: center;\n\t\tjustify-content: space-between;\n\n\t\t@media (max-width: 480px) {\n\t\t\tgrid-template-columns: unset;\n\t\t}\n\n\t\t.what-we-offer-card {\n\t\t\twidth: 100%;\n\n\t\t\t@media (min-width: 608px) and (max-width: 1092px) {\n\t\t\t\ttext-align: center;\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-items: center;\n\t\t\t\tflex-direction: column;\n\t\t\t}\n\n\n\t\t\tp {\n\t\t\t\tcolor: #959499;\n\t\t\t\tmargin: 10px 0;\n\t\t\t\tline-height: 1.5rem;\n\t\t\t\twidth: 95%;\n\t\t\t}\n\t\t}\n\t}\n\n\t.img-container {\n\t\theight: auto;\n\t\twidth: 500px;\n\n\t\t@media (max-width: 480px) {\n\t\t\twidth: 100%;\n\t\t}\n\n\t\timg {\n\t\t\twidth: 100%;\n\t\t\theight: auto;\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var WhatWeOfferStyle = _styledComponents["default"].div(_templateObject());

exports.WhatWeOfferStyle = WhatWeOfferStyle;