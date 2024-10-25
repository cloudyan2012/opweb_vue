import{c as f,a_ as K,br as j,r as M,aP as U,bs as q,g as J,aM as O,aN as z,G as R,h as W,q as x,bt as X,m as _,o as b,z as y,d as S,a as N,F as Y,D as B,A as i,E as I,n as V,aY as C,aX as P,J as H,P as T,b0 as L,T as Q,aW as E,S as Z,b9 as tt}from"./index-2n8qcZsZ.js";import{d as ot,a as et,c as at,u as G}from"./el-text-Dzxlo-G7.js";const D=Symbol("buttonGroupContextKey"),nt=(t,r)=>{ot({from:"type.text",replacement:"link",version:"3.0.0",scope:"props",ref:"https://element-plus.org/en-US/component/button.html#button-attributes"},f(()=>t.type==="text"));const a=K(D,void 0),e=j("button"),{form:l}=et(),s=at(f(()=>a==null?void 0:a.size)),o=G(),c=M(),u=U(),g=f(()=>t.type||(a==null?void 0:a.type)||""),v=f(()=>{var n,m,p;return(p=(m=t.autoInsertSpace)!=null?m:(n=e.value)==null?void 0:n.autoInsertSpace)!=null?p:!1}),k=f(()=>t.tag==="button"?{ariaDisabled:o.value||t.loading,disabled:o.value||t.loading,autofocus:t.autofocus,type:t.nativeType}:{}),h=f(()=>{var n;const m=(n=u.default)==null?void 0:n.call(u);if(v.value&&(m==null?void 0:m.length)===1){const p=m[0];if((p==null?void 0:p.type)===q){const A=p.children;return new RegExp("^\\p{Unified_Ideograph}{2}$","u").test(A.trim())}}return!1});return{_disabled:o,_size:s,_type:g,_ref:c,_props:k,shouldAddSpace:h,handleClick:n=>{if(o.value||t.loading){n.stopPropagation();return}t.nativeType==="reset"&&(l==null||l.resetFields()),r("click",n)}}},st=["default","primary","success","warning","info","danger","text",""],lt=["button","submit","reset"],$=J({size:O,disabled:Boolean,type:{type:String,values:st,default:""},icon:{type:z},nativeType:{type:String,values:lt,default:"button"},loading:Boolean,loadingIcon:{type:z,default:()=>R},plain:Boolean,text:Boolean,link:Boolean,bg:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean,color:String,dark:Boolean,autoInsertSpace:{type:Boolean,default:void 0},tag:{type:W([String,Object]),default:"button"}}),rt={click:t=>t instanceof MouseEvent};function d(t,r=20){return t.mix("#141414",r).toString()}function it(t){const r=G(),a=x("button");return f(()=>{let e={},l=t.color;if(l){const s=l.match(/var\((.*?)\)/);s&&(l=window.getComputedStyle(window.document.documentElement).getPropertyValue(s[1]));const o=new X(l),c=t.dark?o.tint(20).toString():d(o,20);if(t.plain)e=a.cssVarBlock({"bg-color":t.dark?d(o,90):o.tint(90).toString(),"text-color":l,"border-color":t.dark?d(o,50):o.tint(50).toString(),"hover-text-color":`var(${a.cssVarName("color-white")})`,"hover-bg-color":l,"hover-border-color":l,"active-bg-color":c,"active-text-color":`var(${a.cssVarName("color-white")})`,"active-border-color":c}),r.value&&(e[a.cssVarBlockName("disabled-bg-color")]=t.dark?d(o,90):o.tint(90).toString(),e[a.cssVarBlockName("disabled-text-color")]=t.dark?d(o,50):o.tint(50).toString(),e[a.cssVarBlockName("disabled-border-color")]=t.dark?d(o,80):o.tint(80).toString());else{const u=t.dark?d(o,30):o.tint(30).toString(),g=o.isDark()?`var(${a.cssVarName("color-white")})`:`var(${a.cssVarName("color-black")})`;if(e=a.cssVarBlock({"bg-color":l,"text-color":g,"border-color":l,"hover-bg-color":u,"hover-text-color":g,"hover-border-color":u,"active-bg-color":c,"active-border-color":c}),r.value){const v=t.dark?d(o,50):o.tint(50).toString();e[a.cssVarBlockName("disabled-bg-color")]=v,e[a.cssVarBlockName("disabled-text-color")]=t.dark?"rgba(255, 255, 255, 0.5)":`var(${a.cssVarName("color-white")})`,e[a.cssVarBlockName("disabled-border-color")]=v}}}return e})}const ct=_({name:"ElButton"}),ut=_({...ct,props:$,emits:rt,setup(t,{expose:r,emit:a}){const e=t,l=it(e),s=x("button"),{_ref:o,_size:c,_type:u,_disabled:g,_props:v,shouldAddSpace:k,handleClick:h}=nt(e,a),w=f(()=>[s.b(),s.m(u.value),s.m(c.value),s.is("disabled",g.value),s.is("loading",e.loading),s.is("plain",e.plain),s.is("round",e.round),s.is("circle",e.circle),s.is("text",e.text),s.is("link",e.link),s.is("has-bg",e.bg)]);return r({ref:o,size:c,type:u,disabled:g,shouldAddSpace:k}),(n,m)=>(b(),y(C(n.tag),H({ref_key:"_ref",ref:o},i(v),{class:i(w),style:i(l),onClick:i(h)}),{default:S(()=>[n.loading?(b(),N(Y,{key:0},[n.$slots.loading?B(n.$slots,"loading",{key:0}):(b(),y(i(I),{key:1,class:V(i(s).is("loading"))},{default:S(()=>[(b(),y(C(n.loadingIcon)))]),_:1},8,["class"]))],64)):n.icon||n.$slots.icon?(b(),y(i(I),{key:1},{default:S(()=>[n.icon?(b(),y(C(n.icon),{key:0})):B(n.$slots,"icon",{key:1})]),_:3})):P("v-if",!0),n.$slots.default?(b(),N("span",{key:2,class:V({[i(s).em("text","expand")]:i(k)})},[B(n.$slots,"default")],2)):P("v-if",!0)]),_:3},16,["class","style","onClick"]))}});var dt=T(ut,[["__file","button.vue"]]);const bt={size:$.size,type:$.type},ft=_({name:"ElButtonGroup"}),gt=_({...ft,props:bt,setup(t){const r=t;L(D,Q({size:E(r,"size"),type:E(r,"type")}));const a=x("button");return(e,l)=>(b(),N("div",{class:V(i(a).b("group"))},[B(e.$slots,"default")],2))}});var F=T(gt,[["__file","button-group.vue"]]);const pt=Z(dt,{ButtonGroup:F});tt(F);export{pt as E};