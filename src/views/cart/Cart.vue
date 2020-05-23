<template>
  <div id="Cart">
    <nav-bar class="cart-nav-center">
      <div slot="center">购物车({{ cartCount }})</div>
    </nav-bar>
    <cart-list></cart-list>
		<cart-botton-bar></cart-botton-bar>
  </div>
</template>
<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import CartList from './cartchild/CartList'
	import CartBottonBar from './cartchild/CartBottonBar'

  import {
    mapGetters
  } from 'vuex'

  export default {
    name: "Cart",
    components: {
      NavBar,
      CartList,
			CartBottonBar
    },
    data() {
      return {
        count: 0,
      };
    },
    computed: {
      //第一种简单写法
      cartLength() {
        return this.$store.state.cartList.length
      },
      //第二种 mapGetters 写法
      ...mapGetters(['cartCount']),

      //第三种 mapGetters 写法
      ...mapGetters({
        length: 'cartCount',
        list: 'cartList'
      })
    },
  };
</script>
<style scoped>
	#Cart{
		height: 100vh;
	}
  .cart-nav-center {
    background-color: var(--color-tint);
    text-align: center;
    color: #f0f0f0;
  }
</style>