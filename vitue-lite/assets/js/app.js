const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/index.BnUqDbxg.js","assets/js/vendor.DyDqlnGh.js","assets/css/vendor.B4eFsVd0.css","assets/js/_...catchAll_.Bk4i7HeE.js","assets/js/hello.DJeqVOG7.js","assets/js/hi.BgHUJSoT.js"])))=>i.map(i=>d[i]);
import{u as x,a as O,r as f,o as g,c as v,b as u,d,e as w,w as _,f as h,F as A,g as R,h as V,i as I}from"./vendor.DyDqlnGh.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const D="modulepreload",S=function(c){return"/"+c},y={},p=function(r,t,s){let e=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),i=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));e=Promise.allSettled(t.map(a=>{if(a=S(a),a in y)return;y[a]=!0;const m=a.endsWith(".css"),P=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${P}`))return;const l=document.createElement("link");if(l.rel=m?"stylesheet":D,m||(l.as="script"),l.crossOrigin="",l.href=a,i&&l.setAttribute("nonce",i),document.head.appendChild(l),m)return new Promise((L,k)=>{l.addEventListener("load",L),l.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${a}`)))})}))}function o(n){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=n,window.dispatchEvent(i),!i.defaultPrevented)throw n}return e.then(n=>{for(const i of n||[])i.status==="rejected"&&o(i.reason);return r().catch(o)})},T=[{path:"/",name:"/",component:()=>p(()=>import("./index.BnUqDbxg.js"),__vite__mapDeps([0,1,2]))},{path:"/:catchAll(.*)",name:"/[...catchAll]",component:()=>p(()=>import("./_...catchAll_.Bk4i7HeE.js"),__vite__mapDeps([3,1,2]))},{path:"/say",children:[{path:"hello",name:"/say/hello",component:()=>p(()=>import("./hello.DJeqVOG7.js"),__vite__mapDeps([4,1,2]))},{path:"hi",name:"/say/hi",component:()=>p(()=>import("./hi.BgHUJSoT.js"),__vite__mapDeps([5,1,2]))}]}],C=x({storageKey:"vitue-color-scheme"}),$=O(C),b=(c,r)=>{const t=c.__vccOpts||c;for(const[s,e]of r)t[s]=e;return t},N={mt3:"",fixed:"","top-4":"","right-4":"",flex:"","gap-x-3":""},B={mt3:""},q={__name:"Init",setup(c){return(r,t)=>{const s=f("router-link"),e=f("RouterLink");return g(),v(A,null,[u("nav",N,[d(s,{to:"/","i-carbon:home":"","icon-btn":""}),u("a",{to:"/","i-carbon:sun":"","icon-btn":"","dark:i-carbon:moon":"",onClick:t[0]||(t[0]=o=>w($)())}),t[1]||(t[1]=u("a",{href:"https://github.com/naiheyoung/vitue-lite",target:"_blank","i-carbon:logo-github":"","icon-btn":""},null,-1))]),t[4]||(t[4]=u("p",{mt5:""},"Path:",-1)),u("nav",B,[d(e,{py1:"",px3:"","rounded-sm":"",btn:"",to:"/say/hi"},{default:_(()=>t[2]||(t[2]=[h("Hi")])),_:1}),d(e,{py1:"",px3:"","rounded-sm":"",btn:"",to:"/say/hello"},{default:_(()=>t[3]||(t[3]=[h("Hello")])),_:1})])],64)}}},F=b(q,[["__scopeId","data-v-a506cc11"]]),H={},U={"font-sans":"",p:"x-4 y-10",text:"center gray-700 dark:gray-200"};function K(c,r){const t=f("RouterView"),s=F;return g(),v("main",U,[d(t),d(s)])}const W=b(H,[["render",K]]),E=R(W),j=V({routes:T,history:I("/")});E.use(j);E.mount("#root");export{b as _};
