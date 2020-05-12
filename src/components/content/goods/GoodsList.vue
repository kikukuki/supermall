<template>
  <div class="goods">
    <goods-item v-for="(item,index) in goods" :key="index" :goodslist="item"></goods-item>
    <!-- <button @click="listcilick">1234567</button> -->
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
  methods: {
    listcilick() {
      console.log(this.goods);
    }
  }
};
</script>
<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>