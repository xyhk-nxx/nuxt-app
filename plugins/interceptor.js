/*
 * @Author: your name
 * @Date: 2020-02-17 16:43:23
 * @LastEditTime : 2020-02-17 16:57:35
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-app\plugins\interceptor.js
 */
export default function({$axios,store}){
    $axios.onRequest(request=>{
        if(store.state.user.token){
            request.headers.Authorization = "Bearer "+store.state.user.token;
        }
        console.log("请求拦截");
        return request;
    })

    $axios.onResponse(response=>{
        console.log("响应拦截");
        return response;
    })
}