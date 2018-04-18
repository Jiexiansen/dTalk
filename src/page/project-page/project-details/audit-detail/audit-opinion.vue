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
          <p></p>
          <p></p>
          <p></p>
        </li>
      </ul>
      <p class="project-name">审核意见</p>
      <div class="metting-content">
        <textarea rows="3" cols="20" class="audit-texarea">审核意见~~~</textarea>
      </div>
      <button type="button" class="mui-btn mui-btn-primary btn-submit" @click="handleSubmit">通过</button>
      <button type="button" class="mui-btn mui-btn-danger btn-veto" @click="handleVeto">否决</button>
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
      alert("通过");
    },
    handleVeto() {
      alert('否决')
    }

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.metting-detail {
  height: 100%;
  padding-bottom: 80px;
  .mui-content {
    overflow: hidden;
  }
  .project-name {
    text-align: center;
    font-size: 18px;
    color: black;
    padding: 10px 0 0;
    // border-bottom: 1px solid lightgray;
  }
  .metting-content {
    width: 100%;
    overflow: hidden;
    font-size: 14px;
    color: #333;
    padding-top: 10px;
    line-height: 20px;
  }
  .btn-submit {
    width: 80%;
    display: block;
    margin: 10px auto;
  }

  .btn-veto {
    width: 80%;
    display: block;
    margin: 0 auto 30px;
  }
 .audit-texarea{
   border-top: 1px solid lightgray;
   border-bottom: 1px solid lightgray;
   border-radius: 0;
   padding: 10px;
   min-height: 200px;
 }
  .mui-input {
    height: 100%;
    line-height: 30px;
    background: red;
  }
}
</style>
