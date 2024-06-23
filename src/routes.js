const Router = require('koa-router');
const jwtMiddleware = require('koa-jwt');
const dotenv = require('dotenv');
// import aurhentication routes
const authentication = require('./routes/authentication');
const users = require('./routes/users');
const shops = require('./routes/shops');

dotenv.config();

const router = new Router();

// Rutas
router.use('/auth', authentication.routes());
router.use('/users', users.routes());
router.use('/shops', shops.routes());

// Rutas protegidas
router.use(jwtMiddleware({ secret: process.env.JWT_SECRET }));

// router.use('/games', games.routes());

module.exports = router;
