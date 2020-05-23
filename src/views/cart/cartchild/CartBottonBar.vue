<template>
	<div class="cart-bar">
		<div class="check-button">
			<check-button :isChecked="isSelectAll" @click.native="CheckClick"></check-button>
		</div>
		<div class="check-all">
			<span>全选</span>
		</div>
		<div class="amount">
			<span>合计：{{totalPrice}}</span>
		</div>
		<div class="check-accounts" @click="CalcClick">
			<span>去计算{{totalLength}}</span>
		</div>
	</div>
</template>


<script>
	import CheckButton from './CheckButton'
	export default {
		name: 'CartBottonBar',
		components: {
			CheckButton
		},
		computed: {

			totalPrice() {
				return '￥' + this.$store.state.cartList.filter(item => {
					return item.checked //筛选是否是选中的数据
				}).reduce((preValue, item) => {
					// console.log(preValue)
					return preValue + item.price * item.count
				}, 0).toFixed(2)
			},
			totalLength() {
				return this.$store.state.cartList.filter(item => item.checked).length
			},
			isSelectAll() {
				if (this.$store.state.cartList.length == 0) {
					return false
				}
				//数据的高阶函数
				//1、使用filter
				// return !(this.$store.state.cartList.filter(item => !item.checked).length)

				//2、使用find
				return !this.$store.state.cartList.find(item => !item.checked)

				//3、使用普通的遍历数组
				// for (let item of this.$store.state.cartList) {
				// 	if (!item.checked) {
				// 		return false
				// 	}	
				// }
				// return true


			}
		},
		methods: {
			CheckClick() {
				if (this.isSelectAll) {
					//全部选中
					this.$store.state.cartList.forEach(item => item.checked = false)
				} else {
					//全部不选中或者部分没选中
					this.$store.state.cartList.forEach(item => item.checked = true)
				}
			},
			CalcClick(){
				if(!this.isSelectAll){
					this.$toast.show('请选择购买商品',1500)
				}
			}
		}
	}
</script>

<style scoped>
	.cart-bar {
		height: 45px;
		width: 100%;
		position: fixed;
		bottom: 49px;
		display: flex;
		background-color: #EEEEEE;
		display: flex;
	}

	.check-left {
		width: 75%;
		height: 45px;
		text-align: center;
		display: flex;
		flex: 1;
	}

	.check-button {
		padding-top: 3.5%;
		padding-left: 4%;
	}

	.check-all {
		padding-top: 3.5%;
		padding-left: 2%;
	}

	.amount {
		padding-top: 3.5%;
		padding-left: 5%;
	}

	.check-accounts {
		width: 28%;
		height: 2.8125rem;
		background-color: #FF4500;
		position: fixed;
		right: 0;
		text-align: center;
		line-height: 2.8125rem;
		color: #FFFFFF;
	}
</style>
