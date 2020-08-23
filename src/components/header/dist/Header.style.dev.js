"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderStyleContainer = exports.HeaderStyle = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\n\t/* Menu Icon */\n\n\t.menu-btn {\n\t\tposition: relative;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\twidth: 25px;\n\t\tcursor: pointer;\n\t\ttransition: all 0.5s ease-in-out;\n\t\tdisplay: none;\n\t\tbackground: transparent;\n\t\tcursor: pointer;\n\n\t\t@media (max-width: 768px) {\n\t\t\t//CSS\n\t\t\tdisplay: flex;\n\t\t}\n\t}\n\n\t.menu-btn__burger {\n\t\twidth: 25px;\n\t\theight: 2px;\n\t\tbackground: ", ";\n\t\tborder-radius: 5px;\n\t\tbox-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);\n\t\ttransition: all 0.5s ease-in-out;\n\t}\n\t.menu-btn__burger::before,\n\t.menu-btn__burger::after {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\twidth: 25px;\n\t\theight: 2px;\n\t\tbackground: ", ";\n\t\tborder-radius: 5px;\n\t\tbox-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);\n\t\ttransition: all 0.5s ease-in-out;\n\t}\n\t.menu-btn__burger::before {\n\t\ttransform: translateY(-8px);\n\t}\n\t.menu-btn__burger::after {\n\t\ttransform: translateY(8px);\n\t}\n\n\t/* ANIMATION */\n\t.menu-btn.open .menu-btn__burger {\n\t\ttransform: translateX(-50px);\n\t\tbackground: transparent;\n\t\tbox-shadow: none;\n\t}\n\t.menu-btn.open .menu-btn__burger::before {\n\t\ttransform: rotate(45deg) translate(35px, -35px);\n\t}\n\t.menu-btn.open .menu-btn__burger::after {\n\t\ttransform: rotate(-45deg) translate(35px, 35px);\n\t}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\theight: 5rem;\n\tbackground: ", ";\n\ttop: 0;\n\tleft: 0;\n\tz-index: 10;\n\ttransition: top 0.8s;\n\n\t.logo {\n\t\twidth: 100px;\n\t\tcursor: pointer;\n\t}\n\n\t.nav-items {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\talign-items: center;\n\n\t\t@media (max-width: 768px) {\n\t\t\tflex-direction: column;\n\t\t\talign-items: center;\n\t\t\tjustify-content: center;\n\t\t\tposition: absolute;\n\t\t\ttop: -400px;\n\t\t\twidth: 90%;\n\t\t\tbackground: #050484ed;\n\t\t\tborder-radius: 5px;\n\t\t\tz-index: 2000000;\n\t\t\tleft: 0;\n\t\t\t/* display: none; */\n\t\t\ttransition: top 300ms ease-in;\n\t\t\tpadding: 0.5rem 0;\n\t\t\tmargin: 0 5%;\n\t\t}\n\n\t\t&.show {\n\t\t\t/* left: 50%; */\n\t\t\ttop: 1.5%;\n\t\t}\n\n\t\t@media (max-width: 768px) {\n\t\t\tdisplay: block;\n\t\t\ttext-align: center;\n\t\t}\n\n\t\t.nav-item {\n\t\t\ttext-decoration: none;\n\t\t\tlist-style: none;\n\t\t\tmargin-left: 40px;\n\n\t\t\t@media (max-width: 768px) {\n\t\t\t\tmargin: 1.4rem 0;\n\t\t\t}\n\n\t\t\t&:last-child {\n\t\t\t\tborder: 2px solid ", ";\n\t\t\t\tpadding: 13px 30px;\n\t\t\t\tborder-radius: 30px;\n\t\t\t\tfont-weight: bold;\n\n\t\t\t\t@media (max-width: 480px) {\n\t\t\t\t\tborder: 0;\n\t\t\t\t\tpadding: 0;\n\t\t\t\t\tfont-weight: normal;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t.nav-link {\n\t\t\t\tcolor: ", ";\n\t\t\t\ttext-decoration: none;\n\t\t\t\tcursor: pointer;\n\t\t\t\tfont-weight: 300;\n\n\t\t\t\t@media (max-width: 480px) {\n\t\t\t\t\tcolor: #fff;\n\t\t\t\t\tfont-size: 17px;\n\t\t\t\t}\n\n\t\t\t\t&:last-child {\n\t\t\t\t\tfont-family: 'Nunito', sans-serif;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeaderStyle = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.backgroundImg ? "url('assets/img/banner2.png')" : '#edf6ff';
}, function (props) {
  return props.backgroundImg ? '#fff' : ' #050484';
}, function (props) {
  return props.backgroundImg ? '#fff' : ' #050484';
});

exports.HeaderStyle = HeaderStyle;

var HeaderStyleContainer = _styledComponents["default"].div(_templateObject2(), function (props) {
  return !props.whiteIcon ? '#fff' : ' #050484';
}, function (props) {
  return !props.whiteIcon ? '#fff' : ' #050484';
});

exports.HeaderStyleContainer = HeaderStyleContainer;