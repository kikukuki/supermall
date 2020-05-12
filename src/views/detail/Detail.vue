<template>
  <div class="detail">
    <detail-navbar class="detail-navbar"></detail-navbar>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="ContentScroll">
      <div>
        <detail-swiper :SwiperImage="topImages" class="swiperimage"></detail-swiper>
        <detail-base-info :goodsShop="goodsShop"></detail-base-info>
        <detail-shop-info :ShopInfo="ShopInfo"></detail-shop-info>
        <detail-goods-info :DetailInfo="DetailInfo"></detail-goods-info>
        <detail-param-info :DetailParams="DetailParams"></detail-param-info>
        <detail-comment-info :Rates="Rates"></detail-comment-info>
        <detail-recommend-info :Recommend="RecommendList"></detail-recommend-info>
      </div>
    </scroll>
    <back-top v-show="isShow" @click.native="BacktopClick"></back-top>
  </div>
</template>
<script>
import DetailNavbar from "../detail/childcoms/DetailNvaBar";
import DetailSwiper from "../detail/childcoms/DetailSwiper";
import DetailBaseInfo from "../detail/childcoms/DetailBaseInfo";
import DetailShopInfo from "../detail/childcoms/DetailShopInfo";
import DetailGoodsInfo from "../detail/childcoms/DetailGoodsInfo";
import DetailParamInfo from "../detail/childcoms/DetailParamInfo";
import DetailCommentInfo from "../detail/childcoms/DetailCommetInfo";
import DetailRecommendInfo from "../detail/childcoms/DetailRecommendInfo";

import BackTop from "../../components/content/backtop/BackTop";

import Scroll from "components/common/scroll/scroll";

import { getDetail, GoodsShop, getRecommend } from "../../network/detail";
import { debounce } from "../../common/unils";
export default {
  name: "Detail",
  components: {
    DetailNavbar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailRecommendInfo,
    BackTop,

    Scroll
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goodsShop: {},
      ShopInfo: {},
      DetailInfo: {},
      DetailParams: {},
      Rates: {},
      RecommendList: [],
      isShow: false,
      ItemImgLestener: null
    };
  },
  created() {
    //保存iid
    this.iid = this.$route.params.iid;
    //请求 getDetail 数据
    getDetail(this.iid).then(res => {
      const data = res.data.result;
      //1、获取顶部的轮播图片
      this.topImages = data.itemInfo.topImages;

      //2、获取商品标题信息
      this.goodsShop = new GoodsShop(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //3、获取店铺信息
      this.ShopInfo = data.shopInfo;

      //4、获取商品信息
      this.DetailInfo = data.detailInfo;

      //5、获取参数信息
      this.DetailParams = data.itemParams;

      //6、获取评论信息
      this.Rates = data.rate;
    });

    //请求详情页数据
    getRecommend().then(res => {
      this.RecommendList = res.data.data.list;
      console.log(this.RecommendList);
    });
  },
  methods: {
    //Scroll组件方法
    ContentScroll(position) {
      // console.log(position);
      //小图标的隐藏与显示
      this.isShow = -position.y > 1000;
    },
    //回到顶部的方法
    BacktopClick() {
      this.$refs.scroll.scrollTop(0, 0, 800);
    }
  },
  mounted() {
    //图片加载完成的事件监听调用
    const refresh = debounce(this.$refs.scroll.refresh, 500);
    this.ItemImgLestener = () => {
      //imageItemLoad在GoodsItem组件中传回的方法
      refresh();
    };
    this.$bus.$on("imageItemLoad", this.ItemImgLestener);
  },
  //这是离开时会调用这个函数
  destroyed() {
    this.$bus.$off("imageItemLoad", this.ItemImgLestener);
  }
};
</script>
<style scoped>
.detail {
  height: 100vh;
  background-color: #fff;
  position: relative;
  z-index: 9;
}
/* 在用scroll组件的时候必须加上这个样式，才能实现滚动效果 */
.content {
  background-color: #fff;
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
}
/* .swiperimage {
  padding-top: 40px;
} */
</style>