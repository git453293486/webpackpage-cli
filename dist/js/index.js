/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _bootstrap = __webpack_require__(/*! ../js/plugin/bootstrap-3.3.7/css/bootstrap.css */ \"./src/js/plugin/bootstrap-3.3.7/css/bootstrap.css\");\n\nvar _bootstrap2 = _interopRequireDefault(_bootstrap);\n\nvar _public = __webpack_require__(/*! ./public/public.js */ \"./src/js/public/public.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import Vue from 'vue';\n// import Swipercss from '../js/plugin/swiper/swiper.min.css'\n// import Swiper from 'swiper'\n// function add(...x){\n//     return x.reduce((m,n)=>m+n);\n// }\n// function add(...x){\n//     return x.reduce(function(m,n){\n//         return m+n;\n//     })\n// }\n// var ap = function(x, y) { \n//     x++;\n//     y--;\n//     return x * y;\n// };\n// var ap = x => x+1;\n// alert(ap(1));\nconsole.log((0, _public.square)(111));\nconsole.log((0, _public.add)(2, 5)); // alert(m);\n//var people = name => 'hello' + name\n// var  people = function(name){\n//     return ('hello'+name);\n// } \n// alert(people(1))\n// import '../js/plugin/pa/partialviewslider.css'\n// import '../js/plugin/pa/partialviewslider.js';\n// $(document).ready(function(){\n//     $('#partial-view').partialViewSlider();\n// });   \n// $('button').click(function(){\n//     alert(1);\n// })\n// window.onload=function(){\n//     new Swiper ('.swiper-container', {\n//         direction: 'horizontal', // 垂直切换选项\n//         loop: true, // 循环模式选项\n//         speed:1000,\n//         autoplay : {\n//             delay:2500,\n//             disableOnInteraction: false,\n//         },\n//         // 如果需要分页器\n//         pagination: {\n//         el: '.swiper-pagination',\n//         },\n//         // 如果需要前进后退按钮\n//         navigation: {\n//             nextEl: '.swiper-button-next',\n//             prevEl: '.swiper-button-prev',\n//         },\n//     })\n// }\n// new Vue({\n//     el:'#app',\n//     data:{\n//         mess:\"asdasd\"\n//     },\n//     methods:{\n//         asd:function(){\n//         }\n//     }\n// })\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/plugin/bootstrap-3.3.7/css/bootstrap.css":
/*!*********************************************************!*\
  !*** ./src/js/plugin/bootstrap-3.3.7/css/bootstrap.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/js/plugin/bootstrap-3.3.7/css/bootstrap.css?");

/***/ }),

/***/ "./src/js/public/public.js":
/*!*********************************!*\
  !*** ./src/js/public/public.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar m = exports.m = '一个人';\nvar n = exports.n = 'ergeren';\n\n//# sourceURL=webpack:///./src/js/public/public.js?");

/***/ })

/******/ });