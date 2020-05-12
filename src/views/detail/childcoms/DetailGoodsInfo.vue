<template>
  <div class="goods-info" v-if="Object.keys(DetailInfo).length !== 0">
    <div class="info-desc">
      <div class="start"></div>
      <div class="desc">{{DetailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-ket">
      <span>{{DetailInfo.detailImage[0].key}}</span>
    </div>
    <div class="info-img">
      <img v-for="(item ,index) in DetailInfo.detailImage[0].list" :key="index" :src="item" />
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    DetailInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
<style scoped>
.goods-info {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}
.info-desc {
  width: 100%;
  padding: 0 20px;
}
.desc {
  /* height: 60px; */
  /* line-height: 60px; */
  padding: 20px 0;
}
.start {
  height: 1px;
  width: 30%;
  background-color: #a3a3a5;
  position: relative;
}
.end {
  height: 1px;
  width: 30%;
  background-color: #a3a3a5;
  position: relative;
  left: 68%;
}
.info-desc .start::before,
.info-desc .end::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  bottom: 0;
}
.info-desc .end::after {
  right: 0;
}
.info-ket {
  width: 100%;
  line-height: 30px;
  padding: 10px 20px;
  color: #333;
}
.info-img {
  width: 100%;
  padding: 8px 8px;
}
.info-img img {
  width: 100%;
}
</style>