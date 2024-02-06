/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./blocks/accordion/accordion.js":
/*!***************************************!*\
  !*** ./blocks/accordion/accordion.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sources_js_functions_slideBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sources/js/functions/slideBlock */ "./sources/js/functions/slideBlock.js");

var accordion__question = document.querySelectorAll('.accordion__question');
accordion__question.forEach(function (el) {
  el.addEventListener('click', function (event) {
    event.preventDefault();
    var active = el.classList.contains('accordion__question_active');
    accordion__question.forEach(function (second) {
      var next = second.nextElementSibling;
      second.classList.remove('accordion__question_active');
      (0,_sources_js_functions_slideBlock__WEBPACK_IMPORTED_MODULE_0__.slideHide)(next);
    });

    if (!active) {
      var next = el.nextElementSibling;
      el.classList.add('accordion__question_active');
      (0,_sources_js_functions_slideBlock__WEBPACK_IMPORTED_MODULE_0__.slideShow)(next);
    }
  });
});

/***/ }),

/***/ "./blocks/header/header.js":
/*!*********************************!*\
  !*** ./blocks/header/header.js ***!
  \*********************************/
/***/ (() => {

var header__burger = document.querySelector('.header__burger');
var header__menu = document.querySelector('.header__menu');

if (header__burger) {
  header__burger.addEventListener('click', function () {
    if (header__burger.classList.contains('header__burger_active')) {
      header__burger.classList.remove('header__burger_active');
      header__menu.classList.remove('header__menu_active');
    } else {
      header__burger.classList.add('header__burger_active');
      header__menu.classList.add('header__menu_active');
    }
  });
}

/***/ }),

/***/ "./sources/js/functions/slideBlock.js":
/*!********************************************!*\
  !*** ./sources/js/functions/slideBlock.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   slideHide: () => (/* binding */ slideHide),
/* harmony export */   slideShow: () => (/* binding */ slideShow),
/* harmony export */   slideToggle: () => (/* binding */ slideToggle)
/* harmony export */ });
function slideToggle(e) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;

  if (getComputedStyle(e).display == 'none') {
    slideShow(e, time);
  } else {
    slideHide(e, time);
  }
}
function slideShow(e) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  e.style.overflow = 'hidden';

  if (getComputedStyle(e).display == 'none') {
    e.style.display = 'block';
    var h = +getComputedStyle(e).height.replace('px', "");
    setCss(e, '0px', '0px', '0px', '0px', '0px', '0px', '0px');
    setTimeout(function () {
      e.style.transition = time + 'ms';
      setCss(e, h + 'px');
    }, 0);
    setTimeout(function () {
      e.style.display = 'block';
      setCss(e);
      e.style.overflow = '';
      e.style.transition = '';
    }, time);
  }
}
function slideHide(e) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  e.style.overflow = 'hidden';

  if (getComputedStyle(e).display != 'none') {
    var h = +getComputedStyle(e).height.replace('px', "");
    e.style.height = h + 'px';
    setTimeout(function () {
      e.style.transition = time + 'ms';
      setCss(e, '0px', '0px', '0px', '0px', '0px', '0px', '0px');
    }, 0);
    setTimeout(function () {
      e.style.display = 'none';
      setCss(e);
      e.style.overflow = '';
      e.style.transition = '';
    }, time);
  }
}

function setCss(e) {
  var h = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var pT = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var pB = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  var mT = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
  var mB = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';
  var bT = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : '';
  var bB = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : '';
  e.style.height = h;
  e.style.paddingTop = pT;
  e.style.paddingBottom = pB;
  e.style.marginTop = mT;
  e.style.marginBottom = mB;
  e.style.borderTopWidth = bT;
  e.style.borderBottomWidth = bB;
}

/***/ }),

/***/ "./sources/js/scripts.js":
/*!*******************************!*\
  !*** ./sources/js/scripts.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../blocks/header/header */ "./blocks/header/header.js");
/* harmony import */ var _blocks_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blocks_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_accordion_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/accordion/accordion */ "./blocks/accordion/accordion.js");



/***/ }),

/***/ "./sources/styles/styles.scss":
/*!************************************!*\
  !*** ./sources/styles/styles.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./sources/styles/admin.scss":
/*!***********************************!*\
  !*** ./sources/styles/admin.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			// no module.id needed
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/assets/js/scripts": 0,
/******/ 			"assets/styles/admin": 0,
/******/ 			"assets/styles/styles": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["assets/styles/admin","assets/styles/styles"], () => (__webpack_require__("./sources/js/scripts.js")))
/******/ 	__webpack_require__.O(undefined, ["assets/styles/admin","assets/styles/styles"], () => (__webpack_require__("./sources/styles/styles.scss")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["assets/styles/admin","assets/styles/styles"], () => (__webpack_require__("./sources/styles/admin.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=scripts.js.map