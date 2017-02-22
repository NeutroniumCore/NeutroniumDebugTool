/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(10)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(3),
  /* template */
  __webpack_require__(16),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_icon_command__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_icon_command___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_icon_command__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_font_awesome_css_font_awesome_css__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_font_awesome_css_font_awesome_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_font_awesome_css_font_awesome_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bulma__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bulma___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bulma__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var props = {
  viewModel: Object
};

/* harmony default export */ __webpack_exports__["default"] = {
  components: {
    iconCommand: __WEBPACK_IMPORTED_MODULE_0__components_icon_command___default.a
  },
  name: 'app',
  props: props,
  data: function data() {
    return this.viewModel;
  }
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_neutronium_vue_command_mixin__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_bulma_tooltip__ = __webpack_require__(13);
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = {
  components: {
    Tooltip: __WEBPACK_IMPORTED_MODULE_1_vue_bulma_tooltip__["a" /* default */]
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_0_neutronium_vue_command_mixin__["a" /* default */]],
  props: {
    nome: String,
    icon: String
  },
  computed: {
    iconName: function iconName() {
      return "fa-" + this.icon;
    }
  }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const commandMixin = {
	props: {
		command: {
			required: true,
			validator: function (value) {
        		return typeof value === 'object'
      		}
		},
		arg: {
			type: Object,
			required: false,
			default: null
		}
    },
    computed: {
		canExecute: function () {
			if (this.command === null)
				return false;
			return this.command.CanExecuteValue;
		}
	},
	watch: {
		'command.CanExecuteCount': function () {
			this.computeCanExecute();
		},
		arg: function () {
			this.computeCanExecute();
		}
	},
	methods: {
		computeCanExecute: function () {
			if (this.command !== null)
				this.command.CanExecute(this.arg);
		},
		execute: function () {
			if (this.canExecute) {
				var beforeCb = this.beforeCommand;
				if (!!beforeCb)
					beforeCb();
				this.command.Execute(this.arg);
			}
		}
	}
  };

  /* harmony default export */ __webpack_exports__["a"] = commandMixin;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "810a1b930979de83478be0f458b51dd8.png";

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);




/* harmony default export */ __webpack_exports__["a"] = {
  name: 'tooltip',
  abstract: true,

  props: {
    type: String,
    size: String,
    always: Boolean,
    noAnimate: Boolean,
    rounded: Boolean,
    label: {
      type: String,
      default: ''
    },
    placement: {
      type: String,
      default: 'bottom'
    }
  },

  render () {
    let children = this.$slots.default
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(c => c.tag)
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    const rawChild = children[0]


    rawChild.data.attrs = {
      'aria-label': this.label
    }

    rawChild.data.class = __WEBPACK_IMPORTED_MODULE_0_classnames___default()(
      'tooltip',
      `tooltip--${this.placement}`,
      {
        [`tooltip--${this.type}`]: this.type,
        [`tooltip--${this.size}`]: this.size,
        'tooltip--rounded': this.rounded,
        'tooltip--always': this.always,
        'tooltip--no-animate': this.noAnimate
      }
    )

    return rawChild
  },

  watch: {
    label (val) {
      this.$el.setAttribute('aria-label', val)
    }
  }

};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(9)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(4),
  /* template */
  __webpack_require__(15),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tooltip', {
    attrs: {
      "label": _vm.nome,
      "placement": "bottom-right"
    }
  }, [_c('a', {
    staticClass: "button is-primary is-large is-inverted is-outlined",
    on: {
      "click": _vm.execute
    }
  }, [_c('span', {
    staticClass: "icon is-medium"
  }, [_c('i', {
    staticClass: "fa",
    class: _vm.iconName
  })])])])
},staticRenderFns: []}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "main hero is-primary"
  }, [_c('div', {
    staticClass: "level inside"
  }, [_c('div', {
    staticClass: "level-item"
  }, [_c('icon-command', {
    class: {
      'is-active': _vm.IsDebuggingVm
    },
    attrs: {
      "command": _vm.DebugBrowser,
      "icon": "bars",
      "nome": "Inspect"
    }
  }), _vm._v(" "), (_vm.VmDebug) ? _c('icon-command', {
    attrs: {
      "command": _vm.DebugWindow,
      "icon": "bug",
      "nome": "Vm debugger"
    }
  }) : _vm._e(), _vm._v(" "), _c('icon-command', {
    attrs: {
      "command": _vm.ShowInfo,
      "icon": "info-circle",
      "nome": "About"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "level-right"
  }, [_c('div', {
    staticClass: "tag is-medium"
  }, [_c('span', [_vm._v("Neutronium " + _vm._s(_vm.ComponentName))]), _vm._v(" "), _c('img', {
    staticClass: "logo",
    attrs: {
      "src": __webpack_require__(12)
    }
  })])])])])
},staticRenderFns: []}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App_vue__);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('app', __WEBPACK_IMPORTED_MODULE_1__App_vue___default.a)

/***/ })
/******/ ]);
//# sourceMappingURL=build.js.map