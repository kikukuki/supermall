<template>
    <div id="Category">
        <nav-bar class="cate-nav-center"><div slot="center">商品分类</div></nav-bar>
    </div>
</template>
<script>
import NavBar from '../../components/common/navbar/NavBar'
export default {
    name:'Category',
    components:{
        NavBar
    }
}
</script>
<style>
    .cate-nav-center{
        background-color: var(--color-tint);
        text-align: center;
        color: #f0f0f0;
    }
</style>