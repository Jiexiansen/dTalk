<template>
  <div class="metting-center">
    <div class="mui-content">
      <div class="mui-card1" style="margin-bottom: 35px;">
        <div class="tab-bar">
          <div class="tab-title">
            <p>
              <span>【项目名称】</span>
              <span>【会议标题】</span>
            </p>
            <p>
              <span>【会议室名称】</span>
              <span>【创建人】</span>
            </p>
          </div>
          <div class="tab-time">
            <p>
              <span>【会议时间】</span>
            </p>
          </div>
        </div>
        <ul class="mui-table-view">
          <li class="mui-table-view-cell list-cont" v-for="item in mettingListData" :key="item.name" @tap="goDetails(item.name)">
            <div class="list-cont-detail">
              <p>
                <span>{{item.name}}</span>
                <span>【{{item.stage}}】</span>
              </p>
              <p>
                <span>【{{item.type}}】</span>
                <span>创建人：{{item.amount}}</span>
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
      mettingListData: [
        {
          name: "上海乾立中心项目",
          stage: "测试专用2",
          type: "1",
          amount: "邵蓓菁",
          time: "3/27/18"
        },
        {
          name: "上海乾立中心项目2",
          stage: "测试专用2",
          type: "1",
          amount: "邵蓓菁",
          time: "3/27/18"
        },
        {
          name: "上海乾立中心项目3",
          stage: "测试专用2",
          type: "1",
          amount: "邵蓓菁",
          time: "3/27/18"
        }
      ]
    };
  },
  methods: {
    goDetails(name) {
      console.log(name);
      this.$router.push({
        name: "metting-detail"
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
