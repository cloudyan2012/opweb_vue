import{v as Pe,y as re,N as Oe,aM as Fe,ay as Re,ai as K,A as O,aA as J,az as me,aN as Y,D as Q,aO as Me,u as Ke,C as b,Y as qe,j as F,aP as ze,f as be,o as Z,J as x,a1 as X,a0 as w,a7 as ue,M as R,O as p,a3 as ie,U as _,K as E,L as I,ag as Ue,aQ as We,V as he,aR as He,a4 as ye,a5 as je,as as Ge,aD as V,aI as ce,at as Je,aS as Ye,_ as Qe,z as G,t as Ze,a9 as Xe,G as et,aT as tt,H as ee,aU as at,ac as B,aq as _e,au as st,ap as lt,s as z,k as ot,W as Ce,p as P,q as de,h as nt,aV as rt,aJ as te,m as ut,aW as pe,aK as fe}from"./index-BSRaVxNu.js";import{E as it}from"./el-text-O-jaOzYz.js";import{e as ct,E as dt}from"./echarts-Bn8Z3cee.js";import{u as pt,t as ft,v as vt,E as gt,r as mt,q as bt}from"./el-tag-G-z4Enyx.js";import{c as ht}from"./use-form-item-s1nRn993.js";const yt=Pe({valueKey:{type:String,default:"value"},modelValue:{type:[String,Number],default:""},debounce:{type:Number,default:300},placement:{type:re(String),values:["top","top-start","top-end","bottom","bottom-start","bottom-end"],default:"bottom-start"},fetchSuggestions:{type:re([Function,Array]),default:Oe},popperClass:{type:String,default:""},triggerOnFocus:{type:Boolean,default:!0},selectWhenUnmatched:{type:Boolean,default:!1},hideLoading:{type:Boolean,default:!1},teleported:Fe.teleported,highlightFirstItem:{type:Boolean,default:!1},fitInputWidth:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},name:String,...Re(["ariaLabel"])}),_t={[K]:t=>O(t),[J]:t=>O(t),[me]:t=>O(t),focus:t=>t instanceof FocusEvent,blur:t=>t instanceof FocusEvent,clear:()=>!0,select:t=>Y(t)},we="ElAutocomplete",Ct=Q({name:we,inheritAttrs:!1}),wt=Q({...Ct,props:yt,emits:_t,setup(t,{expose:e,emit:s}){const a=t,i=pt(),n=Me(),c=ht(),o=Ke("autocomplete"),u=b(),v=b(),d=b(),h=b();let r=!1,y=!1;const f=b([]),g=b(-1),D=b(""),$=b(!1),S=b(!1),k=b(!1),T=qe(),$e=F(()=>n.style),A=F(()=>(f.value.length>0||k.value)&&$.value),ae=F(()=>!a.hideLoading&&k.value),xe=F(()=>u.value?Array.from(u.value.$el.querySelectorAll("input")):[]),Ae=()=>{A.value&&(D.value=`${u.value.$el.offsetWidth}px`)},Ee=()=>{g.value=-1},se=ft(async l=>{if(S.value)return;const m=C=>{k.value=!1,!S.value&&(G(C)?(f.value=C,g.value=a.highlightFirstItem?0:-1):Ze(we,"autocomplete suggestions must be an array"))};if(k.value=!0,G(a.fetchSuggestions))m(a.fetchSuggestions);else{const C=await a.fetchSuggestions(l,m);G(C)&&m(C)}},a.debounce),Se=l=>{const m=!!l;if(s(J,l),s(K,l),S.value=!1,$.value||($.value=m),!a.triggerOnFocus&&!l){S.value=!0,f.value=[];return}se(l)},ke=l=>{var m;c.value||(((m=l.target)==null?void 0:m.tagName)!=="INPUT"||xe.value.includes(document.activeElement))&&($.value=!0)},Le=l=>{s(me,l)},Ie=l=>{y?y=!1:($.value=!0,s("focus",l),a.triggerOnFocus&&!r&&se(String(a.modelValue)))},De=l=>{setTimeout(()=>{var m;if((m=d.value)!=null&&m.isFocusInsideContent()){y=!0;return}$.value&&N(),s("blur",l)})},Te=()=>{$.value=!1,s(K,""),s("clear")},le=async()=>{A.value&&g.value>=0&&g.value<f.value.length?U(f.value[g.value]):a.selectWhenUnmatched&&(s("select",{value:a.modelValue}),f.value=[],g.value=-1)},Ne=l=>{A.value&&(l.preventDefault(),l.stopPropagation(),N())},N=()=>{$.value=!1},Ve=()=>{var l;(l=u.value)==null||l.focus()},Be=()=>{var l;(l=u.value)==null||l.blur()},U=async l=>{s(J,l[a.valueKey]),s(K,l[a.valueKey]),s("select",l),f.value=[],g.value=-1},W=l=>{if(!A.value||k.value)return;if(l<0){g.value=-1;return}l>=f.value.length&&(l=f.value.length-1);const m=v.value.querySelector(`.${o.be("suggestion","wrap")}`),L=m.querySelectorAll(`.${o.be("suggestion","list")} li`)[l],H=m.scrollTop,{offsetTop:ne,scrollHeight:j}=L;ne+j>H+m.clientHeight&&(m.scrollTop+=j),ne<H&&(m.scrollTop-=j),g.value=l,u.value.ref.setAttribute("aria-activedescendant",`${T.value}-item-${g.value}`)},oe=ze(h,()=>{A.value&&N()});return be(()=>{oe==null||oe()}),Z(()=>{u.value.ref.setAttribute("role","textbox"),u.value.ref.setAttribute("aria-autocomplete","list"),u.value.ref.setAttribute("aria-controls","id"),u.value.ref.setAttribute("aria-activedescendant",`${T.value}-item-${g.value}`),r=u.value.ref.hasAttribute("readonly")}),e({highlightedIndex:g,activated:$,loading:k,inputRef:u,popperRef:d,suggestions:f,handleSelect:U,handleKeyEnter:le,focus:Ve,blur:Be,close:N,highlight:W}),(l,m)=>(x(),X(p(Ye),{ref_key:"popperRef",ref:d,visible:p(A),placement:l.placement,"fallback-placements":["bottom-start","top-start"],"popper-class":[p(o).e("popper"),l.popperClass],teleported:l.teleported,"gpu-acceleration":!1,pure:"","manual-mode":"",effect:"light",trigger:"click",transition:`${p(o).namespace.value}-zoom-in-top`,persistent:"",role:"listbox",onBeforeShow:Ae,onHide:Ee},{content:w(()=>[ue("div",{ref_key:"regionRef",ref:v,class:R([p(o).b("suggestion"),p(o).is("loading",p(ae))]),style:ie({[l.fitInputWidth?"width":"minWidth"]:D.value,outline:"none"}),role:"region"},[_(p(vt),{id:p(T),tag:"ul","wrap-class":p(o).be("suggestion","wrap"),"view-class":p(o).be("suggestion","list"),role:"listbox"},{default:w(()=>[p(ae)?(x(),E("li",{key:0},[I(l.$slots,"loading",{},()=>[_(p(Ue),{class:R(p(o).is("loading"))},{default:w(()=>[_(p(We))]),_:1},8,["class"])])])):(x(!0),E(he,{key:1},He(f.value,(C,L)=>(x(),E("li",{id:`${p(T)}-item-${L}`,key:L,class:R({highlighted:g.value===L}),role:"option","aria-selected":g.value===L,onClick:H=>U(C)},[I(l.$slots,"default",{item:C},()=>[ye(je(C[l.valueKey]),1)])],10,["id","aria-selected","onClick"]))),128))]),_:3},8,["id","wrap-class","view-class"])],6)]),default:w(()=>[ue("div",{ref_key:"listboxRef",ref:h,class:R([p(o).b(),l.$attrs.class]),style:ie(p($e)),role:"combobox","aria-haspopup":"listbox","aria-expanded":p(A),"aria-owns":p(T)},[_(p(gt),Ge({ref_key:"inputRef",ref:u},p(i),{clearable:l.clearable,disabled:p(c),name:l.name,"model-value":l.modelValue,"aria-label":l.ariaLabel,onInput:Se,onChange:Le,onFocus:Ie,onBlur:De,onClear:Te,onKeydown:[V(ce(C=>W(g.value-1),["prevent"]),["up"]),V(ce(C=>W(g.value+1),["prevent"]),["down"]),V(le,["enter"]),V(N,["tab"]),V(Ne,["esc"])],onMousedown:ke}),Je({_:2},[l.$slots.prepend?{name:"prepend",fn:w(()=>[I(l.$slots,"prepend")])}:void 0,l.$slots.append?{name:"append",fn:w(()=>[I(l.$slots,"append")])}:void 0,l.$slots.prefix?{name:"prefix",fn:w(()=>[I(l.$slots,"prefix")])}:void 0,l.$slots.suffix?{name:"suffix",fn:w(()=>[I(l.$slots,"suffix")])}:void 0]),1040,["clearable","disabled","name","model-value","aria-label","onKeydown"])],14,["aria-expanded","aria-owns"])]),_:3},8,["visible","placement","popper-class","teleported","transition"]))}});var $t=Qe(wt,[["__file","autocomplete.vue"]]);const xt=Xe($t);function At(t){let e;const s=b(!1),a=et({...t,originalPosition:"",originalOverflow:"",visible:!1});function i(r){a.text=r}function n(){const r=a.parent,y=h.ns;if(!r.vLoadingAddClassList){let f=r.getAttribute("loading-number");f=Number.parseInt(f)-1,f?r.setAttribute("loading-number",f.toString()):(z(r,y.bm("parent","relative")),r.removeAttribute("loading-number")),z(r,y.bm("parent","hidden"))}c(),d.unmount()}function c(){var r,y;(y=(r=h.$el)==null?void 0:r.parentNode)==null||y.removeChild(h.$el)}function o(){var r;t.beforeClose&&!t.beforeClose()||(s.value=!0,clearTimeout(e),e=setTimeout(u,400),a.visible=!1,(r=t.closed)==null||r.call(t))}function u(){if(!s.value)return;const r=a.parent;s.value=!1,r.vLoadingAddClassList=void 0,n()}const v=Q({name:"ElLoading",setup(r,{expose:y}){const{ns:f,zIndex:g}=at("loading");return y({ns:f,zIndex:g}),()=>{const D=a.spinner||a.svg,$=B("svg",{class:"circular",viewBox:a.svgViewBox?a.svgViewBox:"0 0 50 50",...D?{innerHTML:D}:{}},[B("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none"})]),S=a.text?B("p",{class:f.b("text")},[a.text]):void 0;return B(lt,{name:f.b("fade"),onAfterLeave:u},{default:w(()=>[_e(_("div",{style:{backgroundColor:a.background||""},class:[f.b("mask"),a.customClass,a.fullscreen?"is-fullscreen":""]},[B("div",{class:f.b("spinner")},[$,S])]),[[st,a.visible]])])})}}}),d=tt(v),h=d.mount(document.createElement("div"));return{...ee(a),setText:i,removeElLoadingChild:c,close:o,handleAfterLeave:u,vm:h,get $el(){return h.$el}}}let M;const Et=function(t={}){if(!ot)return;const e=St(t);if(e.fullscreen&&M)return M;const s=At({...e,closed:()=>{var i;(i=e.closed)==null||i.call(e),e.fullscreen&&(M=void 0)}});kt(e,e.parent,s),ve(e,e.parent,s),e.parent.vLoadingAddClassList=()=>ve(e,e.parent,s);let a=e.parent.getAttribute("loading-number");return a?a=`${Number.parseInt(a)+1}`:a="1",e.parent.setAttribute("loading-number",a),e.parent.appendChild(s.$el),Ce(()=>s.visible.value=e.visible),e.fullscreen&&(M=s),s},St=t=>{var e,s,a,i;let n;return O(t.target)?n=(e=document.querySelector(t.target))!=null?e:document.body:n=t.target||document.body,{parent:n===document.body||t.body?document.body:n,background:t.background||"",svg:t.svg||"",svgViewBox:t.svgViewBox||"",spinner:t.spinner||!1,text:t.text||"",fullscreen:n===document.body&&((s=t.fullscreen)!=null?s:!0),lock:(a=t.lock)!=null?a:!1,customClass:t.customClass||"",visible:(i=t.visible)!=null?i:!0,beforeClose:t.beforeClose,closed:t.closed,target:n}},kt=async(t,e,s)=>{const{nextZIndex:a}=s.vm.zIndex||s.vm._.exposed.zIndex,i={};if(t.fullscreen)s.originalPosition.value=P(document.body,"position"),s.originalOverflow.value=P(document.body,"overflow"),i.zIndex=a();else if(t.parent===document.body){s.originalPosition.value=P(document.body,"position"),await Ce();for(const n of["top","left"]){const c=n==="top"?"scrollTop":"scrollLeft";i[n]=`${t.target.getBoundingClientRect()[n]+document.body[c]+document.documentElement[c]-Number.parseInt(P(document.body,`margin-${n}`),10)}px`}for(const n of["height","width"])i[n]=`${t.target.getBoundingClientRect()[n]}px`}else s.originalPosition.value=P(e,"position");for(const[n,c]of Object.entries(i))s.$el.style[n]=c},ve=(t,e,s)=>{const a=s.vm.ns||s.vm._.exposed.ns;["absolute","fixed","sticky"].includes(s.originalPosition.value)?z(e,a.bm("parent","relative")):de(e,a.bm("parent","relative")),t.fullscreen&&t.lock?de(e,a.bm("parent","hidden")):z(e,a.bm("parent","hidden"))},q=Symbol("ElLoading"),ge=(t,e)=>{var s,a,i,n;const c=e.instance,o=r=>Y(e.value)?e.value[r]:void 0,u=r=>{const y=O(r)&&(c==null?void 0:c[r])||r;return y&&b(y)},v=r=>u(o(r)||t.getAttribute(`element-loading-${rt(r)}`)),d=(s=o("fullscreen"))!=null?s:e.modifiers.fullscreen,h={text:v("text"),svg:v("svg"),svgViewBox:v("svgViewBox"),spinner:v("spinner"),background:v("background"),customClass:v("customClass"),fullscreen:d,target:(a=o("target"))!=null?a:d?void 0:t,body:(i=o("body"))!=null?i:e.modifiers.body,lock:(n=o("lock"))!=null?n:e.modifiers.lock};t[q]={options:h,instance:Et(h)}},Lt=(t,e)=>{for(const s of Object.keys(e))nt(e[s])&&(e[s].value=t[s])},It={mounted(t,e){e.value&&ge(t,e)},updated(t,e){const s=t[q];e.oldValue!==e.value&&(e.value&&!e.oldValue?ge(t,e):e.value&&e.oldValue?Y(e.value)&&Lt(e.value,s.options):s==null||s.instance.close())},unmounted(t){var e;(e=t[q])==null||e.instance.close(),t[q]=null}},Dt={props:{tableData:{type:Array,Required:!0}},setup(t){const{tableData:e}=ee(t);return{tableData:e}}};function Tt(t,e,s,a,i,n){const c=mt,o=bt;return x(),X(o,{data:a.tableData,stripe:"",height:"240"},{default:w(()=>[_(c,{prop:"ExamDate",label:"Date"}),_(c,{prop:"Chinese",label:"语文"}),_(c,{prop:"Mathematics",label:"数学"}),_(c,{prop:"English",label:"英语"})]),_:1},8,["data"])}const Nt=te(Dt,[["render",Tt]]),Vt={props:{tableData:{type:Array,required:!0}},setup(t){const e=b(null),{tableData:s}=ee(t);let a=null;const i=()=>{const n=[],c=[],o=[],u=[];s.value.forEach(d=>{n.push(d.ExamDate),c.push(d.Chinese),o.push(d.Mathematics),u.push(d.English)});const v={legend:{data:["语文","数学","英语"]},grid:{left:"1%",right:"1%",bottom:"3%",top:"10%",containLabel:!0},xAxis:{type:"category",data:n},yAxis:{type:"value",minInterval:5,min:"dataMin"},series:[{name:"语文",type:"line",smooth:!0,data:c},{name:"数学",type:"line",smooth:!0,data:o},{name:"英语",type:"line",smooth:!0,data:u}]};a||(a=ct.init(e.value)),a.setOption(v)};return Z(()=>{i()}),be(()=>{a&&a.dispose()}),ut(s,n=>{i()}),{chartDom:e}}},Bt={ref:"chartDom",style:{width:"100%",height:"270px","background-color":"#fafafa"}};function Pt(t,e,s,a,i,n){return x(),E("div",Bt,null,512)}const Ot=te(Vt,[["render",Pt]]),Ft={components:{tablereport:Nt,chartreport:Ot},setup(){const t=b(!0),e=b([]),s=b([]),a=b(""),i=async()=>{try{const o=await fe.get("/user");Array.isArray(o)?s.value=o:console.warn("返回的数据格式不正确。")}catch(o){console.error("获取用户列表失败:",o),alert("获取用户失败，请检查网络或稍后再试。")}},n=(o,u)=>{const v=o?s.value.filter(d=>d.uname.toLowerCase().indexOf(o.toLowerCase())!==-1):s.value;u(v)},c=async o=>{var u,v;if(t.value=!0,!(o!=null&&o.uname)){alert("无效的选择，请重新选择。");return}try{const d=await fe.get(`/exam?user=${o.uid}`);e.value=d.data&&Array.isArray(d.data)?d.data:[],t.value=!1}catch(d){const h=((v=(u=d.response)==null?void 0:u.data)==null?void 0:v.message)||d.message||"未知错误";alert(`获取数据失败: ${h}，请稍后再试。`)}};return Z(i),{loading:t,reportList:e,state:a,querySearchAsync:n,handleSelect:c}}},Rt={key:0},Mt={key:1,style:{"text-align":"center"}};function Kt(t,e,s,a,i,n){const c=xt,o=pe("tablereport"),u=pe("chartreport"),v=dt,d=it,h=It;return x(),E(he,null,[_(c,{modelValue:a.state,"onUpdate:modelValue":e[0]||(e[0]=r=>a.state=r),"value-key":"uname","fetch-suggestions":a.querySearchAsync,placeholder:"点击选择或直接输入姓名查询成绩",onSelect:a.handleSelect,style:{"min-width":"300px","max-width":"300px"}},null,8,["modelValue","fetch-suggestions","onSelect"]),a.reportList&&a.reportList.length?(x(),E("div",Rt,[_e((x(),X(v,{direction:"vertical",size:"large",fill:"",style:{"min-width":"99%"}},{default:w(()=>[_(o,{tableData:a.reportList},null,8,["tableData"]),_(u,{tableData:a.reportList},null,8,["tableData"])]),_:1})),[[h,a.loading]])])):(x(),E("div",Mt,[_(d,null,{default:w(()=>e[1]||(e[1]=[ye("暂无数据")])),_:1})]))],64)}const Gt=te(Ft,[["render",Kt]]);export{Gt as default};