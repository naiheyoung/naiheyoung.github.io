import{O as u,C as a,F as o}from"./index-2ee9c01d.js";function n(e){return e.some(r=>u(r)?!(r.type===a||r.type===o&&!n(r.children)):!0)?e:null}function f(e,r){return e&&n(e())||r()}function l(e,r,t){return e&&n(e(r))||t(r)}function c(e,r){const t=e&&n(e());return r(t||null)}function p(e){return!(e&&n(e()))}function i(e,r){return e+(r==="default"?"":r.replace(/^[a-z]/,t=>t.toUpperCase()))}i("abc","def");export{f as a,l as b,i as c,p as i,c as r};
