const Router = require('koa-router');
const dotenv = require('dotenv');
dotenv.config();

const router = new Router();

router.get('users.list', '/', async (ctx) => {
  try {
    const users = await ctx.orm.User.findAll();
    ctx.body = users;
    ctx.status = 200;
  } catch (error) {
    ctx.body = error;
    ctx.status = 400;
  }
});

router.get('users.show', '/:id', async (ctx) => {
  try {
    const users = await ctx.orm.User.findOne({ where: { id: ctx.params.id } });
    ctx.body = users;
    ctx.status = 200;
  } catch (error) {
    ctx.body = error;
    ctx.status = 400;
  }
});


module.exports = router;

