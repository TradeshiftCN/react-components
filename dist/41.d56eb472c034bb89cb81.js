webpackJsonp([41,62,63,66],{112:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),function(module){function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var _=0;_<t.length;_++){var o=t[_];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,_){return t&&_defineProperties(e.prototype,t),_&&_defineProperties(e,_),e}!function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(0)).enterModule;e&&e(module)}();var EventPool=function(){function EventPool(){_classCallCheck(this,EventPool),this.pool=[]}return _createClass(EventPool,[{key:"add",value:function(e){"function"==typeof e&&this.pool.push(e)}},{key:"free",value:function(){for(var e=this.pool.length,t=0;t<e;t++)this.pool[t]();this.pool.length=0}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),EventPool}(),_default=EventPool;__webpack_exports__.default=_default,function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(0)).default;e&&(e.register(EventPool,"EventPool","/Users/Kimi/Documents/Projects/tradeshift-projects/react-components/src/components/_utils/EventPool.js"),e.register(_default,"default","/Users/Kimi/Documents/Projects/tradeshift-projects/react-components/src/components/_utils/EventPool.js"))}(),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(0)).leaveModule;e&&e(module)}()}.call(__webpack_exports__,__webpack_require__(3)(module))},113:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),function(module){function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _extends(){return _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var _=arguments[t];for(var o in _)Object.prototype.hasOwnProperty.call(_,o)&&(e[o]=_[o])}return e},_extends.apply(this,arguments)}function _objectWithoutProperties(e,t){if(null==e)return{};var _,o,n=_objectWithoutPropertiesLoose(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)_=r[o],t.indexOf(_)>=0||Object.prototype.propertyIsEnumerable.call(e,_)&&(n[_]=e[_])}return n}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var _,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)_=r[o],t.indexOf(_)>=0||(n[_]=e[_]);return n}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var _=0;_<t.length;_++){var o=t[_];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,_){return t&&_defineProperties(e.prototype,t),_&&_defineProperties(e,_),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _defineProperty(e,t,_){return t in e?Object.defineProperty(e,t,{value:_,enumerable:!0,configurable:!0,writable:!0}):e[t]=_,e}var __WEBPACK_IMPORTED_MODULE_0_react__=__webpack_require__(1),__WEBPACK_IMPORTED_MODULE_0_react___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__),__WEBPACK_IMPORTED_MODULE_1_prop_types__=__webpack_require__(2),__WEBPACK_IMPORTED_MODULE_1_prop_types___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__),__WEBPACK_IMPORTED_MODULE_2_classlist__=__webpack_require__(71),__WEBPACK_IMPORTED_MODULE_2_classlist___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classlist__),__WEBPACK_IMPORTED_MODULE_3_classnames__=__webpack_require__(4),__WEBPACK_IMPORTED_MODULE_3_classnames___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);!function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(0)).enterModule;e&&e(module)}();var ModalContent=function(_Component){function ModalContent(e){var t;return _classCallCheck(this,ModalContent),t=_possibleConstructorReturn(this,_getPrototypeOf(ModalContent).call(this,e)),_defineProperty(_assertThisInitialized(t),"handleModalClick",function(e){if(e.target.className==="".concat("ts-rc","-modal__modal"))if(t.props.lock){var _="".concat("ts-rc","-modal__modal-dialog_lock");__WEBPACK_IMPORTED_MODULE_2_classlist___default()(t.modalNode).add(_);var o=function e(){t.modalNode.removeEventListener("animationend",e),__WEBPACK_IMPORTED_MODULE_2_classlist___default()(t.modalNode).remove(_)};t.modalNode.addEventListener("animationend",o)}else t.props.close()}),t.relativeValue=0,t}return _inherits(ModalContent,_Component),_createClass(ModalContent,[{key:"getChildContext",value:function(){return{modalContent:this}}},{key:"backUp",value:function(){this.relativeValue+=20,this.transform();var e=this.props.modal.context.modalContent;e&&e.backUp()}},{key:"goForward",value:function(){this.relativeValue-=20,this.transform();var e=this.props.modal.context.modalContent;e&&e.goForward()}},{key:"transform",value:function(){this.modalNode.style.transform="translateY(-".concat(this.relativeValue,"px)")}},{key:"render",value:function(){var e=this,t=this.props,_=t.children,o=t.className,n=(t.lock,t.size),r=t.zIndex,a=t.close,l=(t.modal,_objectWithoutProperties(t,["children","className","lock","size","zIndex","close","modal"]));return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",_extends({className:__WEBPACK_IMPORTED_MODULE_3_classnames___default()("".concat("ts-rc","-modal"),_defineProperty({},"".concat("ts-rc","-modal_").concat(n),n),o)},l),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"".concat("ts-rc","-modal__backdrop"),style:{zIndex:r||3e3}}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"".concat("ts-rc","-modal__modal"),style:{zIndex:r||3e3},onClick:this.handleModalClick},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"".concat("ts-rc","-modal__modal-dialog"),ref:function(t){return e.modalNode=t}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"".concat("ts-rc","-modal__modal-content")},_),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"".concat("ts-rc","-modal__modal-close"),onClick:function(){return a()}}))))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),ModalContent}(__WEBPACK_IMPORTED_MODULE_0_react__.Component);ModalContent.childContextTypes={modalContent:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.instanceOf(ModalContent)},ModalContent.propTypes={children:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,lock:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,size:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,zIndex:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,close:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,modal:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object};var _default=ModalContent;__webpack_exports__.default=_default,function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(0)).default;e&&(e.register(ModalContent,"ModalContent","/Users/Kimi/Documents/Projects/tradeshift-projects/react-components/src/components/Modal/ModalContent.js"),e.register(_default,"default","/Users/Kimi/Documents/Projects/tradeshift-projects/react-components/src/components/Modal/ModalContent.js"))}(),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(0)).leaveModule;e&&e(module)}()}.call(__webpack_exports__,__webpack_require__(3)(module))},115:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),function(module){function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _extends(){return _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var _=arguments[t];for(var o in _)Object.prototype.hasOwnProperty.call(_,o)&&(e[o]=_[o])}return e},_extends.apply(this,arguments)}function _objectWithoutProperties(e,t){if(null==e)return{};var _,o,n=_objectWithoutPropertiesLoose(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)_=r[o],t.indexOf(_)>=0||Object.prototype.propertyIsEnumerable.call(e,_)&&(n[_]=e[_])}return n}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var _,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)_=r[o],t.indexOf(_)>=0||(n[_]=e[_]);return n}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var _=0;_<t.length;_++){var o=t[_];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,_){return t&&_defineProperties(e.prototype,t),_&&_defineProperties(e,_),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _defineProperty(e,t,_){return t in e?Object.defineProperty(e,t,{value:_,enumerable:!0,configurable:!0,writable:!0}):e[t]=_,e}var __WEBPACK_IMPORTED_MODULE_0_classlist__=__webpack_require__(71),__WEBPACK_IMPORTED_MODULE_0_classlist___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classlist__),__WEBPACK_IMPORTED_MODULE_1_prop_types__=__webpack_require__(2),__WEBPACK_IMPORTED_MODULE_1_prop_types___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__),__WEBPACK_IMPORTED_MODULE_2_react__=__webpack_require__(1),__WEBPACK_IMPORTED_MODULE_2_react___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__),__WEBPACK_IMPORTED_MODULE_3_react_dom__=__webpack_require__(18),__WEBPACK_IMPORTED_MODULE_3_react_dom___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__),__WEBPACK_IMPORTED_MODULE_4__utils_EventPool__=__webpack_require__(112),__WEBPACK_IMPORTED_MODULE_5__utils_ToggleNode__=__webpack_require__(97),__WEBPACK_IMPORTED_MODULE_6__ModalContent__=__webpack_require__(113);!function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(0)).enterModule;e&&e(module)}();var scrollbarWidth=function(){var e=document.createElement("div"),t=document.body;e.className="".concat("ts-rc","-modal__scrollbar-measure"),t.appendChild(e);var _=e.offsetWidth-e.clientWidth;return t.removeChild(e),_}(),Modal=function(_Component){function Modal(e){var t;return _classCallCheck(this,Modal),t=_possibleConstructorReturn(this,_getPrototypeOf(Modal).call(this,e)),_defineProperty(_assertThisInitialized(t),"close",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.props.onClose;t.setState({open:!1}),t.props.onToggle&&t.props.onToggle(!1),t.closeCallbacks.add(e)}),t.closeCallbacks=new __WEBPACK_IMPORTED_MODULE_4__utils_EventPool__.default,t.state={open:e.open||!1},t}return _inherits(Modal,_Component),_createClass(Modal,[{key:"componentWillReceiveProps",value:function(e){"open"in e&&this.setState({open:e.open})}},{key:"shouldComponentUpdate",value:function(e,t){return!(this.state.open===t.open&&!1===t.open)}},{key:"componentDidMount",value:function(){this.updateBodyState(this.state.open,!1),this.state.open&&this.renderIntoDocument()}},{key:"componentDidUpdate",value:function(e,t){if(this.updateBodyState(this.state.open,t.open),this.state.open)this.renderIntoDocument();else{t.open&&this.toggleModal.close();var _=this.context.modalContent;_&&_.goForward()}}},{key:"componentWillUnmount",value:function(){if(this.containerNode){__WEBPACK_IMPORTED_MODULE_3_react_dom___default.a.unmountComponentAtNode(this.containerNode),document.body.removeChild(this.containerNode);var e=document.body,t=parseInt(e.style.paddingRight,10)||0,_=e.scrollHeight>window.innerHeight?scrollbarWidth:0;__WEBPACK_IMPORTED_MODULE_0_classlist___default()(e).remove("".concat("ts-rc","-modal_open")),e.style.paddingRight=t?t-_+"px":""}}},{key:"updateBodyState",value:function(e,t){if(!this.context.modalContent){var _=document.body,o=parseInt(_.style.paddingRight,10)||0,n=_.scrollHeight>window.innerHeight?scrollbarWidth:0;e&&!t?(__WEBPACK_IMPORTED_MODULE_0_classlist___default()(_).add("".concat("ts-rc","-modal_open")),_.style.paddingRight=o+n+"px"):!e&&t&&this.closeCallbacks.add(function(){__WEBPACK_IMPORTED_MODULE_0_classlist___default()(_).remove("".concat("ts-rc","-modal_open")),_.style.paddingRight=o?o-n+"px":""})}}},{key:"open",value:function(){this.setState({open:!0}),this.props.onToggle&&this.props.onToggle(!0)}},{key:"renderIntoDocument",value:function(){var e=this;this.containerNode||(this.containerNode=document.createElement("div"),document.body.appendChild(this.containerNode));var t=function(){if(!e.toggleModal){var t=__WEBPACK_IMPORTED_MODULE_3_react_dom___default.a.findDOMNode(e.content);e.toggleModal=new __WEBPACK_IMPORTED_MODULE_5__utils_ToggleNode__.default(t,"".concat("ts-rc","-modal_open")),e.toggleModal.onClose=function(){return e.closeCallbacks.free()}}e.toggleModal.open();var _=e.context.modalContent;_&&_.backUp()};this.renderIntoDocument=function(){var _=e.props,o=(_.open,_.onToggle,_.onClose,_objectWithoutProperties(_,["open","onToggle","onClose"]));__WEBPACK_IMPORTED_MODULE_3_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__ModalContent__.default,_extends({ref:function(t){return e.content=t},close:e.close,modal:e},o)),e.containerNode,t)},this.renderIntoDocument()}},{key:"render",value:function(){return null}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Modal}(__WEBPACK_IMPORTED_MODULE_2_react__.Component);Modal.contextTypes={modalContent:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object},Modal.propTypes={open:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,onToggle:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,lock:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,onClose:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,size:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(["sm","lg"])};var _default=Modal;__webpack_exports__.default=_default,function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(0)).default;e&&(e.register(scrollbarWidth,"scrollbarWidth","/Users/Kimi/Documents/Projects/tradeshift-projects/react-components/src/components/Modal/Modal.js"),e.register(Modal,"Modal","/Users/Kimi/Documents/Projects/tradeshift-projects/react-components/src/components/Modal/Modal.js"),e.register(_default,"default","/Users/Kimi/Documents/Projects/tradeshift-projects/react-components/src/components/Modal/Modal.js"))}(),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(0)).leaveModule;e&&e(module)}()}.call(__webpack_exports__,__webpack_require__(3)(module))},97:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),function(module){function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var _=0;_<t.length;_++){var o=t[_];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,_){return t&&_defineProperties(e.prototype,t),_&&_defineProperties(e,_),e}function _defineProperty(e,t,_){return t in e?Object.defineProperty(e,t,{value:_,enumerable:!0,configurable:!0,writable:!0}):e[t]=_,e}var __WEBPACK_IMPORTED_MODULE_0_classlist__=__webpack_require__(71),__WEBPACK_IMPORTED_MODULE_0_classlist___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classlist__);!function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(0)).enterModule;e&&e(module)}();var ToggleNode=function(){function ToggleNode(e,t,_){_classCallCheck(this,ToggleNode),this.node=e,this.openedClassName=t,this.reflowTrigger=_||function(){},this.node.style.display="none"}return _createClass(ToggleNode,[{key:"open",value:function(){this.node.style.display="block",this.reflowTrigger(),this.openedClassName&&__WEBPACK_IMPORTED_MODULE_0_classlist___default()(this.node).add(this.openedClassName)}},{key:"close",value:function(e){var t=this;if(__WEBPACK_IMPORTED_MODULE_0_classlist___default()(this.node).contains(this.openedClassName)){__WEBPACK_IMPORTED_MODULE_0_classlist___default()(this.node).remove(this.openedClassName);var _=function _(){t.node.style.display="none",t.node.removeEventListener(ToggleNode.END_EVENT,_),e&&e()};this.node.addEventListener(ToggleNode.END_EVENT,_)}else e&&e()}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),ToggleNode}();_defineProperty(ToggleNode,"END_EVENT","transitionend");var _default=ToggleNode;__webpack_exports__.default=_default,function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(0)).default;e&&(e.register(ToggleNode,"ToggleNode","/Users/Kimi/Documents/Projects/tradeshift-projects/react-components/src/components/_utils/ToggleNode.js"),e.register(_default,"default","/Users/Kimi/Documents/Projects/tradeshift-projects/react-components/src/components/_utils/ToggleNode.js"))}(),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(0)).leaveModule;e&&e(module)}()}.call(__webpack_exports__,__webpack_require__(3)(module))}});