webpackJsonp([38,40,54],{104:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),function(module){function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),n.forEach(function(t){_defineProperty(e,t,o[t])})}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _defineProperty(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var __WEBPACK_IMPORTED_MODULE_0_react__=__webpack_require__(1),__WEBPACK_IMPORTED_MODULE_0_react___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__),__WEBPACK_IMPORTED_MODULE_1_prop_types__=__webpack_require__(2),__WEBPACK_IMPORTED_MODULE_1_prop_types___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__),__WEBPACK_IMPORTED_MODULE_2_classnames__=__webpack_require__(4),__WEBPACK_IMPORTED_MODULE_2_classnames___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__),__WEBPACK_IMPORTED_MODULE_3__Button__=__webpack_require__(8),__WEBPACK_IMPORTED_MODULE_4__utils_FocusTrap__=__webpack_require__(105),__WEBPACK_IMPORTED_MODULE_5__config__=__webpack_require__(96);!function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(0)).enterModule;e&&e(module)}();var DialogButtons=function(_React$Component){function DialogButtons(e){var t;return _classCallCheck(this,DialogButtons),t=_possibleConstructorReturn(this,_getPrototypeOf(DialogButtons).call(this)),_defineProperty(_assertThisInitialized(t),"handleClose",function(){var e,o,n,r,_;null===(e=t.context)||void 0===e||null===(o=e.dialog)||void 0===o||null===(n=o.close)||void 0===n||n.call(o),null===(r=t.props)||void 0===r||null===(_=r.onClose)||void 0===_||_.call(r),t.setState({open:!1})}),_defineProperty(_assertThisInitialized(t),"handleAcceptClick",function(){t.handleClose(),setTimeout(function(){var e,o;return null===(e=t.props)||void 0===e?void 0:null===(o=e.onAccept)||void 0===o?void 0:o.call(e)},400)}),_defineProperty(_assertThisInitialized(t),"handleCancelClick",function(){t.handleClose(),setTimeout(function(){var e,o;return null===(e=t.props)||void 0===e?void 0:null===(o=e.onCancel)||void 0===o?void 0:o.call(e)},400)}),_defineProperty(_assertThisInitialized(t),"renderButtons",function(e){var o,n=e.className,r=e.acceptLabel,_=e.cancelLabel,a=e.focused,i=e.type;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:__WEBPACK_IMPORTED_MODULE_2_classnames___default()("".concat("ts-rc","-dialog__main-buttons"),n)},!!r&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Button__.default,{type:(null===(o=__WEBPACK_IMPORTED_MODULE_5__config__.typeMap[i])||void 0===o?void 0:o.btnType)||"tertiary",onClick:t.handleAcceptClick,autoFocus:"accept"===a,focus:!0,block:!0},r),!!_&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Button__.default,{type:"tertiary",onClick:t.handleCancelClick,autoFocus:"cancel"===a,focus:!0,block:!0},_))}),t.state={open:!0},t}return _inherits(DialogButtons,_React$Component),_createClass(DialogButtons,[{key:"componentWillReceiveProps",value:function(e){!1===this.state.open&&this.setState({open:!0})}},{key:"render",value:function(){return this.state.open?__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__utils_FocusTrap__.default,null,this.renderButtons(this.props)):this.renderButtons(_objectSpread({},this.props,{focused:null}))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),DialogButtons}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);_defineProperty(DialogButtons,"contextTypes",{dialog:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object}),_defineProperty(DialogButtons,"propTypes",{className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,acceptLabel:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cancelLabel:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,type:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(["confirm","accept","warning","danger","success","info","error"]),focused:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(["accept","cancel",null]),onClose:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,onAccept:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,onCancel:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func});var _default=DialogButtons;__webpack_exports__.default=_default,function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(0)).default;e&&(e.register(DialogButtons,"DialogButtons","/Users/Kimi/Documents/Projects/tradeshift-projects/react-components/src/components/dialog/DialogButtons.js"),e.register(_default,"default","/Users/Kimi/Documents/Projects/tradeshift-projects/react-components/src/components/dialog/DialogButtons.js"))}(),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(0)).leaveModule;e&&e(module)}()}.call(__webpack_exports__,__webpack_require__(3)(module))},105:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),function(module){function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _defineProperty(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var __WEBPACK_IMPORTED_MODULE_0_react__=__webpack_require__(1),__WEBPACK_IMPORTED_MODULE_0_react___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__),__WEBPACK_IMPORTED_MODULE_1_react_dom__=__webpack_require__(18),__WEBPACK_IMPORTED_MODULE_1_react_dom___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__),__WEBPACK_IMPORTED_MODULE_2_prop_types__=__webpack_require__(2),__WEBPACK_IMPORTED_MODULE_2_prop_types___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__),__WEBPACK_IMPORTED_MODULE_3_focus_trap__=__webpack_require__(250),__WEBPACK_IMPORTED_MODULE_3_focus_trap___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_focus_trap__);!function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(0)).enterModule;e&&e(module)}();var FocusTrap=function(_React$Component){function FocusTrap(e){var t;return _classCallCheck(this,FocusTrap),t=_possibleConstructorReturn(this,_getPrototypeOf(FocusTrap).call(this,e)),_defineProperty(_assertThisInitialized(t),"setFocusTrapElement",function(e){t.focusTrapElement=e}),"undefined"!=typeof document&&(t.previouslyFocusedElement=document.activeElement),t}return _inherits(FocusTrap,_React$Component),_createClass(FocusTrap,[{key:"componentDidMount",value:function(){var e=this,t=this.props.focusTrapOptions,o={returnFocusOnDeactivate:!1};for(var n in t)t.hasOwnProperty(n)&&"returnFocusOnDeactivate"!==n&&(o[n]=t[n]);var r=__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(this.focusTrapElement);this.focusTrap=__WEBPACK_IMPORTED_MODULE_3_focus_trap___default()(r,o),this.props.active&&window.setTimeout(function(){return e.focusTrap.activate()},0),this.props.paused&&this.focusTrap.pause()}},{key:"componentDidUpdate",value:function(e){if(e.active&&!this.props.active){var t=this.props.focusTrapOptions.returnFocusOnDeactivate,o=t||!1,n={returnFocus:o};this.focusTrap.deactivate(n)}else!e.active&&this.props.active&&this.focusTrap.activate();e.paused&&!this.props.paused?this.focusTrap.unpause():!e.paused&&this.props.paused&&this.focusTrap.pause()}},{key:"componentWillUnmount",value:function(){this.focusTrap.deactivate(),!1!==this.props.focusTrapOptions.returnFocusOnDeactivate&&this.previouslyFocusedElement&&this.previouslyFocusedElement.focus&&this.previouslyFocusedElement.focus()}},{key:"render",value:function(){var e=this,t=__WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.only(this.props.children),o=function(o){e.setFocusTrapElement(o),"function"==typeof t.ref&&t.ref(o)};return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(t,{ref:o})}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),FocusTrap}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);FocusTrap.propTypes={children:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,active:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,paused:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,focusTrapOptions:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object},FocusTrap.defaultProps={active:!0,paused:!1,focusTrapOptions:{}};var _default=FocusTrap;__webpack_exports__.default=_default,function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(0)).default;e&&(e.register(FocusTrap,"FocusTrap","/Users/Kimi/Documents/Projects/tradeshift-projects/react-components/src/components/_utils/FocusTrap.js"),e.register(_default,"default","/Users/Kimi/Documents/Projects/tradeshift-projects/react-components/src/components/_utils/FocusTrap.js"))}(),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(0)).leaveModule;e&&e(module)}()}.call(__webpack_exports__,__webpack_require__(3)(module))},250:function(e,t,o){function n(e,t){function o(e){if(!w.active){m(),w.active=!0,w.paused=!1,w.nodeFocusedBeforeActivation=T.activeElement;var t=e&&e.onActivate?e.onActivate:C.onActivate;return t&&t(),f(),g}}function n(e){if(w.active){d(),w.active=!1,w.paused=!1;var t=e&&void 0!==e.onDeactivate?e.onDeactivate:C.onDeactivate;t&&t();return(e&&void 0!==e.returnFocus?e.returnFocus:C.returnFocusOnDeactivate)&&i(function(){h(w.nodeFocusedBeforeActivation)}),g}}function l(){!w.paused&&w.active&&(w.paused=!0,d())}function p(){w.paused&&w.active&&(w.paused=!1,f())}function f(){if(w.active)return s&&s.pause(),s=g,m(),i(function(){h(y())}),T.addEventListener("focusin",v,!0),T.addEventListener("mousedown",b,!0),T.addEventListener("touchstart",b,!0),T.addEventListener("click",D,!0),T.addEventListener("keydown",O,!0),g}function d(){if(w.active&&s===g)return T.removeEventListener("focusin",v,!0),T.removeEventListener("mousedown",b,!0),T.removeEventListener("touchstart",b,!0),T.removeEventListener("click",D,!0),T.removeEventListener("keydown",O,!0),s=null,g}function E(e){var t=C[e],o=t;if(!t)return null;if("string"==typeof t&&!(o=T.querySelector(t)))throw new Error("`"+e+"` refers to no known node");if("function"==typeof t&&!(o=t()))throw new Error("`"+e+"` did not return a node");return o}function y(){var e;if(!(e=null!==E("initialFocus")?E("initialFocus"):M.contains(T.activeElement)?T.activeElement:w.firstTabbableNode||E("fallbackFocus")))throw new Error("You can't have a focus-trap without at least one focusable element");return e}function b(e){M.contains(e.target)||(C.clickOutsideDeactivates?n({returnFocus:!c.isFocusable(e.target)}):e.preventDefault())}function v(e){M.contains(e.target)||e.target instanceof Document||(e.stopImmediatePropagation(),h(w.mostRecentlyFocusedNode||y()))}function O(e){return!1!==C.escapeDeactivates&&_(e)?(e.preventDefault(),void n()):a(e)?void P(e):void 0}function P(e){return m(),e.shiftKey&&e.target===w.firstTabbableNode?(e.preventDefault(),void h(w.lastTabbableNode)):e.shiftKey||e.target!==w.lastTabbableNode?void 0:(e.preventDefault(),void h(w.firstTabbableNode))}function D(e){C.clickOutsideDeactivates||M.contains(e.target)||(e.preventDefault(),e.stopImmediatePropagation())}function m(){var e=c(M);w.firstTabbableNode=e[0]||y(),w.lastTabbableNode=e[e.length-1]||y()}function h(e){if(e!==T.activeElement){if(!e||!e.focus)return void h(y());e.focus(),w.mostRecentlyFocusedNode=e,r(e)&&e.select()}}var T=document,M="string"==typeof e?T.querySelector(e):e,C=u({returnFocusOnDeactivate:!0,escapeDeactivates:!0},t),w={firstTabbableNode:null,lastTabbableNode:null,nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1},g={activate:o,deactivate:n,pause:l,unpause:p};return g}function r(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select}function _(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode}function a(e){return"Tab"===e.key||9===e.keyCode}function i(e){return setTimeout(e,0)}var c=o(251),u=o(252),s=null;e.exports=n},251:function(e,t){function o(e,t){t=t||{};var o=e.ownerDocument||e,r=[],_=[],a=new b(o),u=e.querySelectorAll(O);t.includeContainer&&P.call(e,O)&&(u=Array.prototype.slice.apply(u),u.unshift(e));var s,l,p;for(s=0;s<u.length;s++)l=u[s],n(l,a)&&(p=i(l),0===p?r.push(l):_.push({documentOrder:s,tabIndex:p,node:l}));return _.sort(c).map(function(e){return e.node}).concat(r)}function n(e,t){return!(!_(e,t)||d(e)||i(e)<0)}function r(e,t){if(!e)throw new Error("No node provided");return!1!==P.call(e,O)&&n(e,t)}function _(e,t){return t=t||new b(e.ownerDocument||e),!(e.disabled||p(e)||t.isUntouchable(e))}function a(e,t){if(!e)throw new Error("No node provided");return!1!==P.call(e,D)&&_(e,t)}function i(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?s(e)?0:e.tabIndex:t}function c(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex}function u(e,t){for(var o=0,n=e.length;o<n;o++)if(t(e[o]))return e[o]}function s(e){return"true"===e.contentEditable}function l(e){return"INPUT"===e.tagName}function p(e){return l(e)&&"hidden"===e.type}function f(e){return l(e)&&"radio"===e.type}function d(e){return f(e)&&!y(e)}function E(e){for(var t=0;t<e.length;t++)if(e[t].checked)return e[t]}function y(e){if(!e.name)return!0;var t=e.ownerDocument.querySelectorAll('input[type="radio"][name="'+e.name+'"]'),o=E(t);return!o||o===e}function b(e){this.doc=e,this.cache=[]}var v=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],O=v.join(","),P="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;o.isTabbable=r,o.isFocusable=a;var D=v.concat("iframe").join(",");b.prototype.hasDisplayNone=function(e,t){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var o=u(this.cache,function(t){return t===e});if(o)return o[1];t=t||this.doc.defaultView.getComputedStyle(e);var n=!1;return"none"===t.display?n=!0:e.parentNode&&(n=this.hasDisplayNone(e.parentNode)),this.cache.push([e,n]),n},b.prototype.isUntouchable=function(e){if(e===this.doc.documentElement)return!1;var t=this.doc.defaultView.getComputedStyle(e);return!!this.hasDisplayNone(e,t)||"hidden"===t.visibility},e.exports=o},252:function(e,t){function o(){for(var e={},t=0;t<arguments.length;t++){var o=arguments[t];for(var r in o)n.call(o,r)&&(e[r]=o[r])}return e}e.exports=o;var n=Object.prototype.hasOwnProperty},96:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){o.d(t,"typeMap",function(){return n}),function(){var t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(0)).enterModule;t&&t(e)}();var n={confirm:{icon:"question",btnType:"primary"},accept:{icon:"checked-alt",btnType:"accept"},warning:{icon:"warning",btnType:"warning"},danger:{icon:"remove",btnType:"danger"},success:{icon:"accept"},info:{icon:"info",btnType:"primary"},error:{icon:"remove",btnType:"danger"}};!function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(0)).default;e&&e.register(n,"typeMap","/Users/Kimi/Documents/Projects/tradeshift-projects/react-components/src/components/dialog/config.js")}(),function(){var t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(0)).leaveModule;t&&t(e)}()}.call(t,o(3)(e))}});