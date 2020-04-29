<template>
  <div class="tabcontrol">
    <div
      v-for="(item, index) in titles"
      :key="index"
      class="item-tabcontrol"
      :class="{ active: index == activeIndex }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      activeIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.activeIndex = index;
    },
  },
};
</script>
<style scoped>
.tabcontrol {
  display: flex;
  font-size: 17px;
}
.item-tabcontrol {
  text-align: center;
  flex: 1;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  z-index: 9;
}
.item-tabcontrol span {
  padding: 5px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 2px solid red;
}
</style>
