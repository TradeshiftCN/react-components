(window.webpackJsonp=window.webpackJsonp||[]).push([[10,5,16],{112:function(e,n,t){(e.exports=t(9)(!1)).push([e.i,".timeline {\n  padding-left: 20px;\n  position: relative;\n  width: 100%;\n}\n.timeline::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 5px;\n  width: 2px;\n  background-color: hsl(198, 20%, 67%);\n}\n.timeline .content {\n  color: hsl(199, 20%, 31%);\n  border-bottom: dashed 1px hsl(198, 20%, 67%);\n  padding-bottom: 10px;\n  padding-left: 5px;\n  opacity: 0.6;\n}\n.timeline .content .time {\n  color: hsl(196, 20%, 15%);\n  font-size: 14px;\n  line-height: 20px;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  font-weight: 600;\n}\n.timeline .content .status,\n.timeline .content .number {\n  font-size: 12px;\n}\n.timeline .circle {\n  position: absolute;\n  top: -4px;\n  left: -4px;\n  width: 20px;\n  height: 20px;\n  background-color: hsl(198, 20%, 67%);\n  border-radius: 10px;\n  border: solid 1px hsl(0, 0%, 100%);\n}\n.timeline.active .content {\n  opacity: 1;\n}\n.timeline.active .content .time {\n  margin-top: 0;\n}\n.timeline.active .circle {\n  background-color: hsl(199, 100%, 50%);\n  top: 0;\n}\n.timeline.active .circle::before {\n  content: '';\n  position: absolute;\n  left: 1px;\n  top: 1px;\n  width: 18px;\n  height: 18px;\n  border-radius: 10px;\n  border: solid 1px hsl(0, 0%, 100%);\n}\n",""])},225:function(e,n){},226:function(e,n){},229:function(e,n){},26:function(e,n,t){"use strict";t.r(n),function(e){var i,o=t(0),a=t.n(o),r=t(1),c=t.n(r);t(93);(i=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(2)).enterModule)&&i(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l=function(e){var n=e.timelines,t=e.activeIndex;return a.a.createElement("div",null,n.map(function(e,n){return a.a.createElement("div",{className:"timeline ".concat(t===n&&"active"),key:e.id},a.a.createElement("i",{className:"circle"}),a.a.createElement("div",{className:"content"},a.a.createElement("div",{className:"time"},e.time),a.a.createElement("div",{className:"status"},e.status),a.a.createElement("div",{className:"number"},e.name)))}))};l.propTypes={timelines:c.a.arrayOf(c.a.shape({id:c.a.string,time:c.a.string,status:c.a.string,name:c.a.string})),activeIndex:c.a.number};var s,d,p=l;n.default=p,(s=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(2)).default)&&(s.register(l,"TimeLine","C:\\Projects\\react-components\\src\\components\\TimeLine\\index.js"),s.register(p,"default","C:\\Projects\\react-components\\src\\components\\TimeLine\\index.js")),(d=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(2)).leaveModule)&&d(e)}.call(this,t(5)(e))},299:function(e,n){},49:function(e,n,t){"use strict";t.r(n);var i=t(0),o=t.n(i),a=t(209),r=t(26);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;describe("TimeLine",function(){var e=Object(a.shallow)(o.a.createElement(r.default,{timelines:[{id:"uuid1",time:"2019-07-01 15:20",status:"处理成功",name:"puff"},{id:"uuid2",time:"2019-06-30 13:54",status:"创建成功",name:"puff"}],activeIndex:0}));it("should render correctly",function(){expect(e).toMatchSnapshot()}),it("should has two item",function(){expect(e.find("i").length).toBe(2)}),it("should has one active item",function(){expect(e.find(".active").length).toBe(1)})})},93:function(e,n,t){var i=t(112);"string"==typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0,transform:void 0};t(10)(i,o);i.locals&&(e.exports=i.locals)}}]);