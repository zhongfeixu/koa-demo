const Router = require("koa-router");
const router = new Router();

router.get('/', (ctx, next) => {
    ctx.body = '{"name":"徐忠菲"}'
})

module.exports = router