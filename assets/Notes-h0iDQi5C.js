import{_ as x,r as _,c as C,w as y,a as k,b as l,d as a,e as g,F as w,o as b,f as r,t as f,n as E}from"./index-gpRfmZfb.js";import{E as N}from"./el-text-Cz4Te8h4.js";import{E as V,a as z,b as D}from"./el-input-CAccbb15.js";import{E as L}from"./el-button-BU61Dapq.js";const S={setup(){const d=_(""),e=_(JSON.parse(localStorage.getItem("todoList"))||[]),i=t=>window.confirm("确定执行删除操作吗？"),o=()=>{const t=d.value.trim();if(!t)return alert("内容不能为空");e.value.unshift({content:t,done:!1}),d.value=""},u=t=>{t>=0&&t<e.value.length&&(e.value[t].done=!e.value[t].done)},p=t=>{i()&&t>=0&&t<e.value.length&&e.value.splice(t,1)},s=()=>{i()&&(e.value=e.value.filter(t=>!t.done))},m=C(()=>e.value.reduce((t,c)=>t+(c.done?1:0),0));return y(()=>{try{localStorage.setItem("todoList",JSON.stringify(e.value))}catch(t){console.error("保存数据出错:",t),alert("保存数据失败，请检查浏览器的存储设置。")}}),{todo:d,todoList:e,totalDone:m,handleAdd:o,handleChange:u,handleDelete:p,handleClear:s}}},T={style:{"margin-top":"10px"}};function B(d,e,i,o,u,p){const s=L,m=V,t=D,c=z,h=N;return b(),k(w,null,[l(m,{modelValue:o.todo,"onUpdate:modelValue":e[0]||(e[0]=n=>o.todo=n),modelModifiers:{lazy:!0},style:{"min-width":"300px","max-width":"1000px"},placeholder:"输入待办事项"},{append:a(()=>[l(s,{onClick:o.handleAdd},{default:a(()=>e[1]||(e[1]=[r("添加")])),_:1},8,["onClick"])]),_:1},8,["modelValue"]),l(c,{data:o.todoList,style:{"max-width":"1000px"}},{default:a(()=>[l(t,{label:"内 容"},{default:a(n=>[g("span",{style:{"margin-left":"10px"},class:E({strikethrough:n.row.done})},f(n.row.content),3)]),_:1}),l(t,{label:"操 作","min-width":"80px"},{default:a(n=>[l(s,{size:"small",style:{"margin-left":"0px"},onClick:v=>o.handleChange(n.$index)},{default:a(()=>e[2]||(e[2]=[r("标记")])),_:2},1032,["onClick"]),l(s,{size:"small",type:"danger",onClick:v=>o.handleDelete(n.$index)},{default:a(()=>e[3]||(e[3]=[r("删除")])),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),g("div",T,[l(h,{class:"mx-1",size:"default"},{default:a(()=>[r("已完成："+f(o.totalDone)+" / 总数："+f(o.todoList.length),1)]),_:1}),l(s,{onClick:o.handleClear,type:"danger",style:{"margin-left":"10px"}},{default:a(()=>e[4]||(e[4]=[r("清除已完成")])),_:1},8,["onClick"])])],64)}const O=x(S,[["render",B],["__scopeId","data-v-21bda866"]]);export{O as default};
