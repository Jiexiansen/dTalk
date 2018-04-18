<template>
  <div class="home">
    <header class="mui-bar mui-bar-nav">
      <h1 class="mui-title">{{headerTitle}}</h1>
    </header>
    <nav class="mui-bar mui-bar-tab">
      <a @tap="goPage('project-list')" class="tab-bottom-btn" :style="{backgroundColor: headerTitle=='首页' ? btnBgC : 'transparent'}"><span class="mui-icon mui-icon-home"></span>项目</a>
      <a @tap="goPage('audit-center')" class="tab-bottom-btn" :style="{backgroundColor: headerTitle=='审核中心' ? btnBgC : 'transparent'}"><span class="mui-icon mui-icon-loop"></span>审核</a>
      <a @tap="goPage('metting-list')" class="tab-bottom-btn" :style="{backgroundColor: headerTitle=='会议信息' ? btnBgC : 'transparent'}"><span class="mui-icon mui-icon-star"></span>投票</a>
    </nav>
    <div class="mui-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import http from "@/api/http";
import api from "@/api/api";
import axios from 'axios';

export default {
  name: "Home",
  data() {
    return {
      headerTitle:'首页',
      btnBgC: '#13b0f0'
    };
  },
  created() {
    // this.getToken();
  },
  methods: {
    getToken: async function() {
        const callBackData = await http.get(api.getToken, {userid: 1});
        // localStorage.setItem('token', callBackData.data[0])
        if(callBackData.status!==200) {
          alert(callBackData.status)
        }
    },
    goPage(url) {
      this.headerTitle = url == 'project-list' ? '首页' : url == 'audit-center' ? '审核中心' : '会议信息';
      this.$router.push({
        name: url
      })
    },
    test() {
      // console.log(this.$route.name)
    }
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.home {
  height: 100%;
  .mui-bar-tab {
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-around;
    justify-content: space-around;
    border: none;
    width: 100%;
    .tab-bottom-btn {
      width: 50%;
      text-align: center;
    }
    .tab-bottom-btn:nth-of-type(2) {
      border-left: 1px solid lightgray;
      border-right: 1px solid lightgray;
    }
  }

  .mui-content {
    height: 100%;
    padding-bottom: 20px;
  }
}
</style>
