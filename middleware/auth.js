/*
 * @Author: your name
 * @Date: 2020-02-17 11:47:57
 * @LastEditTime : 2020-02-17 16:39:56
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-app\middleware\auth.js
 */
export default function({route,redirect,store}){
    if(!store.state.user.token){
        redirect('/login?redirect='+route.path)
    }
}