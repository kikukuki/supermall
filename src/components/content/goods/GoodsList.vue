<template>
  <div class="goods">
    <goods-item v-for="(item,index) in goods" :key="index" :goodslist="item"></goods-item>
  </div>
</template>
<script>
import GoodsItem from "../goods/GoodsItem";
export default {
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    GoodsItem
  },
  methods: {}
};
</script>