<!--
 * @Author: your name
 * @Date: 2020-02-17 09:51:57
 * @LastEditTime : 2020-02-17 11:35:13
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-app\pages\detail.vue
 -->
<template>
    <div>
        <pre v-if="goodInfo">{{goodInfo}}</pre>
    </div>
</template>
<script>
export default {
    name:'',
    async asyncData({$axios,params,error}) {
        if (params.id) {
            // 1.运行时间在组件创建前，this不能用
            // 2.nuxt传递上下文
            const {data:goodInfo} = await $axios.$get("/api/detail",{params})
            if(goodInfo){
              // 此处返回的数据会和data中的数据合并
              return {goodInfo}
            }
            // 重定向到错误页面
            error({statusCode:400,message:'数据查询失败！'})
        }else{
            return {goodInfo:null}
        }

  },
    components:{},
    methods:{}
}
</script>
<style scoped>
</style>