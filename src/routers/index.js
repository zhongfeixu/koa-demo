const fs = require("fs")
const path = require("path")
const Router = require("koa-router");
const router = new Router();
const files = fs.readdirSync(__dirname);
files
    .filter(file => ~file.search(/^[^\.].*\.js$/))
    .forEach(file => {
        console.log(file)
        const file_name = file.substr(0, file.length - 3);
        const file_entity = require(path.join(__dirname, file));
        if (file_name !== 'index') {
            router.use(`/${file_name}`, file_entity.routes(), file_entity.allowedMethods())
        }
    })
router.get('/', ctx => {
    ctx.body = fs.readFileSync(path.resolve(__dirname, '../views/index.html'), { encoding: "utf-8" })
});
module.exports = router