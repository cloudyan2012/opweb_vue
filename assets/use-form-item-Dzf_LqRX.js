import{m as f,O as c,j as t,am as z,C as r,bO as y,P as v,I as p,Q as I,o as F,Y as h,br as w,bD as D}from"./index-pEYPTcvA.js";const _=({from:o,replacement:e,scope:s,version:u,ref:l,type:a="API"},i)=>{f(()=>c(i),n=>{},{immediate:!0})},b=o=>{const e=z();return t(()=>{var s,u;return(u=(s=e==null?void 0:e.proxy)==null?void 0:s.$props)==null?void 0:u[o]})},j=(o,e={})=>{const s=r(void 0),u=e.prop?s:b("size"),l=e.global?s:y(),a=e.form?{size:void 0}:v(p,void 0),i=e.formItem?{size:void 0}:v(I,void 0);return t(()=>u.value||c(o)||(i==null?void 0:i.size)||(a==null?void 0:a.size)||l.value||"")},K=o=>{const e=b("disabled"),s=v(p,void 0);return t(()=>e.value||c(o)||(s==null?void 0:s.disabled)||!1)},L=()=>{const o=v(p,void 0),e=v(I,void 0);return{form:o,formItem:e}},O=(o,{formItemContext:e,disableIdGeneration:s,disableIdManagement:u})=>{s||(s=r(!1)),u||(u=r(!1));const l=r();let a;const i=t(()=>{var n;return!!(!(o.label||o.ariaLabel)&&e&&e.inputIds&&((n=e.inputIds)==null?void 0:n.length)<=1)});return F(()=>{a=f([w(o,"id"),s],([n,m])=>{const d=n??(m?void 0:h().value);d!==l.value&&(e!=null&&e.removeInputId&&(l.value&&e.removeInputId(l.value),!(u!=null&&u.value)&&!m&&d&&e.addInputId(d)),l.value=d)},{immediate:!0})}),D(()=>{a&&a(),e!=null&&e.removeInputId&&l.value&&e.removeInputId(l.value)}),{isLabeledByFormItem:i,inputId:l}};export{_ as a,L as b,K as c,O as d,j as u};
