<template>
  <div>
    <!-- 表头 -->
    <van-nav-bar title="意见反馈" left-text="" left-arrow @click-left="zqd_go()">
      <template #right>
        <!-- <span class="zqd_sp1">学习卡兑换</span> -->
      </template>
    </van-nav-bar>

    <!-- 文本域 -->
    <textarea v-model="zqd_txt" cols="40" rows="10" maxlength="500" class="zqd_txt" placeholder="请输入你的意见"> </textarea>
    {{ zqd_txt.length || 0 }}/500

    <!-- 底部按钮 -->
    <van-button type="primary" id="zqd">提交</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      zqd_txt: '',
    };
  },
  created() {},
  mounted() {},
  methods: {
    zqd_go() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.zqd_txt {
  margin-left: 0.75rem;
}
#zqd {
  width: 6.5rem;
  height: 1rem;
  margin-left: 0.5rem;
  margin-top: 5rem;
  border-radius: 0.2rem;
  /* background: linear-gradient(90deg,#eac687,#c8ae84); */
  background: orange;
}
</style>
