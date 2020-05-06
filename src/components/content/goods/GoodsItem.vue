<template>
  <div class="goodsitem">
    <!-- {{goodslist}} -->
    <!-- <img :src="goodslist.show.img" alt /> -->
    <button @click="btnclick">124</button>
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
    btnclick() {
      console.log(this.goodslist[0].show.img);
    }
  },
  mounted() {}
};
</script>