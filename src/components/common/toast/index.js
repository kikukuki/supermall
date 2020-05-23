import Toast from './Toast'
//封装一个插件
const obj ={}

obj.install=function(Vue){
	//1、创建组件构造器
		const toastContrustor=Vue.extend(Toast)
		
	//2、new 的方式 根据组件构造器，可以创建一个组件对象
	const toast = new toastContrustor;
	
	//3、将组件对象手动挂载到某一个元素
	toast.$mount(document.createElement('div'))
	
	//4、toast.$el对应的就是div
	document.body.appendChild(toast.$el)
	
	//5、最后加入
	Vue.prototype.$toast=toast
}

export default obj