<template>
    <swiper>
        <swiper-item :v-for="item in banners">
            <a :href="item.link">
                <img :src="item.image" ali="">
            </a>
        </swiper-item>
    </swiper>
</template>
<script>
    import Swiper from '~components/content/swiper/Swiper.vue'
    import SwiperItem from '../../../components/content/swiper/SwiperItem.vue'

    export default {
        name:"HomeSwiper",
        components:{
            Swiper,
            SwiperItem
        },
        props:{
            banners:{
                type:Array,
                default:[]
            }
        }
    }
</script>