import{d as R,c as V,j as y,u as H,F as A,_ as T,r as j,e as F,B as _,y as d,z as N,D as S,E as x,A as a,H as z,G as L,f as B,M as O,N as G}from"./index-d66b244c.js";import{D as Z,z as C,B as K,G as W,F as E}from"./light-38466979.js";import{c as q}from"./create-key-c2040c72.js";import{p as w,N as J}from"./Card-8dc968b7.js";import{u as Q}from"./use-houdini-165727f7.js";import{N as U}from"./Divider-ee66ad11.js";import"./Close-d317fad0.js";import"./is-browser-fc34c9a6.js";const X=e=>{const{heightSmall:n,heightMedium:r,heightLarge:t,borderRadius:o}=e;return{color:"#eee",colorEnd:"#ddd",borderRadius:o,heightSmall:n,heightMedium:r,heightLarge:t}},Y={name:"Skeleton",common:Z,self:X},ee=C([K("skeleton",`
 height: 1em;
 width: 100%;
 transition: background-color .3s var(--n-bezier);
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 animation: 2s skeleton-loading infinite cubic-bezier(0.36, 0, 0.64, 1);
 background-color: var(--n-color-start);
 `),C("@keyframes skeleton-loading",`
 0% {
 background: var(--n-color-start);
 }
 40% {
 background: var(--n-color-end);
 }
 80% {
 background: var(--n-color-start);
 }
 100% {
 background: var(--n-color-start);
 }
 `)]),te=Object.assign(Object.assign({},E.props),{text:Boolean,round:Boolean,circle:Boolean,height:[String,Number],width:[String,Number],size:String,repeat:{type:Number,default:1},animated:{type:Boolean,default:!0},sharp:{type:Boolean,default:!0}}),oe=R({name:"Skeleton",inheritAttrs:!1,props:te,setup(e){Q();const{mergedClsPrefixRef:n}=W(e),r=E("Skeleton","-skeleton",ee,Y,e,n);return{mergedClsPrefix:n,style:V(()=>{var t,o;const l=r.value,{common:{cubicBezierEaseInOut:i}}=l,c=l.self,{color:u,colorEnd:b,borderRadius:D}=c;let m;const{circle:h,sharp:I,round:M,width:s,height:p,size:k,text:v,animated:P}=e;k!==void 0&&(m=c[q("height",k)]);const f=h?(t=s??p)!==null&&t!==void 0?t:m:s,g=(o=h?s??p:p)!==null&&o!==void 0?o:m;return{display:v?"inline-block":"",verticalAlign:v?"-0.125em":"",borderRadius:h?"50%":M?"4096px":I?"":D,width:typeof f=="number"?w(f):f,height:typeof g=="number"?w(g):g,animation:P?"":"none","--n-bezier":i,"--n-color-start":u,"--n-color-end":b}})}},render(){const{repeat:e,style:n,mergedClsPrefix:r,$attrs:t}=this,o=y("div",H({class:`${r}-skeleton`,style:n},t));return e>1?y(A,null,Array.apply(null,{length:e}).map(l=>[o,`
`])):o}});const ne={name:"About",components:{NCard:J,NSkeleton:oe,NDivider:U},setup(){let e=j(!0),n=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;const r=t=>{if(n.test(t)){let o=document.createElement("a");o.href=`mailto:${t}`,o.click()}else console.log(!1)};return F(()=>{setTimeout(function(){e.value=!1},500)}),{skeletonShow:e,toMe:r}}},$=e=>(O("data-v-131ef89d"),e=e(),G(),e),re=$(()=>a("h1",null,"关于CodeSheep",-1)),se={class:"brand"},ae=$(()=>a("div",{"data-brand":""},null,-1)),le=[ae];function ie(e,n,r,t,o,l){const i=_("NSkeleton"),c=_("NCard"),u=_("NDivider");return d(),N("div",null,[re,S(c,{bordered:!1,hoverable:""},{default:x(()=>[t.skeletonShow?(d(),z(i,{key:0,text:"",repeat:5,width:"100%"})):L("",!0),t.skeletonShow?(d(),z(i,{key:1,text:"",width:"40%"})):(d(),N(A,{key:2},[B(" 随机一段废话因何而发生?本人也是经过了深思熟虑,在每个日日夜夜思考这个问题. 经过上述讨论, 我认为, 我们一般认为, 抓住了问题的关键, 其他一切则会迎刃而解.随机一段废话似乎是一种巧合，但如果我们从一个更大的角度看待问题，这似乎是一种不可避免的事实. 总结的来说, 既然如此, 就我个人来说, 随机一段废话对我的意义, 不能不说非常重大. 这种事实对本人来说意义重大, 相信对这个世界也是有一随机一段废话, 到底应该如何实现. 歌德曾经说过, 决定一个人的一生，以及整个命运的，只是一瞬之间。带着这句话, 我们还要更加慎重的审视这个问题: 博说过一句著名的话, 一次失败，只是证明我们成功的决心还够坚强。 维这句话看似简单，但其中的阴郁不禁让人深思. 这是不可避免的. 随机一段废话的发生, 到底需要如何做到, 不随机一段废话的发生, 又会如何产生. 总结的来说, 随机一段废话似乎是一种 ")],64))]),_:1}),S(u,null,{default:x(()=>[B("联系我")]),_:1}),a("div",se,[a("ul",null,[a("li",{class:"brand-item",onClick:n[0]||(n[0]=b=>t.toMe("naiheemail@yeah.net"))},le)])])])}const _e=T(ne,[["render",ie],["__scopeId","data-v-131ef89d"]]);export{_e as default};
