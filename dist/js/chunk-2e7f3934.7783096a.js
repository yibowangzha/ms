(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e7f3934"],{"51b6":function(t,e,a){"use strict";a.r(e);var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app"},[a("van-nav-bar",{attrs:{title:"我的关注","left-text":"","left-arrow":""},on:{"click-left":function(e){return t.zqd_go()}},scopedSlots:t._u([{key:"right",fn:function(){},proxy:!0}])}),a("div",{staticClass:"box"},[a("ul",t._l(t.arr,(function(e,c){return a("li",{key:c,on:{click:function(a){return t.go(e.teacher_id)}}},[a("div",[a("img",{attrs:{src:e.avatar,alt:""}})]),a("div",{staticClass:"zi"},[a("p",[t._v(t._s(e.teacher_name)),a("span",[t._v(t._s(e.level_name))])]),a("p",[t._v(t._s(e.introduction))])]),a("button",{on:{click:function(a){return a.stopPropagation(),t.guan(e.collect_id)}}},[t._v("取消关注")])])})),0)])],1)},n=[],o=a("9870"),i=a("dee3"),r={data(){return{arr:[]}},created(){},mounted(){this.shuju()},methods:{async shuju(){let{data:t}=await Object(o["c"])("collect",{page:1,limit:10,type:2});console.log(t),this.arr=t.data.list},async guan(t){let{data:e}=await Object(o["e"])(`collect/cancel/${t}/2`);console.log(e),200==e.code&&(Object(i["a"])("取消成功"),this.shuju())},go(t){this.$router.push("/teacher?id="+t)},zqd_go(){this.$router.go(-1)}}},s=r,l=(a("7918"),a("2c07")),u=Object(l["a"])(s,c,n,!1,null,"5dd45fce",null);e["default"]=u.exports},7918:function(t,e,a){"use strict";a("c8b1")},c8b1:function(t,e,a){}}]);
//# sourceMappingURL=chunk-2e7f3934.7783096a.js.map