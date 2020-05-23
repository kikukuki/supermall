<template>
	<div class="tab-menu">
		<Scroll class="scr-content">
			<div class="menu-item">
				<div class="tab-item-title" v-for="(item,index) in cateGoryMenu" :key='index' @click="tabMenuClick(index)" :class="{active:index==currentIdex}">
					{{item.title}}
				</div>
			</div>
		</Scroll>
	</div>
</template>


<script>
	import Scroll from 'components/common/scroll/scroll'

	export default {
		name: 'CateDoryTabMenu',
		data() {
			return {
				currentIdex: 0
			}
		},
		components: {
			Scroll
		},
		props: {
			cateGoryMenu: {
				type: Array,
				default () {
					return []
				}
			}
		},
		methods: {
			tabMenuClick(index) {
				this.currentIdex = index
				this.$emit('TabMenuClick',index)
			}
		}
	}
</script>

<style scoped>
.tab-menu{
	width: 23%;

}

	.scr-content {
		
		width: 6.25rem;
		
		background-color: #f6f6f6;
		position: absolute;
		box-sizing: border-box;
		top: 0px;
		bottom: 49px;
		left: 0;
		right: 0;
	}

	.tab-item-title {
		height: 2.8125rem;
		line-height: 2.8125rem;
		text-align: center;
	}

	.menu-item {
		width: 6.25rem;
		background-color: #f6f6f6;
	}

	.tab-item-title.active {
		font-weight: 700;
		color: var(--color-high-text);
		background-color: #fff;
		border-left: 3px solid var(--color-high-text);
	}
</style>
