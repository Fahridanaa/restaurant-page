/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: 'Rubik';
  src: url('https://fonts.googleapis.com/css2?family=Oswald&family=Roboto&family=Rubik&display=swap');
  font-style: normal;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Rubik', sans-serif;
}

body {
  position: relative;
  height: 100vh;
}

p {
  color: #4E6E3B;
  font-size: 1.2rem;
}

h2 {
  color: #4E6E3B;
  font-size: 2rem;
  font-weight: bold;
}

#content {
  background-color: #C4D7B2;
  box-shadow: 0 0 5px rgba(0,0,0,0.1);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

#nav {
  position: sticky;
  background-color: #E1ECC8;
  top: 0;
  height: 4rem;
  box-shadow: 0 0 5px rgba(0,0,0,0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 20px;
}

#logo {
  margin-left: 20px;
  font-size: 2rem;
  font-weight: bold;
  color: #4e6e3b;
}

#nav-links {
  margin-right: 20px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #4E6E3B;
  display: flex;
  align-items: center;
  height: 2rem;
  gap: 5rem;
}

a {
  text-decoration: none;
  color: rgb(78, 110, 59); 
}

a:hover {
  color: rgb(78, 110, 59, 0.8);
  border-bottom: 2px solid rgb(78, 110, 59, 0.8);
}

#main {
  flex: 1;
  min-height: auto;
  background-color: #C4D7B2;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  gap: 2rem;
  font-size: 2rem;
  color: #4E6E3B;
}

#main-title {
  font-size: 4rem;
  font-weight: bold;
  color: #4E6E3B;
}

/* menu */

#content-menu {
  height: 80%;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  grid-auto-rows: minmax(250px, 1fr);
  gap: 32px;
}

.card-menu {
  background-color: #F7FFE5;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 0 5px rgba(0,0,0,0.4);
  text-align: center;
  padding: 2rem;
}

.card-menu img {
  width: 50%;
  height: 50%;
  object-fit: cover;
  border: 2px solid #2e4123;
  border-radius: 25px;
  transition: transform 0.5s;

}

.card-menu:hover {
  transform: translateY(-5px);
}

#about-card {
  padding: 2rem;
  background-color: #F7FFE5;
  border-radius: 20px;
  width: 65%;
  height: 50rem;
  box-shadow: 0 0 5px rgba(0,0,0,0.4);
  overflow: auto;
}

#about-card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

#about-card-content h1{
  text-align: center;
  font-size: 2.4rem;
  color: #4E6E3B;
  font-weight: 700;
}

#about-card-content p {
  text-align: justify;
  line-height: 2rem;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,oBAAoB;EACpB,mGAAmG;EACnG,kBAAkB;AACpB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,gCAAgC;AAClC;;AAEA;EACE,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;EACzB,mCAAmC;EACnC,WAAW;EACX,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,gBAAgB;EAChB,yBAAyB;EACzB,MAAM;EACN,YAAY;EACZ,mCAAmC;EACnC,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,iBAAiB;EACjB,cAAc;EACd,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,SAAS;AACX;;AAEA;EACE,qBAAqB;EACrB,uBAAuB;AACzB;;AAEA;EACE,4BAA4B;EAC5B,8CAA8C;AAChD;;AAEA;EACE,OAAO;EACP,gBAAgB;EAChB,yBAAyB;EACzB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,YAAY;EACZ,SAAS;EACT,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,cAAc;AAChB;;AAEA,SAAS;;AAET;EACE,WAAW;EACX,UAAU;EACV,aAAa;EACb,4DAA4D;EAC5D,kCAAkC;EAClC,SAAS;AACX;;AAEA;EACE,yBAAyB;EACzB,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,mBAAmB;EACnB,SAAS;EACT,mCAAmC;EACnC,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,UAAU;EACV,WAAW;EACX,iBAAiB;EACjB,yBAAyB;EACzB,mBAAmB;EACnB,0BAA0B;;AAE5B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,mBAAmB;EACnB,UAAU;EACV,aAAa;EACb,mCAAmC;EACnC,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;AACnB","sourcesContent":["@font-face {\r\n  font-family: 'Rubik';\r\n  src: url('https://fonts.googleapis.com/css2?family=Oswald&family=Roboto&family=Rubik&display=swap');\r\n  font-style: normal;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Rubik', sans-serif;\r\n}\r\n\r\nbody {\r\n  position: relative;\r\n  height: 100vh;\r\n}\r\n\r\np {\r\n  color: #4E6E3B;\r\n  font-size: 1.2rem;\r\n}\r\n\r\nh2 {\r\n  color: #4E6E3B;\r\n  font-size: 2rem;\r\n  font-weight: bold;\r\n}\r\n\r\n#content {\r\n  background-color: #C4D7B2;\r\n  box-shadow: 0 0 5px rgba(0,0,0,0.1);\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 32px;\r\n}\r\n\r\n#nav {\r\n  position: sticky;\r\n  background-color: #E1ECC8;\r\n  top: 0;\r\n  height: 4rem;\r\n  box-shadow: 0 0 5px rgba(0,0,0,0.1);\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 25px 20px;\r\n}\r\n\r\n#logo {\r\n  margin-left: 20px;\r\n  font-size: 2rem;\r\n  font-weight: bold;\r\n  color: #4e6e3b;\r\n}\r\n\r\n#nav-links {\r\n  margin-right: 20px;\r\n  font-size: 1.2rem;\r\n  font-weight: bold;\r\n  color: #4E6E3B;\r\n  display: flex;\r\n  align-items: center;\r\n  height: 2rem;\r\n  gap: 5rem;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: rgb(78, 110, 59); \r\n}\r\n\r\na:hover {\r\n  color: rgb(78, 110, 59, 0.8);\r\n  border-bottom: 2px solid rgb(78, 110, 59, 0.8);\r\n}\r\n\r\n#main {\r\n  flex: 1;\r\n  min-height: auto;\r\n  background-color: #C4D7B2;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n#main-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin: auto;\r\n  gap: 2rem;\r\n  font-size: 2rem;\r\n  color: #4E6E3B;\r\n}\r\n\r\n#main-title {\r\n  font-size: 4rem;\r\n  font-weight: bold;\r\n  color: #4E6E3B;\r\n}\r\n\r\n/* menu */\r\n\r\n#content-menu {\r\n  height: 80%;\r\n  width: 90%;\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));\r\n  grid-auto-rows: minmax(250px, 1fr);\r\n  gap: 32px;\r\n}\r\n\r\n.card-menu {\r\n  background-color: #F7FFE5;\r\n  border-radius: 25px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  box-shadow: 0 0 5px rgba(0,0,0,0.4);\r\n  text-align: center;\r\n  padding: 2rem;\r\n}\r\n\r\n.card-menu img {\r\n  width: 50%;\r\n  height: 50%;\r\n  object-fit: cover;\r\n  border: 2px solid #2e4123;\r\n  border-radius: 25px;\r\n  transition: transform 0.5s;\r\n\r\n}\r\n\r\n.card-menu:hover {\r\n  transform: translateY(-5px);\r\n}\r\n\r\n#about-card {\r\n  padding: 2rem;\r\n  background-color: #F7FFE5;\r\n  border-radius: 20px;\r\n  width: 65%;\r\n  height: 50rem;\r\n  box-shadow: 0 0 5px rgba(0,0,0,0.4);\r\n  overflow: auto;\r\n}\r\n\r\n#about-card-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 2rem;\r\n}\r\n\r\n#about-card-content h1{\r\n  text-align: center;\r\n  font-size: 2.4rem;\r\n  color: #4E6E3B;\r\n  font-weight: 700;\r\n}\r\n\r\n#about-card-content p {\r\n  text-align: justify;\r\n  line-height: 2rem;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/img/Pan-Seared-Sea-Bass.jpg":
/*!*****************************************!*\
  !*** ./src/img/Pan-Seared-Sea-Bass.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/Pan-Seared-Sea-Bass.jpg");

/***/ }),

/***/ "./src/img/carpaccio-salmon.jpg":
/*!**************************************!*\
  !*** ./src/img/carpaccio-salmon.jpg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/carpaccio-salmon.jpg");

/***/ }),

/***/ "./src/img/fillet-mignon.jpg":
/*!***********************************!*\
  !*** ./src/img/fillet-mignon.jpg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/fillet-mignon.jpg");

/***/ }),

/***/ "./src/img/fried-calamari.jpg":
/*!************************************!*\
  !*** ./src/img/fried-calamari.jpg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/fried-calamari.jpg");

/***/ }),

/***/ "./src/img/lobster.jpg":
/*!*****************************!*\
  !*** ./src/img/lobster.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/lobster.jpg");

/***/ }),

/***/ "./src/img/vegetarian-stuffed-peppers.jpg":
/*!************************************************!*\
  !*** ./src/img/vegetarian-stuffed-peppers.jpg ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/vegetarian-stuffed-peppers.jpg");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeAboutPage: () => (/* binding */ makeAboutPage)
/* harmony export */ });
let makeAboutPage = () => {
  let contentAbout = document.createElement('div');
  contentAbout.setAttribute('id', 'about-card');
  
  
  let aboutContent = document.createElement('div');
  aboutContent.setAttribute('id', 'about-card-content');
  aboutContent.innerHTML += '<h1>About Us</h1>';
  aboutContent.innerHTML += '<p>Selamat datang di Restoran Delightful Bites! Kami adalah destinasi kuliner yang memadukan cita rasa autentik dengan pengalaman bersantap yang menyenangkan. Dengan komitmen untuk menyajikan hidangan berkualitas tinggi dari bahan-bahan segar dan berkualitas, Restoran Delightful Bites telah menjadi bagian integral dari komunitas kuliner kami sejak tahun 2005.</p>';
  aboutContent.innerHTML += '<p>Didirikan oleh pasangan suami-istri, David dan Sarah Mitchell, restoran kami telah berupaya untuk menciptakan ruang di mana tamu dapat menikmati makanan lezat dalam atmosfer yang santai dan bersahabat. Kami percaya bahwa makanan adalah pengalaman yang menghubungkan, dan setiap hidangan yang kami sajikan adalah manifestasi dari dedikasi kami untuk keahlian kuliner dankerajinan tangan.</p>';
  aboutContent.innerHTML += '<p>Dapur kami dipimpin oleh Chef Emma Williams, yang memiliki pengalaman luas di berbagai koki terkemuka di seluruh dunia. Chef Emma selalu berusaha untuk menciptakan hidangan yang tidak hanya memanjakan lidah, tetapi juga memuaskan hati dan jiwa. Kami memahami pentingnya keberlanjutan dalam industri makanan, itulah sebabnya kami berkomitmen untuk menggunakan bahan-bahan lokal dan organik sebanyak mungkin. Kami juga bekerja sama dengan petani dan produsen setempat untuk memastikan bahwa setiap hidangan yang kami sajikan adalah sebuah pengalaman yang memuaskan dan ramah lingkungan.</p>';
  aboutContent.innerHTML += '<p>Selamat datang di Restoran Delightful Bites. Kami tidak sabar untuk berbagi pengalaman kuliner kami dengan Anda!</p><p>Terima kasih atas dukungan Anda.</p>';
  aboutContent.innerHTML += '<p>chatGPT</p>';

  contentAbout.appendChild(aboutContent);

  return contentAbout;
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeHomePage: () => (/* binding */ makeHomePage)
/* harmony export */ });
let makeHomePage = () => {
  let mainContent = document.createElement('div');
  mainContent.setAttribute('id', 'main-content');

  let mainTitle = document.createElement('div');
  mainTitle.setAttribute('id', 'main-title');
  mainTitle.innerHTML = 'Welcome to Restaurant';

  let mainSubtitle = document.createElement('div');
  mainSubtitle.setAttribute('id', 'main-subtitle');
  mainSubtitle.innerHTML = 'The best food in the world';

  mainContent.appendChild(mainTitle);
  mainContent.appendChild(mainSubtitle);

  return mainContent;
}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeMenuPage: () => (/* binding */ makeMenuPage)
/* harmony export */ });
/* harmony import */ var _img_fillet_mignon_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/fillet-mignon.jpg */ "./src/img/fillet-mignon.jpg");
/* harmony import */ var _img_Pan_Seared_Sea_Bass_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/Pan-Seared-Sea-Bass.jpg */ "./src/img/Pan-Seared-Sea-Bass.jpg");
/* harmony import */ var _img_vegetarian_stuffed_peppers_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/vegetarian-stuffed-peppers.jpg */ "./src/img/vegetarian-stuffed-peppers.jpg");
/* harmony import */ var _img_carpaccio_salmon_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/carpaccio-salmon.jpg */ "./src/img/carpaccio-salmon.jpg");
/* harmony import */ var _img_fried_calamari_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/fried-calamari.jpg */ "./src/img/fried-calamari.jpg");
/* harmony import */ var _img_lobster_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/lobster.jpg */ "./src/img/lobster.jpg");








let menu = [
  {
    name: 'Fillet Mignon',
    price: 50,
    description: 'Grilled to perfection, served with garlic mashed potatoes and sautéed asparagus.',
    image: _img_fillet_mignon_jpg__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  {
    name: 'Pan-Seared Sea Bass',
    price: 40,
    description: 'Served with lemon butter sauce, couscous, and roasted vegetables.',
    image: _img_Pan_Seared_Sea_Bass_jpg__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  {
    name: 'Vegetarian Stuffed Bell Peppers',
    price: 30,
    description: 'Bell peppers stuffed with quinoa, black beans, and vegetables, topped with cheese.',
    image: _img_vegetarian_stuffed_peppers_jpg__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  {
    name: 'Carpaccio Salmón',
    price: 30,
    description: 'Slices of fresh salmon served with capers, red onion, and lemon vinaigrette.',
    image: _img_carpaccio_salmon_jpg__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  {
    name: 'Crispy Calamari',
    price: 20,
    description: 'Tender calamari rings lightly fried and served with a zesty marinara sauce.',
    image: _img_fried_calamari_jpg__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  {
    name: 'Lobster Bisque',
    price: 20,
    description: 'Creamy lobster bisque with a hint of sherry.',
    image: _img_lobster_jpg__WEBPACK_IMPORTED_MODULE_5__["default"]
  }
]

let makeMenuPage = () => {
  let contentMenu = document.createElement('div');
  contentMenu.setAttribute('id', 'content-menu');

  for (let index = 0; index < menu.length; index++) {
    let imgElement = document.createElement('img');
    imgElement.src = menu[index].image;
    
    contentMenu.appendChild(document.createElement('div'));
    contentMenu.children[index].setAttribute('class', `card-menu ${index}`);
    
    
    contentMenu.children[index].appendChild(document.createElement('h2')).textContent = menu[index].name;
    contentMenu.children[index].appendChild(imgElement);
    contentMenu.children[index].appendChild(document.createElement('p')).textContent = menu[index].description;
    contentMenu.children[index].appendChild(document.createElement('p')).innerHTML = `<b>$${menu[index].price}</b>`;
  }

  return contentMenu;
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ "./src/about.js");





let content = document.createElement('div');
content.setAttribute('id', 'content');
let main = document.createElement('div');
main.setAttribute('id', 'main');

let makeNavBar = () => {
  let links = ['Home', 'Menu', 'About'];

  let nav = document.createElement('div');
  nav.setAttribute('id', 'nav');

  let navLinks = document.createElement('div');
  navLinks.setAttribute('id', 'nav-links');

  let logo = document.createElement('div');
  logo.setAttribute('id', 'logo');
  logo.innerHTML = 'Restaurant';

  for (let i = 0; i < links.length; i++) {
    navLinks.appendChild(document.createElement('a'));
    navLinks.children[i].setAttribute('href', '#');
    navLinks.children[i].innerHTML = links[i];
    navLinks.children[i].addEventListener('click', () => {makePage(i);});
  }
  
  nav.appendChild(logo);
  nav.appendChild(navLinks);

  return nav;
}

let makePage = (index) => {
  content.innerHTML = '';
  main.innerHTML = '';
  
  content.appendChild(makeNavBar());

  if(index == 0) {
    main.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_2__.makeHomePage)());
  }else if(index == 1) {
    main.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.makeMenuPage)());
  }else {
    main.appendChild((0,_about_js__WEBPACK_IMPORTED_MODULE_3__.makeAboutPage)());
  }

  content.appendChild(main);
};

document.body.appendChild(content);
makePage(0);





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNvQjtBQUNBO0FBQ0U7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxhQUFhO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixzREFBWTtBQUNqQyxHQUFHO0FBQ0gscUJBQXFCLHNEQUFZO0FBQ2pDLEdBQUc7QUFDSCxxQkFBcUIsd0RBQWE7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW1nL1Bhbi1TZWFyZWQtU2VhLUJhc3MuanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbWcvY2FycGFjY2lvLXNhbG1vbi5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2ltZy9maWxsZXQtbWlnbm9uLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW1nL2ZyaWVkLWNhbGFtYXJpLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW1nL2xvYnN0ZXIuanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbWcvdmVnZXRhcmlhbi1zdHVmZmVkLXBlcHBlcnMuanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ1J1YmlrJztcclxuICBzcmM6IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Pc3dhbGQmZmFtaWx5PVJvYm90byZmYW1pbHk9UnViaWsmZGlzcGxheT1zd2FwJyk7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG4qIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxucCB7XHJcbiAgY29sb3I6ICM0RTZFM0I7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuXHJcbmgyIHtcclxuICBjb2xvcjogIzRFNkUzQjtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbiNjb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzREN0IyO1xyXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAzMnB4O1xyXG59XHJcblxyXG4jbmF2IHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFMUVDQzg7XHJcbiAgdG9wOiAwO1xyXG4gIGhlaWdodDogNHJlbTtcclxuICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDI1cHggMjBweDtcclxufVxyXG5cclxuI2xvZ28ge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzRlNmUzYjtcclxufVxyXG5cclxuI25hdi1saW5rcyB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjNEU2RTNCO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgZ2FwOiA1cmVtO1xyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IHJnYig3OCwgMTEwLCA1OSk7IFxyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICBjb2xvcjogcmdiKDc4LCAxMTAsIDU5LCAwLjgpO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoNzgsIDExMCwgNTksIDAuOCk7XHJcbn1cclxuXHJcbiNtYWluIHtcclxuICBmbGV4OiAxO1xyXG4gIG1pbi1oZWlnaHQ6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0M0RDdCMjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI21haW4tY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGdhcDogMnJlbTtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgY29sb3I6ICM0RTZFM0I7XHJcbn1cclxuXHJcbiNtYWluLXRpdGxlIHtcclxuICBmb250LXNpemU6IDRyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICM0RTZFM0I7XHJcbn1cclxuXHJcbi8qIG1lbnUgKi9cclxuXHJcbiNjb250ZW50LW1lbnUge1xyXG4gIGhlaWdodDogODAlO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg1MDBweCwgMWZyKSk7XHJcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgyNTBweCwgMWZyKTtcclxuICBnYXA6IDMycHg7XHJcbn1cclxuXHJcbi5jYXJkLW1lbnUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGN0ZGRTU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLDAsMCwwLjQpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAycmVtO1xyXG59XHJcblxyXG4uY2FyZC1tZW51IGltZyB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDUwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMmU0MTIzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XHJcblxyXG59XHJcblxyXG4uY2FyZC1tZW51OmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbn1cclxuXHJcbiNhYm91dC1jYXJkIHtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGN0ZGRTU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB3aWR0aDogNjUlO1xyXG4gIGhlaWdodDogNTByZW07XHJcbiAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsMCwwLDAuNCk7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbiNhYm91dC1jYXJkLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMnJlbTtcclxufVxyXG5cclxuI2Fib3V0LWNhcmQtY29udGVudCBoMXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyLjRyZW07XHJcbiAgY29sb3I6ICM0RTZFM0I7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuI2Fib3V0LWNhcmQtY29udGVudCBwIHtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQixtR0FBbUc7RUFDbkcsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixtQ0FBbUM7RUFDbkMsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsTUFBTTtFQUNOLFlBQVk7RUFDWixtQ0FBbUM7RUFDbkMsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLE9BQU87RUFDUCxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFNBQVM7RUFDVCxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQSxTQUFTOztBQUVUO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixhQUFhO0VBQ2IsNERBQTREO0VBQzVELGtDQUFrQztFQUNsQyxTQUFTO0FBQ1g7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLDBCQUEwQjs7QUFFNUI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsYUFBYTtFQUNiLG1DQUFtQztFQUNuQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ1J1YmlrJztcXHJcXG4gIHNyYzogdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9zd2FsZCZmYW1pbHk9Um9ib3RvJmZhbWlseT1SdWJpayZkaXNwbGF5PXN3YXAnKTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbnAge1xcclxcbiAgY29sb3I6ICM0RTZFM0I7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgY29sb3I6ICM0RTZFM0I7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0M0RDdCMjtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLDAsMCwwLjEpO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMzJweDtcXHJcXG59XFxyXFxuXFxyXFxuI25hdiB7XFxyXFxuICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UxRUNDODtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGhlaWdodDogNHJlbTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLDAsMCwwLjEpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAyNXB4IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiNsb2dvIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogIzRlNmUzYjtcXHJcXG59XFxyXFxuXFxyXFxuI25hdi1saW5rcyB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgY29sb3I6ICM0RTZFM0I7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMnJlbTtcXHJcXG4gIGdhcDogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogcmdiKDc4LCAxMTAsIDU5KTsgXFxyXFxufVxcclxcblxcclxcbmE6aG92ZXIge1xcclxcbiAgY29sb3I6IHJnYig3OCwgMTEwLCA1OSwgMC44KTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoNzgsIDExMCwgNTksIDAuOCk7XFxyXFxufVxcclxcblxcclxcbiNtYWluIHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBtaW4taGVpZ2h0OiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0M0RDdCMjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI21haW4tY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBjb2xvcjogIzRFNkUzQjtcXHJcXG59XFxyXFxuXFxyXFxuI21haW4tdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiA0cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogIzRFNkUzQjtcXHJcXG59XFxyXFxuXFxyXFxuLyogbWVudSAqL1xcclxcblxcclxcbiNjb250ZW50LW1lbnUge1xcclxcbiAgaGVpZ2h0OiA4MCU7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDUwMHB4LCAxZnIpKTtcXHJcXG4gIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoMjUwcHgsIDFmcik7XFxyXFxuICBnYXA6IDMycHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLW1lbnUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RkZFNTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwwLDAsMC40KTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5jYXJkLW1lbnUgaW1nIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBoZWlnaHQ6IDUwJTtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzJlNDEyMztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtbWVudTpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XFxyXFxufVxcclxcblxcclxcbiNhYm91dC1jYXJkIHtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGRkU1O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIHdpZHRoOiA2NSU7XFxyXFxuICBoZWlnaHQ6IDUwcmVtO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsMCwwLDAuNCk7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI2Fib3V0LWNhcmQtY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2Fib3V0LWNhcmQtY29udGVudCBoMXtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMi40cmVtO1xcclxcbiAgY29sb3I6ICM0RTZFM0I7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4jYWJvdXQtY2FyZC1jb250ZW50IHAge1xcclxcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvUGFuLVNlYXJlZC1TZWEtQmFzcy5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2NhcnBhY2Npby1zYWxtb24uanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9maWxsZXQtbWlnbm9uLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvZnJpZWQtY2FsYW1hcmkuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9sb2JzdGVyLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvdmVnZXRhcmlhbi1zdHVmZmVkLXBlcHBlcnMuanBnXCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJsZXQgbWFrZUFib3V0UGFnZSA9ICgpID0+IHtcclxuICBsZXQgY29udGVudEFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGVudEFib3V0LnNldEF0dHJpYnV0ZSgnaWQnLCAnYWJvdXQtY2FyZCcpO1xyXG4gIFxyXG4gIFxyXG4gIGxldCBhYm91dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBhYm91dENvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdhYm91dC1jYXJkLWNvbnRlbnQnKTtcclxuICBhYm91dENvbnRlbnQuaW5uZXJIVE1MICs9ICc8aDE+QWJvdXQgVXM8L2gxPic7XHJcbiAgYWJvdXRDb250ZW50LmlubmVySFRNTCArPSAnPHA+U2VsYW1hdCBkYXRhbmcgZGkgUmVzdG9yYW4gRGVsaWdodGZ1bCBCaXRlcyEgS2FtaSBhZGFsYWggZGVzdGluYXNpIGt1bGluZXIgeWFuZyBtZW1hZHVrYW4gY2l0YSByYXNhIGF1dGVudGlrIGRlbmdhbiBwZW5nYWxhbWFuIGJlcnNhbnRhcCB5YW5nIG1lbnllbmFuZ2thbi4gRGVuZ2FuIGtvbWl0bWVuIHVudHVrIG1lbnlhamlrYW4gaGlkYW5nYW4gYmVya3VhbGl0YXMgdGluZ2dpIGRhcmkgYmFoYW4tYmFoYW4gc2VnYXIgZGFuIGJlcmt1YWxpdGFzLCBSZXN0b3JhbiBEZWxpZ2h0ZnVsIEJpdGVzIHRlbGFoIG1lbmphZGkgYmFnaWFuIGludGVncmFsIGRhcmkga29tdW5pdGFzIGt1bGluZXIga2FtaSBzZWphayB0YWh1biAyMDA1LjwvcD4nO1xyXG4gIGFib3V0Q29udGVudC5pbm5lckhUTUwgKz0gJzxwPkRpZGlyaWthbiBvbGVoIHBhc2FuZ2FuIHN1YW1pLWlzdHJpLCBEYXZpZCBkYW4gU2FyYWggTWl0Y2hlbGwsIHJlc3RvcmFuIGthbWkgdGVsYWggYmVydXBheWEgdW50dWsgbWVuY2lwdGFrYW4gcnVhbmcgZGkgbWFuYSB0YW11IGRhcGF0IG1lbmlrbWF0aSBtYWthbmFuIGxlemF0IGRhbGFtIGF0bW9zZmVyIHlhbmcgc2FudGFpIGRhbiBiZXJzYWhhYmF0LiBLYW1pIHBlcmNheWEgYmFod2EgbWFrYW5hbiBhZGFsYWggcGVuZ2FsYW1hbiB5YW5nIG1lbmdodWJ1bmdrYW4sIGRhbiBzZXRpYXAgaGlkYW5nYW4geWFuZyBrYW1pIHNhamlrYW4gYWRhbGFoIG1hbmlmZXN0YXNpIGRhcmkgZGVkaWthc2kga2FtaSB1bnR1ayBrZWFobGlhbiBrdWxpbmVyIGRhbmtlcmFqaW5hbiB0YW5nYW4uPC9wPic7XHJcbiAgYWJvdXRDb250ZW50LmlubmVySFRNTCArPSAnPHA+RGFwdXIga2FtaSBkaXBpbXBpbiBvbGVoIENoZWYgRW1tYSBXaWxsaWFtcywgeWFuZyBtZW1pbGlraSBwZW5nYWxhbWFuIGx1YXMgZGkgYmVyYmFnYWkga29raSB0ZXJrZW11a2EgZGkgc2VsdXJ1aCBkdW5pYS4gQ2hlZiBFbW1hIHNlbGFsdSBiZXJ1c2FoYSB1bnR1ayBtZW5jaXB0YWthbiBoaWRhbmdhbiB5YW5nIHRpZGFrIGhhbnlhIG1lbWFuamFrYW4gbGlkYWgsIHRldGFwaSBqdWdhIG1lbXVhc2thbiBoYXRpIGRhbiBqaXdhLiBLYW1pIG1lbWFoYW1pIHBlbnRpbmdueWEga2ViZXJsYW5qdXRhbiBkYWxhbSBpbmR1c3RyaSBtYWthbmFuLCBpdHVsYWggc2ViYWJueWEga2FtaSBiZXJrb21pdG1lbiB1bnR1ayBtZW5nZ3VuYWthbiBiYWhhbi1iYWhhbiBsb2thbCBkYW4gb3JnYW5payBzZWJhbnlhayBtdW5na2luLiBLYW1pIGp1Z2EgYmVrZXJqYSBzYW1hIGRlbmdhbiBwZXRhbmkgZGFuIHByb2R1c2VuIHNldGVtcGF0IHVudHVrIG1lbWFzdGlrYW4gYmFod2Egc2V0aWFwIGhpZGFuZ2FuIHlhbmcga2FtaSBzYWppa2FuIGFkYWxhaCBzZWJ1YWggcGVuZ2FsYW1hbiB5YW5nIG1lbXVhc2thbiBkYW4gcmFtYWggbGluZ2t1bmdhbi48L3A+JztcclxuICBhYm91dENvbnRlbnQuaW5uZXJIVE1MICs9ICc8cD5TZWxhbWF0IGRhdGFuZyBkaSBSZXN0b3JhbiBEZWxpZ2h0ZnVsIEJpdGVzLiBLYW1pIHRpZGFrIHNhYmFyIHVudHVrIGJlcmJhZ2kgcGVuZ2FsYW1hbiBrdWxpbmVyIGthbWkgZGVuZ2FuIEFuZGEhPC9wPjxwPlRlcmltYSBrYXNpaCBhdGFzIGR1a3VuZ2FuIEFuZGEuPC9wPic7XHJcbiAgYWJvdXRDb250ZW50LmlubmVySFRNTCArPSAnPHA+Y2hhdEdQVDwvcD4nO1xyXG5cclxuICBjb250ZW50QWJvdXQuYXBwZW5kQ2hpbGQoYWJvdXRDb250ZW50KTtcclxuXHJcbiAgcmV0dXJuIGNvbnRlbnRBYm91dDtcclxufVxyXG5cclxuZXhwb3J0IHsgbWFrZUFib3V0UGFnZSB9OyIsImxldCBtYWtlSG9tZVBhZ2UgPSAoKSA9PiB7XHJcbiAgbGV0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbWFpbkNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdtYWluLWNvbnRlbnQnKTtcclxuXHJcbiAgbGV0IG1haW5UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG1haW5UaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW4tdGl0bGUnKTtcclxuICBtYWluVGl0bGUuaW5uZXJIVE1MID0gJ1dlbGNvbWUgdG8gUmVzdGF1cmFudCc7XHJcblxyXG4gIGxldCBtYWluU3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtYWluU3VidGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdtYWluLXN1YnRpdGxlJyk7XHJcbiAgbWFpblN1YnRpdGxlLmlubmVySFRNTCA9ICdUaGUgYmVzdCBmb29kIGluIHRoZSB3b3JsZCc7XHJcblxyXG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG1haW5UaXRsZSk7XHJcbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpblN1YnRpdGxlKTtcclxuXHJcbiAgcmV0dXJuIG1haW5Db250ZW50O1xyXG59XHJcblxyXG5leHBvcnQgeyBtYWtlSG9tZVBhZ2UgfTsiLCJpbXBvcnQgRmlsbGV0TWlnbm9uIGZyb20gJy4vaW1nL2ZpbGxldC1taWdub24uanBnJztcclxuaW1wb3J0IFBhblNlYXJlZCBmcm9tICcuL2ltZy9QYW4tU2VhcmVkLVNlYS1CYXNzLmpwZyc7XHJcbmltcG9ydCB2ZWdldGFyaWFuIGZyb20gJy4vaW1nL3ZlZ2V0YXJpYW4tc3R1ZmZlZC1wZXBwZXJzLmpwZyc7XHJcbmltcG9ydCBjYXJwYWNjaW9TYWxtb24gZnJvbSAnLi9pbWcvY2FycGFjY2lvLXNhbG1vbi5qcGcnO1xyXG5pbXBvcnQgY2FsYW1hcmkgZnJvbSAnLi9pbWcvZnJpZWQtY2FsYW1hcmkuanBnJztcclxuaW1wb3J0IGxvYnN0ZXIgZnJvbSAnLi9pbWcvbG9ic3Rlci5qcGcnO1xyXG5cclxuXHJcbmxldCBtZW51ID0gW1xyXG4gIHtcclxuICAgIG5hbWU6ICdGaWxsZXQgTWlnbm9uJyxcclxuICAgIHByaWNlOiA1MCxcclxuICAgIGRlc2NyaXB0aW9uOiAnR3JpbGxlZCB0byBwZXJmZWN0aW9uLCBzZXJ2ZWQgd2l0aCBnYXJsaWMgbWFzaGVkIHBvdGF0b2VzIGFuZCBzYXV0w6llZCBhc3BhcmFndXMuJyxcclxuICAgIGltYWdlOiBGaWxsZXRNaWdub25cclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdQYW4tU2VhcmVkIFNlYSBCYXNzJyxcclxuICAgIHByaWNlOiA0MCxcclxuICAgIGRlc2NyaXB0aW9uOiAnU2VydmVkIHdpdGggbGVtb24gYnV0dGVyIHNhdWNlLCBjb3VzY291cywgYW5kIHJvYXN0ZWQgdmVnZXRhYmxlcy4nLFxyXG4gICAgaW1hZ2U6IFBhblNlYXJlZFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1ZlZ2V0YXJpYW4gU3R1ZmZlZCBCZWxsIFBlcHBlcnMnLFxyXG4gICAgcHJpY2U6IDMwLFxyXG4gICAgZGVzY3JpcHRpb246ICdCZWxsIHBlcHBlcnMgc3R1ZmZlZCB3aXRoIHF1aW5vYSwgYmxhY2sgYmVhbnMsIGFuZCB2ZWdldGFibGVzLCB0b3BwZWQgd2l0aCBjaGVlc2UuJyxcclxuICAgIGltYWdlOiB2ZWdldGFyaWFuXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQ2FycGFjY2lvIFNhbG3Ds24nLFxyXG4gICAgcHJpY2U6IDMwLFxyXG4gICAgZGVzY3JpcHRpb246ICdTbGljZXMgb2YgZnJlc2ggc2FsbW9uIHNlcnZlZCB3aXRoIGNhcGVycywgcmVkIG9uaW9uLCBhbmQgbGVtb24gdmluYWlncmV0dGUuJyxcclxuICAgIGltYWdlOiBjYXJwYWNjaW9TYWxtb25cclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDcmlzcHkgQ2FsYW1hcmknLFxyXG4gICAgcHJpY2U6IDIwLFxyXG4gICAgZGVzY3JpcHRpb246ICdUZW5kZXIgY2FsYW1hcmkgcmluZ3MgbGlnaHRseSBmcmllZCBhbmQgc2VydmVkIHdpdGggYSB6ZXN0eSBtYXJpbmFyYSBzYXVjZS4nLFxyXG4gICAgaW1hZ2U6IGNhbGFtYXJpXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTG9ic3RlciBCaXNxdWUnLFxyXG4gICAgcHJpY2U6IDIwLFxyXG4gICAgZGVzY3JpcHRpb246ICdDcmVhbXkgbG9ic3RlciBiaXNxdWUgd2l0aCBhIGhpbnQgb2Ygc2hlcnJ5LicsXHJcbiAgICBpbWFnZTogbG9ic3RlclxyXG4gIH1cclxuXVxyXG5cclxubGV0IG1ha2VNZW51UGFnZSA9ICgpID0+IHtcclxuICBsZXQgY29udGVudE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb250ZW50TWVudS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRlbnQtbWVudScpO1xyXG5cclxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbWVudS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgIGxldCBpbWdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBpbWdFbGVtZW50LnNyYyA9IG1lbnVbaW5kZXhdLmltYWdlO1xyXG4gICAgXHJcbiAgICBjb250ZW50TWVudS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XHJcbiAgICBjb250ZW50TWVudS5jaGlsZHJlbltpbmRleF0uc2V0QXR0cmlidXRlKCdjbGFzcycsIGBjYXJkLW1lbnUgJHtpbmRleH1gKTtcclxuICAgIFxyXG4gICAgXHJcbiAgICBjb250ZW50TWVudS5jaGlsZHJlbltpbmRleF0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKSkudGV4dENvbnRlbnQgPSBtZW51W2luZGV4XS5uYW1lO1xyXG4gICAgY29udGVudE1lbnUuY2hpbGRyZW5baW5kZXhdLmFwcGVuZENoaWxkKGltZ0VsZW1lbnQpO1xyXG4gICAgY29udGVudE1lbnUuY2hpbGRyZW5baW5kZXhdLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSkudGV4dENvbnRlbnQgPSBtZW51W2luZGV4XS5kZXNjcmlwdGlvbjtcclxuICAgIGNvbnRlbnRNZW51LmNoaWxkcmVuW2luZGV4XS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpLmlubmVySFRNTCA9IGA8Yj4kJHttZW51W2luZGV4XS5wcmljZX08L2I+YDtcclxuICB9XHJcblxyXG4gIHJldHVybiBjb250ZW50TWVudTtcclxufVxyXG5cclxuZXhwb3J0IHsgbWFrZU1lbnVQYWdlIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgbWFrZU1lbnVQYWdlIH0gZnJvbSAnLi9tZW51LmpzJztcclxuaW1wb3J0IHsgbWFrZUhvbWVQYWdlIH0gZnJvbSAnLi9ob21lLmpzJztcclxuaW1wb3J0IHsgbWFrZUFib3V0UGFnZSB9IGZyb20gJy4vYWJvdXQuanMnO1xyXG5cclxubGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuY29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRlbnQnKTtcclxubGV0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxubWFpbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW4nKTtcclxuXHJcbmxldCBtYWtlTmF2QmFyID0gKCkgPT4ge1xyXG4gIGxldCBsaW5rcyA9IFsnSG9tZScsICdNZW51JywgJ0Fib3V0J107XHJcblxyXG4gIGxldCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBuYXYuc2V0QXR0cmlidXRlKCdpZCcsICduYXYnKTtcclxuXHJcbiAgbGV0IG5hdkxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbmF2TGlua3Muc2V0QXR0cmlidXRlKCdpZCcsICduYXYtbGlua3MnKTtcclxuXHJcbiAgbGV0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBsb2dvLnNldEF0dHJpYnV0ZSgnaWQnLCAnbG9nbycpO1xyXG4gIGxvZ28uaW5uZXJIVE1MID0gJ1Jlc3RhdXJhbnQnO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBuYXZMaW5rcy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJykpO1xyXG4gICAgbmF2TGlua3MuY2hpbGRyZW5baV0uc2V0QXR0cmlidXRlKCdocmVmJywgJyMnKTtcclxuICAgIG5hdkxpbmtzLmNoaWxkcmVuW2ldLmlubmVySFRNTCA9IGxpbmtzW2ldO1xyXG4gICAgbmF2TGlua3MuY2hpbGRyZW5baV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7bWFrZVBhZ2UoaSk7fSk7XHJcbiAgfVxyXG4gIFxyXG4gIG5hdi5hcHBlbmRDaGlsZChsb2dvKTtcclxuICBuYXYuYXBwZW5kQ2hpbGQobmF2TGlua3MpO1xyXG5cclxuICByZXR1cm4gbmF2O1xyXG59XHJcblxyXG5sZXQgbWFrZVBhZ2UgPSAoaW5kZXgpID0+IHtcclxuICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xyXG4gIG1haW4uaW5uZXJIVE1MID0gJyc7XHJcbiAgXHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWtlTmF2QmFyKCkpO1xyXG5cclxuICBpZihpbmRleCA9PSAwKSB7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKG1ha2VIb21lUGFnZSgpKTtcclxuICB9ZWxzZSBpZihpbmRleCA9PSAxKSB7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKG1ha2VNZW51UGFnZSgpKTtcclxuICB9ZWxzZSB7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKG1ha2VBYm91dFBhZ2UoKSk7XHJcbiAgfVxyXG5cclxuICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xyXG59O1xyXG5cclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcclxubWFrZVBhZ2UoMCk7XHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=