<template>
  <div id="nav-bar">
    <div class="nav-left">
      <slot name="left"></slot>
    </div>
    <div class="nav-center">
      <slot name="center"></slot>
    </div>
    <div class="nav-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavBar"
};
</script>
<style>
#nav-bar {
  position: relative;
  z-index: 9999;

  display: flex;

  height: 44px;
  line-height: 44px;
  text-align: center;

  border-bottom: 1px solid #eee;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.08);
  position: fixed;
  height: 44px;
  top: 0;
  width: 100%;
}
.nav-left {
  width: 70px;
}
.nav-right {
  width: 70px;
}
.nav-center {
  flex: 1;
}
</style>
