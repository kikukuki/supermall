<template>
  <div id="Cart">
    <nav-bar class="cart-nav-center"
      ><div slot="center">购物车({{ count }})</div></nav-bar
    >
  </div>
</template>
<script>
import NavBar from "../../components/common/navbar/NavBar";
export default {
  name: "Cart",
  components: {
    NavBar,
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>
<style>
.cart-nav-center {
  background-color: var(--color-tint);
  text-align: center;
  color: #f0f0f0;
}
</style>
