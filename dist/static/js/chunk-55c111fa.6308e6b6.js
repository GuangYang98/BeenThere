(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55c111fa"],{"7eb6":function(e,t,n){},b8ce:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Header",{staticStyle:{position:"fixed",display:"inline-block","z-index":"999999"},attrs:{id:"family-header"}}),n("BuddyContent"),n("Footer",{staticStyle:{"margin-top":"2vw"}})],1)},a=[],d=n("fd2d"),o=n("0418"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"buddy-content-wrapper"},[n("div",{staticStyle:{height:"30vw",width:"100%",overflow:"hidden"}},[n("v-img",{staticStyle:{position:"relative",top:"-125%"},attrs:{src:e.piclink}})],1),n("div",{staticClass:"post-date"},[n("h4",{staticStyle:{"font-size":"3vw"}},[e._v(e._s(e.date))]),n("h1",{staticStyle:{"font-size":"4vw"}},[e._v(e._s(e.title))])]),n("v-col",{attrs:{"offset-md":3,md:6,offset:1,cols:10}},[n("div",{attrs:{id:"page"}},[n("div",{staticClass:"intro-cont",domProps:{innerHTML:e._s(e.cont)}})])])],1)},c=[],s=(n("fb6a"),n("b0c0"),n("9911"),n("bc3a")),r=n.n(s),m={name:"BuddyContent",data:function(){return{who:-1,cont:"",pic:"",piclink:"",date:"",title:""}},methods:{getBuddy:function(){var e=this;r.a.get("/beenthere.xml").then((function(t){var i=JSON.parse(JSON.stringify(e.$x2js.xml2js(t.data)));console.log(i);for(var a=i.rss.channel.item,d=0;d<35;d+=2){var o=a[d].link.slice(9);if(e.$route.params.name===o){e.who=d;break}}-1!==e.who&&(e.cont=a[d].encoded[0]["__cdata"],e.pic=a[d+1].link,e.piclink=n("5b41")("./"+a[d+1].link),e.date=a[d+1].pubDate.slice(0,16),e.title=a[d].title)})).catch((function(t){console.log(t),e.loading=!1}))}},mounted:function(){document.documentElement.scrollTop=document.body.scrollTop=0,document.getElementById("family-header").style.backgroundColor="transparent",this.getBuddy()}},u=m,h=(n("bf69"),n("2877")),y=n("6544"),f=n.n(y),p=n("62ad"),g=n("adda"),v=Object(h["a"])(u,l,c,!1,null,null,null),w=v.exports;f()(v,{VCol:p["a"],VImg:g["a"]});var b={name:"buddies",components:{Footer:d["a"],Header:o["a"],BuddyContent:w},mounted:function(){document.onreadystatechange=function(){"complete"==document.readyState&&(document.documentElement.clientWidth<1e3?(document.getElementById("family-header").style.height="14vw",document.getElementById("family-header").style.lineHeight="14vw"):(document.getElementById("family-header").style.height="140px",document.getElementById("family-header").style.lineHeight="140px"))},window.onresize=function(){document.documentElement.clientWidth<1e3?(document.getElementById("family-header").style.height="14vw",document.getElementById("family-header").style.lineHeight="14vw"):(document.getElementById("family-header").style.height="140px",document.getElementById("family-header").style.lineHeight="140px")}}},B=b,E=Object(h["a"])(B,i,a,!1,null,"dce71936",null);t["default"]=E.exports},bf69:function(e,t,n){"use strict";var i=n("7eb6"),a=n.n(i);a.a}}]);
//# sourceMappingURL=chunk-55c111fa.6308e6b6.js.map