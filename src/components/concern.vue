<template>
    <div class="app">
       <!-- 表头 -->
       <van-nav-bar title="我的关注" left-text="" left-arrow @click-left="zqd_go()">
         <template #right>
         </template>
      </van-nav-bar>
     <div class="box" >
       <ul>
         <li v-for="(item,index) in arr" :key="index" @click="go(item.teacher_id)">
           <div>
             <img :src="item.avatar" alt="">
           </div>
           <div class="zi">
          <p>{{item.teacher_name}}<span>{{item.level_name}}</span></p>
             <p>{{item.introduction}}</p>
           </div>
          <button @click.stop="guan(item.collect_id)">取消关注</button>
         </li>
       </ul>
     </div>
    </div>
</template>

<script>
import { gets,posts,puts } from "../util/api";
import {Toast} from 'Vant'
export default {
    data() {
        return {
          arr:[]
        };
    },
    created() {

    },
    mounted() {
      this.shuju()
    },
    methods: {
      async shuju(){
        let {data} = await gets('collect',{page:1,limit:10,type:2})
        console.log(data)
        this.arr = data.data.list
      },
      async guan(id){
        let {data} = await puts(`collect/cancel/${id}/2`)
        console.log(data)
        if(data.code == 200){
          Toast('取消成功')
          this.shuju()
        }
      },
      go(id){
        this.$router.push('/teacher?id='+id)
      },
      zqd_go(){
         this.$router.go(-1)
      }
    }
};
</script>

<style scoped lang="scss">
/* 1111 */
.app{
  width: 100%;
  height: 100%;
  background: #8c8c8c;
}
.box{
  width: 100%;
  ul{
    width: 100%;
    background: #8c8c8c;
    box-sizing: border-box;
    padding: 0.2rem;
    li{
      width: 100%;
      height: 1.5rem;
      background: white;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding:0.2rem;
      img{
        width:1rem;
        margin-right:0.2rem;
      }
      .zi{
        display: flex;
        flex-direction: column;
        width: 4rem;
        p:nth-child(1){
          font-size: 0.3rem;
          span{
            font-size: 0.2rem;
            color: red;
            margin-left: 0.2rem;
          }
        }
        p:nth-child(2){
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
      button{
          width: 1.5rem;
      height: 0.8rem;
      color: #EB6100;
      border-radius: 0.4rem;
      background: #EBEEEE;
      font-size: 0.12rem;
      border: none;
      }
    }
  }
}
</style>
