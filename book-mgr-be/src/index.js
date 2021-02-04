const koa = require("koa");

const app = new koa();

//context => ctx
//通过app.use注册中间件
//每次请求进来中间件都会被运行
//context上下文 当前请求的相关内容都在这里面
//用来处理请求

app.use(async (ctx, next) => {
  const { path = "/", request: req } = ctx;
  if (path === "/user/123") {
    ctx.body = "返回用户123的信息";
  }
  if (path === "/settings") {
    ctx.body = "返回一些设置的信息";
  }
  await next();
});
app.use(async (ctx) => {
  ctx.body = "找不到资源";
});
app.listen(3000, () => {
  console.log("启动成功");
});
