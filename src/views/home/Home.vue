<template>
  <div id="home">
    <nav-bar class="navbar">
      <div slot="center">购物达人</div>
    </nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      class="tab-control1"
      @tabClick="tabClick"
      ref="tabcontrol1"
      v-show="isTabFixed"
    ></tab-control>

    <Scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pullupload="true"
      @scroll="ContentScroll"
      @pullingUp="GoodsMore"
    >
      <div>
        <home-swiper :banners="banners" @SwrperImageLoad="SwrperImageLoad"></home-swiper>
        <home-feature-view :recommends="recommends"></home-feature-view>
        <HomeRecommendView></HomeRecommendView>
        <tab-control
          :titles="['流行', '新款', '精选']"
          class="tab-control"
          @tabClick="tabClick"
          ref="tabcontrol"
        ></tab-control>
        <goods-list :goods="showGoods"></goods-list>
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
import { debounce } from "../../common/unils";
// import { ItemImage } from "../../common/mixins";

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
  // mixins: [ItemImgLestener],
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
      creatType: "pop",
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
      ItemImgLestener: null
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
  mounted() {
    //图片加载完成的事件监听调用
    //this.$refs.scroll.refresh对这个函数进行防抖操作
    const refresh = debounce(this.$refs.scroll.refresh, 500);
    //对事件监听的保存
    this.ItemImgLestener = () => {
      refresh();
    };
    this.$bus.$on("imageItemLoad", this.ItemImgLestener);
  },
  methods: {
    //这是事件监听的普通方法

    //监听tabControl
    tabClick(index) {
      switch (index) {
        case 0:
          this.creatType = "pop";
          break;
        case 1:
          this.creatType = "new";
          break;
        case 2:
          this.creatType = "sell";
          break;
      }
      this.$refs.tabcontrol1.activeIndex = index;
      this.$refs.tabcontrol.activeIndex = index;
    },

    //回到顶部的方法
    BacktopClick() {
      this.$refs.scroll.scrollTop(0, 0, 800);
    },
    //Scroll组件方法
    ContentScroll(position) {
      // console.log(position);
      //小图标的隐藏与显示
      this.isShow = -position.y > 1000;

      //判断TabContrul是否悬停
      this.isTabFixed = -position.y > this.tabOffsetTop;
    },
    //上拉加载更多
    GoodsMore() {
      // console.log("123");
      this.getHomeGoods(this.creatType);
    },
    //获取子组件 TabControl的offsetTop
    //所有组件都有一个el 属性，：用于获取组件中的元素
    SwrperImageLoad() {
      this.tabOffsetTop = this.$refs.tabcontrol.$el.offsetTop;
      // console.log(this.$refs.tabcontrol.$el.offsetTop);
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
        //完成上拉加载更多
        this.$refs.scroll.finishPullUp();
      });
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.creatType].list;
    }
  },
  //<keep-live>的钩子函数
  //这是进入时调用
  activated() {
    this.$refs.scroll.scrollTop(0, this.saveY, 0);
    this.$refs.scroll.refresh(); //这是在重新刷新refresh
  },
  //这里离开时调用
  deactivated() {
    //保存Y值
    this.saveY = this.$refs.scroll.scroll.y;

    //2、取消全局时间的监听
    this.$bus.$off("imageItemLoad", this.ItemImgLestener);
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
/* .swiper {
  margin-top: 44px; */
/* padding-top: 44px;
} */
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
.tab-control1 {
  position: relative;
  z-index: 9;
  padding-top: 44px;
  padding-bottom: 10px;
}
</style>
