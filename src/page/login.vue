<template>
  <div class="login">
    <header class="mui-bar mui-bar-nav">
      <h1 class="mui-title">绑定账号</h1>
    </header>
    <div class="mui-content">
      <form class="mui-input-group">
        <div class="mui-input-row">
          <label>账号：</label>
          <input type="text" class="mui-input-clear" placeholder="请输入用户名">
        </div>
        <div class="mui-input-row">
          <label>密码：</label>
          <input type="password" class="mui-input-password" placeholder="请输入密码">
        </div>
        <div class="mui-content-padded">
          <button type="button" class="mui-btn mui-btn-primary mui-btn-block" @click="handleVerification">绑定</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "test",
      value: ""
    };
  },
  methods: {
    handleVerification() {
      this.$router.push({
        name: "home"
      });
      console.log(123);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.login {
  // background: #fefec8;
  height: 100%;
  .mui-content {
    .mui-input-group {
      overflow: hidden;
      padding: 30px 10px 0;
      .mui-btn-block {
        padding: 10px;
      }
    }
  }
}
</style>