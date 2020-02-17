/*
 * @Author: your name
 * @Date: 2020-02-17 11:57:43
 * @LastEditTime : 2020-02-17 11:59:26
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-app\plugins\api-inject.js
 */

//  参数1 上下文 
//  参数2 inject 函数
export default function({$axios},inject){
    inject("login",user=>{
        return $axios.$post("/api/login",user)
    })
}