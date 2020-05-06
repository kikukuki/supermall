<template>
  <div class="wrapper" ref="wrapper">
    <div class="center">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: "scroll",
  props: {
    probetype: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    //创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probetype
    });
    //监听滚动位置
    this.scroll.on("scroll", position => {
      // console.log(position);
      this.$emit("scroll", position);
    });

    ///监听上拉加载事件
  },
  methods: {
    scrollTop(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    }
  }
};
</script>
<style scoped></style>
