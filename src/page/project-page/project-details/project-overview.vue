<template>
  <div class="project-overview">
    <div class="detail-title">基本信息</div>
    <ul class="detail-item">
      <li class="detail-item-left">
        <p>部门</p>
        <p>项目经理</p>
        <p>项目经理联系方式</p>
        <p>提交时间</p>
        <p>项目阶段</p>
        <p>项目类型</p>
      </li>
      <li class="detail-item-right">
        <p>部门</p>
        <p>项目经理</p>
        <p>项目经理联系方式</p>
        <p>提交时间</p>
        <p>项目阶段</p>
        <p></p>
      </li>
    </ul>
    <div class="detail-title">并购类信息</div>
    <ul class="detail-item">
      <li class="detail-item-left">
        <p>并购方式</p>
        <p>产品人名称</p>
        <p>标的资产名称</p>
        <p>项目现状</p>
        <p>标的资产建筑面积</p>
        <p>收购面积</p>
        <p>收购总价</p>
        <p>交易税费</p>
        <p>收购意向金</p>
      </li>
      <li class="detail-item-right">
        <p>部门</p>
        <p>产品人名称</p>
        <p>标的资产名称</p>
        <p>项目现状</p>
        <p>标的资产建筑面积</p>
        <p>收购面积</p>
        <p>收购总价</p>
        <p>交易税费</p>
        <p>收购意向金</p>
      </li>
    </ul>
    <div class="detail-title">开发类信息</div>
    <ul class="detail-item">
      <li class="detail-item-left">
        <p>开发商名称</p>
        <p>土地性质</p>
        <p>土地取得方式</p>
        <p>土地取得价</p>
        <p>土地溢价率</p>
        <p>产品定位</p>
        <p>取得证照</p>
        <p>项目现状</p>
        <p>拆迁情况</p>
      </li>
      <li class="detail-item-right">
        <p>部门</p>
        <p>产品人名称</p>
        <p>标的资产名称</p>
        <p>项目现状</p>
        <p>标的资产建筑面积</p>
        <p>收购面积</p>
        <p>收购总价</p>
        <p>交易税费</p>
        <p>收购意向金</p>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "projectOverview",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.project-overview {
  height: 100%;
  overflow: hidden;
  padding: 20px 0 50px;
  // .detail-title {
  //   text-align: center;
  //   font-weight: 500;
  //   padding: 15px;
  //   font-size: 16px;
  //   border-bottom: 1px solid lightgray;
  // }
  // .detail-item {
  //   overflow: hidden;
  //   .detail-item-left {
  //     width: 50%;
  //     float: left;
  //     padding-left: 10px;

  //     p {
  //       border-bottom: 1px solid lightgray;
  //       text-align: left;
  //       height: 30px;
  //       line-height: 30px;
  //       color: #333;
  //     }
  //   }
  //   .detail-item-right {
  //     float: right;
  //     width: 50%;
  //     padding-right: 10px;
  //     p {
  //       border-bottom: 1px solid lightgray;
  //       text-align: right;
  //       height: 30px;
  //       line-height: 30px;
  //     }
  //   }
  // }
}
</style>