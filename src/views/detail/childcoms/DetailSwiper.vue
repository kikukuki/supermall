<template>
  <div>
    <Swiper class="detail-swiper">
      <SwiperItem v-for="(item,index) in SwiperImage" :key="index">
        <img :src="item" />
      </SwiperItem>
    </Swiper>
  </div>
</template>
<script>
import Swiper from "../../../components/content/swiper/Swiper";
import SwiperItem from "../../../components/content/swiper/SwiperItem";
export default {
  name: "DetailSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    SwiperImage: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.detail-swiper {
  margin-top: 44px;
  height: 300px;
}
</style>