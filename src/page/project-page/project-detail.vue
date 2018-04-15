<template>
  <div class="project-detail">
    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <p class="mui-title">上海乾立中心项目</p>
    </header>
    <div class="mui-content">
      <div style="padding: 10px 10px;">
        <div class="mui-segmented-control mui-bar-tab">
          <router-link :to="{ name: 'project-overview'}" class="tab-bottom-btn mui-active ">
            <span class="mui-icon mui-icon-home"></span>
            项目概况
          </router-link>
          <router-link :to="{ name: 'trading-plan'}" class="tab-bottom-btn">
            <span class="mui-icon mui-icon-home"></span>
            交易方案
          </router-link>
          <router-link :to="{ name: 'audit-center'}" class="tab-bottom-btn">
            <span class="mui-icon mui-icon-home"></span>
            审核中心
          </router-link>
        </div>
      </div>
      <!-- <transition name="fade" mode="out"> -->
      <router-view style="padding: 20px 0 50px; height:100%;" />
      <!-- </transition> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "projectDetail",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.project-detail {
  height: 100%;
  header {
    .mui-title {
      font-weight: none;
    }
  }
  .mui-bar-tab {
    display: -webkit-flex;
    display: flex;
    background: rgb(243, 188, 86);
    position: fixed;
    top: 44px;
    border-radius: 0;
    border: 0;
    left: 0;
    -webkit-justify-content: space-around;
    justify-content: space-around;
    width: 100%;
    height: 40px;
    .tab-bottom-btn {
      width: 50%;
      border-right: 1px solid lightgray;
      text-align: center;
      line-height: 40px;
    }
    .tab-bottom-btn:nth-of-type(3) {
      border: 0;
    }
  }
}
</style>
