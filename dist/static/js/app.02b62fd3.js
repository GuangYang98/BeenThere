(function(t){function e(e){for(var a,s,i=e[0],c=e[1],l=e[2],A=0,u=[];A<i.length;A++)s=i[A],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&u.push(o[s][0]),o[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);m&&m(e);while(u.length)u.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var i=n[s];0!==o[i]&&(a=!1)}a&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},s={app:0},o={app:0},r=[];function i(t){return c.p+"static/js/"+({about:"about"}[t]||t)+"."+{about:"eff2e06b"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1};s[t]?e.push(s[t]):0!==s[t]&&n[t]&&e.push(s[t]=new Promise((function(e,n){for(var a="static/css/"+({about:"about"}[t]||t)+"."+{about:"aa52090b"}[t]+".css",o=c.p+a,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var l=r[i],A=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(A===a||A===o))return e()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){l=u[i],A=l.getAttribute("data-href");if(A===a||A===o)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var a=e&&e.target&&e.target.src||o,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete s[t],m.parentNode.removeChild(m),n(r)},m.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(m)})).then((function(){s[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=r);var l,A=document.createElement("script");A.charset="utf-8",A.timeout=120,c.nc&&A.setAttribute("nonce",c.nc),A.src=i(t);var u=new Error;l=function(e){A.onerror=A.onload=null,clearTimeout(m);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",u.name="ChunkLoadError",u.type=a,u.request=s,n[1](u)}o[t]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:A})}),12e4);A.onerror=A.onload=l,document.head.appendChild(A)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],A=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var m=A;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("8a23"),s=n.n(a);s.a},"0418":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-block",attrs:{id:"header-block"}},[t._m(0),n("Menu",{staticClass:"header-scaled-menu",attrs:{id:"scaled-menu"}}),t._m(1)],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"/"}},[a("img",{staticClass:"header-logo",attrs:{src:n("cf05"),id:"logo"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-text-nav",staticStyle:{display:"none"},attrs:{id:"nav"}},[n("a",{staticClass:"header-home",attrs:{href:"/"}},[t._v("主页")]),n("a",{staticClass:"header-members",attrs:{href:"/join"}},[t._v("Beenthere大家庭")]),n("a",{staticClass:"header-join",attrs:{href:"/join"}},[t._v("我要加入")])])}],o=(n("d3b7"),n("ac1f"),n("25f0"),n("841c"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center",staticStyle:{"margin-right":"2vw"},attrs:{"data-app":"true"}},[n("v-menu",{attrs:{transition:"slide-y-transition","open-on-hover":"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-btn",t._g({staticClass:"purple",staticStyle:{"background-color":"transparent"},attrs:{fab:"",small:"",depressed:""}},a),[n("v-app-bar-nav-icon")],1)]}}])},[n("v-list",{staticStyle:{"background-color":"dodgerblue","font-weight":"700"}},t._l(t.items,(function(e,a){return n("v-list-item",{key:a,on:{click:function(n){return t.jump(e.title)}}},[n("v-list-item-title",{staticStyle:{color:"white"}},[t._v(t._s(e.title))])],1)})),1)],1)],1)}),r=[],i={name:"Menu",data:function(){return{items:[{title:"主页"},{title:"Beenthere 大家庭"},{title:"我要加入"}]}},methods:{jump:function(t){window.location.href="我要加入"==t?"/join":"主页"==t?"/":"/join"}}},c=i,l=n("2877"),A=n("6544"),u=n.n(A),m=n("5bc1"),d=n("8336"),v=n("8860"),p=n("da13"),f=n("5d23"),h=n("e449"),g=Object(l["a"])(c,o,r,!1,null,null,null),w=g.exports;u()(g,{VAppBarNavIcon:m["a"],VBtn:d["a"],VList:v["a"],VListItem:p["a"],VListItemTitle:f["a"],VMenu:h["a"]}),console.log(window.location.href),-1==window.location.href.toString().search("join")&&-1==window.location.href.toString().search("about")&&(window.onscroll=function(){window.pageYOffset>=140?document.getElementById("home-header").style.backgroundColor="#EF6C00":document.getElementById("home-header").style.backgroundColor="transparent"}),document.onreadystatechange=function(){"complete"==document.readyState&&(document.documentElement.clientWidth<800?(document.getElementById("nav").style.display="none",document.getElementById("scaled-menu").style.display=""):(document.getElementById("nav").style.display="",document.getElementById("scaled-menu").style.display="none"),-1!=window.location.href.toString().search("join")&&(document.documentElement.clientWidth<500?(document.getElementById("join-content-block").style.fontSize="3vw",document.getElementById("join-comment").style.fontSize="2.5vw"):(document.getElementById("join-content-block").style.fontSize="1.3vw",document.getElementById("join-comment").style.fontSize="1vw")))},window.onresize=function(){document.documentElement.clientWidth<800?(document.getElementById("nav").style.display="none",document.getElementById("scaled-menu").style.display=""):(document.getElementById("nav").style.display="",document.getElementById("scaled-menu").style.display="none")};var y={name:"Header",components:{Menu:w}},b=y,B=(n("8baf"),Object(l["a"])(b,a,s,!1,null,null,null));e["a"]=B.exports},1301:function(t,e,n){"use strict";var a=n("13a3"),s=n.n(a);s.a},"13a3":function(t,e,n){},4230:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],r={name:"App",components:{},data:function(){return{}}},i=r,c=(n("034f"),n("2877")),l=Object(c["a"])(i,s,o,!1,null,null,null),A=l.exports,u=(n("d3b7"),n("8c4f")),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header",{staticStyle:{position:"fixed",display:"inline-block","z-index":"999999","background-color":"transparent","-webkit-transition":".5s ease-in-out"},attrs:{id:"home-header"}}),n("HomeContent"),n("Footer",{staticStyle:{"margin-top":"2vw"}})],1)},d=[],v=n("fd2d"),p=n("0418"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-content-wrapper"},[t._m(0),a("div",{staticClass:"home-content-without-title"},[a("v-img",{staticStyle:{display:"inline-block"},attrs:{src:n("b3d6"),width:"27vw",eager:""}}),t._m(1),t._m(2),t._m(3),a("v-divider",{staticClass:"home-divider"}),t._m(4),t._m(5),a("img",{staticStyle:{width:"100vw",height:"auto"},attrs:{src:n("f96c")}}),t._m(6),a("img",{staticStyle:{width:"100vw",height:"auto"},attrs:{src:n("88e6")}}),t._m(7),t._m(8)],1)])},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-header-background"},[n("div",{staticClass:"home-title"},[n("p",{staticStyle:{"font-size":"5vw"}},[t._v("Beenthere")]),n("p",[t._v("全球青年心灵互助社区")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"inline-block","margin-left":"30px","margin-top":"10px"}},[n("div",{staticStyle:{"font-size":"4vw"}},[t._v("“莫愁前路无知己，"),n("br"),t._v("BeenThere Buddy "),n("br"),t._v("在等你”")]),n("div",{staticStyle:{"font-size":"1.7vw","margin-top":"3vw"}},[t._v("免费、匿名、即时的线上文字聊天陪伴")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"margin-top":"4vw","font-size":"1.3vw"}},[n("div",{staticStyle:{"margin-top":"2vw"}},[t._v("或许你来到新的环境，感到孤单难以适应")]),n("div",{staticStyle:{"margin-top":"1.2vw"}},[t._v("或许你很想变得优秀，实现自己心中目标")]),n("div",{staticStyle:{"margin-top":"1.2vw"}},[t._v("或许你面对压力焦虑，希望有人分担帮助")]),n("div",{staticStyle:{"margin-top":"1.2vw"}},[t._v("或许你正在经历苦恼，需要有人安慰倾听")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"margin-top":"3vw"}},[n("div",[n("a",{staticClass:"home-tawk-to",attrs:{href:"https://tawk.to/chat/5d0cf96336eab972111899f7/default"}},[t._v("我们聊聊吧!")])]),n("div",{staticStyle:{"margin-top":"2vw"}},[n("a",{staticClass:"home-shimo-link",attrs:{href:"https://shimo.im/sheets/XDhvpJ8QQKh6XvHq/xUGGo"}},[t._v("查看值班表，好buddy不会丢！")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-introduce"},[n("p",[t._v("BeenThere")]),n("p",{staticStyle:{"margin-top":"1vw"}},[t._v("是一个源自哈佛中国学生的全球青年心灵互助社区")]),n("p",{staticStyle:{"margin-top":"1vw"}},[t._v("我们来自各地，有着不同的经历")]),n("p",{staticStyle:{"margin-top":"1vw"}},[t._v("我们愿意倾听，愿意分享")]),n("p",{staticStyle:{"margin-top":"3vw"}},[t._v("为你提供最私密、最暖心的倾听陪伴")]),n("p",{staticStyle:{"margin-top":"1vw"}},[t._v("足不出户就能得到即时的心理支持")]),n("p",{staticStyle:{"margin-top":"3vw"}},[t._v("无需缴费！无需注册！无需预约！")]),n("p",{staticStyle:{"margin-top":"1vw"}},[t._v("不限时长！不限次数！匿名倾诉！")]),n("p",{staticStyle:{"margin-top":"3vw"}},[t._v("一个视频快速了解我们：")]),n("iframe",{staticStyle:{width:"88.8vw",height:"50vw","margin-top":"2vw"},attrs:{src:"//player.bilibili.com/player.html?aid=30430636&cid=53100098&page=1&high_quality=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"margin-top":"3vw"}},[n("div",[n("a",{staticClass:"home-tawk-to",attrs:{href:"https://tawk.to/chat/5d0cf96336eab972111899f7/default"}},[t._v("我们聊聊吧!")])]),n("div",{staticStyle:{"margin-top":"2vw"}},[n("a",{staticClass:"home-shimo-link",attrs:{href:"https://shimo.im/sheets/XDhvpJ8QQKh6XvHq/xUGGo"}},[t._v("查看值班表，好buddy不会丢！")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"text-align":"center","margin-top":"3vw"}},[n("p",{staticStyle:{color:"#fc6","font-size":"4vw"}},[t._v("来访者感悟")]),n("div",{staticStyle:{"font-family":"arial rounded mt bold"}},[n("p",{staticClass:"home-quotation"},[t._v("“")]),n("p",{staticClass:"home-comment"},[t._v("BeenThere 真正做到了帮助来访者 “实现自身潜力”，Daniel 也做到了和来访者一起 “寻找方向，成")]),n("p",{staticClass:"home-comment"},[t._v("为更好的人”。")]),n("p",{staticClass:"home-comment-author"},[t._v("— Iva")]),n("p",{staticClass:"home-quotation"},[t._v("“")]),n("p",{staticClass:"home-comment"},[t._v("那种和一个尊重，理解你，同时愿意尽力帮助和支持你的人交谈的感觉，真的很棒！")]),n("p",{staticClass:"home-comment-author"},[t._v("— 卓一")]),n("p",{staticClass:"home-quotation"},[t._v("“")]),n("p",{staticClass:"home-comment"},[t._v("她总是设身处地的为我着想，这段漫长的失恋期是她告诉我不要埋怨自己，要selfcare，听我慢慢")]),n("p",{staticClass:"home-comment"},[t._v("的讲述自己变化和改善，让我感受到一个来自陌生人的善意和世界的谅解。")]),n("p",{staticClass:"home-comment-author"},[t._v("— Winter")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-sponsor"},[a("p",{staticClass:"home-sponsor-title"},[t._v("赞助团体 | Credentials")]),a("div",{staticStyle:{"margin-top":"3vw"}},[a("div",{staticClass:"home-sponsor-block"},[a("img",{staticClass:"home-sponsor-image",attrs:{src:n("68cc")}}),a("p",[t._v("MIT Sandbox 基金赞助项目")])]),a("div",{staticClass:"home-sponsor-block"},[a("img",{staticClass:"home-sponsor-image",attrs:{src:n("8f61")}}),a("p",[t._v("MIT 社会创新发展中心赞助项目")])]),a("div",{staticClass:"home-sponsor-block"},[a("img",{staticClass:"home-sponsor-image",attrs:{src:n("ad18")}}),a("p",[t._v("MIT 中国创新与创业论坛成员团队")])])]),a("div",{staticStyle:{"margin-top":"4vw"}},[a("div",{staticClass:"home-sponsor-block"},[a("img",{staticClass:"home-sponsor-image",attrs:{src:n("b018")}}),a("p",[t._v("哈佛创新实验室特别孵化项目")])]),a("div",{staticClass:"home-sponsor-block"},[a("img",{staticClass:"home-sponsor-image",attrs:{src:n("8fb2")}}),a("p",[t._v("清华校友三创大赛全球总决赛优胜奖")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-history"},[n("p",[t._v("BeenThere自推出 “Buddy服务” 以来，所接咨询案例超过1000个，给87%接受我们服务的来访者带来了提升，")]),n("p",[t._v("99%的来访者对Buddy 服务表示满意；我们也入选了哈佛、MIT一线的孵化器，大家族成员已超过100人。目前我")]),n("p",[t._v("们已有50余位Online Buddy，TA们是来自世界各地名校的活跃志愿者，位于美国、中国、加拿大、澳大利亚、日")]),n("p",[t._v("本、英国等国家，TA们的背景涵盖哈佛、麻省理工、斯坦福、牛津、剑桥、宾大、哥大、伯克利、清华、北大、复")]),n("p",[t._v("旦等海内外名校。")])])}],g={name:"HomeContent"},w=g,y=(n("1301"),n("6544")),b=n.n(y),B=n("ce7e"),C=n("adda"),E=Object(c["a"])(w,f,h,!1,null,null,null),S=E.exports;b()(E,{VDivider:B["a"],VImg:C["a"]});var j={name:"Home",components:{Footer:v["a"],Header:p["a"],HomeContent:S}},V=j,H=(n("cccb"),Object(c["a"])(V,m,d,!1,null,null,null)),_=H.exports;a["a"].use(u["a"]);var x=[{path:"/",name:"Home",component:_},{path:"/join",name:"Join",component:function(){return n.e("about").then(n.bind(null,"c283"))}}],G=new u["a"]({mode:"history",base:"",routes:x}),k=G,W=n("2f62");a["a"].use(W["a"]);var F=new W["a"].Store({state:{},mutations:{},actions:{},modules:{}}),I=n("f309");a["a"].use(I["a"]);var T=new I["a"]({}),U=n("31a3"),Y=n.n(U);a["a"].config.productionTip=!1,a["a"].use(Y.a,{tawkSrc:"https://embed.tawk.to/5d0cf96336eab972111899f7/default"}),new a["a"]({router:k,store:F,Tawk:Y.a,vuetify:T,render:function(t){return t(A)}}).$mount("#app")},"62e5":function(t,e,n){t.exports=n.p+"static/img/qrcode.6364a075.jpg"},"68cc":function(t,e){t.exports="data:image/png;base64,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"},"729b":function(t,e,n){},"760c":function(t,e,n){"use strict";var a=n("a4bc"),s=n.n(a);s.a},"88e6":function(t,e,n){t.exports=n.p+"static/img/pink.46e6338e.png"},"8a23":function(t,e,n){},"8baf":function(t,e,n){"use strict";var a=n("729b"),s=n.n(a);s.a},"8f61":function(t,e,n){t.exports=n.p+"static/img/Legatum.d86b2b7e.jpeg"},"8fb2":function(t,e,n){t.exports=n.p+"static/img/Tsinghua.d0f978b8.jpeg"},a4bc:function(t,e,n){},ad18:function(t,e,n){t.exports=n.p+"static/img/MITCHIEF.9ee93aed.png"},b018:function(t,e){t.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCABkAGQDASIAAhEBAxEB/8QAGwABAAMBAQEBAAAAAAAAAAAAAAEGBwgFAgP/xAA8EAABAgQDBgIGBgsAAAAAAAAAAQMCBAURBgcSCBMhMTJRsrMUFyI1N0EVOFVlc3UjUlNWYWNxdpGU0v/EABsBAQACAwEBAAAAAAAAAAAAAAABAwIEBQYI/8QALBEAAgEDAgIJBQEAAAAAAAAAAAEDAgQRBRIGIRMUIjEyNUGBsTNRYXFykf/aAAwDAQACEQMRAD8AypVW68VIuvdQvUoOOfRiF17qLr3UAEi691F17qAALr3UXXuoAAuvdRde6gAC691F17qAASirx5gJyABC9SgL1KAAAXHK7L6p49mZ9imTctLxSkMEUavava1KqJayL2JppdTwjWuruK1icsrwkU4Hr40w9M4XxPPUCcdaemJRYEjjbvpi1QJFwvx5KeQGscmZwTUTxqSh5T5gFly2wbP43xDHRqdMMsPQsRP6nb6bQxQpbgi8faQjMXB8/gjEP0LUX2H3lYhe1NX02iVUtxRP1VJ6N7dxrrUbd3HV93axnBWweg3Q61HSlqkFJn4pBEuswkvGraJ31WseeRho2IbiObKpecAAEFxKcgE5AAhepQF6lAAN/wBi/wB9Yi/AY8UZgB0BsXe+sRW57ljxRl9t40ea4s8tr9vkz3aIv65sQ3/aM+Q2UE3POfKnHVezPrNWpVFWZk5mJpWnUmGodVmoYV4RRIvNFKh6kMzP3dX/AGmv+xJFW6nyK9H1myjso6K5EmkvU9vZEv61HrfZjvmNHzta/FWFPu5rxuFw2cctsY4WzAfqldpPocosi40jm/bjvGscColoYlXlCpTtrRF9asN/s5vxuFuHTDzONBcRXGvOuOpNbfQuFIzowhK5StUlyVcWotSKSvoW4XTHEkGi+rpSFefe3yOczR2cn625l5HjNKhJJJJJLN7r29elIVitytfgZwVSOt43HoNCgs4q5er1ZbfP8P7AAFB6IlOQCcgAQvUoC9SgAG/7F/CtYiX+Sx4ozADf9i/3ziL8FjxRl9t40eb4s8tr9vk9TNLPPEWFse1XD8jTKc6xKRQJBG4keuLU3DFxtFbnEVpNpTFqQW+iKV/hy/iKftEfGfEV+P6RnyGygmVc1SqaTNHSuG7Cazjkroy2kzqnIzOKu43xm5RalT5FlmGTjfSNnXq1QxQQ24qvD2lMy2s0tmrD+Xt+N0/TZF+Kry/djvmNH57Wi3zWRfu5vxullVTqiyzl2tnDaa44olhbTW6f9VF38gd8qI5IOt6f9VF3+33fKiOSDCfup/R0OEvq3H9MAA1T2xKcgE5AAhepQF6lAANw2SKxTKRVq9HUp+WlIXGmEgV51INVljvbUvH5GHgzjr2VZObqtgr+2qgbxku+fM5LT+bdenJN9p9hxxrQ43GkUMVmYE4KnDmhSACKnubZsWNt1aCmHOcJL/DVNlmpSFKzKemqjNsSrK012HeOuJDDq3jfC6/PgfG09UZGp5lQzNPmmZlj0FuHeNOJHDfXHwuhlwLOl7Gw5j0VPUHebu9YwdRSGI6JBszvUtarJJOLQ429zv4NerdRezpve/8AA5dAIkk34MtJ0hafVI92dzyAAVHbJTkAnIAEL1KAvUoAAAAAAAAAAAAAAAAJTkAnIAH0sKXX+p86UAAGlBpQAAaUGlAABpQaUAAGlBpQAAaUGlAACYYUsAAD/9k="},b3d6:function(t,e,n){t.exports=n.p+"static/img/car.e08de4bd.png"},cccb:function(t,e,n){"use strict";var a=n("4230"),s=n.n(a);s.a},cf05:function(t,e,n){t.exports=n.p+"static/img/logo.880085fd.png"},f96c:function(t,e,n){t.exports=n.p+"static/img/yellow.e0c9ecdf.png"},fd2d:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-block"},[a("div",{staticStyle:{"font-size":"1.3vw"}},[a("p",{staticStyle:{"font-size":"3.5vw","text-align":"center"}},[t._v("关注我们")]),a("p",{staticStyle:{"margin-top":"3vw"}},[t._v("我们不是心理医生，但是为你整理了国内外的专业免费 "),a("a",{attrs:{href:"https://beentherebuddy.com/urgsituation"}},[t._v("[心理支持服务热线]")]),t._v("，希望能够帮到你")]),a("img",{staticClass:"footer-qrcode",staticStyle:{"margin-top":"2vw"},attrs:{src:n("62e5")}}),a("p",{staticStyle:{"margin-top":"2vw"}},[t._v("微信公众号："),a("b",[t._v("BeenThere2018")])]),a("p",{staticStyle:{"margin-top":"1vw"}},[t._v("邮箱："),a("b",[t._v("been_there_team@outlook.com")])]),a("p",{staticStyle:{"margin-top":"5vw"}},[t._v("Powered by Mengyang Liu")])])])}],o={name:"Footer"},r=o,i=(n("760c"),n("2877")),c=Object(i["a"])(r,a,s,!1,null,null,null);e["a"]=c.exports}});
//# sourceMappingURL=app.02b62fd3.js.map