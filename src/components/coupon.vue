<template>
  <div>
    <!-- 表头 -->
    <van-nav-bar title="我的优惠券" left-text="" left-arrow @click-left="zqd_go()">
      <template #right>
        <!-- <van-icon name="search" size="18" /> -->
        <!-- <van-icon name="apps-o" /> -->
      </template>
    </van-nav-bar>
    <!-- 导航栏 -->
    <van-tabs v-model="activeName">
      <van-tab title="未使用" name="a">
        <div class="box" v-show="wsy1 == []">
        <img src="https://wap.365msmk.com//img/empty.0d284c2e.png"/>
        暂无优惠券
        </div>
        </van-tab>
      <van-tab title="已使用" name="b"> <div class="box" v-show="ysy1 == []">
        <img src="https://wap.365msmk.com//img/empty.0d284c2e.png"/>
        暂无优惠券
        </div></van-tab>
      <van-tab title="已过期" name="c"> <div class="box" v-show="ygq1 == []">
        <img src="https://wap.365msmk.com//img/empty.0d284c2e.png"/>
        暂无优惠券
        </div></van-tab>
    </van-tabs>
  </div>
  
</template>
  
<script>
import { gets, posts,puts } from "../util/api";
export default {
  data() {
    return {
      activeName: 'a',
      wsy1:'',
      ysy1:'',
      ygq1:'',
    };
  },
  created() {},
  mounted() {
    this.wsy()
    this.ysy()
    this.ygq()
  },
  methods: {
    async wsy(){
      let {data} = await gets('coupon?status=0')
      console.log(data)
      this.wsy1 = data.data
    },
    async ysy(){
      let {data} = await gets('coupon?status=1')
      console.log(data)
       this.ysy1 = data.data
    },
    async ygq(){
      let {data} = await gets('coupon?status=2')
      console.log(data)
       this.ygq1 = data.data
    },
    zqd_go() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped lang="scss">
    .box{
      width:100%;
      height:100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      img{
        width: 3rem;
        margin-top:2rem;
        margin-bottom: 0.5rem;
      }
    }
</style>
