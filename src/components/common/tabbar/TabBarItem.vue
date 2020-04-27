<template>
    <div id="tab-bar-item">
        <div class="item-icon" v-show="!isActive"><slot name='icon'></slot></div>
        <div class="item-active-icon" v-show="!isActive"><slot name='active-icon'></slot></div>
        <div class="item-text" v-show="!isActive"><slot name='text'></slot></div>
    </div>
</template>
<script>
export default {
    name="TabBarItem",
    computed: {
        isActive(){
            return this.$route.path.indexOf(this.link) !== -1
        }
    },
}
</script>