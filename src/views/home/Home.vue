<template>
    <div id="home">
        <nav-bar class="navbar"><div slot="center">购物达人</div></nav-bar>
    </div>
</template>
<script>

import NavBar from '../../components/common/navbar/NavBar'
export default {
    name:'Home',
    components:{        
    NavBar
    }
}
</script>
<style scoped>
  #home {
    /*position: relative;*/
    height: 100vh;
  }
    .navbar{
         background-color: var(--color-tint);
        text-align: center;
        color: #f0f0f0;
    }
</style>