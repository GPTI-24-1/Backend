const Router = require('koa-router');
const jwtMiddleware = require('koa-jwt');
const dotenv = require('dotenv');

dotenv.config();

const router = new Router();

// Rutas
router.use('/territories', territories.routes());
router.use('/auth', authentication.routes());
// Rutas protegidas
router.use(jwtMiddleware({ secret: process.env.JWT_SECRET }));

router.use('/users', users.routes());
router.use('/games', games.routes());

module.exports = router;
