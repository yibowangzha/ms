<template>
    <div>
      <Head></Head>
      <ul class="zqd_ul">
        
         <!-- 昵称 -->
         <li>
            <van-nav-bar  left-text="昵称" right-arrow>
               <template #right>
                 <span class="zqd_sp">马兴龙123</span>
                 <van-icon name="arrow" size="18" />
               </template>
             </van-nav-bar>
         </li>
         
         <!-- 性别 -->
         <li>
            <van-nav-bar  left-text="性别" right-arrow>
               <template #right>
                 <span class="zqd_sp">男</span>
                 <van-icon name="arrow" size="18" />
               </template>
             </van-nav-bar>
         </li>
         <!-- 出生日期 -->
         <li>
            <van-nav-bar  left-text="出生日期" right-arrow>
               <template #right>
                 <span class="zqd_sp">2018-05-18</span>
                 <van-icon name="arrow" size="18" />
               </template>
             </van-nav-bar>
         </li>
         <!-- 所在城市 -->
         <li>
            <van-nav-bar  left-text="所在城市" right-arrow>
               <template #right>
                 <span class="zqd_sp">2018-05-18</span>
                 <van-icon name="arrow" size="18" />
               </template>
             </van-nav-bar>
         </li>
          <!-- 学科 -->
          <li>
            <van-nav-bar  left-text="学科" right-arrow>
               <template #right>
                 <span class="zqd_sp">英语 数学 物理</span>
                 <van-icon name="arrow" size="18" />
               </template>
             </van-nav-bar>
         </li>
         <!-- 年级 -->
         <li>
            <van-nav-bar  left-text="年级" right-arrow>
               <template #right>
                 <span class="zqd_sp">请选择</span>
                 <van-icon name="arrow" size="18" />
               </template>
             </van-nav-bar>
         </li>
      </ul>
      <button>提交信息</button>
    </div>
</template>
<script>
   import Head from '@/components/Header.vue'
export default {
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {

    },
    methods: {

    },
    components: {
      Head
    }
};
</script>

<style scoped>
.zqd_ul{
   padding: 0.1rem 0.2rem;
   /* margin:0.45rem 0; */
}
.zqd_ul>li{
  line-height:0.8rem;
}
.zqd_ul img{
   width: 0.74rem;
   height: 0.74rem;
   border-radius: 50%;
}
.zqd_ul .zqd_sp{
   font-size: 0.14rem;
   color: #8C8C8C;
}

</style>
