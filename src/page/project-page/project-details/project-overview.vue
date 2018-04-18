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
        <!-- <p>{{projectData.project.projDept}}</p> -->
        <p>{{projectData.project.projOfficer}}</p>
        <p>{{projectData.project.projOfficer}}</p>
        <p>{{projectData.project.projOfficer}}</p>
        <p>{{projectData.project.projCreatDate}}</p>
        <p>{{projectData.project.projState}}</p>
        <p>{{projectData.project.projType}}</p>
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
        <p>{{projectData.project.projOfficer}}</p>
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
import http from "@/api/http";
import api from "@/api/api";
import axios from 'axios';

export default {
  name: "projectOverview",
  data() {
    return {
      projectData: []
    };
  },
  created() {
    this.getProjectDetailData();
  },
  methods: {
    getProjectDetailData: async function() {
      let params = {
        id: localStorage.getItem('projectId')
      }
      // console.log(JSON.stringify(params))
      const callBackData = await http.get(api.getProjectDetail, params);
      console.log(callBackData.data);
      // callBackData.data
      this.projectData = callBackData.data;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.project-overview {
  height: 100%;
  overflow: hidden;
  padding: 20px 0 50px;
}
</style>