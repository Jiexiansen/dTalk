<template>
  <div class="metting-detail">
    bbbb
    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <p class="mui-title">上海乾立中心项目</p>
    </header>
    <div class="mui-content">
      <ul class="detail-item">
        <p class="project-name">审核意见</p>
        <li class="detail-item-left">
          <p>审核名称</p>
          <p>审核状态</p>
          <p>提交人</p>
          <p>提交时间</p>
        </li>
        <li class="detail-item-right">
          <p>申请预审会</p>
          <p>已通过</p>
          <p></p>
          <p></p>
        </li>
      </ul>
      <p class="project-name">审核意见</p>
      <div class="metting-content">

      </div>
      <button type="button" class="mui-btn mui-btn-primary btn-submit" @click="handleSubmit">提交</button>

    </div>
  </div>
</template>

<script>
export default {
  name: "mettingDetail",
  data() {
    return {};
  },
  methods: {
    handleSubmit() {
      alert("提交");
    }
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
    border-bottom: 1px solid lightgray;
  }
  .metting-content {
    height: 200px;
    font-size: 14px;
    color: #333;
    padding-top: 10px;
    text-indent: 2rem;
    line-height: 20px;
  }
  .btn-submit {
    width: 80%;
    display: block;
    margin: 0 auto;
  }
}
</style>
