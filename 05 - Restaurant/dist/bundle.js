/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/*\n! tailwindcss v3.4.4 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured \\`sans\\` font-family by default.\n5. Use the user's configured \\`sans\\` font-feature-settings by default.\n6. Use the user's configured \\`sans\\` font-variation-settings by default.\n7. Disable tap highlights on iOS\n*/\n\nhtml,\n:host {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n  -webkit-tap-highlight-color: transparent; /* 7 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from \\`html\\` so users can set them as a class directly on the \\`html\\` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured \\`mono\\` font-family by default.\n2. Use the user's configured \\`mono\\` font-feature-settings by default.\n3. Use the user's configured \\`mono\\` font-variation-settings by default.\n4. Correct the odd \\`em\\` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-feature-settings: normal; /* 2 */\n  font-variation-settings: normal; /* 3 */\n  font-size: 1em; /* 4 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent \\`sub\\` and \\`sup\\` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  letter-spacing: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\ninput:where([type='button']),\ninput:where([type='reset']),\ninput:where([type='submit']) {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional \\`:invalid\\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to \\`inherit\\` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements \\`display: block\\` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add \\`vertical-align: middle\\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\r\n.container {\n  width: 100%;\n}\r\n@media (min-width: 640px) {\n\n  .container {\n    max-width: 640px;\n  }\n}\r\n@media (min-width: 768px) {\n\n  .container {\n    max-width: 768px;\n  }\n}\r\n@media (min-width: 1024px) {\n\n  .container {\n    max-width: 1024px;\n  }\n}\r\n@media (min-width: 1280px) {\n\n  .container {\n    max-width: 1280px;\n  }\n}\r\n@media (min-width: 1536px) {\n\n  .container {\n    max-width: 1536px;\n  }\n}\r\n.mx-5 {\n  margin-left: 1.25rem;\n  margin-right: 1.25rem;\n}\r\n.mb-5 {\n  margin-bottom: 1.25rem;\n}\r\n.flex {\n  display: flex;\n}\r\n.grid {\n  display: grid;\n}\r\n.h-20 {\n  height: 5rem;\n}\r\n.h-60 {\n  height: 15rem;\n}\r\n.h-screen {\n  height: 100vh;\n}\r\n.w-full {\n  width: 100%;\n}\r\n.w-screen {\n  width: 100vw;\n}\r\n.grid-cols-1 {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\r\n.flex-col {\n  flex-direction: column;\n}\r\n.items-center {\n  align-items: center;\n}\r\n.justify-center {\n  justify-content: center;\n}\r\n.justify-around {\n  justify-content: space-around;\n}\r\n.gap-10 {\n  gap: 2.5rem;\n}\r\n.gap-4 {\n  gap: 1rem;\n}\r\n.gap-5 {\n  gap: 1.25rem;\n}\r\n.overflow-hidden {\n  overflow: hidden;\n}\r\n.rounded-xl {\n  border-radius: 0.75rem;\n}\r\n.bg-animeRed-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(221, 72, 84, 1);\n  background-color: rgba(221, 72, 84, var(--tw-bg-opacity));\n}\r\n.bg-opacity-60 {\n  --tw-bg-opacity: 0.6;\n}\r\n.px-10 {\n  padding-left: 2.5rem;\n  padding-right: 2.5rem;\n}\r\n.px-5 {\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\r\n.py-5 {\n  padding-top: 1.25rem;\n  padding-bottom: 1.25rem;\n}\r\n.pb-10 {\n  padding-bottom: 2.5rem;\n}\r\n.pb-2 {\n  padding-bottom: 0.5rem;\n}\r\n.pt-10 {\n  padding-top: 2.5rem;\n}\r\n.pt-5 {\n  padding-top: 1.25rem;\n}\r\n.text-center {\n  text-align: center;\n}\r\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\r\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\r\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\r\n.font-thin {\n  font-weight: 100;\n}\r\n.shadow-2xl {\n  --tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\r\n.shadow-md {\n  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\r\n\r\nbody {\r\n  background-color: rgb(226, 231, 185);\r\n}\r\n\r\nnav {\r\n  background-color: rgb(233, 163, 103, 0.7);\r\n  height: 50px;\r\n  border: 2px solid transparent;\r\n  border-radius: 10%;\r\n}\r\n\r\n@media (min-width: 640px) {\n\n  .sm\\\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\r\n\r\n@media (min-width: 768px) {\n\n  .md\\\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n\n  .md\\\\:flex-row {\n    flex-direction: row;\n  }\n\n  .md\\\\:gap-36 {\n    gap: 9rem;\n  }\n}\r\n\r\n@media (min-width: 1024px) {\n\n  .lg\\\\:gap-80 {\n    gap: 20rem;\n  }\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-2/./src/style.css?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-2/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-2/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-2/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-2/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-2/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-2/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-2/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-2/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-2/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/logo.png */ \"./src/img/logo.png\");\n/* harmony import */ var _img_lobby_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/lobby.jpg */ \"./src/img/lobby.jpg\");\n/* harmony import */ var _img_lobby2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/lobby2.jpg */ \"./src/img/lobby2.jpg\");\n\r\n\r\n\r\n\r\nconst about = function () {\r\n  const content = document.createElement(\"section\");\r\n  content.classList = \"overflow-hidden\";\r\n  content.id = \"content\";\r\n\r\n  const header = document.createElement(\"div\");\r\n  header.id = \"header\";\r\n  header.className = \"flex justify-center items-center font-thin text-3xl pt-5\";\r\n  content.appendChild(header);\r\n\r\n  const bistroDiv = document.createElement(\"div\");\r\n  bistroDiv.textContent = \"AKIRA BISTRO\";\r\n  header.appendChild(bistroDiv);\r\n\r\n  const logoImg = document.createElement(\"img\");\r\n  logoImg.src = _img_logo_png__WEBPACK_IMPORTED_MODULE_0__;\r\n  logoImg.className = \"h-20\";\r\n  header.appendChild(logoImg);\r\n\r\n  const foodImg = document.createElement(\"div\");\r\n  foodImg.id = \"food-image\";\r\n  foodImg.className =\r\n    \"flex flex-col items-center justify-center w-screen gap-4 px-5 md:flex-row\";\r\n\r\n  // Array of image sources\r\n  const imageSources = [_img_lobby_jpg__WEBPACK_IMPORTED_MODULE_1__, _img_lobby2_jpg__WEBPACK_IMPORTED_MODULE_2__];\r\n\r\n  // Create and append images to the container\r\n  imageSources.forEach((src) => {\r\n    const img = document.createElement(\"img\");\r\n    img.src = src;\r\n    img.className = \"rounded-xl h-60 shadow-2xl\";\r\n    foodImg.appendChild(img);\r\n  });\r\n  content.appendChild(foodImg);\r\n\r\n  const about = document.createElement(\"div\");\r\n  about.id = \"about\";\r\n  about.className = \"flex flex-col items-center justify-center\";\r\n\r\n  const h1 = document.createElement(\"h1\");\r\n  h1.className = \"text-3xl font-thin py-5\";\r\n  h1.textContent = \"More About Us\";\r\n  about.appendChild(h1);\r\n\r\n  const p = document.createElement(\"p\");\r\n  p.className = \"text-thin text-center mx-5\";\r\n  p.textContent =\r\n    \"Tucked away in a charming corner of the city, Akira Bistro is a culinary gem that transports diners to the heart of Asia with every bite. Founded by the visionary Chef Akira Watanabe, a master of Japanese cuisine who honed his skills under the tutelage of Tokyo's most revered chefs, this intimate bistro offers an authentic and elevated dining experience that pays homage to the rich culinary traditions of the East. Our meticulously crafted menu is a harmonious fusion of flavors that celebrate the diversity of Asian cuisine. From the delicate artistry of meticulously rolled sushi to the bold and fragrant curries that awaken the senses, each dish is a testament to the passion and skill of our talented chefs. Sourcing only the finest and freshest ingredients, we ensure that every plate is a masterpiece, expertly balanced and bursting with authentic flavors that will transport you to the bustling streets of Tokyo, the vibrant markets of Bangkok, or the serene landscapes of rural China. Whether you're a connoisseur seeking an exquisite dining experience or a curious adventurer eager to explore new culinary horizons, Akira Bistro promises an unforgettable journey for your taste buds.\";\r\n  about.appendChild(p);\r\n  content.appendChild(about);\r\n\r\n  const footer = document.createElement(\"div\");\r\n  footer.id = \"footer\";\r\n  footer.className = \"flex flex-col md:flex-row justify-around w-full pt-10\";\r\n\r\n  const hours = document.createElement(\"div\");\r\n  hours.id = \"hours\";\r\n  hours.className = \"text-center pb-10\";\r\n  footer.appendChild(hours);\r\n\r\n  const hoursH1 = document.createElement(\"h1\");\r\n  hoursH1.classList = \"text-2xl font-thin pb-2\";\r\n  hoursH1.textContent = \"Our Store Hours\";\r\n  hours.appendChild(hoursH1);\r\n\r\n  const hoursList = document.createElement(\"ul\");\r\n  hoursList.className = \"hours-list\";\r\n\r\n  const hoursData = [\r\n    { day: \"Monday\", hours: \"11:00 AM - 10:00 PM\" },\r\n    { day: \"Tuesday\", hours: \"11:00 AM - 10:00 PM\" },\r\n    { day: \"Wednesday\", hours: \"11:00 AM - 10:00 PM\" },\r\n    { day: \"Thursday\", hours: \"11:00 AM - 10:00 PM\" },\r\n    { day: \"Friday\", hours: \"11:00 AM - 11:00 PM\" },\r\n    { day: \"Saturday\", hours: \"12:00 PM - 11:00 PM\" },\r\n    { day: \"Sunday\", hours: \"12:00 PM - 9:00 PM\" },\r\n  ];\r\n\r\n  // Create and append list items for each day and hours\r\n  hoursData.forEach((dayData) => {\r\n    const listItem = document.createElement(\"li\");\r\n    listItem.innerHTML = `<strong>${dayData.day}:</strong> ${dayData.hours}`;\r\n    hoursList.appendChild(listItem);\r\n  });\r\n  hours.appendChild(hoursList);\r\n\r\n  const contactDiv = document.createElement(\"div\");\r\n  contactDiv.id = \"contact\";\r\n  contactDiv.className = \"text-center pb-10\";\r\n\r\n  const contactHeading = document.createElement(\"h2\");\r\n  contactHeading.className = \"text-2xl font-thin pb-2\";\r\n  contactHeading.textContent = \"Contact Us\";\r\n  contactDiv.appendChild(contactHeading);\r\n\r\n  const contactInfoList = document.createElement(\"ul\");\r\n\r\n  // Array of contact information\r\n  const contactDetails = [\r\n    { type: \"Phone\", value: \"(123) 456-7890\" },\r\n    { type: \"Email\", value: \"contact@AkiraBistro.com\" },\r\n    { type: \"Address\", value: \"123 Main Street, Cityville, ST 12345\" },\r\n  ];\r\n\r\n  // Create and append list items for each contact detail\r\n  contactDetails.forEach((detail) => {\r\n    const listItem = document.createElement(\"li\");\r\n    listItem.innerHTML = `<strong>${detail.type}:</strong> ${detail.value}`;\r\n    contactInfoList.appendChild(listItem);\r\n  });\r\n  contactDiv.appendChild(contactInfoList);\r\n  footer.appendChild(contactDiv);\r\n\r\n  content.appendChild(footer);\r\n  return content;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);\r\n\n\n//# sourceURL=webpack://restaurant-2/./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/logo.png */ \"./src/img/logo.png\");\n/* harmony import */ var _img_food1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/food1.jpg */ \"./src/img/food1.jpg\");\n/* harmony import */ var _img_food2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/food2.jpg */ \"./src/img/food2.jpg\");\n/* harmony import */ var _img_food3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/food3.jpg */ \"./src/img/food3.jpg\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst home = function () {\r\n  const content = document.createElement(\"section\");\r\n  content.id = \"content\";\r\n\r\n  const header = document.createElement(\"div\");\r\n  header.id = \"header\";\r\n  header.className = \"flex justify-center items-center font-thin text-3xl pt-5\";\r\n  content.appendChild(header);\r\n\r\n  const bistroDiv = document.createElement(\"div\");\r\n  bistroDiv.textContent = \"AKIRA BISTRO\";\r\n  header.appendChild(bistroDiv);\r\n\r\n  const logoImg = document.createElement(\"img\");\r\n  logoImg.src = _img_logo_png__WEBPACK_IMPORTED_MODULE_1__;\r\n  logoImg.className = \"h-20\";\r\n  header.appendChild(logoImg);\r\n\r\n  const foodImg = document.createElement(\"div\");\r\n  foodImg.id = \"food-image\";\r\n  foodImg.className =\r\n    \"flex flex-col items-center justify-center w-screen gap-4 px-5 md:flex-row\";\r\n\r\n  // Array of image sources\r\n  const imageSources = [_img_food1_jpg__WEBPACK_IMPORTED_MODULE_2__, _img_food2_jpg__WEBPACK_IMPORTED_MODULE_3__, _img_food3_jpg__WEBPACK_IMPORTED_MODULE_4__];\r\n\r\n  // Create and append images to the container\r\n  imageSources.forEach((src) => {\r\n    const img = document.createElement(\"img\");\r\n    img.src = src;\r\n    img.className = \"rounded-xl h-60 shadow-2xl\";\r\n    foodImg.appendChild(img);\r\n  });\r\n  content.appendChild(foodImg);\r\n\r\n  const about = document.createElement(\"div\");\r\n  about.id = \"about\";\r\n  about.className = \"flex flex-col items-center justify-center\";\r\n\r\n  const h1 = document.createElement(\"h1\");\r\n  h1.className = \"text-3xl font-thin py-5\";\r\n  h1.textContent = \"About\";\r\n  about.appendChild(h1);\r\n\r\n  const p = document.createElement(\"p\");\r\n  p.className = \"text-thin text-center\";\r\n  p.textContent =\r\n    \"Welcome to AKIRA, where we invite you to embark on a culinary journey through the rich and diverse flavors of Asia. Our restaurant is a vibrant celebration of traditional Asian cuisine, brought to life with modern flair. Our chefs, masters of their craft, use only the freshest ingredients to create dishes that are both authentic and innovative, ensuring a memorable dining experience for every guest.\";\r\n  about.appendChild(p);\r\n  content.appendChild(about);\r\n\r\n  const footer = document.createElement(\"div\");\r\n  footer.id = \"footer\";\r\n  footer.className = \"flex flex-col md:flex-row justify-around w-full pt-10\";\r\n\r\n  const hours = document.createElement(\"div\");\r\n  hours.id = \"hours\";\r\n  hours.className = \"text-center pb-10\";\r\n  footer.appendChild(hours);\r\n\r\n  const hoursH1 = document.createElement(\"h1\");\r\n  hoursH1.classList = \"text-2xl font-thin pb-2\";\r\n  hoursH1.textContent = \"Our Store Hours\";\r\n  hours.appendChild(hoursH1);\r\n\r\n  const hoursList = document.createElement(\"ul\");\r\n  hoursList.className = \"hours-list\";\r\n\r\n  const hoursData = [\r\n    { day: \"Monday\", hours: \"11:00 AM - 10:00 PM\" },\r\n    { day: \"Tuesday\", hours: \"11:00 AM - 10:00 PM\" },\r\n    { day: \"Wednesday\", hours: \"11:00 AM - 10:00 PM\" },\r\n    { day: \"Thursday\", hours: \"11:00 AM - 10:00 PM\" },\r\n    { day: \"Friday\", hours: \"11:00 AM - 11:00 PM\" },\r\n    { day: \"Saturday\", hours: \"12:00 PM - 11:00 PM\" },\r\n    { day: \"Sunday\", hours: \"12:00 PM - 9:00 PM\" },\r\n  ];\r\n\r\n  // Create and append list items for each day and hours\r\n  hoursData.forEach((dayData) => {\r\n    const listItem = document.createElement(\"li\");\r\n    listItem.innerHTML = `<strong>${dayData.day}:</strong> ${dayData.hours}`;\r\n    hoursList.appendChild(listItem);\r\n  });\r\n  hours.appendChild(hoursList);\r\n\r\n  const contactDiv = document.createElement(\"div\");\r\n  contactDiv.id = \"contact\";\r\n  contactDiv.className = \"text-center pb-10\";\r\n\r\n  const contactHeading = document.createElement(\"h2\");\r\n  contactHeading.className = \"text-2xl font-thin pb-2\";\r\n  contactHeading.textContent = \"Contact Us\";\r\n  contactDiv.appendChild(contactHeading);\r\n\r\n  const contactInfoList = document.createElement(\"ul\");\r\n\r\n  // Array of contact information\r\n  const contactDetails = [\r\n    { type: \"Phone\", value: \"(123) 456-7890\" },\r\n    { type: \"Email\", value: \"contact@AkiraBistro.com\" },\r\n    { type: \"Address\", value: \"123 Main Street, Cityville, ST 12345\" },\r\n  ];\r\n\r\n  // Create and append list items for each contact detail\r\n  contactDetails.forEach((detail) => {\r\n    const listItem = document.createElement(\"li\");\r\n    listItem.innerHTML = `<strong>${detail.type}:</strong> ${detail.value}`;\r\n    contactInfoList.appendChild(listItem);\r\n  });\r\n  contactDiv.appendChild(contactInfoList);\r\n  footer.appendChild(contactDiv);\r\n\r\n  content.appendChild(footer);\r\n  return content;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\r\n\n\n//# sourceURL=webpack://restaurant-2/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n  const nav1 = document.getElementById(\"nav1\");\r\n  const nav2 = document.getElementById(\"nav2\");\r\n  const nav3 = document.getElementById(\"nav3\");\r\n\r\n  const homePage = (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  const menuPage = (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  const aboutPage = (0,_about__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n  const mainContent = document.getElementById(\"main-content\");\r\n\r\n  mainContent.appendChild(homePage);\r\n\r\n  function clearNavStates() {\r\n    nav1.className = \"\";\r\n    nav2.className = \"\";\r\n    nav3.className = \"\";\r\n  }\r\n\r\n  //Home\r\n  nav1.addEventListener(\"click\", function () {\r\n    clearNavStates();\r\n    nav1.className = \"bg-animeRed-500 bg-opacity-60 px-5 rounded-xl\";\r\n    mainContent.innerHTML = \"\";\r\n    mainContent.appendChild(homePage);\r\n  });\r\n\r\n  //Menu\r\n  nav2.addEventListener(\"click\", function () {\r\n    clearNavStates();\r\n    nav2.className = \"bg-animeRed-500 bg-opacity-60 px-5 rounded-xl\";\r\n    mainContent.innerHTML = \"\";\r\n    mainContent.appendChild(menuPage);\r\n  });\r\n\r\n  //About\r\n  nav3.addEventListener(\"click\", function () {\r\n    clearNavStates();\r\n    nav3.className = \"bg-animeRed-500 bg-opacity-60 px-5 rounded-xl\";\r\n    mainContent.innerHTML = \"\";\r\n    mainContent.appendChild(aboutPage);\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://restaurant-2/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/logo.png */ \"./src/img/logo.png\");\n/* harmony import */ var _img_ramen_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/ramen.jpg */ \"./src/img/ramen.jpg\");\n/* harmony import */ var _img_onigiri_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/onigiri.jpg */ \"./src/img/onigiri.jpg\");\n/* harmony import */ var _img_tonkatsu_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/tonkatsu.webp */ \"./src/img/tonkatsu.webp\");\n/* harmony import */ var _img_gyoza_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/gyoza.jpg */ \"./src/img/gyoza.jpg\");\n/* harmony import */ var _img_miso_soup_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/miso soup.jpg */ \"./src/img/miso soup.jpg\");\n/* harmony import */ var _img_cake_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/cake.png */ \"./src/img/cake.png\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst menu = function () {\r\n  const content = document.createElement(\"section\");\r\n\r\n  //Header Content\r\n  const header = document.createElement(\"div\");\r\n  header.id = \"header\";\r\n  header.className = \"flex justify-center items-center font-thin text-3xl pt-5\";\r\n  content.appendChild(header);\r\n\r\n  const bistroDiv = document.createElement(\"div\");\r\n  bistroDiv.textContent = \"AKIRA BISTRO\";\r\n  header.appendChild(bistroDiv);\r\n\r\n  const logoImg = document.createElement(\"img\");\r\n  logoImg.src = _img_logo_png__WEBPACK_IMPORTED_MODULE_0__;\r\n  logoImg.className = \"h-20\";\r\n  header.appendChild(logoImg);\r\n\r\n  //Main Content\r\n  const gridContent = document.createElement(\"div\");\r\n  gridContent.classList =\r\n    \"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-10\";\r\n\r\n  //Dynamically load menu items\r\n  const imageSources = [\r\n    { name: \"Ramen\", src: _img_ramen_jpg__WEBPACK_IMPORTED_MODULE_1__, price: \"¥900\" },\r\n    { name: \"Tonkatsu\", src: _img_tonkatsu_webp__WEBPACK_IMPORTED_MODULE_3__, price: \"¥850\" },\r\n    { name: \"Gyoza\", src: _img_gyoza_jpg__WEBPACK_IMPORTED_MODULE_4__, price: \"¥200\" },\r\n    { name: \"Onigiri\", src: _img_onigiri_jpg__WEBPACK_IMPORTED_MODULE_2__, price: \"¥50\" },\r\n    { name: \"Miso Soup\", src: _img_miso_soup_jpg__WEBPACK_IMPORTED_MODULE_5__, price: \"¥150\" },\r\n    { name: \"Strawberry Cake\", src: _img_cake_png__WEBPACK_IMPORTED_MODULE_6__, price: \"¥245\" },\r\n  ];\r\n  imageSources.forEach((source) => {\r\n    const menuItem = document.createElement(\"div\");\r\n\r\n    const info = document.createElement(\"div\");\r\n    info.innerHTML = `${source.name}: ${source.price}`;\r\n    info.className = \"font-thin text-xl\";\r\n    menuItem.appendChild(info);\r\n\r\n    const img = document.createElement(\"img\");\r\n    img.src = source.src;\r\n    img.className = \"rounded-xl h-30 shadow-md mb-5\";\r\n    menuItem.appendChild(img);\r\n\r\n    gridContent.appendChild(menuItem);\r\n  });\r\n\r\n  content.appendChild(gridContent);\r\n\r\n  return content;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack://restaurant-2/./src/menu.js?");

/***/ }),

/***/ "./src/img/cake.png":
/*!**************************!*\
  !*** ./src/img/cake.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"78d8aebc2cbac5384136.png\";\n\n//# sourceURL=webpack://restaurant-2/./src/img/cake.png?");

/***/ }),

/***/ "./src/img/food1.jpg":
/*!***************************!*\
  !*** ./src/img/food1.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bfeabcfedfe5b895b59f.jpg\";\n\n//# sourceURL=webpack://restaurant-2/./src/img/food1.jpg?");

/***/ }),

/***/ "./src/img/food2.jpg":
/*!***************************!*\
  !*** ./src/img/food2.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0c00806100ab686fdd03.jpg\";\n\n//# sourceURL=webpack://restaurant-2/./src/img/food2.jpg?");

/***/ }),

/***/ "./src/img/food3.jpg":
/*!***************************!*\
  !*** ./src/img/food3.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f2ad77ac1e72c4426dbc.jpg\";\n\n//# sourceURL=webpack://restaurant-2/./src/img/food3.jpg?");

/***/ }),

/***/ "./src/img/gyoza.jpg":
/*!***************************!*\
  !*** ./src/img/gyoza.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e3461846539547afe9fd.jpg\";\n\n//# sourceURL=webpack://restaurant-2/./src/img/gyoza.jpg?");

/***/ }),

/***/ "./src/img/lobby.jpg":
/*!***************************!*\
  !*** ./src/img/lobby.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3099ebed0e4ce1243c80.jpg\";\n\n//# sourceURL=webpack://restaurant-2/./src/img/lobby.jpg?");

/***/ }),

/***/ "./src/img/lobby2.jpg":
/*!****************************!*\
  !*** ./src/img/lobby2.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"448f1c6bffdcd0c2c620.jpg\";\n\n//# sourceURL=webpack://restaurant-2/./src/img/lobby2.jpg?");

/***/ }),

/***/ "./src/img/logo.png":
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6ddfd1bb6e7b640ee8a0.png\";\n\n//# sourceURL=webpack://restaurant-2/./src/img/logo.png?");

/***/ }),

/***/ "./src/img/miso soup.jpg":
/*!*******************************!*\
  !*** ./src/img/miso soup.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dc5debb3f81cfe0fead4.jpg\";\n\n//# sourceURL=webpack://restaurant-2/./src/img/miso_soup.jpg?");

/***/ }),

/***/ "./src/img/onigiri.jpg":
/*!*****************************!*\
  !*** ./src/img/onigiri.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c8e313439e651c6a0414.jpg\";\n\n//# sourceURL=webpack://restaurant-2/./src/img/onigiri.jpg?");

/***/ }),

/***/ "./src/img/ramen.jpg":
/*!***************************!*\
  !*** ./src/img/ramen.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fc8fcce8f710dd88d3b7.jpg\";\n\n//# sourceURL=webpack://restaurant-2/./src/img/ramen.jpg?");

/***/ }),

/***/ "./src/img/tonkatsu.webp":
/*!*******************************!*\
  !*** ./src/img/tonkatsu.webp ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"02207797c5e8ba7ea31d.webp\";\n\n//# sourceURL=webpack://restaurant-2/./src/img/tonkatsu.webp?");

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
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;