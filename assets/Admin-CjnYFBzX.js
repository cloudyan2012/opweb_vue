import{_ as h,r as i,o as b,c as g,w as c,a as d,b as x,d as t,e as D,f as m}from"./index-B9js6EXF.js";import{E as C,a as E}from"./el-tag--LHTlc1d.js";import{E as k}from"./el-button-eLiurxAK.js";import"./use-form-item-CjYdFEod.js";const w={setup(){const p=i(new Map),l=i([]);return b(async()=>{try{const[e,a]=await Promise.all([d.get("/exam"),d.get("/user")]);a.forEach(({uid:o,uname:n})=>p.value.set(o,n)),l.value=e.flatMap(({uid:o,data:n})=>n.map(r=>({id:o,name:p.value.get(o)||"未知",...r})))}catch(e){console.error("数据获取失败:",e.message||e)}}),{tableData:l,handleChange:e=>{console.log("修改",e)},handleDelete:e=>{console.log("删除",e)}}}},v={style:{"white-space":"nowrap"}};function y(p,l,_,s,f,e){const a=E,o=k,n=C;return x(),g(n,{data:s.tableData,stripe:"",height:"500"},{default:c(()=>[t(a,{prop:"id",label:"ID"}),t(a,{fixed:"",prop:"name",label:"Name"}),t(a,{fixed:"",prop:"ExamDate",label:"Date"}),t(a,{prop:"Chinese",label:"语文"}),t(a,{prop:"Mathematics",label:"数学"}),t(a,{prop:"English",label:"英语"}),t(a,{label:"操 作"},{default:c(r=>[D("span",v,[t(o,{size:"small",style:{"margin-left":"0px"},onClick:u=>s.handleChange(r.$index)},{default:c(()=>l[0]||(l[0]=[m("修改")])),_:2},1032,["onClick"]),t(o,{size:"small",type:"danger",onClick:u=>s.handleDelete(r.$index)},{default:c(()=>l[1]||(l[1]=[m("删除")])),_:2},1032,["onClick"])])]),_:1})]),_:1},8,["data"])}const T=h(w,[["render",y]]);export{T as default};
