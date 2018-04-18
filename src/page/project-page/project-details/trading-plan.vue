<template>
  <div class="trading-plan">
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
        <p>{{tradingData.investSum}}</p>
        <p>{{tradingData.sumUse}}</p>
        <p>{{tradingData.investHorizon}}</p>
        <p>{{tradingData.investStockWay}}</p>
        <p>{{tradingData.investClaimWay}}</p>
        <p>{{tradingData.investEarningRate}}</p>
        <p>{{tradingData.fundScale}}</p>
        <p>{{tradingData.showExitStage}}</p>
      </li>
    </ul>
    <div class="detail-title">基金结构</div>
    <div class="content detailContent1">
    </div>
      <img src="/KindEditorImages/20180326/20180326103709_5516.jpg" alt="">
    
    <div class="detail-title">基金费用及收益分配方式</div>
    <div class="content detailContent2">
      内容
    </div>

    <div class="detail-title">投资方案</div>
    <div class="content detailContent3">内容</div>

  </div>
</template>

<script>
import http from "@/api/http";
import api from "@/api/api";
import axios from 'axios';
import $ from 'jquery';

export default {
  name: "tradingPlan",
  data() {
    return {
      tradingData: {}
    };
  },
  created(){
    this.getData();
  },
  methods: {
    getData: async function() {
      let params = {
        id: localStorage.getItem('projectId')
      }
      console.log(JSON.stringify(params))
      const callBackData = await http.get(api.getTrabsaction, params);
      console.log(callBackData);
      this.tradingData = callBackData.data;
      // callBackData.data
      // this.projectData = callBackData.data;
    }
  },
  mounted() {
    const that = this;
    setTimeout(function(){
      document.querySelector('.detailContent1').innerHTML=that.tradingData.fundStructure;
      document.querySelector('.detailContent2').innerHTML=that.tradingData.fundCostAndAllot;
      document.querySelector('.detailContent3').innerHTML=that.tradingData.investPlan;
    },100)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.trading-plan {
  height: 100%;
  overflow: hidden;
  padding: 20px 0 50px;
  .content {
    // height: 100px;
    line-height: 22px;
    padding: 10px;
    // text-align: center;
    image{
      width: 100%;
      height: 100%;
    }
  }
}
</style>