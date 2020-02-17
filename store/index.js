export const actions = {
    // nuxtServerInit必须声明在根模块
    // 参数1 action 上下文
    // 参数2 组件上下文
    nuxtServerInit({commit},{app}){
        const token = app.$cookies.get("token")
        if(token){
            console.log("nuxtServerInit:token:"+token)
            commit("user/SET_TOKEN",token)
        }
    }
}
