<template>
    <div id=swiper>
        <dvi class="swiper">
            <slot></slot>
        </dvi>
        <slot name="indicator"></slot>
        <div class="indicator">
            <slot name="indicator">
                <dvi></dvi>
            </slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Swiper",
        props: {
            interval: {

            }
        }
    }
</script>