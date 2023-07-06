(function(){"use strict";var e={51:function(e,t,n){var o=n(6369),r=function(){var e=this,t=e._self._c;return t("div",{staticStyle:{display:"contents"},attrs:{app:""}},[t("router-view"),t("div",{directives:[{name:"shadow",rawName:"v-shadow",value:{radius:8},expression:"{ radius: 8 }"}],attrs:{"data-tools-nav":""}},[t("p",{staticClass:"title"},[e._v("导航")]),t("ul",{staticClass:"nav-items"},e._l(e.navs,(function(n,o){return t("li",{key:o,ref:n.path,refInFor:!0,staticClass:"item",on:{click:function(t){return e.linkTo(n.path)}}},[e._v(" "+e._s(n.name)+" ")])})),0)]),e._m(0)],1)},i=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"signature"},[t("canvas",{attrs:{id:"signature_canvas"}})])}],a=(n(7658),[{path:"/",name:"Index"},{path:"/props",name:"props属性"},{path:"/mixin",name:"mixin混入"},{path:"/plugin",name:"插件"},{path:"/scoped",name:"scoped属性"},{path:"/component-custom-event",name:"组件自定义事件(子传父)"},{path:"/component-unbind-event",name:"解绑事件"},{path:"/component-communication",name:"全局事件总线"},{path:"/news-sub-publish",name:"消息订阅与发布"},{path:"/proxy",name:"代理"},{path:"/slot",name:"插槽"},{path:"/vuex",name:"vuex"},{path:"/route",name:"路由"}]),s={name:"App",data(){return{navs:a}},methods:{linkTo(e){if(e===location.pathname)return!1;this.$router.push(e)},render(){let e=this.$refs;for(const t in e)this.$refs[t][0].classList.remove("active-item");e[this.pathName][0].classList.add("active-item")}},updated(){this.pathName=`/${location.pathname.split("/")[1]}`,this.$refs[this.pathName]&&this.render()},mounted(){let e=document.getElementById("signature_canvas");e.style.width="inherit",e.style.height="inherit";let t=e.getContext("2d");t.font="50px Signature",t.fillText("Naihe",80,95)}},l=s,u=n(1001),c=(0,u.Z)(l,r,i,!1,null,"94cc0c10",null),d=c.exports,p=n(2631);const m=[{path:"/",component:()=>n.e(823).then(n.bind(n,6823))},{path:"/props",component:()=>n.e(663).then(n.bind(n,9663))},{path:"/mixin",component:()=>n.e(829).then(n.bind(n,5829))},{path:"/plugin",component:()=>n.e(60).then(n.bind(n,60))},{path:"/scoped",component:()=>n.e(163).then(n.bind(n,1163))},{path:"/component-custom-event",component:()=>n.e(525).then(n.bind(n,2525))},{path:"/component-unbind-event",component:()=>n.e(765).then(n.bind(n,6765))},{path:"/component-communication",component:()=>n.e(785).then(n.bind(n,2785))},{path:"/news-sub-publish",component:()=>n.e(491).then(n.bind(n,491))},{path:"/proxy",component:()=>n.e(477).then(n.bind(n,4477))},{path:"/slot",component:()=>n.e(88).then(n.bind(n,6088))},{path:"/vuex",component:()=>n.e(358).then(n.bind(n,8358))},{path:"/route",component:()=>n.e(307).then(n.bind(n,307)),children:[{path:"child/:tel",component:()=>n.e(653).then(n.bind(n,653)),props:!0}]},{path:"*",component:()=>n.e(426).then(n.bind(n,1426))}],f=new p.ZP({mode:"hash",routes:m,linkActiveClass:"custom-route-link"});var h=f,v=function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"card",rawName:"v-card",value:e.width,expression:"width"}]},[t("p",[e._v(e._s(e.title))]),t("div",[e._t("default",(function(){return[t("pre")]}))],2)])},g=[],b={name:"NHCard",props:["title","width"],data(){return{}}},y=b,x=(0,u.Z)(y,v,g,!1,null,null,null),w=x.exports,k={install(e,...t){console.log("插件已开启"),e.filter("toUpper",(function(e){return console.log("plugin@filter"),e.toLocaleUpperCase()})),e.mixin({methods:{fun(){console.log("plugin@mixin"),alert("from: 插件中混入定义的函数")}}}),console.log("传参",t),e.directive("shadow",(function(e,t){e.style["boxShadow"]=t.value&&t.value.color?t.value.color:"-4px -4px 8px 0 hsla(0, 0%, 100%, 0.8), 4px 4px 8px 0 rgba(1, 1, 2, 0.18)",e.style["max-width"]=t.value&&t.value.width?`${t.value.width}`:"30%",e.style["border-radius"]=t.value&&t.value.radius?`${t.value.radius}px`:"50px",e.style["padding"]="3px"})),e.directive("flex",(function(e){e.style["display"]="flex",e.style["justify-content"]="center",e.style["align-items"]="center",e.style["flex-direction"]="column"})),e.directive("head-img",(function(e){e.style["max-width"]="130px",e.style["max-height"]="130px",e.style["border-radius"]="50%",e.style["border"]="5px solid #dddddd"})),e.directive("img",(function(e){e.style["max-width"]="400px",e.style["border-radius"]="8px",e.style["border"]="5px solid #dddddd"})),e.directive("card",(function(e,t){e.style["background-color"]="#dddddddb",e.style["max-width"]=t.value?`${t.value}px`:"400px",e.style["min-height"]="200px",e.style["border-radius"]="5px",e.style["padding"]="0.5rem 18px",e.style["padding-bottom"]="unset",e.style["margin-top"]="8px",e.style["margin-bottom"]="2rem";let n=e.querySelector("p");n.style["border-bottom"]="2px solid #ee7959";let o=e.querySelector("div");o.style["padding"]="unset",o.style["backgroundColor"]="unset";let r=o.querySelector("pre");if(r){r.style["white-space"]="break-spaces",r.style["marginBottom"]="unset",r.style["lineHeight"]="20px";let e=r.querySelector("a");e&&(e.style["textDecoration"]="unset",e.style["color"]="#000000")}})),e.component("NHCard",w)}},_=n(3822);o.ZP.use(_.ZP);var C=new _.ZP.Store({actions:{init(e){console.log("------vuex------"),console.log("@fun init",e),e.commit("print")},loginInfo({commit:e}){e("getLoginInfo")},loginIn({commit:e},t){e("loginIn",t)},processName({state:e,getters:t}){e.loginInfo.name&&t.formatName}},mutations:{print(e){console.log("vuex loaded",e)},getLoginInfo({loginInfo:e}){e.name?console.log(e):(console.log("未登录"),alert("请先登录"))},loginIn({loginInfo:e},t){e.name=t.username,e.timestamp=t.timestamp}},state:{info:"我是来自vuex的数据",loginInfo:{name:null,timestamp:null}},modules:{pro:{namespaced:!0,state:{proName:"华为Mate30Pro",proPrice:5999}}},getters:{formatName:e=>!!e.loginInfo.name&&(e.loginInfo.name=e.loginInfo.name+"[getters]")}});o.ZP.config.productionTip=!1,o.ZP.prototype.baseimg="/image",o.ZP.prototype.basefont="/font",o.ZP.use(p.ZP),o.ZP.use(k,"naihe",18,"一个阳光大男孩"),new o.ZP({render:e=>e(d),router:h,store:C,beforeCreate(){o.ZP.prototype.$worker=this},mounted(){console.log(this.$store),this.$store.dispatch("init")}}).$mount("#root")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],i=e[c][2];for(var s=!0,l=0;l<o.length;l++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(s=!1,i<a&&(a=i));if(s){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"static/js/"+e+"."+{60:"fe3ede0d",88:"0479cf8b",163:"38a58434",307:"e90a177d",358:"7d921e10",426:"9279c3a7",477:"879ac7e7",491:"1b41d863",525:"ed32850a",653:"8e3409f1",663:"8eb1b2de",765:"0f898456",785:"21abc2c0",823:"2531b4e1",829:"2aaa9bbe"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"static/css/"+e+"."+{88:"bcb69dc5",163:"07c04d0d",307:"1a838f13",358:"c1dd4c8e",426:"8a7839ad",477:"7bc863d6",823:"94c91bc0"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-cli:";n.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var s,l;if(void 0!==i)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+i){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=o),e[o]=[r];var p=function(t,n){s.onerror=s.onload=null,clearTimeout(m);var r=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(n){if(i.onerror=i.onload=null,"load"===n.type)o();else{var a=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=a,l.request=s,i.parentNode.removeChild(i),r(l)}};return i.onerror=i.onload=a,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===e||i===t)return r}},o=function(o){return new Promise((function(r,i){var a=n.miniCssF(o),s=n.p+a;if(t(a,s))return r();e(o,s,null,r,i)}))},r={826:0};n.f.miniCss=function(e,t){var n={88:1,163:1,307:1,358:1,426:1,477:1,823:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={826:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(t),s=new Error,l=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,r[1](s)}};n.l(a,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],s=o[1],l=o[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(l)var c=l(n)}for(t&&t(o);u<a.length;u++)i=a[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},o=self["webpackChunkvue_cli"]=self["webpackChunkvue_cli"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(51)}));o=n.O(o)})();
//# sourceMappingURL=index.6ea6f8b4.js.map