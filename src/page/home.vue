<template>
  <div class="home">
    <header class="mui-bar mui-bar-nav">
      <h1 class="mui-title">首页</h1>
    </header>
    <nav class="mui-bar mui-bar-tab">
      <router-link :to="{ name: 'project-list'}" class="tab-bottom-btn">
        <span class="mui-icon mui-icon-home"></span>
        项目
      </router-link>
      <router-link :to="{ name: 'metting-list'}" class="tab-bottom-btn">
        <span class="mui-icon mui-icon-email"></span>
        会议
      </router-link>
      <!-- :to="{ name: 'user', params: { userId: 123 }}" -->
    </nav>
    <div class="mui-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "test"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.home {
  height: 100%;
  .mui-content {
    height: 100%;
    padding-bottom: 20px;
    .tab-bottom-btn {
      color: red;
    }
  }
}
</style>
