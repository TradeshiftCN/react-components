webpackJsonp([42,94],{112:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),function(module){function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,_){if(!(e instanceof _))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,_){for(var t=0;t<_.length;t++){var r=_[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,_,t){return _&&_defineProperties(e.prototype,_),t&&_defineProperties(e,t),e}function _possibleConstructorReturn(e,_){return!_||"object"!==_typeof(_)&&"function"!=typeof _?_assertThisInitialized(e):_}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,_){if("function"!=typeof _&&null!==_)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(_&&_.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),_&&_setPrototypeOf(e,_)}function _setPrototypeOf(e,_){return(_setPrototypeOf=Object.setPrototypeOf||function(e,_){return e.__proto__=_,e})(e,_)}var __WEBPACK_IMPORTED_MODULE_0_react__=__webpack_require__(1),__WEBPACK_IMPORTED_MODULE_0_react___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__),__WEBPACK_IMPORTED_MODULE_1_prop_types__=__webpack_require__(2),__WEBPACK_IMPORTED_MODULE_1_prop_types___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__),__WEBPACK_IMPORTED_MODULE_2__Icon__=__webpack_require__(8),__WEBPACK_IMPORTED_MODULE_3__index_less__=__webpack_require__(190),__WEBPACK_IMPORTED_MODULE_3__index_less___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__index_less__);!function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(0)).enterModule;e&&e(module)}();var FileList=function(_Component){function FileList(){return _classCallCheck(this,FileList),_possibleConstructorReturn(this,_getPrototypeOf(FileList).apply(this,arguments))}return _inherits(FileList,_Component),_createClass(FileList,[{key:"handleClick",value:function(e){this.props.onRemove(e)}},{key:"render",value:function(){var e=this;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"".concat("ts-rc","-upload__filelist")},this.props.data.map(function(_,t){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{key:t,className:"".concat("ts-rc","-upload__filelist_row")},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",null,_.name),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",null,_.percent,"%"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Icon__.default,{type:"upload",style:{display:0===_.state?"":"none"}}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Icon__.default,{type:"check-circle",style:{paddingRight:"10px",color:"green",display:1===_.state?"":"none"}}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Icon__.default,{type:"times-circle",style:{paddingRight:"10px",color:"red",display:2===_.state?"":"none"}}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Icon__.default,{type:"trash",style:{color:"gray",cursor:"pointer"},onClick:e.handleClick.bind(e,_)}))}))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),FileList}(__WEBPACK_IMPORTED_MODULE_0_react__.Component);FileList.propTypes={data:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array,onRemove:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func};var _default=FileList;__webpack_exports__.default=_default,function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(0)).default;e&&(e.register(FileList,"FileList","/Users/kanon/Tradeshift/react-components/src/components/Upload/FileList.js"),e.register(_default,"default","/Users/kanon/Tradeshift/react-components/src/components/Upload/FileList.js"))}(),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(0)).leaveModule;e&&e(module)}()}.call(__webpack_exports__,__webpack_require__(3)(module))},190:function(e,_,t){var r=t(293);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0};o.transform=void 0;t(6)(r,o);r.locals&&(e.exports=r.locals)},293:function(e,_,t){_=e.exports=t(5)(!1),_.push([e.i,".ts-rc-upload .ts-rc-upload__children {\n  display: table;\n  margin-bottom: 20px;\n}\n.ts-rc-upload__listbox {\n  position: relative;\n  left: 0px;\n  background-color: hsl(0, 0%, 100%);\n  opacity: 1;\n}\n.ts-rc-upload__filelist {\n  padding-top: 10px;\n  background-color: hsl(0, 0%, 100%);\n}\n.ts-rc-upload__filelist_row {\n  margin: 10px 0px;\n}\n.ts-rc-upload__filelist_row span {\n  padding-right: 10px;\n}\n",""])}});