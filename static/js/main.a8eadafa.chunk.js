(this.webpackJsonpkn=this.webpackJsonpkn||[]).push([[0],{53:function(e,t,n){e.exports={osu:"OsuStyles_osu__3Vtfg",form:"OsuStyles_form__1gJRe"}},70:function(e,t,n){e.exports=n(82)},75:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(8),c=n.n(l),o=(n(75),n(10)),u=n(25),i=n(53),s=n.n(i),m=n(121),f=n(126),p=n(120),v=n(115),E=n(119),g=n(42),b=n.n(g);var d=function(e){var t=Object(a.useRef)(null);return r.a.createElement(v.a,{value:e.name,inputRef:t,placeholder:"\u0418\u043c\u044f",className:e.UIstyle,startAdornment:r.a.createElement(E.a,{position:"start"},r.a.createElement(b.a,null)),inputProps:{"aria-label":"description"},onChange:function(){return e.setName(t.current.value)},fullWidth:!0})};var h=function(e){var t=Object(a.useRef)(null);return r.a.createElement(v.a,{value:e.surname,placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",className:e.UIstyle,startAdornment:r.a.createElement(E.a,{position:"start"},r.a.createElement(b.a,null)),inputProps:{"aria-label":"description"},inputRef:t,onChange:function(){return e.setSurname(t.current.value)},fullWidth:!0})},O=n(57),j=n.n(O);var y=function(e){return r.a.createElement(p.a,{variant:"contained",color:"primary",type:"submit",endIcon:r.a.createElement(j.a,null)},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c")},S=n(125);var N=function(e){var t=Object(a.useRef)(null);return r.a.createElement(S.a,{value:e.motive,placeholder:"\u0426\u0435\u043b\u044c \u0443\u0447\u0430\u0441\u0442\u0438\u044f",className:e.UIstyle,fullWidth:!0,inputRef:t,onChange:function(){return e.setMotive(t.current.value)}})},R=n(59),w=n.n(R);var I=function(e){var t=Object(a.useRef)(null);return r.a.createElement(v.a,{value:e.group,placeholder:"\u0413\u0440\u0443\u043f\u043f\u0430",className:e.UIstyle,startAdornment:r.a.createElement(E.a,{position:"start"},r.a.createElement(w.a,null)),inputProps:{"aria-label":"description"},inputRef:t,onChange:function(){return e.setGroup(t.current.value)},fullWidth:!0})},x=Object(m.a)((function(e){return{margin:{margin:e.spacing(2)},textarea:{marginLeft:e.spacing(1),marginRight:e.spacing(1),margin:e.spacing(2)}}}));var k=function(){var e=x(),t=Object(a.useState)(""),n=Object(u.a)(t,2),l=n[0],c=n[1],o=Object(a.useState)(""),i=Object(u.a)(o,2),m=i[0],v=i[1],E=Object(a.useState)(""),g=Object(u.a)(E,2),b=g[0],O=g[1],j=Object(a.useState)(""),S=Object(u.a)(j,2),R=S[0],w=S[1],k=Object(a.useState)("none"),U=Object(u.a)(k,2),C=U[0],W=U[1],_=Object(a.useState)("none"),G=Object(u.a)(_,2),A=G[0],B=G[1];return Object(a.useEffect)((function(){return console.log("setName")}),[l]),Object(a.useEffect)((function(){return console.log("setSurname")}),[m]),Object(a.useEffect)((function(){return console.log("SetGroup")}),[b]),Object(a.useEffect)((function(){return console.log("setMotive")}),[R]),r.a.createElement("div",null,r.a.createElement(f.a,{severity:"error",style:{display:A},action:r.a.createElement(p.a,{color:"inherit",size:"small",onClick:function(){B(""===A?"none":"")}},"x")},"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f"),r.a.createElement(f.a,{severity:"success",style:{display:C},action:r.a.createElement(p.a,{color:"inherit",size:"small",onClick:function(){W(""===C?"none":"")}},"x")},"\u0412\u0430\u0448\u0430 \u0437\u0430\u044f\u0432\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0430"),r.a.createElement("form",{className:s.a.form,onSubmit:function(e){console.log([l,m,b,R]),""===l||""===m||""===b||""===R?B(""):(c(""),v(""),O(""),w(""),B("none"),W("")),e.preventDefault()}},r.a.createElement(d,{UIstyle:e.margin,setName:c,name:l}),r.a.createElement(h,{UIstyle:e.margin,setSurname:v,surname:m}),r.a.createElement(I,{UIstyle:e.margin,setGroup:O,group:b}),r.a.createElement(N,{UIstyle:e.textarea,setMotive:w,motive:R}),r.a.createElement(y,null)))},U=n(123),C=n(124),W=n(83),_=n(122),G=n(60),A=n.n(G),B=Object(m.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));var M=function(){var e=B();return r.a.createElement("div",{className:"App"},r.a.createElement(U.a,{position:"static"},r.a.createElement(C.a,null,r.a.createElement(_.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(A.a,null)),r.a.createElement(W.a,{variant:"h6",className:e.title},"\u0417\u0430\u044f\u0432\u043a\u0430 \u043d\u0430 \u0443\u0447\u0430\u0441\u0442\u0438\u0435"))),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:k})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=n(44);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J.a,null,r.a.createElement(M,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[70,1,2]]]);
//# sourceMappingURL=main.a8eadafa.chunk.js.map