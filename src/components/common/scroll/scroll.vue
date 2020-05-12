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
    probeType: {
      type: Number,
      default: 0
    },
    pullupload: {
      type: Boolean,
      default: false
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
      probeType: this.probeType,
      pullUpLoad: this.pullupload
    });
    //监听滚动位置
    // if (this.probeType == 2 || probeType == 3) {
    this.scroll.on("scroll", position => {
      // console.log(position);
      this.$emit("scroll", position);
    });
    // }

    //监听页面scroll滚动到底部
    if (this.pullupload) {
      // console.log(this.pullupload);
      this.scroll.on("pullingUp", () => {
        // console.log("上拉加载");
        this.$emit("pullingUp");
      });
    }

    //解决上下滑动停滞的方法
    // this.scroll.refresh();
  },
  methods: {
    scrollTop(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
    //监听图片加载事件
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    }
  }
};
</script>
<style scoped></style>
