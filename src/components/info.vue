<template>
  <div>
    
     <van-nav-bar title="个人信息" left-text="" left-arrow @click-left="$router.go(-1)">
         <template #right>
         
         </template>
      </van-nav-bar>
    <input ref="file" type="file" style="display:none;" >
    <ul class="zqd_ul">
      <!-- 头像 -->
      <li @click="change('avatar')">
        <span>头像</span>
        <span>
         <img width=40 height="40" :src="arr.avatar" alt="">
        </span>
      </li>
      <!-- 昵称 -->
      <li @click="change('name')">
        <span>昵称</span>
        <span>{{arr.nickname}}</span>
      </li>
      <!-- 手机号 -->
      <li class="mobile" @click="change('mobile')">
        <span>手机号</span>
        <span>{{arr.mobile}}</span>
      </li>
      <!-- 性别 -->
      <li @click="change('sex')">
        <span>性别</span>
        <span>{{arr.sex|sexfilter}}</span>
      </li>
      <!-- 出生日期 -->
      <li @click="change('birthday')">
        <span>出生日期</span>
        <span>{{arr.birthday}}</span>
      </li>
      <!-- 所在城市 -->
      <li @click="change('city')">
        <span>所在城市</span>
        <span></span>
      </li>
      <!-- 学科 -->
      <li @click="change('subjuct')">
        <span>学科</span>
        <span></span>
      </li>
      <!-- 年级 -->
      <li @click="change('grade')">
        <span>年纪</span>
        <span></span>
      </li>
    </ul>
    <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
            <div v-show="tag == 'avatar'">
                <p>拍照</p>
                <p>选择图片</p>
                <p @click="show = false">取消</p>
            </div>
            <div v-show="tag == 'birthday'">
                生日日期
            </div>
            <div v-show="tag == 'city'">
              <p>
                <span>取消</span>
                <span>确认</span>
              </p>
            </div>

        </van-popup>
  </div>
</template>

<script>
import {Popup} from 'vant'
import Head from "@/components/Header.vue";
import { gets } from "../util/api";
export default {
  data() {
    return {
      arr:[],
      show:false,
      tag:'',
    };
  },
  created() {},
  mounted() {
   this.shuju()
  },
  methods: {
    change(tag){
      this.tag = tag
      this.show = true
      switch(tag){
        case 'name':
        this.$router.push({
          path:'/set-info',
          query:{
            name:this.arr.nickname,
            tag
          }}
        )
        break;
        case 'sex':
          this.$router.push({
            path:'/set-info',
            query:{
              sex:this.arr.sex,
              tag
            }
          })
      break;
      }

    },
    async shuju() {
      let { data } = await gets("userInfo");
      console.log(data);
      this.arr = data.data
    }
  },
  filters:{
    sexfilter(val){
      if(val == 0){
        return '男'
      }else if(val == 1){
        return '女'
      }else{
        return '保密'
      }
    }
  },
  components: {
    Head
  }
};
</script>

<style scoped lang="scss">
.zqd_ul {
  /* padding: 0.1rem 0.2rem;
   margin:0.45rem 0; */
  background: #fff;
  margin: 0.26667rem 0;
  margin: 2.66667vw 0;
  padding: 0.13333rem 0.4rem;
  padding: 1.33333vw 4vw;
  li {
    height: 1.46667rem;
    height: 14.66667vw;
    line-height: 1.46667rem;
    line-height: 14.66667vw;
    display: flex;
    justify-content: space-between;
    position: relative;
    box-sizing: border-box;
    padding-right: 0.5rem;
  }
}
  .zqd_ul .mobile::before {
    display: none;
  }
.zqd_ul li:before {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    width: 0.26667rem;
    width: 2.66667vw;
    height: 0.26667rem;
    height: 2.66667vw;
    border-top: 1px solid #b7b7b7;
    border-right: 1px solid #b7b7b7;
  }
.zqd_ul li::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 1px;
    background-color: #f5f5f5;
  }
   .zqd_ul li:last-child::after {
    display: none;
  }
.zqd_ul img {
  width: 0.74rem;
  height: 0.74rem;
  border-radius: 50%;
}
</style>
