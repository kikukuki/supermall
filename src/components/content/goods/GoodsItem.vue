<template>
  <div class="goodsitem" @click="goodsClick">
	<!-- 第一种普通加载 -->
    <!-- <img  :src="getImg" alt @load="imageLoad" /> -->
		<!-- //第二种使用图片懒加载的插件 -->
		<img v-lazy="getImg" alt @load="imageLoad" />
    <div class="goods-info">
      <p>{{goodslist.title}}</p>
      <span class="price">{{goodslist.price}}</span>
      <span class="collect">{{goodslist.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsItem",
  props: {
    goodslist: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    getImg() {
      return (
        this.goodslist.img || this.goodslist.image || this.goodslist.show.img
      );
    }
  },
  methods: {
    //监听图片加载是否完成用   @Load
    imageLoad() {
      this.$bus.$emit("imageItemLoad");
    },
    goodsClick() {
      this.$router.push("/detail/" + this.goodslist.iid);
    }
  },
	created() {
		// console.log(this.goodslist)
	},
  mounted() {}
};
</script>

<style scoped>
.goodsitem {
  padding-bottom: 40px;
  position: relative;
  width: 47%;
}
.goodsitem img {
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  font-size: 12px;
  text-align: center;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: 0;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>