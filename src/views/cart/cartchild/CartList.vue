<template>
	<div class="cart-list">
		<scroll class="content">
			<cart-list-item v-for="(item,index) in cartList" :key='index' :product='item'></cart-list-item>
		</scroll>
	</div>
</template>
<script>
	import Scroll from "components/common/scroll/scroll"
	import CartListItem from './CartListItem'
	import {
		mapGetters
	} from 'vuex'
	export default {
		name: 'CartList',
		components: {
			Scroll,
			CartListItem
		},
		computed: {
			...mapGetters(['cartList'])
		},
	}
</script>

<style scoped>
	.cart-list {
		/* height: calc(100%-44px-49px); */
		position: absolute;
		top: 44px;
		bottom: 49px;
		width: 100%;
		background-color: #fff;
	}

	.content {
		background-color: #fff;
		position: absolute;
		top: 0;
		bottom: 49px;
		left: 0;
		right: 0;
	}
</style>
