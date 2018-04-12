<template>
  <div class="project-list">
    <div class="mui-content">
      <div class="mui-card" style="margin-bottom: 35px;">
        <ul class="mui-table-view">
          <li class="mui-table-view-cell">
            <a class="mui-navigate-right">
              Item 1
            </a>
          </li>
          <li class="mui-table-view-cell">
            <a class="mui-navigate-right">
              Item 2
            </a>
          </li>
          <li class="mui-table-view-cell">
            <a class="mui-navigate-right">
              Item 3
            </a>
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
