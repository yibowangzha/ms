(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1da4b73a"],{7692:function(t,a,i){"use strict";i("e98f")},c751:function(t,a,i){"use strict";i.r(a);var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("header",[i("div",{on:{click:function(a){return t.$router.go(-1)}}},[i("img",{attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAwCAYAAAAGlsrkAAADgUlEQVRYR8XY+6ulUxzH8dcYYsglGteI/OASpsYPrkXKdRq5TogIM5Mf5D8RPx23URTygzCuTcYouSU1Ipo0buMSEWJCGPpMa9eeZ9az97P3efbxrdM5nf3s9V7ftb6Xz/dZ5H+yRQvEPQCnIb8/wdaFAAe2GidjL/yMuVmC98BRuAtHNk723VmB98T5uAIHV65z8yzA8fQ6XIAlaDL+nMVRH4JbcHpL0G7H09jQp8cnFU+PR7xu2md4Bu9hRx/grJH7vAYHVY72X7yPx/D1YDfzBe+NFViJ/N20vwr0Afw2/OF8wEfgSpxR8rMJ/REv4hVkA7vYtOATcROOrRxtACkS9+ND/FMLtEnBixHoHS35Gcg23IPvR5XjScAH4kJchn1a7vNVrMdP43pAV/C+uL3kZ+pt0/7G43gNf4yD5vNx4Hx+GO7EcZUFkyo/4OESvV2YO58ZBc59noOrcGjLigmeJ/EpsonO1gbO/5MqlyLH3HwuQbSxlL9fOtOGHqyBU31uxNktC/6O58vPbvnZdRNNcOrs9TgBOeqmfVXq7Ttt+TkN+CzcUPKzuaHc38d4FF92XXxcHqdpX4yrW/IzqfIR7isVqQ/uzqBJUYintSKfQrABLyMNvDcL+F4srayYbpKushnxulcL+G4cXlk10ZvCkECaCfhc3Iz9KvBIlU14Dr/26XI8TtpEmK1qgcfbLXhwXMeZZGPDaROlv7ZFvmTNrXiopNNE5bG2oWa+RoBHmi5D0qxpaQhpe6/PN8prJTN9N40haVaztL2kWBRjpxbYxePhZy4pRaXWJPLcG6WSTRV0o9pitPFyXIujW7xPO3yilNMd0wZX24lECNyKUyoPJMiiJgN/q0/wYK2U09tGSNls4Cm80DXoxkmfYSdy15kYLi8DdtPB5PvbZQPfjfN+EnDWSrFJr47wq5XZKJP07Gjqz0fBJwUP1orwy5R/TMuAllI7VwRgL4J+2IkM3Dn281paarRYxpeMMWk4u9i0Hg8H3UVl8s8Q3rRosg+wriny5wsegCKb0uH2bxlTI5vSYr8ZfKEvcNbLABclkwG9JhS/xbN4M/29T3DgeRWRJpNBoGYJukjjl/oGD2ARjhnYU3hqw8C6WYFz1GeWJlPL922zAsfzwQu2NcigMGxfzBI8AEXLBR6FkxE3Of3IQoCzgcBPLcGX105bFgq8W4T/B/tloBIPNqWNAAAAAElFTkSuQmCC",alt:""}})]),i("div",{staticClass:"cxy_top"},[i("div",{on:{click:t.showPopup}},[i("van-icon",{attrs:{name:"other-pay",size:"0.4rem"}})],1),i("div",[i("van-icon",{attrs:{name:"star-o",size:"0.4rem"}})],1),i("div",{on:{click:t.showTi}},[i("van-icon",{attrs:{name:"todo-list-o",size:"0.4rem"}})],1)])]),t._m(0),i("div",{staticClass:"cxy_item"},[t._m(1),t._m(2),i("div",{staticClass:"cxy_btn_t"},[i("van-button",{attrs:{color:"#000",disabled:"",plain:"",size:"small"}},[t._v("上一题")]),i("van-button",{attrs:{color:"#000",plain:"",size:"small"}},[t._v("确认")]),i("van-button",{attrs:{color:"#000",plain:"",size:"small"}},[t._v("下一题")])],1),i("div",{staticClass:"cxy_btn_s"},[i("van-button",{attrs:{color:"#000",plain:"",icon:"https://img.yzcdn.cn/vant/user-active.png",size:"small",type:"info"},on:{click:function(a){return t.Dialog()}}},[t._v(" 移除错题 ")]),i("van-button",{attrs:{color:"#000",plain:"",icon:"https://img.yzcdn.cn/vant/user-active.png",size:"small",type:"info"},on:{click:t.daan}},[t._v(" 查看答案 ")])],1)]),i("el-card",{directives:[{name:"show",rawName:"v-show",value:t.flag,expression:"flag"}]},[i("div",{staticClass:"cxy_da_top"},[i("p",[t._v("正确答案: "),i("span",[t._v("A")])]),i("p",[t._v("你的答案: "),i("span",[t._v("C")])])]),i("div",{staticClass:"cxy_da_con"},[i("p",[t._v("考点")]),i("ul",[i("li",[t._v("物理")]),i("li",[t._v("物理学史")])])]),i("div",{staticClass:"cxy_da_bot"},[i("p",[t._v("解析："),i("span",[t._v("暂无解析")])])])]),i("van-popup",{style:{height:"100%",width:"100%"},attrs:{position:"right"},model:{value:t.show,callback:function(a){t.show=a},expression:"show"}},[i("div",[i("van-nav-bar",{attrs:{title:"答题卡","left-arrow":""},on:{"click-left":t.onClickLeft}})],1),i("div",{staticClass:"cxy_cen"},[i("div",{staticClass:"cxy_con"},[i("div",[t._v("物理学史")]),i("div",[i("p",[i("span",[t._v("1")]),t._v("/7")])])]),i("div",[i("ul",{staticClass:"cxy_list"},[i("li",[t._v("1")]),i("li",[t._v("2")]),i("li",[t._v("3")]),i("li",[t._v("4")]),i("li",[t._v("5")]),i("li",[t._v("6")])])])]),i("footer",[i("van-button",{attrs:{type:"info",block:""},on:{click:function(a){return t.Dialog()}}},[t._v("结束巩固")])],1)]),i("van-popup",{style:{height:"100%",width:"100%"},attrs:{position:"right"},model:{value:t.showTiMu,callback:function(a){t.showTiMu=a},expression:"showTiMu"}},[i("div",[i("van-nav-bar",{attrs:{title:"题目纠错反馈","left-arrow":""},on:{"click-left":t.onClickLeft}})],1),i("div",{staticClass:"cxy_correct"},[i("p",[t._v("纠错类型")]),i("div",{staticClass:"nei"},[i("p",[i("input",{attrs:{type:"radio",name:"a"}}),t._v(" 错别字")]),i("p",[i("input",{attrs:{type:"radio",name:"a"}}),t._v(" 答案解析不匹配")]),i("p",[i("input",{attrs:{type:"radio",name:"a"}}),t._v(" 解析错误")]),i("p",[i("input",{attrs:{type:"radio",name:"a"}}),t._v(" 其他")])])]),i("el-card",[i("textarea",{attrs:{name:"",id:"",cols:"200",rows:"10",placeholder:"请输入题目纠错信息，最多不超过500个字"}}),i("p",[i("button",[t._v("提交")])])])],1)],1)},n=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"cxy_con"},[i("div",[t._v("物理学史")]),i("div",[i("p",[i("span",[t._v("1")]),t._v("/7")])])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"cxy_item_top"},[i("div",[t._v("多选")]),i("p",[t._v("1、 "),i("span",[t._v("6．下列叙述正确的是（）")])])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("ul",[i("li",[i("input",{attrs:{type:"checkbox"}}),i("p",[t._v("A、 "),i("span",[t._v("A．法拉第发现了电磁感应现象")])])]),i("li",[i("input",{attrs:{type:"checkbox"}}),i("p",[t._v("A、 "),i("span",[t._v("A．法拉第发现了电磁感应现象")])])]),i("li",[i("input",{attrs:{type:"checkbox"}}),i("p",[t._v("A、 "),i("span",[t._v("A．法拉第发现了电磁感应现象")])])]),i("li",[i("input",{attrs:{type:"checkbox"}}),i("p",[t._v("A、 "),i("span",[t._v("A．法拉第发现了电磁感应现象")])])])])}],c={name:"demo",props:{},components:{},data(){return{show:!1,showTiMu:!1,flag:!1}},computed:{},watch:{},methods:{showPopup(){this.show=!0},showTi(){this.showTiMu=!0},onClickLeft(){this.show=!1,this.showTiMu=!1},Dialog(){this.$dialog.confirm({message:"是否做对题目后自动移出该错题"}).then(()=>{this.$router.back()}).catch(()=>{})},daan(){this.flag=!this.flag}}},o=c,e=(i("7692"),i("2c07")),l=Object(e["a"])(o,s,n,!1,null,"b5dd78c4",null);a["default"]=l.exports},e98f:function(t,a,i){}}]);
//# sourceMappingURL=chunk-1da4b73a.8bcb341f.js.map