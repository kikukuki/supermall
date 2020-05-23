import Vue from 'vue'
import vuex from 'vuex'

//导入重构的代码
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// 插件的使用步骤
// 1安装插件
Vue.use(vuex)
//2、创建对象
const store = new vuex.Store({
	state: {
		cartList: []
	},
	mutations,
	actions,
	getters
})
//3、导出store对象
export default store