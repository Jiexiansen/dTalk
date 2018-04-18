<template>
  <div class="project-list">
    <div class="mui-content">
      <div class="mui-card1" style="margin-bottom: 35px;">
        <ul class="mui-table-view">
          <li class="mui-table-view-cell list-cont" v-for="item in projectListData" :key="item.name" @tap="goDetails(item.ID)">
            <div class="list-cont-detail">
              <p>
                <span>{{item.projName}}</span>
                <span>【{{item.projState}}】</span>
              </p>
              <p>
                <span>【{{item.projType}}】</span>
                <span>金额：{{item.projTypeId}} 万元</span>
              </p>
            </div>
            <div class="list-cont-time">
              <p>
                <span>{{item.projCreatDate}}</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import http from "@/api/http";
import api from "@/api/api";
import axios from 'axios';

export default {
  name: "projectList",
  data() {
    return {
      projectListData: []
    };
  },
  created() {
    this.getToken();
  },
  methods: {
    getToken: async function() {
        const callBackData = await http.get(api.getToken, {userid: 1})
        localStorage.setItem('token', callBackData.data[0])
        if(callBackData.status!==200) {
          alert(callBackData.status)
        }else{
          this.getProjectListData();
        }
    },
    goDetails(id) {
      localStorage.setItem('projectId', id)
      this.$router.push({
        name: "project-detail",
        query: { id }
      });
    },
    getProjectListData: async function() {
        let params = {
          page: 1,
          rows: 10,
          sorts: ''
        }
        const callBackData = await http.get(api.getMyProject, params);
        this.projectListData = callBackData.data;
        // console.log(callBackData)
    }
  },
  mounted() {}
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

