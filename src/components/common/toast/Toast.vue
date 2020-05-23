<template>
	<div class="toast" v-show="isShow">
		<div>{{message}}</div>
	</div>
</template>


<script>
	export default {
		name: 'Toast',
		data() {
			return {
				message: '',
				isShow: false
			}
		},
		methods: {
			show(message, duration=1500) {
				this.isShow = true,
					this.message = message
				console.log('123')
				setTimeout(() => {
					this.isShow = false,
						this.message = ''
				}, duration)
			}
		}
	}
</script>

<style scoped>
	.toast {
		position: fixed;
		width: 40%;
		height: 8%;
		top: 42%;
		left: 50%;
		z-index: 999;
		color: #FFFFFF;
		background-color: rgba(0, 0, 0, .7);
		padding: 8px 10px;
		transform: translate(-50%, 50%);
		text-align: center;
		line-height: 50px;
		font-size: 1rem;
		border-radius:10px 10px 10px 10px
	}
</style>
