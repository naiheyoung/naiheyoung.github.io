import{Q as U,u as X,R as Y,D as Z,z as d,B as u,P as ee,E as l,C as s,O as oe,T as re,G as te,F as P,H as ne}from"./light-66b14548.js";import{c as w,o as de,s as ae,d as se,j as g}from"./index-2ee9c01d.js";import{r as m,c as $}from"./create-key-26e23704.js";import{c as ie,b as le}from"./Close-5305f2f6.js";function ke(e){if(e!=null)return typeof e=="number"?`${e}px`:e.endsWith("px")?e:`${e}px`}function ce(e,a){const r=e.trim().split(/\s+/g),o={top:r[0]};switch(r.length){case 1:o.right=r[0],o.bottom=r[0],o.left=r[0];break;case 2:o.right=r[1],o.left=r[1],o.bottom=r[0];break;case 3:o.right=r[1],o.bottom=r[2],o.left=r[1];break;case 4:o.right=r[1],o.bottom=r[2],o.left=r[3];break;default:throw new Error("[seemly/getMargin]:"+e+" is not a valid value.")}return a===void 0?o:o[a]}function be(e){return Object.keys(e)}function fe(e,a){if(e===void 0)return!1;if(a){const{context:{ids:r}}=a;return r.has(e)}return U(e)!==null}function ge(e,a,r){if(!a)return;const o=X(),c=w(()=>{const{value:i}=a;if(!i)return;const n=i[e];if(n)return n}),b=()=>{ae(()=>{const{value:i}=r,n=`${i}${e}Rtl`;if(fe(n,o))return;const{value:t}=c;t&&t.style.mount({id:n,head:!0,anchorMetaName:Y,props:{bPrefix:i?`.${i}-`:void 0},ssr:o})})};return o?b():de(b),c}const pe={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeIconSize:"18px",closeSize:"22px"},me=e=>{const{primaryColor:a,borderRadius:r,lineHeight:o,fontSize:c,cardColor:b,textColor2:i,textColor1:n,dividerColor:t,fontWeightStrong:f,closeIconColor:v,closeIconColorHover:h,closeIconColorPressed:x,closeColorHover:z,closeColorPressed:C,modalColor:S,boxShadow1:y,popoverColor:k,actionColor:p}=e;return Object.assign(Object.assign({},pe),{lineHeight:o,color:b,colorModal:S,colorPopover:k,colorTarget:a,colorEmbedded:p,colorEmbeddedModal:p,colorEmbeddedPopover:p,textColor:i,titleTextColor:n,borderColor:t,actionColor:p,titleFontWeight:f,closeColorHover:z,closeColorPressed:C,closeBorderRadius:r,closeIconColor:v,closeIconColorHover:h,closeIconColorPressed:x,fontSizeSmall:c,fontSizeMedium:c,fontSizeLarge:c,fontSizeHuge:c,boxShadow:y,borderRadius:r})},ue={name:"Card",common:Z,self:me},ve=ue,he=d([u("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[ee({background:"var(--n-color-modal)"}),l("hoverable",[d("&:hover","box-shadow: var(--n-box-shadow);")]),l("content-segmented",[d(">",[s("content",{paddingTop:"var(--n-padding-bottom)"})])]),l("content-soft-segmented",[d(">",[s("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),l("footer-segmented",[d(">",[s("footer",{paddingTop:"var(--n-padding-bottom)"})])]),l("footer-soft-segmented",[d(">",[s("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),d(">",[u("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[s("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),s("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),s("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),s("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),s("content","flex: 1; min-width: 0;"),s("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[d("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),s("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),u("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[d("img",`
 display: block;
 width: 100%;
 `)]),l("bordered",`
 border: 1px solid var(--n-border-color);
 `,[d("&:target","border-color: var(--n-color-target);")]),l("action-segmented",[d(">",[s("action",[d("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),l("content-segmented, content-soft-segmented",[d(">",[s("content",{transition:"border-color 0.3s var(--n-bezier)"},[d("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),l("footer-segmented, footer-soft-segmented",[d(">",[s("footer",{transition:"border-color 0.3s var(--n-bezier)"},[d("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),l("embedded",`
 background-color: var(--n-color-embedded);
 `)]),oe(u("card",`
 background: var(--n-color-modal);
 `,[l("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),re(u("card",`
 background: var(--n-color-popover);
 `,[l("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),R={title:String,contentStyle:[Object,String],headerStyle:[Object,String],headerExtraStyle:[Object,String],footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:{type:Boolean,default:!1},hoverable:Boolean,role:String,onClose:[Function,Array]},$e=be(R),xe=Object.assign(Object.assign({},P.props),R),we=se({name:"Card",props:xe,setup(e){const a=()=>{const{onClose:f}=e;f&&ie(f)},{inlineThemeDisabled:r,mergedClsPrefixRef:o,mergedRtlRef:c}=te(e),b=P("Card","-card",he,ve,e,o),i=ge("Card",c,o),n=w(()=>{const{size:f}=e,{self:{color:v,colorModal:h,colorTarget:x,textColor:z,titleTextColor:C,titleFontWeight:S,borderColor:y,actionColor:k,borderRadius:p,lineHeight:E,closeIconColor:T,closeIconColorHover:B,closeIconColorPressed:M,closeColorHover:O,closeColorPressed:_,closeBorderRadius:j,closeIconSize:H,closeSize:F,boxShadow:I,colorPopover:L,colorEmbedded:N,colorEmbeddedModal:W,colorEmbeddedPopover:A,[$("padding",f)]:V,[$("fontSize",f)]:D,[$("titleFontSize",f)]:K},common:{cubicBezierEaseInOut:q}}=b.value,{top:G,left:Q,bottom:J}=ce(V);return{"--n-bezier":q,"--n-border-radius":p,"--n-color":v,"--n-color-modal":h,"--n-color-popover":L,"--n-color-embedded":N,"--n-color-embedded-modal":W,"--n-color-embedded-popover":A,"--n-color-target":x,"--n-text-color":z,"--n-line-height":E,"--n-action-color":k,"--n-title-text-color":C,"--n-title-font-weight":S,"--n-close-icon-color":T,"--n-close-icon-color-hover":B,"--n-close-icon-color-pressed":M,"--n-close-color-hover":O,"--n-close-color-pressed":_,"--n-border-color":y,"--n-box-shadow":I,"--n-padding-top":G,"--n-padding-bottom":J,"--n-padding-left":Q,"--n-font-size":D,"--n-title-font-size":K,"--n-close-size":F,"--n-close-icon-size":H,"--n-close-border-radius":j}}),t=r?ne("card",w(()=>e.size[0]),n,e):void 0;return{rtlEnabled:i,mergedClsPrefix:o,mergedTheme:b,handleCloseClick:a,cssVars:r?void 0:n,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){const{segmented:e,bordered:a,hoverable:r,mergedClsPrefix:o,rtlEnabled:c,onRender:b,embedded:i,$slots:n}=this;return b==null||b(),g("div",{class:[`${o}-card`,this.themeClass,i&&`${o}-card--embedded`,{[`${o}-card--rtl`]:c,[`${o}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${o}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${o}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${o}-card--bordered`]:a,[`${o}-card--hoverable`]:r}],style:this.cssVars,role:this.role},m(n.cover,t=>t&&g("div",{class:`${o}-card-cover`,role:"none"},t)),m(n.header,t=>t||this.title||this.closable?g("div",{class:`${o}-card-header`,style:this.headerStyle},g("div",{class:`${o}-card-header__main`,role:"heading"},t||this.title),m(n["header-extra"],f=>f&&g("div",{class:`${o}-card-header__extra`,style:this.headerExtraStyle},f)),this.closable?g(le,{clsPrefix:o,class:`${o}-card-header__close`,onClick:this.handleCloseClick,absolute:!0}):null):null),m(n.default,t=>t&&g("div",{class:`${o}-card__content`,style:this.contentStyle,role:"none"},t)),m(n.footer,t=>t&&[g("div",{class:`${o}-card__footer`,style:this.footerStyle,role:"none"},t)]),m(n.action,t=>t&&g("div",{class:`${o}-card__action`,role:"none"},t)))}});export{we as N,R as a,$e as b,ve as c,ce as g,be as k,ke as p,ge as u};
