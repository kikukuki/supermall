<template>
  <div>
    <Swiper>
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" />
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
    SwiperItem,
  },
  props: {
    banners: {
      type: Array,
      default: null,
    },
  },
};
</script>
