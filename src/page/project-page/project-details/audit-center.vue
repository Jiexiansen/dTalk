<template>
  <div class="audit-center">
    <div class="mui-content">
      <div class="mui-card1" style="margin-bottom: 35px;">
        <div class="mui-segmented-control mui-bar-tab">
          <router-link :to="{ name: 'project-overview'}" class="tab-bottom-btn mui-active " :style="{backgroundColor: $route.name=='project-overview' ? btnBgC : '#f7f7f7'}">
            <span class="mui-icon mui-icon-home"></span>
            项目概况
          </router-link>
          <router-link :to="{ name: 'counterparty'}" class="tab-bottom-btn" :style="{backgroundColor: $route.name=='counterparty' ? btnBgC : '#f7f7f7'}">
            <span class="mui-icon mui-icon-home"></span>
            交易对手
          </router-link>
          <router-link :to="{ name: 'trading-plan'}" class="tab-bottom-btn" :style="{backgroundColor: $route.name=='trading-plan' ? btnBgC : '#f7f7f7'}">
            <span class="mui-icon mui-icon-home"></span>
            交易方案
          </router-link>
        </div>
        <ul class="mui-table-view">
          <li class="mui-table-view-cell list-cont" v-for="item in reviewListData" :key="item.name" @tap="goDetails(item.stage)">
            <div class="list-cont-detail">
              <p>
                <span>{{item.name}}</span>
                <span>【{{item.stage}}】</span>
              </p>
              <p>
                <span>{{item.type}}</span>
                <span>{{item.amount}}</span>
              </p>
            </div>
            <div class="list-cont-time">
              <p>
                <span>{{item.time}}</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "auditCenter",
  data() {
    return {
      reviewListData: [
        {
          name: "申请预审会",
          stage: "通过",
          type: "邵蓓菁",
          amount: "1/1",
          time: "3/27/18"
        },
        {
          name: "申请预审会2",
          stage: "未通过",
          type: "邵蓓菁",
          amount: "1/1",
          time: "3/27/18"
        },
        {
          name: "申请预审会3",
          stage: "通过",
          type: "邵蓓菁",
          amount: "1/1",
          time: "3/27/18"
        }
      ]
    };
  },
  methods: {
    goDetails(name) {
      console.log(name);
      let url = name == "通过" ? "audit-detail" : "audit-opinion";
      this.$router.push({
        name: url
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="less" scoped>
.audit-center {
  height: 100%;
}
.mui-bar-tab {
    display: -webkit-flex;
    display: flex;
    background: #f7f7f7;;
    position: fixed;
    top: 45px;
    border-radius: 0;
    border: 0;
    left: 0;
    border-bottom: 1px solid lightgray;
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
</style>
