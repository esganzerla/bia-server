(function(t){function e(e){for(var s,r,i=e[0],l=e[1],c=e[2],d=0,f=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&f.push(n[r][0]),n[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,i=1;i<a.length;i++){var l=a[i];0!==n[l]&&(s=!1)}s&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},n={index:0},o=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;o.push([0,"chunk-vendors","chunk-common"]),a()})({0:function(t,e,a){t.exports=a("0128")},"0128":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),n=a("8c4f"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("router-view",{attrs:{name:"header"}}),a("router-view"),a("router-view",{attrs:{name:"footer"}}),a("app-notify"),a("transition",{attrs:{name:"ldfade",appear:""}},[t.isLoading?a("div",{staticClass:"app-loading"},[a("div",{staticClass:"d-flex justify-content-center align-items-center"},[a("i",{staticClass:"fa fa-spin fa-circle-o-notch fa-5x"})])]):t._e()])],1)},r=[],i=(a("8e6e"),a("456d"),a("ac6a"),a("bd86")),l=a("2f62"),c=a("3022"),u=a.n(c),d=a("34bf");function f(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?f(Object(a),!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var m={components:{"app-notify":d["a"]},computed:p({},Object(l["b"])(["isLoading"])),methods:{checkFlashesMessages:function(){var t=this;u.a.isArray(window.app_flashes)?window.app_flashes.forEach((function(e){t.$store.dispatch("notify",e)})):console.warn("Flash messages not configured!")}},created:function(){window.app_loggedIn&&this.$store.dispatch("loadSession")},mounted:function(){this.checkFlashesMessages()}},h=m,v=(a("df5c"),a("58ef"),a("2877")),g=Object(v["a"])(h,o,r,!1,null,"43358155",null),b=g.exports,w=a("1379");window.app_routes=a("ca86"),a("2a2d"),a("098b");var _=new n["a"]({routes:window.app_routes.default}),C=document.body.querySelector("#app");C&&new s["default"]({el:"#app",store:w["a"],router:_,render:function(t){return t(b)}})},"1ab6":function(t,e,a){t.exports=a.p+"static/img/logo-vertical.23280584.png"},3152:function(t,e,a){"use strict";(function(t){a("6b54");var s=a("8592"),n=a("a058");e["a"]={mixins:[n["a"]],data:function(){return{wasValidated:!1,login:{password:null}}},methods:{onBackClick:function(){this.$router.push({name:"auth.login"})},onSaveClick:function(){var e=this,a=this.$route.params.token;a=JSON.parse(t.from(a,"base64").toString("utf-8")),this.$validator.validateAll().then((function(t){if(e.wasValidated=!0,t){var n={password:e.login.password,id:a.id,token:a.token};e.api_loadingShow(),s["a"].post("/api/auth/recoverChangePwd",n).then(e.api_thenDone((function(t){e.onBackClick()}))).catch(e.api_catch((function(t){e.$refs.pwd.focus()})))}}))}},mounted:function(){this.$store.dispatch("setTitle","Recuperar senha")}}}).call(this,a("b639").Buffer)},"58ef":function(t,e,a){"use strict";var s=a("75fb"),n=a.n(s);n.a},"68a6":function(t,e,a){},"75fb":function(t,e,a){},ca86:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div")},n=[],o={},r=o,i=a("2877"),l=Object(i["a"])(r,s,n,!1,null,null,null),c=l.exports,u=a("95bb"),d=a("a801"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"app-bg-image"}),a("div",{staticClass:"container"},[a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12 app-bg-light"},[a("br"),t._m(0),a("br"),a("h4",{staticClass:"text-center"},[t._v("Login")]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.login.username,expression:"login.username"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("username")&&t.wasValidated},attrs:{type:"text",name:"username",placeholder:"email@exemplo.com"},domProps:{value:t.login.username},on:{input:function(e){e.target.composing||t.$set(t.login,"username",e.target.value)}}}),a("small",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("username")&&t.wasValidated,expression:"errors.has('username') && wasValidated"}],staticClass:"text-danger"},[a("strong",[t._v("E-mail")]),t._v(" é obrigatório.\n          ")])]),a("div",{staticClass:"form-group col-12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.login.password,expression:"login.password"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],ref:"pwd",staticClass:"form-control",class:{"is-invalid":t.errors.has("password")&&t.wasValidated},attrs:{type:"password",name:"password",placeholder:"sua senha"},domProps:{value:t.login.password},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onEnterClick(e)},input:function(e){e.target.composing||t.$set(t.login,"password",e.target.value)}}}),a("small",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("password")&&t.wasValidated,expression:"errors.has('password') && wasValidated"}],staticClass:"text-danger"},[t._v("Campo obrigatório.")])]),a("div",{staticClass:"form-group col-xl-12"},[a("button",{staticClass:"w-100 btn btn-success",attrs:{type:"button"},on:{click:t.onEnterClick}},[a("i",{staticClass:"fa fa-sign-in"}),t._v(" Login\n          ")])]),a("div",{staticClass:"form-group col-12 text-center"},[a("router-link",{staticClass:"btn btn-link",attrs:{tag:"a",to:{name:"auth.recover.request"}}},[t._v("Esqueceu sua senha?")])],1),a("div",{staticClass:"form-group col-12 text-center"},[a("a",{staticClass:"btn btn-link",attrs:{href:t.app_website,target:"_contact"}},[t._v("Dúvidas? Entre em contato conosco.")])])])]),a("div",{attrs:{clas:"d-flex align-center justify-center"}})])])},p=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-center"},[s("img",{staticClass:"img-fluid",staticStyle:{"max-width":"250px"},attrs:{src:a("1ab6"),alt:""}})])}],m=a("8592"),h=a("a058"),v={mixins:[h["a"]],data:function(){return{loginInfo:{user:null,account:null}}},computed:{login_redirectIfNotLogged:function(){return!0}},methods:{login_onResponseAction:function(t){this.api_loadingShow(),window.location.href=t.data.url},login_refreshInfo:function(){var t=this;this.api_loadingShow(),m["a"].get("api/auth/session").then((function(e){if(t.api_loadingHide(),e.data){if(e.data.status&&400==e.data.status)return void t.$store.dispatch("redirectToHome","Session expired! Redirecting...");t.loginInfo=e.data}!t.loginInfo.user&&t.login_redirectIfNotLogged?t.$store.dispatch("redirectToHome","User not logged."):t.login_refreshInfoOKAfter()})).catch((function(e){t.$store.dispatch("redirectToHome","Session expired! Redirecting...")}))},login_setAccount:function(t){var e=this;m["a"].post("/api/auth/setAccount",{id:t}).then(this.api_thenDone((function(t){e.api_loadingShow(),window.location.href="/home"}),!0)).catch(this.api_catch())},login_refreshInfoOKAfter:function(){}},mounted:function(){}},g={mixins:[h["a"],v],computed:{login_redirectIfNotLogged:function(){return!1},app_website:function(){return window.app_website}},data:function(){return{wasValidated:!1,login:{try:!1,username:null,password:null}}},methods:{onEnterClick:function(){var t=this;this.$validator.validateAll().then((function(e){if(t.wasValidated=!0,e){var a={username:t.login.username,password:t.login.password};t.api_loadingShow(),m["a"].post("/api/auth/login",a).then(t.api_thenDone((function(e){var a=e.data;a.isStaff&&(t.api_loadingShow(),window.location.href="/home")}),!0)).catch(t.api_catch((function(e){t.$refs.pwd.focus()})))}}))},login_refreshInfoOKAfter:function(){null!=this.loginInfo.user&&(this.api_loadingShow(),window.location.href="/home")}},mounted:function(){this.$store.dispatch("setTitle","Portal"),this.login_refreshInfo()}},b=g,w=Object(i["a"])(b,f,p,!1,null,"68d5a740",null),_=w.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"app-bg-image"}),a("div",{staticClass:"container"},[a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12 app-bg-light"},[a("br"),t._m(0),a("br"),a("p",{staticClass:"text-center text-info"},[t._v("Você realizou logout com sucesso.")]),a("br"),a("button",{staticClass:"btn btn-success w-100",attrs:{type:"button"},on:{click:t.onLoginClick}},[a("i",{staticClass:"fas fa-sign-in-alt"}),t._v(" Ir para Login\n      ")]),a("br"),a("br"),t._m(1),a("br"),a("br")])])])},x=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-center"},[s("img",{staticClass:"img-fluid",staticStyle:{"max-width":"250px"},attrs:{src:a("1ab6"),alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"btn btn-outline-secondary w-100",attrs:{href:"/"}},[a("i",{staticClass:"fas fa-home"}),t._v(" Retornar para home\n      ")])}],y={mixins:[h["a"]],computed:{login_redirectIfNotLogged:function(){return!1}},data:function(){return{}},methods:{onLoginClick:function(){this.$router.push({name:"auth.login"})},login_refreshInfoOKAfter:function(){this.loginInfo.user}},mounted:function(){this.$store.dispatch("setTitle","Logout com sucesso"),this.notify_success("Você realizou um logout com sucesso.")}},k=y,O=Object(i["a"])(k,C,x,!1,null,"584d7793",null),$=O.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"app-bg-image"}),a("div",{staticClass:"container"},[a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12 app-bg-light"},[a("br"),t._m(0),a("br"),a("h4",{staticClass:"text-center"},[t._v("Qual é o seu e-mail?")]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.login.username,expression:"login.username"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("username")&&t.wasValidated},attrs:{type:"text",name:"username",placeholder:"email@exemplo.com"},domProps:{value:t.login.username},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onRecoverClick(e)},input:function(e){e.target.composing||t.$set(t.login,"username",e.target.value)}}}),a("small",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("username")&&t.wasValidated,expression:"errors.has('username') && wasValidated"}],staticClass:"text-danger"},[t._v("\n            Campo\n            "),a("strong",[t._v("e-mail")]),t._v(" é obrigatório.\n          ")])]),a("div",{staticClass:"form-group col-xl-12"},[a("button",{staticClass:"w-100 btn btn-success",attrs:{type:"button"},on:{click:t.onRecoverClick}},[a("i",{staticClass:"fas fa-envelope"}),t._v(" Enviar e-mail com instruções\n          ")])]),a("div",{staticClass:"form-group col-xl-12 mb-0"},[a("button",{staticClass:"w-100 btn btn-link",attrs:{type:"button"},on:{click:t.onBackClick}},[a("i",{staticClass:"fas fa-sign-in-alt"}),t._v(" Login\n          ")])])]),a("br")])])])},S=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-center"},[s("img",{staticClass:"img-fluid",staticStyle:{"max-width":"250px"},attrs:{src:a("1ab6"),alt:""}})])}],E={mixins:[h["a"]],data:function(){return{wasValidated:!1,login:{try:!1,username:null}}},methods:{onBackClick:function(){this.$router.push({name:"auth.login"})},onRecoverClick:function(){var t=this;this.$validator.validateAll().then((function(e){if(t.wasValidated=!0,e){var a={username:t.login.username};t.api_loadingShow(),m["a"].post("/api/auth/recoverRequest",a).then(t.api_thenDone((function(e){t.notify_success("E-mail enviado com sucesso. Por favor verifique seu sua caixa e siga as instruções.")}),!0)).catch(t.api_catch())}}))}},mounted:function(){this.$store.dispatch("setTitle","Esqueci minha senha")}},P=E,V=Object(i["a"])(P,j,S,!1,null,"6c983db8",null),I=V.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"app-bg-image"}),a("div",{staticClass:"container"},[a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12 app-bg-light"},[a("br"),t._m(0),a("br"),a("h4",{staticClass:"text-center"},[t._v("Digite sua nova senha")]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.login.password,expression:"login.password"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("password")&&t.wasValidated},attrs:{type:"password",name:"password",placeholder:"nova senha"},domProps:{value:t.login.password},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSaveClick(e)},input:function(e){e.target.composing||t.$set(t.login,"password",e.target.value)}}}),a("small",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("password")&&t.wasValidated,expression:"errors.has('password') && wasValidated"}],staticClass:"text-danger"},[t._v("Campo obrigatório.")])]),a("div",{staticClass:"form-group col-xl-12 mb-0"},[a("button",{staticClass:"w-100 btn btn-success",attrs:{type:"button"},on:{click:t.onSaveClick}},[a("i",{staticClass:"fas fa-key"}),t._v(" Salvar e ir para login\n          ")])])]),a("br")])])])},q=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-center"},[s("img",{staticClass:"img-fluid",staticStyle:{"max-width":"250px"},attrs:{src:a("1ab6")}})])}],L=a("3152"),A=L["a"],D=Object(i["a"])(A,N,q,!1,null,"260128e0",null),R=D.exports;e["default"]=[{path:"/",redirect:"/auth/login"},{path:"/auth/login",name:"auth.login",components:{default:_,header:c,footer:d["a"]}},{path:"/auth/logout",name:"auth.logout",components:{default:$,header:c,footer:d["a"]}},{path:"/auth/recoverRequest",name:"auth.recover.request",components:{default:I,header:c,footer:d["a"]}},{path:"/auth/recover/:token",name:"auth.recover.change",components:{default:R,header:c,footer:d["a"]}},{path:"*",components:{default:u["a"],header:c,footer:d["a"]}}]},df5c:function(t,e,a){"use strict";var s=a("68a6"),n=a.n(s);n.a}});
//# sourceMappingURL=index.5c46a7cab0b46573d053.js.map