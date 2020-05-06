<template>
  <div id="home">
    <nav-bar class="navbar">
      <div slot="center">购物达人</div>
    </nav-bar>

    <Scroll class="content" ref="scroll" :probetype="3" @scroll="ContentScroll">
      <div>
        <home-swiper :banners="banners" class="swiper"></home-swiper>
        <home-feature-view :recommends="recommends"></home-feature-view>
        <HomeRecommendView></HomeRecommendView>
        <tab-control :titles="['流行', '新款', '精选']" class="tab-control"></tab-control>
        <goods-list :goods="goods"></goods-list>
        <!-- <div class="goods-img">
          <ul v-for="(item, index) in 40" :key="index">
            <li class="img-li">
              <img src="../../assets/img/goods/gods.jpg" class="li-image" />
            </li>
          </ul>
        </div>-->
      </div>
    </Scroll>
    <BackTop @click.native="BacktopClick" v-show="isShow"></BackTop>
  </div>
</template>
<script>
import HomeSwiper from "./homechiled/HomeSwiper";
import HomeFeatureView from "./homechiled/HomeFeatureView";
import HomeRecommendView from "./homechiled/HomeRecommendView";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabcontrol/TabControl";
import Scroll from "components/common/scroll/scroll";
import BackTop from "components/content/backtop/BackTop";
import GoodsList from "components/content/goods/GoodsList";

import { getHomeMulitidata, getHomeGoods } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeFeatureView,
    HomeRecommendView,
    TabControl,
    Scroll,
    BackTop,
    GoodsList
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 1, list: [] },
        new: { page: 1, list: [] },
        sell: { page: 1, list: [] }
      },
      isShow: false,
      shangping: "../../assets/img/goods/gods.jpg"
    };
  },
  //生命周期函数：created 在创建时调用
  created() {
    //调用函数
    this.getHomeMulitidata();
    //请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    //这是普通方法

    //回到顶部的方法
    BacktopClick() {
      this.$refs.scroll.scrollTop(0, 0, 800);
    },
    ContentScroll(position) {
      // console.log(position);
      this.isShow = -position.y > 1000;
    },

    //这是数据请求的函数、方法
    getHomeMulitidata() {
      getHomeMulitidata().then(res => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },

    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        // console.log(...res.data.data.list);
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
      });
    }
  }
};
</script>
<style scoped>
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
  /* margin-top: 44px; */
  /* padding-top: 44px; */
}
/* .tab-control {
  position: sticky;
  top: 44px;
} */
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.li-image {
  width: 42%;
  height: 45%;
}
</style>
