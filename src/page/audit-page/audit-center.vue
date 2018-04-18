<template>
  <div class="audit-center">
    <div class="mui-content">
      <div class="mui-card1" style="margin-bottom: 35px;">
        <div class="mui-segmented-control mui-bar-tab">
          <a class="tab-bottom-btn mui-active" @tap="changeTab('0')" :style="{backgroundColor: tabValue =='0' ? btnBgC : '#f7f7f7'}">
            待审核
          </a>
          <a class="tab-bottom-btn mui-active" @tap="changeTab('1')" :style="{backgroundColor: tabValue=='1' ? btnBgC : '#f7f7f7'}">
            未通过
          </a>
          <a class="tab-bottom-btn mui-active" @tap="changeTab('-1')" :style="{backgroundColor: tabValue=='-1' ? btnBgC : '#f7f7f7'}">
            已通过
          </a>
          <a class="tab-bottom-btn mui-active" @tap="changeTab('999')" :style="{backgroundColor: tabValue=='999' ? btnBgC : '#f7f7f7'}">
            否决审核
          </a>
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
          stage: "待审核",
          type: "邵蓓菁",
          amount: "1/1",
          time: "3/27/18"
        },
        {
          name: "申请预审会2",
          stage: "待审核",
          type: "邵蓓菁",
          amount: "1/1",
          time: "3/27/18"
        },
      ],
      btnBgC: '#13b0f0',
      tabValue: '0'
    };
  },
  methods: {
    changeTab(item) {
      console.log(item)
      this.tabValue = item;
      if(item=='0'){
        this.reviewListData=[
          {
            name: "申请预审会",
            stage: "待审核",
            type: "邵蓓菁",
            amount: "1/1",
            time: "3/27/18"
          },
          {
            name: "申请预审会2",
            stage: "待审核",
            type: "邵蓓菁2",
            amount: "1/21",
            time: "3/27/18"
          },
        ]
      }else if(item=='1') {
        this.reviewListData=[
          {
            name: "申请预审会",
            stage: "未通过",
            type: "邵蓓菁",
            amount: "1/1",
            time: "3/27/18"
          },
          {
            name: "申请预审会2",
            stage: "未通过",
            type: "邵蓓菁2",
            amount: "1/21",
            time: "3/27/18"
          },
        ]
      }else if(item=='-1') {
        this.reviewListData=[
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
            type: "邵蓓菁2",
            amount: "1/21",
            time: "3/27/18"
          },
        ]
      }else{
        this.reviewListData=[
          {
            name: "申请预审会",
            stage: "否决审核",
            type: "邵蓓菁",
            amount: "1/1",
            time: "3/27/18"
          },
          {
            name: "申请预审会2",
            stage: "否决审核",
            type: "邵蓓菁2",
            amount: "1/21",
            time: "3/27/18"
          },
        ]
      }
    },
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
  padding-top: 40px;
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
    .tab-bottom-btn:nth-of-type(4) {
      border: 0;
    }
  }
</style>
