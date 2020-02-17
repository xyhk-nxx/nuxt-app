/*
 * @Author: your name
 * @Date: 2020-02-17 11:01:46
 * @LastEditTime : 2020-02-17 11:43:01
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-app\server\api.js
 */
const Koa = require("koa")
const app = new Koa();
const bodyParser = require("koa-bodyparser")
// 添加了前缀
const router = require("koa-router")({prefix:"/api"})
// 设置cookie加密秘钥
app.keys = ["some secret","another secret"]

const goods = [
    {id:1,text:'web',price:899},
    {id:2,text:'java',price:699},
]

router.get("/goods",ctx=>{
    ctx.body={
        ok:1,
        goods
    }
})

router.get("/detail",ctx=>{
    console.log( ctx.query.id);
    
    ctx.body={
        ok:1,
        // data:goods.find(good=>good.id === ctx.query.id)
        data: goods.find(good => good.id == ctx.query.id)

    }
})

router.post("/login",ctx=>{
    const user = ctx.request.body;
    if (user.username === "jerry" && user.password === "123") {
        const token = "a mock token"
        // 将token存入cookie
        ctx.cookies.set("token",token)
        ctx.body = {ok:1,token}
    } else {
        ctx.body={ok:0}
    }
})
// 解析post数据并注册路由
app.use(bodyParser())
app.use(router.routes());
app.listen(8080, () => console.log('api服务已启动'))