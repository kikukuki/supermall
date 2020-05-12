<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <!-- //不要随意销毁    排除keep-alive -->
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "./components/content/maintabbar/MainTabBar";
export default {
  name: "app",
  components: {
    MainTabBar
  }
};
</script>

<style>
@import "./assets/css/base.css";
@import "./assets/css/normalize.css";

#app {
  position: relative;
}
</style>
