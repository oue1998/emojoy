(function(e){function t(t){for(var n,r,d=t[0],u=t[1],c=t[2],s=0,l=[];s<d.length;s++)r=d[s],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&l.push(a[r][0]),a[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);f&&f(t);while(l.length)l.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,r=1;r<o.length;r++){var d=o[r];0!==a[d]&&(n=!1)}n&&(i.splice(t--,1),e=u(u.s=o[0]))}return e}var n={},r={app:0},a={app:0},i=[];function d(e){return u.p+"js/"+({"Mood~Video":"Mood~Video",Mood:"Mood",Video:"Video"}[e]||e)+"."+{"Mood~Video":"9b0467ab",Mood:"2a6423f8",Video:"b30219b3"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,u),o.l=!0,o.exports}u.e=function(e){var t=[],o={Mood:1,Video:1};r[e]?t.push(r[e]):0!==r[e]&&o[e]&&t.push(r[e]=new Promise((function(t,o){for(var n="css/"+({"Mood~Video":"Mood~Video",Mood:"Mood",Video:"Video"}[e]||e)+"."+{"Mood~Video":"31d6cfe0",Mood:"befd7704",Video:"b352fbbe"}[e]+".css",a=u.p+n,i=document.getElementsByTagName("link"),d=0;d<i.length;d++){var c=i[d],s=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(s===n||s===a))return t()}var l=document.getElementsByTagName("style");for(d=0;d<l.length;d++){c=l[d],s=c.getAttribute("data-href");if(s===n||s===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[e],f.parentNode.removeChild(f),o(i)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,o){n=a[e]=[t,o]}));t.push(n[2]=i);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=d(e);var l=new Error;c=function(t){s.onerror=s.onload=null,clearTimeout(f);var o=a[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",l.name="ChunkLoadError",l.type=n,l.request=r,o[1](l)}a[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,o){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(u.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(o,n,function(t){return e[t]}.bind(null,n));return o},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/emojoy/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=s;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"50d8":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("7a23");function r(e,t){var o=Object(n["y"])("router-view");return Object(n["r"])(),Object(n["d"])(o)}o("a1a1");const a={};a.render=r;var i=a,d=(o("d3b7"),o("3ca3"),o("ddb0"),o("6c02")),u=Object(n["F"])("data-v-0d749db6");Object(n["u"])("data-v-0d749db6");var c={id:"Home"},s={class:"button"},l=Object(n["g"])("START");Object(n["s"])();var f=u((function(e,t,o,r,a,i){var d=Object(n["y"])("router-link");return Object(n["r"])(),Object(n["d"])("div",c,[Object(n["h"])("div",s,[Object(n["h"])(d,{to:"/Video"},{default:u((function(){return[l]})),_:1})])])})),p={name:"Home",data:function(){return{}},setup:function(){return{}},methods:{}};o("b16d");p.render=f,p.__scopeId="data-v-0d749db6";var b=p,h=[{path:"/",name:"Home",component:b},{path:"/Video",name:"Video",component:function(){return Promise.all([o.e("Mood~Video"),o.e("Video")]).then(o.bind(null,"81a8"))}},{path:"/Mood",name:"Mood",component:function(){return Promise.all([o.e("Mood~Video"),o.e("Mood")]).then(o.bind(null,"3f78"))}}],m=Object(d["a"])({history:Object(d["b"])(),routes:h}),v=m,g=o("5502"),y=Object(g["a"])({state:{},mutations:{},actions:{},modules:{}});Object(n["c"])(i).use(y).use(v).mount("#app")},a1a1:function(e,t,o){"use strict";o("50d8")},b16d:function(e,t,o){"use strict";o("b811")},b811:function(e,t,o){}});
//# sourceMappingURL=app.fd19bb23.js.map