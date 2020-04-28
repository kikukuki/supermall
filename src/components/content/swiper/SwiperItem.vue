<template>
    <dvi class="slide">
        <slot>

        </slot>
    </dvi>
</template>
<script>
    export default {
        name: 'slide'
    }
</script>

<style scoped>
    .slide {
        width: 100%;
        flex-shrink: 0;
    }

    .slide img {
        width: 100%;
    }
</style>