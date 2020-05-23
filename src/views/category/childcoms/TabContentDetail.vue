<template>
	<div>
		<goods-list :goods='getCategoryDetail'></goods-list>
		
	</div>
</template>


<script>
	import GoodsList from 'components/content/goods/GoodsList'
	
	export default {
		name: 'TabContentDetail',
		components: {
			GoodsList,
		},
		props: {
			getCategoryDetail: {
				type:Array,
				default(){
					return []
				}
			}
		},
		created() {
			console.log(this.getCategoryDetail)
		}
	}
</script>

<style scoped>
	.detail-item{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
</style>
