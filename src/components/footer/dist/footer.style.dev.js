"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FooterStyleContainer = exports.FooterStyle = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\t@media (max-width: 480px) {\n\t\thr {\n\t\t\tmargin-top: 70px;\n\t\t}\n\t}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tbackground: #050484;\n\tpadding: 30px 0;\n\tposition: relative;\n\n\t.footer-top-content,\n\t.footer-bottom-content {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\n\t\tcolor: #fff;\n\t\twidth: 100%;\n\t\tfont-size: 15px;\n\n\t\t@media (max-width: 480px) {\n\t\t\tdisplay: block;\n\t\t\ttext-align: center;\n\t\t}\n\t}\n\n\t.footer-top-content {\n\t\tli {\n\t\t\tlist-style: none;\n\t\t\tline-height: 2rem;\n\t\t\tfont-size: 14px;\n\n\t\t\t&:first-child {\n\t\t\t\tfont-weight: 600;\n\t\t\t\tfont-size: 16px;\n\t\t\t}\n\t\t}\n\n\t\t/* @media (max-width: 480px) {\n\t\t\tmargin: 10px 0;\n\t\t} */\n\n\t\t.social-icons {\n\t\t\t.icons-pack {\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\n\t\t\t\t.fb,\n\t\t\t\t.in,\n\t\t\t\t.insta {\n\t\t\t\t\tmargin-left: 10px;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t@media (max-width: 480px) {\n\t\t\t\tmargin: 20px auto;\n\t\t\t}\n\t\t}\n\n\t\t.contact-us-btn {\n\t\t\ta {\n\t\t\t\tpadding: 15px 40px;\n\t\t\t\tbackground: #fff;\n\t\t\t\ttext-decoration: none;\n\t\t\t\tborder-radius: 40px;\n\t\t\t\tfont-size: 14px;\n\t\t\t\tfont-weight: 600;\n\t\t\t\tcolor: #050484;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: 20px;\n\t\t\t}\n\t\t}\n\t}\n\n\t.footer-bottom-content {\n\t\talign-items: center;\n\t\tfont-size: 14px;\n\n\t\tli {\n\t\t\tlist-style: none;\n\t\t}\n\n\t\t.brand {\n\t\t\twidth: 100px;\n\t\t\theight: 100px;\n\n\t\t\t@media (max-width: 480px) {\n\t\t\t\tmargin: auto;\n\t\t\t}\n\n\t\t\t.logo {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t}\n\t\t}\n\n\t\t.privacy {\n\t\t\ta {\n\t\t\t\tcolor: #fff;\n\t\t\t\ttext-decoration: none;\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FooterStyle = _styledComponents["default"].div(_templateObject());

exports.FooterStyle = FooterStyle;

var FooterStyleContainer = _styledComponents["default"].div(_templateObject2());

exports.FooterStyleContainer = FooterStyleContainer;