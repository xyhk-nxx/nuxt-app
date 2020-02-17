<!--
 * @Author: your name
 * @Date: 2020-02-17 09:44:59
 * @LastEditTime : 2020-02-17 11:30:09
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-app\pages\index.vue
 -->
<template>
  <div>
    <ul>
      <li v-for="good in goods" :key="good.id">
        <nuxt-link :to="{name:'index-id',params:{id:good.id}}">
          <span>{{good.text}}</span>
          <span>￥{{good.price}}</span>
          <button @click.prevent="addCart(good)">加入购物车</button>
        </nuxt-link>
      </li>
    </ul>
    <nuxt-child />
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: "课程列表",
      meta: [
        { name: "description", hid: "description", content: "set page meta" }
      ],
      link: [{ rel: "favicon", href: "favicon.icon" }]
    };
  },
  async asyncData({$axios,error}) {
    // 1.运行时间在组件创建前，this不能用
    // 2.nuxt传递上下文
    const {ok,goods} = await $axios.$get("/api/goods")
    if(ok){
      // 此处返回的数据会和data中的数据合并
      return {goods}
    }
    // 重定向到错误页面
    error({statusCode:400,message:'数据查询失败！'})

  },
  components: {},
  methods: {
    addCart() {}
  }
};
</script>
<style scoped>
</style>

