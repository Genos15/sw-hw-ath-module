(this["webpackJsonp--hw-sw-user-panel"]=this["webpackJsonp--hw-sw-user-panel"]||[]).push([[0],{123:function(e,t,n){},124:function(e,t,n){},237:function(e,t,n){"use strict";n.r(t);var r,i,o,s,a,c,d,l,b,u,h,j,x,m,p,f,O,g,w,v,y,S,C,k,T=n(0),E=n.n(T),L=n(46),F=n.n(L),I=(n(123),n(124),n(55)),N=n(10),P=n(11),R=n(9),q={primaryColor:"#FFFFFF",secondaryColor:"#666",bgColor:"#FFFFFF",bgSecondColor:"#121212",accentColor:"#025955",accentColorGradient:"#03506f, #0a043c",contentBgColor:"#F6F6F6",contentAccentColor:"#EEEEEE",textColor:"#121212",contentTextColor:"#9E9E9E",downOutlineColor:"#e0e0e0",textColorReverse:"#E1E1E1"},z={primaryColor:"#121212",secondaryColor:"#666",bgColor:"#121212",bgSecondColor:"#E1E1E1",accentColor:"#025955",accentColorGradient:"#03506f, #0a043c",contentBgColor:"#F6F6F6",contentAccentColor:"#EEEEEE",textColor:"#E1E1E1",contentTextColor:"#9E9E9E",downOutlineColor:"#e0e0e0",textColorReverse:"#121212"},_=new(function(){function e(){var t=this;Object(N.a)(this,e),this.theme="light",this.setTheme=function(e){t.theme=e},this.switchTheme=function(){"light"===t.theme?t.theme="dark":t.theme="light"},Object(R.m)(this,{theme:R.n,setTheme:R.f,switchTheme:R.f})}return Object(P.a)(e,[{key:"CurrentTheme",get:function(){return"dark"===this.theme?z:q}}]),e}()),D=n(15),M=n(6),A=n(8),J=M.b.hr(r||(r=Object(A.a)(["\n  height: .5px;\n  width: 100%;\n  border: none;\n  margin-top: 35px;\n  margin-bottom: 15px;\n  background-color: ",";\n"])),(function(e){return e.theme.secondaryColor})),W=n(240),B=M.b.div(i||(i=Object(A.a)(["\n  max-width: 50vw;\n  height: 100vh;\n  padding: 0 0 0 50px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  z-index: 1000;\n  background-color: ",";\n"])),(function(e){return e.theme.bgColor})),G=M.b.div(o||(o=Object(A.a)(["\n  width: 400px;\n  align-items: flex-start;\n  display: flex;\n  flex-direction: column;\n"]))),K=Object(M.b)(W.a)(s||(s=Object(A.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 100%;\n"]))),V=n(251),Y=n(29),U=n(37),$=n(16),H=new(function(){function e(){Object(N.a)(this,e),this.LOGIN_FIELDS={username:"username",password:"password"},this.onSubmit=function(e){e&&alert(JSON.stringify(e))},this.onErrors=function(e){}}return Object(P.a)(e,[{key:"fields",get:function(){return this.LOGIN_FIELDS}},{key:"MySchema",get:function(){return $.a().shape({username:$.c().min(4).required(),password:$.c().min(6).required()})}}]),e}()),Q=M.b.div(a||(a=Object(A.a)(["\n  width: 100%;\n  margin-bottom: 20px;\n  position: relative;\n\n  .bx--form__helper-text {\n    text-align: left;\n  }\n"]))),X=n(248),Z=Object(M.b)(X.a)(c||(c=Object(A.a)(["\n  width: 100%;\n"]))),ee=n(249).a,te=n(25),ne=Object(M.b)(te.b)(d||(d=Object(A.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n"]))),re=n(242),ie=n(250),oe=Object(M.b)(ie.a)(l||(l=Object(A.a)(["\n  width: 100%;\n  max-width: 400px;\n"]))),se=n(243),ae=n(4),ce=function(e){var t=e.register,n=e.handleSubmit,r=e.errors,i=Object(V.a)(void 0,{useSuspense:!1}).t;return Object(ae.jsxs)(K,{onSubmit:n(H.onSubmit,H.onErrors),children:[Object(ae.jsx)(Q,{children:Object(ae.jsx)(Z,{helperText:i("username-helper-text"),id:ee(),ref:t,name:H.fields.username,invalid:void 0!==r.username,invalidText:i("required-field-text"),labelText:i("username-title"),placeholder:i("username-placeholder")})}),Object(ae.jsxs)(Q,{children:[Object(ae.jsx)(ne,{to:"/recovery",children:i("forgot-password-text")}),Object(ae.jsx)(Z.PasswordInput,{helperText:i("password-helper-text"),id:ee(),ref:t,invalidText:i("invalid-password-field-text"),invalid:void 0!==r.password,name:H.fields.password,labelText:i("password-title"),hidePasswordLabel:i("hide-password-text"),showPasswordLabel:i("show-password-text"),placeholder:i("password-placeholder")})]}),Object(ae.jsx)(Q,{children:Object(ae.jsx)(re.a,{defaultChecked:!0,labelText:i("remember-me-text"),id:ee()})}),Object(ae.jsx)(oe,{kind:"primary",tabIndex:0,renderIcon:se.a,iconDescription:"Sensor system",type:"submit",children:i("login-submit-title")})]})},de=Object(T.memo)(ce),le=function(){var e=Object(V.a)(void 0,{useSuspense:!1}).t,t=Object(Y.b)({resolver:Object(U.yupResolver)(H.MySchema)}),n=t.register,r=t.handleSubmit,i=t.errors;return Object(ae.jsxs)(G,{children:[Object(ae.jsx)("h3",{children:e("login-title")}),Object(ae.jsx)("span",{children:e("slogan")}),Object(ae.jsx)(J,{}),Object(ae.jsx)(de,{register:n,handleSubmit:r,errors:i})]})},be=Object(T.memo)(le),ue=n.p+"static/media/login-image-2.f510386d.svg",he=M.b.div(b||(b=Object(A.a)(["\n  width: 100%;\n  height: 100vh;\n  background-color: ",";\n  color: ",";\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  position: relative;\n  overflow: hidden;\n"])),(function(e){return e.theme.bgColor}),(function(e){return e.theme.textColor})),je=M.b.div(u||(u=Object(A.a)(["\n  position: absolute;\n  top: 25%;\n  right: 35px;\n  z-index: 1;\n\n  &:before {\n    background-image: url(",');\n    background-size: contain;\n    background-repeat: no-repeat;\n    content: "";\n    display: inline-block;\n    vertical-align: center;\n    horiz-align: center;\n    width: 30vw;\n    height: 30vw;\n  }\n'])),(function(){return ue})),xe=M.b.div(h||(h=Object(A.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 100%;\n  max-width: ",";\n  padding-left: ",";\n"])),(function(e){return(null===e||void 0===e?void 0:e.doubleWidth)?"800px":"400px"}),(function(e){return"".concat(e.paddingLeft,"px")})),me=M.b.div(j||(j=Object(A.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  background-color: ",";\n  width: 100vw;\n  height: 100%;\n  position: relative;\n\n  "," {\n    margin-bottom: 20px;\n  }\n"])),(function(e){return e.theme.bgColor}),xe),pe=Object(M.b)(ie.a)(x||(x=Object(A.a)(["\n  width: 100%;\n  max-width: 100%;\n"]))),fe=M.b.span(m||(m=Object(A.a)(["\n  margin-bottom: 20px;\n"]))),Oe=n(244),ge=function(){var e=Object(D.f)(),t=Object(V.a)(void 0,{useSuspense:!1}).t;return Object(ae.jsx)(me,{children:Object(ae.jsxs)(xe,{children:[Object(ae.jsx)(J,{}),Object(ae.jsx)(fe,{children:t("create-account-text")}),Object(ae.jsx)(pe,{renderIcon:Oe.a,onClick:function(){return null===e||void 0===e?void 0:e.push("/create-account")},kind:"tertiary",children:t("set-up-board-text")})]})})},we=Object(T.memo)(ge),ve=Object(I.c)((function(){return Object(ae.jsx)(M.a,{theme:_.CurrentTheme,children:Object(ae.jsxs)(he,{children:[Object(ae.jsxs)(B,{children:[Object(ae.jsx)(be,{}),Object(ae.jsx)(we,{})]}),Object(ae.jsx)(je,{})]})})})),ye=Object(I.b)("ThemeStore")(ve),Se=M.b.div(p||(p=Object(A.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  width: ",";\n\n  "," {\n  }\n"])),(function(e){return e.maxWidth?"".concat(e.maxWidth,"%"):"100%"}),Q),Ce=M.b.span(f||(f=Object(A.a)(["\n  width: ",";\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n"])),(function(e){return(null===e||void 0===e?void 0:e.width)?"".concat(null===e||void 0===e?void 0:e.width,"rem"):"2rem"})),ke=n.p+"static/media/login-image-add-user.f0b9a4c2.svg",Te=M.b.div(O||(O=Object(A.a)(["\n  position: absolute;\n  bottom: 0;\n  right: 35px;\n  z-index: 1;\n  background-color: ",";\n\n  &:before {\n    background-image: url(",');\n    background-size: contain;\n    background-repeat: no-repeat;\n    content: "";\n    display: inline-block;\n    vertical-align: center;\n    horiz-align: center;\n    width: 30vw;\n    height: 30vw;\n  }\n'])),(function(e){return e.theme.bgColor}),(function(){return ke})),Ee=/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,Le=new(function(){function e(){Object(N.a)(this,e),this.CREATE_ACCOUNT_FIELDS={firstName:"firstName",lastName:"lastName",middleName:"middleName",phone:"phone",email:"email",password:"password",passwordConfirmation:"passwordConfirmation"},this.onCheckTermsAndConditions=function(e,t,n,r){r&&r(e)},this.onSubmit=function(e){e&&alert(JSON.stringify(e))},this.onErrors=function(e){}}return Object(P.a)(e,[{key:"fields",get:function(){return this.CREATE_ACCOUNT_FIELDS}},{key:"MySchema",get:function(){return $.a().shape({firstName:$.c().required(),lastName:$.c().required(),middleName:$.c().optional(),phone:$.c().matches(Ee,"Phone number is not valid"),email:$.c().email().required(),password:$.c().min(6).required(),passwordConfirmation:$.c().oneOf([$.b("password"),null],"Passwords must match").required()})}}]),e}()),Fe=n(19),Ie=function(){var e=Object(V.a)(void 0,{useSuspense:!1}).t,t=Object(T.useState)(!1),n=Object(Fe.a)(t,2),r=n[0],i=n[1];return Object(ae.jsxs)(ae.Fragment,{children:[Object(ae.jsx)(Q,{children:Object(ae.jsx)(re.a,{defaultChecked:r,onChange:function(e,t,n){return Le.onCheckTermsAndConditions(e,t,n,i)},labelText:Object(ae.jsxs)("span",{children:[e("terms-conditions-text"),Object(ae.jsx)(te.b,{to:"/terms-and-conditions",children:"SensorKit.ru"})]}),id:ee()})}),Object(ae.jsx)(oe,{kind:"primary",tabIndex:0,disabled:!r,renderIcon:se.a,iconDescription:"Sensor system",type:"submit",children:e("create-account-text")})]})},Ne=Object(T.memo)(Ie),Pe=n(247),Re=function(e){var t=e.register,n=e.handleSubmit,r=e.errors,i=Object(V.a)(void 0,{useSuspense:!1}).t,o=Object(ae.jsx)(Pe.a,{direction:"bottom",tabIndex:0,triggerText:i("phone-text"),children:Object(ae.jsx)("p",{children:i("why-collecting-phone-text")})});return Object(ae.jsxs)(K,{onSubmit:n(Le.onSubmit,Le.onErrors),children:[Object(ae.jsxs)(Se,{children:[Object(ae.jsx)(Q,{children:Object(ae.jsx)(Z,{id:ee(),invalidText:i("required-field-text"),ref:t,name:Le.fields.firstName,labelText:i("first-name-text"),placeholder:i("first-name-placeholder-text"),invalid:void 0!==r.firstName})}),Object(ae.jsx)(Ce,{}),Object(ae.jsx)(Q,{children:Object(ae.jsx)(Z,{id:ee(),ref:t,name:Le.fields.lastName,invalidText:i("required-field-text"),invalid:void 0!==r.lastName,labelText:i("last-name-text"),placeholder:i("last-name-placeholder-text")})})]}),Object(ae.jsxs)(Se,{children:[Object(ae.jsx)(Q,{children:Object(ae.jsx)(Z,{id:ee(),ref:t,invalid:void 0!==r.middleName,name:Le.fields.middleName,labelText:i("middle-name-text"),placeholder:i("middle-name-placeholder-text")})}),Object(ae.jsx)(Ce,{}),Object(ae.jsx)(Q,{children:Object(ae.jsx)(Z,{id:ee(),helperText:i("phone-format-text"),invalidText:i("phone-format-text"),ref:t,invalid:void 0!==r.phone,name:Le.fields.phone,labelText:o,placeholder:i("phone-placeholder-text")})})]}),Object(ae.jsx)(Q,{children:Object(ae.jsx)(Z,{id:ee(),invalidText:i("invalid-email-field-text"),ref:t,invalid:void 0!==r.email,name:Le.fields.email,labelText:i("email-text"),placeholder:i("email-placeholder-text")})}),Object(ae.jsxs)(Se,{children:[Object(ae.jsx)(Q,{children:Object(ae.jsx)(Z.PasswordInput,{id:ee(),helperText:i("password-helper-text"),invalidText:i("invalid-password-field-text"),ref:t,invalid:void 0!==r.password,name:Le.fields.password,labelText:i("password-title"),hidePasswordLabel:i("hide-password-text"),showPasswordLabel:i("show-password-text"),placeholder:i("password-placeholder")})}),Object(ae.jsx)(Ce,{}),Object(ae.jsx)(Q,{children:Object(ae.jsx)(Z.PasswordInput,{id:ee(),helperText:i("password-helper-text"),invalidText:i("invalid-password-field-confirmation-text"),ref:t,invalid:void 0!==r.passwordConfirmation,name:Le.fields.passwordConfirmation,labelText:i("confirm-password-text"),hidePasswordLabel:i("hide-password-text"),showPasswordLabel:i("show-password-text"),placeholder:i("confirm-password-placeholder-text")})})]}),Object(ae.jsx)(Ne,{})]})},qe=Object(T.memo)(Re),ze=function(){var e=Object(V.a)(void 0,{useSuspense:!1}).t,t=Object(Y.b)({resolver:Object(U.yupResolver)(Le.MySchema)}),n=t.register,r=t.handleSubmit,i=t.errors;return Object(ae.jsxs)(me,{children:[Object(ae.jsxs)(xe,{paddingLeft:50,doubleWidth:!0,children:[Object(ae.jsx)("h3",{children:e("create-account-text")}),Object(ae.jsxs)(Se,{children:[Object(ae.jsx)("span",{children:e("slogan")}),Object(ae.jsx)(Ce,{width:.5,children:"."}),Object(ae.jsx)(te.b,{to:"/",children:e("already-have-account-text")})]}),Object(ae.jsx)(J,{}),Object(ae.jsx)(qe,{register:n,handleSubmit:r,errors:i})]}),Object(ae.jsx)(Te,{})]})},_e=Object(T.memo)(ze),De=M.b.div(g||(g=Object(A.a)(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),Me=function(){return Object(ae.jsx)(De,{children:"404 - Module not found\u2026"})},Ae=Object(T.memo)(Me),Je=n(246),We=n(12),Be=n(13),Ge=n.n(Be),Ke=n(20),Ve=n(32),Ye=new(function(){function e(){Object(N.a)(this,e),this.mySupportedLanguages=new Map([["en","English"],["ru","\u0420\u0443\u0441\u0441\u043a\u0438\u0439"],["cn","\u4e2d\u6587"]]),this._onSwitch=function(){var e=Object(Ke.a)(Ge.a.mark((function e(t){var n;return Ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ve.a.changeLanguage(null===(n=t.selectedItem)||void 0===n?void 0:n.id);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}return Object(P.a)(e,[{key:"myLanguages",get:function(){return this.mySupportedLanguages[Symbol.iterator]=Ge.a.mark((function e(){return Ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.delegateYield(Object(We.a)(this.entries()).sort((function(e,t){return e[0]===Ve.a.language&&t[0]!==Ve.a.language?1:0})),"t0",1);case 1:case"end":return e.stop()}}),e,this)})),this.mySupportedLanguages}},{key:"selectedLanguage",get:function(){return Ve.a.language}}]),e}()),Ue=M.b.div(w||(w=Object(A.a)(["\n  width: 100%;\n  margin-bottom: 50px;\n"]))),$e=function(){var e=Object(V.a)(void 0,{useSuspense:!1}).t,t=Array.from(Ye.myLanguages).map((function(e){var t=Object(Fe.a)(e,2);return{id:t[0],text:t[1]}}));return Object(ae.jsx)(Ue,{children:Object(ae.jsx)(Je.a,{items:t,itemToString:function(e){return e?e.text:""},onChange:Ye._onSwitch,placeholder:e("select-language-text"),id:ee()})})},He=Object(T.memo)($e),Qe=M.b.div(v||(v=Object(A.a)(["\n  display: flex;\n  flex-direction: row;\n  background-color: ",";\n  padding: 20px 0 0 50px;\n  justify-content: flex-start;\n\n  "," {\n    max-width: 400px;\n  }\n"])),(function(e){return e.theme.bgColor}),Ue),Xe=function(){return Object(ae.jsx)(Qe,{children:Object(ae.jsx)(He,{})})},Ze=Object(T.memo)(Xe),et=n.p+"static/media/login-image-recovery.2385ded1.svg",tt=n.p+"static/media/login-image-confirm-password.15cbeb5d.svg",nt=M.b.div(y||(y=Object(A.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n"]))),rt=M.b.div(S||(S=Object(A.a)(["\n\n  background-color: ",";\n  display: flex;\n  flex-direction: column;\n  min-width: 100vw;\n  min-height: 90vh;\n  align-items: flex-start;\n  margin: 0 0 0 50px;\n  position: relative;\n\n  "," {\n    max-width: 400px;\n  }\n"])),(function(e){return e.theme.bgColor}),nt),it=M.b.div(C||(C=Object(A.a)(["\n  position: absolute;\n  bottom: -10%;\n  right: 35px;\n  z-index: 1;\n  background-color: ",";\n\n  &:before {\n    background-image: url(",');\n    background-size: contain;\n    background-repeat: no-repeat;\n    content: "";\n    display: inline-block;\n    vertical-align: center;\n    horiz-align: center;\n    width: 30vw;\n    height: 30vw;\n  }\n'])),(function(e){return e.theme.bgColor}),(function(){return et})),ot=M.b.div(k||(k=Object(A.a)(["\n  position: absolute;\n  bottom: -10%;\n  right: 35px;\n  z-index: 1;\n  background-color: ",";\n\n  &:before {\n    background-image: url(",');\n    background-size: contain;\n    background-repeat: no-repeat;\n    content: "";\n    display: inline-block;\n    vertical-align: center;\n    horiz-align: center;\n    width: 30vw;\n    height: 30vw;\n  }\n'])),(function(e){return e.theme.bgColor}),(function(){return tt})),st=new(function(){function e(){Object(N.a)(this,e),this.RECOVERY_FIELDS={username:"username",password:"password",passwordConfirmation:"passwordConfirmation"},this.onSubmit=function(e){e&&alert(JSON.stringify(e))},this.onErrors=function(e){}}return Object(P.a)(e,[{key:"fields",get:function(){return this.RECOVERY_FIELDS}},{key:"MySchema",get:function(){return $.a().shape({username:$.c().min(4).required()})}},{key:"MyRenewPasswordSchema",get:function(){return $.a().shape({password:$.c().min(6).required(),passwordConfirmation:$.c().oneOf([$.b("password"),null],"Passwords must match").required()})}}]),e}()),at=function(e){var t=e.register,n=e.errors,r=e.handleSubmit,i=Object(V.a)(void 0,{useSuspense:!1}).t;return Object(ae.jsxs)(K,{onSubmit:r(st.onSubmit,st.onErrors),children:[Object(ae.jsx)(Q,{children:Object(ae.jsx)(Z,{helperText:i("username-helper-text"),id:ee(),ref:t,name:st.fields.username,invalid:void 0!==n.username,invalidText:i("required-field-text"),labelText:i("username-title"),placeholder:i("username-placeholder")})}),Object(ae.jsx)(oe,{kind:"primary",tabIndex:0,renderIcon:se.a,iconDescription:"Recovery Sensor Kit",type:"submit",children:i("continue-text")})]})},ct=Object(T.memo)(at),dt=function(){var e=Object(V.a)(void 0,{useSuspense:!1}).t,t=Object(Y.b)({resolver:Object(U.yupResolver)(st.MySchema)}),n=t.register,r=t.handleSubmit,i=t.errors;return Object(ae.jsxs)(rt,{children:[Object(ae.jsxs)(nt,{children:[Object(ae.jsx)("h3",{children:e("recovery-password-text")}),Object(ae.jsx)("span",{children:e("slogan")}),Object(ae.jsx)(J,{}),Object(ae.jsx)(ct,{register:n,handleSubmit:r,errors:i}),Object(ae.jsx)(te.b,{to:"/renew-password",children:"tmp-confirm"})]}),Object(ae.jsx)(it,{})]})},lt=Object(T.memo)(dt),bt=function(e){var t=e.register,n=e.errors,r=e.handleSubmit,i=Object(V.a)(void 0,{useSuspense:!1}).t;return Object(ae.jsxs)(K,{onSubmit:r(st.onSubmit,st.onErrors),children:[Object(ae.jsx)(Q,{children:Object(ae.jsx)(Z.PasswordInput,{helperText:i("password-helper-text"),id:ee(),ref:t,invalidText:i("invalid-password-field-text"),invalid:void 0!==n.password,name:st.fields.password,labelText:i("password-title"),hidePasswordLabel:i("hide-password-text"),showPasswordLabel:i("show-password-text"),placeholder:i("password-placeholder")})}),Object(ae.jsx)(Q,{children:Object(ae.jsx)(Z.PasswordInput,{id:ee(),invalidText:i("invalid-password-field-confirmation-text"),ref:t,invalid:void 0!==n.passwordConfirmation,name:st.fields.passwordConfirmation,labelText:i("confirm-password-text"),hidePasswordLabel:i("hide-password-text"),showPasswordLabel:i("show-password-text"),placeholder:i("confirm-password-placeholder-text")})}),Object(ae.jsx)(oe,{kind:"primary",tabIndex:0,renderIcon:se.a,iconDescription:"Recovery Sensor Kit",type:"submit",children:i("continue-text")})]})},ut=Object(T.memo)(bt),ht=function(){var e=Object(V.a)(void 0,{useSuspense:!1}).t,t=Object(Y.b)({resolver:Object(U.yupResolver)(st.MyRenewPasswordSchema)}),n=t.register,r=t.handleSubmit,i=t.errors;return Object(ae.jsxs)(rt,{children:[Object(ae.jsxs)(nt,{children:[Object(ae.jsx)("h3",{children:e("renew-password-text")}),Object(ae.jsx)("span",{children:e("slogan")}),Object(ae.jsx)(J,{}),Object(ae.jsx)(ut,{register:n,handleSubmit:r,errors:i})]}),Object(ae.jsx)(ot,{})]})},jt=Object(T.memo)(ht),xt=function(){var e=Object(V.a)(void 0,{useSuspense:!1}).t;return Object(ae.jsx)(me,{children:Object(ae.jsx)(xe,{paddingLeft:50,doubleWidth:!0,children:Object(ae.jsx)("h3",{children:e("terms-and-condition-text")})})})},mt=Object(T.memo)(xt),pt=function(){return Object(ae.jsxs)(ae.Fragment,{children:[Object(ae.jsx)(Ze,{}),Object(ae.jsxs)(D.c,{children:[Object(ae.jsx)(D.a,{exact:!0,path:"/",component:ye}),Object(ae.jsx)(D.a,{path:"/create-account",component:_e}),Object(ae.jsx)(D.a,{path:"/recovery",component:lt}),Object(ae.jsx)(D.a,{path:"/renew-password",component:jt}),Object(ae.jsx)(D.a,{path:"/terms-and-conditions",component:mt}),Object(ae.jsx)(D.a,{component:Ae})]})]})},ft=Object(T.memo)(pt);var Ot=function(){return Object(ae.jsx)("div",{className:"App",children:Object(ae.jsx)(I.a,{ThemeStore:_,children:Object(ae.jsx)(ft,{})})})},gt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,252)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),r(e),i(e),o(e),s(e)}))},wt=n(43),vt=n(115),yt=n(117),St=["en","ru","cn"];Object(Ke.a)(Ge.a.mark((function e(){return Ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ve.a.use(vt.a).use(yt.a).use(wt.e).init({fallbackLng:"en",debug:!0,whitelist:St,interpolation:{escapeValue:!1}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))();Ve.a,n(236);var Ct=n(245);F.a.render(Object(ae.jsx)(E.a.StrictMode,{children:Object(ae.jsx)(Ct.a,{i18n:Ve.a,children:Object(ae.jsx)(te.a,{children:Object(ae.jsx)(Ot,{})})})}),document.getElementById("root")),gt()}},[[237,1,2]]]);
//# sourceMappingURL=main.fa2f4628.chunk.js.map