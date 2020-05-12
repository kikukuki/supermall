<template>
  <div>
    <Navbar class="navbar">
      <div slot="left" class="back" @click="imgclick">
        <img src="../../../assets/img/common/back.svg" />
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item,index) in title"
          :key="index"
          class="title-item"
          :class="{active:index==currentIndex}"
          @click="titleclick(index)"
        >{{item}}</div>
      </div>
    </Navbar>
  </div>
</template>
<script>
import Navbar from "components/common/navbar/NavBar";

export default {
  name: "DetailNvaBar",
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  components: {
    Navbar
  },
  methods: {
    imgclick() {
      this.$router.back();
    },
    titleclick(index) {
      this.currentIndex = index;
    }
  }
};
</script>

<style scoped>
.title {
  display: flex;
}
.title-item {
  flex: 1;
}
.back img {
  margin-top: 12px;
}
.active {
  color: var(--color-high-text);
}
.navbar {
  background-color: white;
}
</style>