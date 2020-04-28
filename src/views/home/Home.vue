<template>
  <div id="home">
    <nav-bar class="navbar"><div slot="center">购物达人</div></nav-bar>
  </div>
</template>
<script>
import NavBar from "../../components/common/navbar/NavBar";
import { getHomeMulitidata } from "network/home";
export default {
  name: "Home",
  components: {
    NavBar,
  },
  data() {
    return {
      banners: "",
      recommends: "",
    };
  },
  //生命周期函数：created 在创建时调用
  created() {
    //调用函数
    getHomeMulitidata().then((res) => {
      this.banners = res;
      this.recommends = res;
    });
  },
};
</script>
<style scoped>
#home {
  /*position: relative;*/
  height: 100vh;
}
.navbar {
  background-color: var(--color-tint);
  text-align: center;
  color: #f0f0f0;
}
</style>
