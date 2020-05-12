<template>
  <div>
    <Swiper>
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt @load="ImageLoad" />
        </a>
      </swiper-item>
    </Swiper>
  </div>
</template>
<script>
import Swiper from "../../../components/content/swiper/Swiper";
import SwiperItem from "../../../components/content/swiper/SwiperItem";

export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  data() {
    return {
      isLoad: false
    };
  },
  props: {
    banners: {
      type: Array,
      default: null
    }
  },
  methods: {
    ImageLoad() {
      if (!this.isLoad) {
        this.$emit("SwrperImageLoad");
        this.isLoad = true;
      }
    }
  }
};
</script>
