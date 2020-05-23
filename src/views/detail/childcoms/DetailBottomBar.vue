<template>
    <div class="detail-bot-bar">
        <div class="bar-item bar-left">
            <div>
                <i class="icon service"></i>
                <span class="text">客服</span>
            </div>
            <div>
                <i class="icon shop"></i>
                <span class="text">店铺</span>
            </div>
            <div>
                <i class="icon select"></i>
                <span class="text">收藏</span>
            </div>
        </div>
        <div class="bar-item bar-right">
            <div class="bar-shop-cart" @click="addCart">
                <span>加入购物车</span>
            </div>
            <div class="bar-shop" @click="ShopPurchase">
                <span>购买</span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'DetailBottomBar',
		methods:{
			addCart(){
				this.$emit("addCart")
		},
		ShopPurchase(){
			this.$emit("ShopPurchase")
		}
    }}
</script>
<style scoped>
    .detail-bot-bar {
        height: 58px;
        width: 100%;
        position: fixed;
        background-color: #ffffff;
        right: 0;
        bottom: 0;
        display: flex;
        text-align: center;

    }

    .bar-item {
        display: flex;
        flex: 1
    }

    .bar-item>div {
        flex: 1;
    }

    .bar-shop-cart {
        background-color: #ffe817
    }

    .bar-shop {
        background-color: #f69;
        color: #ffffff
    }

    .icon {
        display: block;
        width: 22px;
        height: 22px;
        margin: 10px auto 3px;
        background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
    }

    .service {
        background-position: 0 -54px;
    }

    .shop {
        background-position: 0 -98px;
    }

    .text {
        font-size: 13px
    }

    .bar-right {
        line-height: 58px
    }
</style>