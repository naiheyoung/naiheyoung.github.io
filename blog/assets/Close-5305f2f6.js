import{m as T,e as z,S as b,d as N,u as P,y as p,R as g,V as j,B as m,z as a,E as u,I as F}from"./light-66b14548.js";import{i as y,o as I,d as f,j as t,t as C}from"./index-2ee9c01d.js";function E(e,...r){if(Array.isArray(e))e.forEach(o=>E(o,...r));else return e(...r)}var H="[object Symbol]";function O(e){return typeof e=="symbol"||T(e)&&z(e)==H}function D(e,r){for(var o=-1,s=e==null?0:e.length,n=Array(s);++o<s;)n[o]=r(e[o],o,e);return n}var U=1/0,h=b?b.prototype:void 0,v=h?h.toString:void 0;function S(e){if(typeof e=="string")return e;if(N(e))return D(e,S)+"";if(O(e))return v?v.call(e):"";var r=e+"";return r=="0"&&1/e==-U?"-0":r}function V(e){return e==null?"":S(e)}function Z(e,r,o){var s=-1,n=e.length;r<0&&(r=-r>n?0:n+r),o=o>n?n:o,o<0&&(o+=n),n=r>o?0:o-r>>>0,r>>>=0;for(var i=Array(n);++s<n;)i[s]=e[s+r];return i}function q(e,r,o){var s=e.length;return o=o===void 0?s:o,!r&&o>=s?e:Z(e,r,o)}var J="\\ud800-\\udfff",W="\\u0300-\\u036f",Y="\\ufe20-\\ufe2f",_="\\u20d0-\\u20ff",G=W+Y+_,K="\\ufe0e\\ufe0f",X="\\u200d",Q=RegExp("["+X+J+G+K+"]");function M(e){return Q.test(e)}function ee(e){return e.split("")}var k="\\ud800-\\udfff",oe="\\u0300-\\u036f",re="\\ufe20-\\ufe2f",ne="\\u20d0-\\u20ff",se=oe+re+ne,ie="\\ufe0e\\ufe0f",ae="["+k+"]",c="["+se+"]",d="\\ud83c[\\udffb-\\udfff]",te="(?:"+c+"|"+d+")",w="[^"+k+"]",x="(?:\\ud83c[\\udde6-\\uddff]){2}",B="[\\ud800-\\udbff][\\udc00-\\udfff]",le="\\u200d",L=te+"?",R="["+ie+"]?",ue="(?:"+le+"(?:"+[w,x,B].join("|")+")"+R+L+")*",ce=R+L+ue,de="(?:"+[w+c+"?",c,x,B,ae].join("|")+")",fe=RegExp(d+"(?="+d+")|"+de+ce,"g");function be(e){return e.match(fe)||[]}function ge(e){return M(e)?be(e):ee(e)}function he(e){return function(r){r=V(r);var o=M(r)?ge(r):void 0,s=o?o[0]:r.charAt(0),n=o?q(o,1).join(""):r.slice(1);return s[e]()+n}}var ve=he("toUpperCase");const pe=ve;function $(e,r,o){if(!r)return;const s=P(),n=y(p,null),i=()=>{const l=o==null?void 0:o.value;r.mount({id:l===void 0?e:l+e,head:!0,anchorMetaName:g,props:{bPrefix:l?`.${l}-`:void 0},ssr:s}),n!=null&&n.preflightStyleDisabled||j.mount({id:"n-global",head:!0,anchorMetaName:g,ssr:s})};s?i():I(i)}function me(e,r){return f({name:pe(e),setup(){var o;const s=(o=y(p,null))===null||o===void 0?void 0:o.mergedIconsRef;return()=>{var n;const i=(n=s==null?void 0:s.value)===null||n===void 0?void 0:n[e];return i?i():r}}})}const ye=me("close",t("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},t("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},t("g",{fill:"currentColor","fill-rule":"nonzero"},t("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),Ce=m("base-icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[a("svg",`
 height: 1em;
 width: 1em;
 `)]),Se=f({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(e){$("-base-icon",Ce,C(e,"clsPrefix"))},render(){return t("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}}),Me=m("base-close",`
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`,[u("absolute",`
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `),a("&::before",`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),F("disabled",[a("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),a("&:hover::before",`
 background-color: var(--n-close-color-hover);
 `),a("&:focus::before",`
 background-color: var(--n-close-color-hover);
 `),a("&:active",`
 color: var(--n-close-icon-color-pressed);
 `),a("&:active::before",`
 background-color: var(--n-close-color-pressed);
 `)]),u("disabled",`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),u("round",[a("&::before",`
 border-radius: 50%;
 `)])]),xe=f({name:"BaseClose",props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(e){return $("-base-close",Me,C(e,"clsPrefix")),()=>{const{clsPrefix:r,disabled:o,absolute:s,round:n,isButtonTag:i}=e;return t(i?"button":"div",{type:i?"button":void 0,tabindex:o||!e.focusable?-1:0,"aria-disabled":o,"aria-label":"close",role:i?void 0:"button",disabled:o,class:[`${r}-base-close`,s&&`${r}-base-close--absolute`,o&&`${r}-base-close--disabled`,n&&`${r}-base-close--round`],onMousedown:A=>{e.focusable||A.preventDefault()},onClick:e.onClick},t(Se,{clsPrefix:r},{default:()=>t(ye,null)}))}}});export{Se as N,D as a,xe as b,E as c,O as i,me as r,V as t,$ as u};
