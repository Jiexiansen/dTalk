<style lang="less" >
@import "./page/styles/common-styles.less";
</style>
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
}
/* 路由动画 */

.fade-enter {
  opacity: 0;
}

.fade-enteer-acive {
  transition: opacity 0.1s;
  transform: rotateX(180deg);
}

.fade-leave {
  opacity: 1;
}

.fade-leave-active {
  opacity: 0;
  transition: opacity 0.1s;
}
</style>
