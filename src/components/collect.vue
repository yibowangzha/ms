<template>
   <div>
      <!-- 表头 -->
      <van-nav-bar title="我的收藏" left-text="" left-arrow @click-left="zqd_go()">
        <template #right>
        </template>
     </van-nav-bar>
         <div class="tad-dan" @click="danxiang(item.course_id)" v-for="(item,index) in arr" :key="index">
              
            <p class="tad-p1">{{item.title}}</p>
            <van-icon name="star" size="0.4rem" color="#EB6100" @click.stop="xing(item.collect_id)"/>
            <div class="tad-sj">
              <p>共{{item.section_num}}课时</p>
            </div>
            <div class="tad-tu">
              <div>
                <img :src='item.teachersAvatar' alt="">
                <font>{{item.teachers}}</font>
              </div>
            </div>
            <p class="tad-ren">
              <span>{{item.sales_num}}人已报名</span>
              <!-- <font>免费</font> -->
               <font class="free" v-show="item.price == 0">免费</font>
                <font v-show="item.price == 100">
                  <img
                    src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
                    alt
                  />
                  1.00
                </font>
            </p>
        </div>
   </div>
</template>

<script>
import { gets,posts,puts } from "../util/api";
import {Toast} from 'Vant'

export default {
   data() {
       return {
         arr:[],
       };
   },
   created() {

   },
   mounted() {
      this.shou()
   },
   methods: {
    //  渲染数据
     async shou(){
       let {data} = await gets('collect',{page:1,limit:10,type:1})
       console.log(data)
       this.arr = data.data.list
     },
    //  取消收藏
     async xing(id){
       let {data} = await puts(`collect/cancel/${id}/1`)
       if(data.code == 200){
         Toast('取消成功')
         this.shou()
       }
     },
     zqd_go(){
        this.$router.go(-1)
     },
     danxiang(id){
      this.$router.push('/Course-detail?id='+id)
     }
   }
};
</script>

<style scoped>
.van-icon{
  position: absolute;
  top: 0.2rem;
  right:0.2rem;
}
.tad-nei {
  background-color: #f0f2f5;
  padding: 0.3rem;
}
.tad-dan {
  background: #fff;
  border-radius: 0.1rem;
  padding: 0 0.28rem;
  margin-bottom: 0.3rem;
  position: relative;
}
.tad-dan .tad-p1 {
  font-size: 0.3rem;
  color: #333;
  padding-top: 0.3rem;
  margin: 0;
}
.tad-sj {
  display: flex;
  align-items: center;
}
.tad-sj p {
  margin: 0;
  margin-top: 0.2rem;
  font-size: 0.25rem;
}
.tad-tu {
  width: 6.34rem;
  height: 1.3rem;
}
.tad-tu div {
  display: flex;
  height: 100%;
  align-items: center;
  width: 1.54rem;
}
.tad-tu img {
  width: 0.54rem;
  height: 0.54rem;
  border-radius: 50%;
}
.tad-tu font{
    font-size: .24rem;
    color: rgba(0,0,0,.45);
    margin-left: 0.17rem;
    margin-right: .2rem;

}
.tad-ren {
  border-top: 1px solid #f5f5f5;
  height: 0.87rem;
  line-height: 0.87rem;
  display: flex;
  font-size: 0.25rem;
}
.tad-ren span {
  width: 5.4rem;
  padding-right: 0.2rem;
  color: rgba(0, 0, 0, 0.45);
}
.tad-ren font {
  color: #44a426;
  font-size: 0.35rem;
}
</style>
