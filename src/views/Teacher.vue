<template>
  <div class="cxy_box">
    <header>
      <p @click="$router.back()">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAPCAYAAADd/14OAAAA/ElEQVQoU33RsUvWYRTF8c8hQmgIE4e2IFDQIfCPcHGIlBpqcWtPcFHBFgWdHGxykURxUtfWZkfHtkZBCBzcrjzxe+P9ha/P9sD33nPuOfHIq6pJnOBZRnFVNYdzvML+g2BVfcIBnuJLkm89sKqeYAcruMaHJD+b6j+wqiZwinlcYinJ74G1v2BVven8vMYRPie5G/afqnqPQ4xhNcneQwc28AYvsJ1kfVQKDVzAMZ5jE1tJ6v+BgcdpXGAGZ1hOctvzOPhUVdvYDnmLKywm+dW7eghuCl+xgT/4mORHL8dhmap6h++tY6wl2X2s69nO91SLbyTYFTHebX55D93jTsSH0JDDAAAAAElFTkSuQmCC"
          alt=""
        />
      </p>
      <p>讲师详情</p>
    </header>
    <div class="cxy_base">
      <div>
        <img :src="list.teacher.avatar" alt="" style="margin-right:0.2rem"/>
        <div class="tea_title">
            <p>
              <span>{{list.teacher.real_name}}</span>
              <span>{{list.teacher.level_name}}</span>
            </p>
            <p>
              <span style="margin-right:0.2rem;">男</span>
              <span>{{list.teacher.teach_age}}年教龄</span>
            </p>
        </div>
        <div @click="guan(id)">
          <van-button round type="info" v-show="list.flag == 2">关注</van-button>
          <van-button round type="info" v-show="list.flag == 1">已关注</van-button>
        </div>
      </div>
    </div>
    <div class="cxy_nav">
      <van-tabs v-model="activeName" title-active-color="#eb6100">
        <van-tab title="讲师介绍" name="a">
          <el-row v-for="(item,index) in jieshao" :key="index">
            <el-col :span="7">{{item.attr_name}}</el-col>
            <el-col :span="17" v-for="(i,k) in item.attr_value" :key="k">{{i.attr_value_name}}</el-col>
          </el-row>
          <el-row>
            <el-col :span="7">老师简介</el-col>
            <el-col :span="17">{{intro}}</el-col>
          </el-row>
        </van-tab>
        <van-tab title="主讲课程" name="b">
          <el-card>
            <div @click="$router.push('/course-detail')">
              <p>每时每课特级教师-自主招生冲刺讲座10-二次函数4--存在性问题</p>
              <span>共1课时</span>
              <div class="cxy_cen">
                <img
                  src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png"
                  alt=""
                />
                <span>杨德胜</span>
              </div>
              <div class="cxy_fot">
                <p>45人已报名</p>
                <span>免费</span>
              </div>
            </div>
            <div>
              <p>每时每课特级教师-自主招生冲刺讲座10-二次函数4--存在性问题</p>
              <span>共1课时</span>
              <div class="cxy_cen">
                <img
                  src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png"
                  alt=""
                />
                <span>杨德胜</span>
              </div>
              <div class="cxy_fot">
                <p>45人已报名</p>
                <p>免费</p>
              </div>
            </div>
          </el-card>
          <!-- <el-card>
          </el-card> -->
        </van-tab>
        <van-tab class="cxy_three" title="学院评价" name="c">
          <el-card>
            <img src="https://wap.365msmk.com/img/empty.0d284c2e.png" alt="" />
            <p>暂无评价</p>
          </el-card>
        </van-tab>
      </van-tabs>
    </div>
    <van-tabbar>
      <van-tabbar-item @click="$router.push(`/oto-plan?id=${$route.query.id}`)"
        >立即预约</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
import { gets,posts } from "../util/api";
export default {
  // 组件名称
  name: "demo",
  // 组件参数 接收来自父组件的数据
  props: {},
  // 局部注册的组件
  components: {},
  // 组件状态值
  data() {
    return {
      activeName: "a",
      list: {},                   //老师详情
      id:this.$route.query.id,    //传过来的id
      intro:'',                   //老师简介
      jieshao:'',                 //老师介绍
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  mounted(){
    this.shuju()
    this.hh()
  },
  // 组件方法
  methods: {
     async shuju(){
      let { data } = await gets(`teacher/info/${this.id}`);
      console.log(data)
      // 老师简介
      this.intro = data.data.intro
      this.jieshao = data.data.attr
      console.log(this.jieshao)
    },
    async hh(){
       let { data: res } = await gets(`teacher/${this.id}`);
      console.log(res);
      // 老师详情
      this.list = res.data
    },
    async guan(id){
    let {data} = await gets(`teacher/collect/${id}`)
    console.log(data)
    this.hh()
  }
  },
};
</script>  
<style scoped lang="scss">
.cxy_box {
  background: #f0f2f5;
}
header {
  background: linear-gradient(180deg, #63b7fe, #4e7de3);
  color: #fff;
  display: flex;
  height: 2rem;
  :nth-child(2) {
    width: 6.3rem;
    text-align: center;
    padding: 0;
  }
  img {
    height: 0.32rem;
    width: 0.18rem;
  }

  p {
    height: 0.88rem;
    line-height: 0.88rem;
    padding-left: 0.4rem;
    font-size: 0.4rem;
  }
}
.cxy_base {
  // padding: 0.2rem 0.4rem;
  height: 0.9rem;
  width: 7.5rem;
  display: flex;
  justify-content: center;
  position: relative;
  > div {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    height: 1.8rem;
    width: 7.1rem;
    border-radius: 0.15rem;
    position: absolute;
    top: -1.15rem;
    padding: 0 0.2rem;
    box-sizing: border-box;
    align-items: center;
    img {
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
    }
    .van-button {
      padding: 0.08rem 0.35rem;
      color: #eb6100;
      background: #ebeefe;
      border: 0;
    }
  }
  .tea_title {
      
      flex: 1;
      :nth-child(1) {
        height: 0.5rem;
        line-height: 0.5rem;
        :nth-child(2) {
          color: red;
          font-size: 0.24rem;
          margin-left: 0.1rem;
        }
      }
      :nth-child(2) {
        color: #8c8c8c;
        font-size:0.24rem;
      }
  }
}
.van-tabs {
  background-color: #fff;
}
.van-tab {
  height: 0.9rem;
  border-bottom: 0.01rem solid red;
  img {
    width: 3rem;
    height: 3rem;
  }
}
.cxy_box {
  background: #f0f2f5;
}
.el-card__body {
  > div {
    background: #fff;
    border-radius: 0.13333rem;
    padding: 0 0.37333rem;
    margin-bottom: 0.4rem;
    box-shadow: 0 0.4vw 0.93333vw 0 hsla(0, 0%, 81.2%, 0.35);
  }
}
.el-card {
  padding: 0 0.2rem;
  height: 100%;
  div {
    > p {
      font-size: 0.32rem;
    }
    > span {
      color: #666;
      font-size: 0.24rem;
    }
  }
  .cxy_cen {
    height: 1.3rem;
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.45);
    span {
      padding-left: 0.27rem;
    }
  }
  .cxy_fot {
    height: 0.8rem;
    display: flex;
    border-top: 1px solid #f5f5f5;
    justify-content: space-between;
    align-items: center;
    P {
      color: rgba(0, 0, 0, 0.45);
      font-size: 0.26rem;
    }
    span {
      font-size: 0.32rem;
      color: #44a426;
    }
    // border-bottom: 0.01rem solid red;
  }

  img {
    width: 0.54rem;
    height: 0.54rem;
    border-radius: 50%;
  }
}
.van-tabbar .van-tabbar-item {
  background-color: #eb6100;
  color: #fff;
  font-size: 0.4rem;
}
.cxy_three {
  text-align: center;
  img {
    width: 3rem;
    height: 3rem;
    border-radius: 0;
  }
  p{
        font-size: .4rem;
    color: #8c8c8c;
    margin-top: .2rem;
  }
}
.el-row {
  padding: 0 0.4rem;
  height: 1rem;
  padding-top: 0.2rem;
  font-size: 0.26rem;
  color: #8c8c8c;
}
</style>

