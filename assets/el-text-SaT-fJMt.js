import{a0 as r,bc as i,a8 as s,ab as p,c,aK as m,o as u,an as d,d as f,am as y,n as x,al as _,au as S,ao as g,av as b,ax as v}from"./index-CwWRzUEN.js";import{b as C}from"./el-button-DPv6xtNt.js";const z=r({type:{type:String,values:["primary","success","info","warning","danger",""],default:""},size:{type:String,values:i,default:""},truncated:Boolean,lineClamp:{type:[String,Number]},tag:{type:String,default:"span"}}),w=s({name:"ElText"}),h=s({...w,props:z,setup(n){const a=n,l=C(),e=p("text"),o=c(()=>[e.b(),e.m(a.type),e.m(l.value),e.is("truncated",a.truncated),e.is("line-clamp",!m(a.lineClamp))]);return(t,B)=>(u(),d(g(t.tag),{class:x(_(o)),style:S({"-webkit-line-clamp":t.lineClamp})},{default:f(()=>[y(t.$slots,"default")]),_:3},8,["class","style"]))}});var k=b(h,[["__file","text.vue"]]);const K=v(k);export{K as E};
