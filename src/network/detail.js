import {
  request
} from "./request";
export function getDetail(iid) {
  return request({
    url: "/detail",
    params: {
      iid,
    },
  });
}

export function getRecommend() {
  return request({
    url: "/recommend",
  });
}

export class GoodsShop {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.price = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discountDesc = itemInfo.discountDesc; //优惠
    this.desc = itemInfo.desc;
    this.columns = columns;
    this.services = services;
    this.highNowPrice = itemInfo.highNowPrice;
    this.lowPrice = itemInfo.lowPrice;
  }
}