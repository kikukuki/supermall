<template>
  <div class="param-info" v-if="Object.keys(DetailParams).length !== 0">
    <div>
      <table v-for="(table,tab) in DetailParams.rule.tables" :key="tab" class="info-size">
        <tr v-for="(item,index) in table" :key="index">
          <td v-for="(tr,indtr) in item" :key="indtr">{{tr}}</td>
        </tr>
      </table>
      <table>
        <tr v-for="(info ,index) in DetailParams.info.set" :key="index">
          <td>{{info.key}}</td>
          <td class="set-value">{{info.value}}</td>
        </tr>
      </table>
      <div class="param-img">
        <img :src="DetailParams.info.images[0]" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailParamInfo",
  props: {
    DetailParams: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
<style scoped>
.param-info {
  width: 100%;
  border-bottom: 5px solid #f2f5f8;
  padding: 25px 10px;
}
.param-info table {
  width: 100%;
  border-collapse: collapse;
  font-size: 15px;
}
.param-info table tr {
  height: 42px;
  border-bottom: 2px solid #f2f5f8;
}
.set-value {
  color: #eb4868;
}
.param-img {
  width: 100%;
}
.param-img img {
  width: 100%;
}
</style>