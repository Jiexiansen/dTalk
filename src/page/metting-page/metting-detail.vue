<template>
  <div class="metting-detail">
    bbbb
    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <p class="mui-title">测试专用</p>
    </header>
    <div class="mui-content">
      <ul class="detail-item">
        <p class="project-name">项目名称</p>
        <li class="detail-item-left">
          <p>会议状态</p>
          <p>会议室名称</p>
          <p>会议开始时间</p>
          <p>会议结束时间</p>
          <p>是否借用电脑</p>
          <p>创建人</p>
          <p>创建时间</p>
        </li>
        <li class="detail-item-right">
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </li>
      </ul>
      <p class="project-name">会议内容</p>
      <div class="metting-content">
        内容
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "mettingDetail",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.metting-detail {
  height: 100%;
  .project-name {
    text-align: center;
    font-size: 18px;
    color: black;
    padding: 10px 0;
  }
  .metting-content {
    text-align: center;
    height: 300px;
    line-height: 300px;
    color: red;
  }
}
</style>
