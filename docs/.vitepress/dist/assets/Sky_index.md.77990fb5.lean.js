import{p as a,a as s,d as t,r as n,b as e,e as p,w as o,f as l,o as d,c,g as i,h as r,i as u,v as k,u as b,t as v,j as h,k as y}from"./app.ceccd6b0.js";import{V as g,b as m}from"./index.e1633dd4.js";class x extends g{constructor(a){super(a)}}a("data-v-0446bb9e");const f={class:"wrap"},w={class:"loading"},S=h('<div class="loading-text" data-v-0446bb9e><span class="loading-text-words" data-v-0446bb9e>L</span><span class="loading-text-words" data-v-0446bb9e>O</span><span class="loading-text-words" data-v-0446bb9e>A</span><span class="loading-text-words" data-v-0446bb9e>D</span><span class="loading-text-words" data-v-0446bb9e>I</span><span class="loading-text-words" data-v-0446bb9e>N</span><span class="loading-text-words" data-v-0446bb9e>G</span></div>',1),_={class:"loding-percent"},I={class:"container"},A={class:"container-text"},T={class:"tips"},P=h('<div class="loading-text" data-v-0446bb9e><span class="loading-text-words" data-v-0446bb9e>请</span><span class="loading-text-words" data-v-0446bb9e>点</span><span class="loading-text-words" data-v-0446bb9e>击</span><span class="loading-text-words" data-v-0446bb9e>下</span><span class="loading-text-words" data-v-0446bb9e>方</span><span class="loading-text-words" data-v-0446bb9e>按</span><span class="loading-text-words" data-v-0446bb9e>钮</span></div>',1),C=i("span",null,"Click!",-1),N=i("span",null,"天空盒子",-1),j=i("span",null,"Click!",-1),q=i("span",null,"着色器天空",-1);s();var B=t({props:{sceneId:{type:String,default:"0"},visible:{type:Boolean,default:!1}},setup(a){const s=a,t=n();let h,y=n(!0),g=n(!0),B=n(!1),E=n(""),V=n("0");e((()=>{D()})),p((()=>{h&&h.destroy(),m.off("scene")})),m.on("scene",(a=>{({loading:()=>{V.value=a.progressNum,g.value=a.value},transition:()=>{B.value=a.value}})[a.type]()})),o((()=>V),(a=>{m.emit("progressNum",b(a)),parseInt(b(a))>=100&&setTimeout((()=>{g.value=!1,B.value=!0,setTimeout((()=>{B.value=!1}),1500)}),1e3)}),{deep:!0}),o((()=>s.sceneId),(()=>{}),{deep:!0,immediate:!0});const D=()=>{const a=t.value;h=new x({el:a,tween:l,path:"../public/scene/"}),h.initSky()},L=()=>{y.value=!1,h.sky.setSkyBox("sky4")},O=()=>{y.value=!1,h.sky.initShaderSky({scale:100,turbidity:2,rayleigh:4,postion:[15,2,-20]})};return(a,s)=>(d(),c("div",null,[i("div",f,[r("    loding"),u(i("div",w,[S,i("div",_,v(parseInt(b(V)))+"%",1)],512),[[k,b(g)]]),r("转场动画"),u(i("div",I,[i("span",A,v(b(E)),1)],512),[[k,b(B)]]),i("div",{ref:t,id:"map",class:"map"},null,512),u(i("div",T,[P],512),[[k,b(y)]])]),i("div",{class:"btn"},[i("button",{class:"custom-btn btn-12",onClick:L},[C,N]),i("button",{class:"custom-btn btn-12",onClick:O},[j,q])])]))}});B.__scopeId="data-v-0446bb9e";const E=i("h1",{id:"天空类"},[i("a",{class:"header-anchor",href:"#天空类","aria-hidden":"true"},"#"),y(" 天空类")],-1),V=h('',5),D='{"title":"天空类","description":"","frontmatter":{},"headers":[{"level":2,"title":"使用","slug":"使用"},{"level":2,"title":"API","slug":"api"}],"relativePath":"Sky/index.md","lastUpdated":1678273421505}',L={};const O=Object.assign(L,{setup:function(a){return(a,s)=>(d(),c("div",null,[E,i(B),V]))}});export default O;export{D as __pageData};
