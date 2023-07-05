import{E as ft,S as ut}from"./tiptap-starter-kit.esm-d76cbd92.js";import{d as V,r as P,j as d,i as ze,c as Z,u as pt,F as vt,w as ne,p as ht,t as M,s as gt,n as re,h as mt,q as xt,x as yt,v as Ct,_ as St,B as ge,y as _t,z as wt,D as q,E as J,f as I,M as Tt,N as Rt,A}from"./index-d66b244c.js";import{u as zt,n as ee,r as Pt,D as Lt,c as $t,X as Bt,B as h,E as w,z as T,C as j,I as At,G as Wt,F as Pe,H as Et}from"./light-38466979.js";import{i as kt,N as It,b as jt,c as Q}from"./Close-d317fad0.js";import{a as me,c as Ot,r as Ft,b as xe,f as oe,u as Mt,o as Dt,V as ye}from"./VResizeObserver-b2f2258c.js";import{r as Ce,c as O}from"./create-key-c2040c72.js";function Nt(e,a=[],r){const o={};return Object.getOwnPropertyNames(e).forEach(c=>{a.includes(c)||(o[c]=e[c])}),Object.assign(o,r)}const Ht=me(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[me("&::-webkit-scrollbar",{width:0,height:0})]),Gt=V({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=P(null);function a(i){!(i.currentTarget.offsetWidth<i.currentTarget.scrollWidth)||i.deltaY===0||(i.currentTarget.scrollLeft+=i.deltaY+i.deltaX,i.preventDefault())}const r=zt();return Ht.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:Ot,ssr:r}),Object.assign({selfRef:e,handleWheel:a},{scrollTo(...i){var c;(c=e.value)===null||c===void 0||c.scrollTo(...i)}})},render(){return d("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});var Vt=/\s/;function Xt(e){for(var a=e.length;a--&&Vt.test(e.charAt(a)););return a}var Ut=/^\s+/;function Kt(e){return e&&e.slice(0,Xt(e)+1).replace(Ut,"")}var Se=0/0,Yt=/^[-+]0x[0-9a-f]+$/i,qt=/^0b[01]+$/i,Jt=/^0o[0-7]+$/i,Qt=parseInt;function _e(e){if(typeof e=="number")return e;if(kt(e))return Se;if(ee(e)){var a=typeof e.valueOf=="function"?e.valueOf():e;e=ee(a)?a+"":a}if(typeof e!="string")return e===0?e:+e;e=Kt(e);var r=qt.test(e);return r||Jt.test(e)?Qt(e.slice(2),r?2:8):Yt.test(e)?Se:+e}var Zt=function(){return Pt.Date.now()};const ie=Zt;var ea="Expected a function",ta=Math.max,aa=Math.min;function na(e,a,r){var o,i,c,b,l,x,m=0,C=!1,g=!1,p=!0;if(typeof e!="function")throw new TypeError(ea);a=_e(a)||0,ee(r)&&(C=!!r.leading,g="maxWait"in r,c=g?ta(_e(r.maxWait)||0,a):c,p="trailing"in r?!!r.trailing:p);function v(y){var $=o,B=i;return o=i=void 0,m=y,b=e.apply(B,$),b}function S(y){return m=y,l=setTimeout(R,a),C?v(y):b}function _(y){var $=y-x,B=y-m,G=a-$;return g?aa(G,c-B):G}function f(y){var $=y-x,B=y-m;return x===void 0||$>=a||$<0||g&&B>=c}function R(){var y=ie();if(f(y))return z(y);l=setTimeout(R,_(y))}function z(y){return l=void 0,p&&o?v(y):(o=i=void 0,b)}function L(){l!==void 0&&clearTimeout(l),m=0,o=x=i=l=void 0}function X(){return l===void 0?b:z(ie())}function H(){var y=ie(),$=f(y);if(o=arguments,i=this,x=y,$){if(l===void 0)return S(x);if(g)return clearTimeout(l),l=setTimeout(R,a),v(x)}return l===void 0&&(l=setTimeout(R,a)),b}return H.cancel=L,H.flush=X,H}var ra="Expected a function";function se(e,a,r){var o=!0,i=!0;if(typeof e!="function")throw new TypeError(ra);return ee(r)&&(o="leading"in r?!!r.leading:o,i="trailing"in r?!!r.trailing:i),na(e,a,{leading:o,maxWait:a,trailing:i})}const oa=V({name:"Add",render(){return d("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}}),ia={tabFontSizeSmall:"14px",tabFontSizeMedium:"14px",tabFontSizeLarge:"16px",tabGapSmallLine:"36px",tabGapMediumLine:"36px",tabGapLargeLine:"36px",tabPaddingSmallLine:"6px 0",tabPaddingMediumLine:"10px 0",tabPaddingLargeLine:"14px 0",tabGapSmallBar:"36px",tabGapMediumBar:"36px",tabGapLargeBar:"36px",tabPaddingSmallBar:"4px 0",tabPaddingMediumBar:"6px 0",tabPaddingLargeBar:"10px 0",tabGapSmallCard:"4px",tabGapMediumCard:"4px",tabGapLargeCard:"4px",tabPaddingSmallCard:"6px 10px",tabPaddingMediumCard:"8px 12px",tabPaddingLargeCard:"8px 16px",tabPaddingSmallSegment:"4px 0",tabPaddingMediumSegment:"6px 0",tabPaddingLargeSegment:"8px 0",tabGapSmallSegment:"0",tabGapMediumSegment:"0",tabGapLargeSegment:"0",panePaddingSmall:"8px 0 0 0",panePaddingMedium:"12px 0 0 0",panePaddingLarge:"16px 0 0 0",closeSize:"18px",closeIconSize:"14px"},sa=e=>{const{textColor2:a,primaryColor:r,textColorDisabled:o,closeIconColor:i,closeIconColorHover:c,closeIconColorPressed:b,closeColorHover:l,closeColorPressed:x,tabColor:m,baseColor:C,dividerColor:g,fontWeight:p,textColor1:v,borderRadius:S,fontSize:_,fontWeightStrong:f}=e;return Object.assign(Object.assign({},ia),{colorSegment:m,tabFontSizeCard:_,tabTextColorLine:v,tabTextColorActiveLine:r,tabTextColorHoverLine:r,tabTextColorDisabledLine:o,tabTextColorSegment:v,tabTextColorActiveSegment:a,tabTextColorHoverSegment:a,tabTextColorDisabledSegment:o,tabTextColorBar:v,tabTextColorActiveBar:r,tabTextColorHoverBar:r,tabTextColorDisabledBar:o,tabTextColorCard:v,tabTextColorHoverCard:v,tabTextColorActiveCard:r,tabTextColorDisabledCard:o,barColor:r,closeIconColor:i,closeIconColorHover:c,closeIconColorPressed:b,closeColorHover:l,closeColorPressed:x,closeBorderRadius:S,tabColor:m,tabColorSegment:C,tabBorderColor:g,tabFontWeightActive:p,tabFontWeight:p,tabBorderRadius:S,paneTextColor:a,fontWeightStrong:f})},la={name:"Tabs",common:Lt,self:sa},da=la,ce=$t("n-tabs"),Le={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},ca=V({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:Le,setup(e){const a=ze(ce,null);return a||Bt("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:a.paneStyleRef,class:a.paneClassRef,mergedClsPrefix:a.mergedClsPrefixRef}},render(){return d("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),ba=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},Nt(Le,["displayDirective"])),de=V({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:ba,setup(e){const{mergedClsPrefixRef:a,valueRef:r,typeRef:o,closableRef:i,tabStyleRef:c,tabChangeIdRef:b,onBeforeLeaveRef:l,triggerRef:x,handleAdd:m,activateTab:C,handleClose:g}=ze(ce);return{trigger:x,mergedClosable:Z(()=>{if(e.internalAddable)return!1;const{closable:p}=e;return p===void 0?i.value:p}),style:c,clsPrefix:a,value:r,type:o,handleClose(p){p.stopPropagation(),!e.disabled&&g(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){m();return}const{name:p}=e,v=++b.id;if(p!==r.value){const{value:S}=l;S?Promise.resolve(S(e.name,r.value)).then(_=>{_&&b.id===v&&C(p)}):C(p)}}}},render(){const{internalAddable:e,clsPrefix:a,name:r,disabled:o,label:i,tab:c,value:b,mergedClosable:l,style:x,trigger:m,$slots:{default:C}}=this,g=i??c;return d("div",{class:`${a}-tabs-tab-wrapper`},this.internalLeftPadded?d("div",{class:`${a}-tabs-tab-pad`}):null,d("div",Object.assign({key:r,"data-name":r,"data-disabled":o?!0:void 0},pt({class:[`${a}-tabs-tab`,b===r&&`${a}-tabs-tab--active`,o&&`${a}-tabs-tab--disabled`,l&&`${a}-tabs-tab--closable`,e&&`${a}-tabs-tab--addable`],onClick:m==="click"?this.activateTab:void 0,onMouseenter:m==="hover"?this.activateTab:void 0,style:e?void 0:x},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),d("span",{class:`${a}-tabs-tab__label`},e?d(vt,null,d("div",{class:`${a}-tabs-tab__height-placeholder`}," "),d(It,{clsPrefix:a},{default:()=>d(oa,null)})):C?C():typeof g=="object"?g:Ft(g??r)),l&&this.type==="card"?d(jt,{clsPrefix:a,class:`${a}-tabs-tab__close`,onClick:this.handleClose,disabled:o}):null))}}),fa=h("tabs",`
 box-sizing: border-box;
 width: 100%;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[w("segment-type",[h("tabs-rail",[T("&.transition-disabled","color: red;",[h("tabs-tab",`
 transition: none;
 `)])])]),h("tabs-rail",`
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[h("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[h("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[w("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 `),T("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),w("flex",[h("tabs-nav",{width:"100%"},[h("tabs-wrapper",{width:"100%"},[h("tabs-tab",{marginRight:0})])])]),h("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[j("prefix, suffix",`
 display: flex;
 align-items: center;
 `),j("prefix","padding-right: 16px;"),j("suffix","padding-left: 16px;")]),h("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[w("shadow-before",[T("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),w("shadow-after",[T("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),T("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 20px;
 z-index: 1;
 `),T("&::before",`
 left: 0;
 `),T("&::after",`
 right: 0;
 `)]),h("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 width: fit-content;
 `),h("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),h("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),h("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[w("disabled",{cursor:"not-allowed"}),j("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),j("label",`
 display: flex;
 align-items: center;
 `)]),h("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[T("&.transition-disabled",`
 transition: none;
 `),w("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),h("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),h("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 padding: var(--n-pane-padding);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[T("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),T("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),T("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),T("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),T("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),h("tabs-tab-pad",`
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),w("line-type, bar-type",[h("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[T("&:hover",{color:"var(--n-tab-text-color-hover)"}),w("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),w("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),h("tabs-nav",[w("line-type",[j("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),h("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),h("tabs-bar",`
 border-radius: 0;
 bottom: -1px;
 `)]),w("card-type",[j("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),h("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),h("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),h("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[w("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[j("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),At("disabled",[T("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),w("closable","padding-right: 6px;"),w("active",`
 border-bottom: 1px solid #0000;
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),w("disabled","color: var(--n-tab-text-color-disabled);")]),h("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")])])]),ua=Object.assign(Object.assign({},Pe.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),pa=V({name:"Tabs",props:ua,setup(e,{slots:a}){var r,o,i,c;const{mergedClsPrefixRef:b,inlineThemeDisabled:l}=Wt(e),x=Pe("Tabs","-tabs",fa,da,e,b),m=P(null),C=P(null),g=P(null),p=P(null),v=P(null),S=P(!0),_=P(!0),f=xe(e,["labelSize","size"]),R=xe(e,["activeName","value"]),z=P((o=(r=R.value)!==null&&r!==void 0?r:e.defaultValue)!==null&&o!==void 0?o:a.default?(c=(i=oe(a.default())[0])===null||i===void 0?void 0:i.props)===null||c===void 0?void 0:c.name:null),L=Mt(R,z),X={id:0},H=Z(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});ne(L,()=>{X.id=0,B(),G()});function y(){var t;const{value:n}=L;return n===null?null:(t=m.value)===null||t===void 0?void 0:t.querySelector(`[data-name="${n}"]`)}function $(t){if(e.type==="card")return;const{value:n}=C;if(n&&t){const s=`${b.value}-tabs-bar--disabled`,{barWidth:u}=e;if(t.dataset.disabled==="true"?n.classList.add(s):n.classList.remove(s),typeof u=="number"&&t.offsetWidth>=u){const E=Math.floor((t.offsetWidth-u)/2)+t.offsetLeft;n.style.left=`${E}px`,n.style.maxWidth=`${u}px`}else n.style.left=`${t.offsetLeft}px`,n.style.maxWidth=`${t.offsetWidth}px`;n.style.width="8192px",n.offsetWidth}}function B(){if(e.type==="card")return;const t=y();t&&$(t)}function G(t){var n;const s=(n=v.value)===null||n===void 0?void 0:n.$el;if(!s)return;const u=y();if(!u)return;const{scrollLeft:E,offsetWidth:F}=s,{offsetLeft:N,offsetWidth:Y}=u;E>N?s.scrollTo({top:0,left:N,behavior:"smooth"}):N+Y>E+F&&s.scrollTo({top:0,left:N+Y-F,behavior:"smooth"})}const U=P(null);let te=0,k=null;function $e(t){const n=U.value;if(n){te=t.getBoundingClientRect().height;const s=`${te}px`,u=()=>{n.style.height=s,n.style.maxHeight=s};k?(u(),k(),k=null):k=u}}function Be(t){const n=U.value;if(n){const s=t.getBoundingClientRect().height,u=()=>{document.body.offsetHeight,n.style.maxHeight=`${s}px`,n.style.height=`${Math.max(te,s)}px`};k?(k(),k=null,u()):k=u}}function Ae(){const t=U.value;t&&(t.style.maxHeight="",t.style.height="")}const be={value:[]},fe=P("next");function We(t){const n=L.value;let s="next";for(const u of be.value){if(u===n)break;if(u===t){s="prev";break}}fe.value=s,Ee(t)}function Ee(t){const{onActiveNameChange:n,onUpdateValue:s,"onUpdate:value":u}=e;n&&Q(n,t),s&&Q(s,t),u&&Q(u,t),z.value=t}function ke(t){const{onClose:n}=e;n&&Q(n,t)}function ue(){const{value:t}=C;if(!t)return;const n="transition-disabled";t.classList.add(n),B(),t.classList.remove(n)}let pe=0;function Ie(t){var n;if(t.contentRect.width===0&&t.contentRect.height===0||pe===t.contentRect.width)return;pe=t.contentRect.width;const{type:s}=e;(s==="line"||s==="bar")&&ue(),s!=="segment"&&ae((n=v.value)===null||n===void 0?void 0:n.$el)}const je=se(Ie,64);ne([()=>e.justifyContent,()=>e.size],()=>{re(()=>{const{type:t}=e;(t==="line"||t==="bar")&&ue()})});const K=P(!1);function Oe(t){var n;const{target:s,contentRect:{width:u}}=t,E=s.parentElement.offsetWidth;if(!K.value)E<u&&(K.value=!0);else{const{value:F}=p;if(!F)return;E-u>F.$el.offsetWidth&&(K.value=!1)}ae((n=v.value)===null||n===void 0?void 0:n.$el)}const Fe=se(Oe,64);function Me(){const{onAdd:t}=e;t&&t(),re(()=>{const n=y(),{value:s}=v;!n||!s||s.scrollTo({left:n.offsetLeft,top:0,behavior:"smooth"})})}function ae(t){if(!t)return;const{scrollLeft:n,scrollWidth:s,offsetWidth:u}=t;S.value=n<=0,_.value=n+u>=s}const De=se(t=>{ae(t.target)},64);ht(ce,{triggerRef:M(e,"trigger"),tabStyleRef:M(e,"tabStyle"),paneClassRef:M(e,"paneClass"),paneStyleRef:M(e,"paneStyle"),mergedClsPrefixRef:b,typeRef:M(e,"type"),closableRef:M(e,"closable"),valueRef:L,tabChangeIdRef:X,onBeforeLeaveRef:M(e,"onBeforeLeave"),activateTab:We,handleClose:ke,handleAdd:Me}),Dt(()=>{B(),G()}),gt(()=>{const{value:t}=g;if(!t)return;const{value:n}=b,s=`${n}-tabs-nav-scroll-wrapper--shadow-before`,u=`${n}-tabs-nav-scroll-wrapper--shadow-after`;S.value?t.classList.remove(s):t.classList.add(s),_.value?t.classList.remove(u):t.classList.add(u)});const ve=P(null);ne(L,()=>{if(e.type==="segment"){const t=ve.value;t&&re(()=>{t.classList.add("transition-disabled"),t.offsetWidth,t.classList.remove("transition-disabled")})}});const Ne={syncBarPosition:()=>{B()}},he=Z(()=>{const{value:t}=f,{type:n}=e,s={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[n],u=`${t}${s}`,{self:{barColor:E,closeIconColor:F,closeIconColorHover:N,closeIconColorPressed:Y,tabColor:He,tabBorderColor:Ge,paneTextColor:Ve,tabFontWeight:Xe,tabBorderRadius:Ue,tabFontWeightActive:Ke,colorSegment:Ye,fontWeightStrong:qe,tabColorSegment:Je,closeSize:Qe,closeIconSize:Ze,closeColorHover:et,closeColorPressed:tt,closeBorderRadius:at,[O("panePadding",t)]:nt,[O("tabPadding",u)]:rt,[O("tabGap",u)]:ot,[O("tabTextColor",n)]:it,[O("tabTextColorActive",n)]:st,[O("tabTextColorHover",n)]:lt,[O("tabTextColorDisabled",n)]:dt,[O("tabFontSize",t)]:ct},common:{cubicBezierEaseInOut:bt}}=x.value;return{"--n-bezier":bt,"--n-color-segment":Ye,"--n-bar-color":E,"--n-tab-font-size":ct,"--n-tab-text-color":it,"--n-tab-text-color-active":st,"--n-tab-text-color-disabled":dt,"--n-tab-text-color-hover":lt,"--n-pane-text-color":Ve,"--n-tab-border-color":Ge,"--n-tab-border-radius":Ue,"--n-close-size":Qe,"--n-close-icon-size":Ze,"--n-close-color-hover":et,"--n-close-color-pressed":tt,"--n-close-border-radius":at,"--n-close-icon-color":F,"--n-close-icon-color-hover":N,"--n-close-icon-color-pressed":Y,"--n-tab-color":He,"--n-tab-font-weight":Xe,"--n-tab-font-weight-active":Ke,"--n-tab-padding":rt,"--n-tab-gap":ot,"--n-pane-padding":nt,"--n-font-weight-strong":qe,"--n-tab-color-segment":Je}}),D=l?Et("tabs",Z(()=>`${f.value[0]}${e.type[0]}`),he,e):void 0;return Object.assign({mergedClsPrefix:b,mergedValue:L,renderedNames:new Set,tabsRailElRef:ve,tabsPaneWrapperRef:U,tabsElRef:m,barElRef:C,addTabInstRef:p,xScrollInstRef:v,scrollWrapperElRef:g,addTabFixed:K,tabWrapperStyle:H,handleNavResize:je,mergedSize:f,handleScroll:De,handleTabsResize:Fe,cssVars:l?void 0:he,themeClass:D==null?void 0:D.themeClass,animationDirection:fe,renderNameListRef:be,onAnimationBeforeLeave:$e,onAnimationEnter:Be,onAnimationAfterEnter:Ae,onRender:D==null?void 0:D.onRender},Ne)},render(){const{mergedClsPrefix:e,type:a,addTabFixed:r,addable:o,mergedSize:i,renderNameListRef:c,onRender:b,$slots:{default:l,prefix:x,suffix:m}}=this;b==null||b();const C=l?oe(l()).filter(f=>f.type.__TAB_PANE__===!0):[],g=l?oe(l()).filter(f=>f.type.__TAB__===!0):[],p=!g.length,v=a==="card",S=a==="segment",_=!v&&!S&&this.justifyContent;return c.value=[],d("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${a}-type`,`${e}-tabs--${i}-size`,_&&`${e}-tabs--flex`],style:this.cssVars},d("div",{class:[`${e}-tabs-nav--${a}-type`,`${e}-tabs-nav`]},Ce(x,f=>f&&d("div",{class:`${e}-tabs-nav__prefix`},f)),S?d("div",{class:`${e}-tabs-rail`,ref:"tabsRailElRef"},p?C.map((f,R)=>(c.value.push(f.props.name),d(de,Object.assign({},f.props,{internalCreatedByPane:!0,internalLeftPadded:R!==0}),f.children?{default:f.children.tab}:void 0))):g.map((f,R)=>(c.value.push(f.props.name),R===0?f:Re(f)))):d(ye,{onResize:this.handleNavResize},{default:()=>d("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},d(Gt,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:()=>{const f=d("div",{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},_?null:d("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),p?C.map((z,L)=>(c.value.push(z.props.name),le(d(de,Object.assign({},z.props,{internalCreatedByPane:!0,internalLeftPadded:L!==0&&(!_||_==="center"||_==="start"||_==="end")}),z.children?{default:z.children.tab}:void 0)))):g.map((z,L)=>(c.value.push(z.props.name),le(L!==0&&!_?Re(z):z))),!r&&o&&v?Te(o,(p?C.length:g.length)!==0):null,_?null:d("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));let R=f;return v&&o&&(R=d(ye,{onResize:this.handleTabsResize},{default:()=>f})),d("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},R,v?d("div",{class:`${e}-tabs-pad`}):null,v?null:d("div",{ref:"barElRef",class:`${e}-tabs-bar`}))}}))}),r&&o&&v?Te(o,!0):null,Ce(m,f=>f&&d("div",{class:`${e}-tabs-nav__suffix`},f))),p&&(this.animated?d("div",{ref:"tabsPaneWrapperRef",class:`${e}-tabs-pane-wrapper`},we(C,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):we(C,this.mergedValue,this.renderedNames)))}});function we(e,a,r,o,i,c,b){const l=[];return e.forEach(x=>{const{name:m,displayDirective:C,"display-directive":g}=x.props,p=S=>C===S||g===S,v=a===m;if(x.key!==void 0&&(x.key=m),v||p("show")||p("show:lazy")&&r.has(m)){r.has(m)||r.add(m);const S=!p("if");l.push(S?mt(x,[[Ct,v]]):x)}}),b?d(xt,{name:`${b}-transition`,onBeforeLeave:o,onEnter:i,onAfterEnter:c},{default:()=>l}):l}function Te(e,a){return d(de,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:a,disabled:typeof e=="object"&&e.disabled})}function Re(e){const a=yt(e);return a.props?a.props.internalLeftPadded=!0:a.props={internalLeftPadded:!0},a}function le(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}const va={name:"Page",components:{NTabs:pa,NTabPane:ca},data(){return{editor:null}},mounted(){this.editor=new ft({content:"",extensions:[ut]})}},W=e=>(Tt("data-v-cd5c6132"),e=e(),Rt(),e),ha={style:{width:"50%",margin:"50px auto"}},ga=W(()=>A("br",null,null,-1)),ma=W(()=>A("br",null,null,-1)),xa=W(()=>A("br",null,null,-1)),ya=W(()=>A("br",null,null,-1)),Ca=W(()=>A("br",null,null,-1)),Sa=W(()=>A("br",null,null,-1)),_a=W(()=>A("br",null,null,-1)),wa=W(()=>A("br",null,null,-1)),Ta=W(()=>A("br",null,null,-1)),Ra=W(()=>A("br",null,null,-1));function za(e,a,r,o,i,c){const b=ge("n-tab-pane"),l=ge("n-tabs");return _t(),wt("div",ha,[q(l,{type:"segment",animated:!0},{default:J(()=>[q(b,{name:"chap1",tab:"第一章"},{default:J(()=>[I(" 我这辈子最疯狂的事，发生在我在 Amazon 当软件工程师的时候，故事是这样的："),ga,ma,I(" 那时我和女朋友住在一起，正在家里远程工作。忽然同事给我发来了紧急消息：”我们的服务出现了 SEV 2 级别的故障！需要所有的人马上协助！“我们组的应用全挂掉了。"),xa,ya,I(" 当我还在费力的寻找修复方法的时候，忽然闻到隔壁房间的的焦味，防火报警器开始鸣叫。 ")]),_:1}),q(b,{name:"chap2",tab:"第二章"},{default:J(()=>[I(" “威尔！着火了！快来帮忙！”我听到女朋友大喊。现在一个难题在我面前——是恢复一个重要的 Amazon 服务，还是救公寓的火。"),Ca,Sa,I(" 我的脑海中忽然出现了 Amazon 著名的领导力准则”客户至上“，有很多的客户还依赖我们的服务，我不能让他们失望！所以着火也不管了，女朋友喊我也无所谓，我开始 debug 这个线上问题。 ")]),_:1}),q(b,{name:"chap3",tab:"第三章"},{default:J(()=>[I(" 但是忽然，公寓的烟味消失，火警也停了。我的女朋友走进了房间，让我震惊的是，她摘下了自己的假发，她是 Jeff Bezos（Amazon 老板）假扮的！"),_a,wa,I(" “我对你坚持顾客至上的原则感到十分骄傲”，说完，他递给我一张五美金的亚马逊礼品卡，从我家窗户翻了出去，跳上了一辆 Amazon 会员服务的小货车，一溜烟离开了。"),Ta,Ra,I("虽然现在我已不在 Amazon 工作，但我还是非常感激在哪里学的到的经验，这些经验我终身难忘。你们同意么？ ")]),_:1})]),_:1})])}const Ea=St(va,[["render",za],["__scopeId","data-v-cd5c6132"]]);export{Ea as default};
