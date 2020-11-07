<template>
<div>
    <div class="tad-sou">
            <van-icon name="arrow-left" size="0.48rem" @click="fan"/>
               <input type="text" class="tad-i" placeholder="请输入内容" v-model="value" @input="chufa()">
            <span @click="fan" v-show="flog">取消</span>
            <span v-show="flog2" style="color='#000'" @click='search()'>搜索</span>
    </div>
    <div class="tad-lishi" v-show="flog">
        <p class="tad-lishi1">
            <span>历史搜索</span>
          <van-icon name="delete" size="0.4rem" @click="del()"/>
        </p>    
        <div class="tad-jilu">
           <span @click="hui(i)" v-for="(i,k) in arr" :key="k">{{i}}</span>
        </div>
    </div>
 <div class="tad-nei" v-show="show">
        <div class="tad-dan"  v-for="(item,index) in list" :key="index" @click="danxiang(item.teachers_list[0].course_basis_id)">
            <p class="tad-p1">{{item.title}}</p>
            <div class="tad-sj">
              <p>
                </p>
              <p>共{{item.course_type}}课时</p>
            </div>
            <div class="tad-tu">
              <div>
                <img :src='item.teachers_list[0].teacher_avatar' alt="">
                <font>{{item.teachers_list[0].teacher_name}}</font>
              </div>
                   <div v-if="item.has_buy==1">
                     <img src="../../public/img/5abe16aff492e007ed6de49a347364fb_03.jpg" alt="" class="i9">
                    </div>
            </div>
            <p class="tad-ren">
              <span  >{{item.brows_num}}人已报名</span>
              <font v-if="item.price==0" class="mf">免费</font>
              <font v-if="item.price!=0" class="fk">
                <img src="../../public/img/a1f37d1be616ee3adf3baa7bb806bea3_03.jpg" alt="">
                {{item.price/100+'.00'}}</font>
            </p>
        </div>
</div>
<div v-show="show1">暂无数据</div>
</div>
</template>

<script>
import {gets,posts} from '../util/api'
export default {
  data () {
   return {
         value: '',
         flog:true,
         flog2:false,
         list:[],
         show:false,
         show1:false,
         arr:JSON.parse(sessionStorage.getItem("lishi")) || [],
   }
  },
  name: 'demo',
  props: {},
mounted () {},
  // 计算属性
  computed: {},
  watch: {
    arr:{
      handler(val){
        sessionStorage.setItem('lishi',JSON.stringify(val))
      },
     deep:true
    },
  },
  methods: {
    //   路由返回
    fan(){
          this.$router.go(-1)
    },
    hui(i){
      this.value = i
      this.flog = false
      this.flog2 = true
    },
    async search(){
        let { data } = await gets(`courseBasis?page=1&limit=10&course_type=0&keywords=${this.value}`)
        this.list=data.data.list
        console.log(this.list)
        if(this.list!=''){
            this.show = true
        }else{
            this.show1 = true
        }
       let index = this.arr.findIndex(item =>{
        return item == this.value 
       })
       console.log(index)
       if(index!=-1){
         this.arr.splice(index,1)
       } 
        if (this.arr.length >= 5) {
          this.arr.pop();
        }
        this.arr.unshift(this.value);
        sessionStorage.setItem('lishi',JSON.stringify(this.arr))
    },
    danxiang(i){
      console.log(i)
      this.$router.push({
        path:'/Course-detail',
        query:{id:i}
      })
    },
    //   输入时发生
    chufa(){
        console.log(1)
        
        if(this.value == ''){
            this.flog = true
            this.flog2 = false
            this.show = false
            this.show1 = false
        }else{
             this.flog = false
            this.flog2 = true
        }
    },
    del(){
      this.arr = []
    }
  },
}
</script> 

<style scoped>
.tad-sou{
    width: 100%;
    height: 0.95rem;
    border-bottom: 1px solid #eaeaea;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}
.tad-sou span{
    font-size: 0.28rem;
    color: #D2D2D1;
    float: right;
    margin-right: 0.2rem;
    margin-left: 0.2rem;
}
.tad-i{
    width: 4.9rem;
    height: 0.62rem;
    background-color: #E4E7ED;
    border: none;
    outline: none;
    border-radius: 0.8rem;
    padding-left: 0.56rem;
    font-size: 0.3rem;
    margin-left: 0.1rem;
}
.tad-lishi{
    width: 6.82rem;
    height: 1.04rem;
    margin: 0.24rem;
}
.tad-lishi1{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    margin: 0;
}
.tad-lishi1 span{
    font-size: 0.3rem;
    color: #333;
    font-weight: 700;
}
.tad-jilu{
      display: flex;
    flex-wrap: wrap;
    justify-content: left;
}
.tad-jilu span{
    margin-left: 0.14rem;
    margin-right: 0.14rem;
    margin-top: 0.2rem;
    padding: 0.2rem 0.12rem;
    border-radius: .15rem;
    background: #f7f7f7;
    font-size: .25rem;
    color: #333;
}
.tad-nei {
  background-color: #f0f2f5;
  padding: 0.3rem;
  margin-bottom: 1rem;
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
  display: flex;
  justify-content: space-between;
}
.tad-tu .i9{
  width: 1.17rem;
  height: 0.96rem;
}
.tad-tu div {
  width: 3rem;
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
    margin-left: 0.1rem;
}
.tad-ren {
  border-top: 1px solid #f5f5f5;
  height: 0.87rem;
  line-height: 0.87rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.25rem;
}
.tad-ren span {
  padding-right: 0.2rem;
  color: rgba(0, 0, 0, 0.45);
}
.tad-ren .mf {
  color: #44a426;
  font-size: 0.35rem;
}
.tad-ren .fk {
  color: #EE1F1F;
  font-size: 0.3rem;
}
</style>
