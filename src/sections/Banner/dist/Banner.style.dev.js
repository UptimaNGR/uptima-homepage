"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BannerContainer = exports.BannerText = exports.BannerImg = exports.BannerImgContainer = exports.BannerButton = exports.BannerBriefText = exports.BannerHeading = exports.BannerStyleContainer = exports.BannerStyle = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactRouterHashLink = require("react-router-hash-link");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject9() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\tposition: relative;\n\ttop: 20px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n\theight: auto;\n\twidth: 100%;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n\theight: 400px;\n\tposition: relative;\n\ttop: 30px;\n\tleft:-40px;\n\n\t@media (max-width: 768px) {\n\t\tdisplay: none;\n\t\ttop: 0px;\n\t}\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\tfont-size: 14px;\n\tfont-weight: 600;\n\tpadding: 18px 40px;\n\tcolor: #fff;\n\tborder: none;\n\toutline: none;\n\tbackground: #050484;\n\tborder-radius: 30px;\n\tcursor: pointer;\n\talign-self: flex-start;\n\tfont-family: 'Nunito', sans-serif;\n\ttext-decoration: none;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\tfont-size: 17px;\n\tfont-weight: 300;\n\tline-height: 1.75rem;\n\tfont-family: 'Rubik', sans-serif;\n\n\t@media (max-width: 480px) {\n\t\tline-height: 1.5rem;\n\t\tfont-size: 16px;\n\t\tletter-spacing: 0px;\n\t\tfont-weight: 300;\n\t\tmargin-bottom: 40px;\n\t}\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\tfont-size: 32px;\n\tfont-family: 'Nunito', sans-serif;\n\tmargin: 0;\n\n\t@media (max-width: 768px) {\n\t\tfont-size: 23.5px;\n\t}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tposition: absolute;\n\ttop: 0;\n\n\t@media (max-width: 768px) {\n\t\tdisplay: block;\n\t\twidth: inherit;\n\t}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tposition: relative;\n\tz-index: 5;\n\toverflow-x: hidden;\n\tmargin-bottom: 60px;\n\n\t.banner-img {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tbottom: 0;\n\t\tright: 0;\n\t\theight: 80vh;\n\t}\n\n\t.banner-top-img {\n\t\t@media (max-width: 768px) {\n\t\t\tdisplay: block;\n\t\t\theight: 50vh;\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BannerStyle = _styledComponents["default"].div(_templateObject());

exports.BannerStyle = BannerStyle;

var BannerStyleContainer = _styledComponents["default"].div(_templateObject2());

exports.BannerStyleContainer = BannerStyleContainer;

var BannerHeading = _styledComponents["default"].h3(_templateObject3());

exports.BannerHeading = BannerHeading;

var BannerBriefText = _styledComponents["default"].h3(_templateObject4());

exports.BannerBriefText = BannerBriefText;
var BannerButton = (0, _styledComponents["default"])(_reactRouterHashLink.HashLink)(_templateObject5());
exports.BannerButton = BannerButton;

var BannerImgContainer = _styledComponents["default"].div(_templateObject6());

exports.BannerImgContainer = BannerImgContainer;

var BannerImg = _styledComponents["default"].img(_templateObject7());

exports.BannerImg = BannerImg;

var BannerText = _styledComponents["default"].div(_templateObject8());

exports.BannerText = BannerText;

var BannerContainer = _styledComponents["default"].div(_templateObject9());

exports.BannerContainer = BannerContainer;