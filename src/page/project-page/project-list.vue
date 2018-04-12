<template>
  <div class="project-list">
    <div class="mui-content">
      <div class="mui-card1" style="margin-bottom: 35px;">
        <div class="tab-bar">
          <div class="tab-title">
            <p>
              <span>项目名称</span>
              <span>项目阶段</span>
            </p>
            <p>
              <span>项目类型</span>
              <span>投资金额</span>
            </p>
          </div>
          <div class="tab-time">
            <p>
              <span>提交时间</span>
            </p>
          </div>
        </div>
        <ul class="mui-table-view">
          <li class="mui-table-view-cell">
            Item 1
          </li>
          <li class="mui-table-view-cell">
            Item 2
          </li>
          <li class="mui-table-view-cell">
            Item 3
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
      msg: "test"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.project-list {
  height: 100%;
}
</style>
