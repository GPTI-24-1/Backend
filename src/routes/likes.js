const Router = require('koa-router');
const dotenv = require('dotenv');
dotenv.config();

const router = new Router();

router.get('likes.list', '/', async (ctx) => {
  try {
    const likes = await ctx.orm.Likes.findAll();
    ctx.body = likes;
    ctx.status = 200;
  } catch (error) {
    ctx.body = error;
    ctx.status = 400;
  }
});

router.get('likes.show', '/:rut', async (ctx) => {
  try {
    const like = await ctx.orm.Likes.findAll({ where: { rut: ctx.params.rut } });
    if (like) {
      ctx.body = like;
      ctx.status = 200;
    } else {
      ctx.body = { error: 'Like not found' };
      ctx.status = 404;
    }
  } catch (error) {
    ctx.body = error;
    ctx.status = 400;
  }
});

router.post('likes.create', '/', async (ctx) => {
    rut = ctx.request.body.rut;
    shop_id = ctx.request.body.shop_id;

    if (rut == null || shop_id == null) {
        ctx.body = { error: 'Missing parameters' };
        ctx.status = 400;
        return;
    }
    // Check if exists
    const user = await ctx.orm.User.findOne({ where: { rut: rut } });
    if (!user) {
        ctx.body = { error: 'User not found' };
        ctx.status = 404;
        return;
    }
    const shop = await ctx.orm.Shops.findOne({ where: { id: shop_id } });
    if (!shop) {
        ctx.body = { error: 'Shop not found' };
        ctx.status = 404;
        return;
    }

    // check if like exists
    const like = await ctx.orm.Likes.findOne({ where: { rut: rut, shop_id: shop_id } });
    if (like) {
        ctx.body = { error: 'Like already exists' };
        ctx.status = 400;
        return;
    }


  try {
    const like = await ctx.orm.Likes.create(ctx.request.body);
    ctx.body = like;
    ctx.status = 201;
  } catch (error) {
    ctx.body = error;
    ctx.status = 400;
  }
});

router.delete('likes.delete', '/:rut/:shop_id', async (ctx) => {
    const rut = ctx.params.rut;
    const shop_id = ctx.params.shop_id;
    console.log(rut);
    console.log(shop_id);
    // check if like exists
    const like = await ctx.orm.Likes.findOne({ where: { rut: rut, shop_id: shop_id } });

    if (!like) {
        ctx.body = { error: 'Like not found' };
        ctx.status = 404;
        return;
    }
    
  try {
    const deleted = await ctx.orm.Likes.destroy({
      where: { rut: rut, shop_id: shop_id }
    });
    if (deleted) {
        ctx.body = { message: 'Like deleted' };
      ctx.status = 204;
    } else {
      ctx.body = { error: 'Like not found' };
      ctx.status = 404;
    }
  } catch (error) {
    ctx.body = error;
    ctx.status = 400;
  }
});

module.exports = router;
