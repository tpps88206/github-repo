(this["webpackJsonpgithub-repo"]=this["webpackJsonpgithub-repo"]||[]).push([[0],{141:function(e,t,n){"use strict";n.r(t);var i={};n.r(i),n.d(i,"initialize",(function(){return E})),n.d(i,"default",(function(){return T}));var a,c,r=n(27),o=n(5),l=n(0),s=n(42),f=n(6),b=n(100),p=n(161),u=n(98),j=n(165),h=n(160),d=n(39),g=n(35),x=n(10),m=n(92),O=n(162),v=n(90),y=n(20),w=n(164),S=n(101),k={data:{}},C=Object(S.a)({name:"general",initialState:k,reducers:{initialize:function(e,t){return k}}}),E=C.actions.initialize,T=C.reducer,W=n(40),_=n(102),R=n(93),A=n.n(R),D=n(94),F=n.n(D),H=n(95),I=n.n(H),L=n(103),B=function(e){if(!e||!e.epics)return[];var t=F()(Object.entries(e).filter((function(e){var t=Object(W.a)(e,1)[0];return"default"!==t&&"epics"!==t})).filter((function(e){var t=Object(W.a)(e,2)[1];return t&&t.type})).map((function(e){var t=Object(W.a)(e,2);return[t[0],t[1].type]})));return Object.entries(e.epics).map((function(e){var n=Object(W.a)(e,2),i=n[0],a=n[1];return i.endsWith("Epic")?a:function(e,n){return e.pipe(Object(_.a)(t[i]),Object(L.a)((function(t){return a(e,n,t)})))}}))},P=w.a.apply(void 0,Object(r.a)((a=[i],I()(a)?[]:A()(a.map(B))))),N=Object(y.a)(),z=Object(O.a)(),K=function(){var e,t=Object({NODE_ENV:"production",PUBLIC_URL:"/github-repo",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FLAVOR,n=Object(x.createStore)((e=N,Object(x.combineReducers)({router:Object(g.b)(e),general:T})),Object(m.composeWithDevTools)({trace:"dev"===t})(Object(x.applyMiddleware)(Object(v.a)(N),z)));return z.run(P),n},J=n(61),U=n(97),V=n.n(U),M=n(158),q=function(e){var t=e.message,n=e.className,i=e.style;return Object(o.jsxs)("div",{className:V()("d-flex flex-column justify-center align-center vh-100",n),style:i,children:[Object(o.jsx)(M.a,{}),t&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("br",{}),Object(o.jsx)("p",{children:t})]})]})},G=Object(l.lazy)((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,181))})),Q=function(){return Object(o.jsx)(l.Suspense,{fallback:Object(o.jsx)(q,{message:"Loading..."}),children:Object(o.jsx)(J.c,{children:Object(o.jsx)(J.a,{path:"/github-repo/",component:G})})})},X=K(),Y=function(){return Object(o.jsx)(d.a,{store:X,children:Object(o.jsx)(g.a,{history:N,children:Object(o.jsx)(Q,{})})})},Z={palette:{primary:{main:"#005585"},secondary:{main:"#f01388"},error:{main:"#FF3B30"},background:{default:"#fff"},link:{main:"#11456C"},action:{hover:"#b3ccda",selected:"#e0ebf0"}}},$=n(24),ee=function(e){return{".color-white":{color:"#ffffff"},".color-black":{color:"#000000"},".color-primary":{color:e.palette.primary.main},".color-error":{color:e.palette.error.main},".color-success":{color:e.palette.success.main},".color-warning":{color:e.palette.warning.main},".color-info":{color:e.palette.info.main},".color-text-primary":{color:e.palette.text.primary},".color-text-secondary":{color:e.palette.text.secondary}}},te={".d-none":{display:"none"},".d-inline":{display:"inline"},".d-inline-block":{display:"inline-block"},".d-inline-flex":{display:"inline-flex"},".d-block":{display:"block"},".d-flex":{display:"flex"}},ne={".flex-row":{flexDirection:"row"},".flex-row-rev":{flexDirection:"row-reverse"},".flex-column":{flexDirection:"column"},".flex-column-rev":{flexDirection:"column-reverse"},".justify-start":{justifyContent:"flex-start"},".justify-end":{justifyContent:"flex-end"},".justify-center":{justifyContent:"center"},".justify-space-between":{justifyContent:"space-between"},".justify-space-around":{justifyContent:"space-around"},".justify-space-evenly":{justifyContent:"space-evenly"},".justify-row":{justifyContent:"row"},".align-start":{alignItems:"flex-start"},".align-end":{alignItems:"flex-end"},".align-center":{alignItems:"center"},".align-stretch":{alignItems:"stretch"},".align-baseline":{alignItems:"baseline"},".align-self-start":{alignSelf:"flex-start"},".align-self-end":{alignSelf:"flex-end"},".align-self-center":{alignSelf:"center"},".align-self-stretch":{alignSelf:"stretch"},".align-self-baseline":{alignSelf:"baseline"},".flex-nowrap":{flexWrap:"nowrap"},".flex-wrap":{flexWrap:"wrap"},".flex-wrap-reverse":{flexWrap:"wrap-reverse"},".flex-shrink-0":{flexShrink:0}},ie={".position-static":{position:"static"},".position-relative":{position:"relative"},".position-absolute":{position:"absolute"},".position-fixed":{position:"fixed"},".position-sticky":{position:"sticky"}},ae={".w-100":{width:"100%"},".h-100":{height:"100%"},".vw-100":{width:"100vw"},".vh-100":{height:"100vh"},".min-w-100":{minWidth:"100%"},".min-h-100":{minHeight:"100%"},".min-vw-100":{minWidth:"100vw"},".min-vh-100":{minHeight:"100vh"},".max-w-100":{maxWidth:"100%"},".max-h-100":{maxHeight:"100%"},".max-vw-100":{maxWidth:"100vw"},".max-vh-100":{maxHeight:"100vh"}},ce=n(16),re={m:"margin",p:"padding"},oe={t:"Top",b:"Bottom",l:"Left",r:"Right"},le=function(e){var t={},n=["t","b","l","r","x","y","a"],i=[].concat(Object(r.a)(new Array(20).fill().map((function(e,t){return-t/2}))),Object(r.a)(new Array(20).fill().map((function(e,t){return t/2}))));return["m","p"].forEach((function(a){n.forEach((function(n){i.forEach((function(i){var c;switch(n){case"x":var r,o=re[a];r={},Object(ce.a)(r,"".concat(o,"Left"),e.spacing(i)),Object(ce.a)(r,"".concat(o,"Right"),e.spacing(i)),c=r;break;case"y":var l,s=re[a];l={},Object(ce.a)(l,"".concat(s,"Top"),e.spacing(i)),Object(ce.a)(l,"".concat(s,"Bottom"),e.spacing(i)),c=l;break;case"a":var f,b=re[a];f={},Object(ce.a)(f,"".concat(b,"Top"),e.spacing(i)),Object(ce.a)(f,"".concat(b,"Bottom"),e.spacing(i)),Object(ce.a)(f,"".concat(b,"Left"),e.spacing(i)),Object(ce.a)(f,"".concat(b,"Right"),e.spacing(i)),c=f;break;default:var p="".concat(re[a]).concat(oe[n]);c=Object(ce.a)({},p,e.spacing(i))}var u=".".concat(a).concat(n,"-").concat(i.toString().replace("-","n").replace(".","_"));t[u]=c}))}))})),t},se={".text-center":{textAlign:"center"},".text-left":{textAlign:"left"},".text-right":{textAlign:"right"},".text-truncate":{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},".text-bold":{fontWeight:500}},fe=Object(u.a)(Z),be=Object(f.b)({plugins:Object(r.a)(Object(b.a)().plugins)});be.createStyleSheet((c=fe,{"@global":Object($.a)(Object($.a)(Object($.a)(Object($.a)(Object($.a)(Object($.a)(Object($.a)({html:{height:"100%",overflow:"hidden"},body:{height:"100%",fontFamily:"Roboto, Noto Sans TC, sans-serif","-webkit-font-smoothing":"antialiased"},"#root":{height:"100%"},"h1, h2, h3, h4, h5, h6, p":{margin:0,padding:0},a:{display:"inline-block",textDecoration:"none",color:"inherit"},button:{outline:"none",border:"none"}},te),ne),ie),ae),se),ee(c)),le(c))}),{meta:"global"}).attach();var pe=document.getElementById("root");pe&&Object(s.render)(Object(o.jsx)(j.b,{jss:be,children:Object(o.jsxs)(h.a,{theme:fe,children:[Object(o.jsx)(p.a,{}),Object(o.jsx)(Y,{})]})}),pe)}},[[141,1,2]]]);
//# sourceMappingURL=main.5f8e1df5.chunk.js.map