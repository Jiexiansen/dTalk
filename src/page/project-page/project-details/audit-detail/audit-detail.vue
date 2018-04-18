<template>
  <div class="metting-detail">
    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <p class="mui-title">上海乾立中心项目</p>
    </header>
    <div class="card-con">
      <div class="imgcard">
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

            ▼ 在上海等一二线城市从严限购、限贷的作用下，吸引了更多的上海、杭州外溢客群以及部分返乡置业人士前来，湖州房地产市场在最近一年中都呈现量价齐升行情，商品住宅销量不断走高的状态。▼ 项目拿地的楼面成交价格与周边地块相比有一定优势，溢价低▼ 项目周边2公里内暂处于待开发状态，无相关配套。▼ 从周边楼盘的销售状况来看，去化速度在每月20套以上，较为乐观。
          </div>
        </div>
      </div>
    </div>
    <div class="card-con">
      <div class="imgcard">
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

            ▼ 在上海等一二线城市从严限购、限贷的作用下，吸引了更多的上海、杭州外溢客群以及部分返乡置业人士前来，湖州房地产市场在最近一年中都呈现量价齐升行情，商品住宅销量不断走高的状态。▼ 项目拿地的楼面成交价格与周边地块相比有一定优势，溢价低▼ 项目周边2公里内暂处于待开发状态，无相关配套。▼ 从周边楼盘的销售状况来看，去化速度在每月20套以上，较为乐观。
          </div>
        </div>
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
  padding-top: 10px;
  .project-name {
    text-align: center;
    font-size: 18px;
    color: black;
    padding: 10px 0;
    border-bottom: 1px solid lightgray;
  }
  .metting-content {
    // text-align: center;
    // height: 300px;
    padding-bottom: 10px;
    font-size: 14px;
    color: #333;
    padding-top: 10px;
    text-indent: 2rem;
    line-height: 20px;
    // color: red;
  }
  .card {
    margin-top: 30px;
    border: 1px solid blue;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
    float: left;
    margin-right: 10px;
  }
  .imgcard:nth-of-type(1) {
    margin-top: 30px;
  }
  .imgcard {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
    margin-bottom: 0px;
    // padding: 10px;
  }

  .card-con {
    padding: 10px;
  }
}
</style>
