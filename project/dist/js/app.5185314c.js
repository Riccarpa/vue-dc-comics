(function(e){function s(s){for(var t,u,c=s[0],o=s[1],A=s[2],a=0,l=[];a<c.length;a++)u=c[a],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&l.push(r[u][0]),r[u]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t]);i&&i(s);while(l.length)l.shift()();return n.push.apply(n,A||[]),U()}function U(){for(var e,s=0;s<n.length;s++){for(var U=n[s],t=!0,c=1;c<U.length;c++){var o=U[c];0!==r[o]&&(t=!1)}t&&(n.splice(s--,1),e=u(u.s=U[0]))}return e}var t={},r={app:0},n=[];function u(s){if(t[s])return t[s].exports;var U=t[s]={i:s,l:!1,exports:{}};return e[s].call(U.exports,U,U.exports,u),U.l=!0,U.exports}u.m=e,u.c=t,u.d=function(e,s,U){u.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:U})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,s){if(1&s&&(e=u(e)),8&s)return e;if(4&s&&"object"===typeof e&&e&&e.__esModule)return e;var U=Object.create(null);if(u.r(U),Object.defineProperty(U,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var t in e)u.d(U,t,function(s){return e[s]}.bind(null,t));return U},u.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(s,"a",s),s},u.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},u.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=s,c=c.slice();for(var A=0;A<c.length;A++)s(c[A]);var i=o;n.push([0,"chunk-vendors"]),U()})({0:function(e,s,U){e.exports=U("56d7")},"56d7":function(e,s,U){"use strict";U.r(s);U("e260"),U("e6cf"),U("cca6"),U("a79d");var t=U("2b0e"),r=function(){var e=this,s=e.$createElement,U=e._self._c||s;return U("div",{attrs:{id:"app"}},[U("Header")],1)},n=[],u=function(){var e=this,s=e.$createElement,U=e._self._c||s;return U("header",[U("div",{staticClass:"container"},[e._m(0),U("ul",e._l(e.links,(function(s,t){return U("li",{key:t,class:{selected:s.current}},[U("a",{attrs:{href:s.url}},[e._v(e._s(s.text))])])})),0)])])},c=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("figure",[t("img",{staticClass:"pointer",attrs:{src:U("9f51"),alt:""}})])}],o={name:"Header",data:function(){return{links:[{text:"Characters",url:"#",current:!1},{text:"Comics",url:"#",current:!0},{text:"Movies",url:"#",current:!1},{text:"TV",url:"#",current:!1},{text:"Games",url:"#",current:!1},{text:"Collectibles",url:"#",current:!1},{text:"Videos",url:"#",current:!1},{text:"Fans",url:"#",current:!1},{text:"News",url:"#",current:!1},{text:"Shop",url:"#",current:!1}]}}},A=o,i=(U("feba"),U("2877")),a=Object(i["a"])(A,u,c,!1,null,"d3c34eb6",null),l=a.exports,f={name:"App",components:{Header:l}},p=f,d=(U("5c0b"),Object(i["a"])(p,r,n,!1,null,null,null)),b=d.exports;t["a"].config.productionTip=!1,new t["a"]({render:function(e){return e(b)}}).$mount("#app")},"5c0b":function(e,s,U){"use strict";U("9c0c")},"9c0c":function(e,s,U){},"9f51":function(e,s){e.exports="data:image/png;base64,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"},e3d8:function(e,s,U){},feba:function(e,s,U){"use strict";U("e3d8")}});
//# sourceMappingURL=app.5185314c.js.map