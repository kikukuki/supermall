// import {
//     debounce
// } from "../common/unils"
// export const ItemImage = {
//     data() {
//         return {
//             ItemImgLestener: null
//         }
//     },
//     mounted() {
//         //this.$refs.scroll.refresh对这个函数进行防抖操作
//         const refresh = debounce(this.$refs.scroll.refresh, 500);
//         //对事件监听的保存
//         this.ItemImgLestener = () => {
//             refresh();
//         };
//         this.$bus.$on("imageItemLoad", this.ItemImgLestener);
//     },
// }