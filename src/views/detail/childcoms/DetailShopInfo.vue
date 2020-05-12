<template>
  <div class="shop-info">
    <div class="shop-title">
      <img :src="ShopInfo.shopLogo" />
      <span>{{ShopInfo.name}}</span>
    </div>
    <div class="shop-center">
      <div class="moddile-left">
        <div class="boder-bottom">
          <div class="top-nums">
            <p class="cSells size">{{ShopInfo.cSells|sellCountFilter}}</p>
            <p class="t-size">总销量</p>
          </div>
          <div class="bottom-written">
            <p class="cGoods size">{{ShopInfo.cGoods}}</p>
            <p class="t-size">全部宝贝</p>
          </div>
        </div>
      </div>
      <div class="moddile-right">
        <div class="score" v-for="(item,index) in ShopInfo.score" :key="index">
          <span>{{item.name}}</span>
          <span class="scrre-span">{{item.score}}</span>
          <a class="better" :class="{'better-more':item.isBetter}">
            <span>{{item.isBetter ? '高':'低'}}</span>
          </a>
        </div>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">
        <span>进店逛逛</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailShopInfo",
  props: {
    ShopInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },

  filters: {
    sellCountFilter: function(value) {
      if (value < 10000) return value;
      return (value / 10000).toFixed(1) + "万";
    }
  }
};
</script>
<style scoped>
.shop-info {
  height: 240px;
  width: 100%;
  border-bottom: 5px solid #f2f5f8;
  padding: 25px 8px;
}
.shop-title {
  line-height: 45px;
  /* 让元素垂直中心对齐 */
  display: flex;
  align-items: center;
}
.shop-title img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.shop-center {
  width: 100%;
  height: 60%;
  padding-top: 20px;
  align-items: center;
  display: flex;
}
.top-nums {
  float: left;
  padding-left: 15%;
  width: 50%;
}
.bottom-written {
  float: left;
  padding-left: 12%;
}
.size {
  font-size: 20px;
  color: #222;
}
.t-size {
  font-size: 14px;
  padding-top: 8px;
}
.moddile-left {
  width: 50%;
  height: 80%;
  padding-top: 20px;
}
.boder-bottom {
  height: 100%;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  /* text-align: center; */
}
.moddile-right {
  width: 50%;
  height: 100%;
}
.score {
  padding-left: 15px;
  padding-top: 10px;
  font-size: 14px;
  color: #333;
}
.scrre-span {
  /* color: red; */
  padding-left: 10px;
}
.better {
  background-color: #5ea732;
  color: #fff;
  margin-left: 10px;
}
.better-more {
  background-color: #f13e3a;
}
.shop-bottom {
  width: 100%;
  text-align: center;
  margin-top: 10px;
}
.enter-shop {
  display: inline-block;
  font-size: 16px;
  background-color: #f2f5f8;
  width: 33%;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 10px;
  /* margin-left: 34%; */
}
</style>