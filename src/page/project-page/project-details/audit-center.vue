<template>
  <div class="audit-center">
    <div class="mui-content">
      <div class="mui-card1" style="margin-bottom: 35px;">
        <div class="tab-bar">
          <div class="tab-title">
            <p>
              <span>【流程名称】</span>
              <span>【审核状态】</span>
            </p>
            <p>
              <span>【提交人】</span>
              <span>【流程处理情况】</span>
            </p>
          </div>
          <div class="tab-time">
            <p>
              <span>【提交时间】</span>
            </p>
          </div>
        </div>
        <ul class="mui-table-view">
          <li class="mui-table-view-cell list-cont" v-for="item in reviewListData" :key="item.name" @tap="goDetails(item.name)">
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
          stage: "通过",
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
      this.$router.push({
        name: "audit-detail"
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
</style>
