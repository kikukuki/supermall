<template>
  <div class="feature">
    <div v-for="(item, index) in recommends" :key="index" class="feature-item">
      <a href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeFeatureView",
  props: {
    recommends: {
      type: Array,
      default: null,
    },
  },
};
</script>
<style scoped>
.feature {
  width: 100%;
  display: flex;
  margin-top: 10px;
  border-bottom: 10px solid #eee;
  padding: 0 0 30px;
}
.feature-item {
  flex: 1;
  text-align: center;
}
.feature img {
  width: 80%;
  height: 80%;
}
</style>
