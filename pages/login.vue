<!--
 * @Author: your name
 * @Date: 2020-02-17 09:51:57
 * @LastEditTime : 2020-02-17 12:14:12
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-app\pages\detail.vue
 -->
<template>
    <div>
        <h3>用户登录</h3>
        <el-input  type="text" v-model="user.username"/>
        <el-input type="password" v-model="user.password" />
        <el-button @click="onLogin">登录</el-button>
    </div>
</template>
<script>
export default {
    layout:'blank',
    name:'',
    data(){
        return {
            user:{
                username:'',
                password:""
            }
        }
    },
    components:{},
    methods:{
        onLogin(){
            this.$store.dispatch("user/login",this.user).then(ok=>{
                if (ok) {
                    // const redirect = this.$route.query.redirect ||  "/"
                    const redirect = this.$route.query.redirect || '/'
                    console.log( this.$route.query);
                    
                    this.$router.push(redirect);

                }
            })
        }
    }
}
</script>
<style scoped>
</style>