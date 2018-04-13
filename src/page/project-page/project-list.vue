<template>
  <div class="project-list">
    <div class="mui-content">
      <div class="mui-card1" style="margin-bottom: 35px;">
        <div class="tab-bar">
          <div class="tab-title">
            <p>
              <span>【项目名称】</span>
              <span>【项目阶段】</span>
            </p>
            <p>
              <span>【项目类型】</span>
              <span>【投资金额】</span>
            </p>
          </div>
          <div class="tab-time">
            <p>
              <span>【提交时间】</span>
            </p>
          </div>
        </div>
        <ul class="mui-table-view">
          <li class="mui-table-view-cell list-cont" v-for="item in projectListData" :key="item.name" @tap="goDetails(item.name)">
            <div class="list-cont-detail">
              <p>
                <span>{{item.name}}</span>
                <span>【{{item.stage}}】</span>
              </p>
              <p>
                <span>【{{item.type}}】</span>
                <span>金额：{{item.amount}} 万元</span>
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
  name: "projectList",
  data() {
    return {
      projectListData: [
        {
          name: "上海乾立中心项目",
          stage: "储备",
          type: "并购类",
          amount: "100",
          time: "3/30/18"
        },
        {
          name: "上海乾立中心项目2",
          stage: "储备",
          type: "并购类",
          amount: "100",
          time: "3/30/18"
        },
        {
          name: "上海乾立中心项目3",
          stage: "储备",
          type: "并购类",
          amount: "100",
          time: "3/30/18"
        }
      ]
    };
  },
  methods: {
    goDetails(name) {
      console.log(name);
      this.$router.push({
        name: "project-detail"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.project-list {
  height: 100%;
  .tab-bar {
    height: 60px;
    background: lightgoldenrodyellow;
    overflow: hidden;
    .tab-title {
      float: left;
      height: 100%;
      p {
        height: 50%;
        line-height: 30px;
        span {
          font-weight: bold;
        }
      }
    }
    .tab-time {
      float: right;
      line-height: 60px;
      p {
        span {
          font-weight: bold;
        }
      }
    }
  }
  .list-cont {
    // height: 0px;
    .list-cont-detail {
      float: left;
      height: 100%;
      p {
        height: 50%;
        line-height: 25px;
      }
    }
    .list-cont-time {
      float: right;
      line-height: 50px;
    }
  }
}
</style>

