export default {
	addCart(context, payload) {
		return new Promise((resolve, reject) => {
			//1、查找是否有相同的数据
			let oldProdect = context.state.cartList.find(item => item.iid == payload.iid)
			//2、判断oldProdect
			if (oldProdect) {
				context.commit('addCounter', oldProdect)
				resolve('商品数量加1')
			} else {
				payload.count = 1;
				// context.state.cartList.push(payload)
				context.commit('addToCart', payload)
				resolve('添加购物车成功')
				reject('')
			}
		})

	}
}
