import{V as t,aj as a,p as s,a as n,d as e,r as o,b as p,e as r,w as i,f as l,o as c,c as u,h as d,i as k,v as h,u as g,g as b,t as m,j as x,k as w}from"./app.ceccd6b0.js";import{V as v,b as y}from"./index.e1633dd4.js";class f extends v{constructor(t){super(t),this.init()}init(){this.initSource(),this.initSky(),this.setLight(),this.sky.initShaderSky({scale:1e3,turbidity:1,rayleigh:10,postion:[15,2,-20]}),this.initEnvironment({path:"exr.exr",type:"exr"}),this.initWater({textureWidth:200,textureHeight:200,radius:400,waterPosition:new t(0,0,0),texture:this.souce.loadTexture({path:"/docs/public/images/waternormals.jpg",onLoad:function(t){t.wrapS=t.wrapT=a}}),sunPosition:new t(0,5,0),sunColor:"#e19d6a",waterColor:"#e19d6a",distortionScale:.7,time:.01,scene:this.scene}),this.flyTo({position:[0,0,6],controls:[0,2,0],duration:2e3})}setLight(){var t;null==(t=this.ambient)||t.setLight(.7,1)}}s("data-v-6096a62d");const T={class:"wrap"},_={class:"loading"},S=x('<div class="loading-text" data-v-6096a62d><span class="loading-text-words" data-v-6096a62d>L</span><span class="loading-text-words" data-v-6096a62d>O</span><span class="loading-text-words" data-v-6096a62d>A</span><span class="loading-text-words" data-v-6096a62d>D</span><span class="loading-text-words" data-v-6096a62d>I</span><span class="loading-text-words" data-v-6096a62d>N</span><span class="loading-text-words" data-v-6096a62d>G</span></div>',1),P={class:"loding-percent"},I={class:"container"},V={class:"container-text"};n();var W=e({props:{sceneId:{type:String,default:"0"},visible:{type:Boolean,default:!1}},setup(t){const a=t,s=o();let n,e=o(!0),x=o(!1),w=o(""),v=o("0");p((()=>{W()})),r((()=>{n&&n.destroy(),y.off("scene")})),y.on("scene",(t=>{({loading:()=>{v.value=t.progressNum,e.value=t.value},transition:()=>{x.value=t.value}})[t.type]()})),i((()=>v),(t=>{y.emit("progressNum",g(t)),parseInt(g(t))>=100&&setTimeout((()=>{e.value=!1,x.value=!0,setTimeout((()=>{x.value=!1,n.initWater()}),1500)}),1e3)}),{deep:!0}),i((()=>a.sceneId),(()=>{}),{deep:!0,immediate:!0});const W=()=>{const t=s.value;n=new f({el:t,tween:l,path:"../public/scene/"})};return(t,a)=>(c(),u("div",T,[d("    loding"),k(b("div",_,[S,b("div",P,m(parseInt(g(v)))+"%",1)],512),[[h,g(e)]]),d("转场动画"),k(b("div",I,[b("span",V,m(g(w)),1)],512),[[h,g(x)]]),b("div",{ref:s,id:"map",class:"map"},null,512)]))}});W.__scopeId="data-v-6096a62d";const j=b("h1",{id:"water-类"},[b("a",{class:"header-anchor",href:"#water-类","aria-hidden":"true"},"#"),w(" water 类")],-1),C=x('',5),L='{"title":"water 类","description":"","frontmatter":{},"headers":[{"level":2,"title":"使用","slug":"使用"},{"level":2,"title":"API","slug":"api"}],"relativePath":"Water/index.md","lastUpdated":1679115737994}',q={};const A=Object.assign(q,{setup:function(t){return(t,a)=>(c(),u("div",null,[j,b(W),C]))}});export default A;export{L as __pageData};