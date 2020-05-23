<template>
	<div id="Category">
		<nav-bar class="cate-nav-center">
			<div slot="center">商品分类</div>
		</nav-bar>
		<div class="content">
			<cate-dory-tab-menu :cateGoryMenu='cateGoryMenu' @TabMenuClick='TabMenuClick'></cate-dory-tab-menu>
			<scroll class="scroll-content">
				<div>
					<tab-content-category :subcategories="Showsubcategories"></tab-content-category>
					<tab-control :titles="['综合', '新品', '销量']"
					@tabClick='tabClick'></tab-control>
					<tab-content-detail :getCategoryDetail='ShowgetCategoryDetail'></tab-content-detail>
				</div>
			</scroll>
		</div>
	</div>
</template>
<script>
	import NavBar from 'components/common/navbar/NavBar'
	import CateDoryTabMenu from './childcoms/CateDoryTabMenu'
	import TabContentCategory from './childcoms/TabContentCategory'
	import TabControl from 'components/content/tabcontrol/TabControl'
	import TabContentDetail from './childcoms/TabContentDetail'

	import Scroll from 'components/common/scroll/scroll'

	import {
		getCategory,
		getSubcategory,
		getCategoryDetail
	} from '../../network/category'

	export default {
		name: 'Category',
		components: {
			NavBar,
			CateDoryTabMenu,
			TabContentCategory,
			TabContentDetail,
			TabControl,

			Scroll
		},
		data() {
			return {
				cateGoryMenu: [],
				categoryData: {},
				currentIndex: -1,
				miniWallkeys: 0,
				currentType: 'pop'
			}
		},
		created() {
			// console.log(this.Showsubcategories)
			getCategory().then(res => {
				// const datalist = res.data
				// console.log(res.data)
				//1、获取分类导航栏数据
				this.cateGoryMenu = res.data.data.category.list
				// console.log(this.cateGoryMenu)
				//2、初始化子类别的数据
				// console.log(this.cateGoryMenu)
				for (let i = 0; i < this.cateGoryMenu.length; i++) {
					this.categoryData[i] = {
						subcategories: {},
						categoryGetList: {
							'pop': [],
							'new': [],
							'sell': []
						},
					}
				}
				this._getSubcategories(0)
			})
		},
		methods: {
			//请求数据方法的封装
			_getSubcategories(index) {
				this.currentIndex = index
				this.miniWallkeys = this.cateGoryMenu[index].miniWallkey
				const mailKey = this.cateGoryMenu[index].maitKey;
				getSubcategory(mailKey).then(res => {
					this.categoryData[index].subcategories = res.data
					this.categoryData = {
						...this.categoryData
					}
					// console.log(res.data)
					this._getCategoryDetail('pop')
					this._getCategoryDetail('new')
					this._getCategoryDetail('sell')
				})

			},
			_getCategoryDetail(type) {
				const miniWallkey = this.cateGoryMenu[this.currentIndex].miniWallkey;
				getCategoryDetail(miniWallkey, type).then(res => {
					this.categoryData[this.currentIndex].categoryGetList[type] = res.data
					// this.categoryGetDetail[this.currentType].list.push(res.data)
					// console.log(this.categoryData[this.currentIndex].categoryGetList[type])
				})
			},

			//分类导航栏的点击事件
			TabMenuClick(index) {
				// console.log(index)
				this._getSubcategories(index)
			},
			tabClick(index){
				switch(index){
					case 0:
					this.currentType='pop';
					break;
					case 1:
					this.currentType='new';
					break;
					case 2:
					this.currentType='sell';
					break
				}
			}
		},
		computed: {
			Showsubcategories() {
				if (this.currentIndex == -1) {
					// console.log('123')
					return {}
				} else {
					// console.log(this.categoryData[this.currentIndex].subcategories.data)
					return this.categoryData[this.currentIndex].subcategories.data
				}
			},
			ShowgetCategoryDetail() {
				// console.log(this.currentIndex)
				if (this.currentIndex === -1) {
					return {}
				} else {
					
					// console.log(this.categoryData[this.currentIndex].categoryGetList[this.currentType])
					return this.categoryData[this.currentIndex].categoryGetList[this.currentType]
					// return this.categoryData[this.currentIndex].categoryGetList[this.currentType]
				}
			}
		}
	}
</script>
<style>
	#Category {
		height: 100%;
	}

	.cate-nav-center {
		background-color: var(--color-tint);
		text-align: center;
		color: #f0f0f0;
	}

	.content {
		position: absolute;
		left: 0;
		right: 0;
		top: 44px;
		bottom: 49px;

		display: flex;
	}

	.scroll-content {
		height: 100%;
		flex: 1;
		margin-left: 0.625rem;
		margin-top: 0.725rem;
		position: absolute;
		left: 23%;
		top: 0;
		bottom: 0;
		right: 0;
	}
</style>
