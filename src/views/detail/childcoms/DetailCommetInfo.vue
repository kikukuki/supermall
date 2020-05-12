<template>
  <div class="comment-info" v-if="Object.keys(Rates).length !== 0">
    <div class="comment">
      <div>
        <span>用户评价</span>
      </div>
      <div class="header-more">
        <span>更多</span>
        <i class="arrow-right"></i>
      </div>
    </div>
    <div class="us-name">
      <div class="shop-title">
        <img :src="Rates.list[0].user.avatar" />
        <span>{{Rates.list[0].user.uname}}</span>
      </div>
      <div class="com-content">
        <div class="com-title">
          <span>{{Rates.list[0].content}}</span>
        </div>
        <div class="com-created">
          <span>{{Rates.list[0].created|showDate}}</span>
          <span>{{Rates.list[0].style}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { formatDate } from "../../../common/unils";
export default {
  name: "DetailCommentInfo",
  props: {
    Rates: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    showDate: function(value) {
      let date = new Date(value * 1000);
      return formatDate(date, "yyyy-MM-dd");
    }
  }
};
</script>
<style scoped>
.comment-info {
  padding: 20px 8px;
  border-bottom: 5px solid #f2f5f8;
}
.comment {
  display: flex;
  border-bottom: 2px solid #f2f5f8;
  line-height: 40px;
}
.comment span {
  color: #222;
  font-size: 16px;
}
.header-more {
  position: absolute;
  right: 12px;
}
.us-name {
  padding: 20px 8px;
}
.shop-title {
  line-height: 45px;
  /* 让元素垂直中心对齐 */
  display: flex;
  align-items: center;
}
.shop-title img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.com-content {
  padding: 15px 0;
}
.com-title span {
  font-size: 14px;
  color: #222;
  line-height: 2;
}
.com-created {
  font-size: 13px;
  line-height: 2.5;
}
</style>