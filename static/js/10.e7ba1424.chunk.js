(this["webpackJsonporder-food"]=this["webpackJsonporder-food"]||[]).push([[10],{126:function(e,a,t){e.exports={"login-wrapper":"LoginPage_login-wrapper__3UZxV","login-content":"LoginPage_login-content__2OsD6",col:"LoginPage_col__2xXhm",invalid:"LoginPage_invalid__3BPtP",visiblePassword:"LoginPage_visiblePassword__1pEjp","invalid-text":"LoginPage_invalid-text__2XKlm",invalidInput:"LoginPage_invalidInput__259GM"}},144:function(e,a,t){"use strict";t.r(a);var r=t(25),n=t.n(r),o=t(39),c=t(10),s=t(0),i=t(112),l=t(85),d=t(116),u=t(148),b=t(109),p=t(126),j=t.n(p),h=t.p+"static/media/logo.186257aa.png",g=t(45),f=t(127),m=t(124);Object(f.a)({apiKey:"AIzaSyCP4P7XU29SFzjRcWaqaEZUiNBf9fEQ8nw",authDomain:"order-food-project-cc48b.firebaseapp.com",databaseURL:"https://order-food-project-cc48b-default-rtdb.firebaseio.com",projectId:"order-food-project-cc48b",storageBucket:"order-food-project-cc48b.appspot.com",messagingSenderId:"827788556335",appId:"1:827788556335:web:c6db8f9c864e1093962eda"});var v=Object(m.a)(),x=t(7),O=t(80),_=t(31),w=t(33),P=t(1);a.default=function(){var e=Object(x.t)(),a=Object(s.useState)(!0),t=Object(c.a)(a,2),r=t[0],p=t[1];Object(s.useEffect)((function(){var a=localStorage.getItem("Auth Token");return a&&e("/home"),a||e("/login"),function(){console.log("cleanup")}}),[e]);var f=Object(g.a)((function(e){return e.includes("@")})),N=f.value,k=f.changeHandler,I=f.blurHandler,L=f.isValid,E=f.hasError,S=f.reset,y=Object(g.a)((function(e){return e.trim().length>=7})),C=y.value,B=y.changeHandler,H=y.blurHandler,U=y.isValid,V=y.hasError,q=y.reset,A=!1;U&&L&&(A=!0);var D=function(){var a=Object(o.a)(n.a.mark((function a(t){var r;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t.preventDefault(),A){a.next=3;break}return a.abrupt("return");case 3:return a.prev=3,a.next=6,Object(m.b)(v,N,C);case 6:r=a.sent,localStorage.setItem("Auth Token",r._tokenResponse.refreshToken),e("/home"),a.next=16;break;case 11:a.prev=11,a.t0=a.catch(3),"auth/wrong-password"===a.t0.cod&&"auth/user-not-found"===a.t0.code&&O.b.error("\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc \u0648 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0627\u0634\u062a\u0628\u0627\u0647 \u0627\u0633\u062a"),"auth/wrong-password"===a.t0.code&&O.b.error("\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0627\u0634\u062a\u0628\u0627\u0647 \u0627\u0633\u062a"),"auth/user-not-found"===a.t0.code&&O.b.error("\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc \u0627\u0634\u062a\u0628\u0627\u0647 \u0627\u0633\u062a");case 16:S(),q();case 18:case"end":return a.stop()}}),a,null,[[3,11]])})));return function(e){return a.apply(this,arguments)}}();return Object(P.jsx)("section",{className:j.a["login-wrapper"],children:Object(P.jsx)(i.a,{className:j.a["login-content"],children:Object(P.jsxs)(l.a,{md:4,className:j.a.col,children:[Object(P.jsx)("img",{className:"login_icon",src:h,alt:"login user"}),Object(P.jsx)("h3",{children:"\u0648\u0631\u0648\u062f \u0628\u0647 \u062d\u0633\u0627\u0628 \u06a9\u0627\u0631\u0628\u0631\u06cc"}),Object(P.jsxs)(d.a,{noValidate:!0,onSubmit:D,children:[Object(P.jsxs)(d.a.Group,{className:"mb-3",controlId:"formEmail",children:[Object(P.jsx)(d.a.Label,{children:"\u0627\u06cc\u0645\u06cc\u0644"}),Object(P.jsx)(d.a.Control,{type:"email",value:N,className:E?j.a.invalid:"",placeholder:"\u0627\u06cc\u0645\u06cc\u0644",onChange:k,onBlur:I,required:!0}),E&&Object(P.jsx)("div",{className:j.a["invalid-text"],children:"\u0627\u06cc\u0645\u06cc\u0644 \u0646\u0627\u0645\u0639\u062a\u0628\u0631 \u0627\u0633\u062a"})]}),Object(P.jsxs)(d.a.Group,{className:"mb-3",controlId:"formPassword",children:[Object(P.jsx)(d.a.Label,{children:"\u0631\u0645\u0632 \u0639\u0628\u0648\u0631"}),Object(P.jsxs)(u.a,{children:[Object(P.jsx)(d.a.Control,{type:r?"password":"text",value:C,className:V?j.a.invalid:"",placeholder:"\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 ",onChange:B,onBlur:H,required:!0}),Object(P.jsx)(_.a,{icon:r?w.c:w.d,className:j.a.visiblePassword,onClick:function(){p((function(e){return!e}))}})]}),V&&Object(P.jsxs)("div",{className:j.a["invalid-text"],children:[" ","\u067e\u0633\u0648\u0631\u062f \u0646\u0628\u0627\u06cc\u062f \u06a9\u0645\u062a\u0631 \u0627\u0632 7 \u06a9\u0627\u0631\u0627\u06a9\u062a\u0631 \u0628\u0627\u0634\u062f"]})]}),Object(P.jsx)(b.a,{variant:"light",type:"submit",disabled:!A,children:"\u0648\u0631\u0648\u062f"})]})]})})})}}}]);
//# sourceMappingURL=10.e7ba1424.chunk.js.map