import{_ as C,r as g,c as x,w as y,a as w,b as l,d as a,e as f,F as k,o as E,f as r,t as u,n as b}from"./index-ldsxaBnl.js";import{E as N}from"./el-text-BxXqzteo.js";import{E as V,a as z,b as D}from"./el-input-CssNE4dH.js";import{E as L}from"./el-button-DlAZxydk.js";const S={setup(){const d=g(""),e=g(JSON.parse(localStorage.getItem("todoList"))||[]),i=t=>window.confirm("确定执行删除操作吗？"),o=()=>{const t=d.value.trim();if(!t)return alert("内容不能为空");e.value.unshift({content:t,done:!1}),d.value=""},p=t=>{t>=0&&t<e.value.length&&(e.value[t].done=!e.value[t].done)},_=t=>{i()&&t>=0&&t<e.value.length&&e.value.splice(t,1)},s=()=>{i()&&(e.value=e.value.filter(t=>!t.done))},c=x(()=>e.value.reduce((t,m)=>t+(m.done?1:0),0));return y(()=>{try{localStorage.setItem("todoList",JSON.stringify(e.value))}catch(t){console.error("保存数据出错:",t),alert("保存数据失败，请检查浏览器的存储设置。")}}),{todo:d,todoList:e,totalDone:c,handleAdd:o,handleChange:p,handleDelete:_,handleClear:s}}},T={style:{"white-space":"nowrap"}},B={style:{"margin-top":"10px"}};function I(d,e,i,o,p,_){const s=L,c=V,t=D,m=z,h=N;return E(),w(k,null,[l(c,{modelValue:o.todo,"onUpdate:modelValue":e[0]||(e[0]=n=>o.todo=n),modelModifiers:{lazy:!0},style:{"min-width":"300px","max-width":"1000px"},placeholder:"输入待办事项"},{append:a(()=>[l(s,{onClick:o.handleAdd},{default:a(()=>e[1]||(e[1]=[r("添加")])),_:1},8,["onClick"])]),_:1},8,["modelValue"]),l(m,{data:o.todoList,style:{"max-width":"1000px"}},{default:a(()=>[l(t,{label:"内 容"},{default:a(n=>[f("span",{style:{"margin-left":"10px"},class:b({strikethrough:n.row.done})},u(n.row.content),3)]),_:1}),l(t,{label:"操 作"},{default:a(n=>[f("span",T,[l(s,{size:"small",style:{"margin-left":"0px"},onClick:v=>o.handleChange(n.$index)},{default:a(()=>e[2]||(e[2]=[r("标记")])),_:2},1032,["onClick"]),l(s,{size:"small",type:"danger",onClick:v=>o.handleDelete(n.$index)},{default:a(()=>e[3]||(e[3]=[r("删除")])),_:2},1032,["onClick"])])]),_:1})]),_:1},8,["data"]),f("div",B,[l(h,{class:"mx-1",size:"default"},{default:a(()=>[r("已完成："+u(o.totalDone)+" / 总数："+u(o.todoList.length),1)]),_:1}),l(s,{onClick:o.handleClear,type:"danger",style:{"margin-left":"10px"}},{default:a(()=>e[4]||(e[4]=[r("清除已完成")])),_:1},8,["onClick"])])],64)}const M=C(S,[["render",I],["__scopeId","data-v-459a4238"]]);export{M as default};
