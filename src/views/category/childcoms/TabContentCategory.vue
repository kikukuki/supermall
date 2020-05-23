<template>
	<div>
		<grid-view>
			<div class="item" v-for="(item,index) in subcategories.list" :key='index'>
				<a>
					<img :src="item.image" class="item-image" />
					<span>{{item.title}}</span>
				</a>
			</div>
		</grid-view>
	</div>
</template>


<script>
	import GridView from 'components/common/gridview/GridView'
	export default {
		name: 'TabContentCategory',
		components: {
			GridView
		},
		props: {
			subcategories: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		mounted() {}
	}
</script>

<style scoped>
	.item {
		text-align: center;
		font-size: 0.75rem;
		width: 6.2rem;
		padding: 0.6rem;

	}

	.item-image {
		width: 100%;
	}
</style>
