/*
 * @Author: your name
 * @Date: 2020-02-17 11:51:54
 * @LastEditTime : 2020-02-17 12:08:04
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-app\store\user.js
 */
export const state =()=>({
    token:''
})

export const mutations = {
    SET_TOKEN(state,token){
        state.token = token
    }
}
export const getters = {
    isLogin(state){
        return !!state.token
    }
}
export const actions = {
    // 利用nuxt提供的inject注入
    login({commit,getters},u){
        // this指store实例
        return this.$login(u).then(({token})=>{
            if(token){
                commit("SET_TOKEN",token)
            }
            return getters.isLogin;
        })
    }
}