<template>
  <div v-if="Object.keys(goodsShop).length !== 0" class="base-info">
    <div class="title">
      <span>{{goodsShop.title}}</span>
    </div>
    <div class="price">
      <span class="n-price">{{goodsShop.price}}</span>
      <span class="o-price">{{goodsShop.oldPrice}}</span>
      <a class="discount">{{goodsShop.discountDesc}}</a>
    </div>
    <div class="columns">
      <span>{{goodsShop.columns[0]}}</span>
      <span>{{goodsShop.columns[1]}}</span>
      <span class="sapn-services">{{goodsShop.services[goodsShop.services.length-1].name}}</span>
    </div>
    <div class="service">
      <span v-for="(item,index) in goodsShop.services.length-1" :key="index">
        <img :src="goodsShop.services[item-1].icon" />
        {{goodsShop.services[item-1].name}}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailBaseInfo",
  data() {
    return {};
  },
  props: {
    goodsShop: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
<style scoped>
.base-info {
  height: 20%;
  width: 100%;
  border-bottom: 5px solid #f2f5f8;
  padding: 0 8px;
}
.title {
  height: 40px;
  width: 100%;
  color: #222;
  margin-top: 15px;
  font-size: 17px;
}
.price {
  height: 40px;
  width: 100%;
  line-height: 40px;
}
.n-price {
  font-size: 24px;
  color: var(--color-high-text);
}
.o-price {
  text-decoration: line-through;
}
.discount {
  font-size: 12px;
  padding: 2px 5px;
  color: #fff;
  background-color: var(--color-high-text);
  border-radius: 8px;
  margin-left: 5px;

  /*让元素上浮一些: 使用相对定位即可*/
  position: relative;
  top: -8px;
}
.columns {
  height: 35px;
  width: 100%;
  display: flex;
  line-height: 35px;
  justify-content: space-between;
  border-bottom: 1px solid #f2f5f8;
}
.columns span {
  flex: 1;
  font-size: 14px;
  color: #999;
}
.service {
  line-height: 60px;
  display: flex;
  justify-content: space-between;
}
.service img {
  width: 15px;
  height: 15px;
  position: relative;
  top: 4px;
}
.service span {
  font-size: 14px;
  color: #222;
}
/* .sapn-services {
  padding-right: 0;
} */
</style>