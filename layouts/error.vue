<!--
 * @Author: your name
 * @Date: 2020-02-17 10:39:33
 * @LastEditTime : 2020-02-17 10:58:43
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-app\layouts\error.vue
 -->
<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">页面不存在</h1>
    <h1 v-else>应用发生错误异常</h1>
    <nuxt-link to="/">首 页</nuxt-link>
  </div>
</template>
<script>
export default {
  layout: "blank",
  props: ["error"]
};
</script>