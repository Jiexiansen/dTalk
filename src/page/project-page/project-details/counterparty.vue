<template>
  <div class="counterparty">
      <div class="card-con">
      <div class="imgcard">
        <div class="mui-content">
          <ul class="detail-item">
            <div class="detail-title">交易对手-1</div>
            <li class="detail-item-left">
              <p>公司名称</p>
              <p>注册资本</p>
              <p>实收资本</p>
              <p>注册成立日期</p>
              <p>法定代表人</p>
              <p>股权结构</p>
              <p>最近财务基本情况</p>
              <p>开发资质</p>
              <p>实际控制人</p>
              <p>累计开发量</p>
              <p>累计开发项目</p>
              <p>诉讼或负面栏</p>
            </li>
            <li class="detail-item-right">
              <p>申请预审会</p>
              <p>已通过</p>
              <p></p>
              <p></p>
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
          <div style="borderBottom:1px solid lightgray;line-height:30px;">诉讼或负面说明</div>
        </div>
      </div>
    </div>
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
.counterparty{
  height: 100%;
  overflow: hidden;
  padding: 20px 0 50px;
  .content {
    height: 100px;
    line-height: 100px;
    text-align: center;
    color: red;
  }
}
</style>