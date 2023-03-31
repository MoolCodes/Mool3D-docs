import{p as t,a,d as s,r as n,b as e,e as d,w as l,f as o,o as i,c as p,g as r,h as c,i as u,v as f,u as v,t as x,j as g,k as h}from"./app.ceccd6b0.js";import{V as k,b}from"./index.e1633dd4.js";class y extends k{constructor(t){super(t),this.initModel()}init(){this.initEnvironment({path:"exr.exr",type:"exr"}),this.initSky(),this.sky.initShaderSky({scale:100,turbidity:2,rayleigh:4,postion:[15,2,-20]})}}t("data-v-07a97fa0");const m={class:"wrap"},w={class:"loading"},_=g('<div class="loading-text" data-v-07a97fa0><span class="loading-text-words" data-v-07a97fa0>L</span><span class="loading-text-words" data-v-07a97fa0>O</span><span class="loading-text-words" data-v-07a97fa0>A</span><span class="loading-text-words" data-v-07a97fa0>D</span><span class="loading-text-words" data-v-07a97fa0>I</span><span class="loading-text-words" data-v-07a97fa0>N</span><span class="loading-text-words" data-v-07a97fa0>G</span></div>',1),S={class:"loding-percent"},I={class:"container"},T={class:"container-text"},A={class:"tips"},N=g('<div class="loading-text" data-v-07a97fa0><span class="loading-text-words" data-v-07a97fa0>请</span><span class="loading-text-words" data-v-07a97fa0>点</span><span class="loading-text-words" data-v-07a97fa0>击</span><span class="loading-text-words" data-v-07a97fa0>下</span><span class="loading-text-words" data-v-07a97fa0>方</span><span class="loading-text-words" data-v-07a97fa0>按</span><span class="loading-text-words" data-v-07a97fa0>钮</span></div>',1),C=r("div",{class:"btn"},[c(' <button class="custom-btn btn-12" @click="loadSkyBox">\n        <span>Click!</span><span>天空盒子</span>\n      </button>\n      <button class="custom-btn btn-12" @click="loadSky">\n        <span>Click!</span><span>着色器天空</span>\n      </button> ')],-1);a();var j=s({props:{sceneId:{type:String,default:"0"},visible:{type:Boolean,default:!1}},setup(t){const a=t,s=n();let g,h=n(!1),k=n(!0),j=n(!1),E=n(""),P=n("0");e((()=>{V()})),d((()=>{g&&g.destroy(),b.off("scene")})),b.on("scene",(t=>{({loading:()=>{P.value=t.progressNum,k.value=t.value},transition:()=>{j.value=t.value}})[t.type]()})),l((()=>P),(t=>{b.emit("progressNum",v(t)),parseInt(v(t))>=100&&setTimeout((()=>{k.value=!1,j.value=!0,setTimeout((()=>{j.value=!1}),1500)}),1e3)}),{deep:!0}),l((()=>a.sceneId),(()=>{}),{deep:!0,immediate:!0});const V=()=>{const t=s.value;g=new y({el:t,tween:o,path:"../public/scene/"}),M("1")},M=t=>{switch(t){case"1":g.setScene(1,(()=>{g.init()})),E.value="场景",g.flyTo({position:[0,0,6],controls:[0,2,0],duration:2e3})}};return(t,a)=>(i(),p("div",null,[r("div",m,[c("    loding"),u(r("div",w,[_,r("div",S,x(parseInt(v(P)))+"%",1)],512),[[f,v(k)]]),c("转场动画"),u(r("div",I,[r("span",T,x(v(E)),1)],512),[[f,v(j)]]),r("div",{ref:s,id:"map",class:"map"},null,512),u(r("div",A,[N],512),[[f,v(h)]])]),C]))}});j.__scopeId="data-v-07a97fa0";const E=r("h1",{id:"模型类"},[r("a",{class:"header-anchor",href:"#模型类","aria-hidden":"true"},"#"),h(" 模型类")],-1),P=g('',5),V='{"title":"模型类","description":"","frontmatter":{},"headers":[{"level":2,"title":"使用","slug":"使用"},{"level":2,"title":"API","slug":"api"}],"relativePath":"Model/index.md","lastUpdated":1679227850762}',M={};const q=Object.assign(M,{setup:function(t){return(t,a)=>(i(),p("div",null,[E,r(j),P]))}});export default q;export{V as __pageData};
