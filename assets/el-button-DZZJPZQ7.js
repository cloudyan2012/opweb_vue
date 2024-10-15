import{J as G,af as c,E as d,G as O,I as _,bj as Q,aw as y,bk as E,bl as K,a8 as Z,bm as q,a9 as w,b1 as H,bn as W,a0 as X,bo as Y,Q as M,R as oo,U as x,ba as eo,T as to,a1 as P,bp as ao,Z as S,aa as f,ai as k,aj as z,ab as $,ad as no,ag as h,al as F,ae as N,ak as C,ac as D,am as so,at as U,aD as lo,aE as ro,av as io,aR as co}from"./index-BaN7LsvM.js";const uo=({from:o,replacement:t,scope:e,version:a,ref:s,type:l="API"},n)=>{G(()=>c(n),i=>{},{immediate:!0})},j=o=>{const t=O();return d(()=>{var e,a;return(a=(e=t==null?void 0:t.proxy)==null?void 0:e.$props)==null?void 0:a[o]})},vo=(o,t={})=>{const e=_(void 0),a=t.prop?e:j("size"),s=t.global?e:Q(),l=t.form?{size:void 0}:y(E,void 0),n=t.formItem?{size:void 0}:y(K,void 0);return d(()=>a.value||c(o)||(n==null?void 0:n.size)||(l==null?void 0:l.size)||s.value||"")},R=o=>{const t=j("disabled"),e=y(E,void 0);return d(()=>t.value||c(o)||(e==null?void 0:e.disabled)||!1)},bo=()=>{const o=y(E,void 0),t=y(K,void 0);return{form:o,formItem:t}},Co=(o,{formItemContext:t,disableIdGeneration:e,disableIdManagement:a})=>{e||(e=_(!1)),a||(a=_(!1));const s=_();let l;const n=d(()=>{var i;return!!(!(o.label||o.ariaLabel)&&t&&t.inputIds&&((i=t.inputIds)==null?void 0:i.length)<=1)});return Z(()=>{l=G([w(o,"id"),e],([i,v])=>{const u=i??(v?void 0:q().value);u!==s.value&&(t!=null&&t.removeInputId&&(s.value&&t.removeInputId(s.value),!(a!=null&&a.value)&&!v&&u&&t.addInputId(u)),s.value=u)},{immediate:!0})}),H(()=>{l&&l(),t!=null&&t.removeInputId&&s.value&&t.removeInputId(s.value)}),{isLabeledByFormItem:n,inputId:s}},A=Symbol("buttonGroupContextKey"),fo=(o,t)=>{uo({from:"type.text",replacement:"link",version:"3.0.0",scope:"props",ref:"https://element-plus.org/en-US/component/button.html#button-attributes"},d(()=>o.type==="text"));const e=y(A,void 0),a=W("button"),{form:s}=bo(),l=vo(d(()=>e==null?void 0:e.size)),n=R(),i=_(),v=X(),u=d(()=>o.type||(e==null?void 0:e.type)||""),m=d(()=>{var r,p,g;return(g=(p=o.autoInsertSpace)!=null?p:(r=a.value)==null?void 0:r.autoInsertSpace)!=null?g:!1}),B=d(()=>o.tag==="button"?{ariaDisabled:n.value||o.loading,disabled:n.value||o.loading,autofocus:o.autofocus,type:o.nativeType}:{}),I=d(()=>{var r;const p=(r=v.default)==null?void 0:r.call(v);if(m.value&&(p==null?void 0:p.length)===1){const g=p[0];if((g==null?void 0:g.type)===Y){const J=g.children;return new RegExp("^\\p{Unified_Ideograph}{2}$","u").test(J.trim())}}return!1});return{_disabled:n,_size:l,_type:u,_ref:i,_props:B,shouldAddSpace:I,handleClick:r=>{if(n.value||o.loading){r.stopPropagation();return}o.nativeType==="reset"&&(s==null||s.resetFields()),t("click",r)}}},po=["default","primary","success","warning","info","danger","text",""],mo=["button","submit","reset"],V=M({size:oo,disabled:Boolean,type:{type:String,values:po,default:""},icon:{type:x},nativeType:{type:String,values:mo,default:"button"},loading:Boolean,loadingIcon:{type:x,default:()=>eo},plain:Boolean,text:Boolean,link:Boolean,bg:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean,color:String,dark:Boolean,autoInsertSpace:{type:Boolean,default:void 0},tag:{type:to([String,Object]),default:"button"}}),go={click:o=>o instanceof MouseEvent};function b(o,t=20){return o.mix("#141414",t).toString()}function yo(o){const t=R(),e=P("button");return d(()=>{let a={},s=o.color;if(s){const l=s.match(/var\((.*?)\)/);l&&(s=window.getComputedStyle(window.document.documentElement).getPropertyValue(l[1]));const n=new ao(s),i=o.dark?n.tint(20).toString():b(n,20);if(o.plain)a=e.cssVarBlock({"bg-color":o.dark?b(n,90):n.tint(90).toString(),"text-color":s,"border-color":o.dark?b(n,50):n.tint(50).toString(),"hover-text-color":`var(${e.cssVarName("color-white")})`,"hover-bg-color":s,"hover-border-color":s,"active-bg-color":i,"active-text-color":`var(${e.cssVarName("color-white")})`,"active-border-color":i}),t.value&&(a[e.cssVarBlockName("disabled-bg-color")]=o.dark?b(n,90):n.tint(90).toString(),a[e.cssVarBlockName("disabled-text-color")]=o.dark?b(n,50):n.tint(50).toString(),a[e.cssVarBlockName("disabled-border-color")]=o.dark?b(n,80):n.tint(80).toString());else{const v=o.dark?b(n,30):n.tint(30).toString(),u=n.isDark()?`var(${e.cssVarName("color-white")})`:`var(${e.cssVarName("color-black")})`;if(a=e.cssVarBlock({"bg-color":s,"text-color":u,"border-color":s,"hover-bg-color":v,"hover-text-color":u,"hover-border-color":v,"active-bg-color":i,"active-border-color":i}),t.value){const m=o.dark?b(n,50):n.tint(50).toString();a[e.cssVarBlockName("disabled-bg-color")]=m,a[e.cssVarBlockName("disabled-text-color")]=o.dark?"rgba(255, 255, 255, 0.5)":`var(${e.cssVarName("color-white")})`,a[e.cssVarBlockName("disabled-border-color")]=m}}}return a})}const ko=S({name:"ElButton"}),_o=S({...ko,props:V,emits:go,setup(o,{expose:t,emit:e}){const a=o,s=yo(a),l=P("button"),{_ref:n,_size:i,_type:v,_disabled:u,_props:m,shouldAddSpace:B,handleClick:I}=fo(a,e),T=d(()=>[l.b(),l.m(v.value),l.m(i.value),l.is("disabled",u.value),l.is("loading",a.loading),l.is("plain",a.plain),l.is("round",a.round),l.is("circle",a.circle),l.is("text",a.text),l.is("link",a.link),l.is("has-bg",a.bg)]);return t({ref:n,size:i,type:v,disabled:u,shouldAddSpace:B}),(r,p)=>(f(),k(C(r.tag),so({ref_key:"_ref",ref:n},c(m),{class:c(T),style:c(s),onClick:c(I)}),{default:z(()=>[r.loading?(f(),$(no,{key:0},[r.$slots.loading?h(r.$slots,"loading",{key:0}):(f(),k(c(F),{key:1,class:N(c(l).is("loading"))},{default:z(()=>[(f(),k(C(r.loadingIcon)))]),_:1},8,["class"]))],64)):r.icon||r.$slots.icon?(f(),k(c(F),{key:1},{default:z(()=>[r.icon?(f(),k(C(r.icon),{key:0})):h(r.$slots,"icon",{key:1})]),_:3})):D("v-if",!0),r.$slots.default?(f(),$("span",{key:2,class:N({[c(l).em("text","expand")]:c(B)})},[h(r.$slots,"default")],2)):D("v-if",!0)]),_:3},16,["class","style","onClick"]))}});var Bo=U(_o,[["__file","button.vue"]]);const ho={size:V.size,type:V.type},So=S({name:"ElButtonGroup"}),Io=S({...So,props:ho,setup(o){const t=o;lo(A,ro({size:w(t,"size"),type:w(t,"type")}));const e=P("button");return(a,s)=>(f(),$("div",{class:N(c(e).b("group"))},[h(a.$slots,"default")],2))}});var L=U(Io,[["__file","button-group.vue"]]);const wo=io(Bo,{ButtonGroup:L});co(L);export{wo as E,Co as a,vo as b,R as c,uo as d,bo as u};
