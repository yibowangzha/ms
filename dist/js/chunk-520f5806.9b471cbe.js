(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-520f5806"],{"17b8":function(t,a,e){"use strict";e("3959")},3959:function(t,a,e){},"93bb":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("van-nav-bar",{attrs:{title:"我的收藏","left-text":"","left-arrow":""},on:{"click-left":function(a){return t.zqd_go()}},scopedSlots:t._u([{key:"right",fn:function(){},proxy:!0}])}),t._l(t.arr,(function(a,s){return e("div",{key:s,staticClass:"tad-dan",on:{click:function(e){return t.danxiang(a.course_id)}}},[e("p",{staticClass:"tad-p1"},[t._v(t._s(a.title))]),e("van-icon",{attrs:{name:"star",size:"0.4rem",color:"#EB6100"},on:{click:function(e){return e.stopPropagation(),t.xing(a.collect_id)}}}),e("div",{staticClass:"tad-sj"},[e("p",[t._v("共"+t._s(a.section_num)+"课时")])]),e("div",{staticClass:"tad-tu"},[e("div",[e("img",{attrs:{src:a.teachersAvatar,alt:""}}),e("font",[t._v(t._s(a.teachers))])],1)]),e("p",{staticClass:"tad-ren"},[e("span",[t._v(t._s(a.sales_num)+"人已报名")]),e("font",{directives:[{name:"show",rawName:"v-show",value:0==a.price,expression:"item.price == 0"}],staticClass:"free"},[t._v("免费")]),e("font",{directives:[{name:"show",rawName:"v-show",value:100==a.price,expression:"item.price == 100"}]},[e("img",{attrs:{src:"https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png",alt:""}}),t._v(" 1.00 ")])],1)],1)}))],2)},i=[],n=e("9870"),c=e("dee3"),r={data(){return{arr:[]}},created(){},mounted(){this.shou()},methods:{async shou(){let{data:t}=await Object(n["c"])("collect",{page:1,limit:10,type:1});console.log(t),this.arr=t.data.list},async xing(t){let{data:a}=await Object(n["e"])(`collect/cancel/${t}/1`);200==a.code&&(Object(c["a"])("取消成功"),this.shou())},zqd_go(){this.$router.go(-1)},danxiang(t){this.$router.push("/Course-detail?id="+t)}}},o=r,l=(e("17b8"),e("2c07")),u=Object(l["a"])(o,s,i,!1,null,"17d13420",null);a["default"]=u.exports}}]);
//# sourceMappingURL=chunk-520f5806.9b471cbe.js.map