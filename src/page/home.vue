<template>
  <div class="home">
    <header class="mui-bar mui-bar-nav">
      <h1 class="mui-title">首页</h1>
    </header>
    <nav class="mui-bar mui-bar-tab">
      <router-link :to="{ name: 'project-list'}" class="tab-bottom-btn" style="background: lightgray;">
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
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.home {
  height: 100%;
  .mui-bar-tab {
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-around;
    justify-content: space-around;
    width: 100%;
    .tab-bottom-btn {
      width: 50%;
      border-right: 1px solid lightgray;
      text-align: center;
    }
    .tab-bottom-btn:nth-of-type(2) {
      border: 0;
    }
  }

  .mui-content {
    height: 100%;
    padding-bottom: 20px;
  }
}
</style>
