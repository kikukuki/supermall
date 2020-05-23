export default {
    //增加数量

    //在mutations里面添加数据可以更好的追踪数据来源
    addCounter(state, payload) {
        payload.count++;
    },
    addToCart(state, payload) {
        payload.checked = true;
        state.cartList.push(payload)
    }
}