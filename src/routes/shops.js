const Router = require('koa-router');
const dotenv = require('dotenv');
dotenv.config();

const router = new Router();

router.get('shops.list', '/', async (ctx) => {
  try {
    const shops = await ctx.orm.Shops.findAll();
    ctx.body = shops;
    ctx.status = 200;
  } catch (error) {
    ctx.body = error;
    ctx.status = 400;
  }
});

router.get('shops.show', '/:id', async (ctx) => {
  try {
    const shop = await ctx.orm.Shops.findOne({ where: { id: ctx.params.id } });
    if (shop) {
      ctx.body = shop;
      ctx.status = 200;
    } else {
      ctx.body = { error: 'Shop not found' };
      ctx.status = 404;
    }
  } catch (error) {
    ctx.body = error;
    ctx.status = 400;
  }
});

router.post('shops.create', '/', async (ctx) => {
  try {
    const shop = await ctx.orm.Shops.create(ctx.request.body);
    ctx.body = shop;
    ctx.status = 201;
  } catch (error) {
    ctx.body = error;
    ctx.status = 400;
  }
});

router.put('shops.update', '/:id', async (ctx) => {
  try {
    const [updated] = await ctx.orm.Shops.update(ctx.request.body, {
      where: { id: ctx.params.id }
    });
    if (updated) {
      const updatedShop = await ctx.orm.Shops.findOne({ where: { id: ctx.params.id } });
      ctx.body = updatedShop;
      ctx.status = 200;
    } else {
      ctx.body = { error: 'Shop not found' };
      ctx.status = 404;
    }
  } catch (error) {
    ctx.body = error;
    ctx.status = 400;
  }
});

router.delete('shops.delete', '/:id', async (ctx) => {
  try {
    const deleted = await ctx.orm.Shops.destroy({
      where: { id: ctx.params.id }
    });
    if (deleted) {
      ctx.status = 204;
    } else {
      ctx.body = { error: 'Shop not found' };
      ctx.status = 404;
    }
  } catch (error) {
    ctx.body = error;
    ctx.status = 400;
  }
});

module.exports = router;
