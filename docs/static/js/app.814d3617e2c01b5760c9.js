webpackJsonp([1],{"8jO+":function(t,e){},DysC:function(t,e){},EEuR:function(t,e){},GrUR:function(t,e){},HH6G:function(t,e){},HHGj:function(t,e){},Ij15:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("5C5s"),a={name:"navDot",props:{menu:{type:Array,default:[]},active:{type:Number,default:0}},methods:{jump:function(t){this.$emit("jump",t)}}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"nav-dot"},[s("ul",t._l(t.menu,function(e,i){return s("li",{on:{click:function(e){t.jump(i)}}},[s("em",{class:{"item-dot":!0,"dot-active":i===t.active}},[s("img",{attrs:{src:e.img,alt:"sd"}})]),t._v(" "),s("span",{staticClass:"item-title"},[t._v(t._s(e.title))])])}))])},staticRenderFns:[]};var c=s("Z0/y")(a,n,!1,function(t){s("GrUR")},"data-v-10b64331",null).exports,r=[{icon:"account_circle",msg:"姓名：刘海平"},{icon:"announcement",msg:"QQ：847186328"},{icon:"email",msg:"邮箱：847186328@qq.com"},{icon:"search",msg:"技术栈：前端开发工程师"},{icon:"people",msg:'博客地址：<a class="a-active" href="http://123.207.239.16">http://haiping313.cn</a>'},{icon:"folder_open",msg:'开源地址：<a class="a-active" href="https://github.com/HaipingXiaotong">https://github.com/HaipingXiaotong</a>'}],l=[{bc:"rgba(121,100,102,0.8)",skill:"vue"},{bc:"rgba(76,157,160,0.8)",skill:"bootsrap"},{bc:"rgba(147,147,189,0.8)",skill:"css"},{bc:"rgba(66, 97, 185, 0.8)",skill:"js"},{bc:"rgba(58, 177, 106, 0.8)",skill:"html"},{bc:"rgba(193, 103, 191, 0.8)",skill:"nodejs"},{bc:"rgba(121,100,102,0.8)",skill:"vue"},{bc:"rgba(173, 160, 71, 0.8)",skill:"webpack"}],o=[{bc:"rgba(121,100,102,0.8)",skill:"vue"},{bc:"rgba(76,157,160,0.8)",skill:"bot.."},{bc:"rgba(147,147,189,0.8)",skill:"css"},{bc:"rgba(66, 97, 185, 0.8)",skill:"js"}],u=[{img:"http://lhp313-1253555032.coscd.myqcloud.com/resume/static/img/title1.png",title:"首页"},{img:"http://lhp313-1253555032.coscd.myqcloud.com/resume/static/img/title3.png",title:"关于我"},{img:"http://lhp313-1253555032.coscd.myqcloud.com/resume/static/img/title5.png",title:"技术栈"},{img:"http://lhp313-1253555032.coscd.myqcloud.com/resume/static/img/title6.png",title:"经历"},{img:"http://lhp313-1253555032.coscd.myqcloud.com/resume/static/img/title4.png",title:"作品"},{img:"http://lhp313-1253555032.coscd.myqcloud.com/resume/static/img/title2.png",title:"联系我"}],p=[{href:"https://github.com/HaipingXiaotong",src:"http://lhp313-1253555032.coscd.myqcloud.com/resume/me/github.png"},{href:"http://weibo.com/lhp1016",src:"http://lhp313-1253555032.coscd.myqcloud.com/resume/me/blog.png"},{href:"https://www.zhihu.com/people/dan-zou-12",src:"http://lhp313-1253555032.coscd.myqcloud.com/resume/me/zhi.png"},{href:"http://haiping313.cn",src:"http://lhp313-1253555032.coscd.myqcloud.com/resume/me/chat.png"},{href:"#",src:"http://lhp313-1253555032.coscd.myqcloud.com/resume/me/china.png"}],v={name:"navigation",data:function(){return{menu:u}},props:{active:{type:Number,default:0}},components:{MyNavDot:c},methods:{jump:function(t){this.$emit("jump",t)}}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"navigation"}},[e("div",{staticClass:"header-dot"},[e("my-nav-dot",{attrs:{menu:this.menu,active:this.active},on:{jump:this.jump}})],1)])},staticRenderFns:[]};var m=s("Z0/y")(v,h,!1,function(t){s("QrT1")},null,null).exports,d={name:"pageOne",data:function(){return{personMsg:r,avatar:"url('http://lhp313-1253555032.coscd.myqcloud.com/resume/static/avatar.jpg')"}}},g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{key:"pageOne",attrs:{id:"pageOne"}},[s("div",{staticClass:"contrain"},[s("div",{staticClass:"avatar",style:{backgroundImage:t.avatar}}),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"grow"},t._l(t.personMsg,function(e){return s("p",{staticClass:"item"},[s("i",{staticClass:"material-icons",staticStyle:{"font-size":"30px"}},[t._v(t._s(e.icon))]),t._v(" "),t._v("\n                 \n            "),s("span",{staticClass:"msg",domProps:{innerHTML:t._s(e.msg)}})])}))])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"person-title"},[s("span",{staticStyle:{"font-size":"120px"}},[t._v("P")]),t._v(" "),s("p",{staticClass:"zh-ch"},[t._v("个人简历")]),t._v(" "),s("p",{staticClass:"zh-en"},[s("span",{staticStyle:{color:"#0295A7"}},[t._v("ers")]),t._v("onal "),s("span",{staticStyle:{color:"#0295A7"}},[t._v("re")]),t._v("sume")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title1"},[e("h3",[this._v("过放荡不羁的生活，容易得像顺水推舟，但是要结识良朋益友，却难如登天。 —— 巴尔扎克")])])}]};var _=s("Z0/y")(d,g,!1,function(t){s("Ij15")},null,null).exports,f=s("HzJ8"),y=s.n(f),C={name:"pageTwo",data:function(){return{outCircles:l,inCircle:o}},mounted:function(){this.addUlCss()},methods:{addUlCss:function(){var t=this.$refs.outCircle.getElementsByTagName("li"),e=this.$refs.inCircle.getElementsByTagName("li"),s=-4,i=0,a=-4,n=0,c=!0,r=!1,l=void 0;try{for(var o,u=y()(t);!(c=(o=u.next()).done);c=!0){o.value.style.animation=b("outX","outY",s-=2,i-=2)}}catch(t){r=!0,l=t}finally{try{!c&&u.return&&u.return()}finally{if(r)throw l}}var p=!0,v=!1,h=void 0;try{for(var m,d=y()(e);!(p=(m=d.next()).done);p=!0){m.value.style.animation=b("inX","inY",a-=4,n-=4)}}catch(t){v=!0,h=t}finally{try{!p&&d.return&&d.return()}finally{if(v)throw h}}}}};function b(t,e,s,i){return t+" 8s cubic-bezier(.36,0,.64,1) "+s+"s infinite alternate,"+e+" 8s cubic-bezier(.36,0,.64,1) "+i+"s infinite alternate"}var x={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"pageTwo"}},[t._m(0),t._v(" "),s("div",{staticClass:"knowledge"},[s("div",{staticClass:"know-left"},[s("ul",{ref:"outCircle",staticClass:"out-circle"},t._l(t.outCircles,function(e){return s("li",{style:{backgroundColor:e.bc}},[t._v(t._s(e.skill))])})),t._v(" "),s("ul",{ref:"inCircle",staticClass:"in-circle"},t._l(t.inCircle,function(e){return s("li",{style:{backgroundColor:e.bc}},[t._v(t._s(e.skill))])}))]),t._v(" "),t._m(1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"skill-title"},[e("span",[this._v("部分技术栈")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"know-right"},[e("p",[this._v("熟练使用vue2.x及各种类库的指令封装")]),this._v(" "),e("p",[this._v("向往PC/APP/微信三平台前端研发")]),this._v(" "),e("p",[this._v("喜欢组件封装，能脱离库书写JS代码")]),this._v(" "),e("p",[this._v("代码有较高的可维护性")])])}]};var E=s("Z0/y")(C,x,!1,function(t){s("HH6G")},null,null).exports,L={name:"msg",props:{size:{type:Number,default:100},src:{type:String,default:""},label:{type:String,default:"label"}},mounted:function(){this.init()},methods:{init:function(){var t=this.$refs.msgs;t.style.width=this.size+"px",t.style.height=this.size+"px"}}},I={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"msg"},[e("div",{ref:"msgs",staticClass:"cir"},[e("img",{staticStyle:{width:"40px","text-align":"center"},attrs:{src:this.src,alt:"sd"}})]),this._v(" "),e("p",[this._v(this._s(this.label))])])},staticRenderFns:[]};var k={name:"pageThree",components:{msg:s("Z0/y")(L,I,!1,function(t){s("EEuR")},"data-v-d2fbc5a0",null).exports}},$={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"pageThree"}},[this._m(0),this._v(" "),e("div",{staticClass:"msgs"},[e("msg",{attrs:{src:"http://lhp313-1253555032.coscd.myqcloud.com/resume/static/img/age.png",label:"年龄/21岁"}}),this._v(" "),e("msg",{attrs:{src:"http://lhp313-1253555032.coscd.myqcloud.com/resume/static/img/colle.png",label:"学历/本科"}}),this._v(" "),e("msg",{attrs:{src:"http://lhp313-1253555032.coscd.myqcloud.com/resume/static/img/here.png",label:"位置/南昌"}}),this._v(" "),e("msg",{attrs:{src:"http://lhp313-1253555032.coscd.myqcloud.com/resume/static/img/time.png",label:"就业/待业"}})],1),this._v(" "),this._m(1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title3"},[e("span",[this._v("关于我的那些事")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"me"},[e("p",[this._v("大三学生，暂无经验，自学前端一年多")]),this._v(" "),e("p",[this._v("熟悉VUE框架，了解mv*模式开发，前端自动化的重要性")]),this._v(" "),e("p",[this._v("高效的自学能力，喜欢自己独立解决问题")]),this._v(" "),e("p",[this._v("不完成目标，誓不罢休")])])}]};var w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"pageFour"}},[this._m(0),this._v(" "),e("div",{ref:"experience",staticClass:"contrain",on:{mousemove:this.init,mouseout:this.out}},[this._m(1),this._v(" "),this._m(2)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("h3",[this._v("经历")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"img"},[e("img",{attrs:{src:"http://lhp313-1253555032.coscd.myqcloud.com/resume/static/expre.png",alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"body"},[s("h3",[t._v("某某公司就业")]),t._v(" "),s("h4",[t._v("201*-至今")]),t._v(" "),s("h4",[t._v("web前端开发工程师")]),t._v(" "),s("h4",[t._v("less vue jq等库文件")]),t._v(" "),s("ul",[s("li",[t._v("高度组件化、模块化思维，拥有各平台调试能力")]),t._v(" "),s("li",[t._v("同期学习ES6及vue等体会函数式编程思想")])])])}]};var j={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"pageFifth"}},[s("div",{staticClass:"title"},[s("h3",[t._v("作品")])]),t._v(" "),s("div",{staticClass:"contrain"},[s("ul",[s("li",[s("h3",[t._v("XTHP(聊天室)")]),t._v(" "),s("p",[t._v("1.用户：包括登录、注册、个人信息管理、群组信息管理\n                  2.消息：实现了群聊、私聊。包括表情图片文件发送，其中表情可以快捷输入，图片可以使用ctrl+v粘贴发送\n                  3.群组：可以修改群组信息，还可以通过链接加入群组\n                  4.favico提醒：消息提醒\n                  5.屏蔽用户：实现屏蔽私聊，以及桌面消息提醒（部分浏览器支持）（更新）")]),t._v(" "),s("a",{attrs:{href:"http://haiping313.cn"}},[s("i",{staticClass:"material-icons"},[t._v("link")])])]),t._v(" "),s("li",[s("h3",[t._v("个人简历")]),t._v(" "),s("p",[t._v("介绍自己的一些认识，在简历中谈及了自己学习的技术以及想走的方向。希望能得到大家的认可，希望自己能有\n                  一份好的工作，希望自己能遇到一些志同道合的人\n              ")]),t._v(" "),s("a",{attrs:{href:"http://haiping313.cn"}},[s("i",{staticClass:"material-icons"},[t._v("link")])])]),t._v(" "),s("li",[s("h3",[t._v("未完待续")]),t._v(" "),s("a",{attrs:{href:"http://haiping313.cn"}},[s("i",{staticClass:"material-icons"},[t._v("link")])])]),t._v(" "),s("li",[s("h3",[t._v("未完待续")]),t._v(" "),s("a",{attrs:{href:"http://haiping313.cn"}},[s("i",{staticClass:"material-icons"},[t._v("link")])])])])])])}]};var q={name:"pageSix",data:function(){return{links:p}}},T={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"pageSix"}},[t._m(0),t._v(" "),s("div",{staticClass:"contrain"},[t._m(1),t._v(" "),t._m(2),t._v(" "),s("div",{staticClass:"three"},[s("ul",t._l(t.links,function(t){return s("li",[s("a",{attrs:{href:t.href}},[s("img",{attrs:{src:t.src,alt:"sd"}})])])}))])]),t._v(" "),t._m(3)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("h3",[this._v("交 流")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"one"},[e("span",{staticStyle:{color:"red"}},[this._v("成功")]),this._v(" "),e("span",{staticStyle:{color:"rgba(0, 231, 255, 0.88)"}},[this._v("兴趣")]),this._v(" "),e("span",{staticStyle:{color:"#9f00ff"}},[this._v("爱好")]),this._v(" "),e("span",{staticStyle:{color:"rgb(0, 255, 33)"}},[this._v("代码")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"two"},[s("p",[t._v("重视一个问题深入了解")]),t._v(" "),s("p",[t._v("对代码的热爱，对作品的满意")]),t._v(" "),s("p",[t._v("注重效率，看重时间")]),t._v(" "),s("p",[t._v("前端路上，一片迷茫，大佬带我飞吧")]),t._v(" "),s("p",[t._v("一起去看更远的世界")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"underline"},[e("div",{staticClass:"bottom"},[e("p",[this._v("F12（command+option+J）有彩蛋")]),this._v(" "),e("p",[this._v("All Rights Reserved")]),this._v(" "),e("p",[this._v("********* Copyright © 2015 - 2017")])])])}]};var R={name:"App",components:{navigation:m,pageOne:_,pageTwo:E,pageThree:s("Z0/y")(k,$,!1,function(t){s("8jO+")},null,null).exports,pageFour:s("Z0/y")({name:"pageFour",methods:{init:function(t){var e=this.$refs.experience,s=t.offsetX,i=t.offsetY;s=(s-375)/46,i=(i-175)/35,e.style.transform="rotateY("+s+"deg) rotateX("+-i+"deg)"},out:function(){this.$refs.experience.style.transform="rotateY(0deg) rotateX(0deg)"}}},w,!1,function(t){s("sUU9")},null,null).exports,pageFifth:s("Z0/y")({name:"pageFifth"},j,!1,function(t){s("thRi")},null,null).exports,pageSix:s("Z0/y")(q,T,!1,function(t){s("DysC")},null,null).exports},data:function(){return{curId:0}},mounted:function(){this.addListen()},methods:{jump:function(t){var e=this;if(this.curId!==t){var s=document.getElementsByClassName("page");t<this.curId?(s[t].classList.add("pre-page"),setTimeout(function(){s[e.curId].classList.remove("cur-page"),s[e.curId].classList.add("next-page"),s[t].classList.remove("pre-page"),s[t].classList.add("cur-page");var i=e.curId,a=t;e.curId=t,setTimeout(function(){s[i].classList.remove("next-page"),5!==i&&s[i+1].classList.remove("next-page"),0!==i&&s[i-1].classList.remove("pre-page"),5!==a&&s[a+1].classList.add("next-page"),0!==a&&s[a-1].classList.add("pre-page")},500)},200)):(s[t].classList.add("next-page"),setTimeout(function(){s[e.curId].classList.remove("cur-page"),s[e.curId].classList.add("pre-page"),s[t].classList.remove("next-page"),s[t].classList.add("cur-page");var i=e.curId,a=t;e.curId=t,setTimeout(function(){s[i].classList.remove("pre-page"),5!==i&&s[i+1].classList.remove("next-page"),0!==i&&s[i-1].classList.remove("pre-page"),5!==a&&s[a+1].classList.add("next-page"),0!==a&&s[a-1].classList.add("pre-page")},500)},200))}},nextPage:function(){if(5!=this.curId){var t=document.getElementsByClassName("page");0!==this.curId&&t[this.curId-1].classList.remove("pre-page"),t[this.curId].classList.remove("cur-page"),t[this.curId].classList.add("pre-page"),t[this.curId+1].classList.remove("next-page"),t[this.curId+1].classList.add("cur-page"),this.curId+=1,5!=this.curId&&t[this.curId+1].classList.add("next-page")}},prePage:function(){if(0!=this.curId){var t=document.getElementsByClassName("page");5!==this.curId&&t[this.curId+1].classList.remove("next-page"),t[this.curId].classList.remove("cur-page"),t[this.curId].classList.add("next-page"),t[this.curId-1].classList.remove("pre-page"),t[this.curId-1].classList.add("cur-page"),this.curId-=1,0!=this.curId&&t[this.curId-1].classList.add("pre-page")}},addListen:function(){var t=this,e=!1;function s(s){if(s.wheelDelta>0){if(e)return;t.prePage(),e=!0,setTimeout(function(){e=!1},500)}else if(s.detail>0){if(e)return;t.prePage(),e=!0,setTimeout(function(){e=!1},500)}else{if(e)return;t.nextPage(),e=!0,setTimeout(function(){e=!1},500)}}document.addEventListener&&document.addEventListener("DOMMouseScroll",s,!1),document.addEventListener("mousewheel",s)}}},F={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("navigation",{attrs:{active:t.curId},on:{jump:t.jump}}),t._v(" "),s("div",{staticClass:"contra"},[s("page-one",{staticClass:"page cur-page"}),t._v(" "),s("page-three",{staticClass:"page next-page"}),t._v(" "),s("page-two",{staticClass:"page"}),t._v(" "),s("page-four",{staticClass:"page"}),t._v(" "),s("page-fifth",{staticClass:"page"}),t._v(" "),s("page-six",{staticClass:"page"})],1)],1)},staticRenderFns:[]};var S=s("Z0/y")(R,F,!1,function(t){s("HHGj")},null,null).exports,H=s("zO6J");i.a.use(H.a);var z=new H.a({});i.a.config.productionTip=!1,new i.a({el:"#app",router:z,components:{App:S},template:"<App/>"})},QrT1:function(t,e){},sUU9:function(t,e){},thRi:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.814d3617e2c01b5760c9.js.map