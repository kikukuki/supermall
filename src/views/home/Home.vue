<template>
  <div id="home">
    <nav-bar class="navbar">
      <div slot="center">购物达人</div>
    </nav-bar>
    <home-swiper :binners="banners"></home-swiper>
  </div>
</template>
<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import { getHomeMulitidata } from "../../network/home";

  import HomeSwiper from '../home/homechiled/HomeSwiper.vue'

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper
    },
    data() {
      return {
        banners: [],
        recommends: [],
      };
    },
    methods: {},
    //生命周期函数：created 在创建时调用
    created() {
      //调用函数
      getHomeMulitidata().then((res) => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
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