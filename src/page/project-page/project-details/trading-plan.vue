<template>
  <div class="trading-plan">
    <div class="detail-title">交易方案</div>
    <ul class="detail-item">
      <li class="detail-item-left">
        <p>投资金额</p>
        <p>资金用途</p>
        <p>投资期限</p>
        <p>股权投资</p>
        <p>债权投资</p>
        <p>预期投资收益率</p>
        <p>基金规模</p>
        <p>展望/退出期</p>
      </li>
      <li class="detail-item-right">
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </li>
    </ul>
    <div class="detail-title">基金结构</div>
    <div class="content">内容</div>
    <div class="detail-title">基金费用及收益分配方式</div>
    <div class="content">
      内容
    </div>

    <div class="detail-title">投资方案</div>
    <div class="content">内容</div>

  </div>
</template>

<script>
export default {
  name: "tradingPlan",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.trading-plan {
  height: 100%;
  overflow: hidden;
  padding: 20px 0 50px;
  .detail-title {
    text-align: center;
    font-weight: 500;
    font-size: 16px;
    padding: 15px;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
  }
  .detail-item {
    overflow: hidden;
    .detail-item-left {
      width: 50%;
      padding-left: 10px;
      float: left;
      p {
        border-bottom: 1px solid lightgray;
        text-align: left;
        height: 30px;
        line-height: 30px;
        color: #333;
      }
    }
    .detail-item-right {
      float: right;
      width: 50%;
      padding-right: 10px;
      p {
        border-bottom: 1px solid lightgray;
        text-align: right;
        height: 30px;
        line-height: 30px;
      }
    }
  }
  .content {
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
}
</style>