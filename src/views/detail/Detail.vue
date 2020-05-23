<template>
  <div class="detail">
    <detail-navbar class="detail-navbar" ref="Nav" @titleclick="titleclick"></detail-navbar>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="ContentScroll">
      <detail-swiper :SwiperImage="topImages" class="swiperimage"></detail-swiper>
      <detail-base-info :goodsShop="goodsShop"></detail-base-info>
      <detail-shop-info :ShopInfo="ShopInfo"></detail-shop-info>
      <detail-goods-info :DetailInfo="DetailInfo"></detail-goods-info>
      <detail-param-info ref="paramstop" :DetailParams="DetailParams"></detail-param-info>
      <detail-comment-info ref="commenttop" :Rates="Rates"></detail-comment-info>
      <detail-recommend-info ref="recommendtop" :Recommend="RecommendList"></detail-recommend-info>
    </scroll>
    <detail-bottom-bar @addCart="addToCart" @ShopPurchase="ShopPurchase"></detail-bottom-bar>
    <back-top v-show="isShow" class="back-top" @click.native="BacktopClick"></back-top>
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
  import DetailBottomBar from "../detail/childcoms/DetailBottomBar"

  import BackTop from "../../components/content/backtop/BackTop";

  import Scroll from "components/common/scroll/scroll";
	
	import { mapActions } from 'vuex'

  import {
    getDetail,
    GoodsShop,
    getRecommend
  } from "../../network/detail";
  import {
    debounce
  } from "../../common/unils";
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
      DetailBottomBar,
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
        ItemImgLestener: null,
        TabTitleNabBarYS: [0, 0, 0, 0],
        getThemeTopY: null,
        currentIndex: 0
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
				console.log(data)
        //3、获取店铺信息
        this.ShopInfo = data.shopInfo;

        //4、获取商品信息
        this.DetailInfo = data.detailInfo;

        //5、获取参数信息
        this.DetailParams = data.itemParams;
        // console.log(this.DetailParams)
        //6、获取评论信息
        this.Rates = data.rate.list[0];
        // console.log(this.Rates)


      });


      //请求详情页数据
      getRecommend().then(res => {
        this.RecommendList = res.data.data.list;
        //这是防抖操作
        this.getThemeTopY = debounce(() => {

          this.TabTitleNabBarYS = [];
          this.TabTitleNabBarYS.push(0);
          this.TabTitleNabBarYS.push(this.$refs.paramstop.$el.offsetTop + 25);
          this.TabTitleNabBarYS.push(this.$refs.commenttop.$el.offsetTop + 25);
          this.TabTitleNabBarYS.push(this.$refs.recommendtop.$el.offsetTop + 25);
          this.TabTitleNabBarYS.push(Number.MAX_VALUE)
        }, 100)

      });
    },
    methods: {
			//映射mapActions
			...mapActions(['addCart']),
			
      //Scroll组件方法
      ContentScroll(position) {
        // console.log(position);
        //小图标的隐藏与显示
        this.isShow = -position.y > 1000;

        //2用position.Y 的值和主题（页面）的值进行比较
        let length = this.TabTitleNabBarYS.length
        // console.log(length)
        // console.log(this.TabTitleNabBarYS[2])
        // console.log(this.currentIndex)

        //这是第一种写法
        // for (let i = 0; i < length; i++) {
        //   if ((this.currentIndex !== i) && ((i < length - 1 && -position.y >= this.TabTitleNabBarYS[i] && -position.y <
        //       this.TabTitleNabBarYS[i + 1]) || (i === length - 1 && -position.y >= this.TabTitleNabBarYS[i]))) {
        //     this.currentIndex = i
        //     this.$refs.Nav.currentIndex = this.currentIndex;
        //   }
        // }

        //这是第二种写法
        for (let i = 0; i < length - 1; i++) {
          if ((this.currentIndex !== i) && (-position.y >= this.TabTitleNabBarYS[i] && -position.y < this
              .TabTitleNabBarYS[i + 1])) {
            this.currentIndex = i
            this.$refs.Nav.currentIndex = this.currentIndex;
          }
        }
      },
      //回到顶部的方法
      BacktopClick() {
        this.$refs.scroll.scrollTop(0, 0, 800);
      },
      //这是顶部标题栏的点击事件
      titleclick(index) {
        // console.log(index)
        this.$refs.scroll.scrollTop(0, -this.TabTitleNabBarYS[index], 100)
      },
      addToCart() {
        //1、购物车需要展示的商品信息
        const product = {}
        product.image = this.topImages[0];
        product.title = this.goodsShop.title;
        product.desc = this.goodsShop.desc;
        product.price = this.goodsShop.lowPrice;
        product.iid = this.iid
        //2、将商品加入到购物车里面
				//普通使用$store.dispatch
        this.$store.dispatch('addCart', product).then(res=>{
					console.log(res)
					this.$toast.show(res,1500)
				})
				//使用映射{}
				// this.addCart(product)..then(res=>{
				// 	console.log(res)
				// })
      },
      ShopPurchase() {

      }
    },
    mounted() {
      //图片加载完成的事件监听调用
      const refresh = debounce(this.$refs.scroll.refresh, 500);
      this.ItemImgLestener = () => {
        //imageItemLoad在GoodsItem组件中传回的方法
        refresh();
        //在图片加载完成之后得到各组件
        this.getThemeTopY()
        // console.log(this.TabTitleNabBarYS)

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
    bottom: 0;
    left: 0;
    right: 0;
  }

  .detail-navbar {
    font-size: 14px
  }

  /* .swiperimage {
  padding-top: 40px;
} */
</style>