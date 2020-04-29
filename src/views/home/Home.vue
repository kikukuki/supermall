<template>
  <div id="home">
    <nav-bar class="navbar">
      <div slot="center">购物达人</div>
    </nav-bar>
    <div>
      <home-swiper :banners="banners" class="swiper"></home-swiper>
      <home-feature-view :recommends="recommends"></home-feature-view>
      <HomeRecommendView></HomeRecommendView>
      <TabControl
        :titles="['流行', '新款', '精选']"
        class="tab-control"
      ></TabControl>
      <ul>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
      </ul>
    </div>
  </div>
</template>
<script>
import HomeSwiper from "./homechiled/HomeSwiper";
import HomeFeatureView from "./homechiled/HomeFeatureView";
import HomeRecommendView from "./homechiled/HomeRecommendView";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabcontrol/TabControl";

import { getHomeMulitidata, getHomeGoods } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeFeatureView,
    HomeRecommendView,
    TabControl,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
    };
  },
  //生命周期函数：created 在创建时调用
  created() {
    //调用函数
    this.getHomeMulitidata();
    this.getHomeGoods("pop");
  },
  methods: {
    getHomeMulitidata() {
      getHomeMulitidata().then((res) => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },

    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        console.log(res);
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
      });
    },
  },
};
</script>
<style>
#home {
  position: relative;
  height: 100vh;
}

.navbar {
  background-color: var(--color-tint);
  text-align: center;
  color: #fff;
}
.swiper {
  margin-top: 22px;
}
.tab-control {
  position: sticky;
  top: 44px;
}
</style>
