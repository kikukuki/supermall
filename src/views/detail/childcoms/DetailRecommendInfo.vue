<template>
  <div class="recommend-info">
    <div class="recom-title">
      <span>热门推荐</span>
    </div>
    <div class="goods-recommend">
      <goods-list :goods="Recommend"></goods-list>
    </div>
  </div>
</template>
<script>
  import GoodsList from "components/content/goods/GoodsList";

  export default {
    name: "DetailRecommendInfo",
    components: {
      GoodsList
    },
    props: {
      Recommend: {
        type: Array,
        default () {
          return [];
        }
      }
    }
  };
</script>
<style scoped>
  .recommend-info {
    width: 100%;

    padding: 20px 8px;
    border-bottom: 5px solid #f2f5f8;
  }

  .goods-recommend {
    padding-top: 20px;
    padding-bottom: 60px;
  }
</style>