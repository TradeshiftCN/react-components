webpackJsonp([0,17],{144:function(n,e,o){"use strict";(function(n){function t(){return(t=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n}).apply(this,arguments)}function r(n,e){if(null==n)return{};var o,t,r=function(n,e){if(null==n)return{};var o,t,r={},a=Object.keys(n);for(t=0;t<a.length;t++)o=a[t],e.indexOf(o)>=0||(r[o]=n[o]);return r}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)o=a[t],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(n,o)&&(r[o]=n[o])}return r}var a=o(1),i=o.n(a),l=o(2),d=o.n(l),s=o(3),c=o.n(s),p=o(211);o.n(p);!function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(0)).enterModule;e&&e(n)}();var m=function(n){var e=n.className,o=n.html,a=r(n,["className","html"]);return i.a.createElement("div",t({className:c()("markdown",e),dangerouslySetInnerHTML:{__html:o}},a))};m.propTypes={html:d.a.string,className:d.a.string};var u=m;e.a=u,function(){var n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(0)).default;n&&(n.register(m,"Markdown","/Users/kanon/Tradeshift/react-components/site/widgets/Markdown/index.js"),n.register(u,"default","/Users/kanon/Tradeshift/react-components/site/widgets/Markdown/index.js"))}(),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(0)).leaveModule;e&&e(n)}()}).call(e,o(4)(n))},15:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(n){var t=o(1),r=o.n(t),a=o(144),i=o(562),l=o.n(i),d=o(99);o.n(d);!function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(0)).enterModule;e&&e(n)}();var s=function(){return r.a.createElement("div",{className:"changelog"},r.a.createElement(a.a,{html:l.a}))},c=s;e.default=c,function(){var n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(0)).default;n&&(n.register(s,"Changelog","/Users/kanon/Tradeshift/react-components/site/apps/Changelog/index.js"),n.register(c,"default","/Users/kanon/Tradeshift/react-components/site/apps/Changelog/index.js"))}(),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(0)).leaveModule;e&&e(n)}()}.call(e,o(4)(n))},211:function(n,e,o){var t=o(212);"string"==typeof t&&(t=[[n.i,t,""]]);var r={hmr:!0};r.transform=void 0;o(6)(t,r);t.locals&&(n.exports=t.locals)},212:function(n,e,o){(n.exports=o(5)(!1)).push([n.i,"figure {\n  position: relative;\n}\nfigure > figcaption {\n  font-size: 12px;\n  font-style: italic;\n  text-align: center;\n  margin: 10px 0 0 0;\n}\nfigure.ui-layout > .ui-toolbar {\n  background-color: hsl(204, 22%, 95%);\n}\nfigure.ui-layout > .ui-panel,\nfigure.ui-layout > .ui-panels {\n  background-color: hsl(0, 0%, 100%);\n}\nfigure.ui-layout > .ui-panel,\nfigure.ui-layout > .ui-panels > .ui-panel {\n  padding: 0;\n}\nfigure .output {\n  padding: 20px;\n}\nfigure .prism,\nfigure .prism code {\n  border-radius: 3px;\n}\nfigure.ui-has-header .prism,\nfigure.ui-has-header .prism code {\n  border-radius: 0 0 3px 3px;\n}\nfigure .editcode {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  letter-spacing: 0.25px;\n  white-space: pre;\n  word-wrap: normal;\n  word-spacing: -2px;\n  -moz-tab-size: 2;\n  -o-tab-size: 2;\n  tab-size: 2;\n  -webkit-hyphens: none;\n  -moz-hyphens: none;\n  -ms-hyphens: none;\n  hyphens: none;\n  padding: 0;\n  opacity: 0;\n  font-family: 'Ubuntu Mono', 'Menlo', 'Monaco', 'Consolas', 'Bitstream Vera Sans Mono', monospace;\n  width: 100%;\n  height: 100% !important;\n  padding: 20px 0 20px 20px;\n  overflow: auto;\n  resize: none;\n  background-color: hsl(0, 0%, 100%);\n}\nfigure .editcode:focus {\n  background-color: hsl(44, 95%, 92%);\n}\nfigure.editmode .editcode,\nfigure .editcode:focus {\n  opacity: 1;\n}\nfigure .message {\n  position: absolute;\n  top: 0;\n  left: 100%;\n  margin-left: 10px;\n  background-color: hsl(44, 95%, 92%);\n  padding: 5px 10px;\n  white-space: nowrap;\n  text-align: center;\n  z-index: 1;\n  display: none;\n}\nfigure .message i {\n  top: 1px;\n}\nfigure.attention .message {\n  display: block;\n}\n/* Color scheme duplicated from Prism ....................................... */\n.el {\n  color: #c92c2c;\n}\n.attr-pair span:last-child,\n.attr-value {\n  color: #1990b8;\n}\n.attr-pair span:first-child,\n.attr-name {\n  color: #2f9c0a;\n}\n.function {\n  color: #c92c2c;\n}\n/* Prism .................................................................... */\npre.prism {\n  display: block;\n  margin: 0;\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n  color: hsl(204, 25%, 8%);\n  direction: ltr;\n  text-align: left;\n  letter-spacing: 0.25px;\n  white-space: pre;\n  word-wrap: normal;\n  word-spacing: -2px;\n  -moz-tab-size: 2;\n  -o-tab-size: 2;\n  tab-size: 2;\n  -webkit-hyphens: none;\n  -moz-hyphens: none;\n  -ms-hyphens: none;\n  hyphens: none;\n  padding: 0;\n  background-image: -webkit-linear-gradient(hsl(0, 0%, 100%) 50%, hsl(199, 100%, 98%) 50%);\n  background-image: -moz-linear-gradient(hsl(0, 0%, 100%) 50%, hsl(199, 100%, 98%) 50%);\n  background-image: -ms-linear-gradient(hsl(0, 0%, 100%) 50%, hsl(199, 100%, 98%) 50%);\n  background-image: -o-linear-gradient(hsl(0, 0%, 100%) 50%, hsl(199, 100%, 98%) 50%);\n  background-image: linear-gradient(hsl(0, 0%, 100%) 50%, hsl(199, 100%, 98%) 50%);\n  background-size: 40px 40px;\n  background-origin: content-box;\n  overflow-y: visible;\n  overflow-x: auto;\n}\npre.prism code {\n  font-size: 14px;\n  display: block;\n  padding: 20px;\n}\n.token.comment,\n.token.block-comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n  color: #7d8b99;\n}\n.token.punctuation {\n  color: #5f6364;\n}\n.token.property,\n.token.tag,\n.token.boolean,\n.token.number,\n.token.function-name,\n.token.constant,\n.token.symbol {\n  color: #c92c2c;\n}\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.function,\n.token.builtin {\n  color: #2f9c0a;\n}\n.token.operator,\n.token.entity,\n.token.url,\n.token.variable {\n  color: #a67f59;\n  background: rgba(255, 255, 255, 0.5);\n}\n.token.atrule,\n.token.attr-value,\n.token.keyword,\n.token.class-name {\n  color: #1990b8;\n}\n.token.class-name {\n  color: black;\n}\n.token.regex,\n.token.important {\n  color: #e90;\n}\n.language-css .token.string,\n.style .token.string {\n  color: #a67f59;\n  background: rgba(255, 255, 255, 0.5);\n}\n.token.important {\n  font-weight: normal;\n}\n.token.entity {\n  cursor: help;\n}\n.namespace {\n  opacity: 0.7;\n}\n.token.tab:not(:empty):before,\n.token.cr:before,\n.token.lf:before {\n  color: #e0d7d1;\n}\n.runnable pre.prism,\n.runnable textarea {\n  cursor: text;\n}\n.token.tag > .token.class-name {\n  color: #c92c2c;\n}\n.markdown {\n  line-height: 22px;\n}\n.markdown a {\n  color: hsl(199, 100%, 50%);\n}\n.markdown a:hover {\n  text-decoration: underline;\n}\n.markdown li {\n  margin-left: 15px;\n  margin-bottom: 5px;\n}\n.markdown h2 {\n  border-bottom: 1px solid hsl(198, 20%, 83%);\n  padding-bottom: 15px;\n  line-height: 22px;\n}\n.markdown h2:first-child {\n  margin-top: 0;\n}\n.markdown h6 {\n  color: #777;\n}\n.markdown h1,\n.markdown h2,\n.markdown h3,\n.markdown h4,\n.markdown h5,\n.markdown h6 {\n  font-weight: 400;\n  margin-top: 35px;\n  margin-bottom: 20px;\n}\n.markdown h1 {\n  font-size: 2em;\n}\n.markdown h2 {\n  font-size: 1.5em;\n}\n.markdown h3 {\n  font-size: 1.3em;\n}\n.markdown hr {\n  border: 1px solid #e6e6e6;\n}\n.markdown pre {\n  display: block;\n  margin: 0;\n  margin-bottom: 20px;\n  padding: 0;\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n  color: hsl(204, 25%, 8%);\n  direction: ltr;\n  text-align: left;\n  background-image: -webkit-linear-gradient(hsl(0, 0%, 100%) 50%, hsl(199, 100%, 98%) 50%);\n  background-image: -moz-linear-gradient(hsl(0, 0%, 100%) 50%, hsl(199, 100%, 98%) 50%);\n  background-image: -ms-linear-gradient(hsl(0, 0%, 100%) 50%, hsl(199, 100%, 98%) 50%);\n  background-image: -o-linear-gradient(hsl(0, 0%, 100%) 50%, hsl(199, 100%, 98%) 50%);\n  background-image: linear-gradient(hsl(0, 0%, 100%) 50%, hsl(199, 100%, 98%) 50%);\n  background-size: 40px 40px;\n  background-origin: content-box;\n  overflow-y: visible;\n  overflow-x: auto;\n}\n.markdown pre code {\n  font-size: 14px;\n  display: block;\n  padding: 20px;\n  line-height: 20px;\n}\n.markdown pre + p {\n  margin-top: 20px;\n}\n.markdown p > code,\n.markdown li > code,\n.markdown td > code,\n.markdown h1 > code,\n.markdown h2 > code,\n.markdown h3 > code,\n.markdown h4 > code,\n.markdown h5 > code,\n.markdown h6 > code,\n.markdown blockquote > code {\n  font-family: 'Ubuntu Mono', 'Menlo', 'Monaco', 'Consolas', 'Bitstream Vera Sans Mono', monospace;\n  color: hsl(101, 87%, 33%);\n  font-size: 16px;\n}\n.markdown blockquote {\n  background-color: hsl(204, 22%, 99%);\n  border-left: 4px solid hsl(198, 20%, 83%);\n  padding: 10px 20px;\n  font-style: italic;\n  margin-bottom: 20px;\n}\n.markdown blockquote:last-child {\n  margin-bottom: 0;\n}\n.markdown table {\n  background-color: #fafafa;\n}\n.markdown table tr th,\n.markdown table tr td {\n  border: 1px solid #e6e6e6;\n}\n.markdown table tr:nth-child(2n) {\n  background-color: #f2f2f2;\n}\n.markdown img {\n  width: 100%;\n  margin-bottom: 20px;\n}\n.markdown table {\n  width: 100%;\n  border: 1px solid #dedede;\n  margin: 15px auto;\n  border-collapse: collapse;\n  empty-cells: show;\n}\n.markdown table th,\n.markdown table td {\n  height: 35px;\n  border: 1px solid hsl(198, 20%, 44%);\n  padding: 0 10px;\n}\n.markdown table th {\n  font-weight: 500;\n  text-align: center !important;\n  background-color: #eff3f5;\n}\n.markdown table tbody tr:nth-child(odd) {\n  background-color: hsl(0, 0%, 100%);\n}\n.markdown table tbody tr:nth-child(even) {\n  background-color: #fafbfc;\n}\n.markdown table tr:hover {\n  background: #efefef;\n}\n",""])},559:function(n,e,o){(n.exports=o(5)(!1)).push([n.i,".changelog .markdown h2:before {\n  content: none;\n}\n",""])},562:function(n,e){n.exports=""},99:function(n,e,o){var t=o(559);"string"==typeof t&&(t=[[n.i,t,""]]);var r={hmr:!0};r.transform=void 0;o(6)(t,r);t.locals&&(n.exports=t.locals)}});