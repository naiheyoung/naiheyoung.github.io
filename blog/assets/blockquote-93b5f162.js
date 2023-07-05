import{D as f,B as b,z as C,E as B,G as z,F as m,H as T}from"./light-38466979.js";import{d as k,c as q,j as P}from"./index-d66b244c.js";const W={headerFontSize1:"30px",headerFontSize2:"22px",headerFontSize3:"18px",headerFontSize4:"16px",headerFontSize5:"16px",headerFontSize6:"16px",headerMargin1:"28px 0 20px 0",headerMargin2:"28px 0 20px 0",headerMargin3:"28px 0 20px 0",headerMargin4:"28px 0 18px 0",headerMargin5:"28px 0 18px 0",headerMargin6:"28px 0 18px 0",headerPrefixWidth1:"16px",headerPrefixWidth2:"16px",headerPrefixWidth3:"12px",headerPrefixWidth4:"12px",headerPrefixWidth5:"12px",headerPrefixWidth6:"12px",headerBarWidth1:"4px",headerBarWidth2:"4px",headerBarWidth3:"3px",headerBarWidth4:"3px",headerBarWidth5:"3px",headerBarWidth6:"3px",pMargin:"16px 0 16px 0",liMargin:".25em 0 0 0",olPadding:"0 0 0 2em",ulPadding:"0 0 0 2em"},v=t=>{const{primaryColor:e,textColor2:o,borderColor:l,lineHeight:i,fontSize:r,borderRadiusSmall:s,dividerColor:d,fontWeightStrong:h,textColor1:a,textColor3:n,infoColor:x,warningColor:p,errorColor:c,successColor:g,codeColor:u}=t;return Object.assign(Object.assign({},W),{aTextColor:e,blockquoteTextColor:o,blockquotePrefixColor:l,blockquoteLineHeight:i,blockquoteFontSize:r,codeBorderRadius:s,liTextColor:o,liLineHeight:i,liFontSize:r,hrColor:d,headerFontWeight:h,headerTextColor:a,pTextColor:o,pTextColor1Depth:a,pTextColor2Depth:o,pTextColor3Depth:n,pLineHeight:i,pFontSize:r,headerBarColor:e,headerBarColorPrimary:e,headerBarColorInfo:x,headerBarColorError:c,headerBarColorWarning:p,headerBarColorSuccess:g,textColor:o,textColor1Depth:a,textColor2Depth:o,textColor3Depth:n,textColorPrimary:e,textColorInfo:x,textColorSuccess:g,textColorWarning:p,textColorError:c,codeTextColor:o,codeColor:u,codeBorder:"1px solid #0000"})},S={name:"Typography",common:f,self:v},y=S,F=b("blockquote",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 margin: 0;
 margin-top: 12px;
 margin-bottom: 12px;
 box-sizing: border-box;
 padding-left: 12px;
 border-left: 4px solid var(--n-prefix-color);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[C("&:first-child",{marginTop:0}),C("&:last-child",{marginBottom:0}),B("align-text",{marginLeft:"-16px"})]),M=Object.assign(Object.assign({},m.props),{alignText:Boolean}),R=k({name:"Blockquote",props:M,setup(t){const{mergedClsPrefixRef:e,inlineThemeDisabled:o}=z(t),l=m("Typography","-blockquote",F,y,t,e),i=q(()=>{const{common:{cubicBezierEaseInOut:s},self:{blockquoteTextColor:d,blockquotePrefixColor:h,blockquoteLineHeight:a,blockquoteFontSize:n}}=l.value;return{"--n-bezier":s,"--n-font-size":n,"--n-line-height":a,"--n-prefix-color":h,"--n-text-color":d}}),r=o?T("blockquote",void 0,i,t):void 0;return{mergedClsPrefix:e,cssVars:o?void 0:i,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var t;const{mergedClsPrefix:e}=this;return(t=this.onRender)===null||t===void 0||t.call(this),P("blockquote",{class:[`${e}-blockquote`,this.themeClass,this.alignText&&`${e}-blockquote--align-text`],style:this.cssVars},this.$slots)}});export{R as N};
