webpackJsonp([1],{100:function(t,e){},101:function(t,e){},183:function(t,e,a){"use strict";a.d(e,"a",function(){return o});var s=a(30),n=a.n(s),i={apiKey:"AIzaSyDK7FroRGiWxxI8pBh7itIfrxu7skJ8tvY",authDomain:"meme-reviews-007.firebaseapp.com",databaseURL:"https://meme-reviews-007.firebaseio.com",projectId:"meme-reviews-007",storageBucket:"meme-reviews-007.appspot.com",messagingSenderId:"602865440061"},r=n.a.initializeApp(i),o=r.database()},184:function(t,e,a){"use strict";var s=a(86),n=a(185),i=a(13),r=i(s.a,n.a,!1,null,null,null);e.a=r.exports},185:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar is-transparent is-fixed-top"},[a("div",{staticClass:"navbar-brand"},[t._m(0),t._v(" "),a("div",{staticClass:"navbar-burger burger",class:{"is-active":t.showNav},on:{click:function(e){t.showNav=!t.showNav}}},[a("span"),t._v(" "),a("span"),t._v(" "),a("span")])]),t._v(" "),a("div",{staticClass:"navbar-menu",class:{"is-active":t.showNav}},[t.signedIn?t._e():a("div",{staticClass:"navbar-end"},[a("div",{staticClass:"navbar-item"},[a("router-link",{staticClass:"button is-rounded is-primary",attrs:{tag:"a",to:{name:"signup"}}},[t._v("Login (or Signup)")])],1)]),t._v(" "),t.signedIn?a("div",{staticClass:"navbar-end"},[a("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[a("a",{staticClass:"navbar-link",attrs:{href:"/"}},[t._v("\n            My Profile\n          ")]),t._v(" "),a("div",{staticClass:"navbar-dropdown is-boxed"},[a("a",{staticClass:"navbar-item",attrs:{href:"/"}},[t.user.providerData[0].photoURL?a("img",{attrs:{src:t.user.providerData[0].photoURL,alt:t.user.displayName}}):t._e(),t._v("   "+t._s(t.user.displayName)+"\n            ")])])]),t._v(" "),a("div",{staticClass:"navbar-item"},[a("button",{staticClass:"button is-danger",on:{"~click":function(e){t.signOut(e)}}},[t._v("Sign Out")])])]):t._e()])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"navbar-item",attrs:{href:"/"}},[s("img",{attrs:{src:a(87),alt:"MEME 👏 REVIEWS 👏",width:"112",height:"28"}})])}],i={render:s,staticRenderFns:n};e.a=i},186:function(t,e,a){"use strict";var s=a(88),n=a(187),i=a(13),r=i(s.a,n.a,!1,null,null,null);e.a=r.exports},187:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer",staticStyle:{padding:"3rem 1.5rem"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"content has-text-centered"},[a("p",[a("strong",[t._v("MEME 👏 REVIEWS 👏")]),t._v(" Made with ❤️ "+t._s(t.year)+"\n        ")])])])])},n=[],i={render:s,staticRenderFns:n};e.a=i},188:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},["signup"!==t.$route.name?a("div",{staticClass:"Site"},[a("top-navbar",{attrs:{user:t.user,signedIn:t.signedIn},on:{signOut:t.signOut}}),t._v(" "),a("section",{staticClass:"hero is-fullheight is-light is-bold Site-content"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container is-fluid"},[a("div",{staticClass:"content"},[a("main",[a("router-view",{attrs:{signedIn:t.signedIn,user:t.user}})],1)])])])]),t._v(" "),a("bottom-footer")],1):a("div",{staticStyle:{height:"100vh",width:"100vw"}},[a("router-view",{attrs:{signedIn:t.signedIn,user:t.user}})],1)])},n=[],i={render:s,staticRenderFns:n};e.a=i},189:function(t,e,a){"use strict";var s=a(44),n=a(190),i=a(191),r=a(196);s.a.use(n.a);var o=[{path:"/",name:"Index",component:i.a},{path:"/signup",name:"signup",component:r.a}];e.a=new n.a({mode:"history",routes:o})},191:function(t,e,a){"use strict";function s(t){a(192)}var n=a(89),i=a(195),r=a(13),o=s,u=r(n.a,i.a,!1,o,"data-v-53c79b49",null);e.a=u.exports},192:function(t,e){},193:function(t,e,a){"use strict";var s=a(90),n=a(194),i=a(13),r=i(s.a,n.a,!1,null,null,null);e.a=r.exports},194:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[a("abbr",{attrs:{title:"Position"}},[t._v("Pos")])]),t._v(" "),a("th",[t._v("Meme")]),t._v(" "),a("th",[t._v("Rating by Pewds")]),t._v(" "),a("th",[t._v("Crowd rating")]),t._v(" "),a("th",[t._v("Rate")])])]),t._v(" "),a("tbody",[a("tr",[a("th",[t._v("1")]),t._v(" "),a("td",[t._v("ABC")]),t._v(" "),a("td",[t._v("38")]),t._v(" "),a("td",[t._v("23")]),t._v(" "),a("td",[t._v("23")])])])])])}],i={render:s,staticRenderFns:n};e.a=i},195:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[t.signedIn?t._e():s("div",{staticClass:"has-text-centered"},[s("img",{staticStyle:{width:"15em"},attrs:{src:a(87),alt:"MEME 👏 REVIEWS"}}),t._v(" "),s("h1",[t._v(t._s(t.msg))])]),t._v(" "),t.signedIn?s("memes"):t._e()],1)},n=[],i={render:s,staticRenderFns:n};e.a=i},196:function(t,e,a){"use strict";function s(t){a(197)}var n=a(91),i=a(199),r=a(13),o=s,u=r(n.a,i.a,!1,o,"data-v-1b18478c",null);e.a=u.exports},197:function(t,e){},199:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("div",{staticClass:"container"},[t._m(0),t._v(" "),a("div",{staticClass:"right"},[a("svg",{attrs:{viewBox:"0 0 320 300"}},[a("defs",[a("linearGradient",{attrs:{"inkscape:collect":"always",id:"linearGradient",x1:"13",y1:"193.49992",x2:"307",y2:"193.49992",gradientUnits:"userSpaceOnUse"}},[a("stop",{staticStyle:{"stop-color":"#ff00ff"},attrs:{offset:"0",id:"stop876"}}),t._v(" "),a("stop",{staticStyle:{"stop-color":"#ff0000"},attrs:{offset:"1",id:"stop878"}})],1)],1),t._v(" "),a("path",{attrs:{d:"m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143"}})]),t._v(" "),a("form",{staticClass:"form",attrs:{method:"POST"},on:{submit:function(e){e.preventDefault(),t.emailSignup(e)}}},[a("label",{attrs:{for:"email"}},[t._v("Email")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",id:"email",autofocus:"autofocus"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"password"}},[t._v("Password")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),a("input",{staticStyle:{cursor:"pointer"},attrs:{type:"submit",id:"submit",value:"Submit"}}),t._v(" "),a("div",{staticStyle:{"padding-top":"34px","text-align":"center"}},[a("button",{staticClass:"button is-large",on:{click:function(e){t.oAuthLogin("github")}}},[t._m(1)]),t._v(" "),a("button",{staticClass:"button is-large",on:{click:function(e){t.oAuthLogin("google")}}},[t._m(2)]),t._v(" "),a("button",{staticClass:"button is-large",on:{click:function(e){t.oAuthLogin("twitter")}}},[t._m(3)])])])])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"left"},[a("div",{staticClass:"login"},[t._v("Login")]),t._v(" "),a("div",{staticClass:"eula"},[t._v("By logging in you agree to the ridiculously long terms that you didn't bother to read")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon"},[a("i",{staticClass:"fa fa-github"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon"},[a("i",{staticClass:"fa fa-google-plus"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon"},[a("i",{staticClass:"fa fa-twitter"})])}],i={render:s,staticRenderFns:n};e.a=i},200:function(t,e){},47:function(t,e,a){"use strict";var s=a(30),n=a.n(s),i=a(183),r=a(184),o=a(186);e.a={name:"app",components:{TopNavbar:r.a,BottomFooter:o.a},firebase:{memes:i.a.ref("memes")},data:function(){return{user:{},signedIn:!1}},mounted:function(){var t=this;n.a.auth().onAuthStateChanged(function(e){e?(t.user=e,t.signedIn=!0):t.signedIn=!1})},methods:{signOut:function(){var t=this;n.a.auth().signOut().then(function(){t.signedIn=!1}).catch(function(e){t.errors=e})}}}},86:function(t,e,a){"use strict";e.a={name:"Navbar",props:{user:{type:Object,default:{},required:!0},signedIn:{type:Boolean,default:!1,required:!0}},data:function(){return{showNav:!1}},methods:{signOut:function(){this.$emit("signOut",!0)}}}},87:function(t,e,a){t.exports=a.p+"static/img/logo.fb2d03b.svg"},88:function(t,e,a){"use strict";e.a={name:"Footer",data:function(){return{year:"2018"}}}},89:function(t,e,a){"use strict";var s=a(193);e.a={name:"index",components:{memes:s.a},props:{user:{type:Object,default:{},required:!0},signedIn:{type:Boolean,default:!1,required:!0}},data:function(){return{memes:{},msg:"Welcome to Meme 👏 Reviews 👏",errors:{}}}}},90:function(t,e,a){"use strict";e.a={name:"Memes"}},91:function(t,e,a){"use strict";var s=a(30),n=(a.n(s),a(198)),i=a.n(n),r=new s.auth.GithubAuthProvider,o=new s.auth.GoogleAuthProvider,u=new s.auth.TwitterAuthProvider;r.setCustomParameters({allow_signup:"false"}),e.a={name:"Signup",data:function(){return{email:null,password:null,oAuthProvider:null,token:null,auth:s.auth(),user:{},errors:{},loggedOut:!1}},mounted:function(){var t=this;s.auth().onAuthStateChanged(function(e){e||(t.loggedOut=!0)});var e=null;document.querySelector("#email").addEventListener("focus",function(){e&&e.pause(),e=i()({targets:"path",strokeDashoffset:{value:0,duration:700,easing:"easeOutQuart"},strokeDasharray:{value:"240 1386",duration:700,easing:"easeOutQuart"}})}),document.querySelector("#password").addEventListener("focus",function(){e&&e.pause(),e=i()({targets:"path",strokeDashoffset:{value:-336,duration:700,easing:"easeOutQuart"},strokeDasharray:{value:"240 1386",duration:700,easing:"easeOutQuart"}})}),document.querySelector("#submit").addEventListener("focus",function(){e&&e.pause(),e=i()({targets:"path",strokeDashoffset:{value:-730,duration:700,easing:"easeOutQuart"},strokeDasharray:{value:"530 1386",duration:700,easing:"easeOutQuart"}})})},methods:{emailSignup:function(){var t=this;t.auth.createUserWithEmailAndPassword(t.email,t.password).then(function(){t.$swal({title:"Yay!",text:"A new hope arises!",type:"success",showCancelButton:!1,confirmButtonColor:"#3085d6",confirmButtonText:"🤙"}).then(function(e){e.value&&t.$router.push({name:"Index",params:{signedIn:!0}})})}).catch(function(e){t.errors=e,"auth/email-already-in-use"===t.errors.code&&t.signInEmail()})},signInEmail:function(){var t=this;t.auth.signInWithEmailAndPassword(t.email,t.password).then(function(){t.$swal({title:"Yay!",text:"Welcome back",type:"success",showCancelButton:!1,confirmButtonColor:"#3085d6",confirmButtonText:"🤙"}).then(function(e){e.value&&t.$router.push({name:"Index",params:{signedIn:!0}})})}).catch(function(e){t.errors=e,t.$swal({title:"Eeks!",text:e.message,type:"error",showCancelButton:!1,confirmButtonColor:"#3085d6",confirmButtonText:"OK ☹️"}).then(function(e){e.value&&(t.password=null)}),"auth/wrong-password"===e.code&&t.$swal({title:"Eeks!",text:e.message,type:"error",showCancelButton:!1,confirmButtonColor:"#3085d6",confirmButtonText:"Would you like to reset your password?"}).then(function(e){e.value&&(t.password=null,t.resetPassword())})})},resetPassword:function(){var t=this;t.auth.sendPasswordResetEmail(t.email).then(function(){t.$swal({title:"Hell yeah!",text:"Please check your ✉️ with the instructions!",type:"success",showCancelButton:!1,confirmButtonColor:"#3085d6",confirmButtonText:"🤟"}).then(function(t){t.value})}).catch(function(e){t.errors=e})},oAuthLogin:function(t){var e=this;"twitter"===t&&(e.oAuthProvider=u),"github"===t&&(e.oAuthProvider=r),"google"===t&&(e.oAuthProvider=o),s.auth().signInWithPopup(e.oAuthProvider).then(function(t){e.token=t.credential.accessToken,e.user=t.user,e.$swal({title:"'twas sucessful!",type:"success",showCancelButton:!1,confirmButtonColor:"#3085d6",confirmButtonText:"🤙"}).then(function(t){t.value&&e.$router.push({name:"Index",params:{signedIn:!0}})})}).catch(function(t){e.errors=t,e.$swal({title:"Eeks!",text:t.message,type:"error",showCancelButton:!1,confirmButtonColor:"#3085d6",confirmButtonText:"OK ☹️"}).then(function(t){t.value&&(e.password=null)})})},showAlert:function(){var t=this;t.$swal({title:"Yay!",text:"You've sucessfully logged in!",type:"success",showCancelButton:!1,confirmButtonColor:"#3085d6",confirmButtonText:"OK, what's next?"}).then(function(e){e.value&&t.$router.push({name:"Index",params:{signedIn:!0}})})}}}},92:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(44),n=a(94),i=a.n(n),r=a(95),o=a(99),u=a(189);a(200),s.a.use(i.a),s.a.use(r.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:u.a,template:"<App/>",components:{App:o.a}})},97:function(t,e){},99:function(t,e,a){"use strict";function s(t){a(100),a(101)}var n=a(47),i=a(188),r=a(13),o=s,u=r(n.a,i.a,!1,o,"data-v-c2eed976",null);e.a=u.exports}},[92]);
//# sourceMappingURL=app.38d123b084a849d2155e.js.map