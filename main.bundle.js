/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/autosize-input/index.js":
/*!**********************************************!*\
  !*** ./node_modules/autosize-input/index.js ***!
  \**********************************************/
/***/ ((module) => {

eval("var GHOST_ELEMENT_ID = '__autosizeInputGhost'\n\nvar characterEntities = {\n  ' ': 'nbsp',\n  '<': 'lt',\n  '>': 'gt'\n}\nfunction mapSpecialCharacterToCharacterEntity (specialCharacter) {\n  return '&' + characterEntities[specialCharacter] + ';'\n}\nfunction escapeSpecialCharacters (string) {\n  return string.replace(/\\s|<|>/g, mapSpecialCharacterToCharacterEntity)\n}\n\n// Create `ghostElement`, with inline styles to hide it and ensure that the text is all\n// on a single line.\nfunction createGhostElement () {\n  var ghostElement = document.createElement('div')\n  ghostElement.id = GHOST_ELEMENT_ID\n  ghostElement.style.cssText =\n    'display:inline-block;height:0;overflow:hidden;position:absolute;top:0;visibility:hidden;white-space:nowrap;'\n  document.body.appendChild(ghostElement)\n  return ghostElement\n}\n\nmodule.exports = function (element, options) {\n  var elementStyle = window.getComputedStyle(element)\n  // prettier-ignore\n  var elementCssText = 'box-sizing:' + elementStyle.boxSizing +\n                      ';border-left:' + elementStyle.borderLeftWidth + ' solid red' +\n                      ';border-right:' + elementStyle.borderRightWidth + ' solid red' +\n                      ';font-family:' + elementStyle.fontFamily +\n                      ';font-feature-settings:' + elementStyle.fontFeatureSettings +\n                      ';font-kerning:' + elementStyle.fontKerning +\n                      ';font-size:' + elementStyle.fontSize +\n                      ';font-stretch:' + elementStyle.fontStretch +\n                      ';font-style:' + elementStyle.fontStyle +\n                      ';font-variant:' + elementStyle.fontVariant +\n                      ';font-variant-caps:' + elementStyle.fontVariantCaps +\n                      ';font-variant-ligatures:' + elementStyle.fontVariantLigatures +\n                      ';font-variant-numeric:' + elementStyle.fontVariantNumeric +\n                      ';font-weight:' + elementStyle.fontWeight +\n                      ';letter-spacing:' + elementStyle.letterSpacing +\n                      ';margin-left:' + elementStyle.marginLeft +\n                      ';margin-right:' + elementStyle.marginRight +\n                      ';padding-left:' + elementStyle.paddingLeft +\n                      ';padding-right:' + elementStyle.paddingRight +\n                      ';text-indent:' + elementStyle.textIndent +\n                      ';text-transform:' + elementStyle.textTransform\n\n  // Assigns an appropriate width to the given `element` based on its contents.\n  function setWidth () {\n    var string = element.value || element.getAttribute('placeholder') || ''\n    // Check if the `ghostElement` exists. If no, create it.\n    var ghostElement =\n      document.getElementById(GHOST_ELEMENT_ID) || createGhostElement()\n    // Copy all width-affecting styles to the `ghostElement`.\n    ghostElement.style.cssText += elementCssText\n    ghostElement.innerHTML = escapeSpecialCharacters(string)\n    // Copy the width of `ghostElement` to `element`.\n    var width = window.getComputedStyle(ghostElement).width\n    element.style.width = width\n    return width\n  }\n\n  element.addEventListener('input', setWidth)\n\n  var width = setWidth()\n\n  // Set `min-width` only if `options.minWidth` was set, and only if the initial\n  // width is non-zero.\n  if (options && options.minWidth && width !== '0px') {\n    element.style.minWidth = width\n  }\n\n  // Return a function for unbinding the event listener and removing the `ghostElement`.\n  return function () {\n    element.removeEventListener('input', setWidth)\n    var ghostElement = document.getElementById(GHOST_ELEMENT_ID)\n    if (ghostElement) {\n      ghostElement.parentNode.removeChild(ghostElement)\n    }\n  }\n}\n\n\n//# sourceURL=webpack://weather-app/./node_modules/autosize-input/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  padding: 0;\\n  margin: 0;\\n}\\n\\nhtml, input {\\n  font-size: 24px;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  color: #BFC0C0;\\n}\\n\\nbody {\\n  width: 100%;\\n  background-color: #111218;\\n}\\n\\nmain {\\n  display: grid;\\n  grid-template-columns: 1fr 500px;\\n  grid-template-rows: max-content max-content;\\n  padding: 42px 64px;\\n  gap: 42px;\\n}\\nmain.display-hidden {\\n  height: 100px;\\n}\\nmain.display-hidden #weather-details, main.display-hidden #weather-forecast {\\n  transform: scale(0);\\n}\\nmain.display-hidden #weather-main #location-form {\\n  width: 70%;\\n  transform: scale(1.6);\\n}\\n\\n#weather-main {\\n  grid-column: 1/2;\\n  grid-row: 1/2;\\n}\\n#weather-main #location-form {\\n  transform-origin: 0 0;\\n  transition: transform 0.2s ease-in-out;\\n  margin-bottom: 12px;\\n}\\n#weather-main #location-form label h2, #weather-main #location-form label input {\\n  display: inline-block;\\n  font-size: 2.5rem;\\n  font-weight: 700;\\n  text-transform: uppercase;\\n}\\n#weather-main #location-form label h2 {\\n  margin-right: 8px;\\n}\\n#weather-main #location-form label #location-input {\\n  background-color: transparent;\\n  border: none;\\n  color: #BCED09;\\n  transition: color 0.2s ease-in;\\n}\\n#weather-main #location-form label #location-input:focus {\\n  outline: none;\\n  color: #FFFFFF;\\n}\\n#weather-main #location-form label #location-input:placeholder-shown {\\n  text-decoration: underline dotted;\\n  color: #BFC0C0;\\n}\\n#weather-main #location-form label #location-input.invalid {\\n  animation: shake 0.3s;\\n  color: #FB5607;\\n}\\n#weather-main #location-details {\\n  font-size: 1.5rem;\\n  color: #4F5D75;\\n}\\n#weather-main #current-weather-container {\\n  width: calc(100% - 128px);\\n  padding: 12px;\\n  display: flex;\\n  gap: 128px;\\n  padding: 0 64px;\\n}\\n#weather-main #current-weather-container #current-temperature-container {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 12px;\\n  align-items: center;\\n}\\n#weather-main #current-weather-container #current-temperature-container #current-temperature-label {\\n  color: #BFC0C0;\\n  font-size: 6.2rem;\\n  text-align: center;\\n}\\n#weather-main #current-weather-container #current-temperature-container #feels-like-label {\\n  font-size: 1.8rem;\\n  color: #BFC0C0;\\n}\\n#weather-main #current-weather-container #current-condition-container {\\n  flex-grow: 1;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 16px;\\n  align-items: center;\\n  justify-content: end;\\n}\\n#weather-main #current-weather-container #current-condition-container #current-condition-label {\\n  font-size: 1.8rem;\\n  text-align: center;\\n}\\n#weather-main #current-weather-container #current-condition-container #current-condition-icon {\\n  height: 70%;\\n  color: #BFC0C0;\\n}\\n\\n#weather-details {\\n  grid-column: 1/2;\\n  grid-row: 2/3;\\n  transition: transform 0.2s ease-in-out;\\n  background-color: #181B25;\\n  margin-top: 32px;\\n  width: calc(100% - 128px);\\n  height: auto;\\n  border-radius: 24px;\\n  padding: 64px;\\n  display: grid;\\n  grid-template-columns: repeat(2, 1fr);\\n  grid-template-rows: repeat(3, 1fr);\\n  align-items: center;\\n  gap: 64px 32px;\\n}\\n#weather-details .weather-details-element {\\n  display: flex;\\n  gap: 16px;\\n  text-align: start;\\n  align-items: baseline;\\n}\\n#weather-details .weather-details-element h3 {\\n  color: #4F5D75;\\n}\\n\\n#weather-forecast {\\n  grid-column: 2/3;\\n  grid-row: 1/3;\\n  transition: transform 0.2s ease-out;\\n  background-color: #181B25;\\n  border-radius: 24px;\\n  width: calc(100% - 64px);\\n  max-height: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 32px;\\n  padding: 32px;\\n}\\n#weather-forecast #astro-forecast-container {\\n  display: flex;\\n  grid-template-columns: 1fr 1fr;\\n  gap: 64px;\\n  justify-content: space-evenly;\\n}\\n#weather-forecast #astro-forecast-container .astro-forecast-element {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 12px;\\n  align-items: center;\\n  justify-content: baseline;\\n}\\n#weather-forecast #astro-forecast-container .astro-forecast-element h3 {\\n  font-size: 1rem;\\n  color: #4F5D75;\\n}\\n#weather-forecast #astro-forecast-container .astro-forecast-element h3 span {\\n  font-weight: 400;\\n  color: #BFC0C0;\\n}\\n#weather-forecast #astro-forecast-container .astro-forecast-element #sunset-icon {\\n  position: relative;\\n  bottom: -4px;\\n}\\n#weather-forecast #astro-forecast-container .astro-forecast-element svg {\\n  width: 64px;\\n  height: 64px;\\n}\\n#weather-forecast #forecast-container {\\n  position: relative;\\n  flex-grow: 1;\\n  display: flex;\\n  flex-direction: column;\\n  max-height: 100%;\\n}\\n#weather-forecast #forecast-container #forecast-list {\\n  position: absolute;\\n  top: 0;\\n  bottom: 0;\\n  right: 0;\\n  left: 0;\\n  overflow-y: scroll;\\n}\\n#weather-forecast #forecast-container #forecast-list .forecast-element {\\n  box-sizing: border-box;\\n  min-height: 128px;\\n  padding: 0 16px;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  border-top: 1px solid #4F5D75;\\n}\\n#weather-forecast #forecast-container #forecast-list .forecast-element svg {\\n  width: 64px;\\n  height: 64px;\\n}\\n#weather-forecast #forecast-container #forecast-list .forecast-element .forecast-time {\\n  color: #4F5D75;\\n}\\n#weather-forecast #forecast-container #forecast-list .forecast-element .forecast-temp {\\n  font-size: 1.3rem;\\n}\\n#weather-forecast #forecast-container #forecast-list .forecast-element.currentHour .forecast-time {\\n  color: #BCED09;\\n}\\n\\n@keyframes shake {\\n  0% {\\n    transform: translateX(0);\\n  }\\n  25% {\\n    transform: translateX(5px);\\n  }\\n  50% {\\n    transform: translateX(-5px);\\n  }\\n  75% {\\n    transform: translateX(5px);\\n  }\\n  100% {\\n    transform: translateX(0);\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/styles/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/styles/index.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/resources/weather-icons/blizzard.svg":
/*!**************************************************!*\
  !*** ./src/resources/weather-icons/blizzard.svg ***!
  \**************************************************/
/***/ ((module) => {

eval("module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" xml:space=\\\"preserve\\\" viewBox=\\\"0 0 64 64\\\"><path fill=\\\"currentColor\\\" d=\\\"M48.6 11.5C45.5 5.7 39.5 2 32.9 2c-8.1 0-15.1 5.6-17.2 13.3-.5-.1-1-.1-1.4-.1C7.5 15.2 2 20.8 2 27.6 2 34.4 7.5 40 14.3 40h33.6C55.7 40 62 33.6 62 25.7c0-7.6-5.9-13.8-13.4-14.2zM48 36H14.3C9.7 36 6 32.2 6 27.6c0-4.6 3.7-8.4 8.3-8.4.8 0 1.6.1 2.4.4l2.2.7.3-2.3c1-6.8 6.9-12 13.7-12 5.4 0 10.4 3.3 12.6 8.3l.6 1.2 1.6-.1h.1c5.6 0 10.1 4.6 10.1 10.3C58 31.4 53.5 36 48 36zm-30 8a2 2 0 0 0-2 2c-1.1 0-2 .9-2 2s.9 2 2 2c0 1.1.9 2 2 2s2-.9 2-2c1.1 0 2-.9 2-2s-.9-2-2-2a2 2 0 0 0-2-2zm14 0a2 2 0 0 0-2 2c-1.1 0-2 .9-2 2s.9 2 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2 2 2 0 0 0 2-2 2 2 0 0 0-2-2 2 2 0 0 0-2-2zm-6.6 10a2 2 0 0 0-2 2c-1.1 0-2 .9-2 2s.9 2 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c1.1 0 2-.9 2-2s-.9-2-2-2a2 2 0 0 0-2-2zm15.2 2a2 2 0 0 0-2-2 2 2 0 0 0-2 2c-1.1 0-2 .9-2 2s.9 2 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c1.1 0 2-.9 2-2s-.9-2-2-2zm3.4-6c0 1.1.9 2 2 2s2-.9 2-2a2 2 0 0 0 2-2 2 2 0 0 0-2-2 2 2 0 0 0-2-2 2 2 0 0 0-2 2c-1.1 0-2 .9-2 2s.9 2 2 2z\\\" class=\\\"st0\\\"></path></svg>\"\n\n//# sourceURL=webpack://weather-app/./src/resources/weather-icons/blizzard.svg?");

/***/ }),

/***/ "./src/resources/weather-icons/cloudy.svg":
/*!************************************************!*\
  !*** ./src/resources/weather-icons/cloudy.svg ***!
  \************************************************/
/***/ ((module) => {

eval("module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" xml:space=\\\"preserve\\\" viewBox=\\\"0 0 64 64\\\"><path fill=\\\"currentColor\\\" d=\\\"M50.1 27c-3-6.1-9.2-10-16.1-10-2.4 0-4.7.5-6.8 1.4C25.3 12.9 20 9 14 9 6.3 9 0 15.3 0 23c0 5.6 3.4 10.6 8.4 12.8C6.9 37.8 6 40.3 6 43c0 6.6 5.4 12 12 12h34.1v-.2A14 14 0 0 0 64 41c0-7.7-6.2-13.9-13.9-14zM4 23c0-5.5 4.5-10 10-10 4.5 0 8.4 3.1 9.6 7.3-3.6 2.5-6.2 6.3-7.2 10.8-1.7.2-3.3.8-4.6 1.6-4.5-1-7.8-5-7.8-9.7zm46.1 28H18a8 8 0 0 1-.1-16l2 .1.2-1.9C21 26.3 27 21 34 21c5.7 0 10.8 3.5 13 8.8l.6 1.4L49 31h1a10 10 0 0 1 .1 20z\\\"></path></svg>\"\n\n//# sourceURL=webpack://weather-app/./src/resources/weather-icons/cloudy.svg?");

/***/ }),

/***/ "./src/resources/weather-icons/drizzle.svg":
/*!*************************************************!*\
  !*** ./src/resources/weather-icons/drizzle.svg ***!
  \*************************************************/
/***/ ((module) => {

eval("module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" xml:space=\\\"preserve\\\" id=\\\"Layer_2\\\" x=\\\"0\\\" y=\\\"0\\\" version=\\\"1.1\\\" viewBox=\\\"0 0 64 64\\\"><path fill=\\\"currentColor\\\" d=\\\"M49.7 10a18.92 18.92 0 0 0-35 4.1c-.6-.1-1.1-.1-1.7-.1-7.2 0-13 5.8-13 13s5.8 13 13 13h36c8.3 0 15-6.7 15-15 0-8-6.3-14.6-14.3-15zM49 36H13c-5 0-9-4-9-9s4-9 9-9c.9 0 1.8.1 2.6.4l2.2.7.3-2.3C19.3 9.5 25.6 4 33 4c5.9 0 11.3 3.5 13.7 8.9l.6 1.2 1.6-.1h.2c6.1 0 11 4.9 11 11-.1 6.1-5 11-11.1 11zM24.6 48.6c-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.7-.8-2.1-.8-2.8 0zM18 48c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.8-.7-2.1-.7-2.8 0-.4.3-.6.9-.6 1.4 0 .5.2 1 .6 1.4.4.4.9.6 1.4.6zM15.4 55.4c.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.8-.7-2.1-.7-2.8 0-.4.3-.6.9-.6 1.4 0 .5.2 1 .6 1.4.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6zM16.6 63.4c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.8-.7-2.1-.7-2.8 0-.4.3-.6.9-.6 1.4 0 .5.2 1 .6 1.4zM26 58c0 .5.2 1 .6 1.4.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.8-.7-2.1-.7-2.8 0-.4.3-.6.9-.6 1.4zM34.6 52.6c-.4.3-.6.9-.6 1.4 0 .5.2 1 .6 1.4.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.7-.8-2.1-.8-2.8 0zM39.4 44.6c-.8-.7-2.1-.7-2.8 0-.4.3-.6.9-.6 1.4 0 .5.2 1 .6 1.4.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1.1-.6-1.4zM49.4 49.4c.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.8-.7-2.1-.7-2.8 0-.4.3-.6.8-.6 1.4 0 .5.2 1 .6 1.4.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6zM44.6 56.6c-.4.3-.6.9-.6 1.4 0 .5.2 1 .6 1.4.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.7-.8-2.1-.8-2.8 0zM36.6 60.6c-.4.3-.6.9-.6 1.4 0 .5.2 1 .6 1.4.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.7-.8-2.1-.8-2.8 0z\\\" class=\\\"st0\\\"></path></svg>\"\n\n//# sourceURL=webpack://weather-app/./src/resources/weather-icons/drizzle.svg?");

/***/ }),

/***/ "./src/resources/weather-icons/fog.svg":
/*!*********************************************!*\
  !*** ./src/resources/weather-icons/fog.svg ***!
  \*********************************************/
/***/ ((module) => {

eval("module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" xml:space=\\\"preserve\\\" id=\\\"Layer_2\\\" x=\\\"0\\\" y=\\\"0\\\" version=\\\"1.1\\\" viewBox=\\\"0 0 64 64\\\"><path fill=\\\"currentColor\\\" d=\\\"M.1 32.8C0 33.9.8 34.9 1.9 35H2c1 0 1.9-.8 2-1.8.4-4.7 4.3-8.2 9-8.2.9 0 1.8.1 2.6.4l2.2.7.3-2.3C19.3 16.5 25.6 11 33 11c5.9 0 11.3 3.5 13.7 8.9l.6 1.2 1.6-.1h.2c6.1 0 11 4.9 11 11 0 1.1.9 2 2 2s2-.9 2-2c0-8-6.3-14.6-14.3-15C46.5 10.9 40 7 33 7c-8.6 0-16.2 5.9-18.3 14.1-.6-.1-1.1-.1-1.7-.1C6.2 21 .7 26.1.1 32.8zM2 41h60c1.1 0 2-.9 2-2s-.9-2-2-2H2c-1.1 0-2 .9-2 2s.9 2 2 2zM60 47a2 2 0 0 0-2-2H8c-1.1 0-2 .9-2 2s.9 2 2 2h50a2 2 0 0 0 2-2zM12 53c-1.1 0-2 .9-2 2s.9 2 2 2h16c1.1 0 2-.9 2-2s-.9-2-2-2H12zM36 53c-1.1 0-2 .9-2 2s.9 2 2 2h20c1.1 0 2-.9 2-2s-.9-2-2-2H36z\\\" class=\\\"st0\\\"></path></svg>\"\n\n//# sourceURL=webpack://weather-app/./src/resources/weather-icons/fog.svg?");

/***/ }),

/***/ "./src/resources/weather-icons/ice_pellets.svg":
/*!*****************************************************!*\
  !*** ./src/resources/weather-icons/ice_pellets.svg ***!
  \*****************************************************/
/***/ ((module) => {

eval("module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" xml:space=\\\"preserve\\\" id=\\\"Layer_2\\\" x=\\\"0\\\" y=\\\"0\\\" version=\\\"1.1\\\" viewBox=\\\"0 0 64 64\\\"><path fill=\\\"currentColor\\\" d=\\\"M49.7 10a18.92 18.92 0 0 0-35 4.1c-.6-.1-1.1-.1-1.7-.1-7.2 0-13 5.8-13 13s5.8 13 13 13h36c8.3 0 15-6.7 15-15 0-8-6.3-14.6-14.3-15zM49 36H13c-5 0-9-4-9-9s4-9 9-9c.9 0 1.8.1 2.6.4l2.2.7.3-2.3C19.3 9.5 25.6 4 33 4c5.9 0 11.3 3.5 13.7 8.9l.6 1.2 1.6-.1h.2c6.1 0 11 4.9 11 11-.1 6.1-5 11-11.1 11zM44 44a2 2 0 0 0-2 2v16.6c0 .1 0 .1.1.2 0 .1.1.1.1.2s.1.1.1.2.1.1.1.1c0 .1.1.1.1.2l.1.1.1.1c.1 0 .1.1.2.1 0 0 .1 0 .1.1.1 0 .2.1.3.1h.5c.2 0 .3 0 .5-.1h.1c.1 0 .3-.1.4-.2h.1c.1-.1.3-.2.4-.3l.1-.1c.1-.1.2-.3.3-.4 1.4-3.1 4.6-5 8-4.7 1.1.1 2.1-.7 2.2-1.8.1-1.1-.7-2.1-1.8-2.2-3-.2-5.8.6-8.1 2.3V46a2 2 0 0 0-2-2zM38 52v-6c0-1.1-.9-2-2-2s-2 .9-2 2v6c0 1.1.9 2 2 2s2-.9 2-2zM30 56V46c0-1.1-.9-2-2-2s-2 .9-2 2v10c0 1.1.9 2 2 2s2-.9 2-2zM20 44a2 2 0 0 0-2 2v10.4c-2.3-1.7-5.2-2.6-8.1-2.3-1.1.1-1.9 1.1-1.8 2.2.1 1.1 1.1 1.9 2.2 1.8 3.4-.3 6.6 1.6 8 4.7.1.1.2.3.3.4l.1.1c.1.1.2.2.4.3h.1c.1.1.3.1.4.2h.1c.2 0 .3.1.5.1h.5c.1 0 .2-.1.3-.1 0 0 .1 0 .1-.1.1 0 .1-.1.2-.1s.1-.1.1-.1l.1-.1s.1-.1.1-.2l.1-.1c0-.1.1-.1.1-.2s.1-.1.1-.2 0-.1.1-.2c0-.1 0-.1.1-.2V46c-.1-1.1-1-2-2.1-2zM26.6 63.4c.4.4.9.6 1.4.6.5 0 1.1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.7-.7-2.1-.7-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4zM34.6 59.4c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4s-.2-1-.6-1.4c-.7-.7-2.1-.7-2.8 0-.4.4-.6.9-.6 1.4s.2 1 .6 1.4zM61.4 57.4c.4-.4.6-.9.6-1.4s-.2-1-.6-1.4c-.8-.8-2.1-.8-2.8 0-.4.4-.6.9-.6 1.4s.2 1 .6 1.4c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6z\\\" class=\\\"st0\\\"></path></svg>\"\n\n//# sourceURL=webpack://weather-app/./src/resources/weather-icons/ice_pellets.svg?");

/***/ }),

/***/ "./src/resources/weather-icons/mist.svg":
/*!**********************************************!*\
  !*** ./src/resources/weather-icons/mist.svg ***!
  \**********************************************/
/***/ ((module) => {

eval("module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" xml:space=\\\"preserve\\\" id=\\\"Layer_2\\\" x=\\\"0\\\" y=\\\"0\\\" version=\\\"1.1\\\" viewBox=\\\"0 0 64 64\\\"><path fill=\\\"currentColor\\\" d=\\\"M2 34h60c1.1 0 2-.9 2-2s-.9-2-2-2H2c-1.1 0-2 .9-2 2s.9 2 2 2zM4 24c0 1.1.9 2 2 2h48c1.1 0 2-.9 2-2s-.9-2-2-2H6a2 2 0 0 0-2 2zM8 48c0 1.1.9 2 2 2h48c1.1 0 2-.9 2-2s-.9-2-2-2H10a2 2 0 0 0-2 2zM4 18h22c1.1 0 2-.9 2-2s-.9-2-2-2H4c-1.1 0-2 .9-2 2s.9 2 2 2zM46 18c1.1 0 2-.9 2-2s-.9-2-2-2H34c-1.1 0-2 .9-2 2s.9 2 2 2h12zM56 16c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2s-.9-2-2-2h-4a2 2 0 0 0-2 2zM54 42c1.1 0 2-.9 2-2s-.9-2-2-2H32c-1.1 0-2 .9-2 2s.9 2 2 2h22zM12 42h12c1.1 0 2-.9 2-2s-.9-2-2-2H12c-1.1 0-2 .9-2 2s.9 2 2 2z\\\" class=\\\"st0\\\"></path></svg>\"\n\n//# sourceURL=webpack://weather-app/./src/resources/weather-icons/mist.svg?");

/***/ }),

/***/ "./src/resources/weather-icons/moon.svg":
/*!**********************************************!*\
  !*** ./src/resources/weather-icons/moon.svg ***!
  \**********************************************/
/***/ ((module) => {

eval("module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" xml:space=\\\"preserve\\\" viewBox=\\\"0 0 64 64\\\"><path fill=\\\"currentColor\\\" d=\\\"M54.3 32.1c0-11.4-8.6-20.9-19.9-22l-3.7-.4 1.8 3.3c1.2 2.1 1.8 4.6 1.8 7a14.83 14.83 0 0 1-21.1 13.4l-3.4-1.6.6 3.7a21.86 21.86 0 0 0 21.7 18.8c12.2 0 22.2-10 22.2-22.2zM32.1 50.3a18 18 0 0 1-17-11.9 18.78 18.78 0 0 0 23.1-18.3c0-1.8-.3-3.6-.8-5.3C44.9 17 50.3 24 50.3 32.1c0 10-8.2 18.2-18.2 18.2z\\\"></path></svg>\"\n\n//# sourceURL=webpack://weather-app/./src/resources/weather-icons/moon.svg?");

/***/ }),

/***/ "./src/resources/weather-icons/overcast.svg":
/*!**************************************************!*\
  !*** ./src/resources/weather-icons/overcast.svg ***!
  \**************************************************/
/***/ ((module) => {

eval("module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" xml:space=\\\"preserve\\\" viewBox=\\\"0 0 64 64\\\"><path fill=\\\"currentColor\\\" d=\\\"M64 27c0-6.2-4.7-11.3-10.7-11.9C50.7 10.1 45.7 7 40 7c-7.3 0-13.5 5.2-14.7 12.2C18 20.3 12 25.8 10.4 33.1 4.6 33.9 0 38.9 0 45c0 6.6 5.4 12 12 12h34.1v-.2A14 14 0 0 0 58 43c0-1.8-.4-3.5-1-5.1 4.2-1.9 7-6.1 7-10.9zM44.1 53H12a8 8 0 0 1-.1-16l2 .1.2-1.8C15 28.3 21 23 28 23c5.7 0 10.8 3.5 13 8.8l.6 1.4L43 33h1a10 10 0 0 1 .1 20zM55 34.4c-2.5-3.3-6.5-5.4-10.9-5.4-2.8-5.7-8.4-9.5-14.7-9.9C30.6 14.3 34.9 11 40 11c4.5 0 8.4 2.7 10.2 6.8l.5 1.2H52c4.4 0 8 3.6 8 8 0 3.3-2 6.2-5 7.4z\\\"></path></svg>\"\n\n//# sourceURL=webpack://weather-app/./src/resources/weather-icons/overcast.svg?");

/***/ }),

/***/ "./src/resources/weather-icons/rain.svg":
/*!**********************************************!*\
  !*** ./src/resources/weather-icons/rain.svg ***!
  \**********************************************/
/***/ ((module) => {

eval("module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" xml:space=\\\"preserve\\\" id=\\\"Layer_2\\\" x=\\\"0\\\" y=\\\"0\\\" version=\\\"1.1\\\" viewBox=\\\"0 0 64 64\\\"><path fill=\\\"currentColor\\\" d=\\\"M49.7 10a18.92 18.92 0 0 0-35 4.1c-.6-.1-1.1-.1-1.7-.1-7.2 0-13 5.8-13 13s5.8 13 13 13h36c8.3 0 15-6.7 15-15 0-8-6.3-14.6-14.3-15zm-.6 26H13c-5 0-9-4-9-9s4-9 9-9c.9 0 1.8.1 2.6.4l2.2.7.3-2.3C19.3 9.5 25.6 4 33 4c5.9 0 11.3 3.5 13.7 8.9l.6 1.2 1.6-.1h.2c6.1 0 11 4.9 11 11-.1 6.1-5 11-11 11zM48 62V46c0-1.1-.9-2-2-2s-2 .9-2 2v16c0 1.1.9 2 2 2s2-.9 2-2zM38 56V46c0-1.1-.9-2-2-2s-2 .9-2 2v10c0 1.1.9 2 2 2s2-.9 2-2zM28 62V46c0-1.1-.9-2-2-2s-2 .9-2 2v16c0 1.1.9 2 2 2s2-.9 2-2zM16 58a2 2 0 0 0 2-2V46c0-1.1-.9-2-2-2s-2 .9-2 2v10c0 1.1.9 2 2 2z\\\" class=\\\"st0\\\"></path></svg>\"\n\n//# sourceURL=webpack://weather-app/./src/resources/weather-icons/rain.svg?");

/***/ }),

/***/ "./src/resources/weather-icons/sleet.svg":
/*!***********************************************!*\
  !*** ./src/resources/weather-icons/sleet.svg ***!
  \***********************************************/
/***/ ((module) => {

eval("module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" xml:space=\\\"preserve\\\" id=\\\"Layer_2\\\" x=\\\"0\\\" y=\\\"0\\\" version=\\\"1.1\\\" viewBox=\\\"0 0 64 64\\\"><path fill=\\\"currentColor\\\" d=\\\"M49.7 10a18.92 18.92 0 0 0-35 4.1c-.6-.1-1.1-.1-1.7-.1-7.2 0-13 5.8-13 13s5.8 13 13 13h36c8.3 0 15-6.7 15-15 0-8-6.3-14.6-14.3-15zm-.6 26H13c-5 0-9-4-9-9s4-9 9-9c.9 0 1.8.1 2.6.4l2.2.7.3-2.3C19.3 9.5 25.6 4 33 4c5.9 0 11.3 3.5 13.7 8.9l.6 1.2 1.6-.1h.2c6.1 0 11 4.9 11 11s-5 11-11 11zM46 58a2 2 0 0 0 2-2V46c0-1.1-.9-2-2-2s-2 .9-2 2v10c0 1.1.9 2 2 2zM36 44a2 2 0 0 0-2 2v4c0 1.1.9 2 2 2s2-.9 2-2v-4a2 2 0 0 0-2-2zM26 58a2 2 0 0 0 2-2V46c0-1.1-.9-2-2-2s-2 .9-2 2v10c0 1.1.9 2 2 2zM16 44a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2s2-.9 2-2v-6a2 2 0 0 0-2-2zM14.6 56.6c-.4.3-.6.9-.6 1.4 0 .5.2 1 .6 1.4.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.7-.8-2.1-.8-2.8 0zM24.6 63.4c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.8-.7-2.1-.7-2.8 0-.4.3-.6.9-.6 1.4 0 .5.2 1 .6 1.4zM34.6 54.6c-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.7-.8-2.1-.8-2.8 0zM44.6 63.4c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.8-.7-2.1-.7-2.8 0-.4.3-.6.9-.6 1.4 0 .5.2 1 .6 1.4z\\\" class=\\\"st0\\\"></path></svg>\"\n\n//# sourceURL=webpack://weather-app/./src/resources/weather-icons/sleet.svg?");

/***/ }),

/***/ "./src/resources/weather-icons/snow.svg":
/*!**********************************************!*\
  !*** ./src/resources/weather-icons/snow.svg ***!
  \**********************************************/
/***/ ((module) => {

eval("module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" xml:space=\\\"preserve\\\" id=\\\"Layer_2\\\" x=\\\"0\\\" y=\\\"0\\\" version=\\\"1.1\\\" viewBox=\\\"0 0 64 64\\\"><path fill=\\\"currentColor\\\" d=\\\"M2 25.6C2 32.4 7.5 38 14.3 38h33.6C55.7 38 62 31.6 62 23.7c0-7.6-5.9-13.8-13.3-14.2C45.5 3.7 39.5 0 32.9 0c-8.1 0-15.1 5.6-17.2 13.3-.5-.1-1-.1-1.4-.1C7.5 13.2 2 18.8 2 25.6zm12.3-8.4c.8 0 1.6.1 2.4.4l2.2.7.3-2.3c1-6.8 6.9-12 13.7-12 5.4 0 10.4 3.3 12.6 8.3l.5 1.2 1.7-.1c5.6 0 10.1 4.6 10.1 10.3C58 29.4 53.5 34 48 34H14.3C9.7 34 6 30.2 6 25.6s3.7-8.4 8.3-8.4zM17 42c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zM33 48c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zM28 53c0-1.7-1.3-3-3-3s-3 1.3-3 3 1.3 3 3 3 3-1.3 3-3zM41 56c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zM49 42c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zM17 58c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zM33 64c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3a3 3 0 0 0 3 3zM49 58c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z\\\" class=\\\"st0\\\"></path></svg>\"\n\n//# sourceURL=webpack://weather-app/./src/resources/weather-icons/snow.svg?");

/***/ }),

/***/ "./src/resources/weather-icons/sun.svg":
/*!*********************************************!*\
  !*** ./src/resources/weather-icons/sun.svg ***!
  \*********************************************/
/***/ ((module) => {

eval("module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" xml:space=\\\"preserve\\\" id=\\\"Layer_2\\\" x=\\\"0\\\" y=\\\"0\\\" version=\\\"1.1\\\" viewBox=\\\"0 0 64 64\\\"><path fill=\\\"currentColor\\\" d=\\\"M32 48c8.8 0 16-7.2 16-16s-7.2-16-16-16-16 7.2-16 16 7.2 16 16 16zm0-28c6.6 0 12 5.4 12 12s-5.4 12-12 12-12-5.4-12-12 5.4-12 12-12zM32 12a2 2 0 0 0 2-2V2c0-1.1-.9-2-2-2s-2 .9-2 2v8c0 1.1.9 2 2 2zM34 62v-8c0-1.1-.9-2-2-2s-2 .9-2 2v8c0 1.1.9 2 2 2s2-.9 2-2zM62 30h-8c-1.1 0-2 .9-2 2s.9 2 2 2h8c1.1 0 2-.9 2-2s-.9-2-2-2zM2 34h8c1.1 0 2-.9 2-2s-.9-2-2-2H2c-1.1 0-2 .9-2 2s.9 2 2 2zM15 17.9c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.8-.8.8-2 0-2.8l-5.7-5.7c-.8-.8-2-.8-2.8 0-.8.8-.8 2 0 2.8l5.7 5.7zM49 46.1c-.8-.8-2-.8-2.8 0-.8.8-.8 2 0 2.8l5.7 5.7c.4.4.9.6 1.4.6s1-.2 1.4-.6c.8-.8.8-2 0-2.8L49 46.1zM47.6 18.4c.5 0 1-.2 1.4-.6l5.7-5.7c.8-.8.8-2 0-2.8-.8-.8-2-.8-2.8 0L46.1 15c-.8.8-.8 2 0 2.8.4.4.9.6 1.5.6zM15 46.1l-5.7 5.7c-.8.8-.8 2 0 2.8.4.4.9.6 1.4.6s1-.2 1.4-.6l5.7-5.7c.8-.8.8-2 0-2.8-.7-.7-2-.7-2.8 0z\\\" class=\\\"st0\\\"></path></svg>\"\n\n//# sourceURL=webpack://weather-app/./src/resources/weather-icons/sun.svg?");

/***/ }),

/***/ "./src/resources/weather-icons/sunrise.svg":
/*!*************************************************!*\
  !*** ./src/resources/weather-icons/sunrise.svg ***!
  \*************************************************/
/***/ ((module) => {

eval("module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" xml:space=\\\"preserve\\\" id=\\\"Layer_2\\\" x=\\\"0\\\" y=\\\"0\\\" version=\\\"1.1\\\" viewBox=\\\"0 0 64 64\\\"><path fill=\\\"currentColor\\\" d=\\\"M18.8 45.8c.4 1 1.5 1.6 2.6 1.2 1-.4 1.6-1.5 1.2-2.6A10.03 10.03 0 0 1 32 31a10.03 10.03 0 0 1 9.4 13.4c-.4 1 .2 2.2 1.2 2.6.2.1.5.1.7.1.8 0 1.6-.5 1.9-1.3.6-1.5.8-3.1.8-4.8 0-7.7-6.3-14-14-14s-14 6.3-14 14c0 1.6.3 3.3.8 4.8zM32 23a2 2 0 0 0 2-2v-8c0-1.1-.9-2-2-2s-2 .9-2 2v8c0 1.1.9 2 2 2zM50 41c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2s-.9-2-2-2h-8a2 2 0 0 0-2 2zM4 43h8c1.1 0 2-.9 2-2s-.9-2-2-2H4c-1.1 0-2 .9-2 2s.9 2 2 2zM62 49H2c-1.1 0-2 .9-2 2s.9 2 2 2h60c1.1 0 2-.9 2-2s-.9-2-2-2zM17 28.8c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.8-.8.8-2 0-2.8l-5.7-5.7c-.8-.8-2-.8-2.8 0-.8.8-.8 2 0 2.8l5.7 5.7zM45.6 29.4c.5 0 1-.2 1.4-.6l5.7-5.7c.8-.8.8-2 0-2.8-.8-.8-2-.8-2.8 0L44.1 26c-.8.8-.8 2 0 2.8.4.4.9.6 1.5.6z\\\" class=\\\"st0\\\"></path></svg>\"\n\n//# sourceURL=webpack://weather-app/./src/resources/weather-icons/sunrise.svg?");

/***/ }),

/***/ "./src/resources/weather-icons/sunset.svg":
/*!************************************************!*\
  !*** ./src/resources/weather-icons/sunset.svg ***!
  \************************************************/
/***/ ((module) => {

eval("module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" xml:space=\\\"preserve\\\" id=\\\"Layer_2\\\" x=\\\"0\\\" y=\\\"0\\\" version=\\\"1.1\\\" viewBox=\\\"0 0 64 64\\\"><path fill=\\\"currentColor\\\" d=\\\"M32 28a2 2 0 0 0 2-2v-8c0-1.1-.9-2-2-2s-2 .9-2 2v8c0 1.1.9 2 2 2zM8 48h48c1.1 0 2-.9 2-2s-.9-2-2-2H45.9c-1-6.8-6.8-12-13.8-12s-12.9 5.2-13.8 12H8c-1.1 0-2 .9-2 2s.9 2 2 2zm24-12c4.8 0 8.9 3.4 9.8 8H22.2c.9-4.6 5-8 9.8-8zM17 33.8c.4.4.9.6 1.4.6s1-.2 1.4-.6c.8-.8.8-2 0-2.8l-5.7-5.7c-.8-.8-2-.8-2.8 0-.8.8-.8 2 0 2.8l5.7 5.7zM45.6 34.4c.5 0 1-.2 1.4-.6l5.7-5.7c.8-.8.8-2 0-2.8s-2-.8-2.8 0L44.1 31c-.8.8-.8 2 0 2.8.4.4.9.6 1.5.6z\\\" class=\\\"st0\\\"></path></svg>\"\n\n//# sourceURL=webpack://weather-app/./src/resources/weather-icons/sunset.svg?");

/***/ }),

/***/ "./src/resources/weather-icons/thunder.svg":
/*!*************************************************!*\
  !*** ./src/resources/weather-icons/thunder.svg ***!
  \*************************************************/
/***/ ((module) => {

eval("module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" xml:space=\\\"preserve\\\" id=\\\"Layer_2\\\" x=\\\"0\\\" y=\\\"0\\\" version=\\\"1.1\\\" viewBox=\\\"0 0 64 64\\\"><path fill=\\\"currentColor\\\" d=\\\"M13 42h9c1.1 0 2-.9 2-2s-.9-2-2-2h-9c-5 0-9-4-9-9s4-9 9-9c.9 0 1.8.1 2.6.4l2.2.7.3-2.3C19.3 11.5 25.6 6 33 6c5.9 0 11.3 3.5 13.7 8.9l.6 1.2 1.6-.1h.2c6.1 0 11 4.9 11 11s-4.9 11-10.9 11H42c-1.1 0-2 .9-2 2s.9 2 2 2h7c8.3 0 15-6.7 15-15 0-8-6.3-14.6-14.3-15C46.5 5.9 40 2 33 2c-8.6 0-16.2 6-18.3 14.1-.6 0-1.1-.1-1.7-.1-7.2 0-13 5.9-13 13s5.8 13 13 13z\\\" class=\\\"st0\\\"></path><path fill=\\\"currentColor\\\" d=\\\"M37.2 34c-.9-.7-2.1-.6-2.8.3L21.8 50h8l-7 8.7c-.7.9-.6 2.1.3 2.8.4.3.8.4 1.2.4.6 0 1.2-.3 1.6-.8L38.2 46h-8l7.4-9.2c.7-.9.5-2.1-.4-2.8z\\\" class=\\\"st0\\\"></path></svg>\"\n\n//# sourceURL=webpack://weather-app/./src/resources/weather-icons/thunder.svg?");

/***/ }),

/***/ "./src/scripts/iconMapper.js":
/*!***********************************!*\
  !*** ./src/scripts/iconMapper.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getIcon)\n/* harmony export */ });\n/* harmony import */ var _resources_weather_icons_blizzard_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resources/weather-icons/blizzard.svg */ \"./src/resources/weather-icons/blizzard.svg\");\n/* harmony import */ var _resources_weather_icons_blizzard_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_resources_weather_icons_blizzard_svg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _resources_weather_icons_cloudy_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resources/weather-icons/cloudy.svg */ \"./src/resources/weather-icons/cloudy.svg\");\n/* harmony import */ var _resources_weather_icons_cloudy_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_resources_weather_icons_cloudy_svg__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _resources_weather_icons_drizzle_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resources/weather-icons/drizzle.svg */ \"./src/resources/weather-icons/drizzle.svg\");\n/* harmony import */ var _resources_weather_icons_drizzle_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_resources_weather_icons_drizzle_svg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _resources_weather_icons_fog_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resources/weather-icons/fog.svg */ \"./src/resources/weather-icons/fog.svg\");\n/* harmony import */ var _resources_weather_icons_fog_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_resources_weather_icons_fog_svg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _resources_weather_icons_ice_pellets_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../resources/weather-icons/ice_pellets.svg */ \"./src/resources/weather-icons/ice_pellets.svg\");\n/* harmony import */ var _resources_weather_icons_ice_pellets_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_resources_weather_icons_ice_pellets_svg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _resources_weather_icons_mist_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../resources/weather-icons/mist.svg */ \"./src/resources/weather-icons/mist.svg\");\n/* harmony import */ var _resources_weather_icons_mist_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_resources_weather_icons_mist_svg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _resources_weather_icons_moon_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../resources/weather-icons/moon.svg */ \"./src/resources/weather-icons/moon.svg\");\n/* harmony import */ var _resources_weather_icons_moon_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_resources_weather_icons_moon_svg__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _resources_weather_icons_overcast_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../resources/weather-icons/overcast.svg */ \"./src/resources/weather-icons/overcast.svg\");\n/* harmony import */ var _resources_weather_icons_overcast_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_resources_weather_icons_overcast_svg__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _resources_weather_icons_rain_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../resources/weather-icons/rain.svg */ \"./src/resources/weather-icons/rain.svg\");\n/* harmony import */ var _resources_weather_icons_rain_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_resources_weather_icons_rain_svg__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _resources_weather_icons_sleet_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../resources/weather-icons/sleet.svg */ \"./src/resources/weather-icons/sleet.svg\");\n/* harmony import */ var _resources_weather_icons_sleet_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_resources_weather_icons_sleet_svg__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _resources_weather_icons_snow_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../resources/weather-icons/snow.svg */ \"./src/resources/weather-icons/snow.svg\");\n/* harmony import */ var _resources_weather_icons_snow_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_resources_weather_icons_snow_svg__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _resources_weather_icons_sun_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../resources/weather-icons/sun.svg */ \"./src/resources/weather-icons/sun.svg\");\n/* harmony import */ var _resources_weather_icons_sun_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_resources_weather_icons_sun_svg__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _resources_weather_icons_thunder_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../resources/weather-icons/thunder.svg */ \"./src/resources/weather-icons/thunder.svg\");\n/* harmony import */ var _resources_weather_icons_thunder_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_resources_weather_icons_thunder_svg__WEBPACK_IMPORTED_MODULE_12__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst iconMap = [\r\n\t{ regex: /thunder/i, icon: (_resources_weather_icons_thunder_svg__WEBPACK_IMPORTED_MODULE_12___default()) },\r\n\t{ regex: /cloudy/i, icon: (_resources_weather_icons_cloudy_svg__WEBPACK_IMPORTED_MODULE_1___default()) },\r\n\t{ regex: /sunny/i, icon: (_resources_weather_icons_sun_svg__WEBPACK_IMPORTED_MODULE_11___default()) },\r\n\t{ regex: /clear/i, icon: (_resources_weather_icons_moon_svg__WEBPACK_IMPORTED_MODULE_6___default()) },\r\n\t{ regex: /overcast/i, icon: (_resources_weather_icons_overcast_svg__WEBPACK_IMPORTED_MODULE_7___default()) },\r\n\t{ regex: /fog/i, icon: (_resources_weather_icons_fog_svg__WEBPACK_IMPORTED_MODULE_3___default()) },\r\n\t{ regex: /mist/i, icon: (_resources_weather_icons_mist_svg__WEBPACK_IMPORTED_MODULE_5___default()) },\r\n\t{ regex: /(rain)/i, icon: (_resources_weather_icons_rain_svg__WEBPACK_IMPORTED_MODULE_8___default()) },\r\n\t{ regex: /snow/i, icon: (_resources_weather_icons_snow_svg__WEBPACK_IMPORTED_MODULE_10___default()) },\r\n\t{ regex: /blizzard/i, icon: (_resources_weather_icons_blizzard_svg__WEBPACK_IMPORTED_MODULE_0___default()) },\r\n\t{ regex: /(sleet)/i, icon: (_resources_weather_icons_sleet_svg__WEBPACK_IMPORTED_MODULE_9___default()) },\r\n\t{ regex: /drizzle/i, icon: (_resources_weather_icons_drizzle_svg__WEBPACK_IMPORTED_MODULE_2___default()) },\r\n\t{ regex: /ice pellets/i, icon: (_resources_weather_icons_ice_pellets_svg__WEBPACK_IMPORTED_MODULE_4___default()) },\r\n];\r\n\r\nfunction getIcon(conditionText) {\r\n\tfor (let element of iconMap) {\r\n\t\tif (element.regex.test(conditionText)) {\r\n\t\t\treturn element.icon;\r\n\t\t}\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://weather-app/./src/scripts/iconMapper.js?");

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var autosize_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! autosize-input */ \"./node_modules/autosize-input/index.js\");\n/* harmony import */ var autosize_input__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(autosize_input__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/index.scss */ \"./src/styles/index.scss\");\n/* harmony import */ var _weatherData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weatherData */ \"./src/scripts/weatherData.js\");\n/* harmony import */ var _iconMapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iconMapper */ \"./src/scripts/iconMapper.js\");\n/* harmony import */ var _resources_weather_icons_sunrise_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../resources/weather-icons/sunrise.svg */ \"./src/resources/weather-icons/sunrise.svg\");\n/* harmony import */ var _resources_weather_icons_sunrise_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_resources_weather_icons_sunrise_svg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _resources_weather_icons_sunset_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../resources/weather-icons/sunset.svg */ \"./src/resources/weather-icons/sunset.svg\");\n/* harmony import */ var _resources_weather_icons_sunset_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_resources_weather_icons_sunset_svg__WEBPACK_IMPORTED_MODULE_5__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet displayOn = false;\r\ndocument.querySelector('main').classList.add('display-hidden');\r\n\r\nconst locationForm = document.getElementById('location-form');\r\nconst locationInput = document.getElementById('location-input');\r\n\r\n// third-party library function to make text input resize to content\r\nautosize_input__WEBPACK_IMPORTED_MODULE_0___default()(locationInput);\r\nlocationInput.focus();\r\n\r\nlocationForm.addEventListener('submit', (e) => {\r\n\te.preventDefault();\r\n\tlocationInput.blur();\r\n});\r\n\r\nlocationInput.addEventListener('focusout', () => updateData(locationInput.value));\r\nlocationInput.addEventListener('input', clearError);\r\n\r\nfunction updateData(location) {\r\n\tif (!location) {\r\n\t\treturn;\r\n\t}\r\n\r\n\t(0,_weatherData__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(location.toLowerCase().trim())\r\n\t\t.then((data) => {\r\n\t\t\tdisplayData(data);\r\n\t\t})\r\n\t\t.catch((error) => {\r\n\t\t\tconsole.error(`Failed to update data: ${error}`);\r\n\t\t\tshowError();\r\n\t\t});\r\n}\r\n\r\nfunction displayData(data) {\r\n\tif (!displayOn) {\r\n\t\tdisplayOn = true;\r\n\t\tdocument.querySelector('main').classList.remove('display-hidden');\r\n\t}\r\n\r\n\tupdateLocationDetails(data);\r\n\tupdateCurrentWeatherInfo(data);\r\n\tupdateCurrentWeatherDetails(data);\r\n\tupdateForecast(data);\r\n}\r\n\r\nfunction showError() {\r\n\tclearError();\r\n\tlocationInput.classList.add('invalid');\r\n}\r\n\r\nfunction clearError() {\r\n\tlocationInput.classList.remove('invalid');\r\n}\r\n\r\nfunction updateLocationDetails(weatherData) {\r\n\tconst locationData = weatherData.location;\r\n\tconst locationDetailsLabel = document.getElementById('location-details');\r\n\r\n\tlet locationDetails = '';\r\n\r\n\tif (locationData.region) {\r\n\t\tlocationDetails += locationData.region + ', ';\r\n\t}\r\n\tlocationDetails += locationData.country;\r\n\r\n\tlocationDetailsLabel.textContent = locationDetails;\r\n}\r\n\r\nfunction updateCurrentWeatherInfo(weatherData) {\r\n\tconst currentData = weatherData.current;\r\n\r\n\tconst currentTemperatureLabel = document.getElementById('current-temperature-label');\r\n\tconst feelsLikeLabel = document.getElementById('feels-like-label');\r\n\tconst conditionLabel = document.getElementById('current-condition-label');\r\n\tconst conditionIcon = document.getElementById('current-condition-icon');\r\n\r\n\tcurrentTemperatureLabel.textContent = `${currentData.temp_c}\\u2103`;\r\n\tfeelsLikeLabel.textContent = `Feels like ${currentData.feelslike_c}\\u2103`;\r\n\tconditionLabel.textContent = currentData.condition.text;\r\n\tconditionIcon.innerHTML = (0,_iconMapper__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(currentData.condition.text);\r\n}\r\n\r\nconst aqiStatus = {\r\n\t1: 'Good',\r\n\t2: 'Moderate',\r\n\t3: 'Unhealthy for sensitive group',\r\n\t4: 'Unhealthy',\r\n\t5: 'Very unhealthy',\r\n\t6: 'Hazardous',\r\n};\r\n\r\nfunction updateCurrentWeatherDetails(weatherData) {\r\n\tconst currentData = weatherData.current;\r\n\tconst windSpeedLabel = document.getElementById('details-wind-speed');\r\n\tconst windDirLabel = document.getElementById('details-wind-dir');\r\n\tconst humidityLabel = document.getElementById('details-humidity');\r\n\tconst cloudLabel = document.getElementById('details-cloud');\r\n\tconst pressureLabel = document.getElementById('details-pressure');\r\n\tconst aqiLabel = document.getElementById('details-aqi');\r\n\r\n\twindSpeedLabel.textContent = `${currentData.wind_kph}kph`;\r\n\twindDirLabel.textContent = `${currentData.wind_dir} (${currentData.wind_degree}\\xBA)`;\r\n\thumidityLabel.textContent = `${currentData.humidity}%`;\r\n\tcloudLabel.textContent = `${currentData.cloud}%`;\r\n\tpressureLabel.textContent = `${currentData.pressure_mb}mb`;\r\n\taqiLabel.textContent = aqiStatus[currentData.air_quality['us-epa-index']];\r\n}\r\n\r\nfunction updateForecast(weatherData) {\r\n\tconst dayData = weatherData.forecast.forecastday[0];\r\n\r\n\tconst sunriseIcon = document.getElementById('sunrise-icon');\r\n\tconst sunsetIcon = document.getElementById('sunset-icon');\r\n\tconst sunriseTimeLabel = document.getElementById('sunrise-time-label');\r\n\tconst sunsetTimeLabel = document.getElementById('sunset-time-label');\r\n\r\n\tsunriseIcon.innerHTML = (_resources_weather_icons_sunrise_svg__WEBPACK_IMPORTED_MODULE_4___default());\r\n\tsunsetIcon.innerHTML = (_resources_weather_icons_sunset_svg__WEBPACK_IMPORTED_MODULE_5___default());\r\n\tsunriseTimeLabel.textContent = normalizeTime(dayData.astro.sunrise);\r\n\tsunsetTimeLabel.textContent = normalizeTime(dayData.astro.sunset);\r\n\r\n\tconst forecastList = document.getElementById('forecast-list');\r\n\twhile (forecastList.firstChild) {\r\n\t\tforecastList.removeChild(forecastList.firstChild);\r\n\t}\r\n\r\n\tlet scrollHeight = 0;\r\n\r\n\tfor (let i = 0; i < 24; ++i) {\r\n\t\tconst hourData = dayData.hour[i];\r\n\t\tconst element = makeForecastElement(hourData);\r\n\t\tforecastList.appendChild(element);\r\n\r\n\t\tif (getHour(hourData.time) == getHour(weatherData.current.last_updated)) {\r\n\t\t\telement.classList.add('currentHour');\r\n\t\t\tscrollHeight = element.offsetHeight * i;\r\n\t\t}\r\n\t}\r\n\r\n\tforecastList.scrollTo(0, scrollHeight);\r\n}\r\n\r\nfunction makeForecastElement(hourData) {\r\n\tconst element = document.createElement('div');\r\n\telement.classList.add('forecast-element');\r\n\r\n\tconst hourLabel = document.createElement('h3');\r\n\thourLabel.textContent = hourData.time.split(' ')[1];\r\n\thourLabel.classList.add('forecast-time');\r\n\telement.appendChild(hourLabel);\r\n\r\n\tconst tempLabel = document.createElement('span');\r\n\ttempLabel.textContent = hourData.temp_c + '\\u2103';\r\n\ttempLabel.classList.add('forecast-temp');\r\n\telement.appendChild(tempLabel);\r\n\r\n\tconst conditionIcon = document.createElement('svg');\r\n\tconditionIcon.innerHTML = (0,_iconMapper__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(hourData.condition.text);\r\n\telement.appendChild(conditionIcon);\r\n\treturn element;\r\n}\r\n\r\nfunction getHour(timeString) {\r\n\treturn timeString.split(' ')[1].split(':')[0];\r\n}\r\n\r\nfunction normalizeTime(timeString) {\r\n\tlet time, period, hours, minutes;\r\n\t[time, period] = timeString.split(' ');\r\n\t[hours, minutes] = time.split(':');\r\n\r\n\tif (period == 'PM') {\r\n\t\thours = Number(hours) + 12;\r\n\t}\r\n\r\n\treturn `${hours}:${minutes}`;\r\n}\r\n\n\n//# sourceURL=webpack://weather-app/./src/scripts/main.js?");

/***/ }),

/***/ "./src/scripts/weatherData.js":
/*!************************************!*\
  !*** ./src/scripts/weatherData.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getWeatherData)\n/* harmony export */ });\n\r\n\r\nconst API_KEY = '18d0a9f1ed314c8e8cc120921230304';\r\n\r\nasync function getWeatherData(location) {\r\n\ttry {\r\n\t\tconst response = await fetch(\r\n\t\t\t`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=1&aqi=yes&alerts=no`\r\n\t\t);\r\n\t\tif (!response.ok) {\r\n\t\t\tthrow Error(`Response status: ${response.status}`);\r\n\t\t}\r\n\r\n\t\tconst jsonData = await response.json();\r\n\r\n\t\treturn Promise.resolve(jsonData);\r\n\t} catch (error) {\r\n\t\treturn Promise.reject(`Failed to get data for location '${location}': ${error}`);\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://weather-app/./src/scripts/weatherData.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/main.js");
/******/ 	
/******/ })()
;