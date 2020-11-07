<template>
<div>
 <van-nav-bar title="个人信息修改" left-text="" left-arrow @click-left="$router.go(-1)">
    <template #right>
      保存
    </template>
</van-nav-bar>
<div v-show="tag == name">
    <input type="text" v-model="name">
</div>
<!-- <ul v-show="tag == sex">
    <li @click="sex == '男'" :class="sex=='男'?'active':''">
        男
    </li>
    <li>
        女
    </li>
</ul> -->
</div>
</template>

<script>
// import Head from "@/components/Header.vue";
export default {
 // 组件名称
 name: '',
 // 组件参数 接收来自父组件的数据
 props: [],
 // 局部注册的组件
 components: {},
 // 组件状态值
 data () {
 return {
   name:'',
   tag:'',
   sex1:''
 }
 },
 // 计算属性
 computed: {},
 // 侦听器
 watch: {},
 // 组件方法
 methods: {},
 /**
 * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
 */
 created () {
   console.log(this.$route.query)
 },
 /**
 /**
 * el 被新创建的 vm.$ el 替换，并挂载到实例上去之后调用该钩子。
 * 如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$ el 也在文档内。
 */
 mounted () {
   this.tag = this.$route.query.tag
   console.log(this.tag)
   switch(this.tag){
     case 'name':
     this.name = this.$route.query.name
     break;
   }

 },
 /**
 * 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
 * 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。
 */
 updated () {
 },
 /**
 * keep-alive 组件激活时调用。 仅针对keep-alive 组件有效
 */
 activated () {
 },
 /**
 * keep-alive 组件停用时调用。 仅针对keep-alive 组件有效
 */
 deactivated () {
 },
}
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style scoped lang="scss">
ul{
  background: #fff;
    margin: .26667rem 0;
    margin: 2.66667vw 0;
    padding: .13333rem .4rem;
    padding: 1.33333vw 4vw;
    li{
      height: 1.46667rem;
    height: 14.66667vw;
    line-height: 1.46667rem;
    line-height: 14.66667vw;
    font-size: .37333rem;
    font-size: 3.73333vw;
    color: #595959;
    position: relative;
    }
    li.active{
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzlBMTk5NkVCNzRDMTFFOTlEMzU4OTdFRjlDNjMxNjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzlBMTk5NkZCNzRDMTFFOTlEMzU4OTdFRjlDNjMxNjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDOUExOTk2Q0I3NEMxMUU5OUQzNTg5N0VGOUM2MzE2MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDOUExOTk2REI3NEMxMUU5OUQzNTg5N0VGOUM2MzE2MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvL8dXQAAAHGSURBVHjaYvz//z/DQALGP6F0t1MRiIOB+BEQr2ahs+UaQHwMiAWhfF0mOlrOA8RrkSwHAXt6OmAOEGuhic2ilwMKgDgcTWwuEC+hRyK0AeL9QIyc3s4BsTUQ/6C1AySglkkiib0DYmMgfgDi0DIKQD5eiWY5qNCJgVlOawd0ALEdmlgTEG+nR0EUAipk0MR2ALE3EP+jtQPUgfg0EPMiiT2Axvs7dMVMNChs1qFZ/hMaIu+waWCiQ2GTA8RncWkAOcAAiK8C8VcgngzEbFQsbOZBHYW3NtwJpN2QxECFRhAQf6BWYYNPIygEnqOJOQLxESCWI6GwWYVm+XtolfuDkGaQA4qA+DiauDYQnwBiPTILm2jkwoaQA0Cp0wmaepEByNBDWAoTkgsbYltEIMf0QhMTMgAFYyQQbyC3sCG1SVYCxF0gOSSxv0CcCcSz8RQ2D4HYCFd+J7VNGAetr9GbbLVAPAGIT6Ll95/QFH+Wmo1SL2gQc6GJgxKXAppYKqH8Tm6r2BKItwCxEB41oMImmZbNck0gBhVWsljkiCpsCGVDQuA6jvi9BMT+lFhOanXMDMQ+0EIKVHfsAuLvFPeMBrprBhBgADxzbshcfaUMAAAAAElFTkSuQmCC) no-repeat 100%;
    background-size: .4rem .4rem;
    background-size: 4vw 4vw;
    }
}

</style>
