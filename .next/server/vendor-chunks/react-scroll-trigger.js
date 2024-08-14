"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-scroll-trigger";
exports.ids = ["vendor-chunks/react-scroll-trigger"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-scroll-trigger/es/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-scroll-trigger/es/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"(ssr)/./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-dom.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.throttle */ \"(ssr)/./node_modules/lodash.throttle/index.js\");\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var clean_react_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clean-react-props */ \"(ssr)/./node_modules/clean-react-props/es/index.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\nvar ScrollTrigger = /*#__PURE__*/function (_Component) {\n  _inheritsLoose(ScrollTrigger, _Component);\n\n  function ScrollTrigger(props) {\n    var _this;\n\n    _this = _Component.call(this, props) || this;\n    _this.onScrollThrottled = lodash_throttle__WEBPACK_IMPORTED_MODULE_2___default()(_this.onScroll.bind(_assertThisInitialized(_this)), props.throttleScroll, {\n      trailing: false\n    });\n    _this.onResizeThrottled = lodash_throttle__WEBPACK_IMPORTED_MODULE_2___default()(_this.onResize.bind(_assertThisInitialized(_this)), props.throttleResize, {\n      trailing: false\n    });\n    _this.state = {\n      inViewport: false,\n      progress: 0,\n      lastScrollPosition: null,\n      lastScrollTime: null\n    };\n    return _this;\n  }\n\n  var _proto = ScrollTrigger.prototype;\n\n  _proto.componentDidMount = function componentDidMount() {\n    addEventListener('resize', this.onResizeThrottled);\n    addEventListener('scroll', this.onScrollThrottled);\n\n    if (this.props.triggerOnLoad) {\n      this.checkStatus();\n    }\n  };\n\n  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {\n    if (prevProps.throttleScroll !== this.props.throttleScroll) {\n      removeEventListener('scroll', this.onScrollThrottled);\n      this.onScrollThrottled = lodash_throttle__WEBPACK_IMPORTED_MODULE_2___default()(this.onScroll.bind(this), this.props.throttleScroll, {\n        trailing: false\n      });\n      addEventListener('scroll', this.onScrollThrottled);\n    }\n\n    if (prevProps.throttleResize !== this.props.throttleResize) {\n      removeEventListener('resize', this.onResizeThrottled);\n      this.onResizeThrottled = lodash_throttle__WEBPACK_IMPORTED_MODULE_2___default()(this.onResize.bind(this), this.props.throttleResize, {\n        trailing: false\n      });\n      addEventListener('resize', this.onResizeThrottled);\n    }\n  };\n\n  _proto.componentWillUnmount = function componentWillUnmount() {\n    removeEventListener('resize', this.onResizeThrottled);\n    removeEventListener('scroll', this.onScrollThrottled);\n  };\n\n  _proto.onResize = function onResize() {\n    this.checkStatus();\n  };\n\n  _proto.onScroll = function onScroll() {\n    this.checkStatus();\n  };\n\n  _proto.checkStatus = function checkStatus() {\n    var _this$props = this.props,\n        containerRef = _this$props.containerRef,\n        onEnter = _this$props.onEnter,\n        onExit = _this$props.onExit,\n        onProgress = _this$props.onProgress;\n    var _this$state = this.state,\n        lastScrollPosition = _this$state.lastScrollPosition,\n        lastScrollTime = _this$state.lastScrollTime;\n    var element = react_dom__WEBPACK_IMPORTED_MODULE_1___default().findDOMNode(this.element);\n    var elementRect = element.getBoundingClientRect();\n    var viewportStart = 0;\n    var scrollingElement = typeof containerRef === 'string' ? document.querySelector(containerRef) : containerRef;\n    var viewportEnd = containerRef === document.documentElement ? Math.max(containerRef.clientHeight, window.innerHeight || 0) : scrollingElement.clientHeight;\n    var inViewport = elementRect.top <= viewportEnd && elementRect.bottom >= viewportStart;\n    var position = window.scrollY;\n    var velocity = lastScrollPosition && lastScrollTime ? Math.abs((lastScrollPosition - position) / (lastScrollTime - Date.now())) : null;\n\n    if (inViewport) {\n      var progress = Math.max(0, Math.min(1, 1 - elementRect.bottom / (viewportEnd + elementRect.height)));\n\n      if (!this.state.inViewport) {\n        this.setState({\n          inViewport: inViewport\n        });\n        onEnter({\n          progress: progress,\n          velocity: velocity\n        }, this);\n      }\n\n      onProgress({\n        progress: progress,\n        velocity: velocity\n      }, this);\n      this.setState({\n        lastScrollPosition: position,\n        lastScrollTime: Date.now()\n      });\n      return;\n    }\n\n    if (this.state.inViewport) {\n      var _progress = elementRect.top <= viewportEnd ? 1 : 0;\n\n      this.setState({\n        lastScrollPosition: position,\n        lastScrollTime: Date.now(),\n        inViewport: inViewport,\n        progress: _progress\n      });\n      onProgress({\n        progress: _progress,\n        velocity: velocity\n      }, this);\n      onExit({\n        progress: _progress,\n        velocity: velocity\n      }, this);\n    }\n  };\n\n  _proto.render = function render() {\n    var _this2 = this;\n\n    var _this$props2 = this.props,\n        children = _this$props2.children,\n        component = _this$props2.component;\n    var elementMethod = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().isValidElement(component) ? 'cloneElement' : 'createElement';\n    return (react__WEBPACK_IMPORTED_MODULE_0___default())[elementMethod](component, _objectSpread(_objectSpread({}, (0,clean_react_props__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this.props, ['onProgress'])), {}, {\n      ref: function ref(element) {\n        _this2.element = element;\n      }\n    }), children);\n  };\n\n  return ScrollTrigger;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\nScrollTrigger.propTypes = {\n  component: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().element), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node)]),\n  containerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)]),\n  throttleResize: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),\n  throttleScroll: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),\n  triggerOnLoad: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),\n  onEnter: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),\n  onExit: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),\n  onProgress: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)\n};\nScrollTrigger.defaultProps = {\n  component: 'div',\n  containerRef: typeof document !== 'undefined' ? document.documentElement : 'html',\n  throttleResize: 100,\n  throttleScroll: 100,\n  triggerOnLoad: true,\n  onEnter: function onEnter() {},\n  onExit: function onExit() {},\n  onProgress: function onProgress() {}\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollTrigger);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2Nyb2xsLXRyaWdnZXIvZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUEyQyxnQ0FBZ0Msb0NBQW9DLG9EQUFvRCw2REFBNkQsaUVBQWlFLHNDQUFzQzs7QUFFdlUsaUNBQWlDLGdCQUFnQixzQkFBc0IsT0FBTyx1REFBdUQsNkRBQTZELDRDQUE0QyxvS0FBb0ssbUZBQW1GLEtBQUs7O0FBRTFlLDRDQUE0QyxrQkFBa0Isa0NBQWtDLG9FQUFvRSxLQUFLLE9BQU8sb0JBQW9COztBQUVwTSx3Q0FBd0MsdUJBQXVCLHlGQUF5Rjs7QUFFeEosZ0RBQWdELDBEQUEwRCwyQ0FBMkM7O0FBRXJKLGlDQUFpQyw0RUFBNEUsaUJBQWlCLGFBQWE7O0FBRWxHO0FBQ047QUFDRjtBQUNNO0FBQ0k7O0FBRTNDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QixzREFBUTtBQUN0QztBQUNBLEtBQUs7QUFDTCw4QkFBOEIsc0RBQVE7QUFDdEM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHNEQUFRO0FBQ3ZDO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQixzREFBUTtBQUN2QztBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNERBQW9CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQywyREFBb0I7QUFDekQsV0FBVyw4Q0FBSyx5REFBeUQsRUFBRSw2REFBVSxpQ0FBaUM7QUFDdEg7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQyxDQUFDLDRDQUFTOztBQUVYO0FBQ0EsYUFBYSwyREFBbUIsRUFBRSwyREFBaUIsRUFBRSx3REFBYztBQUNuRSxnQkFBZ0IsMkRBQW1CLEVBQUUsMERBQWdCLEVBQUUsMERBQWdCO0FBQ3ZFLGtCQUFrQiwwREFBZ0I7QUFDbEMsa0JBQWtCLDBEQUFnQjtBQUNsQyxpQkFBaUIsd0RBQWM7QUFDL0IsV0FBVyx3REFBYztBQUN6QixVQUFVLHdEQUFjO0FBQ3hCLGNBQWMsd0RBQWM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQSxpRUFBZSxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhcnQtYXBwLWRpci8uL25vZGVfbW9kdWxlcy9yZWFjdC1zY3JvbGwtdHJpZ2dlci9lcy9pbmRleC5qcz8yM2VkIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBlbnVtZXJhYmxlT25seSAmJiAoc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pKSwga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBudWxsICE9IGFyZ3VtZW50c1tpXSA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpICUgMiA/IG93bktleXMoT2JqZWN0KHNvdXJjZSksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpIDogb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB0aHJvdHRsZSBmcm9tICdsb2Rhc2gudGhyb3R0bGUnO1xuaW1wb3J0IGNsZWFuUHJvcHMgZnJvbSAnY2xlYW4tcmVhY3QtcHJvcHMnO1xuXG52YXIgU2Nyb2xsVHJpZ2dlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShTY3JvbGxUcmlnZ2VyLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBTY3JvbGxUcmlnZ2VyKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMub25TY3JvbGxUaHJvdHRsZWQgPSB0aHJvdHRsZShfdGhpcy5vblNjcm9sbC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgcHJvcHMudGhyb3R0bGVTY3JvbGwsIHtcbiAgICAgIHRyYWlsaW5nOiBmYWxzZVxuICAgIH0pO1xuICAgIF90aGlzLm9uUmVzaXplVGhyb3R0bGVkID0gdGhyb3R0bGUoX3RoaXMub25SZXNpemUuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIHByb3BzLnRocm90dGxlUmVzaXplLCB7XG4gICAgICB0cmFpbGluZzogZmFsc2VcbiAgICB9KTtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGluVmlld3BvcnQ6IGZhbHNlLFxuICAgICAgcHJvZ3Jlc3M6IDAsXG4gICAgICBsYXN0U2Nyb2xsUG9zaXRpb246IG51bGwsXG4gICAgICBsYXN0U2Nyb2xsVGltZTogbnVsbFxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFNjcm9sbFRyaWdnZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemVUaHJvdHRsZWQpO1xuICAgIGFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGxUaHJvdHRsZWQpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMudHJpZ2dlck9uTG9hZCkge1xuICAgICAgdGhpcy5jaGVja1N0YXR1cygpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgaWYgKHByZXZQcm9wcy50aHJvdHRsZVNjcm9sbCAhPT0gdGhpcy5wcm9wcy50aHJvdHRsZVNjcm9sbCkge1xuICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbFRocm90dGxlZCk7XG4gICAgICB0aGlzLm9uU2Nyb2xsVGhyb3R0bGVkID0gdGhyb3R0bGUodGhpcy5vblNjcm9sbC5iaW5kKHRoaXMpLCB0aGlzLnByb3BzLnRocm90dGxlU2Nyb2xsLCB7XG4gICAgICAgIHRyYWlsaW5nOiBmYWxzZVxuICAgICAgfSk7XG4gICAgICBhZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsVGhyb3R0bGVkKTtcbiAgICB9XG5cbiAgICBpZiAocHJldlByb3BzLnRocm90dGxlUmVzaXplICE9PSB0aGlzLnByb3BzLnRocm90dGxlUmVzaXplKSB7XG4gICAgICByZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplVGhyb3R0bGVkKTtcbiAgICAgIHRoaXMub25SZXNpemVUaHJvdHRsZWQgPSB0aHJvdHRsZSh0aGlzLm9uUmVzaXplLmJpbmQodGhpcyksIHRoaXMucHJvcHMudGhyb3R0bGVSZXNpemUsIHtcbiAgICAgICAgdHJhaWxpbmc6IGZhbHNlXG4gICAgICB9KTtcbiAgICAgIGFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemVUaHJvdHRsZWQpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICByZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplVGhyb3R0bGVkKTtcbiAgICByZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsVGhyb3R0bGVkKTtcbiAgfTtcblxuICBfcHJvdG8ub25SZXNpemUgPSBmdW5jdGlvbiBvblJlc2l6ZSgpIHtcbiAgICB0aGlzLmNoZWNrU3RhdHVzKCk7XG4gIH07XG5cbiAgX3Byb3RvLm9uU2Nyb2xsID0gZnVuY3Rpb24gb25TY3JvbGwoKSB7XG4gICAgdGhpcy5jaGVja1N0YXR1cygpO1xuICB9O1xuXG4gIF9wcm90by5jaGVja1N0YXR1cyA9IGZ1bmN0aW9uIGNoZWNrU3RhdHVzKCkge1xuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNvbnRhaW5lclJlZiA9IF90aGlzJHByb3BzLmNvbnRhaW5lclJlZixcbiAgICAgICAgb25FbnRlciA9IF90aGlzJHByb3BzLm9uRW50ZXIsXG4gICAgICAgIG9uRXhpdCA9IF90aGlzJHByb3BzLm9uRXhpdCxcbiAgICAgICAgb25Qcm9ncmVzcyA9IF90aGlzJHByb3BzLm9uUHJvZ3Jlc3M7XG4gICAgdmFyIF90aGlzJHN0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgbGFzdFNjcm9sbFBvc2l0aW9uID0gX3RoaXMkc3RhdGUubGFzdFNjcm9sbFBvc2l0aW9uLFxuICAgICAgICBsYXN0U2Nyb2xsVGltZSA9IF90aGlzJHN0YXRlLmxhc3RTY3JvbGxUaW1lO1xuICAgIHZhciBlbGVtZW50ID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5lbGVtZW50KTtcbiAgICB2YXIgZWxlbWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciB2aWV3cG9ydFN0YXJ0ID0gMDtcbiAgICB2YXIgc2Nyb2xsaW5nRWxlbWVudCA9IHR5cGVvZiBjb250YWluZXJSZWYgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXJSZWYpIDogY29udGFpbmVyUmVmO1xuICAgIHZhciB2aWV3cG9ydEVuZCA9IGNvbnRhaW5lclJlZiA9PT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ID8gTWF0aC5tYXgoY29udGFpbmVyUmVmLmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDApIDogc2Nyb2xsaW5nRWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgdmFyIGluVmlld3BvcnQgPSBlbGVtZW50UmVjdC50b3AgPD0gdmlld3BvcnRFbmQgJiYgZWxlbWVudFJlY3QuYm90dG9tID49IHZpZXdwb3J0U3RhcnQ7XG4gICAgdmFyIHBvc2l0aW9uID0gd2luZG93LnNjcm9sbFk7XG4gICAgdmFyIHZlbG9jaXR5ID0gbGFzdFNjcm9sbFBvc2l0aW9uICYmIGxhc3RTY3JvbGxUaW1lID8gTWF0aC5hYnMoKGxhc3RTY3JvbGxQb3NpdGlvbiAtIHBvc2l0aW9uKSAvIChsYXN0U2Nyb2xsVGltZSAtIERhdGUubm93KCkpKSA6IG51bGw7XG5cbiAgICBpZiAoaW5WaWV3cG9ydCkge1xuICAgICAgdmFyIHByb2dyZXNzID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgMSAtIGVsZW1lbnRSZWN0LmJvdHRvbSAvICh2aWV3cG9ydEVuZCArIGVsZW1lbnRSZWN0LmhlaWdodCkpKTtcblxuICAgICAgaWYgKCF0aGlzLnN0YXRlLmluVmlld3BvcnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaW5WaWV3cG9ydDogaW5WaWV3cG9ydFxuICAgICAgICB9KTtcbiAgICAgICAgb25FbnRlcih7XG4gICAgICAgICAgcHJvZ3Jlc3M6IHByb2dyZXNzLFxuICAgICAgICAgIHZlbG9jaXR5OiB2ZWxvY2l0eVxuICAgICAgICB9LCB0aGlzKTtcbiAgICAgIH1cblxuICAgICAgb25Qcm9ncmVzcyh7XG4gICAgICAgIHByb2dyZXNzOiBwcm9ncmVzcyxcbiAgICAgICAgdmVsb2NpdHk6IHZlbG9jaXR5XG4gICAgICB9LCB0aGlzKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBsYXN0U2Nyb2xsUG9zaXRpb246IHBvc2l0aW9uLFxuICAgICAgICBsYXN0U2Nyb2xsVGltZTogRGF0ZS5ub3coKVxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGUuaW5WaWV3cG9ydCkge1xuICAgICAgdmFyIF9wcm9ncmVzcyA9IGVsZW1lbnRSZWN0LnRvcCA8PSB2aWV3cG9ydEVuZCA/IDEgOiAwO1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbGFzdFNjcm9sbFBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICAgICAgbGFzdFNjcm9sbFRpbWU6IERhdGUubm93KCksXG4gICAgICAgIGluVmlld3BvcnQ6IGluVmlld3BvcnQsXG4gICAgICAgIHByb2dyZXNzOiBfcHJvZ3Jlc3NcbiAgICAgIH0pO1xuICAgICAgb25Qcm9ncmVzcyh7XG4gICAgICAgIHByb2dyZXNzOiBfcHJvZ3Jlc3MsXG4gICAgICAgIHZlbG9jaXR5OiB2ZWxvY2l0eVxuICAgICAgfSwgdGhpcyk7XG4gICAgICBvbkV4aXQoe1xuICAgICAgICBwcm9ncmVzczogX3Byb2dyZXNzLFxuICAgICAgICB2ZWxvY2l0eTogdmVsb2NpdHlcbiAgICAgIH0sIHRoaXMpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMyLmNoaWxkcmVuLFxuICAgICAgICBjb21wb25lbnQgPSBfdGhpcyRwcm9wczIuY29tcG9uZW50O1xuICAgIHZhciBlbGVtZW50TWV0aG9kID0gLyojX19QVVJFX18qL1JlYWN0LmlzVmFsaWRFbGVtZW50KGNvbXBvbmVudCkgPyAnY2xvbmVFbGVtZW50JyA6ICdjcmVhdGVFbGVtZW50JztcbiAgICByZXR1cm4gUmVhY3RbZWxlbWVudE1ldGhvZF0oY29tcG9uZW50LCBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGNsZWFuUHJvcHModGhpcy5wcm9wcywgWydvblByb2dyZXNzJ10pKSwge30sIHtcbiAgICAgIHJlZjogZnVuY3Rpb24gcmVmKGVsZW1lbnQpIHtcbiAgICAgICAgX3RoaXMyLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgfVxuICAgIH0pLCBjaGlsZHJlbik7XG4gIH07XG5cbiAgcmV0dXJuIFNjcm9sbFRyaWdnZXI7XG59KENvbXBvbmVudCk7XG5cblNjcm9sbFRyaWdnZXIucHJvcFR5cGVzID0ge1xuICBjb21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMubm9kZV0pLFxuICBjb250YWluZXJSZWY6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgdGhyb3R0bGVSZXNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gIHRocm90dGxlU2Nyb2xsOiBQcm9wVHlwZXMubnVtYmVyLFxuICB0cmlnZ2VyT25Mb2FkOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25FbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRXhpdDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uUHJvZ3Jlc3M6IFByb3BUeXBlcy5mdW5jXG59O1xuU2Nyb2xsVHJpZ2dlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbXBvbmVudDogJ2RpdicsXG4gIGNvbnRhaW5lclJlZjogdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA6ICdodG1sJyxcbiAgdGhyb3R0bGVSZXNpemU6IDEwMCxcbiAgdGhyb3R0bGVTY3JvbGw6IDEwMCxcbiAgdHJpZ2dlck9uTG9hZDogdHJ1ZSxcbiAgb25FbnRlcjogZnVuY3Rpb24gb25FbnRlcigpIHt9LFxuICBvbkV4aXQ6IGZ1bmN0aW9uIG9uRXhpdCgpIHt9LFxuICBvblByb2dyZXNzOiBmdW5jdGlvbiBvblByb2dyZXNzKCkge31cbn07XG5leHBvcnQgZGVmYXVsdCBTY3JvbGxUcmlnZ2VyOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-scroll-trigger/es/index.js\n");

/***/ })

};
;